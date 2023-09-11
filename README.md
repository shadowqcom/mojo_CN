# mojo_CN


[mojo中文网](https://mojofire.cn) [mojofire.cn](https://mojofire.cn) 源文件


⚡欢迎各位开发者加群 ~~摸鱼~~ 交流。

### windows平台安装
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


