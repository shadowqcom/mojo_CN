---
title: "type_info"
sidebar_label: "type_info"
description: "提供函数名称内省工具。对于类型名称内省，使用 `Reflected[T]` 上的静态方法（通过 `reflect[T]` 获取）：- `reflect[T].name()` - 返回类型名称。"
---

# type_info

提供函数名称内省工具。

对于类型名称内省，使用 `Reflected[T]` 上的静态方法（通过 `reflect[T]` 获取）：

- `reflect[T].name()` - 返回类型名称。
- `reflect[T].base_name()` - 返回类型基类型的非限定名称。

此模块公开函数端的对应功能：

- `get_function_name[func]()` - 返回函数的源名称。
- `get_linkage_name[func]()` - 返回函数的符号/链接名称。

示例：

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
