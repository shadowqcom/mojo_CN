---
title: "counter"
sidebar_label: "counter"
description: "定义 `Counter` 类型。从 `collections` 包导入这些 API：```mojo from std.collections import Counter ``` 计数器提供了使用字典存储键及其计数的便捷计数对象。"
---

# counter

定义 `Counter` 类型。

从 `collections` 包导入这些 API：

```mojo
from std.collections import Counter

```

计数器提供了使用字典存储键及其计数的便捷计数对象。它们提供计数集合（也称为包或多重集合）的全部功能，并通过以下方式扩展该模型：
supporting negative counts.

## 类型

### Counter

`@fieldwise_init struct Counter[V`

### CountTuple

`struct CountTuple[V`

**Fields:**

- `_value: Self.V`
- `_count: Int`

**Methods:**

- **__init__**: `def __init__(out self, value`

- **__lt__**: `def __lt__(self, other`

- **__eq__**: `def __eq__(self, other`

- **__getitem__**: `@always_inline def __getitem__(self, idx`
