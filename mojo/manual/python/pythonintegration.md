# Python集成
我们的长期目标是使Mojo成为Python的超集（即使Mojo与现有的Python程序兼容）。Python程序员应该能够立即使用Mojo，并能够访问当今可用的大量Python包生态系统。

然而，Mojo目前仍处于早期开发阶段，并且许多Python功能尚未实现。目前无法在Mojo中编写与Python中相同的所有内容。而且Mojo还没有自己的包生态系统。

为了弥合这个差距，Mojo允许您从Mojo代码中导入Python模块，调用Python函数并与Python对象交互。它使用标准的Python解释器（CPython）运行Python代码，因此您现有的Python代码不需要更改。

## 导入Python模块
在Mojo中导入Python模块，只需使用模块名称调用`Python.import_module()`函数：

```python
from python import Python

fn use_array() raises:
    # 这相当于Python中的`import numpy as np`
    var np = Python.import_module("numpy")

    # 现在可以像在Python中编写一样使用numpy
    var array = np.array([1, 2, 3])
    print(array)
```

```python
use_array()
```

    [1 2 3]
    

是的，这导入了Python的NumPy模块，您可以导入*任何其他已安装的Python模块*。

需要注意以下几点：
- 目前无法导入单个成员（例如单个Python类或函数）-必须导入整个Python模块，然后通过模块名称访问成员。
- Mojo尚不支持顶级代码，所以`import_module()`调用必须在另一个方法中。这意味着您可能需要多次导入模块或传递模块的引用。这与Python的工作方式相同：多次导入模块不会运行初始化逻辑多次，因此不会产生性能损失。
- `import_module()`可能引发异常（例如，如果未安装模块）。如果您在`fn`函数中使用它，您需要处理错误（使用`try/except`语句），或在函数签名中添加`raises`关键字。在调用可能引发异常的Python函数时，您也会遇到类似情况。（出于性能原因，Mojo标准库中的异常抛出比在Python代码中更常见。）

Mojo在运行时加载Python解释器和Python模块，因此无论在何处运行Mojo程序，它都必须能够访问兼容的Python解释器，并找到任何导入的Python模块。有关更多信息，请参阅Python环境。

### 导入本地Python模块
如果您有一些本地Python代码想在Mojo中使用，只需将目录添加到Python路径，然后导入模块。

例如，假设您有一个名为`mypython.py`的Python文件：

```python
import numpy as np

def gen_random_values(size, base):
    # 生成一个大小为size x size的随机数数组，范围在base和base + 1之间
    random_array = np.random.rand(size, size)
    return random_array + base
```

以下是如何导入并在Mojo文件中使用它：
```mojo
from python import Python

fn main() raises:
    Python.add_to_path("path/to/module")
    var mypython = Python.import_module("mypython")

    var values = mypython.gen_random_values(2, 3)
    print(values)
```

使用`add_to_path()`函数，绝对路径和相对路径都可以导入模块。例如，您可以这样从本地目录导入：
```python
Python.add_to_path(".")
```

## 从Python调用Mojo
如上所示，您可以从Mojo调用Python模块。但是，目前无法反向导入Mojo模块或从Python调用Mojo函数。

这可能对使用某些模块带来挑战。例如，许多UI框架具有主事件循环，以响应UI事件调用用户定义的代码。这有时被称为"控制反转"模式。与应用程序代码调用库不同，框架代码调用应用程序代码。

这种模式无法工作，因为您无法将Mojo回调传递给Python模块。

例如，考虑流行的Tkinter包。Tkinter的典型用法如下：

- 创建应用程序的主窗口或"根"窗口。
- 将一个或多个UI小部件添加到窗口。小部件可以有关联的回调函数（例如，当按钮被按下时）。
- 调用根窗口的`mainloop()`方法，它监听事件、更新UI并调用回调函数。主循环持续运行，直到应用程序退出。

由于Python无法回调到Mojo，一种替代方案是让Mojo应用程序驱动事件循环并进行轮询更新。以下示例使用Tkinter，但基本方法可应用于其他包。

首先，我们创建一个定义了Tkinter接口的Python模块，其中包含一个窗口和一个按钮：

```python
import tkinter as tk

class App:
    def __init__(self):
        self._root = tk.Tk()
        self.clicked = False

    def click(self):
        self.clicked = True

    def create_button(self, button_text: str):
        button = tk.Button(
            master=self._root,
            text=button_text,
            command=self.click
        )
        button.place(relx=0.5, rely=0.5, anchor=tk.CENTER)

    def create(self, res: str):
        self._root.geometry(res)
        self.create_button("Hello Mojo!")

    def update(self):
        self._root.update()
```

我们可以这样从Mojo调用该模块：

```python
from python import Python

fn button_clicked():
    print("Hi from a Mojo🔥 fn!")

def main():
    Python.add_to_path(".")
    var app = Python.import_module("myapp").App()
    app.create("800x600")

    while True:
        app.update()
        if app.clicked:
            button_clicked()
            app.clicked = False
```
mainloop()Mojo 代码不是由 Python 模块调用 Tkinter方法，而是update()循环调用该方法并clicked在每次更新后检查属性。

## Python
Mojo SDK 依赖于现有安装的 Python 版本，其中包括 Python 解释器的共享库版本。当您安装 Mojo SDK 时，它会尝试查找兼容版本的 Python 解释器并设置 Pythonsys.path来加载匹配的模块。在大多数情况下，这只是有效的，您无需对 Python 环境进行任何进一步的配置。

如果您在安装 Mojo 后遇到问题，请参阅以下部分。

### 安装
当安装程序运行时，它会尝试使用find _ libpython模块查找 CPython 共享库 。

如果满足以下任一条件，则此操作可能会失败：

未安装 Python 版本，或者 Mojo SDK 不支持安装的版本。

安装程序找不到 CPython 解释器的共享库版本（例如，.so或.dylib文件）。某些 Python 发行版不包含共享库，这会阻止 Mojo 嵌入解释器。

如果出现上述情况之一，您将需要安装包含共享库的兼容版本的 Python。尝试按照使用 Conda 设置 Python 环境中的说明 来安装虚拟环境。

### 使用
使用Conda等 Python 虚拟环境 是避免 Python 安装出现问题的一种方法。这提供了一个一致的 Python 环境，其中包含已知版本的 Python 以及您想要与 Mojo 一起使用的所有 Python 包。

要使用 Conda 设置虚拟环境：

按照 快速命令行安装说明安装 Conda 。

确保为您使用的一个或多个 shell 初始化 Conda，例如：
```sh
~/miniconda3/bin/conda init zsh
```
或者：
```sh
~/miniconda3/bin/conda init --all
```
重新启动你的外壳。

运行以下命令将 Mojo 配置为使用 Conda 环境中的 Python 共享库：
```sh
export MOJO_PYTHON_LIBRARY="$(find $CONDA_PREFIX/lib -iname 'libpython*.[s,d]*' | sort -r | head -n 1)"
echo "export MOJO_PYTHON_LIBRARY=$MOJO_PYTHON_LIBRARY" >> ~/.zshrc
```

如果您使用的是 zsh 以外的 shell，则需要调整这些命令。例如，如果您使用的是 bash，请替换.zshrc为您使用的 shell 配置文件，例如.bashrc或.bash_profile。

尝试运行 Mojo REPL：
```sh
mojo
```
设置 Conda 虚拟环境后，您可以使用该conda install命令安装要与 Mojo 一起使用的任何 Python 包。例如：
```sh
conda install numpy
```
有关将 Conda 与 Mojo 结合使用的更多信息，请参阅 模块化博客上的将Mojo 与 Python 结合使用。