---
title: "python_object"
sidebar_label: "python_object"
description: "Implements PythonObject.  You can import these APIs from the `python` package. For example:  ```mojo from std.python import PythonObject ```"
---

# python_object

Implements PythonObject.

You can import these APIs from the `python` package. For example:

```mojo
from std.python import PythonObject
```

## 类型

### _PyIter

`struct _PyIter(ImplicitlyCopyable, Iterable, Iterator)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `Iterable`
- `Iterator`

**Fields:**

- `iterator: PythonObject`
- `next_item: PyObjectPtr`

**Methods:**

- **__init__**: `def __init__(out self, iter`

- **__next__**: `@always_inline def __next__(mut self) raises StopIteration -&gt; PythonObject`

- **__iter__**: `def __iter__(ref self) -&gt; Self.IteratorType[origin_of(self)]`

### PythonObject

`struct PythonObject(
    Boolable,
    ConvertibleToPython,
    Defaultable,
    Identifiable,
    ImplicitlyCopyable,
    Movable,
    RegisterPassable,
    SizedRaising,
    Writable,
)`

**Implemented Traits:**

- `Boolable`
- `ConvertibleToPython`
- `Defaultable`
- `Identifiable`
- `ImplicitlyCopyable`
- `Movable`
- `RegisterPassable`
- `SizedRaising`
- `Writable`

**Fields:**

- `_obj_ptr: PyObjectPtr`
- `keys: List[PythonObject],`
- `values: List[PythonObject],`
- `key_ptr: PyObjectPtr`
- `key_ptr: PyObjectPtr`
- `key_ptr: PyObjectPtr`
- `callable_obj: PythonObject`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__(out self, *, from_owned`

- **__init__**: `def __init__(out self, *, from_borrowed`

- **__init__**: `@always_inline def __init__[
        T`

- **__init__**: `@doc_hidden @implicit def __init__(out self, none`

- **__init__**: `def __init__(out self, none`

- **__init__**: `@implicit def __init__(out self, value`

- **__init__**: `@implicit def __init__(out self, value`

- **__init__**: `@implicit def __init__[dtype`

- **__init__**: `@implicit def __init__(out self, string`

- **__init__**: `@implicit def __init__(out self, value`

- **__init__**: `@implicit def __init__(out self, value`

- **__init__**: `@implicit def __init__(out self, slice`

- **__init__**: `@always_inline def __init__[
        *Ts`

- **__init__**: `@always_inline def __init__[
        *Ts`

- **__init__**: `def __init__(
        out self,
        var keys`

- **__init__**: `def __init__(out self, *, copy`

- **__del__**: `def __del__(deinit self)`

- **__iter__**: `def __iter__(self) raises -&gt; _PyIter`

- **__getattr__**: `def __getattr__(self, var name`

- **__setattr__**: `def __setattr__[
        V`

- **__bool__**: `def __bool__(self) -&gt; Bool`

- **__is__**: `def __is__(self, other`

- **__getitem__**: `def __getitem__(self, *args`

- **__getitem__**: `def __getitem__(self, *args`

- **__setitem__**: `def __setitem__[
        *Ks`

- **__call_single_arg_inplace_method__**: `@doc_hidden def __call_single_arg_inplace_method__(
        mut self, var method_name`

- **__mul__**: `def __mul__[
        T`

- **__rmul__**: `def __rmul__[
        T`

- **__imul__**: `def __imul__[T`

- **__add__**: `def __add__[
        T`

- **__radd__**: `def __radd__[
        T`

- **__iadd__**: `def __iadd__[
        T`

- **__sub__**: `def __sub__[
        T`

- **__rsub__**: `def __rsub__[
        T`

- **__isub__**: `def __isub__[T`

- **__floordiv__**: `def __floordiv__[
        T`

- **__rfloordiv__**: `def __rfloordiv__[
        T`

- **__ifloordiv__**: `def __ifloordiv__[T`

- **__truediv__**: `def __truediv__[
        T`

- **__rtruediv__**: `def __rtruediv__[
        T`

- **__itruediv__**: `def __itruediv__[T`

- **__mod__**: `def __mod__[
        T`

- **__rmod__**: `def __rmod__[
        T`

- **__imod__**: `def __imod__[T`

- **__xor__**: `def __xor__[
        T`

- **__rxor__**: `def __rxor__[
        T`

- **__ixor__**: `def __ixor__[T`

- **__or__**: `def __or__[
        T`

- **__ror__**: `def __ror__[
        T`

- **__ior__**: `def __ior__[T`

- **__and__**: `def __and__[
        T`

- **__rand__**: `def __rand__[
        T`

- **__iand__**: `def __iand__[T`

- **__rshift__**: `def __rshift__[
        T`

- **__rrshift__**: `def __rrshift__[
        T`

- **__irshift__**: `def __irshift__[T`

- **__lshift__**: `def __lshift__[
        T`

- **__rlshift__**: `def __rlshift__[
        T`

- **__ilshift__**: `def __ilshift__[T`

- **__pow__**: `def __pow__[
        T`

- **__rpow__**: `def __rpow__[
        T`

- **__ipow__**: `def __ipow__[T`

- **__lt__**: `def __lt__[
        T`

- **__le__**: `def __le__[
        T`

- **__gt__**: `def __gt__[
        T`

- **__ge__**: `def __ge__[
        T`

- **__eq__**: `def __eq__[
        T`

- **__ne__**: `def __ne__[
        T`

- **__pos__**: `def __pos__(self) raises -&gt; PythonObject`

- **__neg__**: `def __neg__(self) raises -&gt; PythonObject`

- **__invert__**: `def __invert__(self) raises -&gt; PythonObject`

- **__contains__**: `def __contains__[
        RHS`

- **__call__**: `def __call__[
        *Ts`

- **__len__**: `def __len__(self) raises -&gt; Int`

- **__hash__**: `def __hash__(self) raises -&gt; Int`

- **__int__**: `def __int__(self) raises -&gt; PythonObject`

- **__float__**: `def __float__(self) raises -&gt; PythonObject`

- **__str__**: `@no_inline def __str__(self) raises -&gt; PythonObject`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **to_python_object**: `def to_python_object(var self) raises -&gt; PythonObject`

- **steal_data**: `def steal_data(var self) -&gt; PyObjectPtr`

- **unsafe_get_as_pointer**: `def unsafe_get_as_pointer[
        dtype`

- **downcast_value_ptr**: `def downcast_value_ptr[
        T`

- **_try_downcast_value**: `def _try_downcast_value[
        T`

- **unchecked_downcast_value_ptr**: `def unchecked_downcast_value_ptr[
        mut`
