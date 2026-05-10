---
title: "int"
sidebar_label: "int"
description: "Implements the Int class.  These are Mojo built-ins, so you don't need to import them."
---

# int

Implements the Int class.

These are Mojo built-ins, so you don't need to import them.

## 类型

### Int

`@lldb_formatter_wrapping_type struct Int(
    Absable,
    Boolable,
    CeilDivable,
    Ceilable,
    Comparable,
    ConvertibleFromPython,
    ConvertibleToPython,
    Defaultable,
    DevicePassable,
    DivModable,
    Floorable,
    Hashable,
    ImplicitlyCopyable,
    Indexer,
    Intable,
    IntervalElement,
    KeyElement,
    Powable,
    Roundable,
    TrivialRegisterPassable,
    Truncable,
    Writable,
    _FromInt,
)`

**Implemented Traits:**

- `Absable`
- `Boolable`
- `CeilDivable`
- `Ceilable`
- `Comparable`
- `ConvertibleFromPython`
- `ConvertibleToPython`
- `Defaultable`
- `DevicePassable`
- `DivModable`
- `Floorable`
- `Hashable`
- `ImplicitlyCopyable`
- `Indexer`
- `Intable`
- `IntervalElement`
- `KeyElement`
- `Powable`
- `Roundable`
- `TrivialRegisterPassable`
- `Truncable`
- `Writable`
- `_FromInt`

**Fields:**

- `_mlir_value: __mlir_type.index`
- `res: Int = 1`

**Methods:**

- **_to_device_type**: `def _to_device_type(self, target`

- **get_type_name**: `@staticmethod def get_type_name() -&gt; String`

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__(out self, *, mlir_value`

- **__init__**: `def __init__(out self, value`

- **__init__**: `@implicit def __init__(out self, value`

- **__init__**: `def __init__[T`

- **__init__**: `def __init__[T`

- **__init__**: `def __init__(out self, *, from_int`

- **__lt__**: `def __lt__(self, rhs`

- **__le__**: `def __le__(self, rhs`

- **__eq__**: `def __eq__(self, rhs`

- **__ne__**: `def __ne__(self, rhs`

- **__gt__**: `def __gt__(self, rhs`

- **__ge__**: `def __ge__(self, rhs`

- **__pos__**: `def __pos__(self) -&gt; Int`

- **__neg__**: `def __neg__(self) -&gt; Int`

- **__invert__**: `def __invert__(self) -&gt; Int`

- **__add__**: `def __add__(self, rhs`

- **__sub__**: `def __sub__(self, rhs`

- **__mul__**: `def __mul__(self, rhs`

- **__truediv__**: `def __truediv__(self, rhs`

- **__floordiv__**: `def __floordiv__(self, rhs`

- **__mod__**: `def __mod__(self, rhs`

- **__divmod__**: `def __divmod__(self, rhs`

- **__pow__**: `def __pow__(self, exp`

- **__lshift__**: `def __lshift__(self, rhs`

- **__rshift__**: `def __rshift__(self, rhs`

- **__and__**: `def __and__(self, rhs`

- **__xor__**: `def __xor__(self, rhs`

- **__or__**: `def __or__(self, rhs`

- **__iadd__**: `def __iadd__(mut self, rhs`

- **__isub__**: `def __isub__(mut self, rhs`

- **__imul__**: `def __imul__(mut self, rhs`

- **__itruediv__**: `def __itruediv__(mut self, rhs`

- **__ifloordiv__**: `def __ifloordiv__(mut self, rhs`

- **__imod__**: `def __imod__(mut self, rhs`

- **__ipow__**: `def __ipow__(mut self, rhs`

- **__ilshift__**: `def __ilshift__(mut self, rhs`

- **__irshift__**: `def __irshift__(mut self, rhs`

- **__iand__**: `def __iand__(mut self, rhs`

- **__ixor__**: `def __ixor__(mut self, rhs`

- **__ior__**: `def __ior__(mut self, rhs`

- **__radd__**: `def __radd__(self, value`

- **__rsub__**: `def __rsub__(self, value`

- **__rmul__**: `def __rmul__(self, value`

- **__rfloordiv__**: `def __rfloordiv__(self, value`

- **__rmod__**: `def __rmod__(self, value`

- **__rpow__**: `def __rpow__(self, value`

- **__rlshift__**: `def __rlshift__(self, value`

- **__rrshift__**: `def __rrshift__(self, value`

- **__rand__**: `def __rand__(self, value`

- **__ror__**: `def __ror__(self, value`

- **__rxor__**: `def __rxor__(self, value`

- **__bool__**: `def __bool__(self) -&gt; Bool`

- **__mlir_index__**: `def __mlir_index__(self) -&gt; __mlir_type.index`

- **_int_mlir_index**: `def _int_mlir_index(self) -&gt; __mlir_type.index`

- **__int__**: `def __int__(self) -&gt; Int`

- **__abs__**: `def __abs__(self) -&gt; Self`

- **__ceil__**: `def __ceil__(self) -&gt; Self`

- **__floor__**: `def __floor__(self) -&gt; Self`

- **__round__**: `def __round__(self) -&gt; Self`

- **__round__**: `def __round__(self, ndigits`

- **__trunc__**: `def __trunc__(self) -&gt; Self`

- **__ceildiv__**: `def __ceildiv__(self, denominator`

- **is_power_of_two**: `def is_power_of_two(self) -&gt; Bool`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

- **write_padded**: `def write_padded[W`

- **__hash__**: `def __hash__[H`

- **__init__**: `@doc_hidden def __init__(out self, *, py`

- **to_python_object**: `def to_python_object(var self) raises -&gt; PythonObject`

- **_positive_rem**: `def _positive_rem(self, rhs`

- **_decimal_digit_count**: `def _decimal_digit_count(self) -&gt; Int`

## Traits

### Indexer

`trait Indexer(ImplicitlyDestructible)`

**Methods:**

- **__mlir_index__**: `def __mlir_index__(self) -&gt; __mlir_type.index`

### Intable

`trait Intable(ImplicitlyDestructible)`

**Methods:**

- **__int__**: `def __int__(self) -&gt; Int`

### IntableRaising

`trait IntableRaising`

**Methods:**

- **__int__**: `def __int__(self) raises -&gt; Int`

### _FromInt

`trait _FromInt`

**Methods:**

- **__init__**: `def __init__(out self, *, from_int`
