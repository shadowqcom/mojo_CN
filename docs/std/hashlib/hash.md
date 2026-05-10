---
title: "hash"
sidebar_label: "hash"
description: "Implements the `Hashable` trait and `hash()` built-in function.  There are a few main tools in this module:  - `Hashable` trait for types implementing `__hash__(self) -> UInt` - `hash[T: Hashable](has"
---

# hash

Implements the `Hashable` trait and `hash()` built-in function.

There are a few main tools in this module:

- `Hashable` trait for types implementing `__hash__(self) -> UInt`
- `hash[T: Hashable](hashable: T) -> Int` built-in function.
- A `hash()` implementation for arbitrary byte strings,
  `hash(data: UnsafePointer[mut=False, UInt8], n: Int) -> Int`,
  is the workhorse function, which implements efficient hashing via SIMD
  vectors. See the documentation of this function for more details on the hash
  implementation.
- `hash(SIMD)` and `hash(UInt8)` implementations
    These are useful helpers to specialize for the general bytes implementation.

## Traits

### Hashable

`trait Hashable`

**Methods:**

- **__hash__**: `def __hash__(self, mut hasher`
