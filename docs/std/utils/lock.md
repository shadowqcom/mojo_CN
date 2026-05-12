---
title: "lock"
sidebar_label: "lock"
description: "实现线程同步原语，包括自旋锁。此模块提供用于线程同步的低级锁定机制，包括具有阻塞行为的自旋锁和用于自动锁管理的范围锁保护。"
---

# lock

实现线程同步原语，包括自旋锁。

此模块提供用于线程同步的低级锁定机制，包括具有阻塞行为的自旋锁和用于自动锁管理的范围锁保护。这些原语使多线程代码中的共享资源安全并发访问成为可能。

## 类型

### SpinWaiter

`struct SpinWaiter(Defaultable)`

**Implemented Traits:**

- `Defaultable`

**Fields:**

- `storage: OpaquePointer[MutExternalOrigin]`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__del__**: `def __del__(deinit self)`

- **wait**: `def wait(self)`

### BlockingSpinLock

`struct BlockingSpinLock(Defaultable)`

**Implemented Traits:**

- `Defaultable`

**Fields:**

- `counter: Atomic[DType.int64]`

**Methods:**

- **__init__**: `def __init__(out self)`

- **lock**: `def lock(mut self, owner`

- **unlock**: `def unlock(mut self, owner`

### BlockingScopedLock

`struct BlockingScopedLock`

**Fields:**

- `lock: UnsafePointer[Self.LockType, MutAnyOrigin]`

**Methods:**

- **__init__**: `def __init__(
        out self,
        lock`

- **__init__**: `def __init__(
        out self,
        mut lock`

- **__enter__**: `@no_inline def __enter__(mut self)`

- **__exit__**: `@no_inline def __exit__(mut self)`
