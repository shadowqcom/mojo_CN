# int

Implements the Int class.

These are Mojo built-ins, so you don't need to import them.

## `Int`

This type represents an integer value.

**Aliases:**

- ​`MAX = int[stdlib::builtin::int::Intable][SIMD[index, 1]](store_to_mem(apply(:!lit.signature<("elems": !kgen.variadic<@stdlib::@builtin::@simd::@SIMD<:@stdlib::@builtin::@dtype::@DType {:dtype index}, :@stdlib::@builtin::@int::@Int {1}>> borrow|var) -> !lit.declref<@stdlib::@builtin::@simd::@SIMD<:@stdlib::@builtin::@dtype::@DType {:dtype index}, :@stdlib::@builtin::@int::@Int {1}>>> @stdlib::@builtin::@simd::@SIMD::@"__init__(stdlib::builtin::simd::SIMD[$0, {1}]*)"<:@stdlib::@builtin::@dtype::@DType {:dtype index}, :@stdlib::@builtin::@int::@Int {1}>, [apply(:!lit.signature<() -> !lit.declref<@stdlib::@builtin::@simd::@SIMD<:@stdlib::@builtin::@dtype::@DType {:dtype index}, :@stdlib::@builtin::@int::@Int {1}>>> @stdlib::@builtin::@simd::@"_inf[stdlib::builtin::dtype::DType]()"<:@stdlib::@builtin::@dtype::@DType {:dtype index}>)])))`: Returns the maximum integer value.

- ​`MIN = int[stdlib::builtin::int::Intable][SIMD[index, 1]](store_to_mem(apply(:!lit.signature<("elems": !kgen.variadic<@stdlib::@builtin::@simd::@SIMD<:@stdlib::@builtin::@dtype::@DType {:dtype index}, :@stdlib::@builtin::@int::@Int {1}>> borrow|var) -> !lit.declref<@stdlib::@builtin::@simd::@SIMD<:@stdlib::@builtin::@dtype::@DType {:dtype index}, :@stdlib::@builtin::@int::@Int {1}>>> @stdlib::@builtin::@simd::@SIMD::@"__init__(stdlib::builtin::simd::SIMD[$0, {1}]*)"<:@stdlib::@builtin::@dtype::@DType {:dtype index}, :@stdlib::@builtin::@int::@Int {1}>, [apply(:!lit.signature<() -> !lit.declref<@stdlib::@builtin::@simd::@SIMD<:@stdlib::@builtin::@dtype::@DType {:dtype index}, :@stdlib::@builtin::@int::@Int {1}>>> @stdlib::@builtin::@simd::@"_neginf[stdlib::builtin::dtype::DType]()"<:@stdlib::@builtin::@dtype::@DType {:dtype index}>)])))`: Returns the minimum value of type.

**Fields:**

- ​**value** (`index`): The underlying storage for the integer value.

**Implemented traits:**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Hashable`, `Intable`, `KeyElement`, `Movable`, `Stringable`

**Methods:**

### `__init__`

`__init__() -> Self`

Default constructor.

**Returns:**

The constructed Int object.

`__init__(value: Self) -> Self`

Construct Int from another Int value.

**Args:**

- ​**value** (`Self`): The init value.

**Returns:**

The constructed Int object.

`__init__(value: index) -> Self`

Construct Int from the given index value.

**Args:**

- ​**value** (`index`): The init value.

**Returns:**

The constructed Int object.

`__init__(value: scalar<si16>) -> Self`

Construct Int from the given Int16 value.

**Args:**

- ​**value** (`scalar<si16>`): The init value.

**Returns:**

The constructed Int object.

`__init__(value: scalar<si32>) -> Self`

Construct Int from the given Int32 value.

**Args:**

- ​**value** (`scalar<si32>`): The init value.

**Returns:**

The constructed Int object.

`__init__(value: scalar<si64>) -> Self`

Construct Int from the given Int64 value.

**Args:**

- ​**value** (`scalar<si64>`): The init value.

**Returns:**

The constructed Int object.

`__init__(value: scalar<index>) -> Self`

Construct Int from the given Index value.

**Args:**

- ​**value** (`scalar<index>`): The init value.

**Returns:**

The constructed Int object.

`__init__(value: IntLiteral) -> Self`

Construct Int from the given IntLiteral value.

**Args:**

- ​**value** (`IntLiteral`): The init value.

**Returns:**

The constructed Int object.

### `__bool__`

`__bool__(self: Self) -> Bool`

Convert this Int to Bool.

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

Compare this Int to the RHS using LT comparison.

**Args:**

- ​**rhs** (`Self`): The other Int to compare against.

**Returns:**

True if this Int is less-than the RHS Int and False otherwise.

### `__le__`

`__le__(self: Self, rhs: Self) -> Bool`

Compare this Int to the RHS using LE comparison.

**Args:**

- ​**rhs** (`Self`): The other Int to compare against.

**Returns:**

True if this Int is less-or-equal than the RHS Int and False otherwise.

### `__eq__`

`__eq__(self: Self, rhs: Self) -> Bool`

Compare this Int to the RHS using EQ comparison.

**Args:**

- ​**rhs** (`Self`): The other Int to compare against.

**Returns:**

True if this Int is equal to the RHS Int and False otherwise.

### `__ne__`

`__ne__(self: Self, rhs: Self) -> Bool`

Compare this Int to the RHS using NE comparison.

**Args:**

- ​**rhs** (`Self`): The other Int to compare against.

**Returns:**

True if this Int is non-equal to the RHS Int and False otherwise.

### `__gt__`

`__gt__(self: Self, rhs: Self) -> Bool`

Compare this Int to the RHS using GT comparison.

**Args:**

- ​**rhs** (`Self`): The other Int to compare against.

**Returns:**

True if this Int is greater-than the RHS Int and False otherwise.

### `__ge__`

`__ge__(self: Self, rhs: Self) -> Bool`

Compare this Int to the RHS using GE comparison.

**Args:**

- ​**rhs** (`Self`): The other Int to compare against.

**Returns:**

True if this Int is greater-or-equal than the RHS Int and False otherwise.

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

### `__truediv__`

`__truediv__(self: Self, rhs: Self) -> SIMD[f64, 1]`

Return the floating point division of `self` and `rhs`.

**Args:**

- ​**rhs** (`Self`): The value to divide on.

**Returns:**

`float(self)/float(rhs)` value.

### `__floordiv__`

`__floordiv__(self: Self, rhs: Self) -> Self`

Return the division of `self` and `rhs` rounded down to the nearest integer.

**Args:**

- ​**rhs** (`Self`): The value to divide on.

**Returns:**

`floor(self/rhs)` value.

### `__mod__`

`__mod__(self: Self, rhs: Self) -> Self`

Return the remainder of self divided by rhs.

**Args:**

- ​**rhs** (`Self`): The value to divide on.

**Returns:**

The remainder of dividing self by rhs.

### `__pow__`

`__pow__(self: Self, rhs: Self) -> Self`

Return pow(self, rhs).

Computes the power of an integer using the Russian Peasant Method.

**Args:**

- ​**rhs** (`Self`): The RHS value.

**Returns:**

The value of `pow(self, rhs)`.

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

### `__rmod__`

`__rmod__(self: Self, value: Self) -> Self`

Return `value % self`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`value % self`.

### `__rpow__`

`__rpow__(self: Self, value: Self) -> Self`

Return `pow(value,self)`.

**Args:**

- ​**value** (`Self`): The other value.

**Returns:**

`pow(value,self)`.

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

### `__itruediv__`

`__itruediv__(inout self: Self, rhs: Self)`

Compute `self / rhs`, convert to int, and save the result in self.

Since `floor(self / rhs)` is equivalent to `self // rhs`, this yields the same as `__ifloordiv__`.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__ifloordiv__`

`__ifloordiv__(inout self: Self, rhs: Self)`

Compute `self // rhs` and save the result in self.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__imod__`

`__imod__(inout self: Self, rhs: Self)`

Compute `self % rhs` and save the result in self.

**Args:**

- ​**rhs** (`Self`): The RHS value.

### `__ipow__`

`__ipow__(inout self: Self, rhs: Self)`

Compute `pow(self, rhs)` and save the result in self.

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

`__int__(self: Self) -> Self`

Gets the integral value (this is an identity function for Int).

**Returns:**

The value as an integer.

### `__str__`

`__str__(self: Self) -> String`

Get the integer as a string.

**Returns:**

A string representation.

### `__mlir_index__`

`__mlir_index__(self: Self) -> index`

Convert to index.

**Returns:**

The corresponding \_\_mlir\_type.index value.

### `__index__`

`__index__(self: Self) -> Self`

Return self converted to an integer, if self is suitable for use as an index into a list.

For Int type this is simply the value.

**Returns:**

The corresponding Int value.

### `__hash__`

`__hash__(self: Self) -> Self`

Hash the int using builtin hash.

**Returns:**

A 64-bit hash value. This value is _not_ suitable for cryptographic uses. Its intended usage is for data structures. See the `hash` builtin documentation for more details.

## `Intable`

The `Intable` trait describes a type that can be converted to an Int.

Any type that conforms to `Intable` or [`IntableRaising`](https://docs.modular.com/mojo/stdlib/builtin/int.html#intableraising) works with the built-in [`int()`](https://docs.modular.com/mojo/stdlib/builtin/int.html#int-1) function.

This trait requires the type to implement the `__int__()` method. For example:

```
@valuestruct Foo(Intable):    var i: Int    fn __int__(self) -> Int:        return self.i
```

Now you can use the `int()` function to convert a `Foo` to an `Int`:

```
var foo = Foo(42)print(int(foo) == 42)
```

```
True
```

If the `__int__()` method can raise an error, use the [`IntableRaising`](https://docs.modular.com/mojo/stdlib/builtin/int.html#intableraising) trait instead.

**Implemented traits:**

`AnyType`

**Methods:**

### `__del__`

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

### `__int__`

`__int__(self: T) -> Int`

Get the integral representation of the value.

**Returns:**

The integral representation of the value.

## `IntableRaising`

The `IntableRaising` trait describes a type can be converted to an Int, but the conversion might raise an error.

Any type that conforms to [`Intable`](https://docs.modular.com/mojo/stdlib/builtin/int.html#intable) or `IntableRaising` works with the built-in [`int()`](https://docs.modular.com/mojo/stdlib/builtin/int.html#int-1) function.

This trait requires the type to implement the `__int__()` method, which can raise an error. For example:

```
@valuestruct Foo(IntableRaising):    var i: Int    fn __int__(self) raises -> Int:        return self.i
```

Now you can use the `int()` function to convert a `Foo` to an `Int`:

```
fn main() raises:    var x = Foo(42)    print(int(x) == 42)
```

```
True
```

**Implemented traits:**

`AnyType`

**Methods:**

### `__del__`

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

### `__int__`

`__int__(self: T) -> Int`

Get the integral representation of the value.

Raises: If the type does not have an integral representation.

**Returns:**

The integral representation of the type.

## `int`

`int[T: Intable](value: T) -> Int`

Get the Int representation of the value.

**Parameters:**

- ​**T** (`Intable`): The Intable type.

**Args:**

- ​**value** (`T`): The object to get the integral representation of.

**Returns:**

The integral representation of the value.

`int[T: IntableRaising](value: T) -> Int`

Get the Int representation of the value.

Raises: If the type does not have an integral representation.

**Parameters:**

- ​**T** (`IntableRaising`): The Intable type.

**Args:**

- ​**value** (`T`): The object to get the integral representation of.

**Returns:**

The integral representation of the value.