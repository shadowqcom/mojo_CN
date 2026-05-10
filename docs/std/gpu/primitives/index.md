---
title: "gpu/primitives"
sidebar_label: "gpu/primitives"
description: "GPU primitives package - warp, block, cluster, and grid-level operations.  This package provides low-level GPU execution primitives at various levels of the GPU hierarchy:  - **warp**: Warp-level oper"
---

# gpu/primitives

GPU primitives package - warp, block, cluster, and grid-level operations.

This package provides low-level GPU execution primitives at various levels
of the GPU hierarchy:

- **warp**: Warp-level operations (shuffle, reduce, broadcast)
- **block**: Block-level operations (reductions across thread blocks)
- **cluster**: Cluster-level synchronization (SM90+)
- **grid_controls**: Grid dependency control (Hopper PDL)
- **id**: Thread/block/grid indexing and dimensions

These primitives form the foundation for GPU kernel development.

## 模块

- [block](/docs/std/gpu/primitives/block)
- [cluster](/docs/std/gpu/primitives/cluster)
- [grid_controls](/docs/std/gpu/primitives/grid_controls)
- [id](/docs/std/gpu/primitives/id)
- [warp](/docs/std/gpu/primitives/warp)
