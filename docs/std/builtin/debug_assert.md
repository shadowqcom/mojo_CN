---
title: "debug_assert"
sidebar_label: "debug_assert"
description: "Implements run-time assertions.  These are Mojo built-ins, so you don't need to import them."
---

# debug_assert

Implements run-time assertions.

These are Mojo built-ins, so you don't need to import them.

## 函数

### _string_free_comptime_assert

`def _string_free_comptime_assert[
    cond`

### _assert_enabled

`@no_inline def _assert_enabled[assert_mode`

### debug_assert

`@always_inline def debug_assert[
    cond`

### debug_assert

`@always_inline def debug_assert[
    assert_mode`

### debug_assert

`@always_inline def debug_assert[
    assert_mode`

### _debug_assert_msg

`@no_inline def _debug_assert_msg(
    message`
