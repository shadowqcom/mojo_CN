---
title: "subprocess"
slug: subprocess
sidebar_label: "subprocess"
description: "提供执行 shell 命令和捕获输出的工具。此模块提供在子进程中运行 shell 命令并检索其输出的函数，类似于 Python 的 `subprocess` 模块。"
---

# subprocess

提供执行 shell 命令和捕获输出的工具。

此模块提供在子进程中运行 shell 命令并检索其输出的函数，类似于 Python 的 `subprocess` 模块。它自动处理进程创建、输出捕获和资源清理。

## 类型

### _POpenHandle

`struct _POpenHandle`

**Fields:**

- `_handle: FILE_ptr`
- `len: Int = 0`

**Methods:**

- **__init__**: `def __init__(out self, var cmd`

- **__del__**: `def __del__(deinit self)`

- **read**: `def read(self) raises -&gt; String`
