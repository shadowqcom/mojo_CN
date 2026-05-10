---
title: "memory"
sidebar_label: "memory"
description: "Low-level memory management: pointers, allocations, address spaces.  The `memory` package provides primitives for direct memory manipulation and pointer operations. It offers multiple pointer types wi"
---

# memory

Low-level memory management: pointers, allocations, address spaces.

The `memory` package provides primitives for direct memory manipulation and
pointer operations. It offers multiple pointer types with varying safety
guarantees, from reference-counted smart pointers to raw unsafe pointers, along
with functions for memory operations and allocation. This package enables
systems programming and interfacing with external code requiring explicit
memory control.

Use this package for performance-critical code requiring manual memory control,
interfacing with C libraries, implementing custom data structures, or accessing
specialized memory. Most code should prefer higher-level collections and
automatic memory management.

## 模块

- [alloc](/docs/std/memory/alloc)
- [arc_pointer](/docs/std/memory/arc_pointer)
- [memory](/docs/std/memory/memory)
- [owned_pointer](/docs/std/memory/owned_pointer)
- [pointer](/docs/std/memory/pointer)
- [span](/docs/std/memory/span)
- [stack_allocation](/docs/std/memory/stack_allocation)
- [unsafe](/docs/std/memory/unsafe)
- [unsafe_maybe_uninit](/docs/std/memory/unsafe_maybe_uninit)
- [unsafe_nullable_pointer](/docs/std/memory/unsafe_nullable_pointer)
- [unsafe_pointer](/docs/std/memory/unsafe_pointer)
