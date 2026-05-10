---
title: "numerics"
sidebar_label: "numerics"
description: "Defines utilities to work with numeric types.  You can import these APIs from the `utils` package. For example:  ```mojo from std.utils.numerics import FPUtils ```"
---

# numerics

Defines utilities to work with numeric types.

You can import these APIs from the `utils` package. For example:

```mojo
from std.utils.numerics import FPUtils
```

## 类型

### FPUtils

`struct FPUtils[
    dtype`

### FlushDenormals

`struct FlushDenormals(Defaultable)`

**Implemented Traits:**

- `Defaultable`

**Fields:**

- `state: Int32`

**Methods:**

- **__init__**: `@always_inline def __init__(out self)`

- **__enter__**: `@always_inline def __enter__(self)`

- **__exit__**: `@always_inline def __exit__(self)`

- **_set_flush**: `@always_inline def _set_flush(self, enable`

- **_is_set**: `@always_inline def _is_set(self, state`

- **_current_state**: `@always_inline @staticmethod def _current_state() -&gt; Int32`

## 函数

### _constrain_fp_type

`def _constrain_fp_type[dtype`
