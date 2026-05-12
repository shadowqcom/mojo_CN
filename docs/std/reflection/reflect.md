---
title: "reflect"
sidebar_label: "reflect"
description: "提供统一的 `reflect[T]` / `Reflected[T]` 反射 API。`reflect[T]` 是 `Reflected[T]` 句柄类型的 `comptime` 别名，通过静态方法公开类型内省。"
---

# reflect

提供统一的 `reflect[T]` / `Reflected[T]` 反射 API。

`reflect[T]` 是 `Reflected[T]` 句柄类型的 `comptime` 别名，通过静态方法公开类型内省。句柄没有运行时状态——`T` 完全由编译时参数携带——因此所有查询都写为 `reflect[T].method()`（`[T]` 后没有括号）。

- `is_struct()` - `T` 是否为 Mojo 结构体类型。
- `field_count()` - 字段数量。
- `field_names()` - 字段名的 `InlineArray[StaticString, N]`。
- `field_types()` - 字段类型的 `TypeList`。
- `field_index[name]()` - 命名字段的索引。
- `field_type[name]` - 命名字段类型的 `Reflected[FieldT]`。
- `field_offset[name=...]()` / `field_offset[index=...]()` - 字节偏移。
- `field_ref[idx](s)` - 值 `s` 中索引 `idx` 处字段的引用。

`reflect` 通过 prelude 自动导入，因此无需显式导入即可使用。当在签名中命名时，必须从 `std.reflection` 导入 `Reflected[T]`。

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
    print_fields[Point]()
```

包装类型作为 `T` 参数公开，因此 `field_type[name]` 的结果可以直接用作类型：

```mojo
def main():
    comptime y_type = reflect[Point].field_type["y"]
    var v: y_type.T = 3.14  # y_type.T 是 Float64
```

## 类型

### Reflected

`struct Reflected[T`

**Methods:**

- **is_struct**: `def is_struct() -&gt; Bool`

- **name**: `@staticmethod def name[*, qualified_builtins`

- **base_name**: `@staticmethod def base_name() -&gt; StaticString`

- **field_count**: `def field_count() -&gt; Int`

- **field_types**: `@staticmethod def field_types() -&gt; _field_types_of[Self.T]`

- **field_names**: `@staticmethod def field_names() -&gt; (
        InlineArray[StaticString, _field_types_of[Self.T]().size]
    )`

- **field_index**: `@staticmethod def field_index[name`

- **field_ref**: `def field_ref[
        idx`

- **field_offset**: `@staticmethod def field_offset[
        *,
        name`

- **field_offset**: `@staticmethod def field_offset[
        *,
        index`

## 函数

### foo

`def foo[T`
