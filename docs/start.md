# 快速开始


## hello world
Mojo 被设计为 Python 的超集，因此很多语言特性和功能都是相同的,   

例如 Mojo中 “hello world” 看起来与Python中完全相同：
```python
print("Hello Mojo!")
```

您还可以导入现有的 Python 包并像往常一样使用它们，稍后我们将展示。

但是Mojo在Python之上提供了大量强大的功能，这也是本文档中将重点介绍的内容。

我们假设你已经熟悉 Python 和一些系统编程概念，因此我们可以专注于 Mojo 的特别之处。


## 基本系统编程扩展
Python本身不支持系统编程，在Mojo中我们这样做：

### `let` 和`var`声明

在函数内部，你可以为名称赋值，它会默认创建一个函数内部变量，就像在 Python 中一样。  
这提供了一种过于动态且没看仪式感的编程方式，但它也是一个挑战，原因有两个：  

1、系统程序员通常希望声明值是不可变的。  
2、如果他们在赋值中输入了错误地变量名称，则可能希望得到一个错误。

为了支持这一点，Mojo 支持 `let` 和 `var` 声明，它们引入了一个新的作用域运行时值：`let` 是不可变的，`var` 是可变的。 这些值使用词法范围并支持命名遮挡：

```python
def your_function(a, b):
    let c = a
    # Uncomment to see an error:
    # c = b  # error: c is immutable

    if c != b:
        let d = b
        print(d)

your_function(2, 3)
```

`let` 和 `var` 声明还支持类型说明符、模式和后期初始化：
```python
def your_function():
    let x: Int = 42
    # 早期的mojo类型说明是通过简写F64来表示，目前修改为 Float64 let y: F64 = 17.0
    let y: Float64 = 17.0
	
    # 早期的mojo类型说明是通过简写F32来表示，目前修改为 Float32 let z: Float32
    let z: F32
    if x != 0:
        z = 1.0
    else:
        z = foo()
    print(z)

# 函数的返回值类型不能写成F32，已修改为Float32
def foo() -> Float32:
    return 3.14

your_function()
```

### `struct`类型

现代系统编程需要能够在低级数据布局控制、无间接访问字段等特殊技巧的基础上构建高级别和安全的抽象。 Mojo 提供了`struct`类型。

`struct`类型在很多方面与类相似。 然而，在类具有动态调度、猴子修补（或动态方法“swizzling”）和动态绑定实例属性的情况下，`struct`是静态的，在编译时绑定，并内联到它们的容器中，而不是隐式间接和 参考计数。

这是`struct`的简单定义：
```python
struct MyPair:
    var first: Int
    var second: Int

    # We use 'fn' instead of 'def' here - we'll explain that soon
    fn __init__(self&, first: Int, second: Int):
        self.first = first
        self.second = second

    fn __lt__(self, rhs: MyPair) -> Bool:
        return self.first < rhs.first or
              (self.first == rhs.first and
               self.second < rhs.second)
```

与`class`相比，最大的区别是`struct`中的所有实例属性都必须使用 `var` 或 `let` 声明显式声明。 这允许 Mojo 编译器在内存中精确地布局和访问属性值，而无需间接或其他开销。

`struct`字段是静态绑定的：它们不是用字典间接查找的。 因此，您不能`del`方法或在运行时重新分配它。 这使 Mojo 编译器能够执行有保证的静态分派，使用有保证的对字段的静态访问，并将`struct`内联到堆栈框架或使用它的封闭类型中，而无需间接或其他开销。

### 强型式检查
您仍然可以像在 Python 中一样使用动态类型，但 Mojo 还允许您在程序中使用强类型检查。

使用强类型检查的主要方法之一是使用 Mojo 的`struct`类型。 Mojo 中的`struct`定义定义了一个编译时绑定的名称，并且在类型上下文中对该名称的引用被视为对所定义值的强规范。 例如，考虑以下使用上面显示的 `MyPair` 结构的代码：
```python
def pairTest() -> Bool:
    let p = MyPair(1, 2)
    # Uncomment to see an error:
    # return p < 4 # gives a compile time error
    return True
```

如果你取消注释第一个 return 语句并运行它，你会得到一个编译时错误，告诉你 `4` 不能转换为 `MyPair`，这是 `__lt__ `的 RHS 所需要的（在 `MyPair` 定义中）。

### 重载函数和方法
同样与 Python 一样，您可以在 Mojo 中定义函数而不指定参数类型，并让 Mojo 推断数据类型。 但是当你想确保类型安全时，Mojo 还提供对重载函数和方法的全面支持。

本质上，这允许您定义多个具有相同名称但具有不同参数的函数。 这是许多语言（如 C++、Java 和 Swift）中常见的特性。

让我们看一个例子：
```python
struct Complex:
    var re: F32
    var im: F32

    # 类型改为Float32
    fn __init__(inout self, x: Float32):
        """Construct a complex number given a real number."""
        self.re = x
        self.im = 0.0
	
    # 类型改为Float32
    fn __init__(inout self, r: Float32, i: Float32):
        """Construct a complex number given its real and imaginary components."""
        self.re = r
        self.im = i
```
您可以在任何您想要的地方实现重载：模块函数和类或结构中的方法。

Mojo 不支持仅对结果类型进行重载，也不使用结果类型或上下文类型信息进行类型推断，从而保持简单、快速和可预测。  
Mojo 永远不会产生“表达式太复杂”的错误，因为它的类型检查器根据定义简单且快速。

### `fn` definitions
上面的扩展是提供低级编程和提供抽象能力的基石，但许多系统程序员更喜欢比 `Mojo` 中的 `def` 提供的更多的控制和可预测性。  
回顾一下，`def` 被定义为非常动态、灵活并且通常与 Python 兼容：参数是可变的，局部变量在首次使用时隐式声明，并且不强制执行作用域。  
这对于高级编程和脚本编写非常有用，但对于系统编程并不总是很好。 为了补充这一点，Mojo 提供了一个 `fn` 声明，就像 `def` 的“严格模式”。  

`fn` 和 `def` 从接口级别总是可以互换的：没有什么是 `def` 可以提供而 `fn` 不能提供的（反之亦然）。 不同之处在于 `fn` 在其主体内部受到更多限制和控制（或者：迂腐和严格）。 具体来说，`fns` 与 `defs` 相比有很多限制：

1、参数值默认在函数体中是不可变的（如 `let`），而不是可变的（如 `var`）。 这会捕获意外突变，并允许使用不可复制的类型作为参数。

2、参数值需要类型规范（方法中的 `self` 除外），捕捉类型规范的意外遗漏。 同样，缺少返回类型说明符被解释为返回 `None` 而不是未知的返回类型。 请注意，两者都可以显式声明为返回对象，这允许在需要时选择加入 `def` 的行为。

3、禁用局部变量的隐式声明，因此必须声明所有局部变量。 这会捕获名称拼写错误并与 `let` 和 `var` 提供的作用域相吻合。

4、两者都支持引发异常，但是这必须在具有 `raises` 函数效果的 `fn` 上显式声明，放置在函数参数列表之后。  

### `__copyinit__` 和 `__moveinit__ `特殊方法
Mojo 支持完整的“值语义”，如 C++ 和 Swift 等语言中所见，它使用 @value 装饰器使定义简单的字段聚合变得非常容易（在编程手册中有更详细的描述）。

对于高级用例，Mojo 允许您定义自定义构造函数（使用 Python 现有的 `__init__`特殊方法）、自定义析构函数（使用现有的 `__del__` 特殊方法）以及使用新的 `__copyinit__ `和 `__moveinit__` 特殊方法自定义复制和移动构造函数。

这些低级定制挂钩在进行低级系统编程时很有用，例如 手动内存管理。 例如，考虑一个堆数组类型，它需要在构造时为数据分配内存，并在销毁值时销毁它：
```python
from Pointer import Pointer
from IO import print_no_newline

struct HeapArray:
    var data: Pointer[Int]
    var size: Int
    var cap: Int

    fn __init__(inout self):
        self.cap = 16
        self.size = 0
        self.data = Pointer[Int].alloc(self.cap)

    fn __init__(inout self, size: Int, val: Int):
        self.cap = size * 2
        self.size = size
        self.data = Pointer[Int].alloc(self.cap)
        for i in range(self.size):
            self.data.store(i, val)
     
    fn __del__(owned self):
        self.data.free()

    fn dump(self):
        print_no_newline("[")
        for i in range(self.size):
            if i > 0:
                print_no_newline(", ")
            print_no_newline(self.data.load(i))
        print("]")
```

此数组类型是使用低级函数实现的，以展示其工作原理的简单示例。 但是，如果您继续尝试，您可能会感到惊讶：
```python
var a = HeapArray(3, 1)
a.dump()   # Should print [1, 1, 1]
# Uncomment to see an error:
# var b = a  # ERROR: Vector doesn't implement __copyinit__

var b = HeapArray(4, 2)
b.dump()   # Should print [2, 2, 2, 2]
a.dump()   # Should print [1, 1, 1]
```

编译器不允许我们复制数组：HeapArray 包含一个 Pointer 实例（相当于低级 C 指针），Mojo 不知道“指针的含义”或“如何指向” 复制它”——这就是应用程序级程序员应该使用更高级别类型（如数组和切片）的原因之一！ 更一般地说，某些类型（如原子数）根本无法复制或移动，因为它们的地址提供了一个身份，就像类实例一样。

在这种情况下，我们确实希望我们的数组可以复制，为了实现这一点，我们实现了 `__copyinit__` 特殊方法，通常看起来像这样：
```python
struct HeapArray:
    var data: Pointer[Int]
    var size: Int
    var cap: Int

    fn __init__(inout self):
        self.cap = 16
        self.size = 0
        self.data = Pointer[Int].alloc(self.cap)

    fn __init__(inout self, size: Int, val: Int):
        self.cap = size * 2
        self.size = size
        self.data = Pointer[Int].alloc(self.cap)
        for i in range(self.size):
            self.data.store(i, val)

    fn __copyinit__(inout self, other: Self):
        self.cap = other.cap
        self.size = other.size
        self.data = Pointer[Int].alloc(self.cap)
        for i in range(self.size):
            self.data.store(i, other.data.load(i))
            
    fn __del__(owned self):
        self.data.free()

    fn dump(self):
        print_no_newline("[")
        for i in range(self.size):
            if i > 0:
                print_no_newline(", ")
            print_no_newline(self.data.load(i))
        print("]")
```
通过此实现，我们上面的代码可以正常工作，并且 b = a 副本会生成一个逻辑上不同的数组实例，该实例具有自己的生命周期和数据。  
Mojo 还支持 `__moveinit__` 方法，它允许 Rust 风格的移动（在生命周期结束时获取一个值）和 C++ 风格的移动（其中值的内容被删除但析构函数仍然运行），并允许定义自定义移动逻辑 . 有关详细信息，请参阅编程手册中的“价值生命周期”部分。  
```python
var a = HeapArray(3, 1)
a.dump()   # Should print [1, 1, 1]
# This is no longer an error:
var b = a

b.dump()   # Should print [1, 1, 1]
a.dump()   # Should print [1, 1, 1]
```
Mojo 提供了对值生命周期的完全控制，包括使类型可复制、只能移动和不可移动的能力。   
这比 Swift 和 Rust 等要求值至少可以移动的语言更具控制力。 如果您好奇如何将 existing 传递给 `__copyinit__` 方法而不创建副本，请查看下面关于借用参数约定的部分。
