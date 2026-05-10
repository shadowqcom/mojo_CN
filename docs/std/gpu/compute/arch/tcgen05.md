---
title: "tcgen05"
sidebar_label: "tcgen05"
description: "This module includes utilities for working with the tensorcore 5th generation (tcgen05) instructions."
---

# tcgen05

This module includes utilities for working with the
tensorcore 5th generation (tcgen05) instructions.

## 类型

### TensorMemory

`struct TensorMemory(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `ptr: UnsafePointer[`
- `num_cols: UInt32`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, num_cols`

## 函数

### check_blackwell_constraint

`def check_blackwell_constraint()`
