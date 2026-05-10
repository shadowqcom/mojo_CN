---
title: "gpu/memory"
sidebar_label: "gpu/memory"
description: "GPU memory operations package.  This package provides GPU memory operations including:  - **async_copy**: Asynchronous memory copy operations - **cp_async_bulk**: Bulk tensor memory copy operations (T"
---

# gpu/memory

GPU memory operations package.

This package provides GPU memory operations including:

- **async_copy**: Asynchronous memory copy operations
- **cp_async_bulk**: Bulk tensor memory copy operations (TMA)
- **load/store**: Memory access operations with cache control
- **fence operations**: Memory ordering and synchronization
- **mbarrier**: Memory barrier operations

These operations enable efficient data movement between different
GPU memory spaces and coordination of memory operations across threads.

## 模块

- [memory](/docs/std/gpu/memory/memory)
