---
sidebar_position: 2
---

# mojo build

从 Mojo 文件构建可执行文件。

## 用法概要

```
mojo build [options] <path>
```

## 描述

将指定路径的 Mojo 文件编译为可执行文件。

默认情况下，可执行文件保存到当前目录，名称与输入文件相同，但不带文件扩展名。

请注意，Mojo 项目中使用的任何 Python 库不会包含在可执行二进制文件中，因此必须在运行可执行文件的环境中提供这些库。

## 选项

### 输出选项

#### `-o <PATH>`

设置可执行文件输出的路径和文件名。默认情况下，将可执行文件输出到当前目录，名称相同且无扩展名。

#### `--emit <FILE_TYPE>`

要生成的输出文件类型。

- `exe`（默认）：生成可执行二进制文件。
- `shared-lib`：生成共享（动态）库。
- `object`：（实验性）生成单个目标文件。
- `llvm`：生成未优化的 LLVM IR。
- `llvm-bitcode`：生成未优化 LLVM IR 的位码。
- `asm`：生成目标汇编代码。对于 GPU 目标，还会在主机汇编代码旁边为每个内核生成一个附属文件：NVIDIA 为 `.ptx`，AMD 为 `.amdgcn`，Metal 为 `.ll`。

### 编译选项

#### `--optimization-level <LEVEL>`, `-O`, `--no-optimization (LEVEL=0)`

设置编译时使用的优化级别。该值必须是 0 到 3 之间的数字。默认值为 3。

#### `-I <PATH>`

将指定路径追加到搜索导入 Mojo 文件的目录列表中。

#### `-D <KEY=VALUE>`

定义一个命名值，可在正在执行的 Mojo 源文件中使用。例如，`-Dfoo=42` 定义了一个名称 `foo`，当在 Mojo 程序中通过 `std.defines` 模块查询时，将产生编译时值 `42`。

#### `--debug-level <LEVEL>`, `-g (LEVEL=full)`, `-g0 (LEVEL=none)`, `-g1 (LEVEL=line-tables)`, `-g2 (LEVEL=full)`

设置编译时使用的调试信息级别。该值必须是以下之一：`none`、`line-tables` 或 `full`。默认值为 `none`，但在使用 `mojo debug foo.mojo` 时默认为 `full`。请注意，为某些 Mojo 程序生成调试信息时仍存在一些尚未解决的问题。

#### `--num-threads <NUM>`, `-j`

设置编译时使用的最大线程数。默认值为 0（使用所有可用线程）。

#### `--elaboration-error-include-prelude`

显示包含 Mojo 启动模块（prelude）位置的详细错误信息。

### 目标选项

#### `--target-triple <TRIPLE>`

设置编译目标三元组。默认为主机目标。

#### `--target-cpu <CPU>`

设置编译目标 CPU。默认为主机 CPU。

#### `--target-features <FEATURES>`

设置编译目标 CPU 特性。默认为主机特性。

#### `--march <ARCHITECTURE>`

设置生成代码的目标架构。

#### `--mcpu <CPU>`

设置生成代码的目标 CPU。

#### `--mtune <TUNE>`

设置代码调优的目标 CPU。

#### `--target-accelerator <ACCELERATOR>`

设置用于异构计算的 GPU 或加速器架构（例如，NVIDIA H100 为 sm_90，AMD MI300 为 gfx942）。

#### `--print-effective-target`

打印吸收所有命令行标志后的有效目标配置并退出。

#### `--print-supported-targets`

打印所有可用的目标名称并退出。

#### `--print-supported-cpus`

打印指定目标的有效 CPU 名称并退出。需要 --target-triple。

#### `--print-supported-accelerators`

打印所有支持的 GPU 和加速器架构并退出。

### 编译诊断选项

控制 Mojo 编译器如何输出与编译和运行 Mojo 源代码相关的诊断信息。

#### `--diagnose-missing-doc-strings`

为缺失或不完整的文档字符串发出诊断信息。

#### `--max-notes-per-diagnostic <INTEGER>`

当 Mojo 编译器发出诊断信息时，有时也会打印带有附加信息的备注。此选项设置可随诊断信息打印的备注数量的上限。如果未指定，默认最大值为 10。

#### `--disable-builtins`

创建包时不使用内置函数。

#### `--disable-warnings`

不打印警告消息。

#### `--experimental-fixit`

自动将修复应用到代码，并在应用修复后重新运行命令。警告：此功能高度实验性，可能导致不可逆的数据丢失。

#### `--experimental-export-fixit <YAML_FILE>`

将修复导出为 clang-tidy 格式的 YAML 文件，而不是直接应用。该文件可以使用 'clang-apply-replacements' 应用。警告：此功能高度实验性。

#### `--Werror`

将警告视为错误。

#### `--Wno-error`

不将警告视为错误。

#### `--warn-on-unstable-apis`

使用标准库中的不稳定 API 时发出警告。

#### `--ignore-incompatible-package-errors`

忽略加载不兼容 Mojo 包时遇到的错误。

### 链接器选项

#### `-Xlinker <ARG>`

将 ARG 传递给链接器。

### 实验性编译选项

#### `--sanitize <CHECK>`

启用运行时检查。支持以下值：`address`（检测内存问题）和 `thread`（检测多线程问题）。

#### `--shared-libasan`

动态链接地址消毒器运行时。需要使用 `--sanitize` 选项启用地址消毒。

#### `--debug-info-language <LANGUAGE>`

设置作为调试信息一部分发出的语言。支持的语言有：`Mojo` 和 `C`。默认为 `Mojo`。`C` 有助于在不理解 Mojo 的工具中启用基本调试和二进制内省，但 `mojo debug` 不需要此选项。

### 通用选项

#### `--diagnostic-format <FORMAT>`

打印诊断信息和错误消息的格式。必须是 "text" 或 "json" 之一（"text" 为默认值）。

#### `--help`, `-h`

显示帮助信息。

#### `--help-hidden`

显示隐藏选项的帮助信息。
