---
title: "globals"
sidebar_label: "globals"
description: "This module provides GPU-specific global constants and configuration values.  The module defines hardware-specific constants like warp size and thread block limits that are used throughout the GPU pro"
---

# globals

This module provides GPU-specific global constants and configuration values.

The module defines hardware-specific constants like warp size and thread block limits
that are used throughout the GPU programming interface. It handles both NVIDIA and AMD
GPU architectures, automatically detecting and configuring the appropriate values based
on the available hardware.

The constants are resolved at compile time based on the target GPU architecture and
are used to optimize code generation and ensure hardware compatibility.

## 函数

### _resolve_warp_size

`def _resolve_warp_size() -&gt; Int`

### _resolve_warpgroup_size

`def _resolve_warpgroup_size() -&gt; Int`

### _resolve_max_threads_per_block_metadata

`def _resolve_max_threads_per_block_metadata() -&gt; __mlir_type.`!kgen.string``
