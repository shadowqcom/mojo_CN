# simd

Implements SIMD struct.

These are Mojo built-ins, so you don't need to import them.

**Aliases:**

- ​`Scalar = SIMD[?, 1]`: Represents a scalar dtype.

- ​`Int8 = SIMD[si8, 1]`: Represents an 8-bit signed scalar integer.

- ​`UInt8 = SIMD[ui8, 1]`: Represents an 8-bit unsigned scalar integer.

- ​`Int16 = SIMD[si16, 1]`: Represents a 16-bit signed scalar integer.

- ​`UInt16 = SIMD[ui16, 1]`: Represents a 16-bit unsigned scalar integer.

- ​`Int32 = SIMD[si32, 1]`: Represents a 32-bit signed scalar integer.

- ​`UInt32 = SIMD[ui32, 1]`: Represents a 32-bit unsigned scalar integer.

- ​`Int64 = SIMD[si64, 1]`: Represents a 64-bit signed scalar integer.

- ​`UInt64 = SIMD[ui64, 1]`: Represents a 64-bit unsigned scalar integer.

- ​`BFloat16 = SIMD[bf16, 1]`: Represents a 16-bit brain floating point value.

- ​`Float16 = SIMD[f16, 1]`: Represents a 16-bit floating point value.

- ​`Float32 = SIMD[f32, 1]`: Represents a 32-bit floating point value.

- ​`Float64 = SIMD[f64, 1]`: Represents a 64-bit floating point value.

## `SIMD`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#simd "Direct link to simd")

Represents a small vector that is backed by a hardware vector element.

SIMD allows a single instruction to be executed across the multiple data elements of the vector.

**Constraints:**

The size of the SIMD vector to be positive and a power of 2.

**Parameters:**

- ​**type** (`DType`): The data type of SIMD vector elements.
- ​**size** (`Int`): The size of the SIMD vector.

**Aliases:**

- ​`element_type = type`

- ​`MAX = SIMD[type, size](_inf[stdlib::builtin::dtype::DType][type]())`: Gets a +inf value for the SIMD value.

- ​`MIN = SIMD[type, size](_neginf[stdlib::builtin::dtype::DType][type]())`: Gets a -inf value for the SIMD value.

- ​`MAX_FINITE = SIMD[type, size](_max_finite[stdlib::builtin::dtype::DType][type]())`: Returns the maximum finite value of SIMD value.

- ​`MIN_FINITE = SIMD[type, size](_min_finite[stdlib::builtin::dtype::DType][type]())`: Returns the minimum (lowest) finite value of SIMD value.

**Fields:**

- ​**value** (`simd<#lit.struct.extract<:@stdlib::@builtin::@int::@Int size, "value">, #lit.struct.extract<:@stdlib::@builtin::@dtype::@DType type, "value">>`): The underlying storage for the vector.

**Implemented traits:**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `Hashable`, `Intable`, `Movable`, `Sized`, `Stringable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__init__ "Direct link to __init__")

`__init__() -> Self`

Default initializer of the SIMD vector.

By default the SIMD vectors are initialized to all zeros.

**Returns:**

SIMD vector whose elements are 0.

`__init__(value: SIMD[f64, 1]) -> Self`

Initializes the SIMD vector with a float.

The value is splatted across all the elements of the SIMD vector.

**Args:**

- ​**value** (`SIMD[f64, 1]`): The input value.

**Returns:**

SIMD vector whose elements have the specified value.

`__init__(value: Int) -> Self`

Initializes the SIMD vector with an integer.

The integer value is splatted across all the elements of the SIMD vector.

**Args:**

- ​**value** (`Int`): The input value.

**Returns:**

SIMD vector whose elements have the specified value.

`__init__(value: IntLiteral) -> Self`

Initializes the SIMD vector with an integer.

The integer value is splatted across all the elements of the SIMD vector.

**Args:**

- ​**value** (`IntLiteral`): The input value.

**Returns:**

SIMD vector whose elements have the specified value.

`__init__(value: Bool) -> Self`

Initializes the SIMD vector with a bool value.

The bool value is splatted across all elements of the SIMD vector.

**Args:**

- ​**value** (`Bool`): The bool value.

**Returns:**

SIMD vector whose elements have the specified value.

`__init__(value: simd<#lit.struct.extract<:_stdlib::_builtin::_int::_Int size, "value">, #lit.struct.extract<:_stdlib::_builtin::_dtype::_DType type, "value">>) -> Self`

Initializes the SIMD vector with the underlying mlir value.

**Args:**

- ​**value** (`simd<#lit.struct.extract<:_stdlib::_builtin::_int::_Int size, "value">, #lit.struct.extract<:_stdlib::_builtin::_dtype::_DType type, "value">>`): The input value.

**Returns:**

SIMD vector using the specified value.

`__init__(*elems: SIMD[type, 1]) -> Self`

Constructs a SIMD vector via a variadic list of elements.

If there is just one input value, then it is splatted to all elements of the SIMD vector. Otherwise, the input values are assigned to the corresponding elements of the SIMD vector.

**Constraints:**

The number of input values is 1 or equal to size of the SIMD vector.

**Args:**

- ​**elems** (`*SIMD[type, 1]`): The variadic list of elements from which the SIMD vector is constructed.

**Returns:**

The constructed SIMD vector.

`__init__(value: FloatLiteral) -> Self`

Initializes the SIMD vector with a float.

The value is splatted across all the elements of the SIMD vector.

**Args:**

- ​**value** (`FloatLiteral`): The input value.

**Returns:**

SIMD vector whose elements have the specified value.

### `__bool__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__bool__ "Direct link to __bool__")

`__bool__(self: Self) -> Bool`

Converts the SIMD vector into a boolean scalar value.

**Returns:**

True if all the elements in the SIMD vector are non-zero and False otherwise.

### `__getitem__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__getitem__ "Direct link to __getitem__")

`__getitem__(self: Self, idx: Int) -> SIMD[type, 1]`

Gets an element from the vector.

**Args:**

- ​**idx** (`Int`): The element index.

**Returns:**

The value at position `idx`.

### `__setitem__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__setitem__ "Direct link to __setitem__")

`__setitem__(inout self: Self, idx: Int, val: SIMD[type, 1])`

Sets an element in the vector.

**Args:**

- ​**idx** (`Int`): The index to set.
- ​**val** (`SIMD[type, 1]`): The value to set.

`__setitem__(inout self: Self, idx: Int, val: scalar<#lit.struct.extract<:_stdlib::_builtin::_dtype::_DType type, "value">>)`

Sets an element in the vector.

**Args:**

- ​**idx** (`Int`): The index to set.
- ​**val** (`scalar<#lit.struct.extract<:_stdlib::_builtin::_dtype::_DType type, "value">>`): The value to set.

### `__neg__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__neg__ "Direct link to __neg__")

`__neg__(self: Self) -> Self`

Defines the unary `-` operation.

**Returns:**

The negation of this SIMD vector.

### `__pos__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__pos__ "Direct link to __pos__")

`__pos__(self: Self) -> Self`

Defines the unary `+` operation.

**Returns:**

This SIMD vector.

### `__invert__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__invert__ "Direct link to __invert__")

`__invert__(self: Self) -> Self`

Returns `~self`.

**Constraints:**

The element type of the SIMD vector must be boolean or integral.

**Returns:**

The `~self` value.

### `__lt__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__lt__ "Direct link to __lt__")

`__lt__(self: Self, rhs: Self) -> SIMD[bool, size]`

Compares two SIMD vectors using less-than comparison.

**Args:**

- ​**rhs** (`Self`): The rhs of the operation.

**Returns:**

A new bool SIMD vector of the same size whose element at position `i` is True or False depending on the expression `self[i] < rhs[i]`.

### `__le__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__le__ "Direct link to __le__")

`__le__(self: Self, rhs: Self) -> SIMD[bool, size]`

Compares two SIMD vectors using less-than-or-equal comparison.

**Args:**

- ​**rhs** (`Self`): The rhs of the operation.

**Returns:**

A new bool SIMD vector of the same size whose element at position `i` is True or False depending on the expression `self[i] <= rhs[i]`.

### `__eq__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__eq__ "Direct link to __eq__")

`__eq__(self: Self, rhs: Self) -> SIMD[bool, size]`

Compares two SIMD vectors using equal-to comparison.

**Args:**

- ​**rhs** (`Self`): The rhs of the operation.

**Returns:**

A new bool SIMD vector of the same size whose element at position `i` is True or False depending on the expression `self[i] == rhs[i]`.

### `__ne__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__ne__ "Direct link to __ne__")

`__ne__(self: Self, rhs: Self) -> SIMD[bool, size]`

Compares two SIMD vectors using not-equal comparison.

**Args:**

- ​**rhs** (`Self`): The rhs of the operation.

**Returns:**

A new bool SIMD vector of the same size whose element at position `i` is True or False depending on the expression `self[i] != rhs[i]`.

### `__gt__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__gt__ "Direct link to __gt__")

`__gt__(self: Self, rhs: Self) -> SIMD[bool, size]`

Compares two SIMD vectors using greater-than comparison.

**Args:**

- ​**rhs** (`Self`): The rhs of the operation.

**Returns:**

A new bool SIMD vector of the same size whose element at position `i` is True or False depending on the expression `self[i] > rhs[i]`.

### `__ge__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__ge__ "Direct link to __ge__")

`__ge__(self: Self, rhs: Self) -> SIMD[bool, size]`

Compares two SIMD vectors using greater-than-or-equal comparison.

**Args:**

- ​**rhs** (`Self`): The rhs of the operation.

**Returns:**

A new bool SIMD vector of the same size whose element at position `i` is True or False depending on the expression `self[i] >= rhs[i]`.

### `__add__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__add__ "Direct link to __add__")

`__add__(self: Self, rhs: Self) -> Self`

Computes `self + rhs`.

**Args:**

- ​**rhs** (`Self`): The rhs value.

**Returns:**

A new vector whose element at position `i` is computed as `self[i] + rhs[i]`.

### `__sub__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__sub__ "Direct link to __sub__")

`__sub__(self: Self, rhs: Self) -> Self`

Computes `self - rhs`.

**Args:**

- ​**rhs** (`Self`): The rhs value.

**Returns:**

A new vector whose element at position `i` is computed as `self[i] - rhs[i]`.

### `__mul__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__mul__ "Direct link to __mul__")

`__mul__(self: Self, rhs: Self) -> Self`

Computes `self * rhs`.

**Args:**

- ​**rhs** (`Self`): The rhs value.

**Returns:**

A new vector whose element at position `i` is computed as `self[i] * rhs[i]`.

### `__truediv__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__truediv__ "Direct link to __truediv__")

`__truediv__(self: Self, rhs: Self) -> Self`

Computes `self / rhs`.

**Args:**

- ​**rhs** (`Self`): The rhs value.

**Returns:**

A new vector whose element at position `i` is computed as `self[i] / rhs[i]`.

### `__floordiv__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__floordiv__ "Direct link to __floordiv__")

`__floordiv__(self: Self, rhs: Self) -> Self`

Returns the division of self and rhs rounded down to the nearest integer.

**Constraints:**

The element type of the SIMD vector must be numeric.

**Args:**

- ​**rhs** (`Self`): The value to divide on.

**Returns:**

`floor(self / rhs)` value.

### `__mod__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__mod__ "Direct link to __mod__")

`__mod__(self: Self, rhs: Self) -> Self`

Returns the remainder of self divided by rhs.

**Args:**

- ​**rhs** (`Self`): The value to divide on.

**Returns:**

The remainder of dividing self by rhs.

### `__pow__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__pow__ "Direct link to __pow__")

`__pow__(self: Self, rhs: Int) -> Self`

Computes the vector raised to the power of the input integer value.

**Args:**

- ​**rhs** (`Int`): The exponential value.

**Returns:**

A SIMD vector where each element is raised to the power of the specified exponential value.

`__pow__(self: Self, rhs: Self) -> Self`

Computes the vector raised elementwise to the right hand side power.

**Args:**

- ​**rhs** (`Self`): The exponential value.

**Returns:**

A SIMD vector where each element is raised to the power of the specified exponential value.

`__pow__[rhs_type: DType](self: Self, rhs: SIMD[rhs_type, size]) -> Self`

Computes the vector raised elementwise to the right hand side power.

**Parameters:**

- ​**rhs\_type** (`DType`): The `dtype` of the rhs SIMD vector.

**Args:**

- ​**rhs** (`SIMD[rhs_type, size]`): The exponential value.

**Returns:**

A SIMD vector where each element is raised to the power of the specified exponential value.

### `__lshift__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__lshift__ "Direct link to __lshift__")

`__lshift__(self: Self, rhs: Self) -> Self`

Returns `self << rhs`.

**Constraints:**

The element type of the SIMD vector must be integral.

**Args:**

- ​**rhs** (`Self`): The RHS value.

**Returns:**

`self << rhs`.

### `__rshift__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__rshift__ "Direct link to __rshift__")

`__rshift__(self: Self, rhs: Self) -> Self`

Returns `self >> rhs`.

**Constraints:**

The element type of the SIMD vector must be integral.

**Args:**

- ​**rhs** (`Self`): The RHS value.

**Returns:**

`self >> rhs`.

### `__and__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__and__ "Direct link to __and__")

`__and__(self: Self, rhs: Self) -> Self`

Returns `self & rhs`.

**Constraints:**

The element type of the SIMD vector must be bool or integral.

**Args:**

- ​**rhs** (`Self`): The RHS value.

**Returns:**

`self & rhs`.

### `__or__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__or__ "Direct link to __or__")

`__or__(self: Self, rhs: Self) -> Self`

Returns `self | rhs`.

**Constraints:**

The element type of the SIMD vector must be bool or integral.

**Args:**

- ​**rhs** (`Self`): The RHS value.

**Returns:**

`self | rhs`.

### `__xor__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__xor__ "Direct link to __xor__")

`__xor__(self: Self, rhs: Self) -> Self`

Returns `self ^ rhs`.

**Constraints:**

The element type of the SIMD vector must be bool or integral.

**Args:**

- ​**rhs** (`Self`): The RHS value.

**Returns:**

`self ^ rhs`.

### `__radd__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__radd__ "Direct link to __radd__")

`__radd__(self: Self, value: Self) -> Self`

Returns `value + self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value + self`.

### `__rsub__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__rsub__ "Direct link to __rsub__")

`__rsub__(self: Self, value: Self) -> Self`

Returns `value - self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value - self`.

### `__rmul__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__rmul__ "Direct link to __rmul__")

`__rmul__(self: Self, value: Self) -> Self`

Returns `value * self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value * self`.

### `__rtruediv__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__rtruediv__ "Direct link to __rtruediv__")

`__rtruediv__(self: Self, value: Self) -> Self`

Returns `value / self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value / self`.

### `__rlshift__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__rlshift__ "Direct link to __rlshift__")

`__rlshift__(self: Self, value: Self) -> Self`

Returns `value << self`.

**Constraints:**

The element type of the SIMD vector must be integral.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value << self`.

### `__rrshift__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__rrshift__ "Direct link to __rrshift__")

`__rrshift__(self: Self, value: Self) -> Self`

Returns `value >> self`.

**Constraints:**

The element type of the SIMD vector must be integral.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value >> self`.

### `__rand__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__rand__ "Direct link to __rand__")

`__rand__(self: Self, value: Self) -> Self`

Returns `value & self`.

**Constraints:**

The element type of the SIMD vector must be bool or integral.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value & self`.

### `__ror__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__ror__ "Direct link to __ror__")

`__ror__(self: Self, value: Self) -> Self`

Returns `value | self`.

**Constraints:**

The element type of the SIMD vector must be bool or integral.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value | self`.

### `__rxor__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__rxor__ "Direct link to __rxor__")

`__rxor__(self: Self, value: Self) -> Self`

Returns `value ^ self`.

**Constraints:**

The element type of the SIMD vector must be bool or integral.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value ^ self`.

### `__iadd__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__iadd__ "Direct link to __iadd__")

`__iadd__(inout self: Self, rhs: Self)`

Performs in-place addition.

The vector is mutated where each element at position `i` is computed as `self[i] + rhs[i]`.

**Args:**

- ​**rhs** (`Self`): The rhs of the addition operation.

### `__isub__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__isub__ "Direct link to __isub__")

`__isub__(inout self: Self, rhs: Self)`

Performs in-place subtraction.

The vector is mutated where each element at position `i` is computed as `self[i] - rhs[i]`.

**Args:**

- ​**rhs** (`Self`): The rhs of the operation.

### `__imul__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__imul__ "Direct link to __imul__")

`__imul__(inout self: Self, rhs: Self)`

Performs in-place multiplication.

The vector is mutated where each element at position `i` is computed as `self[i] * rhs[i]`.

**Args:**

- ​**rhs** (`Self`): The rhs of the operation.

### `__itruediv__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__itruediv__ "Direct link to __itruediv__")

`__itruediv__(inout self: Self, rhs: Self)`

In-place true divide operator.

The vector is mutated where each element at position `i` is computed as `self[i] / rhs[i]`.

**Args:**

- ​**rhs** (`Self`): The rhs of the operation.

### `__ifloordiv__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__ifloordiv__ "Direct link to __ifloordiv__")

`__ifloordiv__(inout self: Self, rhs: Self)`

In-place flood div operator.

The vector is mutated where each element at position `i` is computed as `self[i] // rhs[i]`.

**Args:**

- ​**rhs** (`Self`): The rhs of the operation.

### `__imod__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__imod__ "Direct link to __imod__")

`__imod__(inout self: Self, rhs: Self)`

In-place mod operator.

The vector is mutated where each element at position `i` is computed as `self[i] % rhs[i]`.

**Args:**

- ​**rhs** (`Self`): The rhs of the operation.

### `__ipow__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__ipow__ "Direct link to __ipow__")

`__ipow__(inout self: Self, rhs: Int)`

In-place pow operator.

The vector is mutated where each element at position `i` is computed as `pow(self[i], rhs)`.

**Args:**

- ​**rhs** (`Int`): The rhs of the operation.

### `__ilshift__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__ilshift__ "Direct link to __ilshift__")

`__ilshift__(inout self: Self, rhs: Self)`

Computes `self << rhs` and save the result in `self`.

**Constraints:**

The element type of the SIMD vector must be integral.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__irshift__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__irshift__ "Direct link to __irshift__")

`__irshift__(inout self: Self, rhs: Self)`

Computes `self >> rhs` and save the result in `self`.

**Constraints:**

The element type of the SIMD vector must be integral.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__iand__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__iand__ "Direct link to __iand__")

`__iand__(inout self: Self, rhs: Self)`

Computes `self & rhs` and save the result in `self`.

**Constraints:**

The element type of the SIMD vector must be bool or integral.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__ixor__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__ixor__ "Direct link to __ixor__")

`__ixor__(inout self: Self, rhs: Self)`

Computes `self ^ rhs` and save the result in `self`.

**Constraints:**

The element type of the SIMD vector must be bool or integral.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__ior__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__ior__ "Direct link to __ior__")

`__ior__(inout self: Self, rhs: Self)`

Computes `self | rhs` and save the result in `self`.

**Constraints:**

The element type of the SIMD vector must be bool or integral.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__len__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__len__ "Direct link to __len__")

`__len__(self: Self) -> Int`

Gets the length of the SIMD vector.

**Returns:**

The length of the SIMD vector.

### `splat`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#splat "Direct link to splat")

`static splat(x: Bool) -> Self`

Splats (broadcasts) the element onto the vector.

**Args:**

- ​**x** (`Bool`): The input value.

**Returns:**

A new SIMD vector whose elements are the same as the input value.

`static splat(x: SIMD[type, 1]) -> Self`

Splats (broadcasts) the element onto the vector.

**Args:**

- ​**x** (`SIMD[type, 1]`): The input scalar value.

**Returns:**

A new SIMD vector whose elements are the same as the input value.

### `cast`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#cast "Direct link to cast")

`cast[target: DType](self: Self) -> SIMD[target, size]`

Casts the elements of the SIMD vector to the target element type.

**Parameters:**

- ​**target** (`DType`): The target DType.

**Returns:**

A new SIMD vector whose elements have been casted to the target element type.

### `__int__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__int__ "Direct link to __int__")

`__int__(self: Self) -> Int`

Casts to the value to an Int. If there is a fractional component, then the fractional part is truncated.

**Constraints:**

The size of the SIMD vector must be 1.

**Returns:**

The value as an integer.

### `__str__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__str__ "Direct link to __str__")

`__str__(self: Self) -> String`

Get the SIMD as a string.

**Returns:**

A string representation.

### `to_int`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#to_int "Direct link to to_int")

`to_int(self: Self) -> Int`

Casts to the value to an Int. If there is a fractional component, then the value is truncated towards zero.

**Constraints:**

The size of the SIMD vector must be 1.

**Returns:**

The value of the single integer element in the SIMD vector.

### `fma`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#fma "Direct link to fma")

`fma(self: Self, multiplier: Self, accumulator: Self) -> Self`

Performs a fused multiply-add operation, i.e. `self*multiplier + accumulator`.

**Args:**

- ​**multiplier** (`Self`): The value to multiply.
- ​**accumulator** (`Self`): The value to accumulate.

**Returns:**

A new vector whose element at position `i` is computed as `self[i]*multiplier[i] + accumulator[i]`.

### `shuffle`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#shuffle "Direct link to shuffle")

`shuffle[*mask: Int](self: Self) -> Self`

Shuffles (also called blend) the values of the current vector with the `other` value using the specified mask (permutation).

**Parameters:**

- ​**mask** (`*Int`): The permutation to use in the shuffle.

**Returns:**

A new vector of length `len` where the value at position `i` is `(self)[permutation[i]]`.

`shuffle[*mask: Int](self: Self, other: Self) -> Self`

Shuffles (also called blend) the values of the current vector with the `other` value using the specified mask (permutation).

**Parameters:**

- ​**mask** (`*Int`): The permutation to use in the shuffle.

**Args:**

- ​**other** (`Self`): The other vector to shuffle with.

**Returns:**

A new vector of length `len` where the value at position `i` is `(self+other)[permutation[i]]`.

### `__hash__`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#__hash__ "Direct link to __hash__")

`__hash__(self: Self) -> Int`

Hash the value using builtin hash.

**Returns:**

A 64-bit hash value. This value is _not_ suitable for cryptographic uses. Its intended usage is for data structures. See the `hash` builtin documentation for more details.

### `slice`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#slice "Direct link to slice")

`slice[output_width: Int](self: Self, offset: Int) -> SIMD[type, output_width]`

Returns a slice of the vector of the specified width with the given offset.

**Constraints:**

`output_width + offset` must not exceed the size of this SIMD vector.

**Parameters:**

- ​**output\_width** (`Int`): The output SIMD vector size.

**Args:**

- ​**offset** (`Int`): The given offset for the slice.

**Returns:**

A new vector whose elements map to `self[offset:offset+output_width]`.

### `insert`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#insert "Direct link to insert")

`insert[input_width: Int](self: Self, value: SIMD[type, input_width], offset: Int) -> Self`

Returns a the vector where the elements between `offset` and `offset + input_width` have been replaced with the elements in `value`.

**Parameters:**

- ​**input\_width** (`Int`): The width of the value input that is going to be inserted.

**Args:**

- ​**value** (`SIMD[type, input_width]`): The value to be inserted.
- ​**offset** (`Int`): The offset to insert at.

**Returns:**

A new vector whose elements at `self[offset:offset+input_width]` contain the values of `value`.

### `join`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#join "Direct link to join")

`join(self: Self, other: Self) -> SIMD[type, __mul__(2, size)]`

Concatenates the two vectors together.

**Args:**

- ​**other** (`Self`): The other SIMD vector.

**Returns:**

A new vector `self_0, self_1, ..., self_n, other_0, ..., other_n`.

### `interleave`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#interleave "Direct link to interleave")

`interleave(self: Self, other: Self) -> SIMD[type, __mul__(2, size)]`

Constructs a vector by interleaving two input vectors.

**Args:**

- ​**other** (`Self`): The other SIMD vector.

**Returns:**

A new vector `self_0, other_0, ..., self_n, other_n`.

### `deinterleave`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#deinterleave "Direct link to deinterleave")

`deinterleave(self: Self) -> StaticTuple[SIMD[type, __floordiv__(size, 2)], 2]`

Constructs two vectors by deinterleaving the even and odd lanes of the vector.

**Constraints:**

The vector size must be greater than 1.

**Returns:**

Two vectors the first of the form `self_0, self_2, ..., self_{n-2}` and the other being `self_1, self_3, ..., self_{n-1}`.

### `min`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#min "Direct link to min")

`min(self: Self, other: Self) -> Self`

Computes the elementwise minimum between the two vectors.

**Args:**

- ​**other** (`Self`): The other SIMD vector.

**Returns:**

A new SIMD vector where each element at position `i` is `min(self[i], other[i])`.

### `max`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#max "Direct link to max")

`max(self: Self, other: Self) -> Self`

Computes the elementwise maximum between the two vectors.

**Args:**

- ​**other** (`Self`): The other SIMD vector.

**Returns:**

A new SIMD vector where each element at position `i` is `max(self[i], other[i])`.

### `reduce`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#reduce "Direct link to reduce")

`reduce[func: fn[DType, Int](SIMD[$0, $1], SIMD[$0, $1], /) capturing -> SIMD[$0, $1], size_out: Int](self: Self) -> SIMD[type, size_out]`

Reduces the vector using a provided reduce operator.

**Parameters:**

- ​**func** (`fn[DType, Int](SIMD[$0, $1], SIMD[$0, $1], /) capturing -> SIMD[$0, $1]`): The reduce function to apply to elements in this SIMD.
- ​**size\_out** (`Int`): The width of the reduction.

**Returns:**

A new scalar which is the reduction of all vector elements.

### `reduce_max`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#reduce_max "Direct link to reduce_max")

`reduce_max[size_out: Int](self: Self) -> SIMD[type, size_out]`

Reduces the vector using the `max` operator.

**Constraints:**

The element type of the vector must be integer or FP.

**Parameters:**

- ​**size\_out** (`Int`): The width of the reduction.

**Returns:**

The maximum element of the vector.

### `reduce_min`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#reduce_min "Direct link to reduce_min")

`reduce_min[size_out: Int](self: Self) -> SIMD[type, size_out]`

Reduces the vector using the `min` operator.

**Constraints:**

The element type of the vector must be integer or FP.

**Parameters:**

- ​**size\_out** (`Int`): The width of the reduction.

**Returns:**

The minimum element of the vector.

### `reduce_add`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#reduce_add "Direct link to reduce_add")

`reduce_add[size_out: Int](self: Self) -> SIMD[type, size_out]`

Reduces the vector using the `add` operator.

**Parameters:**

- ​**size\_out** (`Int`): The width of the reduction.

**Returns:**

The sum of all vector elements.

### `reduce_mul`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#reduce_mul "Direct link to reduce_mul")

`reduce_mul[size_out: Int](self: Self) -> SIMD[type, size_out]`

Reduces the vector using the `mul` operator.

**Constraints:**

The element type of the vector must be integer or FP.

**Parameters:**

- ​**size\_out** (`Int`): The width of the reduction.

**Returns:**

The product of all vector elements.

### `reduce_and`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#reduce_and "Direct link to reduce_and")

`reduce_and(self: Self) -> Bool`

Reduces the boolean vector using the `and` operator.

**Constraints:**

The element type of the vector must be boolean.

**Returns:**

True if all element in the vector is True and False otherwise.

### `reduce_or`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#reduce_or "Direct link to reduce_or")

`reduce_or(self: Self) -> Bool`

Reduces the boolean vector using the `or` operator.

**Constraints:**

The element type of the vector must be boolean.

**Returns:**

True if any element in the vector is True and False otherwise.

### `select`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#select "Direct link to select")

`select[result_type: DType](self: Self, true_case: SIMD[result_type, size], false_case: SIMD[result_type, size]) -> SIMD[result_type, size]`

Selects the values of the `true_case` or the `false_case` based on the current boolean values of the SIMD vector.

**Parameters:**

- ​**result\_type** (`DType`): The element type of the input and output SIMD vectors.

**Args:**

- ​**true\_case** (`SIMD[result_type, size]`): The values selected if the positional value is True.
- ​**false\_case** (`SIMD[result_type, size]`): The values selected if the positional value is False.

**Returns:**

A new vector of the form `[true_case[i] if elem else false_case[i] for i, elem in enumerate(self)]`.

### `rotate_left`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#rotate_left "Direct link to rotate_left")

`rotate_left[shift: Int](self: Self) -> Self`

Shifts the elements of a SIMD vector to the left by `shift` elements (with wrap-around).

**Constraints:**

`-size <= shift < size`

**Parameters:**

- ​**shift** (`Int`): The number of positions by which to rotate the elements of SIMD vector to the left (with wrap-around).

**Returns:**

The SIMD vector rotated to the left by `shift` elements (with wrap-around).

### `rotate_right`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#rotate_right "Direct link to rotate_right")

`rotate_right[shift: Int](self: Self) -> Self`

Shifts the elements of a SIMD vector to the right by `shift` elements (with wrap-around).

**Constraints:**

`-size < shift <= size`

**Parameters:**

- ​**shift** (`Int`): The number of positions by which to rotate the elements of SIMD vector to the right (with wrap-around).

**Returns:**

The SIMD vector rotated to the right by `shift` elements (with wrap-around).

### `shift_left`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#shift_left "Direct link to shift_left")

`shift_left[shift: Int](self: Self) -> Self`

Shifts the elements of a SIMD vector to the left by `shift` elements (no wrap-around, fill with zero).

**Constraints:**

`0 <= shift <= size`

**Parameters:**

- ​**shift** (`Int`): The number of positions by which to rotate the elements of SIMD vector to the left (no wrap-around, fill with zero).

**Returns:**

The SIMD vector rotated to the left by `shift` elements (no wrap-around, fill with zero).

### `shift_right`[​](https://docs.modular.com/mojo/stdlib/builtin/simd#shift_right "Direct link to shift_right")

`shift_right[shift: Int](self: Self) -> Self`

Shifts the elements of a SIMD vector to the right by `shift` elements (no wrap-around, fill with zero).

**Constraints:**

`0 <= shift <= size`

**Parameters:**

- ​**shift** (`Int`): The number of positions by which to rotate the elements of SIMD vector to the right (no wrap-around, fill with zero).

**Returns:**

The SIMD vector rotated to the right by `shift` elements (no wrap-around, fill with zero).