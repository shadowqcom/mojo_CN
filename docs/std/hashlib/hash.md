---
title: "hash"
sidebar_label: "hash"
description: "实现 `Hashable` trait 和 `hash()` 内置函数。此模块有几个主要工具：- `Hashable` trait 用于实现 `__hash__(self) -> UInt` 的类型"
---

# hash

实现 `Hashable` trait 和 `hash()` 内置函数。

此模块有几个主要工具：

- `Hashable` trait 用于实现 `__hash__(self) -> UInt` 的类型
- `hash[T: Hashable](hashable: T) -> Int` 内置函数。
- 任意字节串的 `hash()` 实现，`hash(data: UnsafePointer[mut=False, UInt8], n: Int) -> Int`，是核心函数，通过 SIMD 向量实现高效哈希。有关哈希实现的更多详细信息，请参阅此函数的文档。
- `hash(SIMD)` 和 `hash(UInt8)` 实现
    这些是有用的辅助函数，用于特化通用字节实现。

## Traits

### Hashable

`trait Hashable`

**Methods:**

- **__hash__**: `def __hash__(self, mut hasher`
