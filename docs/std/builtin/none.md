---
title: "none"
sidebar_label: "none"
description: "Defines the builtin `NoneType`.  These are Mojo built-ins, so you don't need to import them."
---

# none

Defines the builtin `NoneType`.

These are Mojo built-ins, so you don't need to import them.

## 类型

### NoneType

`struct NoneType(
    Defaultable,
    ImplicitlyCopyable,
    TrivialRegisterPassable,
    Writable,
)`

**Implemented Traits:**

- `Defaultable`
- `ImplicitlyCopyable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: Self._mlir_type`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `@implicit def __init__(out self, value`

- **write_to**: `@no_inline def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`
