---
title: "mma_amd_rdna"
sidebar_label: "mma_amd_rdna"
description: "AMD RDNA3/4 WMMA implementation for matrix multiply-accumulate operations.  This module provides MMA implementations for AMD RDNA3 and RDNA4 consumer GPUs using the WMMA (Wave Matrix Multiply Accumula"
---

# mma_amd_rdna

AMD RDNA3/4 WMMA implementation for matrix multiply-accumulate operations.

This module provides MMA implementations for AMD RDNA3 and RDNA4 consumer GPUs
using the WMMA (Wave Matrix Multiply Accumulate) instructions.

Reference: https://gpuopen.com/learn/wmma_on_rdna3/

## 函数

### _load_matrix_a_amd_rdna

`@always_inline def _load_matrix_a_amd_rdna[
    m`

### _load_matrix_a_amd_rdna

`@always_inline def _load_matrix_a_amd_rdna[
    m`

### _load_matrix_b_amd_rdna

`@always_inline def _load_matrix_b_amd_rdna[
    m`

### _load_matrix_b_amd_rdna

`@always_inline def _load_matrix_b_amd_rdna[
    m`

### load_matrix_a_amd_rdna16x16x16

`@always_inline def load_matrix_a_amd_rdna16x16x16(
    a_ptr`

### load_matrix_a_amd_rdna16x16x16

`@always_inline def load_matrix_a_amd_rdna16x16x16(
    a_ptr`

### load_matrix_b_amd_rdna16x16x16

`@always_inline def load_matrix_b_amd_rdna16x16x16(
    b_ptr`

### load_matrix_b_amd_rdna16x16x16

`@always_inline def load_matrix_b_amd_rdna16x16x16(
    b_ptr`

### _mma_wmma_rdna

`@always_inline def _mma_wmma_rdna(mut d`

### get_intrinsic_name

`@parameter def get_intrinsic_name() -&gt; String`
