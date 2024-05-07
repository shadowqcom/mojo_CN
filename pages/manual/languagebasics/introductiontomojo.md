# Mojo入门

在此时，您应该已经设置好了Mojo SDK并运行了“Hello world”。现在让我们来讨论如何编写Mojo代码。

您可能已经知道Mojo被设计为Python的超集。因此，如果您了解Python，那么许多Mojo代码都会看起来很熟悉。然而，Mojo首先是为高性能系统编程而设计的，具有强类型检查、内存安全、下一代编译器技术等特性。因此，Mojo与C++和Rust等语言也有很多共同之处。

然而，我们设计Mojo时考虑到了灵活性，因此您可以根据需要逐步采用诸如强类型检查之类的系统编程特性，Mojo并不*要求*强类型检查。

在本页中，我们将介绍基本的Mojo语法，以便您可以快速开始编码并理解遇到的其他Mojo代码。Mojo手册中的后续部分将更深入地介绍这些主题，并在适当的位置提供链接。

让我们开始吧！🔥

## 函数

Mojo函数可以使用`fn`或`def`进行声明。

使用`fn`声明将强制进行类型检查和内存安全行为（类似Rust的风格），而`def`不允许类型声明和动态行为（类似Python的风格）。

例如，这个`def`函数不需要声明参数类型或返回类型：

```mojo
def greet(name):
    return "Hello, " + name + "!"
```

而将相同的内容作为`fn`函数需要您指定参数类型和返回类型，如下所示：

```mojo
fn greet2(name: String) -> String:
    return "Hello, " + name + "!"
```

这两个函数的结果是相同的，但是`fn`函数提供了编译时检查，以确保函数接收和返回正确的类型。而`def`函数如果接收到错误的类型可能会在运行时失败。

目前，Mojo不支持在`.mojo`（或`.🔥`）文件中使用顶级代码，因此每个程序都必须包含一个名为`main()`的函数作为入口点。您可以使用`def`或`fn`进行声明：

```mojo
def main():
   print("Hello, world!")
```

有关更多详细信息，请参阅有关函数的页面。

### 值的拥有权和参数的可变性

如果您想知道函数参数是按值传递还是按引用传递，简短的答案是：`def`函数通过值传递参数，而`fn`函数通过不可变引用传递参数。

稍长一点的答案是，Mojo允许您为每个参数指定是按值传递（`owned`），还是按引用传递（对于不可变引用为`borrowed`，对于可变引用为`inout`）。

这个特性与Mojo的值拥有模型紧密相关，该模型通过确保只有一个变量在任何给定时间“拥有”一个值（但允许其他变量引用它），从而保护您免受内存错误的影响。所有权还确保当所有者的生命周期结束时（并且没有未解引用的引用），该值将被销毁。

但这依然是一个简短的答案，因为进一步深入将涉及到复杂的内容，超出了本节的范围。完整的答案请参阅关于值拥有权的部分。

## 变量

您可以使用`var`关键字声明变量。或者，如果您的代码位于`def`函数中，则可以省略`var`（在`fn`函数中，必须包含`var`关键字）。

例如：
```mojo
def do_math(x):
    var y = x + x
    y = y * y
    print(y)
```

可选地，您还可以像这样声明变量类型：

```mojo
def add_one(x):
    var y: Int = 1
    print(x + y)
```

即使在`fn`函数中，声明变量类型也是可选的（只有`fn`函数中必须声明参数和返回类型）。

有关更多详细信息，请参阅有关变量的页面。

## 结构体

您可以使用`struct`构建类型（或"对象"）的高级抽象。

Mojo中的`struct`类似于Python中的`class`：它们都支持方法、字段、运算符重载、用于元编程的装饰器等。然而，Mojo结构体完全是静态的-它们在编译时绑定，因此不允许动态分派或对结构进行任何运行时更改（Mojo将在未来支持Python风格的类）。

例如，这是一个基本的结构体：

```mojo
struct MyPair:
    var first: Int
    var second: Int

    fn __init__(inout self, first: Int, second: Int):
        self.first = first
        self.second = second

    fn dump(self):
        print(self.first, self.second)
```

这是如何使用它的示例：

```mojo
fn use_mypair():
    var mine = MyPair(2, 4)
    mine.dump()
```

有关更多详细信息，请参阅有关结构体的页面。

### 特性

特性类似于结构体的特征模板。如果要创建具有特性定义的结构体，您必须实现每个特性（例如每个方法）。特性中的每个特征都是结构体的"要求"，当结构体实现了每个要求时，就说它"符合"该特性。

目前，特性可以定义的特征仅限于方法签名。此外，特性目前无法为方法实现默认行为。

使用特性允许您编写可以接受符合特性的任何类型的通用函数，而不仅仅是接受特定类型的函数。

例如，以下是如何创建一个特性（注意函数没有实现）：

```mojo
trait SomeTrait:
    fn required_method(self, x: Int): ...
```

以下是如何使用它的示例：

```mojo
struct MyStruct:
    fn required_method(self, x: Int):
        print("Required method implementation")

fn use_trait():
    var my_struct = MyStruct()
    my_struct.required_method(10)
```

有关更多详细信息，请参阅有关特性的页面。

以上是Mojo文档的简要介绍。如需详细了解，请参阅完整文档。