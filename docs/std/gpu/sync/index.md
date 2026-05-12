---
title: "gpu/sync"
sidebar_label: "gpu/sync"
description: "GPU 同步原语包。此包提供 GPU 同步操作，包括：- **barrier**：块级同步屏障- **syncwarp**：Warp 级同步- **mbarrier**：内存屏障操作（到达/等待）"
---

# gpu/sync

GPU 同步原语包。

此包提供 GPU 同步操作，包括：

- **barrier**：块级同步屏障
- **syncwarp**：Warp 级同步
- **mbarrier**：内存屏障操作（到达/等待）
- **named_barrier**：用于灵活同步的命名屏障
- **schedule_barrier**：AMD 指令调度屏障
- **Semaphore**：设备级信号量实现
- **cp_async_bulk**：批量异步复制同步

这些原语支持 GPU 内核中跨线程、warp 和块的执行和内存操作协调。

## 模块

- [semaphore](/docs/std/gpu/sync/semaphore)
- [sync](/docs/std/gpu/sync/sync)
