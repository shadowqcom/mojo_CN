---
title: "id"
sidebar_label: "id"
description: "此模块提供 GPU 线程和块索引功能。它定义用于访问 GPU 网格、块、线程和集群维度及索引的别名和函数。这些是 GPU 编程的基本原语。"
---

# id

此模块提供 GPU 线程和块索引功能。

它定义用于访问 GPU 网格、块、线程和集群维度及索引的别名和函数。这些是 GPU 编程的基本原语，允许代码确定其在 GPU 执行层次结构中的位置和维度。

大多数功能是架构无关的，一些 NVIDIA 特定功能已明确标记。该模块设计为跨不同 GPU 架构无缝工作，同时通过适用的硬件特定优化提供最佳性能。

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
