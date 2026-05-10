---
title: "mma_amd"
sidebar_label: "mma_amd"
description: "AMD CDNA Matrix Cores implementation for matrix multiply-accumulate operations.  This module provides MMA implementations for AMD CDNA2, CDNA3, and CDNA4 data center GPUs using the MFMA (Matrix Fused "
---

# mma_amd

AMD CDNA Matrix Cores implementation for matrix multiply-accumulate operations.

This module provides MMA implementations for AMD CDNA2, CDNA3, and CDNA4 data
center GPUs using the MFMA (Matrix Fused Multiply-Add) instructions.

Reference: https://gpuopen.com/learn/amd-lab-notes/amd-lab-notes-matrix-cores-readme/

## 类型

### _AMD_F8F6F4_MATRIX_FORMAT

`@fieldwise_init struct _AMD_F8F6F4_MATRIX_FORMAT(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `_value: Int32`

**Methods:**

- **__init__**: `def __init__(out self, value`
