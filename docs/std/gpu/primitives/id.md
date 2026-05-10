---
title: "id"
sidebar_label: "id"
description: "This module provides GPU thread and block indexing functionality.  It defines aliases and functions for accessing GPU grid, block, thread and cluster dimensions and indices. These are essential primit"
---

# id

This module provides GPU thread and block indexing functionality.

It defines aliases and functions for accessing GPU grid, block, thread and cluster
dimensions and indices. These are essential primitives for GPU programming that allow
code to determine its position and dimensions within the GPU execution hierarchy.

Most functionality is architecture-agnostic, with some NVIDIA-specific features clearly marked.
The module is designed to work seamlessly across different GPU architectures while providing
optimal performance through hardware-specific optimizations where applicable.

## 类型

### _ThreadIdx

`struct _ThreadIdx[ResultType`

**Methods:**

- **__init__**: `def __init__(out self)`

- **_get_intrinsic_name**: `@staticmethod def _get_intrinsic_name[dim`

- **__getattr_param__**: `def __getattr_param__[dim`

### _BlockIdx

`struct _BlockIdx[ResultType`

**Methods:**

- **__init__**: `def __init__(out self)`

- **_get_intrinsic_name**: `@staticmethod def _get_intrinsic_name[dim`

- **__getattr_param__**: `def __getattr_param__[dim`

### _BlockDim

`struct _BlockDim[ResultType`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__getattr_param__**: `def __getattr_param__[dim`

- **_get_offset**: `@parameter def _get_offset() -&gt; Int`

### _GridDim

`struct _GridDim[ResultType`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__getattr_param__**: `def __getattr_param__[dim`

- **_get_offset**: `@parameter def _get_offset() -&gt; Int`

### _GlobalIdx

`struct _GlobalIdx[ResultType`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__getattr_param__**: `def __getattr_param__[dim`

### _ClusterDim

`struct _ClusterDim(Defaultable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Defaultable`
- `TrivialRegisterPassable`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__getattr_param__**: `def __getattr_param__[dim`

### _ClusterIdx

`struct _ClusterIdx(Defaultable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Defaultable`
- `TrivialRegisterPassable`

**Methods:**

- **__init__**: `def __init__(out self)`

- **_get_intrinsic_name**: `@staticmethod def _get_intrinsic_name[dim`

- **__getattr_param__**: `def __getattr_param__[dim`

### _ClusterBlockIdx

`struct _ClusterBlockIdx(Defaultable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Defaultable`
- `TrivialRegisterPassable`

**Methods:**

- **__init__**: `def __init__(out self)`

- **_get_intrinsic_name**: `@staticmethod def _get_intrinsic_name[dim`

- **__getattr_param__**: `def __getattr_param__[dim`

## 函数

### _verify_xyz

`def _verify_xyz[dim`

### _get_gcn_idx

`@always_inline def _get_gcn_idx[offset`

### lane_id_uint

`def lane_id_uint() -&gt; UInt`

### lane_id

`def lane_id() -&gt; Int`

### _lane_id

`def _lane_id[ResultType`

### warp_id_uint

`def warp_id_uint[*, broadcast`

### warp_id

`def warp_id[*, broadcast`

### _warp_id

`def _warp_id[
    ResultType`

### sm_id

`def sm_id() -&gt; Int`
