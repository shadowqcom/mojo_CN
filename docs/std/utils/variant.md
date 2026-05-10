---
title: "variant"
sidebar_label: "variant"
description: "Defines a Variant type."
---

# variant

Defines a Variant type.

## 类型

### _DefaultNicheStorage

`struct _DefaultNicheStorage[T`

**Fields:**

- `_memory: UnsafeMaybeUninit[Self.T]`

**Methods:**

- **__init__**: `@always_inline def __init__(out self)`

- **as_uninit**: `@always_inline def as_uninit[
        U`

### _CustomNicheStorage

`struct _CustomNicheStorage[Storage`

### _NichedOptionalStorage

`struct _NichedOptionalStorage[
    T`

### _DefaultVariantStorage

`struct _DefaultVariantStorage[*Ts`

### Variant

`struct Variant[*Ts`

## Traits

### _VariantStorage

`trait _VariantStorage(Copyable, ImplicitlyDestructible)`

**Methods:**

- **__init__**: `def __init__[U`

- **take**: `def take[U`

- **isa**: `def isa[U`

- **unsafe_ptr**: `def unsafe_ptr[U`

### _NicheStorage

`trait _NicheStorage(Defaultable, ImplicitlyCopyable, ImplicitlyDestructible)`

**Methods:**

- **as_uninit**: `def as_uninit[
        T`

### constraints

`trait constraintsfrom derived ones yet. Remove AllCopyable
    # from this where clause once that's fixed.
    ImplicitlyCopyable where AllImplicitlyCopyable[*Ts] and AllCopyable[*Ts],
    ImplicitlyDestructible,
    Movable,
    RegisterPassable where AllRegisterPassable[*Ts],
    Writable where AllWritable[*Ts],
)`

**Parameters:**

- ***Ts**

**Methods:**

- **_check**: `@staticmethod def _check[T`

- **__init__**: `@implicit def __init__[T`

- **__init__**: `def __init__(out self, *, copy`

- **__init__**: `def __init__(out self, *, deinit take`

- **__del__**: `def __del__(deinit self)`

- **__getitem_param__**: `@always_inline def __getitem_param__[T`

- **__eq__**: `@always_inline def __eq__(self, other`

- **__ne__**: `@always_inline def __ne__(self, other`

- **__hash__**: `def __hash__(self, mut hasher`

- **_write_value_to**: `def _write_value_to[
        *, is_repr`

- **write_to**: `@no_inline def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(
        self, mut writer`

- **write_field**: `@parameter def write_field(mut w`

- **take**: `@always_inline def take[T`

- **unsafe_take**: `@always_inline def unsafe_take[T`

- **replace**: `@always_inline def replace[
        Tin`

- **unsafe_replace**: `@always_inline def unsafe_replace[
        Tin`

- **set**: `def set[T`

- **isa**: `def isa[T`

- **unsafe_get**: `def unsafe_get[T`

- **is_type_supported**: `@staticmethod def is_type_supported[T`

- **destroy_with**: `def destroy_with[T`

## 函数

### _get_type_index

`@always_inline def _get_type_index[T`
