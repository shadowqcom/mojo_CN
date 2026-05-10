---
title: "reflection"
sidebar_label: "reflection"
description: "Compile-time reflection utilities for introspecting Mojo types and functions.  This module provides compile-time reflection capabilities including:  - Unified type and struct reflection via `reflect[T"
---

# reflection

Compile-time reflection utilities for introspecting Mojo types and functions.

This module provides compile-time reflection capabilities including:

- Unified type and struct reflection via `reflect[T]`, a `comptime` alias
  for the `Reflected[T]` handle type. Use `reflect[T].name()`,
  `reflect[T].base_name()`, `reflect[T].field_count()`, etc.
- Function name and linkage introspection (`get_function_name`, `get_linkage_name`).
- Source location introspection (`source_location`, `call_location`).

`reflect` is auto-imported via the prelude. The other names listed above
must be imported explicitly from `std.reflection`.

Example:
```mojo
struct Point:
    var x: Int
    var y: Float64

def print_fields[T: AnyType]():
    comptime names = reflect[T].field_names()
    comptime for i in range(reflect[T].field_count()):
        print(names[i])

def main():
    print_fields[Point]()  # Prints: x, y
```

## 模块

- [function](/docs/std/reflection/function)
- [location](/docs/std/reflection/location)
- [reflect](/docs/std/reflection/reflect)
- [traits](/docs/std/reflection/traits)
- [type_info](/docs/std/reflection/type_info)
