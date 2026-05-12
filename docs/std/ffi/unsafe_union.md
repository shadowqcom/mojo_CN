---
title: "unsafe_union"
sidebar_label: "unsafe_union"
description: "定义用于 C FFI 互操作性的无标签联合类型。此模块提供 C 风格的联合类型，允许在同一内存位置存储不同类型而无需运行时类型跟踪。"
---

# unsafe_union

定义用于 C FFI 互操作性的无标签联合类型。

此模块提供 C 风格的联合类型，允许在同一内存位置存储不同类型而无需运行时类型跟踪。与 `Variant` 不同，`UnsafeUnion` 不维护判别字段，使其适用于：

- 与使用联合类型的 C 库接口
- 低级内存操作和类型双关
- 内存布局必须与 C 联合完全匹配的情况

警告：使用 `UnsafeUnion` 本质上是不安全的。以错误的类型读取值会导致未定义行为，就像在 C 中一样。对于安全的、类型检查的和类型，请使用 `Variant`。

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
