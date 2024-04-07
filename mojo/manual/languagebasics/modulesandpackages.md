# 模块和包

Mojo提供了一个包装系统，允许你将代码库组织和编译成可导入的文件。本页面介绍如何将代码组织成模块和包（类似于Python），并演示如何使用`mojo package`命令创建打包的二进制文件。

## Mojo模块

要理解Mojo包，首先需要了解Mojo模块。Mojo模块是一个包含适用于其他导入它的文件使用的代码的单个Mojo源文件。例如，你可以创建一个模块来定义一个结构体，如下所示：

```mojo
{.mojo filename="mymodule.mojo"}
struct MyPair:
    var first: Int
    var second: Int

    fn __init__(inout self, first: Int, second: Int):
        self.first = first
        self.second = second

    fn dump(self):
        print(self.first, self.second)
```

注意，这段代码没有`main()`函数，所以不能直接执行`mymodule.mojo`。但是，你可以在另一个有`main()`函数的文件中导入它并在那里使用。

例如，以下是如何将`MyPair`导入到名为`main.mojo`的文件中（与`mymodule.mojo`位于同一目录）：

```mojo
{.mojo filename="main.mojo"}
from mymodule import MyPair

fn main():
    var mine = MyPair(2, 4)
    mine.dump()
```

或者，你可以导入整个模块，然后通过模块名访问其成员。例如：

```mojo
{.mojo filename="main.mojo"}
import mymodule

fn main():
    var mine = mymodule.MyPair(2, 4)
    mine.dump()
```

你还可以使用`as`为导入的成员创建别名，像这样：

```mojo
{.mojo filename="main.mojo"}
import mymodule as my

fn main():
    var mine = my.MyPair(2, 4)
    mine.dump()
```

在这个例子中，只有当`mymodule.mojo`与`main.mojo`位于同一目录时才有效。目前，如果`.mojo`文件位于其他目录中，你不能将其作为模块导入。除非你将该目录视为Mojo包，如下一节所述。

Mojo模块可以包含`main()`函数，也可以是可执行的，但这通常不是常规做法，模块通常包含可供其他Mojo程序导入和使用的API。

## Mojo包

Mojo包只是一个包含`__init__.mojo`文件的目录中的Mojo模块集合。通过将模块组织在一个目录中，你可以一起或单独导入所有模块。此外，你还可以将包编译成`.mojopkg`或`.ðŸ“¦`文件，这样更容易共享，并且与其他系统架构兼容。

你可以直接从源文件或编译后的`.mojopkg`/`.ðŸ“¦`文件导入包及其模块，对Mojo来说，导入包的方式没有实质性的区别。当从源文件导入时，目录名作为包名，而从编译后的包导入时，文件名作为包名（可以使用`mojo package`命令指定，它可以与目录名不同）。

例如，考虑一个具有以下文件的项目：

```mojo
ini
main.mojo
mypackage/
    __init__.mojo
    mymodule.mojo
```

`mymodule.mojo`是上面示例中的相同代码（包含`MyPair`结构体），而`__init__.mojo`是空的。

在这种情况下，`main.mojo`文件现在可以通过包名导入`MyPair`，如下所示：

```mojo
{.mojo filename="main.mojo"}
from mypackage.mymodule import MyPair

fn main():
    var mine = MyPair(2, 4)
    mine.dump()
```

注意，`__init__.mojo`在这里至关键。如果删除它，Mojo将不会将该目录识别为包，并且无法导入`mymodule`。

然后，假设你不想让`mypackage`的源代码与`main.mojo`位于相同位置。因此，你可以将其编译为一个包文件，如下所示：

```sh
mojo package mypackage -o mypack.mojopkg
```

`.mojopkg`文件包含了非详细的代码，因此可以在系统之间共享。只有在导入到使用`mojo build`编译的Mojo程序中后，代码才会变成特定于架构的可执行文件。

现在，你可以将`mypackage`的源代码移动到其他位置，项目文件现在如下所示：

```mojo
ini
main.mojo
mypack.mojopkg
```

因为我们将包文件命名为与目录不同的名称，所以需要修正导入语句，但其余部分保持不变：

```mojo
{.mojo filename="main.mojo"}
from mypack.mymodule import MyPair
```

如果要重命名包，你不能简单地编辑`.mojopkg`或`.📦`文件，因为包名已编码在文件中。你必须再次运行`mojo package`命令来指定新名称。

### `__init__`文件

如上所述，`__init__.mojo`文件是指示将一个目录视为Mojo包的必需文件，它可以为空。

目前，顶级代码在`.mojo`文件中不受支持，因此与Python不同，你不能在`__init__.mojo`中编写在导入时执行的代码。但是，你可以在其中添加结构体和函数，然后可以从包名导入它们。

然而，与其在`__init__.mojo`文件中添加API，你可以通过导入模块成员来实现相同的效果，从而使你的API从包名可访问，而不需要使用`<package_name>.<member>`的形式。

例如，再次假设您有这些文件：

```mojo
main.mojo
mypackage/
    __init__.mojo
    mymodule.mojo
```

现在让我们在中添加以下行__init__.mojo：

__init__.mojo
```mojo
from .mymodule import MyPair
```

这就是里面的全部内容。现在，我们可以main.mojo像这样简化 import 语句 ：

main.mojo
```mojo
from mypackage import MyPair
```

此功能解释了为什么 Mojo 标准库中的某些成员可以从其包名称导入，而其他成员则需要符号 <package_name>.<module_name>。例如， functional模块驻留在 包中，因此您可以像这样algorithm导入该模块的成员（例如函数 ）：map()

from algorithm.functional import map

但是，该algorithm/__init__.mojo文件还包含以下行：

algorithm/__init__.mojo
```mojo
from .functional import *
from .reduction import *
```


因此，您实际上可以从包中导入任何内容functional，或者reduction只需命名包即可。也就是说，您可以functional从 import 语句中删除名称，它也可以工作：
```mojo
from algorithm import map
```