---
title: "tma"
sidebar_label: "tma"
description: "NVIDIA 张量内存加速器 (TMA) 模块。提供用于处理 NVIDIA 张量内存加速器的类型和函数，支持 Hopper 架构及更新 GPU 上全局内存和共享内存之间的高效异步数据移动。"
---

# tma

NVIDIA 张量内存加速器 (TMA) 模块。

提供用于处理 NVIDIA 张量内存加速器的类型和函数，支持 Hopper 架构及更新 GPU 上全局内存和共享内存之间的高效异步数据移动。

TMA 硬件提供硬件加速的多维内存复制，具有避免存储体冲突的交错、L2 缓存提升提示以及支持各种数据类型和内存布局等功能。

## 类型

### TensorMapDataType

`struct TensorMapDataType(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `_value: Int32`

**Methods:**

- **from_dtype**: `@staticmethod def from_dtype[dtype`

### TensorMapInterleave

`struct TensorMapInterleave(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `_value: Int32`

### TensorMapSwizzle

`struct TensorMapSwizzle(
    Equatable,
    Hashable,
    ImplicitlyCopyable,
    Intable,
    TrivialRegisterPassable,
    Writable,
)`

**Implemented Traits:**

- `Equatable`
- `Hashable`
- `ImplicitlyCopyable`
- `Intable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: Int32`

**Methods:**

- **__int__**: `def __int__(self) -&gt; Int`

- **__eq__**: `@always_inline def __eq__(self, other`

- **__ne__**: `@always_inline def __ne__(self, other`

- **bytes**: `@always_inline def bytes(self) -&gt; Int`

- **write_to**: `@always_inline def write_to(self, mut writer`

### TensorMapL2Promotion

`struct TensorMapL2Promotion(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `_value: Int32`

### TensorMapFloatOOBFill

`struct TensorMapFloatOOBFill(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `_value: Int32`

### TMADescriptor

`struct TMADescriptor(DevicePassable, ImplicitlyCopyable)`

**Implemented Traits:**

- `DevicePassable`
- `ImplicitlyCopyable`

**Fields:**

- `data: StaticTuple[UInt8, 128]`

**Methods:**

- **_to_device_type**: `def _to_device_type(self, target`

- **get_type_name**: `@staticmethod def get_type_name() -&gt; String`

- **__init__**: `@always_inline def __init__(out self)`

- **__init__**: `@always_inline def __init__(out self, *, copy`
