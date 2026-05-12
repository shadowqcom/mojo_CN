---
title: "gpu/compute"
sidebar_label: "gpu/compute"
description: "GPU 计算操作包 - MMA 和张量核心操作。此包提供 GPU 张量核心和矩阵乘法操作：- **mma**：统一的 warp 矩阵乘累加 (WMMA) 操作"
---

# gpu/compute

GPU 计算操作包 - MMA 和张量核心操作。

此包提供 GPU 张量核心和矩阵乘法操作：

- **mma**：统一的 warp 矩阵乘累加 (WMMA) 操作
- **mma_util**：用于加载/存储 MMA 操作数的工具函数
- **mma_operand_descriptor**：MMA 的操作数描述符类型
- **tensor_ops**：基于张量核心的归约和操作
- **arch/**：架构特定的 MMA 实现（内部）
  - `mma_nvidia`：NVIDIA 张量核心 (SM70-SM90)
  - `mma_nvidia_sm100`：NVIDIA Blackwell (SM100)
  - `mma_amd`：AMD 矩阵核心 (CDNA2/3/4)
  - `mma_amd_rdna`：AMD WMMA (RDNA3/4)
  - `tcgen05`：第五代张量核心操作 (Blackwell)

## 用法

直接导入计算操作：

```mojo
from std.gpu.compute import mma

# 用法：var result = mma.mma(a, b, c)
```

`arch/` 中的架构特定实现是内部的，不应由用户代码直接导入。

## 模块

- [mma](/docs/std/gpu/compute/mma)
- [mma_operand_descriptor](/docs/std/gpu/compute/mma_operand_descriptor)
- [mma_util](/docs/std/gpu/compute/mma_util)
- [tensor_ops](/docs/std/gpu/compute/tensor_ops)

## 子包

- [arch](/docs/std/gpu/compute/arch)
