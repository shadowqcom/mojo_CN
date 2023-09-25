# 安装SDK


## Windows
Mojo 尚不适用于 Windows，您可以在 Linux 容器或远程系统中安装，
或者使用windows中的linux子系统，参考linux安装方式进行安装。   
原生windows支持即将到来。
[VScode下载地址](https://vscode.cdn.azure.cn/stable/8b617bd08fd9e3fc94d14adb8d358b56e3f72314/VSCodeUserSetup-x64-1.82.0.exe)
```shell
# windows子系统ubuntu20.04安装
curl https://get.modular.com | MODULAR_AUTH=mut_1ab442b0938f435388ecc1851d9b6286  sh -
modular install mojo

# 配置环境变量
echo 'export MODULAR_HOME="$HOME/.modular"' >> ~/.bashrc
echo 'export PATH="$MODULAR_HOME/pkg/packages.modular.com_mojo/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# 在ubuntu子系统终端打开vscode
code .
```

## Linux
系统要求：

> + Ubuntu 20.04 及更高版本 
> + x86-64 CPU 和最低 4 GiB RAM
> + Python 3.8 - 3.10
> + g++ 或 clang++ 编译器

请注意：目前仅支持Ubuntu，以下安装步骤在Ubuntu 22.04测试通过

1、以root权限执行以下命令，安装Modular CLI:

```sh
curl https://get.modular.com | \
  MODULAR_AUTH=mut_16132486efc04824ad90e4d5a2afbaed \
  sh -
```
2、安装Mojo SDK
```sh
modular install mojo
```


## Mac
1、创建 GitHub 代码示例的分支。[GitHub code examples.](https://github.com/modularml/mojo/tree/main/examples)   
2、安装 VS Code、Mojo 扩展和 GitHub Codespaces 扩展。   
3、在 VS Code 中，按 Cmd+Shift+P 并选择 Codespaces：创建新 Codespace。 然后选择您分叉的“mojo”存储库，并选择具有 32 GB RAM 的实例类型。   
4、安装Modular CLI：
```sh
curl https://get.modular.com | \
  MODULAR_AUTH=mut_16132486efc04824ad90e4d5a2afbaed \
  sh -
```

5、安装Mojo SDK 
```sh
modular install mojo
```


## 手动安装
支持Ubuntu 20.04及以上版本

1、As root:
```sh
apt-get install -y apt-transport-https &&
  keyring_location=/usr/share/keyrings/modular-installer-archive-keyring.gpg &&
  curl -1sLf 'https://dl.modular.com/bBNWiLZX5igwHXeu/installer/gpg.0E4925737A3895AD.key' |  gpg --dearmor >> ${keyring_location} &&
  curl -1sLf 'https://dl.modular.com/bBNWiLZX5igwHXeu/installer/config.deb.txt?distro=debian&codename=wheezy' > /etc/apt/sources.list.d/modular-installer.list &&
  apt-get update &&
  apt-get install -y modular
  ```
2、安装Mojo
```sh
modular auth mut_16132486efc04824ad90e4d5a2afbaed &&
modular install mojo
```

## rpm安装包
群友提供的rpm安装包
[modular-0.1.4-x86_64.rpm](https://disk.knloop.com/api/raw/?path=/%F0%9F%94%A5%20Mojo/modular-0.1.4-x86_64.rpm)


## 虚拟机镜像
群友 [法然] 提供的虚拟机镜像
[ubuntu22-server虚拟机镜像](https://disk.knloop.com/%F0%9F%94%A5%20Mojo/ubuntu22-server%E8%99%9A%E6%8B%9F%E6%9C%BA%E9%95%9C%E5%83%8F%20-%20by%20%E6%B3%95%E7%84%B6)   
用户root 密码 mojo  
用户mojo 密码 mojo