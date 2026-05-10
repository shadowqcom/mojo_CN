---
title: "sync"
sidebar_label: "sync"
description: "This module provides GPU synchronization primitives and barriers.  The module includes: - Block-level synchronization barriers (barrier()) - Warp-level synchronization (syncwarp()) - Memory barriers ("
---

# sync

This module provides GPU synchronization primitives and barriers.

The module includes:
- Block-level synchronization barriers (barrier())
- Warp-level synchronization (syncwarp())
- Memory barriers (mbarrier) for NVIDIA GPUs
- Instruction scheduling controls for AMD GPUs
- Asynchronous copy and bulk transfer synchronization

The synchronization primitives help coordinate execution between threads within
thread blocks and warps, and manage memory consistency across different memory spaces.

## 类型

### AMDScheduleBarrierMask

`@fieldwise_init struct AMDScheduleBarrierMask(
    Equatable, Intable, TrivialRegisterPassable, Writable
)`

**Implemented Traits:**

- `Equatable`
- `Intable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: Int32`

**Methods:**

- **__init__**: `def __init__(out self, value`

- **__eq__**: `def __eq__(self, other`

- **write_to**: `def write_to(self, mut writer`

- **__int__**: `def __int__(self) -&gt; Int`

### _WaitCountArg

`struct _WaitCountArg`

**Methods:**

- **from_vmcnt**: `@staticmethod def from_vmcnt(cnt`

- **from_expcnt**: `@staticmethod def from_expcnt(cnt`

- **from_lgkmcnt**: `@staticmethod def from_lgkmcnt(cnt`

## 函数

### named_barrier

`def named_barrier[
    num_threads`

### named_barrier_arrive

`def named_barrier_arrive[
    num_threads`

### barrier

`def barrier()`
