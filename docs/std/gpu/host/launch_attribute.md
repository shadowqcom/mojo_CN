---
title: "launch_attribute"
sidebar_label: "launch_attribute"
description: "GPU Launch Attributes for Kernel Execution Control.  This module provides structures for configuring GPU kernel execution through launch attributes. It implements a Mojo interface to CUDA's launch att"
---

# launch_attribute

GPU Launch Attributes for Kernel Execution Control.

This module provides structures for configuring GPU kernel execution through launch attributes.
It implements a Mojo interface to CUDA's launch attribute system, allowing fine-grained control
over kernel execution characteristics such as memory access policies, synchronization behavior,
cluster dimensions, and resource allocation.

The main components include:
- `LaunchAttributeID`: Identifies different types of launch attributes
- `LaunchAttributeValue`: Stores the value for a specific attribute type
- `LaunchAttribute`: Combines an ID and value to form a complete attribute
- `AccessPolicyWindow`: Configures memory access patterns and caching behavior
- `AccessProperty`: Defines cache persistence properties for memory access

These structures enable optimizing GPU kernel performance by controlling execution parameters
at a granular level, similar to CUDA's native launch attribute system.

## 类型

### LaunchAttributeID

`@fieldwise_init struct LaunchAttributeID(Equatable, TrivialRegisterPassable, Writable)`

**Implemented Traits:**

- `Equatable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: Int32`

**Methods:**

- **__eq__**: `def __eq__(self, other`

- **__ne__**: `def __ne__(self, other`

- **write_to**: `@no_inline def write_to(self, mut writer`

### LaunchAttributeValue

`@fieldwise_init struct LaunchAttributeValue(Defaultable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Defaultable`
- `TrivialRegisterPassable`

**Fields:**

- `_storage: Self._storage_type`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__(out self, policy`

- **__init__**: `def __init__(out self, dim`

- **__init__**: `def __init__(out self, value`

### AccessProperty

`@fieldwise_init struct AccessProperty(Equatable, TrivialRegisterPassable, Writable)`

**Implemented Traits:**

- `Equatable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: Int32`

**Methods:**

- **__eq__**: `def __eq__(self, other`

- **__ne__**: `def __ne__(self, other`

- **write_to**: `@no_inline def write_to(self, mut writer`

### LaunchAttribute

`@fieldwise_init struct LaunchAttribute(Defaultable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Defaultable`
- `TrivialRegisterPassable`

**Fields:**

- `id: LaunchAttributeID`
- `__pad: StaticTuple[UInt8, 8 - size_of[LaunchAttributeID]()]`
- `value: LaunchAttributeValue`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__(out self, id`

- **__init__**: `def __init__(out self, policy`

- **from_cluster_dim**: `@staticmethod def from_cluster_dim(dim`

### AccessPolicyWindow

`struct AccessPolicyWindow(
    Defaultable, ImplicitlyCopyable, RegisterPassable, Writable
)`

**Implemented Traits:**

- `Defaultable`
- `ImplicitlyCopyable`
- `RegisterPassable`
- `Writable`

**Fields:**

- `base_ptr: Optional[OpaquePointer[MutAnyOrigin]]`
- `num_bytes: Int`
- `hit_ratio: Float32`
- `hit_prop: AccessProperty`
- `miss_prop: AccessProperty`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__[
        T`

- **write_to**: `@no_inline def write_to(self, mut writer`
