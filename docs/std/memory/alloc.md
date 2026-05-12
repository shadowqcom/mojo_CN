---
title: "alloc"
sidebar_label: "alloc"
description: "实现布局感知的内存分配和释放。此模块提供 `alloc` 和 `free` 函数，与 `Layout` 描述符配对使用，以表达分配的大小和对齐方式。"
---

# alloc

实现布局感知的内存分配和释放。

此模块提供 `alloc` 和 `free` 函数，与 `Layout` 描述符配对使用，以在调用点表达分配的大小和对齐方式，使所有权和布局信息明确且集中。

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
