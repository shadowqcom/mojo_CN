---
title: "algorithm"
sidebar_label: "algorithm"
description: "高性能数据操作：向量化、并行化、归约、内存。`algorithm` 包提供了数据并行操作的高性能原语。它包括用于向量化的工具。"
---

# algorithm

高性能数据操作：向量化、并行化、归约、内存。

`algorithm` 包提供了数据并行操作的高性能原语。它包括用于向量化（连续数据上的 SIMD 操作）、并行化（跨多个核心分配工作）和归约操作（聚合值）的工具。这些构建块使得无需手动编写 SIMD 内部函数或线程管理即可实现高效的计算内核。

此包适用于大型数据集、数值算法或计算密集型代码。对于小数据的逐元素操作，标准循环可能更简单。

## 模块

- [functional](/docs/std/algorithm/functional)
- [memory](/docs/std/algorithm/memory)
- [reduction](/docs/std/algorithm/reduction)
