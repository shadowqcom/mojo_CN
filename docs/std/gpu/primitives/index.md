---
title: "gpu/primitives"
sidebar_label: "gpu/primitives"
description: "GPU 原语包 - warp、块、集群和网格级操作。此包提供 GPU 层次结构各个级别的底层 GPU 执行原语：- **warp**：Warp 级操作（洗牌、归约、广播）"
---

# gpu/primitives

GPU 原语包 - warp、块、集群和网格级操作。

此包提供 GPU 层次结构各个级别的底层 GPU 执行原语：

- **warp**：Warp 级操作（洗牌、归约、广播）
- **block**：块级操作（跨线程块归约）
- **cluster**：集群级同步 (SM90+)
- **grid_controls**：网格依赖控制 (Hopper PDL)
- **id**：线程/块/网格索引和维度

这些原语构成了 GPU 内核开发的基础。

## 模块

- [block](/docs/std/gpu/primitives/block)
- [cluster](/docs/std/gpu/primitives/cluster)
- [grid_controls](/docs/std/gpu/primitives/grid_controls)
- [id](/docs/std/gpu/primitives/id)
- [warp](/docs/std/gpu/primitives/warp)
