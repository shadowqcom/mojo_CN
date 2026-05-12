---
title: "uutils"
sidebar_label: "uutils"
description: "对 `Int` 执行无符号除法和取模操作的工具。这些辅助函数允许对 Int 参数执行无符号除法和取模操作。"
---

# uutils

对 `Int` 执行无符号除法和取模操作的工具。

这些辅助函数允许对 Int 参数执行无符号除法和取模操作。这可以提供更好的性能，因为在某些加速器上使用有符号整数执行这些操作可能较慢，因为正确处理负值需要额外的指令。

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
