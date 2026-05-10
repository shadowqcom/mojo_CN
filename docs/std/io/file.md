---
title: "file"
sidebar_label: "file"
description: "Provides APIs to read and write files.  These are Mojo built-ins, so you don't need to import them.  For example, here's how to read a file:  ```mojo var  f = open(\"my_file.txt\", \"r\") print(f.r..."
---

# file

Provides APIs to read and write files.

These are Mojo built-ins, so you don't need to import them.

For example, here's how to read a file:

```mojo
var  f = open("my_file.txt", "r")
print(f.read())
f.close()
```

Or use a `with` statement to close the file automatically:

```mojo
with open("my_file.txt", "r") as f:
  print(f.read())
```

## 类型

### FileHandle

`struct FileHandle(Defaultable, Movable, Writer)`

**Implemented Traits:**

- `Defaultable`
- `Movable`
- `Writer`

**Fields:**

- `handle: Int`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__(out self, path`

- **__del__**: `def __del__(deinit self)`

- **close**: `def close(mut self) raises`

- **read**: `def read(self, size`

- **read**: `def read[
        dtype`

- **read_bytes**: `def read_bytes(self, size`

- **seek**: `def seek(
        self, offset`

- **write_once**: `def write_once(mut self, bytes`

- **write_all**: `def write_all(mut self, bytes`

- **write_bytes**: `@always_inline def write_bytes(mut self, bytes`

- **write_string**: `def write_string(mut self, string`

- **write**: `def write[*Ts`

- **_write**: `def _write(
        self,
        ptr`

- **__enter__**: `def __enter__(var self) -&gt; Self`

- **_get_raw_fd**: `def _get_raw_fd(self) -&gt; Int`

## Traits

### requires

`trait requiresnon-raising.
        # This is a design limitation that should be addressed by updating the
        # trait to allow raises in the future.
        if self.handle &lt; 0`

## 函数

### _open_file

`def _open_file(path`
