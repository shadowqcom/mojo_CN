---
sidebar_position: 3
---

# mojo debug

通过命令行界面或外部编辑器启动 Mojo 调试器。

## 用法概要

```
mojo debug [debug-options]
```

## 描述

此命令底层使用 LLDB 调试器或 cuda-gdb，提供四种基本的调试会话模式：

* 构建并调试 Mojo 文件。

        mojo debug [options] <file.mojo> [runtime args]

    构建指定路径的 Mojo 文件并在调试器中启动它。选项位于 Mojo 文件之前，可以包含 `mojo run` 预期的任何编译选项以及常规调试命令。运行时参数位于 Mojo 文件之后，在启动时直接传递给被调试程序。默认情况下，此模式使用 `-O0` 和 `--debug-level=full` 作为编译选项。

* 调试预编译的程序。

        mojo debug [options] <program> [runtime args]

    在调试器中启动指定路径的程序。选项位于程序路径之前，不能包含编译命令。运行时参数位于程序路径之后，在启动时直接传递给被调试程序。

* 附加到正在运行的进程。

        mojo debug [options] [--pid <pid> | --process-name <process-name>]

    通过 pid 或名称附加到进程，名称可以是进程可执行文件的完整路径。进程标识符以外的选项不能包含编译选项。

* 启动调试器命令行界面。

        mojo debug [options]

    启动支持调试 Mojo 程序的调试器 CLI。此命令仅通过 `--X` 选项支持 LLDB 或 cuda-gdb 选项。

您还可以为调试会话选择两种界面之一：

* CLI：默认情况下，所有调试会话模式都使用常规调试器命令行界面启动。

* VS Code 调试服务器：如果添加 `--vscode` 选项，调试会话将通过 Mojo 扩展在 VS Code 中启动。VS Code 必须正在运行且 Mojo 扩展必须已启用。此外，在 VS Code 调试器中启动程序时，会保留此调用的环境变量和当前工作目录。

最后，值得一提的是，此调试器可以调试用其他标准原生语言（如 Rust、C 和 C++）编写的程序，因为它基于 LLDB 或 cuda-gdb。

调试器能力：

* LLDB：这是默认调试器，对 CPU Mojo 代码有很好的支持，但对 Mojo GPU 代码完全没有支持。

* cuda-gdb：通过 `--cuda-gdb` 选项调用，对 CPU Mojo 代码支持有限，但支持 GPU Mojo 代码。

## 选项

### 附加选项

#### `--pid <PID>`

指示调试器附加到具有给定 PID 的进程。

#### `--process-name <NAME>`

指示调试器附加到具有给定名称或路径的进程。

### cuda-gdb 选项

#### `--cuda-gdb`

使用 cuda-gdb 而不是 LLDB 进行调试。在此模式下，可以进入 GPU 代码，但 CPU 调试体验会降低。

#### `--cuda-gdb-path <CUDA_GDB_PATH>`

使用给定的 CUDA_GDB_PATH，而不是在 PATH 环境变量中查找 cuda-gdb。

#### `--break-on-launch`

为 cuda-gdb 设置 breakOnLaunch 选项。这使调试器在每个启动的内核的第一条指令处中断。

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

### 调试器选项

#### `--X <ARG>`

当使用调试器命令行界面启动调试会话时，将 ARG 作为参数传递给调试器。此选项可以多次指定。使用 RPC 模式时会被忽略。

### 调试服务器选项

#### `--vscode`

通过 Mojo 扩展在 VS Code 中启动调试会话。

#### `--rpc`

--vscode 的别名。

#### `--terminal <TERMINAL>`

启动启动调试会话时使用的终端类型。

* `console`（默认）：被调试程序将在编辑器的默认环境中启动。如果使用 VS Code，这将是调试控制台。
* `dedicated`：被调试程序将在编辑器内的专用终端中启动。

#### `--port <PORT>`

使用给定的 PORT 与 RPC 调试服务器通信。默认尝试从 12355 到 12364（含）的所有端口。

#### `--stop-on-entry`

启动后自动停止。

#### `--init-command <INIT_COMMAND>`

调试器启动时执行的初始化命令。可以多次指定。

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

#### `--help`, `-h`

显示帮助信息。

#### `--help-hidden`

显示隐藏选项的帮助信息。
