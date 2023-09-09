# 安装SDK


## Windows
Mojo 尚不适用于 Windows，您可以在 Linux 容器或远程系统中安装，
或者使用windows中的linux子系统，参考linux安装方式进行安装。   
原生windows支持即将到来。

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
[modular-0.1.4-x86_64.rpm](https://nnnin.com/api/raw/?path=/%F0%9F%90%A7linux%20app/modular-0.1.4-x86_64.rpm)