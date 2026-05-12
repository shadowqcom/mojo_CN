---
title: "launch_attribute"
sidebar_label: "launch_attribute"
description: "GPU 启动属性用于内核执行控制。此模块提供通过启动属性配置 GPU 内核执行的结构。它实现了 CUDA 启动属性系统的 Mojo 接口。"
---

# launch_attribute

GPU 启动属性用于内核执行控制。

此模块提供通过启动属性配置 GPU 内核执行的结构。它实现了 CUDA 启动属性系统的 Mojo 接口，允许对内核执行特性进行精细控制，例如内存访问策略、同步行为、集群维度和资源分配。

主要组件包括：
- `LaunchAttributeID`：标识不同类型的启动属性
- `LaunchAttributeValue`：存储特定属性类型的值
- `LaunchAttribute`：将 ID 和值组合成完整属性
- `AccessPolicyWindow`：配置内存访问模式和缓存行为
- `AccessProperty`：定义内存访问的缓存持久性属性

这些结构支持通过在细粒度级别控制执行参数来优化 GPU 内核性能，类似于 CUDA 的原生启动属性系统。

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
