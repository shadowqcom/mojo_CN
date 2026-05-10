---
title: "tensor_ops"
sidebar_label: "tensor_ops"
description: "This module provides tensor core operations and utilities for GPU computation.  The module includes functions for: - Tensor core based reductions (tc_reduce) supporting various data types and SIMD wid"
---

# tensor_ops

This module provides tensor core operations and utilities for GPU computation.

The module includes functions for:
- Tensor core based reductions (tc_reduce) supporting various data types and SIMD widths
- GEVM (General Matrix-Vector Multiplication) reductions using tensor cores
- Efficient warp-level reductions leveraging tensor core operations

The tensor core operations are optimized for NVIDIA GPUs and support different data types
including float32, float16, and bfloat16. The module provides both scalar and vector
variants of reduction operations with different SIMD widths for maximum performance.

Key functions:
- tc_reduce: Main tensor core reduction function supporting various types and widths
- tc_reduce_gevm_8x: 8x GEVM reduction using tensor cores
- tc_reduce_gevm_4x: 4x GEVM reduction using tensor cores

Note:
    Most operations require NVIDIA GPUs with tensor core support.
    Operations are optimized for warp-level execution.

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
