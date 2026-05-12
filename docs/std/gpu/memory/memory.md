---
title: "memory"
slug: memory
sidebar_label: "memory"
description: "此模块提供 GPU 内存操作和工具。该模块实现了 GPU 编程的低级内存操作，重点关注：- 内存地址空间抽象（全局、共享、常量）"
---

# memory

此模块提供 GPU 内存操作和工具。

该模块实现了 GPU 编程的低级内存操作，重点关注：

- 内存地址空间抽象（全局、共享、常量）
- 缓存控制操作和策略
- 内存访问模式和优化
- 内存对齐和指针操作

它为不同 GPU 架构的内存操作提供统一接口，并在需要时为 NVIDIA 和 AMD GPU 提供专门的实现。

该模块专为性能关键代码设计，需要谨慎使用以实现最佳内存访问模式和缓存利用率。

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
