---
title: "mma_nvidia"
sidebar_label: "mma_nvidia"
description: "NVIDIA Tensor Cores implementation for matrix multiply-accumulate operations.  This module provides MMA implementations for NVIDIA GPUs with Tensor Cores, covering architectures from SM70 (Volta) thro"
---

# mma_nvidia

NVIDIA Tensor Cores implementation for matrix multiply-accumulate operations.

This module provides MMA implementations for NVIDIA GPUs with Tensor Cores,
covering architectures from SM70 (Volta) through SM90 (Hopper).

Supported operations:
- FP16 accumulation (SM70+)
- FP32 accumulation with FP16/BF16 inputs (SM80+)
- TF32 operations (SM80+)
- FP8 operations (SM89+)

Reference: https://docs.nvidia.com/cuda/parallel-thread-execution/

## 函数

### _mma_nvidia

`@always_inline def _mma_nvidia(mut d`
