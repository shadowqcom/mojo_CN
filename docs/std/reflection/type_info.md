---
title: "type_info"
sidebar_label: "type_info"
description: "Provides function name introspection utilities.  For type-name introspection, use the static methods on `Reflected[T]` (obtained via `reflect[T]`):  - `reflect[T].name()` - returns the name of a type."
---

# type_info

Provides function name introspection utilities.

For type-name introspection, use the static methods on `Reflected[T]`
(obtained via `reflect[T]`):

- `reflect[T].name()` - returns the name of a type.
- `reflect[T].base_name()` - returns the unqualified name of a type's base
  type.

This module exposes the function-side counterparts:

- `get_function_name[func]()` - returns the source name of a function.
- `get_linkage_name[func]()` - returns the symbol/linkage name of a function.

Example:

```mojo
from std.reflection import reflect, get_function_name

struct Point:
    var x: Int
    var y: Float64

def my_function():
    pass

def main():
    print(reflect[Point].name())             # "Point"
    print(get_function_name[my_function]())  # "my_function"
```

## 函数

### get_linkage_name

`def get_linkage_name[
    func_type`

### get_function_name

`def get_function_name[
    func_type`

### _unqualified_type_name

`def _unqualified_type_name[type`
