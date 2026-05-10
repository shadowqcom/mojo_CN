---
title: "builtin"
sidebar_label: "builtin"
description: "Language foundation: built-in types, traits, and fundamental operations.  The `builtin` package provides the core types, traits, and operations that form the foundation of the Mojo language. It define"
---

# builtin

Language foundation: built-in types, traits, and fundamental operations.

The `builtin` package provides the core types, traits, and operations that form
the foundation of the Mojo language. It defines fundamental types like integers,
booleans, and strings, essential traits for type behavior (`Copyable`, `Movable`,
`Comparable`), and basic operations used throughout all Mojo code. Most symbols
from this package are automatically available without explicit imports through
the prelude.

This package is implicitly imported. It
defines the core vocabulary of Mojo programming that every developer uses
without thinking about imports. Library authors implement traits from this
package to integrate custom types with language features.

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
