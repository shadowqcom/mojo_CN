---
title: "gpu/compute/arch"
sidebar_label: "gpu/compute/arch"
description: "Architecture-specific MMA implementations.  This package contains GPU architecture-specific implementations of matrix multiply-accumulate (MMA) operations:  - **mma_nvidia**: NVIDIA tensor cores (SM70"
---

# gpu/compute/arch

Architecture-specific MMA implementations.

This package contains GPU architecture-specific implementations of matrix
multiply-accumulate (MMA) operations:

- **mma_nvidia**: NVIDIA tensor cores (SM70-SM90) - Volta through Hopper
- **mma_nvidia_sm100**: NVIDIA Blackwell (SM100) tensor cores - 5th gen tensor cores
- **mma_amd**: AMD Matrix Cores (CDNA2/3/4) - Data center GPUs
- **mma_amd_rdna**: AMD WMMA (RDNA3/4) - Consumer GPUs
- **mma_apple**: Apple Silicon (M5) - 1st gen neural accelerator

## Module Organization

Each architecture module contains:
- Private implementation functions (prefixed with `_`)
- Architecture-specific intrinsic calls
- Data type conversions specific to that architecture

## Usage

These modules should **not** be imported directly by user code. Instead, use the
unified interface in `gpu.compute.mma` which automatically dispatches to the
appropriate architecture-specific implementation at compile time:

```mojo
from std.gpu.compute import mma

# Usage: var result = mma.mma(a, b, c)
```

## Internal Implementation Details

The main `gpu.compute.mma` module imports these implementations:

```mojo
from std.gpu.compute.arch.mma_nvidia import _mma_nvidia
from std.gpu.compute.arch.mma_amd import _mma_amd
from std.gpu.compute.arch.mma_apple import _mma_apple
```

And dispatches based on compile-time architecture detection:

```text
comptime if is_nvidia_gpu():
    _mma_nvidia(d, a, b, c)
elif is_amd_gpu():
    _mma_amd[block_size](d, a, b, c)
elif is_apple_m5():
    _mma_apple(d, a, b, c)
```

## 模块

- [mma_amd](/docs/std/gpu/compute/arch/mma_amd)
- [mma_amd_rdna](/docs/std/gpu/compute/arch/mma_amd_rdna)
- [mma_apple](/docs/std/gpu/compute/arch/mma_apple)
- [mma_nvidia](/docs/std/gpu/compute/arch/mma_nvidia)
- [mma_nvidia_sm100](/docs/std/gpu/compute/arch/mma_nvidia_sm100)
- [tcgen05](/docs/std/gpu/compute/arch/tcgen05)
