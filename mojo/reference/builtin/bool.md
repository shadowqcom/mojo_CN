# bool

Implements the Bool class.

These are Mojo built-ins, so you don't need to import them.

## `Bool`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#bool "Direct link to bool")

The primitive Bool scalar value used in Mojo.

**Fields:**

- ​**value** (`scalar<bool>`): The underlying storage of the boolean value.

**Implemented traits:**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Movable`, `Stringable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__init__ "Direct link to __init__")

`__init__(value: i1) -> Self`

Construct a Bool value given a \_\_mlir\_type.i1 value.

**Args:**

- ​**value** (`i1`): The initial \_\_mlir\_type.i1 value.

**Returns:**

The constructed Bool value.

`__init__[width: Int](value: SIMD[bool, width]) -> Self`

Construct a Bool value given a SIMD value.

If there is more than a single element in the SIMD value, then value is reduced using the and operator.

**Parameters:**

- ​**width** (`Int`): SIMD width.

**Args:**

- ​**value** (`SIMD[bool, width]`): The initial SIMD value.

**Returns:**

The constructed Bool value.

### `__bool__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__bool__ "Direct link to __bool__")

`__bool__(self: Self) -> Self`

Convert to Bool.

**Returns:**

This value.

### `__mlir_i1__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__mlir_i1__ "Direct link to __mlir_i1__")

`__mlir_i1__(self: Self) -> i1`

Convert this Bool to \_\_mlir\_type.i1.

This method is a special hook used by the compiler to test boolean objects in control flow conditions. It should be implemented by Bool but not other general boolean convertible types (they should implement `__bool__` instead).

**Returns:**

The underlying value for the Bool.

### `__invert__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__invert__ "Direct link to __invert__")

`__invert__(self: Self) -> Self`

Inverts the Bool value.

**Returns:**

True if the object is false and False otherwise.

### `__eq__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__eq__ "Direct link to __eq__")

`__eq__(self: Self, rhs: Self) -> Self`

Compare this Bool to RHS.

Performs an equality comparison between the Bool value and the argument. This method gets invoked when a user uses the `==` infix operator.

**Args:**

- ​**rhs** (`Self`): The rhs value of the equality statement.

**Returns:**

True if the two values match and False otherwise.

### `__ne__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__ne__ "Direct link to __ne__")

`__ne__(self: Self, rhs: Self) -> Self`

Compare this Bool to RHS.

Performs a non-equality comparison between the Bool value and the argument. This method gets invoked when a user uses the `!=` infix operator.

**Args:**

- ​**rhs** (`Self`): The rhs value of the non-equality statement.

**Returns:**

False if the two values do match and True otherwise.

### `__and__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__and__ "Direct link to __and__")

`__and__(self: Self, rhs: Self) -> Self`

Compute `self & rhs`.

Bitwise and's the Bool value with the argument. This method gets invoked when a user uses the `and` infix operator.

**Args:**

- ​**rhs** (`Self`): The rhs value of the and statement.

**Returns:**

`self & rhs`.

### `__or__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__or__ "Direct link to __or__")

`__or__(self: Self, rhs: Self) -> Self`

Compute `self | rhs`.

Bitwise or's the Bool value with the argument. This method gets invoked when a user uses the `or` infix operator.

**Args:**

- ​**rhs** (`Self`): The rhs value of the or statement.

**Returns:**

`self | rhs`.

### `__xor__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__xor__ "Direct link to __xor__")

`__xor__(self: Self, rhs: Self) -> Self`

Compute `self ^ rhs`.

Bitwise Xor's the Bool value with the argument. This method gets invoked when a user uses the `^` infix operator.

**Args:**

- ​**rhs** (`Self`): The rhs value of the xor statement.

**Returns:**

`self ^ rhs`.

### `__rand__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__rand__ "Direct link to __rand__")

`__rand__(self: Self, value: Self) -> Self`

Return `value & self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value & self`.

### `__ror__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__ror__ "Direct link to __ror__")

`__ror__(self: Self, value: Self) -> Self`

Return `value | self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value | self`.

### `__rxor__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__rxor__ "Direct link to __rxor__")

`__rxor__(self: Self, value: Self) -> Self`

Return `value ^ self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value ^ self`.

### `__str__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__str__ "Direct link to __str__")

`__str__(self: Self) -> String`

Get the bool as a string.

**Returns:**

A string representation.

## `Boolable`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#boolable "Direct link to boolable")

The `Boolable` trait describes a type that can be converted to a bool.

This trait requires the type to implement the `__bool__()` method. For example:

```
@valuestruct Foo(Boolable):    var val: Bool    fn __bool__(self) -> Bool:        return self.val
```

**Implemented traits:**

`AnyType`

**Methods:**

### `__del__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__del__ "Direct link to __del__")

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

### `__bool__`[​](https://docs.modular.com/mojo/stdlib/builtin/bool#__bool__-1 "Direct link to __bool__-1")

`__bool__(self: T) -> Bool`

Get the boolean representation of the value.

**Returns:**

The boolean representation of the value.