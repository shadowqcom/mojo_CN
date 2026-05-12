---
title: "list_strategy"
sidebar_label: "list_strategy"
description: "实现用于在属性测试中生成随机 `List` 值的列表策略。"
---

# list_strategy

实现用于在属性测试中生成随机 `List` 值的列表策略。

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
