# vector

Defines InlinedFixedVector.

You can import these APIs from the `collections` package. For example:

```
from collections.vector import InlinedFixedVector
```

## `InlinedFixedVector`

A dynamically-allocated vector with small-vector optimization and a fixed maximum capacity.

The `InlinedFixedVector` does not resize or implement bounds checks. It is initialized with both a small-vector size (specified at compile time) and a maximum capacity (specified at runtime).

The first `size` elements are stored in the statically-allocated small vector storage. Any remaining elements are stored in dynamically-allocated storage.

When it is deallocated, it frees its memory.

TODO: It should call its element destructors once we have traits.

This data structure is useful for applications where the number of required elements is not known at compile time, but once known at runtime, is guaranteed to be equal to or less than a certain capacity.

**Parameters:**

- ​**type** (`AnyRegType`): The type of the elements.
- ​**size** (`Int`): The statically-known small-vector size.

**Aliases:**

- ​`static_size = size`

- ​`static_data_type = StaticTuple[*"type", size]`

**Fields:**

- ​**static\_data** (`StaticTuple[*"type", size]`): The underlying static storage, used for small vectors.

- ​**dynamic\_data** (`Pointer[*"type", 0]`): The underlying dynamic storage, used to grow large vectors.

- ​**current\_size** (`Int`): The number of elements in the vector.

- ​**capacity** (`Int`): The maximum number of elements that can fit in the vector.

**Implemented traits:**

`AnyType`, `Sized`

**Methods:**

### `__init__`

`__init__(inout self: Self, capacity: Int)`

Constructs `InlinedFixedVector` with the given capacity.

The dynamically allocated portion is `capacity - size`.

**Args:**

- ​**capacity** (`Int`): The requested maximum capacity of the vector.

### `__copyinit__`

`__copyinit__(inout self: Self, existing: Self)`

Creates a shallow copy (doesn't copy the underlying elements).

**Args:**

- ​**existing** (`Self`): The `InlinedFixedVector` to copy.

### `__getitem__`

`__getitem__(self: Self, i: Int) -> *"type"`

Gets a vector element at the given index.

**Args:**

- ​**i** (`Int`): The index of the element.

**Returns:**

The element at the given index.

### `__setitem__`

`__setitem__(inout self: Self, i: Int, *value: "type")`

Sets a vector element at the given index.

**Args:**

- ​**i** (`Int`): The index of the element.
- ​**value** (`*"type"`): The value to assign.

### `deepcopy`

`deepcopy(self: Self) -> Self`

Creates a deep copy of this vector.

**Returns:**

The created copy of this vector.

### `append`

`append(inout self: Self, *value: "type")`

Appends a value to this vector.

**Args:**

- ​**value** (`*"type"`): The value to append.

### `__len__`

`__len__(self: Self) -> Int`

Gets the number of elements in the vector.

**Returns:**

The number of elements in the vector.

### `clear`

`clear(inout self: Self)`

Clears the elements in the vector.

### `__iter__`

`__iter__(inout self: Self) -> _VecIter[*"type", InlinedFixedVector[*"type", size], _deref_iter_impl[*"type", size]]`

Iterate over the vector.

**Returns:**

An iterator to the start of the vector.