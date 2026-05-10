---
title: "path"
sidebar_label: "path"
description: "Path manipulation module.  This module defines a platform-independent API for working with filesystem paths. `Path`, its core type, represents a filesystem path. It exposes operations such as path com"
---

# path

Path manipulation module.

This module defines a platform-independent API for working with filesystem
paths. `Path`, its core type, represents a filesystem path. It exposes
operations such as path composition, existence checks, file I/O, and
access to file attributes.

To use these features import the `Path` type from this module.

Example:

```mojo
from std.pathlib import Path
var p = Path("a") / "b" / "c.txt"
print(p)  # a/b/c.txt
```

## 类型

### Path

`struct Path(
    Boolable,
    Comparable,
    Hashable,
    ImplicitlyCopyable,
    KeyElement,
    PathLike,
    Writable,
)`

**Implemented Traits:**

- `Boolable`
- `Comparable`
- `Hashable`
- `ImplicitlyCopyable`
- `KeyElement`
- `PathLike`
- `Writable`

**Fields:**

- `path: String`

**Methods:**

- **__init__**: `def __init__(out self) raises`

- **__init__**: `def __init__(out self, path`

- **__init__**: `@implicit def __init__(out self, var path`

- **__init__**: `@implicit def __init__(out self, path`

- **__truediv__**: `def __truediv__(self, suffix`

- **__truediv__**: `def __truediv__(self, suffix`

- **__itruediv__**: `def __itruediv__(mut self, suffix`

- **__bool__**: `@always_inline def __bool__(self) -&gt; Bool`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **__fspath__**: `@always_inline def __fspath__(self) -&gt; String`

- **__eq__**: `def __eq__(self, other`

- **__eq__**: `def __eq__(self, other`

- **__lt__**: `@always_inline def __lt__(self, other`

- **stat**: `def stat(self) raises -&gt; stat_result`

- **lstat**: `def lstat(self) raises -&gt; stat_result`

- **exists**: `@always_inline def exists(self) -&gt; Bool`

- **expanduser**: `def expanduser(self) raises -&gt; Path`

- **home**: `@staticmethod def home() raises -&gt; Path`

- **is_dir**: `def is_dir(self) -&gt; Bool`

- **is_file**: `def is_file(self) -&gt; Bool`

- **read_text**: `def read_text(self) raises -&gt; String`

- **read_bytes**: `def read_bytes(self) raises -&gt; List[Byte]`

- **write_text**: `def write_text[T`

- **write_bytes**: `def write_bytes(self, bytes`

- **suffix**: `def suffix(self) -&gt; String`

- **joinpath**: `def joinpath(self, *pathsegments`

- **listdir**: `def listdir(self) raises -&gt; List[Path]`

- **name**: `def name(self) -&gt; String`

- **parts**: `def parts(self) -&gt; List[StringSlice[origin_of(self.path)]]`

## 函数

### cwd

`def cwd() raises -&gt; Path`

### _dir_of_current_file

`@always_inline def _dir_of_current_file() raises -&gt; Path`

### _dir_of_current_file_impl

`@no_inline def _dir_of_current_file_impl(file_name`
