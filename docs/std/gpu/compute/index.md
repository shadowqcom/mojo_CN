---
title: "gpu/compute"
sidebar_label: "gpu/compute"
description: "GPU compute operations package - MMA and tensor core operations.  This package provides GPU tensor core and matrix multiplication operations:  - **mma**: Unified warp matrix-multiply-accumulate (WMMA)"
---

# gpu/compute

GPU compute operations package - MMA and tensor core operations.

This package provides GPU tensor core and matrix multiplication operations:

- **mma**: Unified warp matrix-multiply-accumulate (WMMA) operations
- **mma_util**: Utility functions for loading/storing MMA operands
- **mma_operand_descriptor**: Operand descriptor types for MMA
- **tensor_ops**: Tensor core-based reductions and operations
- **arch/**: Architecture-specific MMA implementations (internal)
  - `mma_nvidia`: NVIDIA tensor cores (SM70-SM90)
  - `mma_nvidia_sm100`: NVIDIA Blackwell (SM100)
  - `mma_amd`: AMD Matrix Cores (CDNA2/3/4)
  - `mma_amd_rdna`: AMD WMMA (RDNA3/4)
  - `tcgen05`: 5th generation tensor core operations (Blackwell)

## Usage

Import compute operations directly:

```mojo
from std.gpu.compute import mma

# Usage: var result = mma.mma(a, b, c)
```

Architecture-specific implementations in `arch/` are internal and should not
be imported directly by user code.

## 模块

- [mma](/docs/std/gpu/compute/mma)
- [mma_operand_descriptor](/docs/std/gpu/compute/mma_operand_descriptor)
- [mma_util](/docs/std/gpu/compute/mma_util)
- [tensor_ops](/docs/std/gpu/compute/tensor_ops)

## 子包

- [arch](/docs/std/gpu/compute/arch)
