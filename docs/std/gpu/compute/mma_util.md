---
title: "mma_util"
sidebar_label: "mma_util"
description: "GPU 张量核心的矩阵乘累加 (MMA) 工具。此模块提供在使用张量核心进行矩阵乘法时，从内存加载矩阵分块到寄存器以及将结果存回内存的函数。"
---

# mma_util

GPU 张量核心的矩阵乘累加 (MMA) 工具。

此模块提供在使用张量核心进行矩阵乘法时，从内存加载矩阵分块到寄存器以及将结果存回内存的函数。它支持 NVIDIA 和 AMD GPU，并提供针对不同数据类型（FP32、FP16、BF16）的专用函数。

关键函数包括：

- load_matrix_a：从第一个输入矩阵 A 加载分块
- load_matrix_b：从第二个输入矩阵 B 加载分块
- store_matrix_d：将结果分块存储到输出矩阵 D

每个函数都处理每个 GPU 架构上张量核心指令所需的特定内存访问模式。分块大小和数据布局符合以下文档中的硬件要求：

NVIDIA PTX: https://docs.nvidia.com/cuda/parallel-thread-execution/index.html#warp-level-matrix-fragment-mma-1688
AMD Matrix Cores: https://gpuopen.com/learn/amd-lab-notes/amd-lab-notes-matrix-cores-readme/

## 函数

### load_matrix_a

`@always_inline def load_matrix_a[
    m`

### load_matrix_a

`@always_inline def load_matrix_a[
    m`

### load_matrix_a

`@always_inline def load_matrix_a[
    m`

### load_matrix_a_amd

`@always_inline def load_matrix_a_amd[
    m`

### load_matrix_a_amd

`@always_inline def load_matrix_a_amd[
    dtype`

### load_matrix_b

`@always_inline def load_matrix_b[
    m`

### load_matrix_b

`@always_inline def load_matrix_b[
    m`

### load_matrix_b

`@always_inline def load_matrix_b[
    m`

### load_matrix_b_amd

`@always_inline def load_matrix_b_amd[
    m`

### load_matrix_b_amd

`@always_inline def load_matrix_b_amd[
    dtype`

### _store_matrix_d_nvidia

`@always_inline def _store_matrix_d_nvidia[
    dtype`

### _store_matrix_d_amd

`@always_inline def _store_matrix_d_amd[
    dtype`

### store_matrix_d

`@always_inline def store_matrix_d[
    dtype`
