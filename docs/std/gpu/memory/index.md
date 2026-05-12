---
title: "gpu/memory"
sidebar_label: "gpu/memory"
description: "GPU 内存操作包。此包提供 GPU 内存操作，包括：- **async_copy**：异步内存复制操作- **cp_async_bulk**：批量张量内存复制操作 (TMA)"
---

# gpu/memory

GPU 内存操作包。

此包提供 GPU 内存操作，包括：

- **async_copy**：异步内存复制操作
- **cp_async_bulk**：批量张量内存复制操作 (TMA)
- **load/store**：具有缓存控制的内存访问操作
- **fence operations**：内存排序和同步
- **mbarrier**：内存屏障操作

这些操作支持不同 GPU 内存空间之间的高效数据移动以及跨线程的内存操作协调。

## 模块

- [memory](/docs/std/gpu/memory/memory)
