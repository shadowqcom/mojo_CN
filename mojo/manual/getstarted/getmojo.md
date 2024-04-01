# 获取Mojo SDK
我们还发布了一个[适用于Visual Studio Code的Mojo扩展](https://marketplace.visualstudio.com/items?itemName=modular-mojotools.vscode-mojo)，以提供一流的开发者体验，包括代码补全、快速修复和Mojo API的悬停帮助等功能。

## 系统要求

要使用Mojo SDK，您需要满足以下规格的系统：

Linux：

- Ubuntu 20.04/22.04 LTS
- x86-64 CPU（带有[SSE4.2或更新版本](https://www.intel.com/content/www/us/en/support/articles/000057621/processors.html)）
  或 AWS Graviton2/3 CPU
- 最低8 GiB RAM
- Python 3.8 - 3.11
- g++ 或 clang++ C++ 编译器

Mac：

- 苹果芯片（M1或M2处理器）
- macOS Monterey (12) 或更高版本
- Python 3.8 - 3.11
- Xcode 的命令行工具，或者 Xcode

Windows 支持将在将来的版本中添加。

## 安装Mojo

1. 打开终端并安装`modular`命令行工具：

    ```sh
    curl -s https://get.modular.com | sh -
    ```

2. 然后使用以下命令登录到您的Modular帐户：

    ```sh
    modular auth
    ```

3. 现在您可以安装Mojo SDK：

    ```sh
    modular install mojo
    ```

4. 设置环境变量以便访问`mojo`命令行界面：

    <Tabs>
      <TabItem value="bash" label="Bash">

      如果您使用的是Bash，请运行以下命令：

      ```sh
      MOJO_PATH=$(modular config mojo.path) \
        && BASHRC=$( [ -f "$HOME/.bash_profile" ] && echo "$HOME/.bash_profile" || echo "$HOME/.bashrc" ) \
        && echo 'export MODULAR_HOME="'$HOME'/.modular"' >> "$BASHRC" \
        && echo 'export PATH="'$MOJO_PATH'/bin:$PATH"' >> "$BASHRC" \
        && source "$BASHRC"
      ```

      </TabItem>
      <TabItem value="zsh" label="ZSH">

      如果您使用的是ZSH，请运行以下命令：

      ```sh
      MOJO_PATH=$(modular config mojo.path) \
        && echo 'export MODULAR_HOME="'$HOME'/.modular"' >> ~/.zshrc \
        && echo 'export PATH="'$MOJO_PATH'/bin:$PATH"' >> ~/.zshrc \
        && source ~/.zshrc
      ```

      </TabItem>
    </Tabs>

接下来，开始使用**Hello, world!**

如果在安装过程中遇到问题，请查看我们的已知问题。

### 更新Mojo

Mojo仍在不断发展，我们将定期发布Mojo语言和SDK工具的更新。有关每个版本的信息，请参阅Mojo更改日志。

要检查您当前的Mojo版本，请使用`--version`选项：

```sh
mojo --version
```

要升级到最新的Mojo版本，请使用`modular update`命令：

```sh
modular update mojo
```

### 更新Modular CLI

我们也可能发布`modular`工具的更新。运行以下命令在您的系统上更新CLI。

Linux：

```sh
sudo apt update
```

```sh
sudo apt install modular
```

Mac：

```sh
brew update
```

```sh
brew upgrade modular
```

## 在Mojo Playground中进行开发

除了下载Mojo SDK，您还可以在我们的在线Playground中尝试Mojo。

### 预期效果

Mojo Playground是一个简单的在线编辑器，您可以在其中测试Mojo代码。

- 我们提供了一些代码示例，以展示Mojo的基础知识和功能。

- 这是一个在线沙盒，不适用于基准测试。

- 您可以下载您的代码或将其共享为gist，但在Playground本身中没有保存代码的机制。在切换代码示例时，任何更改都将丢失（以及在服务器刷新或更新时）。如果您想保存某些内容，请将其保存到本地！

- Playground环境不包含任何Python包。将来，我们打算在Playground中提供一些常见的Python包供导入使用。

- 可能会存在一些错误。请在[开发者社区中反馈问题](https://dev.mojocn.org/)。

### 注意事项

- Mojo环境无法访问网络，您无法安装任何Mojo或Python包。您只能访问Mojo和Mojo标准库。

- 有关Mojo尚不支持或存在问题的常见列表，请参阅Mojo路线图和注意事项。