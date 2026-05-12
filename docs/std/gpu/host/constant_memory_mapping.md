---
title: "constant_memory_mapping"
sidebar_label: "constant_memory_mapping"
description: "此模块提供在主机和设备之间映射常量内存的功能。该模块包括 `ConstantMemoryMapping` 结构体，表示可用于主机和 GPU 设备之间高效数据传输的常量内存映射。"
---

# constant_memory_mapping

此模块提供在主机和设备之间映射常量内存的功能。

该模块包括 `ConstantMemoryMapping` 结构体，表示可用于主机和 GPU 设备之间高效数据传输的常量内存映射。

## 类型

### ConstantMemoryMapping

`@fieldwise_init struct ConstantMemoryMapping(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `name: StaticString`
- `ptr: OpaquePointer[MutAnyOrigin]`
- `byte_count: Int`
