---
title: "defines"
sidebar_label: "defines"
description: "Implements functions for retrieving compile-time defines.  You can use these functions to set parameter values or runtime constants based on name-value pairs defined on the command line. For example: "
---

# defines

Implements functions for retrieving compile-time defines.

You can use these functions to set parameter values or runtime constants based on
name-value pairs defined on the command line. For example:

```mojo
  from std.sys import is_defined

  comptime float_type = DType.float32 if is_defined["FLOAT32"]() else DType.float64

  # Use `float_type` as a constant.
```

And on the command line:

```
  mojo -D FLOAT32 main.mojo
```

For more information, see the [Mojo build docs](https://www.mojolang.org/docs/cli/build.html#d-keyvalue).
The `mojo run` command also supports the `-D` option.


You can import these APIs from the `sys` package. For example:

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
