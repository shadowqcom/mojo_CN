---
title: "path"
sidebar_label: "path"
description: "路径操作模块。此模块定义了一个独立于平台的 API 用于处理文件系统路径。`Path` 是其核心类型，表示文件系统路径。"
---

# path

路径操作模块。

此模块定义了一个独立于平台的 API 用于处理文件系统路径。`Path` 是其核心类型，表示文件系统路径。它公开了路径组合、存在性检查、文件 I/O 和访问文件属性等操作。

要使用这些功能，请从此模块导入 `Path` 类型。

示例：

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
