---
title: "function"
sidebar_label: "function"
description: "Compile-time reflection over function values.  `reflect_fn[func]` is a `comptime` alias for the `ReflectedFn[func]` handle type, exposing function introspection through static methods. This is the fun"
---

# function

Compile-time reflection over function values.

`reflect_fn[func]` is a `comptime` alias for the `ReflectedFn[func]` handle
type, exposing function introspection through static methods. This is the
function-side counterpart to `reflect[T]` / `Reflected[T]` for types.

```mojo
from std.reflection import reflect_fn

def my_func(x: Int) -> Int:
    return x + 1

def main():
    print(reflect_fn[my_func].display_name())   # "my_func"
    print(reflect_fn[my_func].linkage_name())   # mangled symbol name
```

## 类型

### ReflectedFn

`struct ReflectedFn[func_type`

**Methods:**

- **display_name**: `@staticmethod def display_name() -&gt; StaticString`

- **linkage_name**: `@staticmethod def linkage_name[
        *, target`
