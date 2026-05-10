---
title: "unsafe_pointer"
sidebar_label: "unsafe_pointer"
description: "Implements unsafe pointer types for manual memory management.  This module provides `UnsafePointer` and related type aliases for direct memory manipulation with explicit control over mutability, origi"
---

# unsafe_pointer

Implements unsafe pointer types for manual memory management.

This module provides `UnsafePointer` and related type aliases for direct memory
manipulation with explicit control over mutability, origins, and address spaces.
It includes the `alloc()` function for heap allocation and comprehensive methods
for loading, storing, and managing pointer lifetimes. These types enable
low-level memory operations, interfacing with C code, and building custom data
structures.

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
