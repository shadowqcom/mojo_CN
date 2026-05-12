---
title: "tempfile"
slug: tempfile
sidebar_label: "tempfile"
description: "临时文件和目录创建。此模块提供创建临时文件和目录的安全 API。包括创建临时目录 (`mkdtemp`)、临时文件 (`NamedTemporaryFile`) 等辅助函数。"
---

# tempfile

临时文件和目录创建。

此模块提供创建临时文件和目录的安全 API。它包括创建临时目录 (`mkdtemp`)、临时文件 (`NamedTemporaryFile`)、查询默认临时目录 (`gettempdir`) 以及管理临时目录生命周期的上下文管理器 (`TemporaryDirectory`) 的辅助函数。

要使用这些功能，请从此模块导入所需的函数或类。

```mojo
# 从 tempfile 模块导入
from std.tempfile import gettempdir
```

## 类型

### TemporaryDirectory

`struct TemporaryDirectory`

**Fields:**

- `name: String`
- `_ignore_cleanup_errors: Bool`

**Methods:**

- **__init__**: `def __init__(
        out self,
        suffix`

- **__enter__**: `def __enter__(self) -&gt; String`

- **__exit__**: `def __exit__(self) raises`

- **__exit__**: `def __exit__(self, err`

### NamedTemporaryFile

`struct NamedTemporaryFile(Movable)`

**Implemented Traits:**

- `Movable`

**Fields:**

- `_file_handle: FileHandle`
- `_delete: Bool`
- `name: String`

**Methods:**

- **__init__**: `def __init__(
        out self,
        mode`

- **__del__**: `def __del__(deinit self)`

- **close**: `def close(mut self) raises`

- **read**: `def read(self, size`

- **read_bytes**: `def read_bytes(self, size`

- **seek**: `def seek(
        self, offset`

- **write**: `def write[*Ts`

- **write_bytes**: `@always_inline def write_bytes(mut self, bytes`

- **__enter__**: `def __enter__(var self) -&gt; Self`

## 函数

### _get_random_name

`def _get_random_name(size`

### _candidate_tempdir_list

`def _candidate_tempdir_list() -&gt; List[String]`

### _get_default_tempdir

`def _get_default_tempdir() raises -&gt; String`

### _try_to_create_file

`def _try_to_create_file(dir`

### gettempdir

`def gettempdir() -&gt; Optional[String]`

### mkdtemp

`def mkdtemp(
    suffix`

### _rmtree

`def _rmtree(path`
