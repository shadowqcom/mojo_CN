---
sidebar_position: 7
---


# mojo package

编译 Mojo 包。

## 用法概要

```
mojo package [options] <path>
```

## 描述

将 Mojo 源文件目录编译为适合共享和导入到其他 Mojo 程序和模块的二进制包。Mojo 包可跨不同系统移植，因为它仅包含非详细代码（不是特定于架构的包）。代码只有在导入到 Mojo 程序并随后使用 `mojo build` 编译后，才会成为特定于架构的可执行文件。

要创建 Mojo 包，首先将 `__init__.mojo` 文件添加到包目录中。然后将该目录名传递给此命令，并使用 `-o` 指定输出路径和文件名。

有关更多信息，请参阅 [Mojo 模块和包](/docs/manual/packages)。

## 选项

### 输出选项

#### `-o <PATH>`

设置输出包的路径和文件名。文件名必须以 `.mojopkg` 结尾。此处给定的文件名定义了可用于导入代码的包名（减去文件扩展名）。如果未指定此选项，则会在当前工作目录中生成 `.mojopkg` 文件，名称基于输入目录的名称。

### 编译选项

#### `-I <PATH>`

将指定路径追加到搜索导入 Mojo 文件的目录列表中。

#### `-kgenModule`

导出为 KGEN 模块。

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

### 通用选项

#### `--diagnostic-format <FORMAT>`

打印诊断信息和错误消息的格式。必须是 "text" 或 "json" 之一（"text" 为默认值）。

#### `--help`, `-h`

显示帮助信息。

#### `--help-hidden`

显示隐藏选项的帮助信息。
