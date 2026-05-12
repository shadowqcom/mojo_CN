---
title: "reflection"
sidebar_label: "reflection"
description: "编译时反射工具，用于内省 Mojo 类型和函数。此模块提供编译时反射功能，包括：- 通过 `reflect[T]` 实现统一的类型和结构体反射"
---

# reflection

编译时反射工具，用于内省 Mojo 类型和函数。

此模块提供编译时反射功能，包括：

- 通过 `reflect[T]` 实现统一的类型和结构体反射，这是 `Reflected[T]` 句柄类型的 `comptime` 别名。使用 `reflect[T].name()`、`reflect[T].base_name()`、`reflect[T].field_count()` 等。
- 函数名称和链接名内省（`get_function_name`、`get_linkage_name`）。
- 源代码位置内省（`source_location`、`call_location`）。

`reflect` 通过 prelude 自动导入。上面列出的其他名称必须从 `std.reflection` 显式导入。

示例：
```mojo
struct Point:
    var x: Int
    var y: Float64

def print_fields[T: AnyType]():
    comptime names = reflect[T].field_names()
    comptime for i in range(reflect[T].field_count()):
        print(names[i])

def main():
    print_fields[Point]()  # 打印：x, y
```

## 模块

- [function](/docs/std/reflection/function)
- [location](/docs/std/reflection/location)
- [reflect](/docs/std/reflection/reflect)
- [traits](/docs/std/reflection/traits)
- [type_info](/docs/std/reflection/type_info)
