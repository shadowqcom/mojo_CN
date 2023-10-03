# hello world

在开始之前 请确定您已经安装Mojo 并且按照以下方式配置了环境变量：
```sh
echo 'export MODULAR_HOME="$HOME/.modular"' >> ~/.bashrc

echo 'export PATH="$MODULAR_HOME/pkg/packages.modular.com_mojo/bin:$PATH"' >> ~/.bashrc

source ~/.bashrc
```

## 在 REPL 中运行代码
首先，让我们尝试在 Mojo REPL 中运行一些代码，它允许您直接在命令提示符中编写和运行 Mojo 代码：

1、要启动 REPL 会话，请在终端中输入 mojo 并按 Enter。

2、然后输入 print("Hello, world!") 并按 Enter 两次（需要一个空行来指示表达式的结束）。

像这样：
```sh
$ mojo
Welcome to Mojo! 🔥

Expressions are delimited by a blank line.
Type `:quit` to exit the REPL and `:mojo help` for further assistance.

1> print("Hello, world!")
2.
Hello, world!
```

您可以在 REPL 中编写任意数量的代码。 您可以按 Enter 键开始新行并继续编写代码，当您希望 Mojo 评估代码时，请按 Enter 两次。 如果有需要打印的内容，Mojo 会打印它，然后将提示返回给您。

REPL 主要用于短期实验，因为代码不会保存。 所以当你想编写一个真正的程序时，你需要将代码编写在.mojo源文件中。

## 构建并运行 Mojo 源文件
现在让我们用源文件打印“Hello, world”。 Mojo 源文件使用 .mojo 或 .🔥 文件扩展名进行标识。
您可以通过将 Mojo 文件传递给 mojo 命令来快速执行该文件，也可以使用 mojo build 命令构建已编译的可执行文件。 让我们两者都尝试一下。

### 运行mojo文件
编写Mojo代码并执行：
1、创建一个名为 hello.mojo （或 hello.🔥）的文件并添加以下代码：
```sh
fn main():
   print("Hello, world!")
```
这就是您所需要的。 保存文件并返回到您的终端。

2、使用 mojo 命令运行它：
```sh
mojo hello.mojo

Hello, world!
```

### 构建可执行二进制文件
构建并运行可执行文件：
1、使用 build 命令创建独立的可执行文件：
```sh
mojo build hello.mojo
```
创建与 .mojo 文件同名的可执行文件，但您可以使用 -o 选项更改它。
2、运行可执行文件：
```sh
./hello
```
该可执行文件与 C 或 C++ 可执行文件一样在您的系统上运行。