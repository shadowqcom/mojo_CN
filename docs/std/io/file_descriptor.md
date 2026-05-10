---
title: "file_descriptor"
sidebar_label: "file_descriptor"
description: "Higher level abstraction for file stream.  These are Mojo built-ins, so you don't need to import them.  For example, here's how to print to a file  ```mojo var f = open(\"my_file.txt\", \"w\") var ..."
---

# file_descriptor

Higher level abstraction for file stream.

These are Mojo built-ins, so you don't need to import them.

For example, here's how to print to a file

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
