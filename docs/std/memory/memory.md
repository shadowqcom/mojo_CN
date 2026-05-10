---
title: "memory"
sidebar_label: "memory"
description: "Defines functions for memory manipulations.  You can import these APIs from the `memory` package. For example:  ```mojo from std.memory import memcmp ```"
---

# memory

Defines functions for memory manipulations.

You can import these APIs from the `memory` package. For example:

```mojo
from std.memory import memcmp
```

## 函数

### _memcmp_impl_unconstrained

`@always_inline def _memcmp_impl_unconstrained[
    dtype`

### _memcmp_opt_impl_unconstrained

`@always_inline def _memcmp_opt_impl_unconstrained[
    dtype`

### _memcmp_impl

`@always_inline def _memcmp_impl[
    dtype`

### memcmp

`@always_inline def memcmp[
    type`

### _memcpy_impl

`@always_inline def _memcpy_impl(
    dest_data`

### copy

`def copy[width`

### memcpy

`@always_inline def memcpy[
    T`

### memmove

`@always_inline def memmove[
    T`

### _memset_impl

`def _memset_impl(
    ptr`

### fill

`def fill[width`

### memset

`@always_inline def memset(ptr`

### memset_zero

`@always_inline def memset_zero(ptr`

### memset_zero

`@always_inline def memset_zero[
    dtype`

### fill

`def fill[width`

### _malloc

`@always_inline def _malloc[
    type`

### _free

`@always_inline def _free(ptr`

### _free

`@always_inline def _free(ptr`

### uninit_move_n

`@always_inline def uninit_move_n[
    T`

### uninit_copy_n

`@always_inline def uninit_copy_n[
    T`

### destroy_n

`@always_inline def destroy_n[
    T`

### forget_deinit

`def forget_deinit[T`
