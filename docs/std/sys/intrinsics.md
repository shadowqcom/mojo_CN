---
title: "intrinsics"
sidebar_label: "intrinsics"
description: "Defines intrinsics.  You can import these APIs from the `sys` package. For example:  ```mojo from std.sys import PrefetchLocality ```"
---

# intrinsics

Defines intrinsics.

You can import these APIs from the `sys` package. For example:

```mojo
from std.sys import PrefetchLocality
```

## 类型

### PrefetchLocality

`struct PrefetchLocality(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `value: Int32`

**Methods:**

- **__init__**: `def __init__(out self, value`

### PrefetchRW

`struct PrefetchRW(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `value: Int32`

**Methods:**

- **__init__**: `def __init__(out self, value`

- **__eq__**: `@always_inline def __eq__(self, other`

### PrefetchCache

`struct PrefetchCache(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `value: Int32`

**Methods:**

- **__init__**: `def __init__(out self, value`

### PrefetchOptions

`struct PrefetchOptions(Defaultable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Defaultable`
- `TrivialRegisterPassable`

**Fields:**

- `rw: PrefetchRW`
- `locality: PrefetchLocality`
- `cache: PrefetchCache`

**Methods:**

- **__init__**: `def __init__(out self)`

- **for_read**: `def for_read(self) -&gt; Self`

- **for_write**: `def for_write(self) -&gt; Self`

- **no_locality**: `def no_locality(self) -&gt; Self`

- **low_locality**: `def low_locality(self) -&gt; Self`

- **medium_locality**: `def medium_locality(self) -&gt; Self`

- **high_locality**: `def high_locality(self) -&gt; Self`

- **to_data_cache**: `def to_data_cache(self) -&gt; Self`

- **to_instruction_cache**: `def to_instruction_cache(self) -&gt; Self`

### _RegisterPackType

`struct _RegisterPackType[*a`

**Fields:**

- `_mlir_value: Self._mlir_type`

**Methods:**

- **__getitem_param__**: `def __getitem_param__[i`

## 函数

### llvm_intrinsic

`def llvm_intrinsic[
    intrin`

### gather

`def gather[
    dtype`

### scatter

`def scatter[
    dtype`
