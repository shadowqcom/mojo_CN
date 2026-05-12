---
sidebar_position: 8
---

# mojo repl

启动 Mojo REPL。

## 用法概要

```
mojo repl [lldb-options]
```

## 描述

启动 Mojo 读取-求值-打印循环（REPL）环境，在终端中提供交互式开发。您也可以通过简单地运行 `mojo` 来启动 REPL。

可以在命令行上指定任意数量的选项和参数。然后将这些选项和参数转发给运行 REPL 的底层 lldb 工具。

## 选项

### 通用选项

#### `--help`, `-h`

显示帮助信息。

#### `--help-hidden`

显示隐藏选项的帮助信息。
