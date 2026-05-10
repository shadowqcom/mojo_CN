---
title: "random"
sidebar_label: "random"
description: "Implements random number generation for property-based testing."
---

# random

Implements random number generation for property-based testing.

## 类型

### Rng

`struct Rng(Movable)`

**Implemented Traits:**

- `Movable`

**Methods:**

- **__init__**: `@doc_hidden def __init__(out self, *, seed`

- **_next**: `@doc_hidden def _next(mut self, max`

- **_xoshiro_float**: `def _xoshiro_float(mut self) raises -&gt; Float64`

- **rand_bool**: `def rand_bool(
        mut self,
        *,
        true_probability`

- **rand_scalar**: `def rand_scalar[
        dtype`

- **rand_uint**: `def rand_uint(
        mut self,
        *,
        min`

- **rand_int**: `def rand_int(
        mut self,
        *,
        min`
