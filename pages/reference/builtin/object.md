# object

Defines the object type, which is used to represent untyped values.

These are Mojo built-ins, so you don't need to import them.

## `Attr`

A generic object's attributes are set on construction, after which the attributes can be read and modified, but no attributes may be removed or added.

**Fields:**

- ​**key** (`StringLiteral`): The name of the attribute.

- ​**value** (`object`): The value of the attribute.

**Implemented traits:**

`AnyType`

**Methods:**

### `__init__`

`__init__(inout self: Self, key: StringLiteral, owned value: object)`

Initializes the attribute with a key and value.

**Args:**

- ​**key** (`StringLiteral`): The string literal key.
- ​**value** (`object`): The object value of the attribute.

## `object`

Represents an object without a concrete type.

This is the type of arguments in `def` functions that do not have a type annotation, such as the type of `x` in `def f(x): pass`. A value of any type can be passed in as the `x` argument in this case, and so that value is used to construct this `object` type.

**Aliases:**

- ​`nullary_function = fn() raises -> object`: Nullary function type.

- ​`unary_function = fn(object) raises -> object`: Unary function type.

- ​`binary_function = fn(object, object) raises -> object`: Binary function type.

- ​`ternary_function = fn(object, object, object) raises -> object`: Ternary function type.

**Implemented traits:**

`AnyType`, `Boolable`, `IntableRaising`, `Stringable`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Initializes the object with a `None` value.

`__init__(inout self: Self, impl: _ObjectImpl)`

Initializes the object with an implementation value. This is meant for internal use only.

**Args:**

- ​**impl** (`_ObjectImpl`): The object implementation.

`__init__(inout self: Self, none: None)`

Initializes a none value object from a `None` literal.

**Args:**

- ​**none** (`None`): None.

`__init__(inout self: Self, value: Int)`

Initializes the object with an integer value.

**Args:**

- ​**value** (`Int`): The integer value.

`__init__(inout self: Self, value: SIMD[f64, 1])`

Initializes the object with an floating-point value.

**Args:**

- ​**value** (`SIMD[f64, 1]`): The float value.

`__init__[dt: DType](inout self: Self, value: SIMD[dt, 1])`

Initializes the object with a generic scalar value. If the scalar value type is bool, it is converted to a boolean. Otherwise, it is converted to the appropriate integer or floating point type.

**Parameters:**

- ​**dt** (`DType`): The scalar value type.

**Args:**

- ​**value** (`SIMD[dt, 1]`): The scalar value.

`__init__(inout self: Self, value: Bool)`

Initializes the object from a bool.

**Args:**

- ​**value** (`Bool`): The boolean value.

`__init__(inout self: Self, value: StringLiteral)`

Initializes the object from a string literal.

**Args:**

- ​**value** (`StringLiteral`): The string value.

`__init__(inout self: Self, value: StringRef)`

Initializes the object from a string reference.

**Args:**

- ​**value** (`StringRef`): The string value.

`__init__[*Ts: AnyRegType](inout self: Self, value: ListLiteral[Ts])`

Initializes the object from a list literal.

**Parameters:**

- ​**Ts** (`*AnyRegType`): The list element types.

**Args:**

- ​**value** (`ListLiteral[Ts]`): The list value.

`__init__(inout self: Self, func: fn() raises -> object)`

Initializes an object from a function that takes no arguments.

**Args:**

- ​**func** (`fn() raises -> object`): The function.

`__init__(inout self: Self, func: fn(object) raises -> object)`

Initializes an object from a function that takes one argument.

**Args:**

- ​**func** (`fn(object) raises -> object`): The function.

`__init__(inout self: Self, func: fn(object, object) raises -> object)`

Initializes an object from a function that takes two arguments.

**Args:**

- ​**func** (`fn(object, object) raises -> object`): The function.

`__init__(inout self: Self, func: fn(object, object, object) raises -> object)`

Initializes an object from a function that takes three arguments.

**Args:**

- ​**func** (`fn(object, object, object) raises -> object`): The function.

`__init__(inout self: Self, *attrs: Attr)`

Initializes the object with a sequence of zero or more attributes.

**Args:**

- ​**attrs** (`*Attr`): Zero or more attributes.

### `__copyinit__`

`__copyinit__(inout self: Self, existing: Self)`

Copies the object. This clones the underlying string value and increases the refcount of lists or dictionaries.

**Args:**

- ​**existing** (`Self`): The object to copy.

### `__moveinit__`

`__moveinit__(inout self: Self, owned existing: Self)`

Move the value of an object.

**Args:**

- ​**existing** (`Self`): The object to move.

### `__del__`

`__del__(owned self: Self)`

Delete the object and release any owned memory.

### `__bool__`

`__bool__(self: Self) -> Bool`

Performs conversion to bool according to Python semantics. Integers and floats are true if they are non-zero, and strings and lists are true if they are non-empty.

**Returns:**

Whether the object is considered true.

### `__getitem__`

`__getitem__(self: Self, i: Self) -> Self`

Gets the i-th item from the object. This is only valid for strings, lists, and dictionaries.

**Args:**

- ​**i** (`Self`): The string or list index, or dictionary key.

**Returns:**

The value at the index or key.

`__getitem__(self: Self, *index: Self) -> Self`

Gets the i-th item from the object, where i is a tuple of indices.

**Args:**

- ​**index** (`*Self`): A compound index.

**Returns:**

The value at the index.

### `__setitem__`

`__setitem__(self: Self, i: Self, value: Self)`

Sets the i-th item in the object. This is only valid for strings, lists, and dictionaries.

**Args:**

- ​**i** (`Self`): The string or list index, or dictionary key.
- ​**value** (`Self`): The value to set.

`__setitem__(self: Self, i: Self, j: Self, value: Self)`

Sets the (i, j)-th element in the object.

FIXME: We need this because `obj[i, j] = value` will attempt to invoke this method with 3 arguments, and we can only have variadics as the last argument.

**Args:**

- ​**i** (`Self`): The first index.
- ​**j** (`Self`): The second index.
- ​**value** (`Self`): The value to set.

### `__neg__`

`__neg__(self: Self) -> Self`

Negation operator. Only valid for bool, int, and float types. Negation on any bool value converts it to an integer.

**Returns:**

The negative of the current value.

### `__invert__`

`__invert__(self: Self) -> Self`

Invert value operator. This is only valid for bool and int values.

**Returns:**

The inverted value.

### `__lt__`

`__lt__(self: Self, rhs: Self) -> Self`

Less-than comparator. This lexicographically compares strings and lists.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

True if the object is less than the right hard argument.

### `__le__`

`__le__(self: Self, rhs: Self) -> Self`

Less-than-or-equal to comparator. This lexicographically compares strings and lists.

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

Greater-than comparator. This lexicographically compares the elements of strings and lists.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

True if the left hand value is greater.

### `__ge__`

`__ge__(self: Self, rhs: Self) -> Self`

Greater-than-or-equal-to comparator. This lexicographically compares the elements of strings and lists.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

True if the left hand value is greater than or equal to the right hand value.

### `__add__`

`__add__(self: Self, rhs: Self) -> Self`

Addition and concatenation operator. For arithmetic types, this function will compute the sum of the left and right hand values. For strings and lists, this function will concat the objects.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

The sum or concatenated values.

### `__sub__`

`__sub__(self: Self, rhs: Self) -> Self`

Subtraction operator. Valid only for arithmetic types.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

The difference.

### `__mul__`

`__mul__(self: Self, rhs: Self) -> Self`

Multiplication operator. Valid only for arithmetic types.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

The product.

### `__pow__`

`__pow__(self: Self, rhs: Self) -> Self`

Exponentiation operator. Valid only for arithmetic types.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

The left hand value raised to the power of the right hand value.

### `__and__`

`__and__(self: Self, rhs: Self) -> Self`

Bool AND operator. If the left hand value is False, return the left-hand value.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

The current value if it is False.

### `__or__`

`__or__(self: Self, rhs: Self) -> Self`

Bool OR operator. If the left hand value is True, return the left-hand value.

**Args:**

- ​**rhs** (`Self`): Right hand value.

**Returns:**

The current value if it is True.

### `__radd__`

`__radd__(self: Self, lhs: Self) -> Self`

Reverse addition or concatenation operator.

**Args:**

- ​**lhs** (`Self`): Left hand value.

**Returns:**

The sum or concatenated value.

### `__rsub__`

`__rsub__(self: Self, lhs: Self) -> Self`

Reverse subtraction operator.

**Args:**

- ​**lhs** (`Self`): Left hand value.

**Returns:**

The result of subtracting this from the left-hand-side value.

### `__rmul__`

`__rmul__(self: Self, lhs: Self) -> Self`

Reverse multiplication operator.

**Args:**

- ​**lhs** (`Self`): Left hand value.

**Returns:**

The product.

### `__rpow__`

`__rpow__(self: Self, lhs: Self) -> Self`

Reverse exponentiation operator.

**Args:**

- ​**lhs** (`Self`): Left hand value.

**Returns:**

The left hand value raised to the power of the right hand value.

### `__rand__`

`__rand__(self: Self, lhs: Self) -> Self`

Reverse AND operator.

**Args:**

- ​**lhs** (`Self`): Left hand value.

**Returns:**

The bitwise AND of the left-hand-side value and this.

### `__ror__`

`__ror__(self: Self, lhs: Self) -> Self`

Reverse OR operator.

**Args:**

- ​**lhs** (`Self`): Left hand value.

**Returns:**

The bitwise OR of the left-hand-side value and this.

### `__iadd__`

`__iadd__(inout self: Self, rhs: Self)`

In-place addition or concatenation operator.

**Args:**

- ​**rhs** (`Self`): Right hand value.

### `__isub__`

`__isub__(inout self: Self, rhs: Self)`

In-place subtraction operator.

**Args:**

- ​**rhs** (`Self`): Right hand value.

### `__imul__`

`__imul__(inout self: Self, rhs: Self)`

In-place multiplication operator.

**Args:**

- ​**rhs** (`Self`): Right hand value.

### `__ipow__`

`__ipow__(inout self: Self, rhs: Self)`

In-place exponentiation operator.

**Args:**

- ​**rhs** (`Self`): Right hand value.

### `__iand__`

`__iand__(inout self: Self, rhs: Self)`

In-place AND operator.

**Args:**

- ​**rhs** (`Self`): Right hand value.

### `__ior__`

`__ior__(inout self: Self, rhs: Self)`

In-place OR operator.

**Args:**

- ​**rhs** (`Self`): Right hand value.

### `__int__`

`__int__(self: Self) -> Int`

Performs conversion to integer according to Python semantics.

**Returns:**

The Int representation of the object.

### `__str__`

`__str__(self: Self) -> String`

Performs conversion to string according to Python semantics.

**Returns:**

The String representation of the object.

### `append`

`append(self: Self, value: Self)`

Appends a value to the list.

**Args:**

- ​**value** (`Self`): The value to append.

### `__len__`

`__len__(self: Self) -> Int`

Returns the "length" of the object. Only strings, lists, and dictionaries have lengths.

**Returns:**

The length of the string value or the number of elements in the list or dictionary value.

### `__getattr__`

`__getattr__(self: Self, key: StringLiteral) -> Self`

### `__setattr__`

`__setattr__(inout self: Self, key: StringLiteral, value: Self)`

### `__call__`

`__call__(self: Self) -> Self`

`__call__(self: Self, arg0: Self) -> Self`

`__call__(self: Self, arg0: Self, arg1: Self) -> Self`

`__call__(self: Self, arg0: Self, arg1: Self, arg2: Self) -> Self`

### `print`

`print(self: Self)`

Prints the value of the object.