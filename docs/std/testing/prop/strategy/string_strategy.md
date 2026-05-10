---
title: "string_strategy"
sidebar_label: "string_strategy"
description: "Implements the string strategy for generating random `String` values in property tests."
---

# string_strategy

Implements the string strategy for generating random `String` values in property tests.

## 类型

### _StringStrategy

`struct _StringStrategy(Strategy)`

**Implemented Traits:**

- `Strategy`

**Fields:**

- `min_len: Int`
- `max_len: Int`
- `unicode: Bool`
- `only_printable: Bool`

**Methods:**

- **__init__**: `def __init__(
        out self,
        *,
        min_len`

- **value**: `def value(mut self, mut rng`

### _CodepointStrategy

`@fieldwise_init struct _CodepointStrategy`

**Fields:**

- `unicode: Bool`
- `only_printable: Bool`
- `start: UInt32 = UInt32(32) if self.only_printable else UInt32(0)`
- `end: UInt32 = UInt32(126) + UInt32(not self.only_printable)`

**Methods:**

- **value**: `def value(mut self, mut rng`

## 函数

### strategy

`@staticmethod def strategy(
        *,
        min_len`

### ascii_strategy

`@staticmethod def ascii_strategy(
        *,
        min_len`

### utf8_strategy

`@staticmethod def utf8_strategy(
        *, min_len`
