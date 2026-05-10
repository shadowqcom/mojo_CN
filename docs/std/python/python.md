---
title: "python"
sidebar_label: "python"
description: "Implements Python interoperability.  You can import these APIs from the `python` package. For example:  ```mojo from std.python import Python ```"
---

# python

Implements Python interoperability.

You can import these APIs from the `python` package. For example:

```mojo
from std.python import Python
```

## 类型

### _PythonGlobal

`struct _PythonGlobal(Defaultable, Movable)`

**Implemented Traits:**

- `Defaultable`
- `Movable`

**Fields:**

- `cpython: CPython`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__del__**: `def __del__(deinit self)`

### Python

`struct Python(Defaultable, ImplicitlyCopyable)`

**Implemented Traits:**

- `Defaultable`
- `ImplicitlyCopyable`

**Fields:**

- `_impl: UnsafePointer[mut=False, CPython, StaticConstantOrigin]`
- `expr: String,`
- `functions: List[PyMethodDef],`
- `name: String,`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__(out self, ref[StaticConstantOrigin] cpython`

- **cpython**: `@always_inline def cpython(self) -&gt; ref[StaticConstantOrigin] CPython`

- **eval**: `def eval(self, var code`

- **evaluate**: `@staticmethod def evaluate(
        var expr`

- **add_to_path**: `@staticmethod def add_to_path(dir_path`

- **import_module**: `@staticmethod def import_module(var module`

- **create_module**: `@staticmethod def create_module(name`

- **add_functions**: `@staticmethod def add_functions(
        module`

- **_unsafe_add_functions**: `@staticmethod def _unsafe_add_functions(
        module`

- **add_object**: `@staticmethod def add_object(
        module`

- **_dict**: `@doc_hidden @staticmethod def _dict[
        V`

- **dict**: `@staticmethod def dict[
        V`

- **dict**: `@staticmethod def dict[
        K`

- **list**: `@staticmethod def list[
        T`

- **list**: `@staticmethod def list[
        *Ts`

- **tuple**: `@staticmethod def tuple[
        *Ts`

- **as_string_slice**: `@no_inline def as_string_slice(self, obj`

- **type**: `@staticmethod def type(obj`

- **none**: `@staticmethod def none() -&gt; PythonObject`

- **str**: `@staticmethod def str(obj`

- **int**: `@staticmethod def int(obj`

- **float**: `@staticmethod def float(obj`

- **py_long_as_ssize_t**: `@staticmethod def py_long_as_ssize_t(obj`

- **is_true**: `@staticmethod def is_true(obj`
