---
title: "device_context"
sidebar_label: "device_context"
description: "This module provides functionality for interacting with accelerators. In particular the [`DeviceContext`](/docs/std/gpu/host/device_context/DeviceContext/) struct, which represents a single stream of "
---

# device_context

This module provides functionality for interacting with accelerators. In
particular the
[`DeviceContext`](/docs/std/gpu/host/device_context/DeviceContext/) struct,
which represents a single stream of execution on a given accelerator. You can
use this struct to allocate accelerator memory, copy data to and from the
accelerator, and compile and execute functions on the accelerator.

## 类型

### _DeviceContextCpp

`struct _DeviceContextCpp`

### _DeviceBufferCpp

`struct _DeviceBufferCpp`

### _DeviceFunctionCpp

`struct _DeviceFunctionCpp`

### _DeviceMulticastBufferCpp

`struct _DeviceMulticastBufferCpp`

### _DeviceStreamCpp

`struct _DeviceStreamCpp`

### _DeviceEventCpp

`struct _DeviceEventCpp`

### _DeviceTimerCpp

`struct _DeviceTimerCpp`

### _DeviceContextScopeCpp

`struct _DeviceContextScopeCpp`

### _DeviceGraphBuilderCpp

`struct _DeviceGraphBuilderCpp`

### _DeviceGraphCpp

`struct _DeviceGraphCpp`

### _DeviceTimer

`struct _DeviceTimer`

**Fields:**

- `_handle: _DeviceTimerPtr[mut=True]`

**Methods:**

- **__init__**: `def __init__(out self, ptr`

- **__del__**: `def __del__(deinit self)`

### StreamPriorityRange

`@fieldwise_init struct StreamPriorityRange(TrivialRegisterPassable, Writable)`

**Implemented Traits:**

- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `least: Int`
- `greatest: Int`

**Methods:**

- **write_to**: `@always_inline def write_to(self, mut writer`

### _DeviceBufferMode

`@fieldwise_init struct _DeviceBufferMode(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `_mode: Int`

**Methods:**

- **__eq__**: `def __eq__(self, other`

### HostBuffer

`struct HostBuffer[dtype`

**Fields:**

- `_host_ptr: Self._HostPtr`
- `_handle: _DeviceBufferPtr[mut=True]`
- `cpp_handle: _DeviceBufferPtr[mut=True] = {}`
- `host_ptr: Optional[Self._HostPtr] = {}`
- `cpp_handle: _DeviceBufferPtr[mut=True] = {}`
- `new_handle: _DeviceBufferPtr[mut=True] = {}`
- `ctx_ptr: _DeviceContextPtr[mut=True] = external_call[`

**Methods:**

- **__init__**: `@doc_hidden def __init__(
        out self,
        ctx`

- **__init__**: `@doc_hidden def __init__(
        out self, handle`

- **__init__**: `@doc_hidden def __init__(
        out self,
        ctx`

- **__init__**: `def __init__(out self, *, copy`

- **__del__**: `def __del__(deinit self)`

- **__len__**: `def __len__(self) -&gt; Int`

- **create_sub_buffer**: `def create_sub_buffer[
        view_type`

- **enqueue_copy_to**: `def enqueue_copy_to(self, dst`

- **enqueue_copy_to**: `def enqueue_copy_to(self, dst`

- **enqueue_copy_to**: `def enqueue_copy_to(
        self, dst_ptr`

- **enqueue_copy_from**: `def enqueue_copy_from(self, src`

- **enqueue_copy_from**: `def enqueue_copy_from(self, src`

- **enqueue_copy_from**: `def enqueue_copy_from(
        self, src_ptr`

- **enqueue_copy_from**: `def enqueue_copy_from(self, src`

- **enqueue_copy_to**: `def enqueue_copy_to(
        self, dst`

- **enqueue_fill**: `def enqueue_fill(self, val`

- **reassign_ownership_to**: `def reassign_ownership_to(self, ctx`

- **take_ptr**: `def take_ptr(
        deinit self,
    ) -&gt; Self._HostPtr`

- **unsafe_ptr**: `@always_inline def unsafe_ptr(
        self,
    ) -&gt; Self._HostPtr`

- **context**: `def context(self) raises -&gt; DeviceContext`

- **write_to**: `def write_to(self, mut writer`

- **serialize**: `@parameter def serialize[T`

- **__getitem__**: `@always_inline def __getitem__(self, idx`

- **__setitem__**: `@always_inline def __setitem__(
        self`

- **as_span**: `def as_span[
        mut`

### DeviceBuffer

`struct DeviceBuffer[dtype`

### to

`struct toenable passing of
    # DeviceBuffer to kernels. The first word is passed to the kernel and
    # it needs to contain the value registered with the driver.
    var _device_ptr`

**Fields:**

- `_handle: _DeviceBufferPtr[mut=True]`
- `cpp_handle: _DeviceBufferPtr[mut=True] = {}`
- `device_ptr: Optional[Self._DevicePtr] = {}`
- `cpp_handle: _DeviceBufferPtr[mut=True] = {}`
- `cpp_handle: _DeviceBufferPtr[mut=True] = {}`
- `new_handle: _DeviceBufferPtr[mut=True] = {}`
- `new_device_ptr: Optional[`
- `ctx_ptr: _DeviceContextPtr[mut=True] = external_call[`

**Methods:**

- **__init__**: `@doc_hidden @always_inline def __init__(
        out self,
        ctx`

- **__init__**: `@doc_hidden def __init__(
        out self,
        handle`

- **__init__**: `@doc_hidden def __init__(
        out self,
        ctx`

- **__init__**: `@doc_hidden def __init__[
        _dtype`

- **__init__**: `def __init__(out self, *, copy`

- **__del__**: `@always_inline def __del__(deinit self)`

- **empty**: `@staticmethod @doc_hidden def empty(context`

- **__len__**: `def __len__(self) -&gt; Int`

- **create_sub_buffer**: `@always_inline def create_sub_buffer[
        view_type`

- **enqueue_copy_to**: `def enqueue_copy_to(self, dst`

- **enqueue_copy_to**: `def enqueue_copy_to(self, dst`

- **enqueue_copy_to**: `def enqueue_copy_to(
        self, dst_ptr`

- **enqueue_copy_from**: `def enqueue_copy_from(self, src`

- **enqueue_copy_from**: `def enqueue_copy_from(self, src`

- **enqueue_copy_from**: `def enqueue_copy_from(
        self, src_ptr`

- **enqueue_copy_from**: `def enqueue_copy_from(self, src`

- **enqueue_copy_to**: `def enqueue_copy_to(
        self, dst`

- **enqueue_fill**: `def enqueue_fill(self, val`

- **reassign_ownership_to**: `def reassign_ownership_to(self, ctx`

- **take_ptr**: `@always_inline def take_ptr(
        var self,
    ) -&gt; Self._DevicePtr`

- **unsafe_ptr**: `@always_inline def unsafe_ptr(
        self,
    ) -&gt; Self._DevicePtr`

- **context**: `def context(self) raises -&gt; DeviceContext`

- **map_to_host**: `def map_to_host(
        self,
        out mapped_buffer`

- **write_to**: `def write_to(self, mut writer`

- **serialize**: `@parameter def serialize[T`

### DeviceStream

`@doc_hidden struct DeviceStream(ImplicitlyCopyable, _FunctionEnqueuer)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `_FunctionEnqueuer`

**Fields:**

- `_handle: _DeviceStreamPtr[mut=True]`
- `result: _DeviceStreamPtr[mut=True] = {}`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`

**Methods:**

- **handle**: `@always_inline def handle(self) -&gt; UnsafePointer[NoneType, MutExternalOrigin]`

- **__init__**: `@doc_hidden @always_inline def __init__(out self, handle`

- **__init__**: `@doc_hidden @always_inline def __init__(out self, ctx`

- **__init__**: `@doc_hidden def __init__(out self, *, copy`

- **__del__**: `@doc_hidden @always_inline def __del__(deinit self)`

- **synchronize**: `@always_inline def synchronize(self) raises`

- **enqueue_wait_for**: `@always_inline def enqueue_wait_for(self, event`

- **record_event**: `@always_inline def record_event(self, event`

- **enqueue_host_func**: `@always_inline def enqueue_host_func(
        self,
        func`

- **enqueue_function**: `@always_inline def enqueue_function[
        *Ts`

### EventFlags

`struct EventFlags(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `_flags: c_uint`

**Methods:**

- **__init__**: `def __init__(out self, flags`

- **__ior__**: `def __ior__(mut self, other`

- **__or__**: `def __or__(self, other`

### DeviceEvent

`struct DeviceEvent(ImplicitlyCopyable)`

**Implemented Traits:**

- `ImplicitlyCopyable`

**Fields:**

- `_handle: _DeviceEventPtr[mut=True]`
- `result: _DeviceEventPtr[mut=True] = {}`

**Methods:**

- **__init__**: `@doc_hidden @always_inline def __init__(out self, ctx`

- **__init__**: `@doc_hidden @always_inline def __init__(out self, existing`

- **__init__**: `@doc_hidden def __init__(out self, *, copy`

- **__del__**: `def __del__(deinit self)`

- **synchronize**: `@always_inline def synchronize(self) raises`

### DeviceFunction

`struct DeviceFunction[
    func_type`

### DeviceExternalFunction

`struct DeviceExternalFunction`

**Fields:**

- `_handle: _DeviceFunctionPtr[mut=True]`
- `function_name: String,`
- `asm: String,`
- `max_dynamic_shared_size_bytes: Int32 = -1`
- `result: _DeviceFunctionPtr[mut=True] = {}`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `result: Int32 = 0`

**Methods:**

- **__init__**: `def __init__(out self, *, copy`

- **__del__**: `def __del__(deinit self)`

- **__init__**: `@doc_hidden @always_inline def __init__(
        out self,
        ctx`

- **__init__**: `@doc_hidden @always_inline def __init__(
        out self,
        ctx`

- **_copy_to_constant_memory**: `@always_inline def _copy_to_constant_memory(
        read self, mapping`

- **_call_with_pack**: `@always_inline @parameter def _call_with_pack[
        *Ts`

- **get_attribute**: `@always_inline def get_attribute(self, attr`

### DeviceGraph

`struct DeviceGraph(ImplicitlyCopyable)`

**Implemented Traits:**

- `ImplicitlyCopyable`

**Fields:**

- `_handle: _DeviceGraphPtr[mut=True]`

**Methods:**

- **__init__**: `@doc_hidden def __init__(out self, handle`

- **__init__**: `def __init__(out self, *, copy`

- **__del__**: `def __del__(deinit self)`

- **replay**: `def replay(self) raises`

### DeviceGraphBuilder

`struct DeviceGraphBuilder(Movable, _FunctionEnqueuer)`

**Implemented Traits:**

- `Movable`
- `_FunctionEnqueuer`

**Fields:**

- `_handle: _DeviceGraphBuilderPtr[mut=True]`
- `_ctx: DeviceContext`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `value: UInt64`
- `result: _DeviceGraphPtr[mut=True] = {}`

**Methods:**

- **handle**: `@always_inline def handle(self) -&gt; UnsafePointer[NoneType, MutExternalOrigin]`

- **__init__**: `@doc_hidden def __init__(
        out self,
        handle`

- **__init__**: `def __init__(out self, *, copy`

- **__del__**: `def __del__(deinit self)`

- **add_function**: `@parameter @always_inline def add_function[
        *Ts`

- **add_function**: `@always_inline def add_function[
        FuncType`

- **add_copy**: `@always_inline def add_copy[
        dtype`

- **add_copy**: `@always_inline def add_copy[
        dtype`

- **add_copy**: `@always_inline def add_copy[
        dtype`

- **add_memset**: `@always_inline def add_memset[
        dtype`

- **instantiate**: `def instantiate(var self) raises -&gt; DeviceGraph`

### DeviceContext

`struct DeviceContext(ImplicitlyCopyable, RegisterPassable, _FunctionEnqueuer)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `RegisterPassable`
- `_FunctionEnqueuer`

**Fields:**

- `_handle: _DeviceContextPtr[mut=True]`
- `_owning: Bool`
- `api: String = String(Self.default_device_info.api),`
- `result: _DeviceContextPtr[mut=True] = {}`
- `function_name: String,`
- `asm: String,`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `attributes: List[LaunchAttribute] = [],`
- `constant_memory: List[ConstantMemoryMapping] = [],`
- `timer_ptr: _DeviceTimerPtr[mut=True] = {}`
- `elapsed_nanos: Int = 0`
- `timer_ptr: _DeviceTimerPtr[mut=True] = {}`
- `elapsed_nanos: Int = 0`
- `timer_ptr: _DeviceTimerPtr[mut=True] = {}`
- `elapsed_nanos: Int = 0`
- `value: UInt64`
- `value: UInt64`
- `result: _DeviceEventPtr[mut=True] = {}`
- `result: _DeviceStreamPtr[mut=True] = {}`
- `result: _DeviceStreamPtr[mut=True] = {}`
- `value: Int32 = 0`
- `value: c_int = 0`
- `compute_capability: Int32 = 0`
- `result: Bool = False`
- `result: Bool = False`
- `result: Bool = False`
- `result: _DeviceGraphBuilderPtr[mut=True] = {}`

**Methods:**

- **handle**: `@always_inline def handle(self) -&gt; UnsafePointer[NoneType, MutExternalOrigin]`

- **__init__**: `@always_inline def __init__(
        out self,
        device_id`

- **_retain**: `def _retain(self)`

- **__init__**: `@doc_hidden def __init__(out self, ctx_ptr`

- **__init__**: `def __init__(out self, *, copy`

- **__del__**: `def __del__(deinit self)`

- **__enter__**: `def __enter__(var self) -&gt; Self`

- **name**: `def name(self) -&gt; String`

- **api**: `def api(self) -&gt; String`

- **_get_max_dynamic_shared_memory_bytes**: `def _get_max_dynamic_shared_memory_bytes(
        self, requested_bytes`

- **enqueue_create_buffer**: `def enqueue_create_buffer[
        dtype`

- **create_buffer_sync**: `def create_buffer_sync[
        dtype`

- **enqueue_create_host_buffer**: `def enqueue_create_host_buffer[
        dtype`

- **compile_function_unchecked**: `@always_inline def compile_function_unchecked[
        func_type`

- **compile_function**: `@always_inline def compile_function[
        func_type`

- **compile_function**: `@always_inline def compile_function[
        declared_arg_types`

- **compile_function_experimental**: `@always_inline def compile_function_experimental[
        declared_arg_types`

- **compile_function**: `@always_inline def compile_function[
        func_type`

- **compile_function**: `@always_inline def compile_function[
        declared_arg_types`

- **compile_function_experimental**: `@always_inline def compile_function_experimental[
        declared_arg_types`

- **load_function**: `def load_function[
        func_type`

- **enqueue_function_unchecked**: `@parameter @always_inline def enqueue_function_unchecked[
        func_type`

- **enqueue_function_unchecked**: `@parameter @always_inline def enqueue_function_unchecked[
        *Ts`

- **enqueue_function**: `@parameter @always_inline def enqueue_function[
        *Ts`

- **enqueue_function**: `@always_inline def enqueue_function[
        *Ts`

- **enqueue_function**: `@parameter @always_inline def enqueue_function[
        func_type`

- **enqueue_function**: `@parameter @always_inline def enqueue_function[
        declared_arg_types`

- **enqueue_function_experimental**: `@parameter @always_inline def enqueue_function_experimental[
        declared_arg_types`

- **enqueue_function**: `@parameter @always_inline def enqueue_function[
        func_type`

- **enqueue_function**: `@always_inline def enqueue_function[
        FuncType`

- **enqueue_function**: `@parameter @always_inline def enqueue_function[
        declared_arg_types`

- **enqueue_function_experimental**: `@parameter @always_inline def enqueue_function_experimental[
        declared_arg_types`

- **enqueue_function_experimental**: `@parameter @always_inline def enqueue_function_experimental[
        func_type`

- **enqueue_cpu_function**: `@always_inline def enqueue_cpu_function[
        func`

- **wrapper**: `def wrapper() capturing -&gt; None`

- **enqueue_cpu_function**: `@always_inline def enqueue_cpu_function[
        FuncType`

- **wrapper**: `def wrapper() capturing -&gt; None`

- **enqueue_cpu_range**: `@always_inline def enqueue_cpu_range[
        func`

- **wrapper**: `def wrapper(idx`

- **enqueue_cpu_range**: `@always_inline def enqueue_cpu_range[
        FuncType`

- **wrapper**: `def wrapper(idx`

- **execution_time**: `@parameter @always_inline def execution_time[
        func`

- **func_unified**: `@always_inline def func_unified(ctx`

- **execution_time**: `@always_inline def execution_time[
        FuncType`

- **push_context**: `def push_context(self) raises -&gt; _DeviceContextScope`

- **set_as_current**: `def set_as_current(self) raises`

- **execution_time**: `@always_inline def execution_time[
        func`

- **func_unified**: `@always_inline def func_unified()`

- **execution_time**: `@always_inline def execution_time[
        FuncType`

- **execution_time_iter**: `@always_inline def execution_time_iter[
        func`

- **func_unified**: `@always_inline def func_unified(ctx`

- **execution_time_iter**: `@always_inline def execution_time_iter[
        FuncType`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **to_device_buffer**: `def to_device_buffer(
            pointer`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_copy**: `@always_inline def enqueue_copy[
        dtype`

- **enqueue_memset**: `@always_inline def enqueue_memset[
        dtype`

- **enqueue_memset**: `def enqueue_memset[
        dtype`

- **stream**: `@doc_hidden @always_inline def stream(self) raises -&gt; DeviceStream`

- **create_event**: `@always_inline def create_event[
        *,
        blocking_sync`

- **stream_priority_range**: `def stream_priority_range(self) raises -&gt; StreamPriorityRange`

- **create_stream**: `def create_stream(self, *, priority`

- **create_external_stream**: `def create_external_stream(
        self, external_stream`

- **synchronize**: `@always_inline def synchronize(self) raises`

- **enqueue_wait_for**: `def enqueue_wait_for(self, other`

- **get_api_version**: `@always_inline def get_api_version(self) raises -&gt; Int`

- **get_attribute**: `@always_inline def get_attribute(self, attr`

- **is_compatible**: `@always_inline def is_compatible(self) -&gt; Bool`

- **run_healthcheck**: `@always_inline def run_healthcheck(self) raises`

- **id**: `@always_inline def id(self) raises -&gt; Int64`

- **compute_capability**: `@doc_hidden @always_inline def compute_capability(self) raises -&gt; Int`

- **arch_name**: `@doc_hidden @always_inline def arch_name(self) raises -&gt; String`

- **get_memory_info**: `@always_inline def get_memory_info(self) raises -&gt; Tuple[c_size_t, c_size_t]`

- **can_access**: `@always_inline def can_access(self, peer`

- **enable_peer_access**: `@always_inline def enable_peer_access(self, peer`

- **supports_multicast**: `@always_inline def supports_multicast(self) raises -&gt; Bool`

- **number_of_devices**: `@staticmethod @always_inline def number_of_devices(
        *, var api`

- **enable_all_peer_access**: `@staticmethod def enable_all_peer_access() raises`

- **all_peer_access_enabled**: `@staticmethod @always_inline def all_peer_access_enabled() raises -&gt; Bool`

- **create_graph_builder**: `def create_graph_builder(self) raises -&gt; DeviceGraphBuilder`

### DeviceMulticastBuffer

`struct DeviceMulticastBuffer[dtype`

**Fields:**

- `_handle: _DeviceMulticastBufferPtr[mut=True]`
- `contexts: List[DeviceContext],`
- `handle: _DeviceMulticastBufferPtr[mut=True] = {}`

**Methods:**

- **__init__**: `@doc_hidden def __init__(
        out self,
        var contexts`

- **unicast_buffer_for**: `@doc_hidden def unicast_buffer_for(
        self, ctx`

- **multicast_buffer_for**: `@doc_hidden def multicast_buffer_for(
        self, ctx`

### _HostMappedBuffer

`struct _HostMappedBuffer[dtype`

**Fields:**

- `_ctx: DeviceContext`
- `_dev_buf: DeviceBuffer[Self.dtype]`
- `_cpu_buf: HostBuffer[Self.dtype]`

**Methods:**

- **__init__**: `def __init__(
        out self, ctx`

- **__del__**: `def __del__(deinit self)`

- **__enter__**: `def __enter__(mut self) raises -&gt; HostBuffer[Self.dtype]`

- **__exit__**: `def __exit__(mut self) raises`

### _DeviceContextScope

`struct _DeviceContextScope`

**Fields:**

- `_ctx: DeviceContext`
- `_handle: _DeviceContextScopePtr[mut=True]`
- `cpp_handle: _DeviceContextScopePtr[mut=True] = {}`

**Methods:**

- **__init__**: `def __init__(out self, ctx`

- **__del__**: `def __del__(deinit self)`

- **__enter__**: `def __enter__(mut self) raises -&gt; DeviceContext`

- **__exit__**: `def __exit__(mut self) raises`

- **_release**: `def _release(mut self)`

## Traits

### _FunctionEnqueuer

`trait _FunctionEnqueuer`

**Methods:**

- **handle**: `def handle(self) -&gt; UnsafePointer[NoneType, MutExternalOrigin]`
