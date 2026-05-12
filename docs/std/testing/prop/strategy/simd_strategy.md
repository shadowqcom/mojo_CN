---
title: "simd_strategy"
sidebar_label: "simd_strategy"
description: "实现用于在属性测试中生成随机 SIMD 值的 SIMD 策略。"
---

# simd_strategy

实现用于在属性测试中生成随机 SIMD 值的 SIMD 策略。

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
