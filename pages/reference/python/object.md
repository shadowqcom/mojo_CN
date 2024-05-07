# object

Implements PythonObject.

You can import these APIs from the `python` package. For example:

```
from python.object import PythonObject
```

## `PythonObject`

A Python object.

**Fields:**

- ​**py\_object** (`PyObjectPtr`): A pointer to the underlying Python object.

**Implemented traits:**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `Intable`, `Movable`, `SizedRaising`, `Stringable`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Initialize the object with a `None` value.

`__init__(inout self: Self, ptr: PyObjectPtr)`

Initialize the object with a `PyObjectPtr` value.

Ownership of the reference will be assumed by `PythonObject`.

**Args:**

- ​**ptr** (`PyObjectPtr`): The `PyObjectPtr` to take ownership of.

`__init__(inout self: Self, none: None)`

Initialize a none value object from a `None` literal.

**Args:**

- ​**none** (`None`): None.

`__init__(inout self: Self, integer: Int)`

Initialize the object with an integer value.

**Args:**

- ​**integer** (`Int`): The integer value.

`__init__(inout self: Self, float: SIMD[f64, 1])`

Initialize the object with an floating-point value.

**Args:**

- ​**float** (`SIMD[f64, 1]`): The float value.

`__init__[dt: DType](inout self: Self, value: SIMD[dt, 1])`

Initialize the object with a generic scalar value. If the scalar value type is bool, it is converted to a boolean. Otherwise, it is converted to the appropriate integer or floating point type.

**Parameters:**

- ​**dt** (`DType`): The scalar value type.

**Args:**

- ​**value** (`SIMD[dt, 1]`): The scalar value.

`__init__(inout self: Self, value: Bool)`

Initialize the object from a bool.

**Args:**

- ​**value** (`Bool`): The boolean value.

`__init__(inout self: Self, value: StringLiteral)`

Initialize the object from a string literal.

**Args:**

- ​**value** (`StringLiteral`): The string value.

`__init__(inout self: Self, strref: StringRef)`

Initialize the object from a string reference.

**Args:**

- ​**strref** (`StringRef`): The string reference.

`__init__(inout self: Self, string: String)`

Initialize the object from a string.

**Args:**

- ​**string** (`String`): The string value.

`__init__[*Ts: AnyRegType](inout self: Self, value: ListLiteral[Ts])`

Initialize the object from a list literal.

**Parameters:**

- ​**Ts** (`*AnyRegType`): The list element types.

**Args:**

- ​**value** (`ListLiteral[Ts]`): The list value.

`__init__[*Ts: AnyRegType](inout self: Self, value: Tuple[Ts])`

Initialize the object from a tuple literal.

**Parameters:**

- ​**Ts** (`*AnyRegType`): The tuple element types.

**Args:**

- ​**value** (`Tuple[Ts]`): The tuple value.

### `__copyinit__`

`__copyinit__(inout self: Self, existing: Self)`

Copy the object.

This increments the underlying refcount of the existing object.

**Args:**

- ​**existing** (`Self`): The value to copy.

### `__del__`

`__del__(owned self: Self)`

Destroy the object.

This decrements the underlying refcount of the pointed-to object.

### `__bool__`

`__bool__(self: Self) -> Bool`

Evaluate the boolean value of the object.

**Returns:**

Whether the object evaluates as true.

### `__getitem__`

`__getitem__(self: Self, *args: Self) -> Self`

Return the value for the given key or keys.

**Args:**

- ​**args** (`*Self`): The key or keys to access on this object.

**Returns:**

The value corresponding to the given key for this object.

### `__neg__`

`__neg__(self: Self) -> Self`

Negative.

Calls the underlying object's `__neg__` method.

**Returns:**

The result of prefixing this object with a `-` operator. For most numerical objects, this returns the negative.

### `__pos__`

`__pos__(self: Self) -> Self`

Positive.

Calls the underlying object's `__pos__` method.

**Returns:**

The result of prefixing this object with a `+` operator. For most numerical objects, this does nothing.

### `__invert__`

`__invert__(self: Self) -> Self`

Inversion.

Calls the underlying object's `__invert__` method.

**Returns:**

The logical inverse of this object: a bitwise representation where all bits are flipped, from zero to one, and from one to zero.

### `__lt__`

`__lt__(self: Self, rhs: Self) -> Self`

Less than comparator. This lexicographically compares strings and lists.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

True if the object is less than the right hard argument.

### `__le__`

`__le__(self: Self, rhs: Self) -> Self`

Less than or equal to comparator. This lexicographically compares strings and lists.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

True if the object is less than or equal to the right hard argument.

### `__eq__`

`__eq__(self: Self, rhs: Self) -> Self`

Equality comparator. This compares the elements of strings and lists.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

True if the objects are equal.

### `__ne__`

`__ne__(self: Self, rhs: Self) -> Self`

Inequality comparator. This compares the elements of strings and lists.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

True if the objects are not equal.

### `__gt__`

`__gt__(self: Self, rhs: Self) -> Self`

Greater than comparator. This lexicographically compares the elements of strings and lists.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

True if the left hand value is greater.

### `__ge__`

`__ge__(self: Self, rhs: Self) -> Self`

Greater than or equal to comparator. This lexicographically compares the elements of strings and lists.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

True if the left hand value is greater than or equal to the right hand value.

### `__is__`

`__is__(self: Self, other: Self) -> Bool`

Test if the PythonObject is the `other` PythonObject, the same as `x is y` in Python.

**Args:**

- ​**other** (`Self`): The right-hand-side value in the comparison.

**Returns:**

True if they are the same object and False otherwise.

### `__isnot__`

`__isnot__(self: Self, other: Self) -> Bool`

Test if the PythonObject is not the `other` PythonObject, the same as `x is not y` in Python.

**Args:**

- ​**other** (`Self`): The right-hand-side value in the comparison.

**Returns:**

True if they are not the same object and False otherwise.

### `__add__`

`__add__(self: Self, rhs: Self) -> Self`

Addition and concatenation.

Calls the underlying object's `__add__` method.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

The sum or concatenated values.

### `__sub__`

`__sub__(self: Self, rhs: Self) -> Self`

Subtraction.

Calls the underlying object's `__sub__` method.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

The difference.

### `__mul__`

`__mul__(self: Self, rhs: Self) -> Self`

Multiplication.

Calls the underlying object's `__mul__` method.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

The product.

### `__truediv__`

`__truediv__(self: Self, rhs: Self) -> Self`

Division.

Calls the underlying object's `__truediv__` method.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value by which this object is divided.

**Returns:**

The result of dividing the right-hand-side value by this.

### `__floordiv__`

`__floordiv__(self: Self, rhs: Self) -> Self`

Return the division of self and rhs rounded down to the nearest integer.

Calls the underlying object's `__floordiv__` method.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value by which this object is divided.

**Returns:**

The result of dividing this by the right-hand-side value, modulo any remainder.

### `__mod__`

`__mod__(self: Self, rhs: Self) -> Self`

Return the remainder of self divided by rhs.

Calls the underlying object's `__mod__` method.

**Args:**

- ​**rhs** (`Self`): The value to divide on.

**Returns:**

The remainder of dividing self by rhs.

### `__pow__`

`__pow__(self: Self, rhs: Self) -> Self`

Raises this object to the power of the given value.

**Args:**

- ​**rhs** (`Self`): The exponent.

**Returns:**

The result of raising this by the given exponent.

### `__lshift__`

`__lshift__(self: Self, rhs: Self) -> Self`

Bitwise left shift.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value by which this object is bitwise shifted to the left.

**Returns:**

This value, shifted left by the given value.

### `__rshift__`

`__rshift__(self: Self, rhs: Self) -> Self`

Bitwise right shift.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value by which this object is bitwise shifted to the right.

**Returns:**

This value, shifted right by the given value.

### `__and__`

`__and__(self: Self, rhs: Self) -> Self`

Bitwise AND.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value with which this object is bitwise AND'ed.

**Returns:**

The bitwise AND result of this and the given value.

### `__or__`

`__or__(self: Self, rhs: Self) -> Self`

Bitwise OR.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value with which this object is bitwise OR'ed.

**Returns:**

The bitwise OR result of this and the given value.

### `__xor__`

`__xor__(self: Self, rhs: Self) -> Self`

Exclusive OR.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value with which this object is exclusive OR'ed.

**Returns:**

The exclusive OR result of this and the given value.

### `__radd__`

`__radd__(self: Self, lhs: Self) -> Self`

Reverse addition and concatenation.

Calls the underlying object's `__radd__` method.

**Args:**

- ​**lhs** (`Self`): The left-hand-side value to which this object is added or concatenated.

**Returns:**

The sum.

### `__rsub__`

`__rsub__(self: Self, lhs: Self) -> Self`

Reverse subtraction.

Calls the underlying object's `__rsub__` method.

**Args:**

- ​**lhs** (`Self`): The left-hand-side value from which this object is subtracted.

**Returns:**

The result of subtracting this from the given value.

### `__rmul__`

`__rmul__(self: Self, lhs: Self) -> Self`

Reverse multiplication.

Calls the underlying object's `__rmul__` method.

**Args:**

- ​**lhs** (`Self`): The left-hand-side value that is multiplied by this object.

**Returns:**

The product of the multiplication.

### `__rtruediv__`

`__rtruediv__(self: Self, lhs: Self) -> Self`

Reverse division.

Calls the underlying object's `__rtruediv__` method.

**Args:**

- ​**lhs** (`Self`): The left-hand-side value that is divided by this object.

**Returns:**

The result of dividing the given value by this.

### `__rfloordiv__`

`__rfloordiv__(self: Self, lhs: Self) -> Self`

Reverse floor division.

Calls the underlying object's `__rfloordiv__` method.

**Args:**

- ​**lhs** (`Self`): The left-hand-side value that is divided by this object.

**Returns:**

The result of dividing the given value by this, modulo any remainder.

### `__rmod__`

`__rmod__(self: Self, lhs: Self) -> Self`

Reverse modulo.

Calls the underlying object's `__rmod__` method.

**Args:**

- ​**lhs** (`Self`): The left-hand-side value that is divided by this object.

**Returns:**

The remainder from dividing the given value by this.

### `__rpow__`

`__rpow__(self: Self, lhs: Self) -> Self`

Reverse power of.

**Args:**

- ​**lhs** (`Self`): The number that is raised to the power of this object.

**Returns:**

The result of raising the given value by this exponent.

### `__rlshift__`

`__rlshift__(self: Self, lhs: Self) -> Self`

Reverse bitwise left shift.

**Args:**

- ​**lhs** (`Self`): The left-hand-side value that is bitwise shifted to the left by this object.

**Returns:**

The given value, shifted left by this.

### `__rrshift__`

`__rrshift__(self: Self, lhs: Self) -> Self`

Reverse bitwise right shift.

**Args:**

- ​**lhs** (`Self`): The left-hand-side value that is bitwise shifted to the right by this object.

**Returns:**

The given value, shifted right by this.

### `__rand__`

`__rand__(self: Self, lhs: Self) -> Self`

Reverse bitwise and.

**Args:**

- ​**lhs** (`Self`): The left-hand-side value that is bitwise AND'ed with this object.

**Returns:**

The bitwise AND result of the given value and this.

### `__ror__`

`__ror__(self: Self, lhs: Self) -> Self`

Reverse bitwise OR.

**Args:**

- ​**lhs** (`Self`): The left-hand-side value that is bitwise OR'ed with this object.

**Returns:**

The bitwise OR result of the given value and this.

### `__rxor__`

`__rxor__(self: Self, lhs: Self) -> Self`

Reverse exclusive OR.

**Args:**

- ​**lhs** (`Self`): The left-hand-side value that is exclusive OR'ed with this object.

**Returns:**

The exclusive OR result of the given value and this.

### `__iadd__`

`__iadd__(inout self: Self, rhs: Self)`

Immediate addition and concatenation.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value that is added to this object.

### `__isub__`

`__isub__(inout self: Self, rhs: Self)`

Immediate subtraction.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value that is subtracted from this object.

### `__imul__`

`__imul__(inout self: Self, rhs: Self)`

In-place multiplication.

Calls the underlying object's `__imul__` method.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value by which this object is multiplied.

### `__itruediv__`

`__itruediv__(inout self: Self, rhs: Self)`

Immediate division.

**Args:**

- ​**rhs** (`Self`): The value by which this object is divided.

### `__ifloordiv__`

`__ifloordiv__(inout self: Self, rhs: Self)`

Immediate floor division.

**Args:**

- ​**rhs** (`Self`): The value by which this object is divided.

### `__imod__`

`__imod__(inout self: Self, rhs: Self)`

Immediate modulo.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value that is used to divide this object.

### `__ipow__`

`__ipow__(inout self: Self, rhs: Self)`

Immediate power of.

**Args:**

- ​**rhs** (`Self`): The exponent.

### `__ilshift__`

`__ilshift__(inout self: Self, rhs: Self)`

Immediate bitwise left shift.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value by which this object is bitwise shifted to the left.

### `__irshift__`

`__irshift__(inout self: Self, rhs: Self)`

Immediate bitwise right shift.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value by which this object is bitwise shifted to the right.

### `__iand__`

`__iand__(inout self: Self, rhs: Self)`

Immediate bitwise AND.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value with which this object is bitwise AND'ed.

### `__ixor__`

`__ixor__(inout self: Self, rhs: Self)`

Immediate exclusive OR.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value with which this object is exclusive OR'ed.

### `__ior__`

`__ior__(inout self: Self, rhs: Self)`

Immediate bitwise OR.

**Args:**

- ​**rhs** (`Self`): The right-hand-side value with which this object is bitwise OR'ed.

### `__iter__`

`__iter__(self: Self) -> _PyIter`

Iterate over the object.

Raises: If the object is not iterable.

**Returns:**

An iterator object.

### `__getattr__`

`__getattr__(self: Self, name: StringLiteral) -> Self`

Return the value of the object attribute with the given name.

**Args:**

- ​**name** (`StringLiteral`): The name of the object attribute to return.

**Returns:**

The value of the object attribute with the given name.

### `__setattr__`

`__setattr__(self: Self, name: StringLiteral, newValue: Self)`

Set the given value for the object attribute with the given name.

**Args:**

- ​**name** (`StringLiteral`): The name of the object attribute to set.
- ​**newValue** (`Self`): The new value to be set for that attribute.

### `__len__`

`__len__(self: Self) -> Int`

Returns the length of the object.

**Returns:**

The length of the object.

### `__call__`

`__call__(self: Self, *args: Self, *, owned kwargs: Dict[String, PythonObject]) -> Self`

Call the underlying object as if it were a function.

**Returns:**

The return value from the called object.

### `to_float64`

`to_float64(self: Self) -> SIMD[f64, 1]`

Returns a float representation of the object.

**Returns:**

A floating point value that represents this object.

### `__index__`

`__index__(self: Self) -> Int`

Returns an index representation of the object.

**Returns:**

An index value that represents this object.

### `__int__`

`__int__(self: Self) -> Int`

Returns an integral representation of the object.

**Returns:**

An integral value that represents this object.

### `__str__`

`__str__(self: Self) -> String`

Returns a string representation of the object.

Calls the underlying object's `__str__` method.

**Returns:**

A string that represents this object.