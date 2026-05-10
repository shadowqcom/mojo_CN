---
title: "tuple"
sidebar_label: "tuple"
description: "Implements the Tuple type.  These are Mojo built-ins, so you don't need to import them."
---

# tuple

Implements the Tuple type.

These are Mojo built-ins, so you don't need to import them.

## 类型

### Tuple

`@lldb_formatter_wrapping_type struct Tuple[*element_types`

### is

`struct is# trivial and won't do anything.
        comptime for i in range(Self.__len__())`

**Implemented Traits:**

- `Self.__len__(`

## Traits

### constraints

`trait constraintsfrom derived ones yet. Remove AllCopyable
    # from this where clause once that's fixed.
    ImplicitlyCopyable where (
        AllImplicitlyCopyable[*element_types] and AllCopyable[*element_types]
    ),
    # ImplicitlyDestructible and Movable are listed explicitly because
    # conditional conformances require all conformances to be stated.
    ImplicitlyDestructible,
    Movable,
    RegisterPassable where AllRegisterPassable[*element_types],
    Sized,
    Writable where AllWritable[*element_types],
)`

**Parameters:**

- ***element_types**

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__(out self, var *args`

- **init_elt**: `@parameter def init_elt[idx`

- **__del__**: `def __del__(deinit self)`

- **__init__**: `def __init__(out self, *, copy`

- **__init__**: `def __init__(out self, *, deinit take`

- **__len__**: `@staticmethod def __len__() -&gt; Int`

- **__len__**: `def __len__(self) -&gt; Int`

- **__getitem_param__**: `def __getitem_param__[
        idx`

- **__contains__**: `def __contains__[T`

- **__eq__**: `@always_inline def __eq__(
        self, other`

- **__hash__**: `def __hash__[
        H`

- **_write_tuple_to**: `@no_inline def _write_tuple_to[
        *, is_repr`

- **elements**: `@parameter def elements[i`

- **write_to**: `@no_inline def write_to(
        self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(
        self, mut writer`

- **fields**: `@parameter def fields(mut w`

- **_compare**: `@always_inline def _compare(
        self, other`

- **__lt__**: `@always_inline def __lt__(
        self, other`

- **__le__**: `@always_inline def __le__(
        self, other`

- **__gt__**: `@always_inline def __gt__(
        self, other`

- **__ge__**: `@always_inline def __ge__(
        self, other`

- **reverse**: `def reverse(deinit self, out result`

- **concat**: `def concat[
        *other_element_types`
