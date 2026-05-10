---
title: "random"
sidebar_label: "random"
description: "Provides functions for pseudorandom numbers.  You can import these APIs from the `random` package. For example:  ```mojo from std.random import seed ```  These functions use a shared, global pseudoran"
---

# random

Provides functions for pseudorandom numbers.

You can import these APIs from the `random` package. For example:

```mojo
from std.random import seed
```

These functions use a shared, global pseudorandom number generator (PRNG)
state. The global random state is shared across threads and concurrent
access can cause race conditions and undefined behavior.

Warning:
    NOT cryptographically secure. This PRNG is suitable for simulations,
    games, and general statistical purposes, but shouldn't be used for
    security-sensitive applications such as generating passwords,
    authentication tokens, or encryption keys.

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
