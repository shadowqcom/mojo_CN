# Helllo,world!

## 开始之前

在开始之前，请确保设置了`MODULAR_HOME`和`PATH`环境变量，如安装过程所述，以便您可以运行`mojo`命令：

```python
mojo --version
```

如果在安装过程中遇到其他问题，请查看我们的已知问题。

## 1. 在REPL中运行代码

首先，让我们使用Mojo REPL（交互式解释器），它允许您在命令提示符中编写和运行Mojo代码：

1. 要启动REPL会话，请在终端中输入`mojo`并按下<kbd>Enter</kbd>键。

2. 然后输入`print("Hello, world!")`并按下<kbd>Enter</kbd>键两次（需要一个空行来表示表达式的结束）。

就是这样！例如：

```python
$ mojo
欢迎使用Mojo！🔥

表达式以空行为分隔。
输入`:quit`退出REPL，输入`:mojo help repl`获取更多帮助。

1> print("Hello, world!")
2.
Hello, world!
```

您可以在REPL中编写任意数量的代码。按<kbd>Enter</kbd>键开始新的一行并继续编写代码，当您想要Mojo评估代码时，按下<kbd>Enter</kbd>键两次。如果有要打印的内容，Mojo会打印它，然后将提示返回给您。

REPL主要用于短期实验，因为代码不会被保存。因此，当您想要编写一个真正的程序时，需要将代码编写到一个`.mojo`源文件中。

## 2. 运行Mojo文件

现在让我们将代码编写到一个Mojo源文件中，并使用`mojo`命令运行它：

1. 创建一个名为`hello.mojo`（或`hello.🔥`）的文件，并添加以下代码：

   ```python
   fn main():
       print("Hello, world!")
   ```

   这就是您所需要的全部内容。保存文件并返回到您的终端。

2. 现在使用`mojo`命令运行它：

    ```sh
    mojo hello.mojo
    ```

    它应该立即打印出消息：

    ```python
    Hello, world!
    ```

如果这对您不起作用，请仔细检查您的代码是否与步骤1中的代码完全相同，并确保您正确安装了Mojo。

## 3. 构建可执行二进制文件

最后，让我们将相同的代码构建为可执行文件并运行它：

1. 使用`build`命令创建一个可执行文件：

    ```sh
    mojo build hello.mojo
    ```

    可执行文件的名称与`.mojo`文件相同，但您可以使用`-o`选项进行更改。

2. 然后运行可执行文件：

    ```sh
    ./hello
    ```

这将创建一个静态编译的二进制文件，因此它包含运行所需的所有代码和库。

## 下一步

- 如果您是Mojo的新手，建议您继续阅读关于语言基础的下一节。

- 如果您想尝试一些代码实验，请克隆Mojo仓库并尝试我们的代码示例：

  ```sh
  git clone https://github.com/modularml/mojo.git
  ```

- 要查看所有可用的Mojo API，请查阅Mojo标准库参考。