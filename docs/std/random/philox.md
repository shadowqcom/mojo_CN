---
title: "philox"
sidebar_label: "philox"
description: "使用 Philox 算法的随机数生成。此模块使用 Philox 算法实现高性能随机数生成器，专为并行计算设计，在 CPU 和 GPU 上都能高效工作。"
---

# philox

使用 Philox 算法的随机数生成。

此模块使用 Philox 算法实现高性能随机数生成器，专为并行计算设计，在 CPU 和 GPU 上都能高效工作。Philox 算法是一种基于计数器的随机数生成器，提供具有优异统计特性的高质量随机数。

主要类是 Random，它生成均匀随机数和原始 32 位整数。
它支持：
- 用于可重现序列的种子
- 多个独立子序列
- 可配置的轮数以权衡质量和性能
- 向量化操作以提高效率
- 跨平台支持（CPU 和 GPU）

示例：

```mojo
from std.random.philox import Random
    rng = Random(seed=42)
    uniform_values = rng.step_uniform()  # 返回 4 个 [0,1) 范围内的随机浮点数
    raw_values = rng.step()  # 返回 4 个原始 32 位整数
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
