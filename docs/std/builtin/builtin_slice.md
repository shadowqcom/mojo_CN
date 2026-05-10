---
title: "builtin_slice"
sidebar_label: "builtin_slice"
description: "Implements slice.  These are Mojo built-ins, so you don't need to import them."
---

# builtin_slice

Implements slice.

These are Mojo built-ins, so you don't need to import them.

## 类型

### Slice

`struct Slice(
    Equatable,
    ImplicitlyCopyable,
    Writable,
)`

**Implemented Traits:**

- `Equatable`
- `ImplicitlyCopyable`
- `Writable`

**Fields:**

- `start: Optional[Int]`
- `end: Optional[Int]`
- `step: Optional[Int]`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, start`

- **__init__**: `@always_inline def __init__(
        out self,
        start`

- **write_to**: `@no_inline def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **__eq__**: `@always_inline def __eq__(self, other`

- **indices**: `def indices(self, length`

### StridedSlice

`struct StridedSlice(ImplicitlyCopyable, Writable)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `Writable`

**Fields:**

- `_inner: Slice`

**Methods:**

- **__init__**: `@implicit def __init__(out self, other`

- **__init__**: `def __init__(
        out self,
        start`

- **write_to**: `@no_inline def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **indices**: `def indices(self, length`

### ContiguousSlice

`struct ContiguousSlice(ImplicitlyCopyable, Writable)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `Writable`

**Fields:**

- `start: Optional[Int]`
- `end: Optional[Int]`

**Methods:**

- **__init__**: `@always_inline def __init__(
        out self,
        start`

- **write_to**: `@no_inline def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **indices**: `def indices(self, length`
