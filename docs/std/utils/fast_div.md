---
title: "fast_div"
sidebar_label: "fast_div"
description: "Implements the fast division algorithm.  This method replaces division by constants with a sequence of shifts and multiplications, significantly optimizing division performance."
---

# fast_div

Implements the fast division algorithm.

This method replaces division by constants with a sequence of shifts and
multiplications, significantly optimizing division performance.

## 类型

### FastDiv

`struct FastDiv[dtype`

**Fields:**

- `_div: Scalar[Self.uint_type]`
- `_mprime: Scalar[Self.uint_type]`
- `_sh1: UInt8`
- `_sh2: UInt8`
- `_is_pow2: Bool`
- `_log2_shift: UInt8`
- `t: Scalar[Self.uint_type]`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, divisor`

- **__rdiv__**: `@always_inline def __rdiv__(self, other`

- **__rtruediv__**: `@always_inline def __rtruediv__(
        self, other`

- **__rmod__**: `@always_inline def __rmod__(self, other`

- **__divmod__**: `@always_inline def __divmod__(
        self, other`

- **write_to**: `@no_inline def write_to[W`
