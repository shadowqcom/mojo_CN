---
title: "counter"
sidebar_label: "counter"
description: "Defines the `Counter` type.  Import these APIs from the `collections` package:  ```mojo from std.collections import Counter  ```  Counters provide convenient tallying objects that use a dictionary to "
---

# counter

Defines the `Counter` type.

Import these APIs from the `collections` package:

```mojo
from std.collections import Counter

```

Counters provide convenient tallying objects that use a dictionary to
store keys and their counts. They offer the full functionality of
counted sets, also called bags or multisets, and extend that model by
supporting negative counts.

## 类型

### Counter

`@fieldwise_init struct Counter[V`

### CountTuple

`struct CountTuple[V`

**Fields:**

- `_value: Self.V`
- `_count: Int`

**Methods:**

- **__init__**: `def __init__(out self, value`

- **__lt__**: `def __lt__(self, other`

- **__eq__**: `def __eq__(self, other`

- **__getitem__**: `@always_inline def __getitem__(self, idx`
