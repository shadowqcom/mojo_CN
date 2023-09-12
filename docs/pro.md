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

> 3.1400001049041748 3.1400001049041748 3.1400001049041748 3.1400001049041748

请注意，参数被用作参数的形式类型和函数的返回类型。 参数允许类型根据不同的用例提供不同的 API。`T` `value__getitem__Array`

还有许多其他情况可以从参数的更高级使用中受益。 例如，您可以并行执行闭包 N 次，并从上下文中输入一个值，如下所示：
```python
fn parallelize[func: fn (Int) -> None](num_work_items: Int):
    # Not actually parallel: see the 'algorithm' module for real implementation.
    for i in range(num_work_items):
        func(i)
```


另一个重要的例子是可变参数泛型，其中可能需要在异构类型列表上定义算法或数据结构，例如元组：
```python
struct Tuple[*Ts: AnyType]:
    var _storage : *Ts
```

尽管我们还没有足够的元类型助手，但我们将来应该能够编写类似的东西（尽管重载仍然是处理此问题的更好方法）：
```python
struct Array[T: AnyType]:
    fn __getitem__[IndexType: AnyType](self, idx: IndexType)
       -> (ArraySlice[T] if issubclass(IndexType, Range) else T):
       ...
```
### alias:命名参数表达式
想要命名编译时值是很常见的。 虽然定义了运行时值并定义了运行时常量，但我们需要一种方法来定义编译时临时值。 为此，Mojo 使用声明。`var` `let` `alias`

例如，该结构使用枚举器的别名实现一个简单的枚举，如下所示（实际实现细节略有不同）：`DType` `DType`
```python
struct DType:
    var value : UI8
    alias invalid = DType(0)
    alias bool = DType(1)
    alias int8 = DType(2)
    alias uint8 = DType(3)
    alias int16 = DType(4)
    alias int16 = DType(5)
    ...
    alias float32 = DType(15)
```
这允许客户端自然地用作参数表达式（也可以用作运行时值）。 请注意，这是在编译时调用运行时构造函数。`DType.float32` `DType`
```python
alias Float16 = SIMD[DType.float16, 1]
alias UInt8 = SIMD[DType.uint8, 1]

var x : Float16   # F16 works like a "typedef"
```
与 和 一样，别名遵循作用域，并且您可以按照预期在函数中使用本地别名。`var``let`
顺便说一句， 和 都被定义为类型别名。`None` `AnyType`

### 自动调整/自适应编译
Mojo 参数表达式允许您像在其他语言中一样编写可移植的参数算法，但是在编写高性能代码时，您仍然必须选择用于参数的具体值。 例如，在编写高性能数值算法时，您可能希望使用内存平铺来加速算法，但要使用的维度在很大程度上取决于可用的硬件功能、缓存的大小、融合到内核中的内容以及 许多其他繁琐的细节。

即使向量长度也可能难以管理，因为典型机器的向量长度取决于数据类型，而某些数据类型并不完全支持所有实现。 Mojo 通过在标准库中提供一个函数来提供帮助。 例如，如果您想将与向量长度无关的算法写入数据缓冲区，您可以这样编写：
`bfloat16` `autotune`
```python
from autotune import autotune, search
from benchmark import Benchmark
from memory.unsafe import DTypePointer
from algorithm import vectorize

fn buffer_elementwise_add_impl[
    dt: DType
](lhs: DTypePointer[dt], rhs: DTypePointer[dt], result: DTypePointer[dt], N: Int):
    """Perform elementwise addition of N elements in RHS and LHS and store
    the result in RESULT.
    """
    @parameter
    fn add_simd[size: Int](idx: Int):
        let lhs_simd = lhs.simd_load[size](idx)
        let rhs_simd = rhs.simd_load[size](idx)
        result.simd_store[size](idx, lhs_simd + rhs_simd)
    
    # Pick vector length for this dtype and hardware
    alias vector_len = autotune(1, 4, 8, 16, 32)

    # Use it as the vectorization length
    vectorize[vector_len, add_simd](N)

fn elementwise_evaluator[dt: DType](
    fns: Pointer[fn (DTypePointer[dt], DTypePointer[dt], DTypePointer[dt], Int) -> None],
    num: Int,
) -> Int:
    # Benchmark the implementations on N = 64.
    alias N = 64
    let lhs = DTypePointer[dt].alloc(N)
    let rhs = DTypePointer[dt].alloc(N)
    let result = DTypePointer[dt].alloc(N)

    # Fill with ones.
    for i in range(N):
        lhs.store(i, 1)
        rhs.store(i, 1)

    # Find the fastest implementation.
    var best_idx: Int = -1
    var best_time: Int = -1
    for i in range(num):
        @parameter
        fn wrapper():
            fns.load(i)(lhs, rhs, result, N)
        let cur_time = Benchmark(1).run[wrapper]()
        if best_idx < 0 or best_time > cur_time:
            best_idx = i
            best_time = cur_time
        print("time[", i, "] =", cur_time)
    print("selected:", best_idx)
    return best_idx

fn buffer_elementwise_add[
    dt: DType
](lhs: DTypePointer[dt], rhs: DTypePointer[dt], result: DTypePointer[dt], N: Int):
    # Forward declare the result parameter.
    alias best_impl: fn(DTypePointer[dt], DTypePointer[dt], DTypePointer[dt], Int) -> None

    # Perform search!
    search[
      fn(DTypePointer[dt], DTypePointer[dt], DTypePointer[dt], Int) -> None,
      buffer_elementwise_add_impl[dt],
      elementwise_evaluator[dt] -> best_impl
    ]()

    # Call the select implementation
    best_impl(lhs, rhs, result, N)
```

我们现在可以像往常一样调用我们的函数：
```python
let N = 32
let a = DTypePointer[DType.float32].alloc(N)
let b = DTypePointer[DType.float32].alloc(N)
let res = DTypePointer[DType.float32].alloc(N)
# Initialize arrays with some values
for i in range(N):
    a.store(i, 2.0)
    b.store(i, 40.0)
    res.store(i, -1)
    
buffer_elementwise_add[DType.float32](a, b, res, N)
print(a.load(10), b.load(10), res.load(10))
```
> time[ 0 ] = 24
> time[ 1 ] = 6
> time[ 2 ] = 4
> time[ 3 ] = 4
> time[ 4 ] = 4
> selected: 2
> 2.0 40.0 42.0

编译此代码的实例时，Mojo 会分叉此算法的编译，并通过测量在实践中最适合目标硬件的值来决定使用哪个值。 它评估表达式的不同值，并根据用户定义的性能评估器选择最快的值。 例如，因为它单独测量和评估每个选项，所以它可能会为 选取不同的向量长度。 这个简单的功能非常强大——超越了简单的整数常量——因为函数和类型也是参数表达式。`vector_len` `float32` `int8`

请注意，最佳向量长度的搜索是由 search() 函数执行的。 接受一个评估器和一个分叉函数，并返回评估器选择的最快实现作为参数结果。 要更深入地了解此主题，请查看 Mojo.search() 中有关矩阵乘法和 Fast Memset 的笔记本

自动调优本质上是一种指数技术，受益于 Mojo 编译器堆栈的内部实现细节（特别是 MLIR、集成缓存和编译分发）。 这也是一个高级用户功能，需要随着时间的推移不断开发和迭代。

## “价值生命周期”：价值的诞生、存在和消亡
此时，您应该了解 Mojo 函数和类型的核心语义和功能，因此我们现在可以讨论它们如何组合在一起以在 Mojo 中表达新类型。

许多现有语言都通过不同的权衡来表达设计点：例如，C++ 非常强大，但经常被指责“默认设置错误”，从而导致错误和错误功能。 Swift 易于使用，但其模型的可预测性较差，会复制大量值，并且依赖于“ARC 优化器”来提高性能。 Rust 从强大的价值所有权目标开始，以满足其借用检查器的要求，但依赖于可移动的值，这使得表达自定义移动构造函数变得具有挑战性，并且会给性能带来很大的压力。 在 Python 中，一切都是对类的引用，因此它永远不会真正面临 types.memcpy 的问题

对于 Mojo，我们从这些现有系统中学习，我们的目标是提供一个非常强大且易于学习和理解的模型。 我们也不想要求“尽最大努力”和难以预测的优化过程内置到“足够智能”的编译器中。

为了探索这些问题，我们研究了不同的价值分类和表达它们的相关 Mojo 功能，并自下而上构建。 我们在示例中使用 C++ 作为主要比较点，因为它众所周知，但如果其他语言提供了更好的比较点，我们偶尔会参考它们。

### 无法实例化的类型
Mojo 中最简单的类型是不允许创建它的实例的类型：这些类型根本没有初始值设定项，如果它们有析构函数，则永远不会调用它（因为无法销毁实例） ）：
```python
struct NoInstances:
    var state: Int  # Pretty useless

    alias my_int = Int

    @staticmethod
    fn print_hello():
        print("hello world")
```
默认情况下，Mojo 类型不会获得默认构造函数、移动构造函数、成员初始化器或其他任何内容，因此不可能创建此类型的实例。 为了获得它们，您需要定义一个方法或使用合成初始化程序的装饰器。 如图所示，这些类型可用作“命名空间”，因为您可以引用静态成员，例如 或 即使您无法实例化该类型的实例。`NoInstances` `__init__` `NoInstances.my_int` `NoInstances.print_hello()`

### 不可移动和不可复制类型
如果我们在复杂性的阶梯上更进一步，我们将得到可以实例化的类型，但是一旦它们被固定到内存中的地址，它们就不能被隐式移动或复制。 这对于实现原子操作（例如在 C++ 中）等类型或其他类型非常有用，其中值的内存地址是其标识并且对其用途至关重要：`std::atomic`
```python
struct Atomic:
    var state: Int

    fn __init__(inout self, state: Int = 0):
        self.state = state

    fn __iadd__(inout self, rhs: Int):
        #...atomic magic...

    fn get_value(self) -> Int:
        return atomic_load_int(self.state)
```


此类定义了一个初始化程序，但没有复制或移动构造函数，因此一旦初始化，就永远无法移动或复制。 这是安全且有用的，因为 Mojo 的所有权系统是完全“地址正确的”——当它被初始化到堆栈或其他类型的字段中时，它永远不需要移动。

请注意，Mojo 的方法仅控制内置移动操作，例如复制和 ^ 传输运算符。 您可以用于自己的类型（如上）的一种有用模式是添加显式方法（非“dunder”方法）。 当程序员知道实例是安全的时，这对于制作实例的显式副本很有用。
`a = b` `Atomic` `copy()`

### 独特的“仅移动”类型
如果我们在能力的阶梯上再上一层楼，我们将遇到“唯一”的类型 - C++ 中有很多这样的例子，例如类似的类型，甚至是拥有底层 POSIX 文件描述符的类型。 这些类型在 Rust 等语言中很普遍，不鼓励复制，但“移动”是免费的。 在 Mojo 中，您可以通过定义获取唯一类型所有权的方法来实现这些类型的移动。 例如：`std::unique_ptr` `FileDescriptor` `__moveinit__`
```python
# This is a simple wrapper around POSIX-style fcntl.h functions.
struct FileDescriptor:
    var fd: Int

    # This is how we move our unique type.
    fn __moveinit__(inout self, owned existing: Self):
        self.fd = existing.fd

    # This takes ownership of a POSIX file descriptor.
    fn __init__(inout self, fd: Int):
        self.fd = fd

    fn __init__(inout self, path: String):
        # Error handling omitted, call the open(2) syscall.
        self = FileDescriptor(open(path, ...))

    fn __del__(owned self):
        close(self.fd)   # pseudo code, call close(2)

    fn dup(self) -> Self:
        # Invoke the dup(2) system call.
        return Self(dup(self.fd))
    fn read(...): ...
    fn write(...): ...
```
消费移动构造函数 () 获取现有 的所有权，并将其内部实现细节移动到新实例。 这是因为 的实例可能存在于不同的位置，并且它们可以在逻辑上移动——窃取一个值的主体并将其移动到另一个值中。
`__moveinit__` `FileDescriptor` `FileDescriptor`

这是一个会多次调用的令人震惊的示例：`__moveinit__`
```python
fn egregious_moves(owned fd1: FileDescriptor):
    # fd1 and fd2 have different addresses in memory, but the
    # transfer operator moves unique ownership from fd1 to fd2.
    let fd2 = fd1^

    # Do it again, a use of fd2 after this point will produce an error.
    let fd3 = fd2^

    # We can do this all day...
    let fd4 = fd3^
    fd4.read(...)
    # fd4.__del__() runs here
```
请注意如何使用后缀“转移”运算符在拥有该值的各个值之间转移该值的所有权，这会破坏先前的绑定并将所有权转移到新的常量。 如果您熟悉 C++，那么考虑转移运算符的简单方法就像 ，但在这种情况下，我们可以看到它能够移动事物而不将它们重置为可以销毁的状态：在 C++ 中，如果您 移动运算符无法更改旧值的实例，它将被关闭两次。`^` `std::move` `fd`

Mojo 跟踪值的活跃度并允许您定义自定义移动构造函数。 这很少需要，但一旦需要就非常强大。 例如，某些类型（例如 llvm::SmallVector 类型）使用“内联存储”优化技术，并且它们可能希望通过“内部指针”来实现到其实例中。 这是一个众所周知的技巧，可以减轻 malloc 内存分配器的压力，但这意味着“移动”操作需要自定义逻辑来在发生这种情况时更新指针。

使用 Mojo，这就像实现自定义方法一样简单。 这在 C++ 中也很容易实现（不过，在不需要自定义逻辑的情况下可以使用样板），但在其他流行的内存安全语言中很难实现。`__moveinit__`

另一点需要注意的是，虽然 Mojo 编译器提供了良好的可预测性和控制，但它也非常复杂。 它保留消除临时和相应的复制/移动操作的权利。 如果这不适合您的类型，您应该使用显式方法（例如）而不是 dunder 方法。`copy()`

### 支持“偷走”的类型
内存安全语言面临的一个挑战是，它们需要围绕编译器能够跟踪的内容提供可预测的编程模型，而编译器中的静态分析本质上是有限的。 例如，虽然编译器可以理解下面第一个示例中的两个数组访问是针对不同的数组元素，但（通常）不可能推理第二个示例（这是 C++ 代码）：
```python
std::pair<T, T> getValues1(MutableArray<T> &array) {
    return { std::move(array[0]), std::move(array[1]) };
}
std::pair<T, T> getValues2(MutableArray<T> &array, size_t i, size_t j) {
    return { std::move(array[i]), std::move(array[j]) };
}
```
这里的问题是根本没有办法（仅查看上面的函数体）知道或证明 和 的动态值不相同。 虽然可以维护动态状态来跟踪数组的各个元素是否处于活动状态，但这通常会导致大量的运行时开销（即使不使用移动/传输），这是 Mojo 和其他系统编程语言不热衷的事情 做。 解决这个问题的方法有很多种，包括一些相当复杂且并不总是容易学习的解决方案。`i` `j`

Mojo 采用务实的方法，让 Mojo 程序员无需处理其类型系统即可完成工作。 如上所示，它并不强制类型可复制、可移动，甚至可构造，但它确实希望类型能够表达其完整契约，并且它希望实现程序员期望从 C++ 等语言中获得的流畅设计模式。 这里（众所周知的）观察结果是，许多对象的内容可以被“窃取”，而无需禁用其析构函数，或者因为它们具有“空状态”（如可选类型或可为空指针），或者因为它们具有空值 可以高效地创建值并且无需进行销毁操作（例如，其数据可以有一个空指针）。`std::vector`

为了支持这些用例，^ 传输运算符支持任意 LValue，并且当应用于其中时，它会调用“窃取移动构造函数”。 此构造函数必须将新值设置为活动状态，并且它可以改变旧值，但它必须将旧值置于其析构函数仍然可以工作的状态。 例如，如果我们想将我们放入一个向量中并移出它，我们可能会选择扩展它以知道它是一个哨兵，这意味着它是“空”。 我们可以这样实现：`FileDescriptor` `-1`
```python
# This is a simple wrapper around POSIX-style fcntl.h functions.
struct FileDescriptor:
    var fd: Int

    # This is the new key capability.
    fn __moveinit__(inout self, inout existing: Self):
        self.fd = existing.fd
        existing.fd = -1  # neutralize 'existing'.

    fn __moveinit__(inout self, owned existing: Self): # as above
    fn __init__(inout self, fd: Int): # as above
    fn __init__(inout self, path: String): # as above

    fn __del__(owned self):
        if self.fd != -1:
            close(self.fd)   # pseudo code, call close(2)
```
请注意“窃取移动”构造函数如何从现有值中获取文件描述符并改变该值，以便其析构函数不会执行任何操作。 这种技术需要权衡，并不是对每种类型都是最好的。 我们可以看到它向析构函数添加了一个（廉价的）分支，因为它必须检查哨兵情况。 通常也认为使此类类型可为空是不好的形式，因为像类型这样的更通用的功能是处理这种情况的更好方法。`Optional[T]`
此外，我们计划在 Mojo 本身中实现，并且需要此功能。 我们还相信，库作者比语言设计者更了解他们的领域问题，并且通常更愿意赋予库作者对该领域的全部权力。 因此，您可以选择（但不必）让您的类型以选择加入的方式参与此行为。
`Optional[T]` `Optional`

### 可复制类型
可移动类型的下一步是可复制类型。 可复制类型也很常见 - 程序员通常期望字符串和数组之类的东西是可复制的，并且每个 Python 对象引用都是可复制的 - 通过复制指针和调整引用计数。
有很多方法可以实现可复制类型。 一种可以实现像 Python 或 Java 这样的引用语义类型，在其中传播共享指针，一种可以使用易于共享的不可变数据结构，因为它们一旦创建就不会发生变化，一种可以通过惰性写入时复制来实现深层值语义 就像斯威夫特那样。 这些方法中的每一种都有不同的权衡，Mojo 认为，虽然我们需要一些通用的集合类型集，但我们也可以支持广泛的专注于特定用例的专用集合类型。
在 Mojo 中，您可以通过实现该方法来做到这一点。 这是使用简单的示例（伪代码）：`__copyinit__` `String`
```python
struct MyString:
    var data: Pointer[UI8]

    # StringRef is a pointer + length and works with StringLiteral.
    def __init__(inout self, input: StringRef):
        self.data = ...

    # Copy the string by deep copying the underlying malloc'd data.
    def __copyinit__(inout self, existing: Self):
        self.data = strdup(existing.data)

    # This isn't required, but optimizes unneeded copies.
    def __moveinit__(inout self, owned existing: Self):
        self.data = existing.data

    def __del__(owned self):
        free(self.data.address)

    def __add__(self, rhs: MyString) -> MyString: ...
```
这个简单类型是一个指向用 malloc 分配的“空终止”字符串数据的指针，为清楚起见，使用老式 C API。 它实现了 ，它维护了每个 实例都拥有其底层指针并在销毁时释放它的不变式。 这个实现建立在我们上面看到的技巧的基础上，并实现了一个构造函数，这使得它可以在某些常见情况下完全消除临时副本。 您可以在此代码序列中看到此行为：`__copyinit__` `MyString` `__moveinit__`
```python
fn test_my_string():
    var s1 = MyString("hello ")

    var s2 = s1    # s2.__copyinit__(s1) runs here

    print(s1)

    var s3 = s1^   # s3.__moveinit__(s1) runs here

    print(s2)
    # s2.__del__() runs here
    print(s3)
    # s3.__del__() runs here
```
在这种情况下，您可以明白为什么需要复制构造函数：如果没有复制构造函数，将值复制到 将是一个错误 - 因为您不能拥有同一不可复制类型的两个实时实例。 移动构造函数是可选的，但有助于分配到 ：没有它，编译器将从 s1 调用复制构造函数，然后销毁旧实例。 这在逻辑上是正确的，但会带来额外的运行时开销。s1 s2 s3 s1
Mojo 会急切地销毁值，这使得它能够将复制+销毁对转换为单次移动操作，这可以带来比 C++ 更好的性能，而不需要普遍的微管理 `std::move`

## 析构函数的行为
Mojo 中的任何结构都可以有一个析构函数（方法），当值的生存期结束时（通常是上次使用值的点）会自动运行。例如，一个简单的字符串可能如下所示（在伪代码中）：`__del__()`
```python
@value
struct MyString:
    var data: Pointer[UInt8]

    def __init__(inout self, input: StringRef): ...
    def __add__(self, rhs: String) -> MyString: ...
    def __del__(owned self):
        free(self.data.address)
```


## 寿命
TODO：解释返回引用的工作原理，与与参数相吻合的生存期相关联。这尚未启用。

## 类型特征
这是一个非常像 Rust 特性、Swift 协议或 Haskell 类型类的特性。请注意，这尚未实现。



更多内容逐步翻译中，欢迎入群加入翻译工作。
如果迫切需要更多资料请查看[英文原版文档](https://docs.modular.com/mojo/notebooks/HelloMojo.html#let-and-var-declarations)。
