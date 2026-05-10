---
title: "simd_strategy"
sidebar_label: "simd_strategy"
description: "Implements the SIMD strategy for generating random `SIMD` values in property tests."
---

# simd_strategy

Implements the SIMD strategy for generating random `SIMD` values in property tests.

## 类型

### _SIMDStrategy

`struct _SIMDStrategy[dtype`

**Fields:**

- `_min: Scalar[Self.dtype]`
- `_max: Scalar[Self.dtype]`

**Methods:**

- **__init__**: `def __init__(
        out self,
        *,
        min`

- **value**: `def value(mut self, mut rng`

## 函数

### strategy

`@staticmethod def strategy(
        *,
        min`
