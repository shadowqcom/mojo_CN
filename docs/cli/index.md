---
sidebar_position: 1
---

# mojo

Mojo🔥 命令行接口。

## 用法概要

```
mojo <command>
mojo [run-options] <path>
mojo [options]
mojo
```

## 描述

`mojo` CLI 提供了 Mojo 开发所需的全部工具，包括运行、编译和打包 Mojo 代码的命令。以下是所有命令的列表，你可以通过在命令后添加 `--help` 选项来了解更多（例如 `mojo package --help`）。

你可以省略 `run` 和 `repl` 命令。也就是说，只需将文件名传递给 `mojo` 即可运行 Mojo 文件：

```
mojo hello.mojo
```

直接运行 `mojo`（不带任何命令）可以启动 REPL 会话。

你可以使用 `mojo --version` 检查当前版本。有关版本信息，请参阅 [Mojo 更新日志](https://www.mojolang.org/releases)。

## 命令

[`run`](./run) — 构建并执行 Mojo 文件。

[`build`](./build) — 从 Mojo 文件构建可执行文件。

[`repl`](./repl) — 启动 Mojo REPL。

[`debug`](./debug) — 通过命令行或外部编辑器启动 Mojo 调试器。

[`package`](./package) — 编译 Mojo 包。

[`format`](./format) — 格式化 Mojo 源文件。

[`doc`](./doc) — 从 Mojo 文件编译文档字符串。

[`demangle`](./demangle) — 对给定名称进行反混淆。

## 选项

### 诊断选项

#### `--version`, `-v`

打印 Mojo 版本并退出。

### 通用选项

#### `--help`, `-h`

显示帮助信息。

#### `--help-hidden`

显示隐藏选项的帮助信息。
