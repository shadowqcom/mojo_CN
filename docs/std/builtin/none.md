---
title: "none"
sidebar_label: "none"
description: "定义内置的 `NoneType`。这些是 Mojo 内置类型，因此您不需要导入它们。"
---

# none

定义内置的 `NoneType`。

这些是 Mojo 内置类型，因此您不需要导入它们。

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
