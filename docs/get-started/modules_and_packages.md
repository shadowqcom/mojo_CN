# 模块和包

Mojo 提供了一个打包系统，允许您将代码库组织和编译为可导入文件。 本页介绍了有关如何将代码组织成模块和包（这很像 Python）的必要概念，并向您展示如何使用 mojo package 命令创建打包的二进制文件。

## Mojo模块
要了解 Mojo 包，您首先需要了解 Mojo 模块。 Mojo 模块是单个 Mojo 源文件，其中包含适合导入它的其他文件使用的代码。 
例如，您可以创建一个模块mymodule.mojo来定义如下所示的结构：

```python
# mymodule.mojo
struct MyPair:
    var first: Int
    var second: Int

    fn __init__(inout self, first: Int, second: Int):
        self.first = first
        self.second = second

    fn dump(self):
        print(self.first, self.second)
```

请注意，此代码没有 main() 函数，因此您无法执行 mymodule.mojo。 但是，您可以使用 main() 函数将其导入到另一个文件中并在那里使用它。

例如，以下是如何将 MyPair 导入到名为 main.mojo 的文件中，该文件与 mymodule.mojo 位于同一目录中：

```python
# main.mojo
from mymodule import MyPair

fn main():
    let mine = MyPair(2, 4)
    mine.dump()
```
或者，您可以导入整个模块，然后通过模块名称访问其方法。 例如：
```python
# main.mojo
import mymodule

fn main():
    let mine = mymodule.MyPair(2, 4)
    mine.dump()
```
您还可以使用 as 为导入的模块创建别名，如下所示：
```python
import mymodule as my

fn main():
    let mine = my.MyPair(2, 4)
    mine.dump()
```
在此示例中，仅当 mymodule.mojo 与 main.mojo 位于同一目录中时才有效。   
目前，如果 .mojo 文件位于其他目录中，则无法将其作为模块导入。 也就是说，除非您将目录视为 Mojo 包，如下一节所述。

>注意：Mojo 模块可能包含 main() 函数，也可能是可执行的，但这通常不是实践，模块通常包含要在其他 Mojo 程序中导入和使用的 API。

## Mojo包
Mojo 包只是包含 `__init__.mojo` 文件的目录中 Mojo 模块的集合。 通过将模块组织在一个目录中，您可以一起或单独导入所有模块。 或者，您还可以将包编译为更易于共享的 .mojopkg 或 .📦 文件。

您可以直接从源文件或编译的 `.mojopkg`/`.📦` 文件导入包及其模块。 使用哪种方式导入包对于 Mojo 来说并没有真正的区别。 从源文件导入时，目录名称用作包名称，而从编译包导入时，文件名是包名称（您使用 mojo package 命令指定 - 它可以与目录名称不同）。

可以参考以下目录结构
```sh
main.mojo
mypackage/
    __init__.mojo
    mymodule.mojo
```
mymodule.mojo 与上面示例中的代码相同（带有 MyPair 结构），并且 `__init__.mojo` 为空。

在这种情况下，main.mojo 文件现在可以通过包名称导入 MyPair，如下所示：
```py
from mypackage.mymodule import MyPair

fn main():
    let mine = my.MyPair(2, 4)
    mine.dump()
```
请注意，`__init__.mojo` 在这里至关重要。 如果删除它，Mojo 不会将该目录识别为包，并且无法导入 mymodule。

假设您不希望 mypackage 源代码与 main.mojo 位于同一位置。 因此，您可以将其编译成如下的包文件：
```sh
mojo package mypackage -o mypack.mojopkg
```
然后 mypackage 源可以移动到其他地方，项目文件现在如下所示：
```sh
main.mojo
mypack.mojopkg
```

因为我们对包文件的命名与目录不同，所以我们需要改变 import 语句，它的工作原理是一样的：
```py
from mypack.mymodule import MyPair
```
> 注意：如果要重命名包，则不能简单地编辑 .mojopkg 或 .📦 文件名，因为包名称已编码在文件中。 您必须再次运行 mojo package 来指定新名称。

### The `__init__` file
如上所述，需要 `__init__.mojo` 文件来指示一个目录应该被视为 Mojo 包，并且它可以为空。

目前 .mojo 文件不支持顶级代码，因此与 Python 不同，您无法在`__init__.mojo` 中编写在导入时执行的代码。 但是，您可以添加结构体和函数，然后可以从包名称中导入它们。

但是，您可以导入模块成员，而不是在 `__init__.mojo` 文件中添加 API，这通过使您的 API 可以从包名称访问而具有相同的效果，而不需要 <package_name>.<module_name> 表示法。

假设您的目录结构是这样：
```sh
main.mojo
mypackage/
    __init__.mojo
    mymodule.mojo
```
在`__init__.mojo` 中添加以下行：
```py
from .mymodule import MyPair
```
这就是里面的全部内容。 现在，我们可以像这样简化 main.mojo 中的 import 语句：
```py
from mypackage import MyPair
```
此功能解释了为什么 Mojo 标准库中的某些成员可以从其包名称导入，而其他成员则需要 <package_name>.<module_name> 表示法。 例如，功能模块位于算法包中，因此您可以像这样导入该模块的成员（例如map()函数）：
```py
from algorithm.functional import map
```
但是，`algorithm/__init__.mojo` 文件还包含以下几行：
```py
from .functional import *
from .reduction import *
```

实际上可以通过命名包来导入功能或缩减中的任何内容。 也就是说，您可以从 import 语句中删除函数名称，它也可以工作：
```py
from algorithm import map
```
> 注意：标准库中的哪些模块导入到包范围中有所不同，并且可能会发生变化。 请参阅每个模块的文档，了解如何导入其成员。