# tuple

Implements the Tuple type.

These are Mojo built-ins, so you don't need to import them.

## `Tuple`

The type of a literal tuple expression.

A tuple consists of zero or more values, separated by commas.

**Parameters:**

- ​**Ts** (`*AnyRegType`): The elements type.

**Fields:**

- ​**storage** (`*Ts`): The underlying storage for the tuple.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `Movable`, `Sized`

**Methods:**

### `__init__`

`__init__(*args: Ts) -> Self`

Construct the tuple.

**Args:**

- ​**args** (`*Ts`): Initial values.

**Returns:**

Constructed tuple.

### `__copyinit__`

`__copyinit__(existing: Self) -> Self`

Copy construct the tuple.

**Returns:**

Constructed tuple.

### `__len__`

`__len__(self: Self) -> Int`

Get the number of elements in the tuple.

**Returns:**

The tuple length.

### `get`

`get[i: Int, T: AnyRegType](self: Self) -> T`

Get a tuple element.

**Parameters:**

- ​**i** (`Int`): The element index.
- ​**T** (`AnyRegType`): The element type.

**Returns:**

The tuple element at the requested index.