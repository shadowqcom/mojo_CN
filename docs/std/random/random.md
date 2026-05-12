---
title: "random"
slug: random
sidebar_label: "random"
description: "提供伪随机数函数。您可以从 `random` 包导入这些 API。例如：```mojo from std.random import seed ``` 这些函数使用共享的全局伪随机数生成器状态。"
---

# random

提供伪随机数函数。

您可以从 `random` 包导入这些 API。例如：

```mojo
from std.random import seed
```

这些函数使用共享的全局伪随机数生成器 (PRNG) 状态。全局随机状态在多个线程间共享，并发访问可能导致竞争条件和未定义行为。

警告：
    不具备加密安全性。此 PRNG 适用于模拟、游戏和一般统计用途，但不应用于安全敏感的应用程序，如生成密码、身份验证令牌或加密密钥。

## 函数

### seed

`def seed()`

### seed

`def seed(a`

### random_float64

`def random_float64(min`

### random_si64

`def random_si64(min`

### random_ui64

`def random_ui64(min`

### randint

`def randint[
    dtype`

### randint

`def randint[
    dtype`

### rand

`def rand[
    dtype`

### rand

`def rand[
    dtype`

### randn_float64

`def randn_float64(
    mean`

### randn

`def randn[
    dtype`

### randn

`def randn[
    dtype`

### shuffle

`def shuffle[T`
