# 值的生命周期
在Mojo中，一个值的生命周期从变量初始化开始，直到该值最后被使用时Mojo销毁它。本页介绍了Mojo中每个值是如何创建、复制和移动的（下一页介绍了值的销毁）。

Mojo中的所有数据类型（包括标准库中的基本类型如`Bool`、`Int`和`String`，以及复杂类型如`SIMD`和`object`）都被定义为结构体。这意味着任何数据的创建、复制和销毁都遵循相同的生命周期规则，你也可以定义自己的数据类型，使其工作方式完全相同。

Mojo结构体不会得到任何默认的生命周期方法，如构造函数、拷贝构造函数或移动构造函数。这意味着你可以创建一个没有构造函数的结构体，但是不能实例化它，它只能作为静态方法的一种命名空间。例如：

```mojo
struct NoInstances:
    var state: Int

    @staticmethod
    fn print_hello():
        print("Hello world!")
```

没有构造函数，所以它不能被实例化，因此它没有生命周期。`state`字段也是无用的，因为它不能被初始化（Mojo结构体不支持默认字段值，必须在构造函数中初始化）。

因此，你唯一能做的就是调用静态方法：

```mojo
NoInstances.print_hello()
```

## 构造函数

要创建Mojo类型的实例，需要`__init__()`构造函数方法。构造函数的主要责任是初始化所有字段。例如：

```mojo
struct MyPet:
    var name: String
    var age: Int

    fn __init__(inout self, name: String, age: Int):
        self.name = name
        self.age = age
```

现在我们可以创建一个实例：

```mojo
var mine = MyPet("Loki", 4)
```

`MyPet`的实例也可以被借用和销毁，但是目前不能被复制或移动。

我们认为这是一个很好的默认起点，因为没有内置的生命周期事件和意外的行为。作为类型的作者，你必须明确地决定类型是否可以被复制或移动，以及如何实现复制和移动构造函数。

Mojo不需要析构函数来销毁对象。只要结构体中的所有字段都是可销毁的（标准库中的每种类型都是可销毁的，除了指针），Mojo就知道如何在其生命周期结束时销毁该类型。我们将在值的销毁部分进行更详细的讨论。

### 重载构造函数

与任何其他函数/方法一样，你可以重载`__init__()`构造函数以不同的参数初始化对象。例如，你可能希望有一个默认构造函数，设置一些默认值并且不带任何参数，然后有其他接受更多参数的构造函数。

只要知道，为了修改任何字段，每个构造函数都必须使用`inout`约定声明`self`参数。如果你想从一个构造函数调用另一个构造函数，你只需像外部调用那样调用该构造函数（不需要传递`self`）。

例如，以下是如何从重载构造函数委托工作的示例：

```mojo
struct MyPet:
    var name: String
    var age: Int

    fn __init__(inout self):
        self.name = ""
        self.age = 0

    fn __init__(inout self, name: String):
        self = MyPet()
        self.name = name
```

### 字段初始化

请注意，在上面的示例中，每个构造函数结束时，所有字段都必须被初始化。这是构造函数的唯一要求。

实际上，`__init__()`构造函数在构造函数之前会自动为所有字段分配默认值（例如，`Int`字段的默认值为0，`String`字段的默认值为""）。但是，为了避免意外行为和代码的不一致性，最好在构造函数中显式初始化所有字段。

## 复制构造函数

除了构造函数之外，你还可以定义复制构造函数来实现结构体的复制。复制构造函数是一个特殊的构造函数，它接受相同类型的实例作为参数，并创建一个新的实例，其字段与参数实例相同。

复制构造函数的命名约定是`__copy__()`。例如，以下是如何为`MyPet`结构体实现复制构造函数的示例：

```mojo
struct MyPet:
    var name: String
    var age: Int

    fn __init__(inout self, name: String, age: Int):
        self.name = name
        self.age = age

    fn __copy__(self) -> MyPet:
        return MyPet(self.name, self.age)
```

现在我们可以使用复制构造函数创建一个新的`MyPet`实例，其字段与现有实例相同：

```mojo
var mine = MyPet("Loki", 4)
var yours = mine.__copy__()
```

请注意，复制构造函数返回一个新的实例，因此我们必须将其分配给一个新的变量。

复制构造函数对于创建结构体的副本非常有用，尤其是当结构体具有复杂的内部状态时。但是，请注意，复制构造函数只复制字段的值，而不复制字段本身。这意味着如果字段是引用类型（如`object`），则复制构造函数只会复制引用，而不会创建新的引用对象。

## 移动构造函数

除了复制构造函数之外，你还可以定义移动构造函数来实现结构体的移动。移动构造函数是一个特殊的构造函数，它接受相同类型的实例作为参数，并创建一个新的实例，其字段与参数实例相同。但是，移动构造函数还会将参数实例的字段设置为默认值，以避免重复销毁。

移动构造函数的命名约定是`__move__()`。例如，以下是如何为`MyPet`结构体实现移动构造函数的示例：

```mojo
struct MyPet:
    var name: String
    var age: Int

    fn __init__(inout self, name: String, age: Int):
        self.name = name
        self.age = age

    fn __move__(inout self, other: MyPet):
        self = other
        other.name = ""
        other.age = 0
```

现在我们可以使用移动构造函数创建一个新的`MyPet`实例，并将参数实例的字段设置为默认值：

```mojo
var mine = MyPet("Loki", 4)
var yours = mine.__move__()
```

移动构造函数非常有用，特别是当你想要转移资源所有权而不复制它们时。在移动构造函数中，你可以将资源（如文件句柄或网络连接）从一个实例转移到另一个实例，而不需要进行昂贵的复制操作。

请注意，移动构造函数也返回一个新的实例，并且我们必须将其分配给一个新的变量。移动构造函数还接受一个`other`参数，该参数是要移动的实例。在移动构造函数内部，我们将`other`赋值给`self`，然后将`other`的字段设置为默认值。

## 总结

Mojo中的值的生命周期由构造函数、复制构造函数和移动构造函数控制。构造函数用于创建新的实例，并初始化所有字段。复制构造函数用于创建与现有实例相同字段值的新实例。移动构造函数用于创建与现有实例相同字段值的新实例，并将现有实例的


## 复制构造函数

当Mojo遇到赋值运算符（`=`）时，它会尝试通过调用该类型的复制构造函数（`__copyinit__()`方法）来复制右侧的值。因此，类型的作者有责任实现`__copyinit__()`以返回值的副本。

例如，上面的`MyPet`类型没有复制构造函数，因此以下代码无法编译通过：

```mojo
var mine = MyPet("Loki", 4)
var yours = mine  # 这需要一个副本，但是MyPet没有复制构造函数
```

为了使其工作，我们需要添加复制构造函数，如下所示：

```mojo
struct MyPet:
    var name: String
    var age: Int

    fn __init__(inout self, name: String, age: Int):
        self.name = name
        self.age = age

    fn __copyinit__(inout self, existing: Self):
        self.name = existing.name
        self.age = existing.age
```

`Self`（大写的"S"）是当前类型名称（在本例中为`MyPet`）的别名。使用这个别名是一种最佳实践，可以避免在引用当前结构名称时出现任何错误。

还要注意`__copyinit__()`中的`existing`参数是不可变的，因为`fn`函数中的默认参数约定是`borrowed`，这是一个好的做法，因为该函数不应该修改要复制的值的内容。

现在这段代码可以正常工作来进行复制了：

```mojo
var mine = MyPet("Loki", 4)
var yours = mine
```

与其他语言相比，Mojo的复制行为不同之处在于`__copyinit__()`被设计为对类型中的所有字段执行深复制（按值语义）。也就是说，它复制堆分配的值，而不仅仅复制指针。

然而，Mojo编译器不强制执行这一点，所以类型的作者有责任使用值语义实现`__copyinit__()`。例如，下面是一个在复制构造函数中执行深复制的新的`HeapArray`类型：

```mojo
struct HeapArray:
    var data: Pointer[Int]
    var size: Int
    var cap: Int

    fn __init__(inout self, size: Int, val: Int):
        self.size = size
        self.cap = size * 2
        self.data = Pointer[Int].alloc(self.cap)
        for i in range(self.size):
            self.data.store(i, val)

    fn __copyinit__(inout self, existing: Self):
        # 深复制现有值
        self.size = existing.size
        self.cap = existing.cap
        self.data = Pointer[Int].alloc(self.cap)
        for i in range(self.size):
            self.data.store(i, existing.data.load(i))
        # `existing`的生命周期保持不变

    fn __del__(owned self):
        # 我们必须释放堆分配的数据，但是Mojo知道如何销毁其他字段
        self.data.free()

    fn append(inout self, val: Int):
        # 为演示目的更新数组
        if self.size < self.cap:
            self.data.store(self.size, val)
            self.size += 1
        else:
            print("Out of bounds")

    fn dump(self):
        # 为演示目的打印数组内容
        print("[", end="")
        for i in range(self.size):
            if i > 0:
                print(", ", end="")
            print(self.data.load(i), end="")
        print("]")
```

注意，`__copyinit__()`不会复制`Pointer`值（这样做会使复制的值引用与原始值相同的`data`内存地址，这是一种浅复制）。相反，我们初始化一个新的`Pointer`来分配一个新的内存块，然后复制所有堆分配的值（这是一种深复制）。

因此，当我们复制`HeapArray`的实例时，每个副本在堆上都有自己的值，因此对一个## 复制构造函数

当Mojo遇到赋值运算符（`=`）时，它尝试通过调用该类型的复制构造函数（`__copyinit__()`方法）来复制右侧的值。因此，类型的作者有责任实现`__copyinit__()`以返回值的副本。

例如，上面的`MyPet`类型没有复制构造函数，因此以下代码无法编译通过：

```mojo
var mine = MyPet("Loki", 4)
var yours = mine  # This requires a copy, but MyPet has no copy constructor
```

为了使其工作，我们需要添加复制构造函数，如下所示：

```mojo
struct MyPet:
    var name: String
    var age: Int

    fn __init__(inout self, name: String, age: Int):
        self.name = name
        self.age = age

    fn __copyinit__(inout self, existing: Self):
        self.name = existing.name
        self.age = existing.age
```

`Self`（大写的"S"）是当前类型名称（在本例中为`MyPet`）的别名。使用这个别名是一种最佳实践，可以避免在引用当前结构名称时出现任何错误。

还要注意`__copyinit__()`中的`existing`参数是不可变的，因为`fn`函数中的默认参数约定是`borrowed`—这是一个好的做法，因为该函数不应该修改要复制的值的内容。

现在这段代码可以正常工作来进行复制了：

```mojo
var mine = MyPet("Loki", 4)
var yours = mine
```

与其他语言相比，Mojo的复制行为不同之处在于`__copyinit__()`被设计为对类型中的所有字段执行深复制（按值语义）。也就是说，它复制堆分配的值，而不仅仅复制指针。

然而，Mojo编译器不强制执行这一点，所以类型的作者有责任使用值语义实现`__copyinit__()`。例如，下面是一个在复制构造函数中执行深复制的新的`HeapArray`类型：

```mojo
struct HeapArray:
    var data: Pointer[Int]
    var size: Int
    var cap: Int

    fn __init__(inout self, size: Int, val: Int):
        self.size = size
        self.cap = size * 2
        self.data = Pointer[Int].alloc(self.cap)
        for i in range(self.size):
            self.data.store(i, val)

    fn __copyinit__(inout self, existing: Self):
        # 深复制现有值
        self.size = existing.size
        self.cap = existing.cap
        self.data = Pointer[Int].alloc(self.cap)
        for i in range(self.size):
            self.data.store(i, existing.data.load(i))
        # `existing`的生命周期保持不变

    fn __del__(owned self):
        # 我们必须释放堆分配的数据，但是Mojo知道如何销毁其他字段
        self.data.free()

    fn append(inout self, val: Int):
        # 为演示目的更新数组
        if self.size < self.cap:
            self.data.store(self.size, val)
            self.size += 1
        else:
            print("Out of bounds")

    fn dump(self):
        # 为演示目的打印数组内容
        print("[", end="")
        for i in range(self.size):
            if i > 0:
                print(", ", end="")
            print(self.data.load(i), end="")
        print("]")
```

注意，`__copyinit__()`不会复制`Pointer`值（这样做会使复制的值引用与原始值相同的`data`内存地址，这是一种浅复制）。相反，我们初始化一个新的`Pointer`来分配一个新的内存块，然后复制所有堆分配的值（这是一种深复制）。

因此，当我们复制`HeapArray`的实例时，每个副本在堆上都有自己的值，因此对一个值的更改不会影响其他值，如下所示：

```mojo
fn copies():
    var a = HeapArray(2, 1)
    var b = a    # 调用复制构造函数
    a.dump()     # 打印 [1, 1]
    b.dump()     # 打印 [1, 1]

    b.append(2)  # 更改复制的数据
    b.dump()     # 打印 [1, 1, 2]
    a.dump()     # 打印 [1, 1]（原始数据没有更改）
```

在`HeapArray`中，我们必须使用`__del__()`析构函数在`HeapArray`的生命周期结束时释放堆分配的数据，但是Mojo会自动销毁所有其他字段，当它们各自的生命周期结束时。我们将在值的销毁部分更详细地讨论这个析构函数。

如果您的类型不使用任何指针来管理堆分配的数据，那么编写构造函数和复制构造函数只是样板代码，您不需要编写它们。对于大多数不显式管理内存的结构体，您可以将`@value`装饰器添加到结构体定义中，Mojo会自动生成`__init__()`、`__copyinit__()`和`__moveinit__()`方法。

当将一个值传递给以`owned`方式接受参数的函数时，并且该值的生命周期在该点不结束时，Mojo也会调用复制构造函数。如果该值的生命周期在那里结束（通常使用转移运算符`^`表示），则Mojo会调用移动构造函数。

## 移动构造函数

尽管复制值提供了与Mojo的值语义相匹配的可预测行为，但复制某些数据类型可能会对性能产生重大影响。如果您熟悉引用语义，那么在这里的解决方案可能很明显：在传递值时，不要进行复制，而是将值作为引用共享。如果不再需要原始变量，则将其置空以避免任何双重释放或使用后释放错误。这通常被称为移动操作：保存数据的内存块保持不变（内存实际上不移动），但指向该内存的指针移动到新变量。

为了支持移动值，实现`__moveinit__()`方法。`__moveinit__()`方法执行一个消耗性的移动：当原始变量的生命周期结束时，它将一个值的所有权从一个变量转移给另一个变量（也称为“破坏性移动”）。

移动构造函数**不是必需的**来转移对值的所有权。与Rust不同，转移所有权并不总是一个移动操作；移动构造函数只是Mojo转移值所有权实现的一部分。您可以在有关所有权转移的部分中了解更多信息。

当发生移动时，Mojo立即使原始变量失效，防止对其进行任何访问并禁用其析构函数。使原始变量失效对于避免堆分配数据上的内存错误（例如使用后释放和双重释放错误）非常重要。

以下是如何向`HeapArray`示例添加移动构造函数的示例：

```mojo
struct HeapArray:
    var data: Pointer[Int]
    var size: Int

    fn __init__(inout self, size: Int, val: Int):
        self.size = size
        self.data = Pointer[Int].alloc(self.size)
        for i in range(self.size):
            self.data.store(i, val)

    fn __copyinit__(inout self, existing: Self):
        # 深拷贝现有值
        self.size = existing.size
        self.data = Pointer[Int].alloc(self.size)
        for i in range(self.size):
            self.data.store(i, existing.data.load(i))

    fn __moveinit__(inout self, owned existing: Self):
        print("move")
        # 浅拷贝现有值
        self.size = existing.size
        self.data = existing.data
        # 然后，'existing'的生命周期在此结束，但Mojo不调用其析构函数

    fn __del__(owned self):
        self.data.free()

    fn dump(self):
        print("[", end="")
        for i in range(self.size):
            if i > 0:
                print(", ", end="")
            print(self.data.load(i), end="")
        print("]")
```

`__moveinit__()`的关键特点是它将传入的值作为`owned`接收，这意味着该方法对该值具有唯一的所有权。此外，由于这是Mojo仅在执行移动（在所有权转移期间）时调用的dunder方法，`existing`参数保证是对原始值的可变引用，而不是副本（不像其他可能将参数声明为`owned`的方法，如果在不使用`^`转移运算符调用方法时，可能会收到该值的副本）。
也就是说，Mojo只在原始变量的生命周期在转移点实际结束时才调用此移动构造函数。

以下是如何调用`HeapArray`的移动构造函数的示例：

```mojo
fn moves():
    var a = HeapArray(3, 1)

    a.dump()   # 打印 [1, 1, 1]

    var b = a^ # 打印 "move"；`a`的生命周期在此结束

    b.dump()   # 打印 [1, 1, 1]
    #a.dump()  # 错误：使用未初始化的值'a'
```
请注意，`__moveinit__()`对现有字段值执行浅拷贝（它复制指针，而不是在堆上分配新内存），这使得它对于具有昂贵的堆分配值的类型非常有用。

要进一步确保您的类型永远不能被复制，可以通过实现`__moveinit__()`并**排除**`__copyinit__()`使其成为“只移动”类型。只移动类型可以传递给其他变量，并以任何参数约定（`borrowed`、`inout`和`owned`）传递到函数中，唯一的限制是在将其分配给新变量或将其作为`owned`参数传递时必须使用`^`转移运算符来结束只移动类型的生命周期。

对于没有堆分配字段的类型，移动构造函数并不真正有益。在堆栈上复制简单数据类型（如整数、浮点数和布尔值）非常廉价。然而，如果允许复制类型，则通常没有理由禁止移动，因此可以通过添加`@value`装饰器来合成两个构造函数。

## 简单值类型 {#value-decorator}

由于复制和移动构造函数是可选的，Mojo提供了对于特殊用例（如永远不应复制或移动的原子值）的出色控制能力，但大多数结构体是其他类型的简单聚合，应该很容易复制和移动，我们不希望为这些简单值类型编写大量样板构造函数。

为了解决这个问题，Mojo提供了`@value`装饰器，它会为`__init__()`、`__copyinit__()`和`__moveinit__()`方法合成样板代码。

例如，考虑一个简单的结构体：

```mojo
@value
struct MyPet:
    var name: String
    var age: Int
```

Mojo看到`@value`装饰器并注意到您没有一个逐成员初始化器（一个具有每个字段参数的构造函数）、一个复制构造函数或一个移动构造函数，所以它会为您合成它们。结果就像您实际编写了这个：

```mojo
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

Mojo仅在每个生命周期方法不存在时合成它，因此您可以使用`@value`并仍然定义自己的版本来覆盖默认行为。例如，通常使用默认的逐成员和移动构造函数，但创建一个自定义的复制构造函数是相当常见的。另一种常见模式是使用`@value`创建一个逐成员构造函数，并添加接受不同参数集的重载。例如，如果要创建一个没有指定年龄的`MyPet`结构体，可以添加一个重载的构造函数：

```mojo
@value
struct MyPet:
    var name: String
    var age: Int

    fn __init__(inout self, owned name: String):
        self.name = name^
        self.age = 0
```

请注意，这个重载的构造函数**不会**阻止`@value`装饰器合成逐成员构造函数。要覆盖此默认构造函数，您需要添加一个与默认逐成员构造函数具有相同签名的构造函数。

在这段代码中，我们还没有提到的是`__init__()`方法将所有参数都作为`owned`接收，因为构造函数必须拥有每个值来存储它们。这是一个有用的微优化，并且使得可以使用只移动类型。像`Int`这样的简单类型也被传递为`owned`，但由于整数的所有权对于整数来说没有任何意义，我们可以省略该声明和转移运算符(`^`)以简化代码。在这种情况下，转移运算符也只是一种形式上的，因为即使在`self.name = name^`中没有使用它，Mojo编译器也会注意到`name`在这里是最后一次使用，并将此赋值转换为移动，而不是复制+删除。

如果您的类型包含任何只移动字段，Mojo将不会生成复制构造函数，因为它无法复制这些字段。此外，如果您的成员既不可复制也不可移动，`@value`装饰器将完全无法工作。例如，如果在结构体中有像`Atomic`这样的东西，那么它可能不是一个真正的值类型，而且您也不需要复制/移动构造函数。

还请注意，上面的`MyPet## 简单值类型 {#value-decorator}

因为复制和移动构造函数是可选的，Mojo提供了对于特殊用例（比如永远不应该被复制或移动的原子值）的很好的控制能力，但大多数结构体是其他类型的简单聚合，应该很容易被复制和移动，我们不希望为这些简单值类型编写很多样板构造函数。

为了解决这个问题，Mojo提供了`@value`装饰器，它会为`__init__()`、`__copyinit__()`和`__moveinit__()`方法合成样板代码。

例如，考虑一个简单的结构体：

```mojo
@value
struct MyPet:
    var name: String
    var age: Int
```

Mojo看到`@value`装饰器并注意到你没有成员逐一初始化器（一个为每个字段都有参数的构造函数）、复制构造函数或移动构造函数，所以它会为你合成它们。结果就好像你实际上写了这个：

```mojo
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

Mojo只在每个生命周期方法不存在时合成它，所以你可以使用`@value`并仍然定义自己的版本来覆盖默认行为。例如，通常使用默认的成员逐一和移动构造函数，但创建一个自定义的复制构造函数是相当常见的。另一个常见的模式是使用`@value`创建一个成员逐一构造函数，并添加接受不同参数集的重载。例如，如果你想创建一个没有指定年龄的`MyPet`结构体，你可以添加一个重载的构造函数：

```mojo
@value
struct MyPet:
    var name: String
    var age: Int

    fn __init__(inout self, owned name: String):
        self.name = name^
        self.age = 0
```

请注意，这个重载的构造函数**不会**阻止`@value`装饰器合成成员逐一构造函数。要覆盖这个默认构造函数，你需要添加一个与默认成员逐一构造函数具有相同签名的构造函数。

在这段代码中，我们还没有提到的是`__init__()`方法以`owned`形式接收所有参数，因为构造函数必须拥有每个值来存储它们。这是一个有用的微优化，并且允许使用只能移动的类型。像`Int`这样的简单类型也是以`owned`形式传递的，但由于整数的所有权对于整数来说没有任何意义，我们可以省略该声明和传输操作符（`^`）以简化代码。在这种情况下，传输操作符也只是形式上的，因为即使在`self.name = name^`中没有使用它，Mojo编译器也会注意到`name`在这里是最后一次使用，并将此赋值转换为移动，而不是复制+删除。

如果你的类型包含任何只能移动的字段，Mojo将不会生成复制构造函数，因为它无法复制这些字段。此外，如果你的成员既不可复制也不可移动，`@value`装饰器将完全无法工作。例如，如果你的结构体中有像`Atomic`这样的东西，那么它可能不是一个真正的值类型，你也不需要复

## 无关紧要的类型

到目前为止，我们已经讨论了存储在内存中的值，这意味着它们具有可以在函数之间传递的标识（地址）（按引用传递）。对于大多数类型来说，这是很好的，并且对于具有昂贵的复制操作的大型对象来说，这是一种安全的默认值。然而，对于单个整数或浮点数等微小的东西来说，这是低效的。我们将这些类型称为“琐碎的”，因为它们只是可以复制、移动和销毁的“一堆位”。

琐碎类型是我们周围最常见的类型，从语言的角度来看，Mojo不需要对这些类型提供特殊支持，它们是在结构中编写的。通常，这些值非常小，应该通过CPU寄存器传递，而不是通过间接的内存。

因此，Mojo提供了一个结构装饰器来声明这些类型的值：`@register_passable("trivial")`。这个装饰器告诉Mojo该类型应该是可复制和可移动的，但它没有用户定义的逻辑（没有生命周期方法）来执行这些操作。它还告诉Mojo在可能的情况下通过CPU寄存器传递值，这具有明显的性能优势。

你会在标准库中看到像`Int`这样的类型上使用这个装饰器：

```mojo
@register_passable("trivial")
struct Int:
    var value: __mlir_type.index

    fn __init__(value: __mlir_type.index) -> Int:
        return Self {value: value}
    ...
```

我们期望在Mojo标准库类型上普遍使用这个装饰器，但对于一般的应用级代码来说，可以安全地忽略它。

有关更多信息，请参阅`@register_passable`文档。

待办事项

这个装饰器需要重新考虑。缺乏自定义的复制/移动/销毁逻辑和“可在寄存器中传递”的可传递性是独立的问题，应该分开。这种前者的逻辑应该被纳入一个更通用的`@value("trivial")`装饰器中，这与`@register_passable`是独立的。