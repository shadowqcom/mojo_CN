---
title: "uutils"
sidebar_label: "uutils"
description: "Utilities for doing unsigned division and modulo operations on `Int`.  These helpers allow performing unsigned division and modulo operations on Int arguments. This can provide better performance, as "
---

# uutils

Utilities for doing unsigned division and modulo operations on `Int`.

These helpers allow performing unsigned division and modulo operations on Int
arguments. This can provide better performance, as these operations can be
slower when performed using signed integers on some accelerators, as correctly
handling negative values requires additional instructions.

## 函数

### ufloordiv

`@always_inline def ufloordiv(a`

### udiv_unchecked

`def udiv_unchecked(a`

### umod

`@always_inline def umod(a`

### udivmod

`@always_inline def udivmod(a`

### udivmod_unchecked

`def udivmod_unchecked(a`

### ualign_up

`@always_inline def ualign_up(value`

### ualign_down

`@always_inline def ualign_down(value`

### uceildiv

`@always_inline def uceildiv(numerator`
