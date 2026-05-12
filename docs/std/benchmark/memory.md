---
title: "memory"
sidebar_label: "memory"
description: "提供内存屏障工具以防止编译器优化。此模块包含 `clobber_memory()` 函数，它充当内存屏障，防止编译器重新排序或消除内存操作。"
---

# memory

提供内存屏障工具以防止编译器优化。

此模块包含 `clobber_memory()` 函数，它充当内存屏障，防止编译器重新排序或消除内存操作。这对于需要完全按照编写的方式保留内存访问模式的精确基准测试至关重要。

## 函数

### clobber_memory

`@always_inline def clobber_memory()`
