# static\_tuple

Implements StaticTuple, a statically-sized uniform container.

You can import these APIs from the `utils` package. For example:

```
from utils.static_tuple import StaticTuple
```

## `StaticTuple`[​](https://docs.modular.com/mojo/stdlib/utils/static_tuple#statictuple "Direct link to statictuple")

A statically sized tuple type which contains elements of homogeneous types.

**Parameters:**

- ​**element\_type** (`AnyRegType`): The type of the elements in the tuple.
- ​**size** (`Int`): The size of the tuple.

**Aliases:**

- ​`type = array<#lit.struct.extract<:@stdlib::@builtin::@int::@Int size, "value">, element_type>`

**Fields:**

- ​**array** (`array<#lit.struct.extract<:@stdlib::@builtin::@int::@Int size, "value">, element_type>`): The underlying storage for the static tuple.

**Implemented traits:**

`AnyType`, `Copyable`, `Movable`, `Sized`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/utils/static_tuple#__init__ "Direct link to __init__")

`__init__() -> Self`

Constructs an empty (undefined) tuple.

**Returns:**

The tuple.

`__init__(*elems: element_type) -> Self`

Constructs a static tuple given a set of arguments.

**Args:**

- ​**elems** (`*element_type`): The element types.

**Returns:**

The tuple.

`__init__(values: VariadicList[element_type]) -> Self`

Creates a tuple constant using the specified values.

**Args:**

- ​**values** (`VariadicList[element_type]`): The list of values.

**Returns:**

A tuple with the values filled in.

### `__getitem__`[​](https://docs.modular.com/mojo/stdlib/utils/static_tuple#__getitem__ "Direct link to __getitem__")

`__getitem__[index: Int](self: Self) -> element_type`

Returns the value of the tuple at the given index.

**Parameters:**

- ​**index** (`Int`): The index into the tuple.

**Returns:**

The value at the specified position.

`__getitem__[intable: Intable](self: Self, index: intable) -> element_type`

Returns the value of the tuple at the given dynamic index.

**Parameters:**

- ​**intable** (`Intable`): The intable type.

**Args:**

- ​**index** (`intable`): The index into the tuple.

**Returns:**

The value at the specified position.

### `__setitem__`[​](https://docs.modular.com/mojo/stdlib/utils/static_tuple#__setitem__ "Direct link to __setitem__")

`__setitem__[index: Int](inout self: Self, val: element_type)`

Stores a single value into the tuple at the specified index.

**Parameters:**

- ​**index** (`Int`): The index into the tuple.

**Args:**

- ​**val** (`element_type`): The value to store.

`__setitem__[intable: Intable](inout self: Self, index: intable, val: element_type)`

Stores a single value into the tuple at the specified dynamic index.

**Parameters:**

- ​**intable** (`Intable`): The intable type.

**Args:**

- ​**index** (`intable`): The index into the tuple.
- ​**val** (`element_type`): The value to store.

### `__len__`[​](https://docs.modular.com/mojo/stdlib/utils/static_tuple#__len__ "Direct link to __len__")

`__len__(self: Self) -> Int`

Returns the length of the array. This is a known constant value.

**Returns:**

The size of the list.

### `as_ptr`[​](https://docs.modular.com/mojo/stdlib/utils/static_tuple#as_ptr "Direct link to as_ptr")

`as_ptr(inout self: Self) -> Pointer[element_type, 0]`

Get a mutable pointer to the elements contained by this tuple.

**Returns:**

A pointer to the elements contained by this tuple.