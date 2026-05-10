---
title: "mma_nvidia_sm100"
sidebar_label: "mma_nvidia_sm100"
description: "This module includes utilities for working with the SM100 MMA instructions."
---

# mma_nvidia_sm100

This module includes utilities for working with the SM100 MMA instructions.

## 类型

### UMMAKind

`struct UMMAKind(Equatable, Hashable, TrivialRegisterPassable, Writable)`

**Implemented Traits:**

- `Equatable`
- `Hashable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: Int32`

**Methods:**

- **__int__**: `def __int__(self) -&gt; Int`

- **__eq__**: `@always_inline def __eq__(self, other`

- **__ne__**: `@always_inline def __ne__(self, other`

- **write_to**: `@always_inline def write_to(self, mut writer`

### UMMAInsDescriptor

`struct UMMAInsDescriptor[
    mma_kind`

### MMASmemDescriptor

`struct MMASmemDescriptor(MMAOperandDescriptor, TrivialRegisterPassable)`

**Implemented Traits:**

- `MMAOperandDescriptor`
- `TrivialRegisterPassable`

**Fields:**

- `desc: UInt64`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, val`

- **_insert_bit**: `@always_inline def _insert_bit[start_bit`

- **create**: `@staticmethod @always_inline def create[
        stride_byte_offset`

- **_convert_swizzle_enum**: `@parameter def _convert_swizzle_enum[mode`

- **__iadd__**: `@always_inline def __iadd__(mut self, offset`

- **__add__**: `@always_inline def __add__(self, offset`

### MMASmemDescriptorPair

`struct MMASmemDescriptorPair(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `hi: UInt32`
- `lo: UInt32`
- `sbo: UInt32 = UInt32(stride_byte_offset &gt;&gt; 4) & Self.mask_14_bits`
- `lbo: UInt32 = UInt32(leading_byte_offset &gt;&gt; 4) & Self.mask_14_bits`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, hi`

- **_insert_bit**: `@always_inline def _insert_bit[start_bit`

- **create**: `@staticmethod @always_inline def create[
        stride_byte_offset`

- **_convert_swizzle_enum**: `@parameter def _convert_swizzle_enum[mode`

- **__iadd__**: `@always_inline def __iadd__(mut self, offset`

- **__add__**: `@always_inline def __add__(self, offset`
