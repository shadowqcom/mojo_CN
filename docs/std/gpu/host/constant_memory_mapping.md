---
title: "constant_memory_mapping"
sidebar_label: "constant_memory_mapping"
description: "This module provides functionality for mapping constant memory between host and device.  The module includes the `ConstantMemoryMapping` struct which represents a mapping of constant memory that can b"
---

# constant_memory_mapping

This module provides functionality for mapping constant memory between host and device.

The module includes the `ConstantMemoryMapping` struct which represents a mapping of
constant memory that can be used for efficient data transfer between host and GPU device.

## 类型

### ConstantMemoryMapping

`@fieldwise_init struct ConstantMemoryMapping(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `name: StaticString`
- `ptr: OpaquePointer[MutAnyOrigin]`
- `byte_count: Int`
