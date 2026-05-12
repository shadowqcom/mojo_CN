---
title: "file_descriptor"
sidebar_label: "file_descriptor"
description: "文件流的更高级抽象。这些是 Mojo 内置功能，无需导入。例如，打印到文件的方法：```mojo var f = open(\"my_file.txt\", \"w\") var ..."
---

# file_descriptor

文件流的更高级抽象。

这些是 Mojo 内置功能，无需导入。

例如，打印到文件的方法：

```mojo
var f = open("my_file.txt", "w")
var fd = FileDescriptor(f)
print("hello", file=fd)
f.close()
```

## 类型

### FileDescriptor

`struct FileDescriptor(TrivialRegisterPassable, Writer)`

**Implemented Traits:**

- `TrivialRegisterPassable`
- `Writer`

**Fields:**

- `value: Int`

**Methods:**

- **__init__**: `def __init__(out self, value`

- **__init__**: `def __init__(out self, f`

- **write_bytes**: `@always_inline def write_bytes(mut self, bytes`

- **write_string**: `def write_string(mut self, string`

- **read_bytes**: `@always_inline def read_bytes(mut self, buffer`

- **isatty**: `def isatty(self) -&gt; Bool`
