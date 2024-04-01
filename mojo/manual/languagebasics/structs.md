# 结构体
Mojo结构体是一种数据结构，允许您封装字段和在抽象上操作的方法，例如数据类型或对象。**字段**是保存与结构体相关数据的变量，**方法**是结构体内的函数，通常对字段数据执行操作。

例如，如果您正在构建一个图形程序，可以使用结构体定义一个`Image`，其中包含用于存储每个图像信息（例如像素）的字段和执行操作（例如旋转）的方法。

就大部分而言，Mojo的结构体格式旨在为程序中使用的高级数据类型提供静态、内存安全的数据结构。例如，Mojo标准库中的所有数据类型（例如`Int`、`Bool`、`String`和`Tuple`）都被定义为结构体。

如果您了解Mojo中函数和变量的工作原理，您可能已经注意到Mojo旨在在`def`函数中提供动态编程特性，同时在`fn`函数中强制执行更强的代码安全性。在处理结构体时，Mojo更倾向于安全一方：您仍然可以选择在方法的声明中使用`def`或`fn`，但是所有字段都必须使用`var`声明。

## 结构体定义

您可以像这样定义一个简单的结构体`MyPair`，具有两个字段：

```python
struct MyPair:
    var first: Int
    var second: Int
```

但是，您不能实例化此结构体，因为它没有构造函数方法。因此，下面是带有构造函数以初始化两个字段的定义：

```python
struct MyPair:
    var first: Int
    var second: Int

    fn __init__(inout self, first: Int, second: Int):
        self.first = first
        self.second = second
```

请注意，`__init__()`方法中的第一个参数是`inout self`。暂时忽略`inout`（它是一个参数约定，声明`self`是一个可变引用）；您现在只需要知道`self`必须是第一个参数。它引用当前的结构体实例（它允许方法中的代码引用“自身”）。*当您调用构造函数时，您从不为`self`传递值- Mojo会自动传递它*。

`__init__()`方法是许多特殊方法（也称为“dunder方法”，因为它们有双下划线）之一，它们具有预定的名称。

在声明字段时，不能为其赋值。必须在构造函数中初始化结构体的所有字段（如果尝试将字段留空，则代码将无法编译）。

一旦有了构造函数，您就可以创建`MyPair`的实例并设置字段：

```python
var mine = MyPair(2,4)
print(mine.first)
```
输出结果为：
```
2
```

## 方法

除了像`__init__()`这样的特殊方法之外，您可以向结构体添加任何其他方法。例如：

```python
struct MyPair:
    var first: Int
    var second: Int

    fn __init__(inout self, first: Int, second: Int):
        self.first = first
        self.second = second

    fn get_sum(self) -> Int:
        return self.first + self.second
```

```python
var mine = MyPair(6, 8)
print(mine.get_sum())
```
输出结果为：
```
14
```

请注意，`get_sum()`方法也使用了`self`参数，因为这是唯一一种可以在方法中访问结构体字段的方式。`self`只是一种约定，您可以使用任何名称来引用作为第一个参数传递的结构体实例。

需要隐式`self`参数的方法被称为实例方法，因为它们对结构体的实例进行操作。

结构体方法中的`self`参数是在`fn`函数中唯一一个不需要类型的参数。如果需要的话，您可以包含它，但是可以省略它，因为Mojo已经知道它的类型（在这种情况下是`MyPair`）。

### 静态方法

结构体还可以具有静态方法。静态方法可以在不创建结构体实例的情况下调用。与实例方法不同，静态方法不接收隐式的`self`参数，因此无法访问结构体上的任何字段。

要声明静态方法，请使用`@staticmethod`装饰器，并且不要包含`self`参数：

```python
struct Logger:

    fn __init__(inout self):
        pass

    @staticmethod
    fn log_info(message: String):
        print("Info: ", message)
```

您可以通过在类型（在本例中为`Logger`）上调用它来调用静态方法。也可以在类型的实例上调用它。下面两种形式都展示了：

```python
Logger.log_info("Static method called.")
var l = Logger()
l.log_info("Static method called from instance.")
```
输出结果为：
```
Info:  Static method called.
Info:  Static method called from instance.
```

## 结构体与类的比较

如果您熟悉其他面向对象的语言，那么结构体可能听起来很像类，它们有一些相似之处，但也有一些重要的区别。最终，Mojo还将支持类以匹配Python类的行为。

让我们比较一下Mojo结构体和Python类。它们都支持方法、字段、运算符重载、用于元编程的装饰器等等，但它们的关键区别如下：

- Python类是动态的：它们支持动态分派、猴子补丁（或“swizzling”）和在运行时动态绑定实例字段。

- Mojo结构体是静态的：它们在编译时绑定（无法在运行时添加方法）。结构体允许您在性能上进行灵活性和安全性之间的权衡，同时易于使用。

- Mojo结构体不支持继承（“子类化”），但结构体可以实现特质。

- Python类支持类属性-共享的值。

- Mojo 结构不支持静态数据成员。

从语法上讲，与 Python 类相比最大的区别是结构中的所有字段都必须使用 显式声明var。

在 Mojo 中，结构的结构和内容是在编译时设置的，并且在程序运行时无法更改。与 Python 不同的是，在 Python 中您可以动态添加、删除或更改对象的属性，而 Mojo 不允许对结构进行这种操作。

然而，结构的静态特性有助于 Mojo 更快地运行代码。程序确切地知道在哪里可以找到结构体的信息以及如何使用它，而无需在运行时执行任何额外的步骤或延迟。

Mojo 的结构也可以很好地与您可能已经从 Python 中了解的功能配合使用，例如运算符重载（它允许您 使用特殊方法更改数学符号对自己数据的喜欢+和处理方式）。-

如上所述，所有 Mojo 的标准类型（Int、String等）都是使用结构体创建的，而不是硬连线到语言本身中。这为您在编写代码时提供了更大的灵活性和控制力，这意味着您可以定义具有所有相同功能的自己的类型（对标准库类型没有特殊处理）。

## 特殊方法
特殊方法（或“dunder 方法”）是__init__()预先确定的方法名称，您可以在结构中定义它们来执行特殊任务。

虽然可以使用方法名称调用特殊方法，但重点是您永远不应该这样做，因为 Mojo 在需要它们的情况下会自动调用它们（这就是为什么它们也被称为“魔术方法”）。例如，__init__()当您创建结构体实例时，Mojo 会调用该方法；当 Mojo 销毁实例时，它会调用该 __del__()方法（如果存在）。

即使是内置的运算符行为（+、<、==、|等）也被实现为特殊方法，Mojo 隐式调用这些方法来对运算符所应用的类型执行操作或比较。

Mojo 支持一长串特殊方法；太多了，无法在这里讨论，但它们通常与Python 的所有特殊方法相匹配 ，并且通常完成两种类型的任务之一：

运算符重载：许多特殊方法被设计为重载运算符，例如<（小于）、+（添加）和|（或），以便它们能够适当地处理每种类型。例如，查看为 Mojo 的 Inttype列出的方法。其中一种方法是__lt__()，Mojo 调用该方法来执行两个整数之间的小于比较（例如， num1 < num2）。

生命周期事件处理：这些特殊方法处理实例的生命周期和值所有权。例如，__init__()划分__del__() 实例生命周期的开始和结束，其他特殊方法定义其他生命周期事件的行为，例如如何复制或移动值。

您可以在有关值生命周期的部分中了解有关生命周期特殊方法的所有信息 。但是，大多数结构都是其他类型的简单聚合，因此除非您的类型在创建、复制、移动或销毁实例时需要自定义行为，否则您可以通过添加以下内容来合成您需要的基本生命周期方法（并节省一些时间）@value装饰师。

@value
当您将@value装饰器添加到结构体时，Mojo 将合成基本的生命周期方法，以便您的对象提供完整的值语义。具体来说，它生成__init__()、 __copyinit__()和__moveinit__()方法，允许您以值语义且与 Mojo 所有权模型兼容的方式构造、复制和移动结构类型。

例如：
```python
@value
struct MyPet:
    var name: String
    var age: Int
```
Mojo 会注意到您没有成员初始化器、移动构造函数或复制构造函数，它会为您合成这些，就像您编写的一样：
```python
struct MyPet:
    var name: String
    var age: Int

    fn __init__(inout self, owned name: String, age: Int):
        self.name = name^
        self.age = age

    fn __copyinit__(inout self, existing: Self):
        self.name = existing.name
        self.age = existing.age

    fn __moveinit__(inout self, owned existing: Self):
        self.name = existing.name^
        self.age = existing.age
```
如果没有复制和移动构造函数，以下代码将无法工作，因为 Mojo 不知道如何复制 的实例MyPet：
```python
var dog = MyPet("Charlie", 5)
var poodle = dog
print(poodle.name)
```
```python
Charlie
```

当您添加@value装饰器时，Mojo 只会在上面尚不存在的情况下合成每个特殊方法。也就是说，您仍然可以实现每个方法的自定义版本。

除了inout您已经在 中看到的参数约定 之外__init__()，此代码还引入了owned，这是另一个参数约定，可确保参数具有该值的唯一所有权。有关更多详细信息，请参阅有关价值所有权的部分。