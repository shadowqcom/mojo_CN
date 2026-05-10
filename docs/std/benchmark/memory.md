---
title: "memory"
sidebar_label: "memory"
description: "Provides memory barrier utilities for preventing compiler optimizations.  This module includes the `clobber_memory()` function which acts as a memory fence to prevent the compiler from reordering or e"
---

# memory

Provides memory barrier utilities for preventing compiler optimizations.

This module includes the `clobber_memory()` function which acts as a memory
fence to prevent the compiler from reordering or eliminating memory operations.
This is essential for accurate benchmarking when memory access patterns need to
be preserved exactly as written.

## 函数

### clobber_memory

`@always_inline def clobber_memory()`
