---
title: "lock"
sidebar_label: "lock"
description: "Implements thread synchronization primitives including spin locks.  This module provides low-level locking mechanisms for thread synchronization, including spin locks with blocking behavior and scoped"
---

# lock

Implements thread synchronization primitives including spin locks.

This module provides low-level locking mechanisms for thread synchronization,
including spin locks with blocking behavior and scoped lock guards for
automatic lock management. These primitives enable safe concurrent access to
shared resources in multi-threaded code.

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
