---
title: "gpu/compute/arch"
sidebar_label: "gpu/compute/arch"
description: "架构特定的 MMA 实现。此包包含 GPU 架构特定的矩阵乘累加 (MMA) 操作实现：- **mma_nvidia**：NVIDIA 张量核心 (SM70-SM90) - Volta 到 Hopper"
---

# gpu/compute/arch

架构特定的 MMA 实现。

此包包含 GPU 架构特定的矩阵乘累加 (MMA) 操作实现：

- **mma_nvidia**：NVIDIA 张量核心 (SM70-SM90) - Volta 到 Hopper
- **mma_nvidia_sm100**：NVIDIA Blackwell (SM100) 张量核心 - 第五代张量核心
- **mma_amd**：AMD 矩阵核心 (CDNA2/3/4) - 数据中心 GPU
- **mma_amd_rdna**：AMD WMMA (RDNA3/4) - 消费级 GPU
- **mma_apple**：Apple Silicon (M5) - 第一代神经加速器

## 模块组织

每个架构模块包含：
- 私有实现函数（以 `_` 为前缀）
- 架构特定的内部函数调用
- 该架构特定的数据类型转换

## 用法

这些模块**不应**由用户代码直接导入。应使用 `gpu.compute.mma` 中的统一接口，它在编译时自动分派到适当的架构特定实现：

```mojo
from std.gpu.compute import mma

# 用法：var result = mma.mma(a, b, c)
```

## 内部实现细节

主 `gpu.compute.mma` 模块导入这些实现：

```mojo
from std.gpu.compute.arch.mma_nvidia import _mma_nvidia
from std.gpu.compute.arch.mma_amd import _mma_amd
from std.gpu.compute.arch.mma_apple import _mma_apple
```

并根据编译时架构检测进行分派：

```text
comptime if is_nvidia_gpu():
    _mma_nvidia(d, a, b, c)
elif is_amd_gpu():
    _mma_amd[block_size](d, a, b, c)
elif is_apple_m5():
    _mma_apple(d, a, b, c)
```

## 模块

- [mma_amd](/docs/std/gpu/compute/arch/mma_amd)
- [mma_amd_rdna](/docs/std/gpu/compute/arch/mma_amd_rdna)
- [mma_apple](/docs/std/gpu/compute/arch/mma_apple)
- [mma_nvidia](/docs/std/gpu/compute/arch/mma_nvidia)
- [mma_nvidia_sm100](/docs/std/gpu/compute/arch/mma_nvidia_sm100)
- [tcgen05](/docs/std/gpu/compute/arch/tcgen05)
