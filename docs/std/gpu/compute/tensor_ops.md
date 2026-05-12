---
title: "tensor_ops"
sidebar_label: "tensor_ops"
description: "此模块提供 GPU 计算的张量核心操作和工具。该模块包括以下功能：- 基于张量核心的归约 (tc_reduce)，支持各种数据类型和 SIMD 宽度"
---

# tensor_ops

此模块提供 GPU 计算的张量核心操作和工具。

该模块包括以下功能：
- 基于张量核心的归约 (tc_reduce)，支持各种数据类型和 SIMD 宽度
- 使用张量核心的 GEVM（通用矩阵-向量乘法）归约
- 利用张量核心操作的高效 warp 级归约

张量核心操作针对 NVIDIA GPU 进行了优化，支持不同的数据类型，包括 float32、float16 和 bfloat16。该模块提供了标量和向量两种归约操作变体，具有不同的 SIMD 宽度以实现最佳性能。

关键函数：
- tc_reduce：支持各种类型和宽度的主要张量核心归约函数
- tc_reduce_gevm_8x：使用张量核心的 8x GEVM 归约
- tc_reduce_gevm_4x：使用张量核心的 4x GEVM 归约

注意：
    大多数操作需要支持张量核心的 NVIDIA GPU。
    操作针对 warp 级执行进行了优化。

## 函数

### tc_reduce_gevm_8x

`@always_inline def tc_reduce_gevm_8x[
    out_type`

### tc_reduce_gevm_4x

`@always_inline def tc_reduce_gevm_4x[
    out_type`

### tc_reduce

`@always_inline def tc_reduce[
    in_type`

### _tc_reduce_vector

`@always_inline def _tc_reduce_vector[
    in_type`

### _tc_reduce_scalar

`@always_inline def _tc_reduce_scalar[
    in_type`
