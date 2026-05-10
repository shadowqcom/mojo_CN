---
title: "alloc"
sidebar_label: "alloc"
description: "Implements layout-aware memory allocation and deallocation.  This module provides `alloc` and `free` functions that pair with a `Layout` descriptor to express the size and alignment of an allocation a"
---

# alloc

Implements layout-aware memory allocation and deallocation.

This module provides `alloc` and `free` functions that pair with a `Layout`
descriptor to express the size and alignment of an allocation at the call site,
making ownership and layout information explicit and co-located.

## 类型

### Layout

`struct Layout[T`

**Fields:**

- `_count: Int`
- `_alignment: Int`

**Methods:**

- **__init__**: `@always_inline @doc_hidden def __init__(out self, *, count`

- **__init__**: `@always_inline def __init__(out self, *, count`

- **__init__**: `@always_inline def __init__(out self, *, count`

- **aligned**: `@always_inline @staticmethod def aligned[alignment`

- **single**: `@always_inline @staticmethod def single() -&gt; Self`

- **as_byte_layout**: `@always_inline def as_byte_layout(self) -&gt; Layout[Byte]`

- **alignment**: `@always_inline def alignment(self) -&gt; Int`

- **count**: `@always_inline def count(self) -&gt; Int`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

- **is_valid_alignment**: `def is_valid_alignment(alignment`

## 函数

### _alloc_bytes

`def _alloc_bytes(
    layout`

### alloc

`@always_inline def alloc[
    T`

### free

`@always_inline def free[
    T`
