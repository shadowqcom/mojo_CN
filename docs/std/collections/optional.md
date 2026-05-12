---
title: "optional"
sidebar_label: "optional"
description: "定义 Optional，一种建模可能存在或不存在的值的类型。Optional 值可以被视为类型安全的可空模式。您的值可以接受一个值或 `None`，您需要检查并显式提取该值。"
---

# optional

定义 Optional，一种建模可能存在或不存在的值的类型。

Optional 值可以被视为类型安全的可空模式。
您的值可以接受一个值或 `None`，您需要检查并显式提取该值。

示例：

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
