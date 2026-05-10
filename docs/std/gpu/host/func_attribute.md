---
title: "func_attribute"
sidebar_label: "func_attribute"
description: "GPU Kernel Function Attributes Module.  This module provides structures for defining and managing GPU kernel function attributes. It implements functionality similar to CUDA's CUfunction_attribute enu"
---

# func_attribute

GPU Kernel Function Attributes Module.

This module provides structures for defining and managing GPU kernel function attributes.
It implements functionality similar to CUDA's CUfunction_attribute enum, allowing
for querying and setting various attributes that control kernel execution behavior
and resource allocation.

The module includes:
- `Attribute`: A value type representing different GPU kernel function attribute types
- `FuncAttribute`: A structure that pairs an attribute type with its value

These structures enable fine-grained control over GPU kernel execution parameters
such as shared memory allocation, cache behavior, and cluster configuration.

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
