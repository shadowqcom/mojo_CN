# Mojo CLI

## mojo run (运行)

构建并执行 Mojo 文件。

## 概要

```
mojo run [options] <path>
```

## 描述

在给定路径编译 Mojo 文件并立即执行。执行此命令的另一种方法是将文件简单地传递到`mojo`. 例如：

```
mojo hello.mojo
```

此命令本身的选项（例如下面列出的选项）必须出现在输入文件`path`参数之前。Mojo 源文件后面出现的任何命令行参数都`path`被解释为该 Mojo 程序的参数。

## 选项

### 编译选项

#### `--no-optimization`,`-O0`

禁用编译器优化。这可能会减少编译 Mojo 源文件所需的时间。它还可能会降低编译后的可执行文件的运行时性能。

#### `--target-triple <TRIPLE>`

设置编译目标三元组。默认为主机目标。

#### `--target-cpu <CPU>`

设置编译目标CPU。默认为主机 CPU。

#### `--target-features <FEATURES>`

设置编译目标CPU特性。默认为主机功能。

#### `-march <ARCHITECTURE>`

设置要为其生成代码的体系结构。

#### `-mcpu <CPU>`

设置要为其生成代码的 CPU。

#### `-mtune <TUNE>`

设置要调整代码的 CPU。

#### `-I <PATH>`

将给定路径附加到目录列表中以搜索导入的 Mojo 文件。

#### `-D <KEY=VALUE>`

定义可在正在执行的 Mojo 源文件中使用的命名值。例如，`-D foo=42`定义一个名称`foo`，当`sys.param_env`从 Mojo 程序中使用模块查询时，将产生编译时值`42`。

#### `--parsing-stdlib`

将输入文件解析为 Mojo 标准库。

### 诊断选项

#### `--warn-missing-doc-strings`

针对文档字符串缺失或部分发出警告。

#### `--max-notes-per-diagnostic <INTEGER>`

当 Mojo 编译器发出诊断信息时，它有时还会打印带有附加信息的注释。此选项设置可以通过诊断打印的注释数量的上限。如果未指定，则默认最大值为 10。

### 实验编译选项

#### `--debug-level <LEVEL>`

设置编译时使用的调试信息级别。该值必须是以下之一：（`none`默认值）、`line-tables`或`full`。请注意，为某些 Mojo 程序生成调试信息时存在尚未解决的问题。

#### `--sanitize <CHECK>`

打开运行时检查。支持以下值：（`address`检测内存问题）和`thread`（检测多线程问题）。请注意，执行 Mojo 程序时目前不支持这些检查。

#### `--debug-info-language <LANGUAGE>`

设置作为调试信息的一部分发出的语言。支持的语言有：`Mojo`、 和`C`。`C`是默认值，对于在不理解 Mojo 的工具中启用基本调试和二进制自省很有用。

### 常用选项

#### `--help`,`-h`

显示帮助信息。

[期待与你一起完善文档······](https://github.com/shadowqcom/mojo_CN)