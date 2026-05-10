---
title: "compiler"
sidebar_label: "compiler"
description: "Provides compiler hints to prevent optimization of benchmark code.  This module includes utilities that prevent the compiler from optimizing away code being benchmarked. The `keep()` and `black_box()`"
---

# compiler

Provides compiler hints to prevent optimization of benchmark code.

This module includes utilities that prevent the compiler from optimizing away
code being benchmarked.
The `keep()` and `black_box()` functions provide hints to the compiler from
overly optimizing away code being benchmarked.

## 函数

### keep

`@always_inline def keep[T`

### black_box

`@always_inline def black_box[
    T`

### black_box

`@always_inline def black_box[T`
