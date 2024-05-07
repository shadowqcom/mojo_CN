# int\_literal

Implements the IntLiteral class.

## `IntLiteral`

This type represents a static integer literal value with infinite precision. They can't be materialized at runtime and must be lowered to other integer types (like Int), but allow for compile-time operations that would overflow on Int and other fixed precision integer types.

**Fields:**

- ​**value** (`!kgen.int_literal`): The underlying storage for the integer value.

**Implemented traits:**

`AnyType`, `Boolable`, `Copyable`, `EqualityComparable`, `Intable`, `Movable`, `Stringable`

**Methods:**

### `__init__`

`__init__() -> Self`

Default constructor.

**Returns:**

The constructed Self object.

`__init__(value: !kgen.int_literal) -> Self`

Construct IntLiteral from the given mlir !kgen.int\_literal value.

**Args:**

- ​**value** (`!kgen.int_literal`): The init value.

**Returns:**

The constructed IntLiteral object.

`__init__(value: Self) -> Self`

Construct IntLiteral from another one.

**Args:**

- ​**value** (`Self`): The init value.

**Returns:**

The constructed IntLiteral object.

### `__bool__`

`__bool__(self: Self) -> Bool`

Convert this IntLiteral to Bool.

**Returns:**

False Bool value if the value is equal to 0 and True otherwise.

### `__neg__`

`__neg__(self: Self) -> Self`

Return -self.

**Returns:**

The -self value.

### `__pos__`

`__pos__(self: Self) -> Self`

Return +self.

**Returns:**

The +self value.

### `__invert__`

`__invert__(self: Self) -> Self`

Return ~self.

**Returns:**

The ~self value.

### `__lt__`

`__lt__(self: Self, rhs: Self) -> Bool`

Compare this IntLiteral to the RHS using LT comparison.

**Args:**

- ​**rhs** (`Self`): The other IntLiteral to compare against.

**Returns:**

True if this IntLiteral is less-than the RHS IntLiteral and False otherwise.

### `__le__`

`__le__(self: Self, rhs: Self) -> Bool`

Compare this IntLiteral to the RHS using LE comparison.

**Args:**

- ​**rhs** (`Self`): The other IntLiteral to compare against.

**Returns:**

True if this IntLiteral is less-or-equal than the RHS IntLiteral and False otherwise.

### `__eq__`

`__eq__(self: Self, rhs: Self) -> Bool`

Compare this IntLiteral to the RHS using EQ comparison.

**Args:**

- ​**rhs** (`Self`): The other IntLiteral to compare against.

**Returns:**

True if this IntLiteral is equal to the RHS IntLiteral and False otherwise.

### `__ne__`

`__ne__(self: Self, rhs: Self) -> Bool`

Compare this IntLiteral to the RHS using NE comparison.

**Args:**

- ​**rhs** (`Self`): The other IntLiteral to compare against.

**Returns:**

True if this IntLiteral is non-equal to the RHS IntLiteral and False otherwise.

### `__gt__`

`__gt__(self: Self, rhs: Self) -> Bool`

Compare this IntLiteral to the RHS using GT comparison.

**Args:**

- ​**rhs** (`Self`): The other IntLiteral to compare against.

**Returns:**

True if this IntLiteral is greater-than the RHS IntLiteral and False otherwise.

### `__ge__`

`__ge__(self: Self, rhs: Self) -> Bool`

Compare this IntLiteral to the RHS using GE comparison.

**Args:**

- ​**rhs** (`Self`): The other IntLiteral to compare against.

**Returns:**

True if this IntLiteral is greater-or-equal than the RHS IntLiteral and False otherwise.

### `__add__`

`__add__(self: Self, rhs: Self) -> Self`

Return `self + rhs`.

**Args:**

- ​**rhs** (`Self`): The value to add.

**Returns:**

`self + rhs` value.

### `__sub__`

`__sub__(self: Self, rhs: Self) -> Self`

Return `self - rhs`.

**Args:**

- ​**rhs** (`Self`): The value to subtract.

**Returns:**

`self - rhs` value.

### `__mul__`

`__mul__(self: Self, rhs: Self) -> Self`

Return `self * rhs`.

**Args:**

- ​**rhs** (`Self`): The value to multiply with.

**Returns:**

`self * rhs` value.

### `__floordiv__`

`__floordiv__(self: Self, rhs: Self) -> Self`

Return `self // rhs`.

**Args:**

- ​**rhs** (`Self`): The value to divide with.

**Returns:**

`self // rhs` value.

### `__mod__`

`__mod__(self: Self, rhs: Self) -> Self`

Return the remainder of self divided by rhs.

**Args:**

- ​**rhs** (`Self`): The value to divide on.

**Returns:**

The remainder of dividing self by rhs.

### `__lshift__`

`__lshift__(self: Self, rhs: Self) -> Self`

Return `self << rhs`.

**Args:**

- ​**rhs** (`Self`): The value to shift with.

**Returns:**

`self << rhs`.

### `__rshift__`

`__rshift__(self: Self, rhs: Self) -> Self`

Return `self >> rhs`.

**Args:**

- ​**rhs** (`Self`): The value to shift with.

**Returns:**

`self >> rhs`.

### `__and__`

`__and__(self: Self, rhs: Self) -> Self`

Return `self & rhs`.

**Args:**

- ​**rhs** (`Self`): The RHS value.

**Returns:**

`self & rhs`.

### `__or__`

`__or__(self: Self, rhs: Self) -> Self`

Return `self | rhs`.

**Args:**

- ​**rhs** (`Self`): The RHS value.

**Returns:**

`self | rhs`.

### `__xor__`

`__xor__(self: Self, rhs: Self) -> Self`

Return `self ^ rhs`.

**Args:**

- ​**rhs** (`Self`): The RHS value.

**Returns:**

`self ^ rhs`.

### `__radd__`

`__radd__(self: Self, value: Self) -> Self`

Return `value + self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value + self`.

### `__rsub__`

`__rsub__(self: Self, value: Self) -> Self`

Return `value - self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value - self`.

### `__rmul__`

`__rmul__(self: Self, value: Self) -> Self`

Return `value * self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value * self`.

### `__rfloordiv__`

`__rfloordiv__(self: Self, value: Self) -> Self`

Return `value // self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value // self`.

### `__rlshift__`

`__rlshift__(self: Self, value: Self) -> Self`

Return `value << self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value << self`.

### `__rrshift__`

`__rrshift__(self: Self, value: Self) -> Self`

Return `value >> self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value >> self`.

### `__rand__`

`__rand__(self: Self, value: Self) -> Self`

Return `value & self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value & self`.

### `__ror__`

`__ror__(self: Self, value: Self) -> Self`

Return `value | self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value | self`.

### `__rxor__`

`__rxor__(self: Self, value: Self) -> Self`

Return `value ^ self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value ^ self`.

### `__iadd__`

`__iadd__(inout self: Self, rhs: Self)`

Compute `self + rhs` and save the result in self.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__isub__`

`__isub__(inout self: Self, rhs: Self)`

Compute `self - rhs` and save the result in self.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__imul__`

`__imul__(inout self: Self, rhs: Self)`

Compute self\*rhs and save the result in self.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__ifloordiv__`

`__ifloordiv__(inout self: Self, rhs: Self)`

Compute self//rhs and save the result in self.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__ilshift__`

`__ilshift__(inout self: Self, rhs: Self)`

Compute `self << rhs` and save the result in self.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__irshift__`

`__irshift__(inout self: Self, rhs: Self)`

Compute `self >> rhs` and save the result in self.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__iand__`

`__iand__(inout self: Self, rhs: Self)`

Compute `self & rhs` and save the result in self.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__ixor__`

`__ixor__(inout self: Self, rhs: Self)`

Compute `self ^ rhs` and save the result in self.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__ior__`

`__ior__(inout self: Self, rhs: Self)`

Compute self|rhs and save the result in self.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__int__`

`__int__(self: Self) -> Int`

Convert from IntLiteral to Int.

**Returns:**

The value as an integer.

### `__str__`

`__str__(self: Self) -> String`

Convert from IntLiteral to String.

**Returns:**

The value as a string.

### `__index__`

`__index__(self: Self) -> Int`

Return self converted to an integer, if self is suitable for use as an index into a list.

**Returns:**

The corresponding Int value.