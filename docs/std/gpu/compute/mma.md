---
title: "mma"
sidebar_label: "mma"
description: "This module includes utilities for working with the warp-matrix-matrix-multiplication (wmma) instructions."
---

# mma

This module includes utilities for working with the
warp-matrix-matrix-multiplication (wmma) instructions.

## 类型

### WGMMADescriptor

`struct WGMMADescriptor[dtype`

## 函数

### get_amd_fp8_dtype

`def get_amd_fp8_dtype() -&gt; DType`

### else

`fn else`

### get_amd_bf8_dtype

`def get_amd_bf8_dtype() -&gt; DType`

### _unsupported_mma_op

`@always_inline def _unsupported_mma_op(d`

### _has_type

`@always_inline def _has_type[type`

### _has_type

`@always_inline def _has_type[
    abcd`

### _has_shape

`@always_inline def _has_shape[size`

### _has_shape

`@always_inline def _has_shape[
    abcd`

### _dtype_to_nvvm_type

`def _dtype_to_nvvm_type[
    out_type`

### _dtype_to_nvvm_wgmma_type

`def _dtype_to_nvvm_wgmma_type[
    out_type`

### _get_shape

`def _get_shape[m`

### _to_nvvm_scale_out

`def _to_nvvm_scale_out[s`

### _to_nvvm_scale_in

`def _to_nvvm_scale_in[s`

### _to_nvvm_layout

`def _to_nvvm_layout[s`

### mma

`@always_inline def mma[block_size`

### ld_matrix

`@always_inline def ld_matrix[
    dtype`

### get_suffix

`@parameter def get_suffix() -&gt; String`

### st_matrix

`@always_inline def st_matrix[
    dtype`

### get_suffix

`@parameter def get_suffix() -&gt; String`
