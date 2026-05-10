---
title: "grid_controls"
sidebar_label: "grid_controls"
description: "Grid Dependent Control primitives for NVIDIA Hopper (SM90+) GPUs.  This module provides low-level primitives for managing grid dependencies on NVIDIA Hopper architecture and newer GPUs. It enables eff"
---

# grid_controls

Grid Dependent Control primitives for NVIDIA Hopper (SM90+) GPUs.

This module provides low-level primitives for managing grid dependencies on NVIDIA
Hopper architecture and newer GPUs. It enables efficient orchestration of multi-grid
workloads by allowing grids to launch dependent grids and synchronize with them.

The module includes functions that map directly to CUDA grid dependency control
instructions, providing fine-grained control over grid execution order:

- `launch_dependent_grids()`: Triggers execution of grids that depend on the
  current grid
- `wait_on_dependent_grids()`: Blocks until all dependent grids complete execution

These primitives are essential for implementing complex GPU execution pipelines where
multiple kernels need to execute in a specific order with minimal overhead. They
eliminate the need for host-side synchronization when orchestrating dependent GPU work.

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
