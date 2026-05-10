---
title: "atomic"
sidebar_label: "atomic"
description: "Implements the `Atomic` struct.  You can import these APIs from the `atomic` package. For example:  ```mojo from std.atomic import Atomic ```"
---

# atomic

Implements the `Atomic` struct.

You can import these APIs from the `atomic` package. For example:

```mojo
from std.atomic import Atomic
```

## 类型

### Ordering

`struct Ordering(
    Equatable,
    ImplicitlyCopyable,
    TrivialRegisterPassable,
    Writable,
)`

**Implemented Traits:**

- `Equatable`
- `ImplicitlyCopyable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: UInt8`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, value`

- **__eq__**: `def __eq__(self, other`

- **__ne__**: `@always_inline def __ne__(self, other`

- **as_string_slice**: `def as_string_slice(self) -&gt; StaticString`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

- **__mlir_attr**: `def __mlir_attr(self) -&gt; __mlir_type.`!kgen.deferred``

### Atomic

`struct Atomic[dtype`

**Fields:**

- `value: Scalar[Self.dtype]`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, value`

- **load**: `def load[
        *,
        ordering`

- **load**: `@always_inline def load[
        *, ordering`

- **fetch_add**: `def fetch_add[
        *, ordering`

- **_xchg**: `@staticmethod @always_inline def _xchg[
        *, ordering`

- **store**: `@staticmethod @always_inline def store[
        *, ordering`

- **fetch_add**: `@always_inline def fetch_add[
        *, ordering`

- **__iadd__**: `@always_inline def __iadd__(mut self, rhs`

- **fetch_sub**: `@always_inline def fetch_sub[
        *, ordering`

- **__isub__**: `@always_inline def __isub__(mut self, rhs`

- **compare_exchange**: `def compare_exchange[
        *,
        success_ordering`

- **compare_exchange**: `def compare_exchange[
        *,
        success_ordering`

- **max**: `@staticmethod @always_inline def max[
        *, ordering`

- **max**: `@always_inline def max[
        *, ordering`

- **min**: `@staticmethod @always_inline def min[
        *, ordering`

- **min**: `@always_inline def min[
        *, ordering`
