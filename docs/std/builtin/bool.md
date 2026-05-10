---
title: "bool"
sidebar_label: "bool"
description: "Implements the Bool class.  These are Mojo built-ins, so you don't need to import them."
---

# bool

Implements the Bool class.

These are Mojo built-ins, so you don't need to import them.

## 类型

### Bool

`@lldb_formatter_wrapping_type struct Bool(
    Boolable,
    Comparable,
    ConvertibleFromPython,
    ConvertibleToPython,
    Defaultable,
    Floatable,
    Hashable,
    ImplicitlyCopyable,
    Intable,
    TrivialRegisterPassable,
    Writable,
)`

**Implemented Traits:**

- `Boolable`
- `Comparable`
- `ConvertibleFromPython`
- `ConvertibleToPython`
- `Defaultable`
- `Floatable`
- `Hashable`
- `ImplicitlyCopyable`
- `Intable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_mlir_value: __mlir_type.i1`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `@implicit def __init__(out self, value`

- **__init__**: `def __init__(out self, *, mlir_value`

- **__init__**: `def __init__[T`

- **__init__**: `def __init__(out self, value`

- **__init__**: `@implicit def __init__(out self, value`

- **__bool__**: `def __bool__(self) -&gt; Bool`

- **__mlir_i1__**: `def __mlir_i1__(self) -&gt; __mlir_type.i1`

- **write_to**: `@no_inline def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **__int__**: `def __int__(self) -&gt; Int`

- **__as_int__**: `def __as_int__(self) -&gt; Int`

- **__float__**: `def __float__(self) -&gt; Float64`

- **__eq__**: `def __eq__(self, rhs`

- **__ne__**: `def __ne__(self, rhs`

- **__lt__**: `def __lt__(self, rhs`

- **__le__**: `def __le__(self, rhs`

- **__gt__**: `def __gt__(self, rhs`

- **__ge__**: `def __ge__(self, rhs`

- **__invert__**: `def __invert__(self) -&gt; Bool`

- **__and__**: `def __and__(self, rhs`

- **__iand__**: `def __iand__(mut self, rhs`

- **__rand__**: `def __rand__(self, lhs`

- **__or__**: `def __or__(self, rhs`

- **__ior__**: `def __ior__(mut self, rhs`

- **__ror__**: `def __ror__(self, lhs`

- **__xor__**: `def __xor__(self, rhs`

- **__ixor__**: `def __ixor__(mut self, rhs`

- **__rxor__**: `def __rxor__(self, lhs`

- **__hash__**: `def __hash__[H`

- **to_python_object**: `def to_python_object(var self) raises -&gt; PythonObject`

- **__init__**: `@doc_hidden def __init__(out self, *, py`

## Traits

### Boolable

`trait Boolable`

**Methods:**

- **__bool__**: `def __bool__(self) -&gt; Bool`
