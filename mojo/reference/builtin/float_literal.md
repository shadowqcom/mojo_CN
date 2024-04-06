# float\_literal

Implements the FloatLiteral class.

These are Mojo built-ins, so you don't need to import them.

## `FloatLiteral`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#floatliteral "Direct link to floatliteral")

Mojo floating point literal type.

**Aliases:**

- ​`fp_type = !kgen.float_literal`

- ​`nan = #kgen.float_literal<nan>`

- ​`infinity = #kgen.float_literal<inf>`

- ​`negative_infinity = #kgen.float_literal<neg_inf>`

- ​`negative_zero = #kgen.float_literal<neg_zero>`

**Fields:**

- ​**value** (`!kgen.float_literal`): The underlying storage for the floating point value.

**Implemented traits:**

`AnyType`, `Boolable`, `Copyable`, `EqualityComparable`, `Intable`, `Movable`, `Stringable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__init__ "Direct link to __init__")

`__init__(value: Self) -> Self`

Forwarding constructor.

**Args:**

- ​**value** (`Self`): The FloatLiteral value.

**Returns:**

The value.

`__init__(value: !kgen.float_literal) -> Self`

Create a FloatLiteral value from a kgen.float\_literal value.

**Args:**

- ​**value** (`!kgen.float_literal`): The float value.

**Returns:**

A FloatLiteral value.

`__init__(value: IntLiteral) -> Self`

Convert an IntLiteral to a double value.

**Args:**

- ​**value** (`IntLiteral`): The IntLiteral value.

**Returns:**

The integer value as a double.

### `__bool__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__bool__ "Direct link to __bool__")

`__bool__(self: Self) -> Bool`

A FloatLiteral value is true if it is non-zero.

**Returns:**

True if non-zero.

### `__neg__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__neg__ "Direct link to __neg__")

`__neg__(self: Self) -> Self`

Return the negation of the double value.

**Returns:**

The negated double value.

### `__lt__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__lt__ "Direct link to __lt__")

`__lt__(self: Self, rhs: Self) -> Bool`

Less than comparison.

**Args:**

- ​**rhs** (`Self`): The value to compare.

**Returns:**

True if this value is less than `rhs`.

### `__le__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__le__ "Direct link to __le__")

`__le__(self: Self, rhs: Self) -> Bool`

Less than or equal to comparison.

**Args:**

- ​**rhs** (`Self`): The value to compare.

**Returns:**

True if this value is less than or equal to `rhs`.

### `__eq__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__eq__ "Direct link to __eq__")

`__eq__(self: Self, rhs: Self) -> Bool`

Compare for equality.

**Args:**

- ​**rhs** (`Self`): The value to compare.

**Returns:**

True if they are equal.

### `__ne__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__ne__ "Direct link to __ne__")

`__ne__(self: Self, rhs: Self) -> Bool`

Compare for inequality.

**Args:**

- ​**rhs** (`Self`): The value to compare.

**Returns:**

True if they are not equal.

### `__gt__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__gt__ "Direct link to __gt__")

`__gt__(self: Self, rhs: Self) -> Bool`

Greater than comparison.

**Args:**

- ​**rhs** (`Self`): The value to compare.

**Returns:**

True if this value is greater than `rhs`.

### `__ge__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__ge__ "Direct link to __ge__")

`__ge__(self: Self, rhs: Self) -> Bool`

Greater than or equal to comparison.

**Args:**

- ​**rhs** (`Self`): The value to compare.

**Returns:**

True if this value is greater than or equal to `rhs`.

### `__add__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__add__ "Direct link to __add__")

`__add__(self: Self, rhs: Self) -> Self`

Add two doubles.

**Args:**

- ​**rhs** (`Self`): The value to add.

**Returns:**

The sum of the two values.

### `__sub__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__sub__ "Direct link to __sub__")

`__sub__(self: Self, rhs: Self) -> Self`

Subtract two doubles.

**Args:**

- ​**rhs** (`Self`): The value to subtract.

**Returns:**

The difference of the two values.

### `__mul__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__mul__ "Direct link to __mul__")

`__mul__(self: Self, rhs: Self) -> Self`

Multiply two doubles.

**Args:**

- ​**rhs** (`Self`): The value to multiply.

**Returns:**

The product of the two values.

### `__truediv__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__truediv__ "Direct link to __truediv__")

`__truediv__(self: Self, rhs: Self) -> Self`

Divide two doubles.

**Args:**

- ​**rhs** (`Self`): The value to divide.

**Returns:**

The quotient of the two values.

### `__radd__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__radd__ "Direct link to __radd__")

`__radd__(self: Self, rhs: Self) -> Self`

Reversed addition operator.

**Args:**

- ​**rhs** (`Self`): The value to add.

**Returns:**

The sum of this and the given value.

### `__rsub__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__rsub__ "Direct link to __rsub__")

`__rsub__(self: Self, rhs: Self) -> Self`

Reversed subtraction operator.

**Args:**

- ​**rhs** (`Self`): The value to subtract from.

**Returns:**

The result of subtracting this from the given value.

### `__rmul__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__rmul__ "Direct link to __rmul__")

`__rmul__(self: Self, rhs: Self) -> Self`

Reversed multiplication operator.

**Args:**

- ​**rhs** (`Self`): The value to multiply.

**Returns:**

The product of the given number and this.

### `__rtruediv__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__rtruediv__ "Direct link to __rtruediv__")

`__rtruediv__(self: Self, rhs: Self) -> Self`

Reversed division.

**Args:**

- ​**rhs** (`Self`): The value to be divided by this.

**Returns:**

The result of dividing the given value by this.

### `__iadd__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__iadd__ "Direct link to __iadd__")

`__iadd__(inout self: Self, rhs: Self)`

In-place addition operator.

**Args:**

- ​**rhs** (`Self`): The value to add.

### `__isub__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__isub__ "Direct link to __isub__")

`__isub__(inout self: Self, rhs: Self)`

In-place subtraction operator.

**Args:**

- ​**rhs** (`Self`): The value to subtract.

### `__imul__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__imul__ "Direct link to __imul__")

`__imul__(inout self: Self, rhs: Self)`

In-place multiplication operator.

**Args:**

- ​**rhs** (`Self`): The value to multiply.

### `__itruediv__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__itruediv__ "Direct link to __itruediv__")

`__itruediv__(inout self: Self, rhs: Self)`

In-place division.

**Args:**

- ​**rhs** (`Self`): The value to divide.

### `__str__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__str__ "Direct link to __str__")

`__str__(self: Self) -> String`

Get the float as a string.

**Returns:**

A string representation.

### `__int_literal__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__int_literal__ "Direct link to __int_literal__")

`__int_literal__(self: Self) -> IntLiteral`

Casts the floating point value to an IntLiteral. If there is a fractional component, then the value is truncated towards zero.

Eg. `(4.5).__int_literal__()` returns `4`, and `(-3.7).__int_literal__()` returns `3`.

**Returns:**

The value as an integer.

### `__int__`[​](https://docs.modular.com/mojo/stdlib/builtin/float_literal#__int__ "Direct link to __int__")

`__int__(self: Self) -> Int`

Converts the FloatLiteral value to an Int. If there is a fractional component, then the value is truncated towards zero.

Eg. `(4.5).__int__()` returns `4`, and `(-3.7).__int__()` returns `3`.

**Returns:**

The value as an integer.

[

Previous

](https://docs.modular.com/mojo/stdlib/builtin/file)