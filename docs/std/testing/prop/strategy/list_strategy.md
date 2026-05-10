---
title: "list_strategy"
sidebar_label: "list_strategy"
description: "Implements the list strategy for generating random `List` values in property tests."
---

# list_strategy

Implements the list strategy for generating random `List` values in property tests.

## 类型

### _ListStrategy

`struct _ListStrategy[T`

**Fields:**

- `_strat: Self.T`
- `_min_len: Int`
- `_max_len: Int`
- `strategy: Self.T,`

**Methods:**

- **__init__**: `def __init__(
        out self,
        var strategy`

- **value**: `def value(mut self, mut rng`

## 函数

### strategy

`@staticmethod def strategy[
        StrategyType`
