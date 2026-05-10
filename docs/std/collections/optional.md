---
title: "optional"
sidebar_label: "optional"
description: "Defines Optional, a type modeling a value which may or may not be present.  Optional values can be thought of as a type-safe nullable pattern. Your value can take on a value or `None`, and you need to"
---

# optional

Defines Optional, a type modeling a value which may or may not be present.

Optional values can be thought of as a type-safe nullable pattern.
Your value can take on a value or `None`, and you need to check
and explicitly extract the value to get it out.

Examples:

```mojo
var a = Optional(1)
var b = Optional[Int](None)
if a:
    print(a.value())  # prints 1
if b:  # Bool(b) is False, so no print
    print(b.value())
var c = a.or_else(2)
var d = b.or_else(2)
print(c)  # prints 1
print(d)  # prints 2
```

## 类型

### _NoneType

`@fieldwise_init struct _NoneType(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

### EmptyOptionalError

`@fieldwise_init struct EmptyOptionalError[T`

### Optional

`struct Optional[T`

### _DefaultOptionalRegStorage

`struct _DefaultOptionalRegStorage[T`

### _NicheableOptionalRegStorage

`struct _NicheableOptionalRegStorage[
    T`

### OptionalReg

`struct OptionalReg[T`

## Traits

### _OptionalRegStorageTraits

`trait _OptionalRegStorageTraits(TrivialRegisterPassable)`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__[U`

- **value**: `def value[U`

- **__bool__**: `def __bool__(self) -&gt; Bool`
