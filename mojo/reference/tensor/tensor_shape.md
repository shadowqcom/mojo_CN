# tensor\_shape

Implements the `TensorShape` type.

You can import these APIs from the `tensor` package. For example:

```
from tensor import TensorShape
```

## `TensorShape`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#tensorshape "Direct link to tensorshape")

A space efficient representation of a tensor shape. This struct implements value semantics and owns its underlying data.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Movable`, `Stringable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#__init__ "Direct link to __init__")

`__init__(inout self: Self)`

Default initializer for TensorShape.

`__init__(inout self: Self, *shapes: Int)`

Initializes a TensorShape from the values provided.

**Args:**

- ​**shapes** (`*Int`): The shapes to initialize the shape with.

`__init__(inout self: Self, shapes: VariadicList[Int])`

Initializes a TensorShape from the values provided.

**Args:**

- ​**shapes** (`VariadicList[Int]`): The shapes to initialize the shape with.

`__init__(inout self: Self, shapes: List[Int])`

Initializes a TensorShape from the list provided.

**Args:**

- ​**shapes** (`List[Int]`): The list to initialize the shape with.

`__init__[rank: Int](inout self: Self, shapes: StaticIntTuple[rank])`

Initializes a TensorShape from the values provided.

**Parameters:**

- ​**rank** (`Int`): The rank.

**Args:**

- ​**shapes** (`StaticIntTuple[rank]`): The shapes to initialize the shape with.

### `__copyinit__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#__copyinit__ "Direct link to __copyinit__")

`__copyinit__(inout self: Self, other: Self)`

Creates a deep copy of an existing shape.

**Args:**

- ​**other** (`Self`): The shape to copy.

### `__moveinit__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#__moveinit__ "Direct link to __moveinit__")

`__moveinit__(inout self: Self, owned existing: Self)`

Move initializer for the shape.

**Args:**

- ​**existing** (`Self`): The shape to move.

### `__del__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#__del__ "Direct link to __del__")

`__del__(owned self: Self)`

Delete the shape and release any owned memory.

### `__getitem__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#__getitem__ "Direct link to __getitem__")

`__getitem__(self: Self, index: Int) -> Int`

Gets the dimension at the specified index.

**Args:**

- ​**index** (`Int`): The dimension index.

**Returns:**

The dimension at the specified index.

### `__eq__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#__eq__ "Direct link to __eq__")

`__eq__(self: Self, other: Self) -> Bool`

Returns True if the two values are the same and False otherwise.

**Args:**

- ​**other** (`Self`): The other TensorShape to compare against.

**Returns:**

True if the two shapes are the same and False otherwise.

### `__ne__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#__ne__ "Direct link to __ne__")

`__ne__(self: Self, other: Self) -> Bool`

Returns True if the two values are not the same and False otherwise.

**Args:**

- ​**other** (`Self`): The other TensorShape to compare against.

**Returns:**

True if the two shapes are the not the same and False otherwise.

### `rank`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#rank "Direct link to rank")

`rank(self: Self) -> Int`

Gets the rank of the shape.

**Returns:**

The rank of the shape.

### `num_elements`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#num_elements "Direct link to num_elements")

`num_elements(self: Self) -> Int`

Gets the total number of elements in the shape.

**Returns:**

The total number of elements in the shape.

### `__repr__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#__repr__ "Direct link to __repr__")

`__repr__(self: Self) -> String`

Returns the string representation of the shape.

**Returns:**

The string representation of the shape.

### `__str__`[​](https://docs.modular.com/mojo/stdlib/tensor/tensor_shape#__str__ "Direct link to __str__")

`__str__(self: Self) -> String`

Returns the string representation of the shape.

**Returns:**

The string representation of the shape.