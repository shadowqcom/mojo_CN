---
title: "info"
sidebar_label: "info"
description: "Contains information about GPU architectures and their capabilities.  This module provides detailed specifications for various GPU models including NVIDIA and AMD GPUs. It includes information about c"
---

# info

Contains information about GPU architectures and their capabilities.

This module provides detailed specifications for various GPU models including
NVIDIA and AMD GPUs. It includes information about compute capabilities,
memory specifications, thread organization, and performance characteristics.

## 类型

### AcceleratorArchitectureFamily

`@fieldwise_init struct AcceleratorArchitectureFamily(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `warp_size: Int`
- `threads_per_multiprocessor: Int`
- `shared_memory_per_multiprocessor: Int`
- `max_registers_per_block: Int`
- `max_thread_block_size: Int`

### Vendor

`@fieldwise_init struct Vendor(Equatable, TrivialRegisterPassable, Writable)`

**Implemented Traits:**

- `Equatable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: Int8`

**Methods:**

- **__eq__**: `def __eq__(self, other`

- **__ne__**: `def __ne__(self, other`

- **write_to**: `@no_inline def write_to(self, mut writer`

### GPUInfo

`@fieldwise_init struct GPUInfo(Equatable, RegisterPassable, Writable)`

**Implemented Traits:**

- `Equatable`
- `RegisterPassable`
- `Writable`

**Fields:**

- `name: StaticString`
- `vendor: Vendor`
- `api: StaticString`
- `arch_name: StaticString`
- `compute: Float32`
- `version: StaticString`
- `sm_count: Int`
- `warp_size: Int`
- `threads_per_multiprocessor: Int`
- `shared_memory_per_multiprocessor: Int`
- `max_registers_per_block: Int`
- `max_thread_block_size: Int`

**Methods:**

- **target**: `def target(self) -&gt; _TargetType`

- **from_target**: `@staticmethod def from_target[target`

- **from_name**: `@staticmethod def from_name[name`

- **from_family**: `@staticmethod def from_family(
        family`

- **__eq__**: `def __eq__(self, other`

- **write_to**: `@no_inline def write_to(self, mut writer`
