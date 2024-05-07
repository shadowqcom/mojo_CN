# index

Implements `StaticIntTuple` which is commonly used to represent N-D indices.

You can import these APIs from the `utils` package. For example:

```
from utils.index import StaticIntTuple
```

**Aliases:**

- ​`mlir_bool = scalar<bool>`

## `StaticIntTuple`

A base struct that implements size agnostic index functions.

**Parameters:**

- ​**size** (`Int`): The size of the tuple.

**Fields:**

- ​**data** (`StaticTuple[Int, size]`): The underlying storage of the tuple value.

**Implemented traits:**

`AnyType`, `Copyable`, `EqualityComparable`, `Movable`, `Sized`, `Stringable`

**Methods:**

### `__init__`

`__init__() -> Self`

Constructs a static int tuple of the given size.

**Returns:**

The constructed tuple.

`__init__(value: index) -> Self`

Constructs a sized 1 static int tuple of given the element value.

**Args:**

- ​**value** (`index`): The initial value.

**Returns:**

The constructed tuple.

`__init__(elems: Tuple[Int, Int]) -> Self`

Constructs a static int tuple given a tuple of integers.

**Args:**

- ​**elems** (`Tuple[Int, Int]`): The tuple to copy from.

**Returns:**

The constructed tuple.

`__init__(elems: Tuple[Int, Int, Int]) -> Self`

Constructs a static int tuple given a tuple of integers.

**Args:**

- ​**elems** (`Tuple[Int, Int, Int]`): The tuple to copy from.

**Returns:**

The constructed tuple.

`__init__(elems: Tuple[Int, Int, Int, Int]) -> Self`

Constructs a static int tuple given a tuple of integers.

**Args:**

- ​**elems** (`Tuple[Int, Int, Int, Int]`): The tuple to copy from.

**Returns:**

The constructed tuple.

`__init__(*elems: Int) -> Self`

Constructs a static int tuple given a set of arguments.

**Args:**

- ​**elems** (`*Int`): The elements to construct the tuple.

**Returns:**

The constructed tuple.

`__init__(elem: Int) -> Self`

Constructs a static int tuple given a set of arguments.

**Args:**

- ​**elem** (`Int`): The elem to splat into the tuple.

**Returns:**

The constructed tuple.

`__init__(values: VariadicList[Int]) -> Self`

Creates a tuple constant using the specified values.

**Args:**

- ​**values** (`VariadicList[Int]`): The list of values.

**Returns:**

A tuple with the values filled in.

### `__getitem__`

`__getitem__[intable: Intable](self: Self, index: intable) -> Int`

Gets an element from the tuple by index.

**Parameters:**

- ​**intable** (`Intable`): The intable type.

**Args:**

- ​**index** (`intable`): The element index.

**Returns:**

The tuple element value.

### `__setitem__`

`__setitem__[index: Int](inout self: Self, val: Int)`

Sets an element in the tuple at the given static index.

**Parameters:**

- ​**index** (`Int`): The element index.

**Args:**

- ​**val** (`Int`): The value to store.

`__setitem__[intable: Intable](inout self: Self, index: intable, val: Int)`

Sets an element in the tuple at the given index.

**Parameters:**

- ​**intable** (`Intable`): The intable type.

**Args:**

- ​**index** (`intable`): The element index.
- ​**val** (`Int`): The value to store.

### `__lt__`

`__lt__(self: Self, rhs: Self) -> Bool`

Compares this tuple to another tuple using LT comparison.

A tuple is less-than another tuple if all corresponding elements of lhs is less than rhs.

Note: This is **not** a lexical comparison.

**Args:**

- ​**rhs** (`Self`): Right hand side tuple.

**Returns:**

The comparison result.

### `__le__`

`__le__(self: Self, rhs: Self) -> Bool`

Compares this tuple to another tuple using LE comparison.

A tuple is less-or-equal than another tuple if all corresponding elements of lhs is less-or-equal than rhs.

Note: This is **not** a lexical comparison.

**Args:**

- ​**rhs** (`Self`): Right hand side tuple.

**Returns:**

The comparison result.

### `__eq__`

`__eq__(self: Self, rhs: Self) -> Bool`

Compares this tuple to another tuple for equality.

The tuples are equal if all corresponding elements are equal.

**Args:**

- ​**rhs** (`Self`): The other tuple.

**Returns:**

The comparison result.

### `__ne__`

`__ne__(self: Self, rhs: Self) -> Bool`

Compares this tuple to another tuple for non-equality.

The tuples are non-equal if at least one element of LHS isn't equal to the corresponding element from RHS.

**Args:**

- ​**rhs** (`Self`): The other tuple.

**Returns:**

The comparison result.

### `__gt__`

`__gt__(self: Self, rhs: Self) -> Bool`

Compares this tuple to another tuple using GT comparison.

A tuple is greater-than than another tuple if all corresponding elements of lhs is greater-than than rhs.

Note: This is **not** a lexical comparison.

**Args:**

- ​**rhs** (`Self`): Right hand side tuple.

**Returns:**

The comparison result.

### `__ge__`

`__ge__(self: Self, rhs: Self) -> Bool`

Compares this tuple to another tuple using GE comparison.

A tuple is greater-or-equal than another tuple if all corresponding elements of lhs is greater-or-equal than rhs.

Note: This is **not** a lexical comparison.

**Args:**

- ​**rhs** (`Self`): Right hand side tuple.

**Returns:**

The comparison result.

### `__add__`

`__add__(self: Self, rhs: Self) -> Self`

Performs element-wise integer add.

**Args:**

- ​**rhs** (`Self`): Right hand side operand.

**Returns:**

The resulting index tuple.

### `__sub__`

`__sub__(self: Self, rhs: Self) -> Self`

Performs element-wise integer subtract.

**Args:**

- ​**rhs** (`Self`): Right hand side operand.

**Returns:**

The resulting index tuple.

### `__mul__`

`__mul__(self: Self, rhs: Self) -> Self`

Performs element-wise integer multiply.

**Args:**

- ​**rhs** (`Self`): Right hand side operand.

**Returns:**

The resulting index tuple.

### `__floordiv__`

`__floordiv__(self: Self, rhs: Self) -> Self`

Performs element-wise integer floor division.

**Args:**

- ​**rhs** (`Self`): Right hand side operand.

**Returns:**

The resulting index tuple.

### `__len__`

`__len__(self: Self) -> Int`

Returns the size of the tuple.

**Returns:**

The tuple size.

### `as_tuple`

`as_tuple(self: Self) -> StaticTuple[Int, size]`

Converts this StaticIntTuple to StaticTuple.

**Returns:**

The corresponding StaticTuple object.

### `flattened_length`

`flattened_length(self: Self) -> Int`

Returns the flattened length of the tuple.

**Returns:**

The flattened length of the tuple.

### `remu`

`remu(self: Self, rhs: Self) -> Self`

Performs element-wise integer unsigned modulo.

**Args:**

- ​**rhs** (`Self`): Right hand side operand.

**Returns:**

The resulting index tuple.

### `__str__`

`__str__(self: Self) -> String`

Get the tuple as a string.

**Returns:**

A string representation.

## `Index`

`Index[T0: Intable](x: T0) -> StaticIntTuple[1]`

Constructs a 1-D Index from the given value.

**Parameters:**

- ​**T0** (`Intable`): The type of the 1st argument.

**Args:**

- ​**x** (`T0`): The initial value.

**Returns:**

The constructed StaticIntTuple.

`Index[T0: Intable, T1: Intable](x: T0, y: T1) -> StaticIntTuple[2]`

Constructs a 2-D Index from the given values.

**Parameters:**

- ​**T0** (`Intable`): The type of the 1st argument.
- ​**T1** (`Intable`): The type of the 2nd argument.

**Args:**

- ​**x** (`T0`): The 1st initial value.
- ​**y** (`T1`): The 2nd initial value.

**Returns:**

The constructed StaticIntTuple.

`Index[T0: Intable, T1: Intable, T2: Intable](x: T0, y: T1, z: T2) -> StaticIntTuple[3]`

Constructs a 3-D Index from the given values.

**Parameters:**

- ​**T0** (`Intable`): The type of the 1st argument.
- ​**T1** (`Intable`): The type of the 2nd argument.
- ​**T2** (`Intable`): The type of the 3rd argument.

**Args:**

- ​**x** (`T0`): The 1st initial value.
- ​**y** (`T1`): The 2nd initial value.
- ​**z** (`T2`): The 3nd initial value.

**Returns:**

The constructed StaticIntTuple.

`Index[T0: Intable, T1: Intable, T2: Intable, T3: Intable](x: T0, y: T1, z: T2, w: T3) -> StaticIntTuple[4]`

Constructs a 4-D Index from the given values.

**Parameters:**

- ​**T0** (`Intable`): The type of the 1st argument.
- ​**T1** (`Intable`): The type of the 2nd argument.
- ​**T2** (`Intable`): The type of the 3rd argument.
- ​**T3** (`Intable`): The type of the 4th argument.

**Args:**

- ​**x** (`T0`): The 1st initial value.
- ​**y** (`T1`): The 2nd initial value.
- ​**z** (`T2`): The 3nd initial value.
- ​**w** (`T3`): The 4th initial value.

**Returns:**

The constructed StaticIntTuple.

`Index[T0: Intable, T1: Intable, T2: Intable, T3: Intable, T4: Intable](x: T0, y: T1, z: T2, w: T3, v: T4) -> StaticIntTuple[5]`

Constructs a 5-D Index from the given values.

**Parameters:**

- ​**T0** (`Intable`): The type of the 1st argument.
- ​**T1** (`Intable`): The type of the 2nd argument.
- ​**T2** (`Intable`): The type of the 3rd argument.
- ​**T3** (`Intable`): The type of the 4th argument.
- ​**T4** (`Intable`): The type of the 5th argument.

**Args:**

- ​**x** (`T0`): The 1st initial value.
- ​**y** (`T1`): The 2nd initial value.
- ​**z** (`T2`): The 3nd initial value.
- ​**w** (`T3`): The 4th initial value.
- ​**v** (`T4`): The 5th initial value.

**Returns:**

The constructed StaticIntTuple.

## `product`

`product[size: Int](tuple: StaticIntTuple[size], end_idx: Int) -> Int`

Computes a product of values in the tuple up to the given index.

**Parameters:**

- ​**size** (`Int`): The tuple size.

**Args:**

- ​**tuple** (`StaticIntTuple[size]`): The tuple to get a product of.
- ​**end\_idx** (`Int`): The end index.

**Returns:**

The product of all tuple elements in the given range.

`product[size: Int](tuple: StaticIntTuple[size], start_idx: Int, end_idx: Int) -> Int`

Computes a product of values in the tuple in the given index range.

**Parameters:**

- ​**size** (`Int`): The tuple size.

**Args:**

- ​**tuple** (`StaticIntTuple[size]`): The tuple to get a product of.
- ​**start\_idx** (`Int`): The start index of the range.
- ​**end\_idx** (`Int`): The end index of the range.

**Returns:**

The product of all tuple elements in the given range.