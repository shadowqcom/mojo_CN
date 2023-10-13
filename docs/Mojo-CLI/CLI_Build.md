# Mojo CLI

## mojo build (构建)
从 Mojo 文件构建可执行文件。

## 概要

```
mojo build [options] <path>
```

## 描述

将给定路径处的 Mojo 文件编译为可执行文件。

默认情况下，可执行文件将保存到当前目录，其名称与输入文件相同，但没有文件扩展名。

## 选项

### 输出选项

#### `-o <PATH>`

设置可执行文件输出的路径和文件名。默认情况下，它将可执行文件输出到与Mojo文件相同的位置，具有相同的名称并且没有扩展名。

### 编译选项

#### `--no-optimization`,`-O0`

禁用编译器优化。这可能会减少编译 Mojo 源文件所需的时间。它还可能降低已编译可执行文件的运行时性能。

#### `--target-triple <TRIPLE>`

设置编译目标三元组。默认为主机目标。

#### `--target-cpu <CPU>`

设置编译目标 CPU。默认为主机 CPU。

#### `--target-features <FEATURES>`

设置编译目标 CPU 功能。默认为主机功能。

#### `-march <ARCHITECTURE>`

设置要为其生成代码的体系结构。

#### `-mcpu <CPU>`

设置要为其生成代码的 CPU。

#### `-mtune <TUNE>`

设置要为其优化代码的 CPU。

#### `-I <PATH>`

将给定路径附加到目录列表以搜索导入的 Mojo 文件。

#### `-D <KEY=VALUE>`

定义可从正在执行的 Mojo 源文件中使用的命名值。例如，定义一个名称，当从 Mojo 程序中使用模块查询时，将生成编译时值。`-D foo=42` `foo` `sys.param_env` `42`

#### `--parsing-stdlib`

将输入文件解析为 Mojo 标准库。

### 诊断选项

#### `--warn-missing-doc-strings`

发出文档字符串缺失或部分警告。

#### `--max-notes-per-diagnostic <INTEGER>`

当Mojo编译器发出诊断时，它有时还会打印包含附加信息的注释。此选项设置可通过诊断程序打印的注释数的上限阈值。如果未指定，则默认最大值为 10。

### 实验性编译选项

#### `--debug-level <LEVEL>`

设置编译时要使用的调试信息级别。该值必须是以下值之一：（默认值）、或 。请注意，为某些Mojo程序生成调试信息时存在尚未解决的问题。`none``line-tables``full`

#### `--sanitize <CHECK>`

打开运行时检查。支持以下值：（检测内存问题）和（检测多线程问题）。请注意，执行 Mojo 程序时目前不支持这些检查。`address``thread`

#### `--debug-info-language <LANGUAGE>`

设置要作为调试信息的一部分发出的语言。支持的语言包括：和 。 是默认值，可用于在不理解 Mojo 的工具中启用基本调试和二进制自检。`Mojo``C``C`

### 常用选项

#### `--help`,`-h`

显示帮助信息。

[期待与你一起完善文档······](https://github.com/shadowqcom/mojo_CN)