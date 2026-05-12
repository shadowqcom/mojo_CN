---
title: "sync"
slug: sync
sidebar_label: "sync"
description: "此模块提供 GPU 同步原语和屏障。模块包括：- 块级同步屏障 (barrier()) - Warp 级同步 (syncwarp()) - 内存屏障 (mbarrier) 用于 NVIDIA GPU"
---

# sync

此模块提供 GPU 同步原语和屏障。

模块包括：
- 块级同步屏障 (barrier())
- Warp 级同步 (syncwarp())
- 内存屏障 (mbarrier) 用于 NVIDIA GPU
- AMD GPU 的指令调度控制
- 异步复制和批量传输同步

同步原语帮助协调线程块和 warp 内线程之间的执行，并管理不同内存空间之间的内存一致性。

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
