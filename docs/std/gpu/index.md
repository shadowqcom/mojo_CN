---
title: "gpu"
sidebar_label: "gpu"
description: "GPU programming primitives: thread blocks, async memory, barriers, and sync.  These low level constructs allow you to write code that runs on the GPU with traditional programming style--partitioning w"
---

# gpu

GPU programming primitives: thread blocks, async memory, barriers, and sync.

These low level constructs allow you to write code that runs on the GPU with
traditional programming style--partitioning work across threads that are mapped
onto 1-, 2-, or 3-dimensional blocks. The thread blocks can subsequently be
grouped into a grid of thread blocks.

A _kernel_ is a function that runs on the GPU in parallel across many threads.
Currently, the
[`DeviceContext`](/docs/std/gpu/host/device_context/DeviceContext/) struct
provides the interface for compiling and launching GPU kernels inside MAX
[custom operations](/max/develop/custom-ops/).

The [`gpu.host`](/docs/std/gpu/host/) package includes APIs to manage
interaction between the _host_ (that is, the CPU) and _device_ (that is, the GPU
or accelerator).

The `gpu` package exports aliases you can use to access information about the
grid and the current thread, including block dimensions, block index in the grid,
and thread index. Import these directly from `gpu`:

```mojo
from std.gpu import block_dim, block_idx, thread_idx, global_idx
```

For an example of launching a GPU kernel from a MAX custom operation, see the
[vector addition example](https://github.com/modular/modular/blob/main/examples/custom_ops/kernels/vector_addition.mojo)
in the MAX repo.

## 模块

- [globals](/docs/std/gpu/globals)
- [intrinsics](/docs/std/gpu/intrinsics)
- [profiler](/docs/std/gpu/profiler)

## 子包

- [compute](/docs/std/gpu/compute)
- [host](/docs/std/gpu/host)
- [memory](/docs/std/gpu/memory)
- [primitives](/docs/std/gpu/primitives)
- [sync](/docs/std/gpu/sync)
