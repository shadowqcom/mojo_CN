---
title: 模块和包
sidebar_position: 5
sidebar_label: 模块和包
description: 了解如何将 Mojo 代码组织成模块和包。
---

本页介绍如何将你的项目组织成模块（文件）和包（目录），以便导入到其他 Mojo 代码中（以及[导入到 Python 代码中](/docs/manual/python/mojo-from-python/)）。

如果你想将项目打包以进行分发，请参阅[打包指南](/docs/tools/packaging/)。

## Mojo 模块

要理解 Mojo 包，首先需要理解 Mojo 模块。Mojo 模块是一个单独的 Mojo 源文件，其中包含适合被其他导入它的文件使用的代码。例如，你可以创建一个模块来定义如下的结构体：

```mojo title="mymodule.mojo"
struct MyPair:
    var first: Int
    var second: Int

    def __init__(out self, first: Int, second: Int):
        self.first = first
        self.second = second

    def dump(self):
        print(self.first, self.second)
```

请注意，这段代码没有 `main()` 函数，因此你无法执行 `mymodule.mojo`。不过，你可以将其导入到另一个包含 `main()` 函数的文件中并在那里使用它。

例如，以下是如何将 `MyPair` 导入到与 `mymodule.mojo` 位于同一目录下名为 `main.mojo` 的文件中：

```mojo title="main.mojo"
from mymodule import MyPair

def main():
    var mine = MyPair(2, 4)
    mine.dump()
```

或者，你可以导入整个模块，然后通过模块名访问其成员。例如：

```mojo title="main.mojo"
import mymodule

def main():
    var mine = mymodule.MyPair(2, 4)
    mine.dump()
```

你还可以使用 `as` 为导入的成员创建别名，如下所示：

```mojo title="main.mojo"
import mymodule as my

def main():
    var mine = my.MyPair(2, 4)
    mine.dump()
```

在这个示例中，只有当 `mymodule.mojo` 与 `main.mojo` 位于同一目录时才能正常工作。目前，如果 `.mojo` 文件位于其他目录中，则无法将其作为模块导入。也就是说，除非你将该目录视为 Mojo 包，如下一节所述。

:::note

Mojo 模块可以包含 `main()` 函数，也可以是可执行的，但这通常不是惯例，模块通常包含旨在被其他 Mojo 程序导入和使用的 API。

:::

## Mojo 包

Mojo 包只是一个目录中的 Mojo 模块集合，该目录包含一个 `__init__.mojo` 文件。通过将模块组织在一个目录中，你可以一起或单独地导入所有模块。你也可以选择将包编译成一个预编译的 `.mojoc` 文件，当它作为另一个 Mojo 编译的依赖项时加载速度更快。

你可以直接从源文件或从已编译的 `.mojoc` 文件导入包及其模块。对 Mojo 而言，以哪种方式导入包并没有实际区别。从源文件导入时，目录名作为包名；而从已编译的包导入时，文件名是包名（你使用 [`mojo precompile`](/docs/cli/precompile) 命令指定——它可以与目录名不同）。有关示例，请参阅下面关于[命名和标识符](#package-naming-and-identifiers)的小节。

例如，考虑一个包含以下文件的项目：

```ini
main.mojo
mypackage/
    __init__.mojo
    mymodule.mojo
```

`mymodule.mojo` 与上面示例中的代码相同（包含 `MyPair` 结构体），`__init__.mojo` 为空。

:::note

`__init__.mojo` 文件是必不可少的。如果没有它，Mojo 将无法将该目录识别为包，你也将无法导入 `mymodule`。

:::

在这种情况下，`main.mojo` 文件现在可以通过包名导入 `MyPair`，如下所示：

```mojo title="main.mojo"
from mypackage.mymodule import MyPair

def main():
    var mine = MyPair(2, 4)
    mine.dump()
```

这可以立即运行：

```sh
mojo main.mojo
```

```output
2 4
```

但是，如果你不想让 `mypackage` 源代码与 `main.mojo` 位于同一位置，可以将其编译成一个预编译文件，如下所示：

```sh
mojo precompile mypackage -o mypack.mojoc
```

:::note

`.mojoc` 文件包含未展开的代码，因此你_可以_跨系统共享它。代码只有在导入到 Mojo 程序中并随后用 `mojo build` 编译之后，才会成为特定于架构的可执行文件。

但是，`.mojoc` 格式并非旨在作为通用的可分发格式，因为它与生成它的编译器版本紧密相关。将由一个版本编译器生成的 `.mojoc` 文件加载到另一个版本的编译器中将导致编译器错误。

:::

现在，你可以将 `mypackage` 源代码移动到其他位置，项目文件现在如下所示：

```ini
main.mojo
mypack.mojoc
```

由于我们将包命名为 `mypack`，我们需要修改导入语句：

```mojo title="main.mojo"
from mypack.mymodule import MyPair
```

代码的工作方式相同：

```sh
mojo main.mojo
```

```output
2 4
```

:::note

如果你想重命名包，不能简单地编辑 `.mojoc` 文件名，因为包名已编码在文件中。你必须重新运行 `mojo precompile` 来指定一个新名称。

:::

### `__init__` 文件

如上所述，`__init__.mojo` 文件是必需的，用于指示一个目录应当被视为 Mojo 包，它可以为空。

目前，`.mojo` 文件中不支持顶层代码，因此与 Python 不同，你无法在 `__init__.mojo` 中编写在导入时执行的代码。但是，你可以添加结构体和函数，然后从包名导入它们。

不过，与其在 `__init__.mojo` 文件中添加 API，不如导入模块成员，这能达到相同的效果——让你的 API 可以从包名访问，而无需使用 `<package_name>.<module_name>` 表示法。

例如，再次假设你有以下文件：

```ini
main.mojo
mypackage/
    __init__.mojo
    mymodule.mojo
```

现在让我们在 `__init__.mojo` 中添加以下行：

```mojo title="__init__.mojo"
from .mymodule import MyPair
```

这就是其中的全部内容。现在，我们可以像这样简化 `main.mojo` 中的导入语句：

```mojo title="main.mojo"
from mypackage import MyPair
```

此功能解释了为什么 Mojo 标准库中的某些成员可以从其包名导入，而其他成员则需要 `<package_name>.<module_name>` 表示法。例如，[`functional`](/docs/std/algorithm/functional/) 模块位于 `std.algorithm` 包中，因此你可以像这样导入该模块的成员（如 `map()` 函数）：

```mojo
from std.algorithm.functional import map
```

但是，`algorithm/__init__.mojo` 文件还包含以下行：

```mojo title="algorithm/__init__.mojo"
from .functional import *
from .reduction import *
```

因此，你实际上只需命名包就可以从 `functional` 或 `reduction` 导入任何内容。也就是说，你可以从导入语句中去掉 `functional` 名称，它仍然有效：

```mojo
from std.algorithm import map
```

:::note

标准库中哪些模块被导入到包作用域是各不相同的，并且可能会发生变化。请参阅[每个模块的文档](/docs/std/)以了解如何导入其成员。

:::

### 包命名和标识符

包名在源码包的情况下取自目录名，在二进制包的情况下取自预编译的（`.mojoc`）文件名。

注意，如果包名不是有效的标识符，可以使用转义标识符来代替：

```mojo
import `модул`
import `package-with-hyphens and a space!` as package_without_hyphens_or_a_space

def main():
    `модул`.`здрасти`()
    package_without_hyphens_or_a_space.hello()
```
