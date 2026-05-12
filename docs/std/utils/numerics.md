---
title: "numerics"
sidebar_label: "numerics"
description: "定义处理数值类型的工具。您可以从 `utils` 包导入这些 API。例如：```mojo from std.utils.numerics import FPUtils ```"
---

# numerics

定义处理数值类型的工具。

您可以从 `utils` 包导入这些 API。例如：

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
