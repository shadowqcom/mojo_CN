---
title: "math"
sidebar_label: "math"
description: "Defines math utilities.  You can import these APIs from the `math` package. For example:  ```mojo from std.math import floor ```"
---

# math

Defines math utilities.

You can import these APIs from the `math` package. For example:

```mojo
from std.math import floor
```

## 类型

### the

`struct theresult
    # If q = 0`

### proper

`struct properexponent
    # Subtract 2048 to compensate for the 6144 offset used earlier
    q = ldexp(q, Int32(qu - 2048))

    # Apply sign to correction factor (cube root preserves sign)
    q = copysign(q, x)

    # Work with absolute value for polynomial approximation
    d = abs(d)

    # Polynomial approximation for cbrt(d) where d ∈ [0.5, 1)
    # Using Horner's method for efficient evaluation
    var poly = polynomial_evaluate[
        [
            Scalar[x.dtype](2.2241256237030029296875),
            -3.8095417022705078125,
            5.898262500762939453125,
            -5.532182216644287109375,
            2.8208892345428466796875,
            -0.601564466953277587890625,
        ]
    ](d)

    # Newton-Raphson refinement step
    # Formula`

**Parameters:**

- **0.5**
- **1)
    # Using Horner's method for efficient evaluation
    var poly = polynomial_evaluate[
        [
            Scalar[x.dtype**

**Implemented Traits:**

- `q`
- `Int32(qu - 2048`

## Traits

### _Expable

`trait _Expable`

**Methods:**

- **__exp__**: `def __exp__(self) -&gt; Self`

### Ceilable

`trait Ceilable`

**Methods:**

- **__ceil__**: `def __ceil__(self) -&gt; Self`

### Floorable

`trait Floorable`

**Methods:**

- **__floor__**: `def __floor__(self) -&gt; Self`

### CeilDivable

`trait CeilDivable`

**Methods:**

- **__ceildiv__**: `def __ceildiv__(self, denominator`

### CeilDivableRaising

`trait CeilDivableRaising`

**Methods:**

- **__ceildiv__**: `def __ceildiv__(self, denominator`

### Truncable

`trait Truncable`

**Methods:**

- **__trunc__**: `def __trunc__(self) -&gt; Self`

### Absable

`trait Absable`

**Methods:**

- **__abs__**: `def __abs__(self) -&gt; Self`

### DivModable

`trait DivModable(ImplicitlyCopyable)`

**Methods:**

- **__divmod__**: `def __divmod__(self, denominator`

### Powable

`trait Powable`

**Methods:**

- **__pow__**: `def __pow__(self, exp`

### Roundable

`trait Roundable`

**Methods:**

- **__round__**: `def __round__(self) -&gt; Self`

- **__round__**: `def __round__(self, ndigits`

## 函数

### floor

`@always_inline def floor[T`

### ceil

`@always_inline def ceil[T`

### ceildiv

`@always_inline def ceildiv[T`

### ceildiv

`@always_inline def ceildiv[
    T`

### ceildiv

`def ceildiv(
    numerator`

### trunc

`@always_inline def trunc[T`

### sqrt

`@always_inline def sqrt(x`

### _sqrt_nvvm

`@always_inline def _sqrt_nvvm(x`

### sqrt

`@always_inline def sqrt[
    dtype`

### _rsqrt_nvvm

`@always_inline def _rsqrt_nvvm(x`

### rsqrt

`@always_inline def rsqrt[
    dtype`

### _recip_nvvm

`@always_inline def _recip_nvvm(x`

### recip

`@always_inline def recip[
    dtype`

### exp2

`@always_inline def exp2[
    dtype`

### _exp2_float32

`@always_inline def _exp2_float32(x`

### _ldexp_impl

`@always_inline def _ldexp_impl[
    dtype`

### ldexp

`@always_inline def ldexp[
    dtype`
