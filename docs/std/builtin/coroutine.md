---
title: "coroutine"
sidebar_label: "coroutine"
description: "Implements classes and methods for coroutines.  These are Mojo built-ins, so you don't need to import them."
---

# coroutine

Implements classes and methods for coroutines.

These are Mojo built-ins, so you don't need to import them.

## 类型

### _CoroutineContext

`struct _CoroutineContext(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `_resume_fn: Self._resume_fn_type`
- `_parent_hdl: AnyCoroutine`

### Coroutine

`@explicit_destroy struct Coroutine[type`

### RaisingCoroutine

`@explicit_destroy struct RaisingCoroutine[type`

**Fields:**

- `_handle: AnyCoroutine`
- `error: Error`

**Methods:**

- **_get_ctx**: `@always_inline def _get_ctx[
        ctx_type`

- **_set_result_slot**: `@always_inline def _set_result_slot(
        self,
        slot`

- **__init__**: `@always_inline @implicit def __init__(out self, handle`

- **_take_handle**: `@always_inline def _take_handle(deinit self) -&gt; AnyCoroutine`

- **force_destroy**: `@always_inline def force_destroy(deinit self)`

- **__await__**: `@always_inline def __await__(var self, out result`

## 函数

### _suspend_async

`@always_inline def _suspend_async[body`
