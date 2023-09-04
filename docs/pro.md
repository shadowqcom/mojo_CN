# 进阶操作

## 参数化：编译时元编程
Mojo 支持编译器中内置的完整编译时元编程功能，作为一个单独的编译阶段——在解析、语义分析和 IR 生成之后，但在降低为特定目标代码之前。 它对运行时程序使用与元程序相同的宿主语言，并利用 MLIR 以可预测的方式表示和评估这些程序。

让我们看一些简单的例子。

### 定义参数化类型和函数
Mojo 结构和函数都可以参数化，但是一个例子可以帮助激发我们关心的原因。 让我们看一下“SIMD”类型，它代表硬件中的低级向量寄存器，其中包含标量数据类型的多个实例。 如今的硬件加速器正在获得奇异的数据类型，并且使用具有 512 位或更长 SIMD 向量的 CPU 并不少见。 硬件有很多多样性（包括许多品牌，如 SSE、AVX-512、NEON、SVE、RVV 等），但许多操作是常见的，并被数字和 ML 内核开发人员使用——这种类型将它们暴露给 Mojo 程序员。

这是来自 Mojo 标准库的 SIMD API 的非常简化和简化的版本。 我们使用 HeapArray 来存储此示例的 SIMD 数据，并使用循环在我们的类型上实现基本操作 - 我们这样做只是为了为了演示而模仿所需的 SIMD 类型行为。 真正的 Stdlib 实现由真正的 SIMD 指令支持，这些指令可通过 Mojo 直接使用 MLIR 的能力访问（请参阅高级 Mojo 功能部分中有关该主题的更多信息）。
```python
from List import VariadicList

struct MySIMD[size: Int]:
    var value: HeapArray

    # Create a new SIMD from a number of scalars
    fn __init__(inout self, *elems: Int):
        self.value = HeapArray(size, 0)
        let elems_list = VariadicList(elems)
        for i in range(elems_list.__len__()):
            self[i] = elems_list[i]

    fn __copyinit__(inout self, other: MySIMD[size]):
        self.value = other.value

    fn __getitem__(self, i: Int) -> Int:
        return self.value.data.load(i)
    
    fn __setitem__(self, i: Int, val: Int):
        return self.value.data.store(i, val)

    # Fill a SIMD with a duplicated scalar value.
    fn splat(self, x: Int) -> Self:
        for i in range(size):
            self[i] = x
        return self

    # Many standard operators are supported.
    fn __add__(self, rhs: MySIMD[size]) -> MySIMD[size]:
        let result = MySIMD[size]()
        for i in range(size):
            result[i] = self[i] + rhs[i]
        return result
    
    fn __sub__(self, rhs: Self) -> Self:
        let result = MySIMD[size]()
        for i in range(size):
            result[i] = self[i] - rhs[i]
        return result

    fn concat[rhs_size: Int](self, rhs: MySIMD[rhs_size]) -> MySIMD[size + rhs_size]:
        let result = MySIMD[size + rhs_size]()
        for i in range(size):
            result[i] = self[i]
        for j in range(rhs_size):
            result[size + j] = rhs[j]
        return result

    fn dump(self):
        self.value.dump()
```
Mojo 中的参数使用 PEP695 语法的扩展版本在方括号中声明。 它们的名称和类型类似于 Mojo 程序中的普通值，但它们是在编译时而非运行时由目标程序求值的。 运行时程序可以使用参数值——因为参数在编译时在运行时程序需要它们之前被解析——但编译时参数表达式可能不使用运行时值。

在上面的示例中，有两个声明的参数：`MySIMD` 结构由 size 参数参数化，`concat` 方法进一步由 `rhs_size` 参数参数化。 因为 MySIMD 是参数化类型，所以 `self` 参数的类型携带参数——完整的类型名称是 `MySIMD[size]`。 虽然写出来总是有效的（如 `_add__` 的返回类型所示），但这可能很冗长：我们建议像 `__sub__` 示例一样使用 `Self` 类型（来自 PEP673）。

Mojo Stdlib 提供的实际 `SIMD` 类型也在元素的数据类型上进行了参数化。  

### 使用参数化类型和函数
大小指定 `SIMD` 向量中元素的数量，下面的示例显示了我们的类型如何使用：
```python
# Make a vector of 4 elements.
let a = MySIMD[4](1, 2, 3, 4)

# Make a vector of 4 elements and splat a scalar value into it.
let b = MySIMD[4]().splat(100)

# Add them together and print the result
let c = a + b
c.dump()

# Make a vector of 2 elements.
let d = MySIMD[2](10, 20)

# Make a vector of 2 elements.
let e = MySIMD[2](70, 50)

let f = d.concat[2](e)
f.dump()

# Uncomment to see the error:
# let x = a + e # ERROR: Operation MySIMD[4]+MySIMD[2] is not defined

let y = f + a
y.dump()
```
请注意，`concat` 方法需要一个附加参数来指示第二个 `SIMD` 向量的大小：这是通过参数化对 `concat` 的调用来处理的。 我们的玩具 SIMD 类型显示了具体类型 (`Int`) 的使用，但参数的主要功能来自于定义参数算法和类型的能力，例如 定义参数算法非常容易，例如 与长度和 DType 无关的：
```python
from DType import DType
from Math import sqrt

fn rsqrt[width: Int, dt: DType](x: SIMD[dt, width]) -> SIMD[dt, width]:
    return 1 / sqrt(x)
```

Mojo 编译器在使用参数进行类型推断方面相当聪明。 请注意，此函数能够在不指定参数的情况下调用参数化 `sqrt(x)` 函数，编译器会推断其参数，就像您显式编写 `sqrt[width,type](x)` 一样。 另请注意，`rsqrt` 选择定义其第一个名为 `width` 的参数，但 `SIMD` 类型毫无疑问地将其命名为 `size`。

### 参数表达式只是 Mojo 代码
所有参数和参数表达式都使用与运行时程序相同的类型系统进行类型化：Int 和 DType 在 Mojo 标准库中作为结构实现。   
参数非常强大，支持在编译时使用带有运算符的表达式、函数调用等，就像运行时程序一样。   
这允许使用许多“依赖类型”功能，例如，您可能想要定义一个辅助函数来连接两个 SIMD 向量，就像我们在上面的示例中所做的那样：
```python
fn concat[len1: Int, len2: Int](lhs: MySIMD[len1], rhs: MySIMD[len2]) -> MySIMD[len1+len2]:
    let result = MySIMD[len1 + len2]()
    for i in range(len1):
        result[i] = lhs[i]
    for j in range(len2):
        result[len1 + j] = rhs[j]
    return result


let a = MySIMD[2](1, 2)
let x = concat[2,2](a, a)
x.dump()
```
请注意结果长度如何等于输入向量长度的总和，您可以使用简单的 + 运算来表示。   
举一个更复杂的例子，看看标准库中的 `SIMD.shuffle` 方法：它接受两个输入 `SIMD` 值，一个向量洗牌掩码作为列表，并返回一个与洗牌掩码长度匹配的 `SIMD`。

### 强大的编译时编程
虽然简单的表达式很有用，但有时您希望编写具有控制流的命令式编译时逻辑。 例如，`Math` 模块中的 `isclose` 函数对整数使用精确相等，但对浮点数使用接近比较。 您甚至可以进行编译时递归，例如 这是一个示例“树减少”算法，它将向量的所有元素递归地求和为一个标量：
```python
fn slice[new_size: Int, size: Int](x: MySIMD[size], offset: Int) -> MySIMD[new_size]:
    let result = MySIMD[new_size]()
    for i in range(new_size):
        result[i] = x[i + offset]
    return result

fn reduce_add[size: Int](x: MySIMD[size]) -> Int:
    @parameter
    if size == 1:
        return x[0]
    elif size == 2:
        return x[0] + x[1]

    # Extract the top/bottom halves, add them, sum the elements.
    alias half_size = size // 2
    let lhs = slice[half_size, size](x, 0)
    let rhs = slice[half_size, size](x, half_size)
    return reduce_add[half_size](lhs + rhs)
    
let x = MySIMD[4](1, 2, 3, 4)
x.dump()
print("Elements sum:", reduce_add[4](x))
```
这利用了 `@parameter if` 特性，这是一个在编译时运行的 if 语句。 它要求其条件是一个有效的参数表达式，并确保只有 if 的活分支被编译到程序中。

### Mojo 类型只是参数表达式
虽然我们已经展示了如何在类型中使用参数表达式，但在 Python 和 Mojo 中，类型注释本身可以是任意表达式。  
 Mojo 中的类型有一个特殊的元类型类型，允许定义类型参数算法和函数，例如我们可以扩展我们的 HeapArray 结构以支持任意类型的元素：
```python
struct Array[Type: AnyType]:
    var data: Pointer[Type]
    var size: Int
    var cap: Int

    fn __init__(inout self):
        self.cap = 16
        self.size = 0
        self.data = Pointer[Type].alloc(self.cap)

    fn __init__(inout self, size: Int, value: Type):
        self.cap = size * 2
        self.size = size
        self.data = Pointer[Type].alloc(self.cap)
        for i in range(self.size):
            self.data.store(i, value)

    fn __copyinit__(inout self, other: Self):
        self.cap = other.cap
        self.size = other.size
        self.data = Pointer[Type].alloc(self.cap)
        for i in range(self.size):
            self.data.store(i, other.data.load(i))
    
    fn __getitem__(self, i: Int) -> Type:
        return self.data.load(i)
    
    fn __setitem__(self, i: Int, value: Type):
        return self.data.store(i, value)
            
    fn __del__(owned self):
        self.data.free()

var v = Array[F32](4, 3.14)
print(v[0], v[1], v[2], v[3])
```







更多内容逐步翻译中，欢迎入群加入翻译工作。
如果迫切需要更多资料请查看[英文原版文档](https://docs.modular.com/mojo/notebooks/HelloMojo.html#let-and-var-declarations)。
