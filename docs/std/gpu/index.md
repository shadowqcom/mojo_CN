---
title: "gpu"
sidebar_label: "gpu"
description: "GPU 编程原语：线程块、异步内存、屏障和同步。这些底层构造允许您以传统编程风格编写在 GPU 上运行的代码——将工作分配到映射到 1 维、2 维或 3 维块的线程上。"
---

# gpu

GPU 编程原语：线程块、异步内存、屏障和同步。

这些底层构造允许您以传统编程风格编写在 GPU 上运行的代码——将工作分配到映射到 1 维、2 维或 3 维块的线程上。线程块随后可以分组为线程块网格。

_内核_ 是在 GPU 上跨多个线程并行运行的函数。目前，[`DeviceContext`](/docs/std/gpu/host/device_context/DeviceContext/) 结构体提供了在 MAX [自定义操作](/max/develop/custom-ops/)中编译和启动 GPU 内核的接口。

[`gpu.host`](/docs/std/gpu/host/) 包包含管理_主机_（即 CPU）和_设备_（即 GPU 或加速器）之间交互的 API。

`gpu` 包导出了可用于访问网格和当前线程信息的别名，包括块维度、网格中的块索引和线程索引。直接从 `gpu` 导入这些别名：

```mojo
from std.gpu import block_dim, block_idx, thread_idx, global_idx
```

有关从 MAX 自定义操作启动 GPU 内核的示例，请参阅 MAX 仓库中的[向量加法示例](https://github.com/modular/modular/blob/main/examples/custom_ops/kernels/vector_addition.mojo)。

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
