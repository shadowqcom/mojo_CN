# list

Defines the List type.

You can import these APIs from the `collections` package. For example:

```
from collections import List
```

## `List`

The `List` type is a dynamically-allocated list.

It supports pushing and popping from the back resizing the underlying storage as needed. When it is deallocated, it frees its memory.

**Parameters:**

- ​**T** (`CollectionElement`): The type of the elements.

**Fields:**

- ​**data** (`AnyPointer[T]`): The underlying storage for the list.

- ​**size** (`Int`): The number of elements in the list.

- ​**capacity** (`Int`): The amount of elements that can fit in the list without resizing it.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `Movable`, `Sized`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Constructs an empty list.

`__init__(inout self: Self, existing: Self)`

Creates a deep copy of the given list.

**Args:**

- ​**existing** (`Self`): The list to copy.

`__init__(inout self: Self, *, capacity: Int)`

Constructs a list with the given capacity.

**Args:**

- ​**capacity** (`Int`): The requested capacity of the list.

`__init__(inout self: Self, *values: T)`

Constructs a list from the given values.

**Args:**

- ​**values** (`*T`): The values to populate the list with.

### `__copyinit__`

`__copyinit__(inout self: Self, existing: Self)`

Creates a deepcopy of the given list.

**Args:**

- ​**existing** (`Self`): The list to copy.

### `__moveinit__`

`__moveinit__(inout self: Self, owned existing: Self)`

Move data of an existing list into a new one.

**Args:**

- ​**existing** (`Self`): The existing list.

### `__del__`

`__del__(owned self: Self)`

Destroy all elements in the list and free its memory.

### `__getitem__`

`__getitem__(self: Self, span: Slice) -> Self`

Gets the sequence of elements at the specified positions.

**Args:**

- ​**span** (`Slice`): A slice that specifies positions of the new list.

**Returns:**

A new list containing the list at the specified span.

`__getitem__(self: Self, i: Int) -> T`

Gets a copy of the list element at the given index.

FIXME(lifetimes): This should return a reference, not a copy!

**Args:**

- ​**i** (`Int`): The index of the element.

**Returns:**

A copy of the element at the given index.

### `__setitem__`

`__setitem__(inout self: Self, i: Int, owned value: T)`

Sets a list element at the given index.

**Args:**

- ​**i** (`Int`): The index of the element.
- ​**value** (`T`): The value to assign.

### `__len__`

`__len__(self: Self) -> Int`

Gets the number of elements in the list.

**Returns:**

The number of elements in the list.

### `append`

`append(inout self: Self, owned value: T)`

Appends a value to this list.

**Args:**

- ​**value** (`T`): The value to append.

### `extend`

`extend(inout self: Self, owned other: Self)`

Extends this list by consuming the elements of `other`.

**Args:**

- ​**other** (`Self`): List whose elements will be added in order at the end of this list.

### `pop_back`

`pop_back(inout self: Self) -> T`

Pops a value from the back of this list.

**Returns:**

The popped value.

### `reserve`

`reserve(inout self: Self, new_capacity: Int)`

Reserves the requested capacity.

If the current capacity is greater or equal, this is a no-op. Otherwise, the storage is reallocated and the date is moved.

**Args:**

- ​**new\_capacity** (`Int`): The new capacity.

### `resize`

`resize(inout self: Self, new_size: Int, value: T)`

Resizes the list to the given new size.

If the new size is smaller than the current one, elements at the end are discarded. If the new size is larger than the current one, the list is appended with new values elements up to the requested size.

**Args:**

- ​**new\_size** (`Int`): The new size.
- ​**value** (`T`): The value to use to populate new elements.

### `reverse`

`reverse(inout self: Self)`

Reverses the elements of the list.

### `clear`

`clear(inout self: Self)`

Clears the elements in the list.

### `steal_data`

`steal_data(inout self: Self) -> AnyPointer[T]`

Take ownership of the underlying pointer from the list.

**Returns:**

The underlying data.

### `__iter__`

`__iter__[mutability: i1, self_life: lifetime<mutability>](self: !lit.ref<_stdlib::_collections::_list::_List<:trait<_stdlib::_builtin::_value::_CollectionElement> T>, mut=mutability, self_life>) -> _ListIter[T, mutability, self_life]`

Iterate over elements of the list, returning immutable references.

**Returns:**

An iterator of immutable references to the list elements.