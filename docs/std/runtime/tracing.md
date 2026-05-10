---
title: "tracing"
sidebar_label: "tracing"
description: "Provides tracing utilities."
---

# tracing

Provides tracing utilities.

## 类型

### TraceCategory

`@fieldwise_init struct TraceCategory(Equatable, Intable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Equatable`
- `Intable`
- `TrivialRegisterPassable`

**Fields:**

- `value: Int`

**Methods:**

- **__eq__**: `def __eq__(self, rhs`

- **__ne__**: `def __ne__(self, rhs`

- **__int__**: `def __int__(self) -&gt; Int`

### TraceLevel

`struct TraceLevel(Comparable, TrivialRegisterPassable)`

**Implemented Traits:**

- `Comparable`
- `TrivialRegisterPassable`

**Fields:**

- `value: Int`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, value`

- **__eq__**: `def __eq__(self, rhs`

- **__lt__**: `def __lt__(self, rhs`

- **__int__**: `def __int__(self) -&gt; Int`

### Trace

`@fieldwise_init struct Trace[
    level`

## 函数

### get_safe_task_id

`def get_safe_task_id(ctx`

### get_safe_task_id

`def get_safe_task_id(ctx`

### _build_info_asyncrt_max_profiling_level

`def _build_info_asyncrt_max_profiling_level() -&gt; OptionalReg[Int]`
