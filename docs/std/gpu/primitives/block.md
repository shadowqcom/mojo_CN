---
title: "block"
sidebar_label: "block"
description: "GPU 块级操作和工具。此模块提供 NVIDIA 和 AMD GPU 的块级操作，包括：- 块级归约：- sum：计算块内的总和- max：查找块内的最大值"
---

# block

GPU 块级操作和工具。

此模块提供 NVIDIA 和 AMD GPU 的块级操作，包括：

- 块级归约：
  - sum：计算块内的总和
  - max：查找块内的最大值
  - min：查找块内的最小值
  - broadcast：将值广播到所有线程

该模块建立在 warp 模块的 warp 级操作之上，将其扩展到整个线程块（可能是多个 warp）。它处理 NVIDIA 和 AMD GPU 架构，并支持各种数据类型和 SIMD 向量化。

所有操作通过 `block_size` 参数支持 1D 块，以及通过 `block_dim_x`、`block_dim_y` 和 `block_dim_z` 参数支持 2D 和 3D 块。对于多维块，线程线性化遵循标准的行主序：`linear_id = x + y * dim_x + z * dim_x * dim_y`。

## 函数

### _block_reduce_with_padding

`@always_inline def _block_reduce_with_padding[
    dtype`

### compute_offset

`@always_inline def compute_offset(offset`

### _block_reduce

`@always_inline def _block_reduce[
    dtype`

### _block_reduce

`@always_inline def _block_reduce[
    dtype`

### _indexed_fn

`@always_inline @parameter def _indexed_fn[
        dtype`

### sum

`@always_inline def sum[
    dtype`

### sum

`@always_inline def sum[
    dtype`

### max

`@always_inline def max[
    dtype`

### max

`@always_inline def max[
    dtype`

### min

`@always_inline def min[
    dtype`

### min

`@always_inline def min[
    dtype`

### broadcast

`@always_inline def broadcast[
    dtype`

### broadcast

`@always_inline def broadcast[
    dtype`

### _prefix_sum

`@always_inline def _prefix_sum[
    dtype`

### prefix_sum

`@always_inline def prefix_sum[
    dtype`

### prefix_sum

`@always_inline def prefix_sum[
    dtype`
