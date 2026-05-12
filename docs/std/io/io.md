---
title: "io"
slug: io
sidebar_label: "io"
description: "提供输入/输出工具。这些是 Mojo 内置功能，无需导入。"
---

# io

提供输入/输出工具。

这些是 Mojo 内置功能，无需导入。

## 类型

### _fdopen

`@fieldwise_init struct _fdopen[mode`

**Fields:**

- `handle: FILE_ptr`

**Methods:**

- **__init__**: `def __init__(out self, stream_id`

- **__enter__**: `def __enter__(self) -&gt; Self`

- **__exit__**: `def __exit__(self)`

- **readline**: `def readline(self) raises -&gt; String`

- **read_until_delimiter**: `def read_until_delimiter(self, delimiter`
