# tensor\_spec

Implements the `TensorSpec` type.

You can import these APIs from the `tensor` package. For example:

```
from tensor import TensorSpec
```

## `TensorSpec`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#tensorspec "Direct link to tensorspec")

A space efficient representation of a tensor shape and dtype. This struct implements value semantics and owns its underlying data.

**Fields:**

- ​**shape** (`TensorShape`): The underlying shape of the specification.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Movable`, `Stringable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#__init__ "Direct link to __init__")

`__init__(inout self: Self)`

Default initializer for TensorShape.

`__init__(inout self: Self, type: DType, *shapes: Int)`

Initializes a Tensorspec from the dtype and shapes provided.

**Args:**

- ​**type** (`DType`): The dtype of the specification.
- ​**shapes** (`*Int`): The shapes to initialize the shape with.

`__init__(inout self: Self, type: DType, shapes: VariadicList[Int])`

Initializes a Tensorspec from the dtype and shapes provided.

**Args:**

- ​**type** (`DType`): The dtype of the specification.
- ​**shapes** (`VariadicList[Int]`): The shapes to initialize the shape with.

`__init__(inout self: Self, type: DType, shapes: List[Int])`

Initializes a Tensorspec from the dtype and shapes provided.

**Args:**

- ​**type** (`DType`): The dtype of the specification.
- ​**shapes** (`List[Int]`): The shapes to initialize the shape with.

`__init__(inout self: Self, type: DType, owned shape: TensorShape)`

Initializes a Tensorspec from the dtype and shape provided.

**Args:**

- ​**type** (`DType`): The dtype of the specification.
- ​**shape** (`TensorShape`): The shapes to initialize the shape with.

### `__copyinit__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#__copyinit__ "Direct link to __copyinit__")

`__copyinit__(inout self: Self, other: Self)`

Creates a deep copy of an existing spec.

**Args:**

- ​**other** (`Self`): The spec to copy.

### `__moveinit__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#__moveinit__ "Direct link to __moveinit__")

`__moveinit__(inout self: Self, owned existing: Self)`

Move initializer for the spec.

**Args:**

- ​**existing** (`Self`): The spec to move.

### `__getitem__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#__getitem__ "Direct link to __getitem__")

`__getitem__(self: Self, index: Int) -> Int`

Gets the dimension at the specified index.

**Args:**

- ​**index** (`Int`): The dimension index.

**Returns:**

The dimension at the specified index.

### `__eq__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#__eq__ "Direct link to __eq__")

`__eq__(self: Self, other: Self) -> Bool`

Returns True if the two values are the same and False otherwise.

**Args:**

- ​**other** (`Self`): The other TensorSpec to compare against.

**Returns:**

True if the two specs are the same and False otherwise.

### `__ne__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#__ne__ "Direct link to __ne__")

`__ne__(self: Self, other: Self) -> Bool`

Returns True if the two values are not the same and False otherwise.

**Args:**

- ​**other** (`Self`): The other TensorSpec to compare against.

**Returns:**

True if the two specs are the not the same and False otherwise.

### `rank`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#rank "Direct link to rank")

`rank(self: Self) -> Int`

Gets the rank of the spec.

**Returns:**

The rank of the spec.

### `dtype`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#dtype "Direct link to dtype")

`dtype(self: Self) -> DType`

Gets the DType of the spec.

**Returns:**

The DType of the spec.

### `num_elements`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#num_elements "Direct link to num_elements")

`num_elements(self: Self) -> Int`

Gets the total number of elements in the spec.

**Returns:**

The total number of elements in the spec.

### `bytecount`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#bytecount "Direct link to bytecount")

`bytecount(self: Self) -> Int`

Gets the total byte count.

**Returns:**

The total byte count.

### `__repr__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#__repr__ "Direct link to __repr__")

`__repr__(self: Self) -> String`

Returns the string representation of the spec.

**Returns:**

The string representation of the spec.

### `__str__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#__str__ "Direct link to __str__")

`__str__(self: Self) -> String`

Returns the string representation of the spec.

**Returns:**

The string representation of the spec.

### `from_bytes`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_spec#from_bytes "Direct link to from_bytes")

`static from_bytes(data: DTypePointer[si8, 0]) -> Self`

Create a TensorSpec object from serialized bytes.

**Args:**

- ​**data** (`DTypePointer[si8, 0]`): DTypePointer to serialized bytes.

**Returns:**

Given bytes as TensorSpec.