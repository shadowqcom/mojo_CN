---
title: "grid_controls"
sidebar_label: "grid_controls"
description: "NVIDIA Hopper (SM90+) GPU 的网格依赖控制原语。此模块提供在 NVIDIA Hopper 架构及更新 GPU 上管理网格依赖的底层原语。它支持高效编排多网格工作负载。"
---

# grid_controls

NVIDIA Hopper (SM90+) GPU 的网格依赖控制原语。

此模块提供在 NVIDIA Hopper 架构及更新 GPU 上管理网格依赖的底层原语。它支持高效编排多网格工作负载，允许网格启动依赖网格并与其同步。

该模块包含直接映射到 CUDA 网格依赖控制指令的函数，提供对网格执行顺序的精细控制：

- `launch_dependent_grids()`：触发依赖于当前网格的网格执行
- `wait_on_dependent_grids()`：阻塞直到所有依赖网格完成执行

这些原语对于实现复杂的 GPU 执行流水线至关重要，其中多个内核需要以特定顺序执行且开销最小。它们消除了在编排依赖 GPU 工作时进行主机端同步的需要。

## 类型

### PDLLevel

`struct PDLLevel(Defaultable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Defaultable`
- `TrivialRegisterPassable`

**Fields:**

- `_level: Int`

**Methods:**

- **__init__**: `@always_inline def __init__(out self)`

- **__init__**: `@always_inline def __init__(out self, level`

- **__eq__**: `@always_inline def __eq__(self, other`

- **__eq__**: `@always_inline def __eq__(self, other`

- **__ne__**: `@always_inline def __ne__(self, other`

- **__gt__**: `@always_inline def __gt__(self, other`

- **__ge__**: `@always_inline def __ge__(self, other`

### PDL

`struct PDL(Defaultable)`

**Implemented Traits:**

- `Defaultable`

**Methods:**

- **__init__**: `@always_inline def __init__(out self)`

- **__enter__**: `@always_inline def __enter__(self)`

- **__exit__**: `@always_inline def __exit__(self)`

## 函数

### _support_pdl_launch

`def _support_pdl_launch() -&gt; Bool`

### pdl_launch_attributes

`def pdl_launch_attributes(
    pdl_level`

### launch_dependent_grids

`def launch_dependent_grids()`

### wait_on_dependent_grids

`def wait_on_dependent_grids()`
