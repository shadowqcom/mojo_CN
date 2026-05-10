---
title: "fstat"
sidebar_label: "fstat"
description: "Implements file system status operations.  You can import these APIs from the `os` package. For example:  ```mojo from std.os import stat ```"
---

# fstat

Implements file system status operations.

You can import these APIs from the `os` package. For example:

```mojo
from std.os import stat
```

## 类型

### stat_result

`struct stat_result(Copyable, Writable)`

**Implemented Traits:**

- `Copyable`
- `Writable`

**Fields:**

- `st_mode: Int`
- `st_ino: Int`
- `st_dev: Int`
- `st_nlink: Int`
- `st_uid: Int`
- `st_gid: Int`
- `st_size: Int`
- `st_atimespec: _CTimeSpec`
- `st_mtimespec: _CTimeSpec`
- `st_ctimespec: _CTimeSpec`
- `st_birthtimespec: _CTimeSpec`
- `st_blocks: Int`
- `st_blksize: Int`
- `st_rdev: Int`
- `st_flags: Int`

**Methods:**

- **__init__**: `def __init__(
        out self,
        *,
        st_mode`

- **write_to**: `@no_inline def write_to(self, mut writer`
