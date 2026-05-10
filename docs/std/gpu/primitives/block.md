---
title: "block"
sidebar_label: "block"
description: "GPU block-level operations and utilities.  This module provides block-level operations for NVIDIA and AMD GPUs, including:  - Block-wide reductions:   - sum: Compute sum across block   - max: Find max"
---

# block

GPU block-level operations and utilities.

This module provides block-level operations for NVIDIA and AMD GPUs, including:

- Block-wide reductions:
  - sum: Compute sum across block
  - max: Find maximum value across block
  - min: Find minimum value across block
  - broadcast: Broadcast value to all threads

The module builds on warp-level operations from the warp module, extending them
to work across a full thread block (potentially multiple warps). It handles both
NVIDIA and AMD GPU architectures and supports various data types with SIMD
vectorization.

All operations support 1D blocks via the `block_size` parameter, as well as 2D
and 3D blocks via the `block_dim_x`, `block_dim_y`, and `block_dim_z` parameters.
For multi-dimensional blocks, thread linearization follows the standard row-major
order: `linear_id = x + y * dim_x + z * dim_x * dim_y`.

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
