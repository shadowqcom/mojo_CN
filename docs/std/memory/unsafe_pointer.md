---
title: "unsafe_pointer"
sidebar_label: "unsafe_pointer"
description: "实现用于手动内存管理的不安全指针类型。此模块提供 `UnsafePointer` 和相关类型别名，用于直接内存操作，具有对可变性、来源和地址空间的显式控制。"
---

# unsafe_pointer

实现用于手动内存管理的不安全指针类型。

此模块提供 `UnsafePointer` 和相关类型别名，用于直接内存操作，具有对可变性、来源和地址空间的显式控制。它包括用于堆分配的 `alloc()` 函数以及加载、存储和管理指针生命周期的综合方法。这些类型支持低级内存操作、与 C 代码交互以及构建自定义数据结构。

## 类型

### _Null

`struct _Null[
    type`

### _UnsafePointerNicheStorage

`struct _UnsafePointerNicheStorage[
    type`

### UnsafePointer

`struct UnsafePointer[
    mut`

## Traits

### to

`trait tothe pointer class.
            var v = SIMD[dtype, width]()

            # intentionally don't unroll, otherwise the compiler vectorizes
            for i in range(width)`

**Parameters:**

- **dtype**
- **width**

## 函数

### _default_invariant

`@always_inline def _default_invariant[mut`
