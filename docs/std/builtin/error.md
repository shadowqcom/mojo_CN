---
title: "error"
sidebar_label: "error"
description: "Implements the Error class.  These are Mojo built-ins, so you don't need to import them."
---

# error

Implements the Error class.

These are Mojo built-ins, so you don't need to import them.

## 类型

### StackTrace

`struct StackTrace(Copyable, Movable, Writable)`

**Implemented Traits:**

- `Copyable`
- `Movable`
- `Writable`

**Fields:**

- `_data: OwnedPointer[UInt8]`

**Methods:**

- **__init__**: `def __init__(
        out self,
        *,
        unsafe_from_raw_pointer`

- **__init__**: `def __init__(out self, *, copy`

- **__init__**: `def __init__(out self, *, deinit take`

- **collect_if_enabled**: `@staticmethod @no_inline def collect_if_enabled(depth`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

### Error

`struct Error(
    Copyable,
    Writable,
)`

**Implemented Traits:**

- `Copyable`
- `Writable`

**Fields:**

- `_error: String`
- `_stack_trace: Optional[StackTrace]`

**Methods:**

- **__init__**: `@always_inline @implicit def __init__(out self, var value`

- **__init__**: `@always_inline @implicit def __init__(out self, value`

- **__init__**: `@no_inline @implicit def __init__(out self, value`

- **__init__**: `@no_inline def __init__[*Ts`

- **write_to**: `@no_inline def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **get_stack_trace**: `def get_stack_trace(self) -&gt; Optional[String]`
