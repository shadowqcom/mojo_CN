---
title: "memory"
sidebar_label: "memory"
description: "底层内存管理：指针、分配、地址空间。`memory` 包提供直接内存操作和指针操作的原语。"
---

# memory

底层内存管理：指针、分配、地址空间。

`memory` 包提供直接内存操作和指针操作的原语。它提供具有不同安全保证的多种指针类型，从引用计数智能指针到原始不安全指针，以及内存操作和分配函数。此包支持系统编程和与需要显式内存控制的外部代码交互。

使用此包进行需要手动内存控制的性能关键代码、与 C 库交互、实现自定义数据结构，或访问专用内存。大多数代码应优先使用高级集合和自动内存管理。

## 模块

- [alloc](/docs/std/memory/alloc)
- [arc_pointer](/docs/std/memory/arc_pointer)
- [memory](/docs/std/memory/memory)
- [owned_pointer](/docs/std/memory/owned_pointer)
- [pointer](/docs/std/memory/pointer)
- [span](/docs/std/memory/span)
- [stack_allocation](/docs/std/memory/stack_allocation)
- [unsafe](/docs/std/memory/unsafe)
- [unsafe_maybe_uninit](/docs/std/memory/unsafe_maybe_uninit)
- [unsafe_nullable_pointer](/docs/std/memory/unsafe_nullable_pointer)
- [unsafe_pointer](/docs/std/memory/unsafe_pointer)
