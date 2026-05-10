---
title: "memory"
sidebar_label: "memory"
description: "This module provides GPU memory operations and utilities.  The module implements low-level memory operations for GPU programming, with a focus on:  - Memory address space abstractions (global, shared,"
---

# memory

This module provides GPU memory operations and utilities.

The module implements low-level memory operations for GPU programming, with a focus on:

- Memory address space abstractions (global, shared, constant)
- Cache control operations and policies
- Memory access patterns and optimizations
- Memory alignment and pointer manipulation

It provides a unified interface for memory operations across different GPU architectures,
with specialized implementations for NVIDIA and AMD GPUs where needed.

The module is designed for performance-critical code and requires careful usage to
achieve optimal memory access patterns and cache utilization.

## 类型

### CacheOperation

`@fieldwise_init struct CacheOperation(Equatable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Equatable`
- `TrivialRegisterPassable`

**Fields:**

- `_value: Int`

**Methods:**

- **__eq__**: `def __eq__(self, other`

- **__or__**: `def __or__(self, other`

- **mnemonic**: `@always_inline def mnemonic(self) -&gt; StaticString`

### CacheEviction

`@fieldwise_init struct CacheEviction(Equatable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Equatable`
- `TrivialRegisterPassable`

**Fields:**

- `_value: Int`

**Methods:**

- **__eq__**: `def __eq__(self, other`

- **mnemonic**: `@always_inline def mnemonic(self) -&gt; StaticString`

### Fill

`@fieldwise_init struct Fill(Equatable, TrivialRegisterPassable, Writable)`

**Implemented Traits:**

- `Equatable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: Int`

**Methods:**

- **__eq__**: `def __eq__(self, other`

- **write_to**: `@no_inline def write_to(self, mut writer`

### Consistency

`@fieldwise_init struct Consistency(Equatable, TrivialRegisterPassable, Writable)`

**Implemented Traits:**

- `Equatable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: Int`

**Methods:**

- **__eq__**: `def __eq__(self, other`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

- **mnemonic**: `@always_inline def mnemonic(self) -&gt; StaticString`

### ReduceOp

`@fieldwise_init struct ReduceOp(Equatable, TrivialRegisterPassable, Writable)`

**Implemented Traits:**

- `Equatable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: Int`

**Methods:**

- **__eq__**: `def __eq__(self, other`

- **__is__**: `def __is__(self, other`

- **write_to**: `@no_inline def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **mnemonic**: `@always_inline def mnemonic(self) -&gt; StaticString`
