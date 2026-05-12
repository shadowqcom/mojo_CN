---
title: "builtin"
sidebar_label: "builtin"
description: "语言基础：内置类型、trait 和基本操作。`builtin` 包提供了构成 Mojo 语言基础的核心类型、trait 和操作。它定义了基本类型。"
---

# builtin

语言基础：内置类型、trait 和基本操作。

`builtin` 包提供了构成 Mojo 语言基础的核心类型、trait 和操作。它定义了基本类型，如整数、布尔值和字符串，类型行为的基本 trait（`Copyable`、`Movable`、`Comparable`），以及所有 Mojo 代码中使用的基本操作。此包中的大多数符号通过 prelude 自动可用，无需显式导入。

此包是隐式导入的。它定义了每个开发人员无需考虑导入即可使用的 Mojo 编程核心词汇。库作者实现此包中的 trait，以将自定义类型与语言功能集成。

## 模块

- [anytype](/docs/std/builtin/anytype)
- [bool](/docs/std/builtin/bool)
- [breakpoint](/docs/std/builtin/breakpoint)
- [builtin_slice](/docs/std/builtin/builtin_slice)
- [comparable](/docs/std/builtin/comparable)
- [constrained](/docs/std/builtin/constrained)
- [coroutine](/docs/std/builtin/coroutine)
- [debug_assert](/docs/std/builtin/debug_assert)
- [device_passable](/docs/std/builtin/device_passable)
- [dtype](/docs/std/builtin/dtype)
- [error](/docs/std/builtin/error)
- [floatable](/docs/std/builtin/floatable)
- [float_literal](/docs/std/builtin/float_literal)
- [format_int](/docs/std/builtin/format_int)
- [globals](/docs/std/builtin/globals)
- [identifiable](/docs/std/builtin/identifiable)
- [int](/docs/std/builtin/int)
- [int_literal](/docs/std/builtin/int_literal)
- [len](/docs/std/builtin/len)
- [none](/docs/std/builtin/none)
- [range](/docs/std/builtin/range)
- [rebind](/docs/std/builtin/rebind)
- [reversed](/docs/std/builtin/reversed)
- [simd](/docs/std/builtin/simd)
- [sort](/docs/std/builtin/sort)
- [string_literal](/docs/std/builtin/string_literal)
- [swap](/docs/std/builtin/swap)
- [tuple](/docs/std/builtin/tuple)
- [type_aliases](/docs/std/builtin/type_aliases)
- [value](/docs/std/builtin/value)
- [variadics](/docs/std/builtin/variadics)
