---
title: "asyncrt"
sidebar_label: "asyncrt"
description: "This module implements the low level concurrency library."
---

# asyncrt

This module implements the low level concurrency library.

## 类型

### _Chain

`struct _Chain(Boolable, Defaultable, ImplicitlyCopyable, RegisterPassable)`

**Implemented Traits:**

- `Boolable`
- `Defaultable`
- `ImplicitlyCopyable`
- `RegisterPassable`

**Fields:**

- `storage: _CPointer[Int, MutExternalOrigin]`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__bool__**: `def __bool__(self) -&gt; Bool`

### _AsyncContext

`struct _AsyncContext(ImplicitlyCopyable, RegisterPassable)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `RegisterPassable`

**Fields:**

- `callback: Self.callback_fn_type`
- `chain: _Chain`

**Methods:**

- **get_chain**: `@staticmethod def get_chain(
        ctx`

- **complete**: `@staticmethod def complete(ch`

### Task

`struct Task[type`

**Fields:**

- `_handle: Coroutine[Self.type, Self.origins]`
- `_result: Self.type`

**Methods:**

- **__init__**: `def __init__(out self, var handle`

- **get**: `def get(self) -&gt; ref[self._result] Self.type`

- **__del__**: `def __del__(deinit self)`

- **__await__**: `@always_inline def __await__(self) -&gt; ref[self.get()] Self.type`

- **await_body**: `@always_inline @parameter def await_body(cur_hdl`

- **wait**: `def wait(self) -&gt; ref[self.get()] Self.type`

### RaisingTask

`@explicit_destroy struct RaisingTask[type`

**Fields:**

- `_handle: RaisingCoroutine[Self.type, Self.origins]`
- `_result_ptr: UnsafePointer[Self.type, MutExternalOrigin]`
- `_error_ptr: UnsafePointer[Error, MutExternalOrigin]`

**Methods:**

- **__init__**: `def __init__(
        out self, var handle`

- **_has_error**: `def _has_error(self) -&gt; Bool`

- **_release_coro**: `def _release_coro(deinit self)`

- **__await__**: `@always_inline def __await__(deinit self, out result`

- **await_body**: `@always_inline @parameter def await_body(cur_hdl`

- **wait**: `def wait(deinit self, out result`

### TaskGroupContext

`@fieldwise_init struct TaskGroupContext(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `callback: Self.tg_callback_fn_type`
- `task_group: UnsafePointer[TaskGroup, MutExternalOrigin]`

### _TaskGroupBox

`struct _TaskGroupBox(Copyable, RegisterPassable)`

**Implemented Traits:**

- `Copyable`
- `RegisterPassable`

**Fields:**

- `handle: AnyCoroutine`

**Methods:**

- **__init__**: `def __init__[
        type`

- **__del__**: `def __del__(deinit self)`

- **__init__**: `def __init__(out self, *, copy`

### TaskGroup

`struct TaskGroup(Defaultable)`

**Implemented Traits:**

- `Defaultable`

**Fields:**

- `counter: Atomic[DType.int]`
- `chain: _Chain`
- `tasks: List[_TaskGroupBox]`
- `prev: Int = Int(self.counter.fetch_sub(1)._mlir_value)`
- `task: Coroutine[NoneType._mlir_type, ...],`
- `task: Coroutine[NoneType._mlir_type, ...],`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__del__**: `def __del__(deinit self)`

- **_counter_decr**: `@always_inline def _counter_decr(mut self) -&gt; Int`

- **_task_complete_callback**: `@staticmethod def _task_complete_callback(mut tg`

- **_task_complete**: `def _task_complete(mut self)`

- **create_task**: `def create_task(
        mut self,
        # FIXME(MSTDL-722)`

- **_create_task**: `def _create_task(
        mut self,
        # FIXME(MSTDL-722)`

- **await_body_impl**: `@staticmethod def await_body_impl(hdl`

- **__await__**: `@always_inline def __await__(mut self)`

- **await_body**: `@always_inline @parameter def await_body(cur_hdl`

- **wait**: `def wait[origins`

### DeviceContextPtr

`struct DeviceContextPtr(Defaultable, ImplicitlyCopyable, RegisterPassable)`

**Implemented Traits:**

- `Defaultable`
- `ImplicitlyCopyable`
- `RegisterPassable`

**Fields:**

- `_handle: Optional[UnsafePointer[NoneType, ExternalOrigin[mut=True]]]`

**Methods:**

- **__init__**: `@always_inline def __init__(out self)`

- **__init__**: `def __init__(out self, handle`

- **__init__**: `@doc_hidden def __init__(out self, handle`

- **__init__**: `@implicit def __init__(out self, device`

- **__getitem__**: `def __getitem__(self) -&gt; DeviceContext`

- **get_device_context**: `def get_device_context(self) -&gt; DeviceContext`

- **get_optional_device_context**: `def get_optional_device_context(self) -&gt; Optional[DeviceContext]`

### DeviceContextPtrList

`struct DeviceContextPtrList[size`

**Fields:**

- `ptrs: StaticTuple[DeviceContextPtr, Self.size]`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, ptrs`

- **__getitem_param__**: `def __getitem_param__[index`

- **__getitem__**: `def __getitem__[I`

- **__len__**: `def __len__(self) -&gt; Int`

## Traits

### that

`trait thatcombines
    # Movable and ImplicitlyDestructible. Currently, the caller must
    # call wait() to consume the task.


# ===-----------------------------------------------------------------------===#
# TaskGroup
# ===-----------------------------------------------------------------------===#


@fieldwise_init
struct TaskGroupContext(TrivialRegisterPassable)`
