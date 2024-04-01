# 特征
_特征_是类型必须实现的一组要求。你可以将其视为一个合同：遵守特征的类型保证实现了特征的所有功能。

特征类似于Java中的_接口_，C++中的_概念_，Swift中的_协议_和Rust中的_特征_。如果您熟悉其中任何一种功能，Mojo特征解决了相同的基本问题。

## 背景

在像Python这样的动态类型语言中，您不需要显式声明两个类是相似的。通过示例最容易说明这一点：

```python
%%python
class Duck:
    def quack(self):
        print("Quack.")

class StealthCow:
    def quack(self):
        print("Moo!")

def make_it_quack_python(maybe_a_duck):
    try:
        maybe_a_duck.quack()
    except:
        print("Not a duck.")

make_it_quack_python(Duck())
make_it_quack_python(StealthCow())
```

`Duck`和`StealthCow`类之间没有任何关联，但它们都定义了一个`quack()`方法，所以它们在`make_it_quack()`函数中的行为是相同的。这是因为Python使用动态分派——它在运行时确定要调用的方法。因此，`make_it_quack_python()`不关心您传递给它的类型，只关心它们是否实现了`quack()`方法。

在静态类型环境中，这种方法行不通：`fn`函数要求您指定每个参数的类型。如果您想在Mojo中编写此示例（不使用特征），您需要为每种输入类型编写一个函数重载。从现在开始，这里的所有示例都是使用Mojo编写的，因此我们将继续称该函数为`make_it_quack()`。

```python
@value
struct Duck:
    fn quack(self):
        print("Quack")

@value
struct StealthCow:
    fn quack(self):
        print("Moo!")

fn make_it_quack(definitely_a_duck: Duck):
    definitely_a_duck.quack()

fn make_it_quack(not_a_duck: StealthCow):
    not_a_duck.quack()

make_it_quack(Duck())
make_it_quack(StealthCow())
```

    Quack
    Moo!

只有两个类的情况还好。但是，您希望支持的类越多，这种方法就越不实际。

您可能会注意到，Mojo版本的`make_it_quack()`不包含`try/except`语句。因为Mojo的静态类型检查确保您只能将`Duck`或`StealthCow`的实例传递给`make_it_quack()`函数。

## 使用特征

特征通过让您定义一组共享的_行为_，让类型可以实现这些行为来解决此问题。然后，您可以编写一个依赖于特征而不是特定类型的函数。例如，让我们使用特征更新`make_it_quack()`示例。第一步是定义一个特征：

```python
trait Quackable:
    fn quack(self):
        ...
```

特征看起来很像结构体，只是它以`trait`关键字引入。目前，特征只能包含方法签名，不能包含方法的实现。每个方法签名后面必须跟着三个点（`...`），表示该方法未实现。

TODO

在将来，我们计划支持在特征内部定义字段和默认方法实现。不过，目前特征只能声明方法签名。

接下来，我们创建一些符合`Quackable`特征的结构体。为了表明一个结构体符合一个特征，在结构体名称后面的括号中包含特征名称。也可以用逗号分隔多个特征（如果您熟悉Python，这看起来就像是给结构体添加了一个特定的元组类型注释）。

```python
@value
struct Duck(Quackable):
    fn quack(self):
        print("Quack")

@value
struct StealthCow(Quackable):
    fn quack(self):
        print("Moo!")
```

现在，我们可以重写`make_it_quack()`函数，使其接受任何符合`Quackable`特征的类型：

```python
fn make_it_quack(quackable: Quackable):
    quackable.quack()
```

我们再次使用`make_it_quack()`函数：

```python
make_it_quack(Duck())
make_it_quack(StealthCow())
```

    Quack
    Moo!

这次，我们只编写了一个`make_it_quack()`函数，并且它可以接受任何符合`Quackable`特征的类型。这使得我们可以更灵活地编写代码，并且不需要为每种类型编写重载函数。一旦一个类型实现了`Quackable`特征，它就可以与任何依赖于该特征的函数一起使用。这为代码的复用和组合提供了更多的灵活性。

## 特征组合

Mojo中的特征是可组合的。这意味着您可以将多个特征组合在一起，以创建一个更大的特征。例如，假设我们想要创建一个特征，该特征要求实现`Quackable`和`Swimmable`两个特征：

```python
trait Quackable:
    fn quack(self):
        ...

trait Swimmable:
    fn swim(self):
        ...

trait QuackAndSwim(Quackable, Swimmable):
    ...
```

在这个例子中，我们定义了一个新的特征`QuackAndSwim`，它要求实现`Quackable`和`Swimmable`两个特征。通过这种方式，我们可以将多个特征组合在一起，以创建一个新的特征。

结构体可以实现一个或多个特征。让我们来看一个例子：

```python
@value
struct Duck(QuackAndSwim):
    fn quack(self):
        print("Quack")

    fn swim(self):
        print("Swimming")
```

在这个例子中，我们定义了一个结构体`Duck`，它实现了`QuackAndSwim`特征。在`Duck`结构体中，我们必须提供`quack()`和`swim()`方法的实现，因为它们在`QuackAndSwim`特征中被声明。

现在，我们可以使用`make_it_quack()`和`make_it_swim()`函数，这些函数接受`QuackAndSwim`特征的实例作为参数：

```python
fn make_it_quack(quackable: Quackable):
    quackable.quack()

fn make_it_swim(swimmable: Swimmable):
    swimmable.swim()

make_it_quack(Duck())
make_it_swim(Duck())
```

    Quack
    Swimming

在这个例子中，我们使用`Duck`结构体作为参数调用了两个函数，因为`Duck`实现了`QuackAndSwim`特征。这使得我们可以更灵活地组合和重用代码。

## Trait继承

Trait可以继承其他Trait。继承另一个Trait的Trait将包含父Trait声明的所有要求。例如：

```python
trait Animal:
    fn make_sound(self):
        ...

# Bird继承自Animal
trait Bird(Animal):
    fn fly(self):
        ...
```

由于`Bird`继承自`Animal`，符合`Bird` Trait的结构体需要实现**both** `make_sound()`和`fly()`方法。并且由于每个`Bird`都符合`Animal`，所以符合`Bird` Trait的结构体可以传递给任何需要`Animal`的函数。

要从多个Traits继承，只需在括号内添加以逗号分隔的Traits列表。例如，您可以定义一个`NamedAnimal` Trait，将`Animal` Trait的要求与新的`Named` Trait的要求结合起来：

```python
trait Named:
    fn get_name(self) -> String:
        ...

trait NamedAnimal(Animal, Named):
    pass
```

## Traits和生命周期方法

Trait可以指定所需的生命周期方法，包括构造函数、复制构造函数和移动构造函数。

例如，以下代码创建了一个`MassProducible` Trait。`MassProducible`类型具有默认（无参数）构造函数，并且可以移动。它使用内置的`Movable` Trait，该Trait要求类型具有移动构造函数。

`factory[]()`函数返回一个新构造的`MassProducible`类型的实例。

```python
trait DefaultConstructible:
    fn __init__(inout self): ...

trait MassProducible(DefaultConstructible, Movable):
    pass

fn factory[T: MassProducible]() -> T:
    return T()

struct Thing(MassProducible):
    var id: Int

    fn __init__(inout self):
        self.id = 0

    fn __moveinit__(inout self, owned existing: Self):
        self.id = existing.id

var thing = factory[Thing]()
```

请注意，`@register_passable("trivial")`类型对其生命周期方法有限制：它们不能定义复制或移动构造函数，因为它们不需要任何自定义逻辑。

为了Trait的一致性，编译器将trivial类型视为可复制和可移动的。

## 内置Traits

Mojo标准库当前包含一些Traits。它们由许多标准库类型实现，您也可以在自己的类型上实现这些Traits：

  - `AnyType`
  - `Boolable`
  - `CollectionElement`
  - `Copyable`
  - `Intable`
  - `KeyElement`
  - `Movable`
  - `PathLike`
  - `Sized`
  - `Stringable`

上面链接的API参考文档中包含了每个Trait的使用示例。以下部分讨论了其中一些Traits。

### `Sized` Trait

`Sized` Trait用于识别具有可测量长度（例如字符串和数组）的类型。

具体来说，`Sized`要求类型实现`__len__()`方法。该Trait在内置的`len()`函数中使用。例如，如果您正在编写自定义列表类型，可以实现此Trait，以便您的类型与`len()`一起使用：

```python
struct MyList(Sized):
    var size: Int
    # ...

    fn __init__(inout self):
        self.size = 0

    fn __len__(self) -> Int:
        return self.size

print(len(MyList()))
```

### `Intable`和`Stringable` Traits

`Intable`和`Stringable` Traits用于标识可以隐式转换为`Int`和`String`的类型。

任何符合`Stringable`的类型都可以使用内置的`print()`和`str()`函数：

```python
@value
struct Pet(Stringable):
    var name: String
    var type: String

    fn __str__(self) -> String:
        return "This is a " + self.type + " named " + self.name

var spot = Pet("Spot", "dog")
print(spot)
```

类似地，符合`Intable`的类型可以与内置的`int`函数一起使用。您可以找到`Intable` API参考中的示例。

### `AnyType` Trait

在构建泛型容器类型时，一个挑战是在容器销毁时知道如何处理容器中包含的项。任何动态分配内存的类型都需要提供一个析构函数（`__del__()`方法），以释放分配的内存。但并非所有类型都有析构函数，并且您的Mojo代码无法确定哪种类型。

`AnyType` Trait解决了这个问题：每个Trait隐式继承自`AnyType`，并且所有结构体都符合`AnyType`，这保证了该类型具有析构函数。对于没有析构函数的类型，Mojo添加了一个空操作的析构函数。这意味着您可以在任何类型上调用析构函数。

这使得可以构建泛型集合而不会泄露内存。当集合的析构函数被调用时，它可以安全地调用其包含的每个项的析构函数。

## 带有Traits的泛型结构体

在定义泛型容器时，也可以使用Traits。泛型容器是一个可以容纳不同数据类型的容器（例如数组或哈希映射）。在动态语言（如Python）中，很容易将不同类型的项添加到容器中。但在静态类型的环境中，编译器需要能够在编译时识别类型。例如，如果容器需要复制一个值，编译器需要验证该类型是否可以复制。

`List`类型是一个泛型容器的示例。单个`List`只能容纳单个数据类型。例如，您可以创建一个整数值的列表：

```python
from collections import List

var list = ListInt
for i in range(len(list)):
    print(list[i], sep=" ", end="")
```

您可以使用Traits为存储在容器中的元素定义要求。例如，`List`要求可以被移动和复制的元素。要在`List`中存储一个结构体，该结构体需要符合`CollectionElement` Trait，该Trait要求具有复制构造函数和移动构造函数。

构建泛型容器是一个高级主题。有关介绍，请参阅关于参数化结构体的部分。