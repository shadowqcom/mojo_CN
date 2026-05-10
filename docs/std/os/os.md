---
title: "os"
sidebar_label: "os"
description: "Provides functions to access operating-system dependent functionality, including file system operations.  You can import a method from the `os` package. For example:  ```mojo from std.os import listdi"
---

# os

Provides functions to access operating-system dependent functionality, including
file system operations.

You can import a method from the `os` package. For example:

```mojo
from std.os import listdir
```

## 类型

### _dirent_linux

`struct _dirent_linux(Copyable)`

**Implemented Traits:**

- `Copyable`

**Fields:**

- `d_ino: Int64`
- `d_off: Int64`
- `d_reclen: Int16`
- `d_type: Int8`
- `name: InlineArray[c_char, Self.MAX_NAME_SIZE]`

### _dirent_macos

`struct _dirent_macos(Copyable)`

**Implemented Traits:**

- `Copyable`

**Fields:**

- `d_ino: Int64`
- `d_off: Int64`
- `d_reclen: Int16`
- `d_namlen: Int16`
- `d_type: Int8`
- `name: InlineArray[c_char, Self.MAX_NAME_SIZE]`

### _DirHandle

`struct _DirHandle`

**Fields:**

- `_handle: OpaquePointer[MutExternalOrigin]`

**Methods:**

- **__init__**: `def __init__(out self, var path`

- **__del__**: `def __del__(deinit self)`

- **list**: `def list(self) -&gt; List[String]`

- **_list_linux**: `def _list_linux(self) -&gt; List[String]`

- **_list_macos**: `def _list_macos(self) -&gt; List[String]`
