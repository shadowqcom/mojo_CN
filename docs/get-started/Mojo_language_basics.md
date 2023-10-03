# Mojo语法基础

Mojo 是一种功能强大的编程语言，主要用于高性能系统编程，因此它与 Rust 和 C++ 等其他系统语言有很多共同之处。然而，Mojo也被设计成Python的超集，所以你可能从Python中知道的许多语言功能和概念都可以很好地翻译成Mojo。

例如，如果您位于 REPL 环境或 Jupyter 笔记本中，则可以像 Python 一样运行顶级代码：

```
$ print("Hello Mojo!")
Hello Mojo!
```

在其他系统编程语言中，您通常看不到这一点。

Mojo保留了Python的动态功能和语言语法，它甚至允许你从Python包导入和运行代码。然而，重要的是要知道Mojo是一种全新的语言，而不仅仅是带有语法的Python的新实现。Mojo将Python语言提升到一个全新的水平，具有系统编程功能，强大的类型检查，内存安全，下一代编译器技术等等。然而，它仍然被设计为一种对通用编程有用的简单语言。

本页提供了对Mojo语言的简单介绍，只需要一点编程经验。所以让我们开始吧！

如果您是一位经验丰富的系统程序员，并且想要深入了解该语言，请查看[Mojo编程手册](https://mojofire.cn/docs/Programming_manual.html)。

## 语言基础

首先，Mojo是一种编译语言，它的许多性能和内存安全功能都源于这一事实。Mojo 代码可以提前 （AOT） 或实时 （JIT） 编译。

像其他编译语言一样，Mojo程序（或文件）需要一个函数作为程序的入口点。例如：`.mojo``.🔥``main()`

```
fn main():
    var x: Int = 1
    x += 1
    print(x)
```

如果您了解 Python，您可能期望函数名称是 .两者都实际上在Mojo中工作，但使用行为略有不同，我们将在下面讨论。`def main()``fn main()``fn`

当然，如果你正在构建一个Mojo模块（API库），而不是一个Mojo程序，那么你的文件不需要函数（因为它将被其他有函数的程序导入）。`main()`

**注意：**当您在 / 文件中编写代码时，您无法运行此页面上所示的顶级代码——Mojo 程序或模块中的所有代码都必须封装在函数或结构中。但是，顶级代码在 REPL 或 Jupyter 笔记本中确实有效。`.mojo``.🔥`

现在让我们解释一下此函数中的代码。`main()`

### 语法和语义

这很简单：Mojo支持（或将支持）所有Python的语法和语义。如果你不熟悉Python语法，网上有很多很棒的资源可以教你。

例如，与Python一样，Mojo使用换行符和缩进来定义代码块（不是大括号），Mojo支持Python的所有控制流语法，例如条件和循环。`if``for`

但是，Mojo 仍在进行中，因此 Python 中的一些内容尚未在 Mojo 中实现。所有缺失的Python功能都会及时到来，但Mojo已经包含了Python中可用的许多特性和功能。

因此，以下各节将重点介绍Mojo独有的一些语言功能（与Python相比）。

### 功能

Mojo函数可以用（如上所示）或（如Python）声明。该声明强制实施强类型和内存安全行为，同时提供 Python 样式的动态行为。`fn``def``fn``def`

和函数都有其价值，学习它们很重要。但是，出于本介绍的目的，我们将仅关注函数。有关两者的更多详细信息，请参阅[编程手册 ](https://mojofire.cn/docs/Programming_manual.html)。`fn``def``fn`

在以下部分中，你将了解函数如何在代码中强制实施强类型和内存安全行为。`fn`

### 变量

您可以使用 声明变量（例如在上面的函数中）以创建可变值，或 使用 创建不可变值。`x``main()``var``let`

如果在上面的函数中更改为并运行它，则会收到如下编译器错误：`var``let``main()`

```
error: Expression [15]:7:5: expression must be mutable for in-place operator destination
    x += 1
    ^
```

这是因为使值不可变，因此您无法递增它。`let`

如果完全删除，则会收到错误，因为函数需要显式变量声明（与 Python 样式的函数不同）。`var``fn``def`

最后，请注意，该变量具有显式类型规范。中的变量不需要声明类型，但有时是可取的。如果省略它，Mojo 会推断类型，如下所示：`x``Int``fn`

```
fn do_math():
    let x: Int = 1
    let y = 2
    print(x + y)

do_math()
3
```

### 函数参数和返回

尽管函数体中声明的变量不需要类型，但函数的参数和返回值需要类型。`fn`

例如，下面介绍如何声明为函数参数和返回值的类型：`Int`

```
fn add(x: Int, y: Int) -> Int:
    return x + y

z = add(1, 2)
print(z)
3
```

#### 可选参数和关键字参数

还可以指定参数默认值（也称为可选参数），并使用关键字参数名称传递值。例如：

```
fn pow(base: Int, exp: Int = 2) -> Int:
    return base ** exp

# Uses default value for `exp`
z = pow(3)
print(z)

# Uses keyword argument names (with order reversed)
z = pow(exp=3, base=2)
print(z)
9
8
```

**注意：**Mojo目前仅包含对关键字参数的部分支持，因此尚不支持某些功能，例如仅关键字参数和可变参数参数（例如）。`**kwargs`

#### 参数可变性和所有权

Mojo 支持全值语义，并通过强大的值所有权模型（类似于 Rust 借用检查器）强制实施内存安全。所以下面简单介绍一下可以通过函数参数共享对值的引用。

请注意，上面不会修改 or ，它只读取值。事实上，正如所写的那样，函数*无法*修改它们，因为默认情况下参数是不**可变的引用**。`add()``x``y``fn`

就参数约定而言，这称为“借用”，尽管它是函数的默认值，但您可以使用这样的声明来明确它（其行为与上述完全相同）：`fn``borrowed``add()`

```
fn add(borrowed x: Int, borrowed y: Int) -> Int:
    return x + y
```

如果希望参数可变，则需要将参数约定声明为 .这意味着对函数端*的*参数所做的更改在*函数端可见*。`inout`

例如，此函数能够修改原始变量：

```
fn add_inout(inout x: Int, inout y: Int) -> Int:
    x += 1
    y += 1
    return x + y

var a = 1
var b = 2
c = add_inout(a, b)
print(a)
print(b)
print(c)
2
3
5
```

另一种选择是将参数声明为 ，这为函数提供了值的完全所有权（它是可变的并且保证唯一）。这样，函数可以修改值，而不必担心影响函数外部的变量。例如：`owned`

```
fn set_fire(owned text: String) -> String:
    text += "🔥"
    return text

fn mojo():
    let a: String = "mojo"
    let b = set_fire(a)
    print(a)
    print(b)

mojo()
mojo
mojo🔥
```

在这种情况下，Mojo 会复制并将其作为参数传递。原来的字符串仍然存在。`a``text``a`

但是，如果要授予函数值的所有权并且**不想**创建副本（对于某些类型来说，这可能是一个昂贵的操作），则可以在传递给函数时添加“transfer”运算符。传输运算符有效地销毁了局部变量名 - 以后任何调用它的尝试都会导致编译器错误。`^``a`

尝试将调用更改为如下所示：`set_fire()`

```
    let b = set_fire(a^)
```

您现在会收到一个错误，因为传输运算符有效地销毁了变量，因此当以下函数尝试使用 时，该变量不再初始化。`a``print()``a`

如果删除 ，则工作正常。`print(a)`

这些参数约定旨在为系统程序员提供对内存优化的完全控制，同时确保安全访问和及时释放 - Mojo编译器确保没有两个变量可以同时可变访问相同的值，并且每个值的生存期都经过明确定义，以严格防止任何内存错误，例如“释放后使用”和“双重释放”。

**注意：**目前，Mojo 总是在函数返回值时制作副本。

## 结构

您可以为 .Mojo 中的 A 类似于 Python 中的 a：它们都支持方法、字段、运算符重载、元编程装饰器等。但是，Mojo 结构是完全静态的——它们在编译时绑定，因此它们不允许动态调度或对结构进行任何运行时更改。（Mojo将来也将支持课程。`struct``struct``class`

例如，下面是一个基本结构：

```
struct MyPair:
    var first: Int
    var second: Int

    fn __init__(inout self, first: Int, second: Int):
        self.first = first
        self.second = second
    
    fn dump(self):
        print(self.first, self.second)
```

以下是使用它的方法：

```
let mine = MyPair(2, 4)
mine.dump()
2 4
```

如果你熟悉 Python，那么你应该熟悉该方法和参数。如果你*不*熟悉 Python，那么请注意，当我们调用 时，我们实际上并没有为参数传递值。的值会自动随结构的当前实例一起提供（它的用法类似于其他一些语言中用于引用对象/类型的当前实例的名称）。`__init__()``self``dump()``self``self``this`

有关结构和其他特殊方法（也称为“dunder”方法）的更多详细信息，请参阅[编程手册](https://mojofire.cn/docs/Programming_manual.html)。`__init__()`

## Python集成

尽管 Mojo 仍在开发中，并且还不是 Python 的完整超集，但我们已经构建了一种按原样导入 Python 模块的机制，因此您可以立即利用现有的 Python 代码。在底层，该机制使用 CPython 解释器来运行 Python 代码，因此它可以与当今的所有 Python 模块无缝协作。

例如，以下是导入和使用 NumPy 的方法（您必须安装 Python）：`numpy`

```
from python import Python

let np = Python.import_module("numpy")

ar = np.arange(15).reshape(3, 5)
print(ar)
print(ar.shape)
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]]
(3, 5)
```

**注意：**Mojo还不是Python的一个功能完备的超集。因此，您不能直接复制Python代码并在Mojo中运行它。

**警告：**当您安装 Mojo 时，安装程序会在您的系统中搜索要与 Mojo 一起使用的 Python 版本，并将路径添加到配置文件中。如果您更改Python版本或切换虚拟环境，Mojo将查看错误的Python库，这可能会导致导入Python包时出现错误等问题。当前的解决方案是使用环境变量覆盖Mojo的Python库路径。有关如何查找和设置此路径的说明，请参阅[此相关问题](https://github.com/modularml/mojo/issues/551)。`modular.cfg``An error occurred in Python``MOJO_PYTHON_LIBRARY`
