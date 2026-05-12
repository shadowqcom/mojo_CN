---
title: "semaphore"
sidebar_label: "semaphore"
description: "此模块提供 NVIDIA GPU 的设备级信号量实现。Semaphore 结构体通过提供原子操作和内存屏障支持 CTA（协作线程阵列）间同步。"
---

# semaphore

此模块提供 NVIDIA GPU 的设备级信号量实现。

Semaphore 结构体通过提供原子操作和内存屏障支持 CTA（协作线程阵列）间同步。它使用 NVIDIA 特定的内部函数实现高效的线程同步。

示例：

    ```mojo
    from std.gpu import Semaphore

    var lock = UnsafePointer[Int32, MutAnyOrigin]()
    var thread_id = 0
    var sem = Semaphore(lock, thread_id)

    # 等待特定状态
    sem.wait(0)

    # 释放信号量
    sem.release(1)
    ```

## 类型

### Semaphore

`struct Semaphore(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `_lock: UnsafePointer[Int32, MutAnyOrigin]`
- `_wait_thread: Bool`
- `_state: Int32`

**Methods:**

- **__init__**: `@always_inline def __init__(
        out self, lock`

- **fetch**: `@always_inline def fetch(mut self)`

- **state**: `@always_inline def state(self) -&gt; Int32`

- **wait**: `@always_inline def wait(mut self, status`

- **release**: `@always_inline def release(mut self, status`

### NamedBarrierSemaphore

`struct NamedBarrierSemaphore[
    thread_count`

## 函数

### _barrier_and

`@always_inline def _barrier_and(state`
