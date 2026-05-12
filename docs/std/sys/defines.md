---
title: "defines"
sidebar_label: "defines"
description: "实现检索编译时定义的函数。您可以使用这些函数根据命令行定义的名称-值对设置参数值或运行时常量。"
---

# defines

实现检索编译时定义的函数。

您可以使用这些函数根据命令行定义的名称-值对设置参数值或运行时常量。例如：

```mojo
  from std.sys import is_defined

  comptime float_type = DType.float32 if is_defined["FLOAT32"]() else DType.float64

  # 使用 `float_type` 作为常量。
```

在命令行中：

```
  mojo -D FLOAT32 main.mojo
```

有关更多信息，请参阅 [Mojo 构建文档](https://www.mojocn.org/docs/cli/build.html#d-keyvalue)。
`mojo run` 命令也支持 `-D` 选项。


您可以从 `sys` 包导入这些 API。例如：

```mojo
from std.sys import is_defined
```

## 类型

### MojoVersion

`struct MojoVersion(ImplicitlyCopyable, TrivialRegisterPassable)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `TrivialRegisterPassable`

**Fields:**

- `major: Int`
- `minor: Int`
- `patch: Int`

**Methods:**

- **__init__**: `def __init__(out self)`

## 函数

### is_defined

`def is_defined[name`

### _is_bool_like

`def _is_bool_like[val`

### get_defined_bool

`def get_defined_bool[name`

### get_defined_int

`def get_defined_int[name`

### get_defined_int

`def get_defined_int[name`

### get_defined_string

`def get_defined_string[name`

### get_defined_string

`def get_defined_string[
    name`

### get_defined_dtype

`def get_defined_dtype[name`
