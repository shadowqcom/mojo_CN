---
title: "pointer"
sidebar_label: "pointer"
description: "Implements the Pointer type.  You can import these APIs from the `memory` package. For example:  ```mojo from std.memory import Pointer ```"
---

# pointer

Implements the Pointer type.

You can import these APIs from the `memory` package. For example:

```mojo
from std.memory import Pointer
```

## 类型

### AddressSpace

`struct AddressSpace(
    Equatable,
    ImplicitlyCopyable,
    Intable,
    TrivialRegisterPassable,
    Writable,
)`

**Implemented Traits:**

- `Equatable`
- `ImplicitlyCopyable`
- `Intable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_value: Int`

**Methods:**

- **__init__**: `def __init__(out self, value`

- **value**: `def value(self) -&gt; Int`

- **__int__**: `def __int__(self) -&gt; Int`

- **__eq__**: `def __eq__(self, other`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

### Pointer

`struct Pointer[
    mut`
