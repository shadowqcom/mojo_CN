---
title: 模块和包
sidebar_position: 5
sidebar_label: 模块和包
description: 学习如何将 Mojo 代码组织成模块和包。
---

本页面介绍如何将您的项目组织成模块（文件）和包（目录），以便导入到其他 Mojo 代码中（以及[导入到 Python 代码中](/docs/manual/python/mojo-from-python/)）。

如果您想打包您的项目以进行分发，请参阅[打包指南](/docs/tools/packaging/)。

## Mojo 模块

要理解 Mojo 包，首先需要理解 Mojo 模块。Mojo 模块是一个单独的 Mojo 源文件，其中包含适合被其他导入它的文件使用的代码。例如，您可以创建一个模块来定义如下的结构体：

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

请注意，此代码没有 `main()` 函数，因此您无法执行 `mymodule.mojo`。但是，您可以将其导入到另一个包含 `main()` 函数的文件中并在那里使用它。

例如，以下是如何将 `MyPair` 导入到与 `mymodule.mojo` 位于同一目录下的 `main.mojo` 文件中：

```mojo title="main.mojo"
from mymodule import MyPair

def main():
    var mine = MyPair(2, 4)
    mine.dump()
```

或者，您可以导入整个模块，然后通过模块名称访问其成员。例如：

```mojo title="main.mojo"
import mymodule

def main():
    var mine = mymodule.MyPair(2, 4)
    mine.dump()
```

您还可以使用 `as` 为导入的成员创建别名，如下所示：

```mojo title="main.mojo"
import mymodule as my

def main():
    var mine = my.MyPair(2, 4)
    mine.dump()
```

在此示例中，仅当 `mymodule.mojo` 与 `main.mojo` 位于同一目录时才有效。目前，如果 `.mojo` 文件位于其他目录中，则无法将其作为模块导入。也就是说，除非您将该目录视为 Mojo 包，如下一节所述。

:::note

Mojo 模块可以包含 `main()` 函数并且可以是可执行的，但这通常不是惯例，模块通常包含用于导入和在其它 Mojo 程序中使用的 API。

:::

## Mojo 包

Mojo 包只是目录中包含 `__init__.mojo` 文件的 Mojo 模块集合。通过将模块组织在一个目录中，您可以一起或单独导入所有模块。可选地，您还可以将包编译成 `.mojopkg` 文件，这样更容易共享并且仍然与其他系统架构兼容。

您可以直接从源文件或从编译的 `.mojopkg` 文件导入包及其模块。对于 Mojo 来说，以哪种方式导入包没有真正的区别。从源文件导入时，目录名称作为包名称，而从编译的包导入时，文件名是包名称（您可以使用 [`mojo package`](/docs/cli/precompile) 命令指定——它可以与目录名称不同）。

例如，考虑一个包含以下文件的项目：

```ini
main.mojo
mypackage/
    __init__.mojo
    mymodule.mojo
```

`mymodule.mojo` 是上面示例中的相同代码（包含 `MyPair` 结构体），`__init__.mojo` 是空的。

:::note

`__init__.mojo` 文件是必不可少的。如果没有它，Mojo 将无法将该目录识别为包，您也无法导入 `mymodule`。

:::

在这种情况下，`main.mojo` 文件现在可以通过包名称导入 `MyPair`，如下所示：

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

但是，如果您不想将 `mypackage` 源代码放在与 `main.mojo` 相同的位置，可以将其编译成包文件，如下所示：

```sh
mojo package mypackage -o mypack.mojopkg
```

:::note

`.mojopkg` 文件包含非展开代码，因此您可以跨系统共享它。代码只有在导入到 Mojo 程序并随后使用 `mojo build` 编译后，才会成为特定于架构的可执行文件。

:::

现在，您可以将 `mypackage` 源代码移动到其他位置，项目文件现在如下所示：

```ini
main.mojo
mypack.mojopkg
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

如果您想重命名包，不能简单地编辑 `.mojopkg` 文件名，因为包名称已编码在文件中。您必须重新运行 `mojo package` 来指定新名称。

:::

### `__init__` 文件

如上所述，`__init__.mojo` 文件是必需的，用于指示目录应被视为 Mojo 包，它可以为空。

目前，`.mojo` 文件中不支持顶级代码，因此与 Python 不同，您不能在 `__init__.mojo` 中编写在导入时执行的代码。但是，您可以添加结构体和函数，然后从包名称导入它们。

但是，与其在 `__init__.mojo` 文件中添加 API，您可以导入模块成员，这具有相同的效果，即让您的 API 可以从包名称访问，而不需要 `<package_name>.<module_name>` 表示法。

例如，再次假设您有以下文件：

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

这就是其中的全部内容。现在，我们可以简化 `main.mojo` 中的导入语句，如下所示：

```mojo title="main.mojo"
from mypackage import MyPair
```

此功能解释了为什么 Mojo 标准库中的某些成员可以从其包名称导入，而其他成员则需要 `<package_name>.<module_name>` 表示法。例如，[`functional`](/docs/std/algorithm/functional/) 模块位于 `algorithm` 包中，因此您可以像这样导入该模块的成员（例如 `map()` 函数）：

```mojo
from algorithm.functional import map
```

但是，`algorithm/__init__.mojo` 文件还包含以下行：

```mojo title="algorithm/__init__.mojo"
from .functional import *
from .reduction import *
```

因此，您实际上可以通过仅命名包来从 `functional` 或 `reduction` 导入任何内容。也就是说，您可以从导入语句中删除 `functional` 名称，它也可以工作：

```mojo
from algorithm import map
```

:::note

标准库中哪些模块被导入到包作用域是变化的，并且可能会更改。请参阅[每个模块的文档](/docs/lib)以了解如何导入其成员。

:::
