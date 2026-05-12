---
title: "debug_assert"
sidebar_label: "debug_assert"
description: "实现运行时断言。这些是 Mojo 内置类型，因此您不需要导入它们。"
---

# debug_assert

实现运行时断言。

这些是 Mojo 内置类型，因此您不需要导入它们。

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
