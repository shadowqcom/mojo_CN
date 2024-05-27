# 参数化：编译时元编程
许多编程语言都具备进行元编程的能力，即编写能够生成或修改代码的代码。Python具备动态元编程的功能，如装饰器、元类等等。这些功能使得Python非常灵活和高效，但由于它们是动态的，所以会带来运行时的开销。其他编程语言则具备静态或编译时的元编程功能，如C预处理器宏和C++模板。然而，这些功能使用起来可能受到限制并且难以使用。

为了支持Mojo在人工智能领域的工作，我们旨在提供功能强大、易于使用且没有运行时开销的编译时元编程。这种编译时元编程使用与运行时程序相同的语言，因此您无需学习一门新的语言，只需了解一些新特性。

主要的新特性是“参数”。您可以将参数视为在编译时变量，它在运行时变为常量。这种使用“参数”的方式可能与您在其他编程语言中习惯的方式不同，其他编程语言经常将“参数”和“参数表达式”视为可以互换使用的。在Mojo中，“参数”和“参数表达式”指的是编译时的值，“参数”和“表达式”指的是运行时的值。

在Mojo中，您可以向结构体或函数添加参数。您还可以定义命名参数表达式，也就是别名，您可以将其用作运行时常量。

## 参数化

要定义一个“参数化函数”，请在参数列表之前添加方括号中的参数。每个参数的格式与参数列表中的参数相同：参数名，后跟冒号和类型（必需）。在下面的示例中，该函数具有一个名为`count`，类型为`Int`的参数。

```mojo
fn repeat[count: Int](msg: String):
    @unroll
    for i in range(count):
        print(msg)
```

（此处显示的`@unroll`指令在编译时展开循环。该指令仅在循环限制为编译时常量时起作用。）

调用参数化函数时，您需要像函数参数一样为参数提供值：

```mojo
repeat[3]("Hello")
```

    Hello
    Hello
    Hello
    

编译器会在编译期间解析参数值，并为每个唯一的参数值创建`repeat[]()`函数的具体版本。在解析参数值并展开循环之后，`repeat[3]()`函数大致等同于以下代码：

```mojo
fn repeat_3(msg: String):
    print(msg)
    print(msg)
    print(msg)
```

这并不代表编译器生成的实际代码。在解析参数之时，Mojo代码已经被转换为MLIR的中间表示形式。

如果编译器无法将所有参数值解析为常量值，则编译失败。

## 参数化结构体

您还可以向结构体添加参数。您可以使用参数化结构体来构建通用容器。例如，通用数组类型可能包含以下代码：

```mojo
struct GenericArray[T: AnyRegType]:
    var data: Pointer[T]
    var size: Int

    fn __init__(inout self, *elements: T):
        self.size = len(elements)
        self.data = Pointer[T].alloc(self.size)
        for i in range(self.size):
            self.data[i] = elements[i]

    fn __del__(owned self):
        self.data.free()

    fn __getitem__(self, i: Int) raises -> T:
        if (i < self.size):
            return self.data[i]
        else:
            raise Error("Out of bounds")
```

该结构体有一个名为`T`的参数，它是您想要存储在数组中的数据类型的占位符，有时称为“类型参数”。`T`被定义为`AnyRegType`类型，它是表示任何可寄存寄存器的类型的元类型。这意味着我们的`GenericArray`可以存储固定大小的数据类型，如整数和浮点数，这些可以在机器寄存器中传递，但不能存储字符串或向量等动态分配的数据。

在参数的命名中，使用大写的`T`并没有特殊意义，但在许多编程语言中，为类型参数选择一个简短的名称是一种惯例，通常默认为`T`（表示“类型”）。

与参数化函数一样，当使用参数化结构体时，您需要传递参数值。在这种情况下，当您创建`GenericArray`的实例时，您需要指定要存储的类型，例如`Int`或`Float64`。（这可能有点令人困惑，因为在这种情况下，您传递的“参数值”实际上是一个“类型”。这没关系：Mojo类型是有效的编译时值。）

您会发现`T`在结构体中被用于通常用于类型名称的地方。例如，在构造函数中作为`elements`的形式类型以及`__getitem__()`方法的返回类型。

目前，此代码仅适用于可寄存器传递的类型，这就是为什么类型参数`T`限定为`AnyRegType`的原因。还有一个包含**所有**Mojo类型的元类型，即`AnyType`。

以下是使用`GenericArray`的示例：

```mojo
var array = GenericArrayInt
for i in range(array.size):
    print(array[i], sep=" ", end="")
```

    1  2  3  4  

参数化结构体可以使用`Self`类型来表示结构体的具体实例（即，所有参数都已指定）。例如，您可以向`GenericArray`添加一个静态工厂方法，具有以下签名：

```mojo
struct GenericArray[T: AnyRegType]:
    ...

    @staticmethod
    fn splat(count: Int, value: T) -> Self:
        # 创建一个具有给定值的新数组，其元素个数为count
```

在这里，`Self`等价于`GenericArray[T]`。也就是说，你可以这样调用`splat()`方法：

```mojo
GenericArray[Float64].splat(8, 0)
```

该方法返回一个`GenericArray[Float64]`的实例。

### 案例研究：SIMD类型

让我们以Mojo标准库中的`SIMD`类型作为一个真实世界的例子来看看参数化类型。

单指令多数据（SIMD）是一种并行处理技术，内置于许多现代CPU、GPU和定制加速器中。SIMD允许您一次对多个数据执行单个操作。例如，如果您想对数组中的每个元素求平方根，可以使用SIMD来并行化工作。

处理器使用硬件中的低级矢量寄存器实现SIMD，该寄存器包含多个标量数据类型的实例。为了在这些处理器上使用SIMD指令，数据必须被形状化为正确的SIMD宽度（数据类型）和长度（向量大小）。处理器可以支持512位或更长的SIMD向量，并支持从8位整数到64位浮点数的多种数据类型，因此定义所有可能的SIMD变体是不实际的。

Mojo的`SIMD`类型（定义为结构体）通过其方法公开了常见的SIMD操作，并使SIMD数据类型和大小值成为参数化。这样，您可以直接将数据映射到任何硬件上的SIMD向量。

这是Mojo的`SIMD`类型定义的简化（非功能性）版本：

```mojo
struct SIMD[type: DType, size: Int]:
    var value: â€¦ # 这里有一些底层的MLIR内容

    # 从一些标量创建新的SIMD
    fn __init__(inout self, *elems: SIMD[type, 1]): ...

    # 用重复的标量值填充SIMD
    @staticmethod
    fn splat(x: SIMD[type, 1]) -> SIMD[type, size]: ...

    # 将SIMD的元素转换为不同的元素类型
    fn casttarget: DType -> SIMD[target, size]: ...

    # 支持许多标准操作符
    fn __add__(self, rhs: Self) -> Self: ...
```

因此，您可以像这样创建和使用SIMD向量：

```mojo
var vector = SIMD[DType.int16, 4](1, 2, 3, 4)
vector = vector * vector
for i in range(4):
    print(vector[i], sep=" ", end="")
```
```
 1  4  9  16
```

正如您所见，一个简单的算术运算符`*`应用于一对SIMD向量的对应元素。

使用参数定义每个SIMD变体非常适合代码重用，因为`SIMD`类型可以静态地表示所有不同的向量变体，而不需要语言预定义每个变体。

因为`SIMD`是一个参数化类型，所以其函数中的`self`参数携带这些参数。完整的类型名称是`SIMD[type, size]`。尽管可以将其写出来（如`splat()`的返回类型所示），但这可能很冗长，所以建议使用`Self`类型（来自PEP673），就像`__add__`示例中所做的那样。

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

## 基于参数的重载

函数和方法可以根据其参数签名进行重载。重载解析逻辑按照以下规则进行候选项筛选，按优先顺序：

1) 具有最少的隐式转换（参数和参数之间）的候选项。
2) 没有可变参数的候选项。
3) 没有可变参数的候选项。
4) 参数签名最短的候选项。
5) 非`@staticmethod`的候选项（接上）

如果在应用这些规则后存在多个候选项，则重载解析将失败。例如：

```mojo
@register_passable("trivial")
struct MyInt:
    """一种隐式可转换为`Int`的类型。"""
    var value: Int

    @always_inline("nodebug")
    fn __init__(_a: Int) -> Self:
        return Self {value: _a}

fn foo[x: MyInt, a: Int]():
    print("foo[x: MyInt, a: Int]()")

fn foo[x: MyInt, y: MyInt]():
    print("foo[x: MyInt, y: MyInt]()")

fn bara: Int:
    print("bara: Int")

fn bara: Int:
    print("bara: Int")

fn bar*a: Int:
    print("bar*a: Int")

fn parameter_overloads[a: Int, b: Int, x: MyInt]():
    # 调用`foo[x: MyInt, a: Int]()`，因为它不需要隐式转换，而`foo[x: MyInt, y: MyInt]()`需要一个。
    foo[x, a]()

    # 调用`bara: Int`，因为它没有可变参数。
    bara

    # 调用`bar*a: Int`，因为它有可变参数。
    bara, a, a

parameter_overloads[1, 2, MyInt(3)]()

struct MyStruct:
    fn __init__(inout self):
        pass

    fn foo(inout self):
        print("调用实例方法")

    @staticmethod
    fn foo():
        print("调用静态方法")

fn test_static_overload():
    var a = MyStruct()
    # `foo(inout self)`优先于静态方法。
    a.foo()
```
```mojo
foo[x: MyInt, a: Int]() bar[a: Int](b: Int) bar[*a: Int](b: Int)
```


## 使用参数化类型和函数

通过在方括号中传递参数值，您可以实例化参数化类型和函数。例如，对于上面的`SIMD`类型，`type`指定数据类型，`size`指定SIMD向量的长度（它必须是2的幂次方）：

```mojo
# 创建一个包含4个float的向量。
var small_vec = SIMDDType.float32, 4

# 创建一个包含1.0的float16格式的大向量。
var big_vec = SIMD[DType.float16, 32].splat(1.0)

# 进行一些数学运算并将元素转换为float32。
var bigger_vec = (big_vec+big_vec).cast[DType.float32]()

# 当然，您也可以显式地写出类型。
var bigger_vec2 : SIMD[DType.float32, 32] = bigger_vec

print('small_vec 类型:', small_vec.element_type, '长度:', len(small_vec))
print('bigger_vec2 类型:', bigger_vec2.element_type, '长度:', len(bigger_vec2))
```

注意，`cast()`方法也需要一个参数来指定所需的转换类型（上面的方法定义期望一个`target`参数化值）。因此，正如`SIMD`结构是一个泛型类型定义一样，`cast()`方法是一个泛型方法定义，它在编译时根据参数值进行实例化，而不是在运行时。

上面的代码展示了使用具体类型（即使用已知类型值实例化`SIMD`）的示例，但是参数的主要强大之处来自于能够定义使用参数值的参数化算法和类型的能力。例如，下面是如何使用`SIMD`定义一个类型和宽度无关的参数化算法：

```mojo
from math import sqrt

fn rsqrt[dt: DType, width: Int](x: SIMD[dt, width]) -> SIMD[dt, width]:
    return 1 / sqrt(x)

var v = SIMD[DType.float16, 4](42)
print(rsqrt(v))
```
```
[0.154296875、0.154296875、0.154296875、0.154296875]
```

请注意，`x`参数实际上是基于函数参数的`SIMD`类型。运行时程序可以使用参数的值，因为参数在运行时程序需要它们之前在编译时已解析（但是编译时参数表达式不能使用运行时值）。

Mojo编译器还能够智能推断参数的类型。注意，上述函数能够在不指定参数的情况下调用参数化的`sqrt[]()`函数-编译器根据传递给它的参数值推断出参数的类型，就好像您明确写出了`sqrtdt, width`一样。还要注意，`rsqrt()`选择将其第二个参数命名为`width`，即使`SIMD`类型将其命名为`size`，也没有问题。

## 可选参数和关键字参数

与函数签名中可以指定可选参数一样，您还可以通过给参数设置默认值来定义一个可选的参数。

您还可以通过关键字传递参数，就像使用关键字参数一样。对于带有多个可选参数的函数或结构，使用关键字允许您只传递要指定的参数，而不考虑它们在函数签名中的位置。

例如，下面是一个带有两个参数的函数，每个参数都有一个默认值：

```mojo
fn speak[a: Int = 3, msg: StringLiteral = "woof"]():
    print(msg, a)

fn use_defaults() raises:
    speak()             # 输出 'woof 3'
    speak[5]()          # 输出 'woof 5'
    speak[7, "meow"]()  # 输出 'meow 7'
    speak[msg="baaa"]() # 输出 'baaa 3'
```

请记住，当调用参数化函数时，Mojo可以推断参数值。也就是说，它可以使用与参数值相关联的参数值（参见上面的`sqrt[]()`示例）。如果参数化函数还有定义默认值，那么推断参数类型优先。

例如，在下面的代码中，我们更新参数化的`speak[]()`函数以接受具有参数化类型的参数。虽然函数对于`a`有一个默认参数值，但是Mojo会使用`bar`参数的推断`a`参数值（如所写的，永远不会使用默认的`a`值，但这只是为了演示目的）：

```mojo
@value
struct Bar[v: Int]:
    pass

fn fooa: Int = 3, msg: StringLiteral = "woof":
    print(msg, a)

fn use_inferred():
    foo(Bar[9]())  # 输出 'woof 9'
```

如上所述，您还可以在结构中使用可选参数和关键字参数：

```mojo
struct KwParamStruct[greeting: String = "Hello", name: String = "🔥mojo🔥"]:
    fn __init__(inout self):
        print(greeting, name)

fn use_kw_params():
    var a = KwParamStruct[]()                 # 输出 'Hello 🔥mojo🔥'
    var b = KwParamStruct[name="World"]()     # 输出 'Hello World'
    var c = KwParamStruct[greeting="Hola"]()  # 输出 'Hola 🔥mojo🔥'
```


Mojo支持位置参数和关键字参数，遵循与位置参数和关键字参数一样的规则。


## 可变参数

Mojo还支持可变参数，类似于可变参数：

```mojo
struct MyTensor[*dimensions: Int]:
    pass
```

可变参数有一些可变参数没有的限制：

- 目前只支持可寄存器传递类型的可变参数。

- 参数不会自动投影到`VariadicList`中，因此需要显式构造列表：

```mojo
fn sum_params[*values: Int]() -> Int:
    alias list = VariadicList(values)
    var sum = 0
    for v in list:
        sum += v
    return sum
```

尚不支持可变关键字参数（例如`**kwparams`）。

## 参数表达式只是Mojo代码

参数表达式是在需要参数的地方出现的任何代码表达式（如`a+b`）。参数表达式支持运算符和函数调用，就像运行时代码一样，所有参数类型都使用与运行时程序相同的类型系统（如`Int`和`DType`）。

由于参数表达式使用与运行时Mojo代码相同的语法和类型，因此您可以使用许多“依赖类型”功能。例如，您可能希望定义一个辅助函数来连接两个SIMD向量：

```mojo
fn concat[ty: DType, len1: Int, len2: Int](
        lhs: SIMD[ty, len1], rhs: SIMD[ty, len2]) -> SIMD[ty, len1+len2]:

    var result = SIMD[ty, len1 + len2]()
    for i in range(len1):
        result[i] = SIMDty, 1
    for j in range(len2):
        result[len1 + j] = SIMDty, 1
    return result

var a = SIMDDType.float32, 2
var x = concatDType.float32, 2, 2

print('result type:', x.element_type, 'length:', len(x))
```

请注意，结果长度是输入向量长度的总和，这是用简单的`+`操作表示的。

### 强大的编译时编程

虽然简单的表达式很有用，但有时您希望编写具有控制流的命令式编译时逻辑。甚至可以进行编译时递归。例如，下面是一个示例“树归约”算法，它将向量的所有元素递归求和为一个标量：

```mojo
fn slice[ty: DType, new_size: Int, size: Int](
        x: SIMD[ty, size], offset: Int) -> SIMD[ty, new_size]:
    var result = SIMD[ty, new_size]()
    for i in range(new_size):
        result[i] = SIMDty, 1
    return result

fn reduce_addty: DType, size: Int -> Int:
    @parameter
    if size == 1:
        return x[0].to_int()
    elif size == 2:
        return x[0].to_int() + x[1].to_int()

    # Extract the top/bottom halves, add them, sum the elements.
    alias half_size = size // 2
    var lhs = slicety, half_size, size
    var rhs = slicety, half_size, size
    return reduce_addty, half_size

var x = SIMDDType.index, 4
print(x)
print("Elements sum:", reduce_add(x))
```

这里使用了`@parameter`装饰器来创建一个参数化的if条件，它是一个在编译时运行的`if`语句。它要求条件是一个有效的参数表达式，并确保只有if语句的活动分支被编译到程序中。

## Mojo类型只是参数表达式

虽然我们已经展示了如何在类型中使用参数表达式，但类型注释本身可以是任意表达式（就像在Python中一样）。Mojo中的类型具有特殊的元类型类型，允许定义类型参数化的算法和函数。

例如，我们可以创建一个简化的`Array`，支持任意类型的元素（通过`AnyRegType`参数）：

```mojo
struct Array[T: AnyRegType]:
    vardata: Pointer[T]
    var size: Int

    fn __init__(inout self, size: Int, value: T):
        self.size = size
        self.data = Pointer[T].alloc(self.size)
        for i in range(self.size):
            self.data[i] = value

    fn __getitem__(self, i: Int) -> T:
        return self.data[i]

    fn __del__(owned self):
        self.data.free()

var v = ArrayFloat32
print(v[0], v[1], v[2], v[3])
```

请注意，`T`参数被用作`value`参数和`__getitem__()`函数的形式类型和返回类型。参数允许`Array`类型根据不同的用例提供不同的API。

还有许多其他情况可以从更高级的参数使用中获益。例如，您可以并行执行闭包N次，从上下文中提供一个值，如下所示：

```mojo
fn parallelizefunc: fn (Int) -> None:
    # Not actually parallel: see the 'algorithm' module for real implementation.
    for i in range(num_work_items):
        func(i)
```

另一个重要的例子是可变泛型，其中算法或数据结构可以在异构类型列表上定义，例如元组。目前，在Mojo中还没有完全支持这一点，需要手动编写一些MLIR。将来，这将可以在纯Mojo中实现。


<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

## `alias`: 命名参数表达式

很常见的情况是想给编译时的值起个名字。虽然 `var` 定义了一个运行时的值，但我们需要一种定义编译时临时值的方法。为此，Mojo 使用了 `alias` 声明。

例如，`DType` 结构实现了一个简单的枚举，使用别名来定义枚举值，如下所示（实际的 `DType` 实现细节可能有所不同）：

```mojo
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

这样客户端就可以自然地使用 `DType.float32` 作为参数表达式（也可以作为运行时值）了。请注意，这里是在编译时调用了 `DType` 的运行时构造函数。

类型是别名的另一个常见用途。因为类型是编译时表达式，所以能够像这样使用：

```mojo
alias Float16 = SIMD[DType.float16, 1]
alias UInt8 = SIMD[DType.uint8, 1]

var x : Float16   # Float16 类似于 "typedef"
```

与 `var` 变量一样，别名遵循作用域规则，你可以在函数内部使用局部别名，就像你期望的那样。

## 完全绑定、部分绑定和未绑定的类型

所有参数都指定的参数化类型称为 _完全绑定_。也就是说，它的所有参数都绑定到了值上。正如前面所提到的，你只能实例化一个完全绑定的类型（有时称为 _具体类型_）。

然而，在某些上下文中，参数化类型可以是 _未绑定_ 或 _部分绑定_。例如，你可以使用别名来创建一个只需要较少参数的新类型：

```mojo
alias Bytes = SIMD[DType.uint8, _]
var b = Bytes[8]()
```

在这个例子中，`Bytes` 是一个类型别名，表示一个字节的 `SIMD` 向量。参数列表中的下划线 `_` 表示第二个参数 `width` 是未绑定的。你可以在使用 `Bytes` 时指定 `width` 参数。

例如，给定以下类型：

```mojo
struct MyType[s: String, i: Int, i2: Int, b: Bool = True]:
    pass
```

它可以以以下形式出现在代码中：

- _完全绑定_，所有参数都指定：

  ```mojo
  MyType["Hello", 3, 4, True]
  ```

- _部分绑定_，指定了一些但不是所有的参数：

  ```mojo
  MyType["Hola", _, _, True]
  ```

- _未绑定_，没有指定任何参数：

  ```mojo
  MyType[_, _, _, _]
  ```

你还可以使用星号下划线表达式 `*_` 来解绑参数列表末尾的任意数量的位置参数。

```mojo
# 这两个类型是等价的
MyType["Hello", *_]
MyType["Hello", _, _, _]
```

当参数使用 `_` 或 `*_` 表达式显式解绑时，**必须**为该参数指定一个值才能使用该类型。忽略了原始类型声明中的任何默认值。

部分绑定和未绑定的参数化类型可以在某些上下文中使用，在这些上下文中，缺失（未绑定）的参数将在稍后提供，例如在别名和自动参数化函数中。

### 忽略的参数

Mojo 还支持一种省略参数的格式，即从表达式中省略一些参数，而不是使用 `_` 或 `*_` 表达式。省略的参数在上下文中被解释为未绑定。

例如，给定以下类型声明：

```mojo
struct MyType[s: String, i: Int, i2: Int, b: Bool = True]:
    pass
```

可以使用以下形式创建一个省略了参数的实例：

```mojo
MyType["Hello", _, 4, _]
```

在这个例子中，第一个参数 `s` 被显式指定为字符串 "Hello"，第三个参数 `i2` 被显式指定为整数 4，而第二个参数 `i` 和第四个参数 `b` 被省略，即它们是未绑定的。

省略的参数可以在稍后提供，例如在别名和自动参数化函数中。在这些上下文中，缺失（未绑定）的参数将使用提供的值来解绑。

```mojo
alias MyAlias = MyType["Hello", _, 4, _]
```

在这个例子中，`MyAlias` 是一个别名，表示一个 `MyType` 实例，其中 `s` 被绑定为字符串 "Hello"，`i2` 被绑定为整数 4，而 `i` 和 `b` 是未绑定的。

省略的参数还可以在自动参数化函数中使用。在这种情况下，省略的参数可以通过函数调用时提供的参数来解绑。

```mojo
func createInstance(s: String, i: Int, i2: Int, b: Bool = True) -> MyType[s, i, i2, b]:
    return MyType[s, i, i2, b]
```

在这个例子中，`createInstance` 是一个自动参数化函数，它接受一个字符串 `s` 和两个整数 `i` 和 `i2`，并返回一个 `MyType` 实例，其中 `s` 被绑定为传入的字符串，`i` 和 `i2` 被绑定为传入的整数，而 `b` 是未绑定的。可以使用省略的参数调用这个函数：

```mojo
var instance = createInstance("Hello", _, 4, _)
```

在这个例子中，`instance` 是一个 `MyType` 实例，其中 `s` 被绑定为字符串 "Hello"，`i` 和 `i2` 被绑定为传入的整数，而 `b` 是未绑定的。

### 使用部分绑定类型的自动参数化

Mojo还支持自动参数化：使用部分绑定的参数化类型（即，具有一些但不是全部参数指定的类型）。

例如，假设我们有一个具有三个参数的`Fudge`结构体：

```mojo
@value
struct Fudgesugar: Int, cream: Int, chocolate: Int = 7:
    fn __str__(self) -> String:
        var values = StaticIntTuple3
        return str("Fudge") + values
```

我们可以编写一个接受只有一个绑定参数（即_部分绑定_）的`Fudge`参数的函数：

```mojo
fn eat(f: Fudge[5, *_]):
    print("Ate " + str(f))
```

`eat()`函数接受一个`Fudge`结构体，其中第一个参数（`sugar`）绑定到值5。第二个和第三个参数，`cream`和`chocolate`，则是未绑定的。

未绑定的`cream`和`chocolate`参数成为`eat`函数的隐式输入参数。实际上，这大致相当于编写以下代码：

```mojo
fn eatcr: Int, ch: Int:
    print("Ate " + str(f))
```

在这两种情况下，我们可以通过传入绑定了`cream`和`chocolate`参数的实例来调用该函数：

```mojo
eat(Fudge[5, 5, 7]())
eat(Fudge[5, 8, 9]())
```

    Ate Fudge(5, 5, 7)
    Ate Fudge(5, 8, 9)
    

如果尝试传入一个`sugar`值不为5的参数，编译将失败，因为它与参数类型不匹配：

```mojo
eat(Fudge[12, 5, 7]()) 
# ERROR: invalid call to 'eat': argument #0 cannot be converted from 'Fudge[12, 5, 7]' to 'Fudge[5, 5, 7]'
```

您还可以显式取消绑定单个参数。这样可以更自由地指定未绑定的参数。

例如，您可能希望让用户指定`sugar`和`chocolate`的值，而让`cream`保持不变。为此，请将每个未绑定参数值替换为单个下划线（`_`）：

```mojo
fn devour(f: Fudge[_, 6, _]):
    print(str("Devoured ") + str(f))
```

同样，未绑定的参数（`sugar`和`chocolate`）将作为隐式输入参数添加到函数中。此版本与以下代码大致等效，其中这两个值被显式绑定到输入参数`su`和`ch`：

```mojo
fn devoursu: Int, ch: Int:
        print(str("Devoured ") + str(f))
```

您还可以通过关键字指定参数，或混合使用位置参数和关键字参数，因此以下函数与上一个函数大致等效：第一个参数`sugar`使用下划线字符显式取消绑定。使用关键字语法`chocolate=_`取消绑定`chocolate`参数。并且`cream`被显式绑定到值6：

```mojo
fn devour(f: Fudge[_, chocolate=_, cream=6]):
    print(str("Devoured ") + str(f))
```

`devour()`函数的这三个版本都可与以下调用一起使用：

```mojo
devour(Fudge[3, 6, 9]())
devour(Fudge[4, 6, 8]())
```

    Devoured Fudge(3, 6, 9)
    Devoured Fudge(4, 6, 8)
    

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

### 旧版语法（省略参数）

您还可以通过省略参数来指定未绑定或部分绑定的类型，例如：

```mojo
fn nibble(f: Fudge[5]):
    print("Ate " + str(f))
```

在这里，`Fudge[5]就像`Fudge[5, *_]`一样工作，**除了**处理具有默认值的参数的方式不同。与丢弃`chocolate`的默认值不同，`Fudge[5]`会立即绑定默认值，使其等效于`Fudge[5, _, 7]`。

这意味着使用之前定义的`nibble()`函数的代码将无法编译，因为它不使用`chocolate`的默认值：

```mojo
nibble(Fudge[5, 5, 9]())
# ERROR: invalid call to 'eat': argument #0 cannot be converted from 'Fudge[5, 5, 9]' to 'Fudge[5, 5, 7]'
```

TODO

将逐渐停止支持省略未绑定参数的方式，而倾向于使用`_`和`*_`显式取消绑定参数。

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>