---
title: "mma_util"
sidebar_label: "mma_util"
description: "Matrix multiply accumulate (MMA) utilities for GPU tensor cores.  This module provides functions for loading matrix tiles from memory into registers and storing results back to memory when using tenso"
---

# mma_util

Matrix multiply accumulate (MMA) utilities for GPU tensor cores.

This module provides functions for loading matrix tiles from memory into registers and storing
results back to memory when using tensor cores for matrix multiplication. It supports both
NVIDIA and AMD GPUs with functions specialized for different data types (FP32, FP16, BF16).

The key functions are:

- load_matrix_a: Loads tiles from the first input matrix A
- load_matrix_b: Loads tiles from the second input matrix B
- store_matrix_d: Stores result tiles to the output matrix D

Each function handles the specific memory access patterns required by the tensor core
instructions on each GPU architecture. The tile sizes and data layouts match the hardware
requirements documented in:

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
