---
title: "func_attribute"
sidebar_label: "func_attribute"
description: "GPU 内核函数属性模块。此模块提供用于定义和管理 GPU 内核函数属性的结构。它实现类似于 CUDA CUfunction_attribute 枚举的功能。"
---

# func_attribute

GPU 内核函数属性模块。

此模块提供用于定义和管理 GPU 内核函数属性的结构。它实现类似于 CUDA CUfunction_attribute 枚举的功能，允许查询和设置控制内核执行行为和资源分配的各种属性。

该模块包括：
- `Attribute`：表示不同 GPU 内核函数属性类型的值类型
- `FuncAttribute`：将属性类型与其值配对的结构

这些结构支持对 GPU 内核执行参数进行精细控制，例如共享内存分配、缓存行为和集群配置。

## 类型

### Attribute

`@fieldwise_init struct Attribute(Equatable, TrivialRegisterPassable, Writable)`

**Implemented Traits:**

- `Equatable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `code: Int32`

**Methods:**

- **__eq__**: `def __eq__(self, other`

- **__ne__**: `def __ne__(self, other`

- **write_to**: `def write_to(self, mut writer`

### FuncAttribute

`@fieldwise_init struct FuncAttribute(Equatable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Equatable`
- `TrivialRegisterPassable`

**Fields:**

- `attribute: Attribute`
- `value: Int32`

**Methods:**

- **__eq__**: `def __eq__(self, other`

- **__ne__**: `def __ne__(self, other`

- **CACHE_MODE_CA**: `@always_inline @staticmethod def CACHE_MODE_CA(val`

- **MAX_DYNAMIC_SHARED_SIZE_BYTES**: `@always_inline @staticmethod def MAX_DYNAMIC_SHARED_SIZE_BYTES(val`

- **PREFERRED_SHARED_MEMORY_CARVEOUT**: `@always_inline @staticmethod def PREFERRED_SHARED_MEMORY_CARVEOUT(val`
