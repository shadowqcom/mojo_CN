---
title: "globals"
sidebar_label: "globals"
description: "此模块提供 GPU 特定的全局常量和配置值。该模块定义硬件特定的常量，如 warp 大小和线程块限制，这些常量在整个 GPU 编程接口中使用。"
---

# globals

此模块提供 GPU 特定的全局常量和配置值。

该模块定义硬件特定的常量，如 warp 大小和线程块限制，这些常量在整个 GPU 编程接口中使用。它处理 NVIDIA 和 AMD GPU 架构，根据可用硬件自动检测和配置适当的值。

这些常量在编译时根据目标 GPU 架构解析，用于优化代码生成并确保硬件兼容性。

## 函数

### _resolve_warp_size

`def _resolve_warp_size() -&gt; Int`

### _resolve_warpgroup_size

`def _resolve_warpgroup_size() -&gt; Int`

### _resolve_max_threads_per_block_metadata

`def _resolve_max_threads_per_block_metadata() -&gt; __mlir_type.`!kgen.string``
