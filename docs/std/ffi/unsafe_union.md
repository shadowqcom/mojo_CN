---
title: "unsafe_union"
sidebar_label: "unsafe_union"
description: "Defines an untagged union type for C FFI interoperability.  This module provides a C-style union type that allows storing different types in the same memory location without runtime type tracking. Unl"
---

# unsafe_union

Defines an untagged union type for C FFI interoperability.

This module provides a C-style union type that allows storing different types
in the same memory location without runtime type tracking. Unlike `Variant`,
`UnsafeUnion` does not maintain a discriminant field, making it suitable for:

- Interfacing with C libraries that use union types
- Low-level memory manipulation and type punning
- Situations where memory layout must exactly match C unions

Warning: Using `UnsafeUnion` is inherently unsafe. Reading a value as the wrong
type results in undefined behavior, just like in C. Prefer `Variant` for safe,
type-checked sum types.

## 类型

### UnsafeUnion

`struct UnsafeUnion[*Ts`

**Fields:**

- `_storage: Self._union_type`

**Methods:**

- **__init__**: `def __init__(out self, *, unsafe_uninitialized`

- **__init__**: `def __init__[T`

- **__init__**: `def __init__(out self, *, copy`

- **__init__**: `def __init__(out self, *, deinit take`

- **_get_ptr**: `def _get_ptr[
        origin`

- **unsafe_get**: `def unsafe_get[
        origin`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

- **unsafe_take**: `def unsafe_take[T`

- **unsafe_set**: `def unsafe_set[T`

- **unsafe_ptr**: `def unsafe_ptr[
        origin`

- **_is_element**: `@staticmethod def _is_element[T`

## 函数

### _all_types_unique

`def _all_types_unique[*Ts`

### _all_trivial_del

`def _all_trivial_del[*Ts`

### _all_trivial_copyinit

`def _all_trivial_copyinit[*Ts`

### _all_trivial_moveinit

`def _all_trivial_moveinit[*Ts`

### _check_union_types

`def _check_union_types[*Ts`
