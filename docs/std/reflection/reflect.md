---
title: "reflect"
sidebar_label: "reflect"
description: "Provides the unified `reflect[T]` / `Reflected[T]` reflection API.  `reflect[T]` is a `comptime` alias for the `Reflected[T]` handle type, which exposes type introspection through static methods. The "
---

# reflect

Provides the unified `reflect[T]` / `Reflected[T]` reflection API.

`reflect[T]` is a `comptime` alias for the `Reflected[T]` handle type, which
exposes type introspection through static methods. The handle has no runtime
state — `T` is carried entirely in the compile-time parameter — so all queries
are spelled as `reflect[T].method()` (no parens after `[T]`).

- `is_struct()` - whether `T` is a Mojo struct type.
- `field_count()` - number of fields.
- `field_names()` - `InlineArray[StaticString, N]` of field names.
- `field_types()` - a `TypeList` of field types.
- `field_index[name]()` - index of the named field.
- `field_type[name]` - `Reflected[FieldT]` for the named field's type.
- `field_offset[name=...]()` / `field_offset[index=...]()` - byte offset.
- `field_ref[idx](s)` - reference to field at index `idx` in value `s`.

`reflect` is auto-imported via the prelude, so it is available without
an explicit import. `Reflected[T]` must be imported from `std.reflection`
when named in signatures.

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
    print_fields[Point]()
```

The wrapped type is exposed as the `T` parameter, so the result of
`field_type[name]` can be used as a type directly:

```mojo
def main():
    comptime y_type = reflect[Point].field_type["y"]
    var v: y_type.T = 3.14  # y_type.T is Float64
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
