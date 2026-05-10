---
title: "philox"
sidebar_label: "philox"
description: "Random number generation using the Philox algorithm.  This module implements a high-performance random number generator using the Philox algorithm, which is designed for parallel computing and works e"
---

# philox

Random number generation using the Philox algorithm.

This module implements a high-performance random number generator using the Philox algorithm,
which is designed for parallel computing and works efficiently on both CPU and GPU. The Philox
algorithm is a counter-based random number generator that provides high-quality random numbers
with excellent statistical properties.

The main class is Random which generates both uniform random numbers and raw 32-bit integers.
It supports:
- Seeding for reproducible sequences
- Multiple independent subsequences
- Configurable number of rounds for quality vs performance tradeoff
- Vectorized operations for efficiency
- Cross-platform support (CPU and GPU)

Example:

```mojo
from std.random.philox import Random
    rng = Random(seed=42)
    uniform_values = rng.step_uniform()  # Returns 4 random floats in [0,1)
    raw_values = rng.step()  # Returns 4 raw 32-bit integers
```

## 类型

### Random

`struct Random[rounds`

**Fields:**

- `_key: SIMD[DType.uint32, 2]`
- `_counter: SIMD[DType.uint32, 4]`

**Methods:**

- **__init__**: `def __init__(
        out self,
        *,
        seed`

- **step**: `@always_inline def step(mut self) -&gt; SIMD[DType.uint32, 4]`

- **step_uniform**: `@always_inline def step_uniform(mut self) -&gt; SIMD[DType.float32, 4]`

- **_incrn**: `@always_inline def _incrn(mut self, n`

- **_single_round**: `@always_inline @staticmethod def _single_round(
        counter`

### NormalRandom

`struct NormalRandom[rounds`

**Fields:**

- `_rng: Random[Self.rounds]`

**Methods:**

- **__init__**: `def __init__(
        out self,
        *,
        seed`

- **step_normal**: `def step_normal(
        mut self, mean`

## 函数

### _mulhilow

`def _mulhilow(a`
