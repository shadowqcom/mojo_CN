---
title: "gpu/sync"
sidebar_label: "gpu/sync"
description: "GPU synchronization primitives package.  This package provides GPU synchronization operations including:  - **barrier**: Block-level synchronization barriers - **syncwarp**: Warp-level synchronization"
---

# gpu/sync

GPU synchronization primitives package.

This package provides GPU synchronization operations including:

- **barrier**: Block-level synchronization barriers
- **syncwarp**: Warp-level synchronization
- **mbarrier**: Memory barrier operations (arrive/wait)
- **named_barrier**: Named barriers for flexible synchronization
- **schedule_barrier**: AMD instruction scheduling barriers
- **Semaphore**: Device-wide semaphore implementation
- **cp_async_bulk**: Bulk async copy synchronization

These primitives enable coordination of execution and memory operations
across threads, warps, and blocks in GPU kernels.

## 模块

- [semaphore](/docs/std/gpu/sync/semaphore)
- [sync](/docs/std/gpu/sync/sync)
