---
title: "tma"
sidebar_label: "tma"
description: "NVIDIA Tensor Memory Accelerator (TMA) module.  Provides types and functions for working with NVIDIA's Tensor Memory Accelerator, which enables efficient asynchronous data movement between global and "
---

# tma

NVIDIA Tensor Memory Accelerator (TMA) module.

Provides types and functions for working with NVIDIA's Tensor Memory Accelerator,
which enables efficient asynchronous data movement between global and shared memory
on GPUs with Hopper architecture and newer.

The TMA hardware provides hardware-accelerated multi-dimensional memory copies with
features like swizzling for bank conflict avoidance, L2 cache promotion hints, and
support for various data types and memory layouts.

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
