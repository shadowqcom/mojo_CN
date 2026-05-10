---
title: "mma_apple"
sidebar_label: "mma_apple"
description: "Apple Silicon MMA implementation for matrix multiply-accumulate operations.  This module provides MMA implementations for Apple M5 GPUs using the simdgroup_matrix hardware instructions (Metal 4.0 / AI"
---

# mma_apple

Apple Silicon MMA implementation for matrix multiply-accumulate operations.

This module provides MMA implementations for Apple M5 GPUs using the
simdgroup_matrix hardware instructions (Metal 4.0 / AIR 2.8.0).

Supported operations:
- Float multiply-accumulate: {F16, BF16, F32} inputs, F32 accumulator
- Integer widening multiply-accumulate: {I8, U8} inputs, I32/U32 accumulator

## 函数

### _apple_frag_layout

`@always_inline def _apple_frag_layout(tid`

### apple_mma_load

`@always_inline def apple_mma_load[
    dtype`

### apple_mma_store

`@always_inline def apple_mma_store[
    dtype`

### _mma_apple

`@always_inline def _mma_apple(mut d`

### _mma_apple_transposable

`@always_inline def _mma_apple_transposable(
    mut d`
