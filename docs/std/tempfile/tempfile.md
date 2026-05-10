---
title: "tempfile"
sidebar_label: "tempfile"
description: "Temporary file and directory creation.  This module provides a safe API for creating temporary files and directories. It includes helpers for creating temporary directories (`mkdtemp`), temporary file"
---

# tempfile

Temporary file and directory creation.

This module provides a safe API for creating temporary files and directories.
It includes helpers for creating temporary directories (`mkdtemp`),
temporary files (`NamedTemporaryFile`), querying the default temporary
directory (`gettempdir`), and a context manager for managing the lifetime of
temporary directories (`TemporaryDirectory`).

To use these features, import the desired functions or classes from this module.

```mojo
# Import from the tempfile module
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
