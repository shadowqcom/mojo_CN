# Modules and packages

Mojo 提供了一个打包系统，允许您组织代码库并将其编译为可导入的文件。本页介绍了有关如何将代码组织成模块和包（这很像 Python）的必要概念，并向您展示如何使用命令创建打包的二进制文件`mojo package`

## Mojo modules

要了解 Mojo 包，您首先需要了解 Mojo 模块。 Mojo 模块是单个 Mojo 源文件，其中包含适合导入它的其他文件使用的代码。例如，您可以创建一个模块来定义如下所示的结构：

文件名：```mymodule.mojo```
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

请注意，此代码中并没有 main() 函数，因此无法直接执行 mymodule.mojo。但是，您可以将其导入到另一个包含 main() 函数的文件中，并在那里使用它。

例如，以下是如何将 MyPair 导入到名为 main.mojo 的文件中，该文件与 mymodule.mojo 在同一目录中：

文件名：```main.mojo```

```mojo
from mymodule import MyPair

fn main():
    var mine = MyPair(2, 4)
    mine.dump()
```

另一种方法是导入整个模块，然后通过模块名访问其成员。例如：

filename="main.mojo"

```mojo
import mymodule

fn main():
    var mine = mymodule.MyPair(2, 4)
    mine.dump()
```

您还可以使用`as`为导入的成员创建别名，如下所示：

filename="main.mojo"
```mojo
import mymodule as my

fn main():
    var mine = my.MyPair(2, 4)
    mine.dump()
```

在此示例中，仅当`mymodule.mojo`与 位于同一目录中 时才有效`main.mojo`。目前，`.mojo`如果文件驻留在其他目录中，则无法将它们作为模块导入。也就是说，除非您将目录视为 Mojo 包，如下一节所述。

> Mojo 模块可能包含一个`main()`函数，也可能是可执行的，但这通常不是实践，模块通常包含要在其他 Mojo 程序中导入和使用的 API。

## Mojo packages

Mojo 包只是包含`__init__.mojo`文件的目录中 Mojo 模块的集合。通过将模块组织在一个目录中，您可以一起或单独导入所有模块。或者，您还可以将包编译为更易于共享且仍与其他系统体系结构兼容的文件`.mojopkg`。`.📦`

`.mojopkg`您可以直接从源文件或编译的/文件导入包及其模块`.📦`。使用哪种方式导入包对于 Mojo 来说并没有真正的区别。从源文件导入时，目录名称用作包名称，而从编译包导入时，文件名是包名称（您使用命令指定`mojo package` 它可以与目录名称不同）。

例如，考虑一个包含以下文件的项目：

```
main.mojo
mypackage/
    __init__.mojo
    mymodule.mojo
```
`mymodule.mojo`与上面示例中的代码相同（带有`MyPair` 结构）并且`__init__.mojo`为空。

在这种情况下，`main.mojo`文件现在可以`MyPair`通过包名称导入，如下所示：
filename="main.mojo"
```mojo
from mypackage.mymodule import MyPair

fn main():
    var mine = MyPair(2, 4)
    mine.dump()
```

请注意，`__init__.mojo`这里至关重要。如果删除它，Mojo 不会将该目录识别为包，并且无法导入`mymodule`.

然后，假设您不希望`mypackage`源代码与`main.mojo`.因此，您可以将其编译成如下的包文件：

```sh
mojo package mypackage -o mypack.mojopkg
```
> 文件`.mojopkg`包含未详细说明的代码，因此您可以跨系统共享它。只有在将代码导入 Mojo 程序并使用`mojo build`.

现在，您可以将`mypackage`源代码移至其他位置，项目文件现在如下所示：

```ini
main.mojo
mypack.mojopkg
```
因为我们对包文件的命名与目录不同，所以我们需要修复 import 语句，它的工作原理是一样的：

filename="main.mojo"
```mojo
from mypack.mymodule import MyPair
```

如果要重命名包，则不能简单地编辑 `.mojopkg`或`.📦`文件名，因为包名称已编码在文件中。您必须`mojo package`再次运行才能指定新名称。

### The `__init__` file

如上所述，该`__init__.mojo`文件需要指示一个目录应被视为 Mojo 包，并且可以为空。

目前，文件中不支持顶级代码`.mojo`，因此与 Python 不同，您无法编写在`__init__.mojo`导入时执行的代码。但是，您可以添加结构体和函数，然后可以从包名称中导入它们。

但是，您可以导入模块成员，而不是在文件中添加 API `__init__.mojo`，这样可以通过包名称访问您的 API，而不需要使用符号，从而具有相同的效果`<package_name>.<module_name>` 。

例如，再次假设您有这些文件：

```ini
main.mojo
mypackage/
    __init__.mojo
    mymodule.mojo
```

现在让我们在中添加以下行`__init__.mojo`：

```{.mojo filename="__init__.mojo"}
from .mymodule import MyPair
```

这就是里面的全部内容。现在，我们可以`main.mojo`像这样简化 import 语句 ：

```{.mojo filename="main.mojo"}
from mypackage import MyPair
```

此功能解释了为什么 Mojo 标准库中的某些成员可以从其包名称导入，而其他成员则需要符号 `<package_name>.<module_name>`。例如， `functional`模块驻留在 包中，因此您可以像这样`algorithm`导入该模块的成员（例如函数 ）：`map()`

```mojo
from algorithm.functional import map
```

但是，该`algorithm/__init__.mojo`文件还包含以下行：
filename="algorithm/__init__.mojo"
```mojo
from .functional import *
from .reduction import *
```

因此，您实际上可以从包中导入任何内容`functional`，或者`reduction`只需命名包即可。也就是说，您可以`functional`从 import 语句中删除名称，它也可以工作：

```mojo
from algorithm import map
```

> 标准库中的哪些模块导入到包范围中各不相同，并且可能会发生变化。请参阅每个模块的文档，了解如何导入其成员。
