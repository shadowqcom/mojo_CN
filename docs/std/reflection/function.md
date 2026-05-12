---
title: "function"
sidebar_label: "function"
description: "对函数值的编译时反射。`reflect_fn[func]` 是 `ReflectedFn[func]` 句柄类型的 `comptime` 别名，通过静态方法公开函数内省。"
---

# function

对函数值的编译时反射。

`reflect_fn[func]` 是 `ReflectedFn[func]` 句柄类型的 `comptime` 别名，通过静态方法公开函数内省。这是类型 `reflect[T]` / `Reflected[T]` 的函数端对应功能。

```mojo
from std.reflection import reflect_fn

def my_func(x: Int) -> Int:
    return x + 1

def main():
    print(reflect_fn[my_func].display_name())   # "my_func"
    print(reflect_fn[my_func].linkage_name())   # 修饰后的符号名
```

## 类型

### ReflectedFn

`struct ReflectedFn[func_type`

**Methods:**

- **display_name**: `@staticmethod def display_name() -&gt; StaticString`

- **linkage_name**: `@staticmethod def linkage_name[
        *, target`
