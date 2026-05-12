---
title: "comparable"
sidebar_label: "comparable"
description: "为 Mojo 类型实现比较和相等 trait。"
---

# comparable

为 Mojo 类型实现比较和相等 trait。

## Traits

### Equatable

`trait Equatable(ImplicitlyDestructible)`

**Methods:**

- **__eq__**: `@always_inline def __eq__(self, other`

- **__ne__**: `@always_inline def __ne__(self, other`

### Comparable

`trait Comparable(Equatable)`

**Methods:**

- **__lt__**: `def __lt__(self, rhs`

- **__gt__**: `@always_inline def __gt__(self, rhs`

- **__le__**: `@always_inline def __le__(self, rhs`

- **__ge__**: `@always_inline def __ge__(self, rhs`
