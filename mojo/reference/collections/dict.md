# dict

Defines `Dict`, a collection that stores key-value pairs.

Dict provides an efficient, O(1) amortized average-time complexity for insert, lookup, and removal of dictionary elements. Its implementation closely mirrors Python's `dict` implementation:

- Performance and size are heavily optimized for small dictionaries, but can scale to large dictionaries.
    
- Insertion order is implicitly preserved. Iteration over keys, values, and items have a deterministic order based on insertion.
    

Key elements must implement the `KeyElement` trait, which encompasses Movable, Hashable, and EqualityComparable. It also includes CollectionElement and Copyable until we push references through the standard library types.

Value elements must be CollectionElements for a similar reason. Both key and value types must always be Movable so we can resize the dictionary as it grows.

See the `Dict` docs for more details.

## `DictEntry`

Store a key-value pair entry inside a dictionary.

**Parameters:**

- ​**K** (`KeyElement`): The key type of the dict. Must be Hashable+EqualityComparable.
- ​**V** (`CollectionElement`): The value type of the dict.

**Fields:**

- ​**hash** (`Int`): `key.__hash__()`, stored so hashing isn't re-computed during dict lookup.

- ​**key** (`K`): The unique key for the entry.

- ​**value** (`V`): The value associated with the key.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `Movable`

**Methods:**

### `__init__`

`__init__(inout self: Self, owned key: K, owned value: V)`

Create an entry from a key and value, computing the hash.

**Args:**

- ​**key** (`K`): The key of the entry.
- ​**value** (`V`): The value of the entry.

## `Dict`

A container that stores key-value pairs.

The key type and value type must be specified statically, unlike a Python dictionary, which can accept arbitrary key and value types.

The key type must implement the `KeyElement` trait, which encompasses `Movable`, `Hashable`, and `EqualityComparable`. It also includes `CollectionElement` and `Copyable` until we have references.

The value type must implement the `CollectionElement` trait.

Usage:

```
from collections import Dictvar d = Dict[String, Int]()d["a"] = 1d["b"] = 2print(len(d))      # prints 2print(d["a"])      # prints 1print(d.pop("b"))  # prints 2print(len(d))      # prints 1
```

**Parameters:**

- ​**K** (`KeyElement`): The type of the dictionary key. Must be Hashable and EqualityComparable so we can find the key in the map.
- ​**V** (`CollectionElement`): The value type of the dictionary. Currently must be CollectionElement.

**Aliases:**

- ​`EMPTY = -1`

- ​`REMOVED = -2`

**Fields:**

- ​**size** (`Int`): The number of elements currently stored in the dict.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `Movable`, `Sized`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Initialize an empty dictiontary.

`__init__(inout self: Self, existing: Self)`

Copy an existing dictiontary.

**Args:**

- ​**existing** (`Self`): The existing dict.

### `__copyinit__`

`__copyinit__(inout self: Self, existing: Self)`

Copy an existing dictiontary.

**Args:**

- ​**existing** (`Self`): The existing dict.

### `__moveinit__`

`__moveinit__(inout self: Self, owned existing: Self)`

Move data of an existing dict into a new one.

**Args:**

- ​**existing** (`Self`): The existing dict.

### `__getitem__`

`__getitem__(self: Self, key: K) -> V`

Retrieve a value out of the dictionary.

Raises: "KeyError" if the key isn't present.

**Args:**

- ​**key** (`K`): The key to retrieve.

**Returns:**

The value associated with the key, if it's present.

### `__setitem__`

`__setitem__(inout self: Self, key: K, value: V)`

Set a value in the dictionary by key.

**Args:**

- ​**key** (`K`): The key to associate with the specified value.
- ​**value** (`V`): The data to store in the dictionary.

### `__contains__`

`__contains__(self: Self, key: K) -> Bool`

Check if a given value is in the dictionary or not.

**Args:**

- ​**key** (`K`): The key to check.

**Returns:**

True if there key exists in the dictionary, False otherwise.

### `__len__`

`__len__(self: Self) -> Int`

The number of elements currenly stored in the dictionary.

### `find`

`find(self: Self, key: K) -> Optional[V]`

Find a value in the dictionary by key.

**Args:**

- ​**key** (`K`): The key to search for in the dictionary.

**Returns:**

An optional value containing a copy of the value if it was present, otherwise an empty Optional.

### `pop`

`pop(inout self: Self, key: K, owned default: Optional[V]) -> V`

Remove a value from the dictionary by key.

Raises: "KeyError" if the key was not present in the dictionary and no default value was provided.

**Args:**

- ​**key** (`K`): The key to remove from the dictionary.
- ​**default** (`Optional[V]`): Optionally provide a default value to return if the key was not found instead of raising.

**Returns:**

The value associated with the key, if it was in the dictionary. If it wasn't, return the provided default value instead.

### `__iter__`

`__iter__[mutability: i1, self_life: lifetime<mutability>](self: !lit.ref<_stdlib::_collections::_dict::_Dict<:trait<_stdlib::_collections::_dict::_KeyElement> K, :trait<_stdlib::_builtin::_value::_CollectionElement> V>, mut=mutability, self_life>) -> _DictKeyIter[K, V, mutability, self_life]`

Iterate over the dict's keys as immutable references.

**Parameters:**

- ​**mutability** (`i1`): Whether the dict is mutable.
- ​**self\_life** (`lifetime<mutability>`): The dict's lifetime.

**Returns:**

An iterator of immutable references to the dictionary keys.

### `keys`

`keys[mutability: i1, self_life: lifetime<mutability>](self: !lit.ref<_stdlib::_collections::_dict::_Dict<:trait<_stdlib::_collections::_dict::_KeyElement> K, :trait<_stdlib::_builtin::_value::_CollectionElement> V>, mut=mutability, self_life>) -> _DictKeyIter[K, V, mutability, self_life]`

Iterate over the dict's keys as immutable references.

**Parameters:**

- ​**mutability** (`i1`): Whether the dict is mutable.
- ​**self\_life** (`lifetime<mutability>`): The dict's lifetime.

**Returns:**

An iterator of immutable references to the dictionary keys.

### `values`

`values[mutability: i1, self_life: lifetime<mutability>](self: !lit.ref<_stdlib::_collections::_dict::_Dict<:trait<_stdlib::_collections::_dict::_KeyElement> K, :trait<_stdlib::_builtin::_value::_CollectionElement> V>, mut=mutability, self_life>) -> _DictValueIter[K, V, mutability, self_life]`

Iterate over the dict's values as references.

**Parameters:**

- ​**mutability** (`i1`): Whether the dict is mutable.
- ​**self\_life** (`lifetime<mutability>`): The dict's lifetime.

**Returns:**

An iterator of references to the dictionary values.

### `items`

`items[mutability: i1, self_life: lifetime<mutability>](self: !lit.ref<_stdlib::_collections::_dict::_Dict<:trait<_stdlib::_collections::_dict::_KeyElement> K, :trait<_stdlib::_builtin::_value::_CollectionElement> V>, mut=mutability, self_life>) -> _DictEntryIter[K, V, mutability, self_life]`

Iterate over the dict's entries as immutable references.

These can't yet be unpacked like Python dict items, but you can access the key and value as attributes ie.

```
for e in dict.items():    print(e[].key, e[].value)
```

**Parameters:**

- ​**mutability** (`i1`): Whether the dict is mutable.
- ​**self\_life** (`lifetime<mutability>`): The dict's lifetime.

**Returns:**

An iterator of immutable references to the dictionary entries.

## `KeyElement`

A trait composition for types which implement all requirements of dictionary keys. Dict keys must minimally be Movable, Hashable, and EqualityComparable for a hash map. Until we have references they must also be copyable.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Hashable`, `Movable`

**Methods:**

### `__copyinit__`

`__copyinit__(inout self: T, existing: T, /)`

Create a new instance of the value by copying an existing one.

**Args:**

- ​**existing** (`T`): The value to copy.

### `__moveinit__`

`__moveinit__(inout self: T, owned existing: T, /)`

Create a new instance of the value by moving the value of another.

**Args:**

- ​**existing** (`T`): The value to move.

### `__del__`

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

### `__eq__`

`__eq__(self: T, other: T) -> Bool`

Define whether two instances of the object are equal to each other.

**Args:**

- ​**other** (`T`): Another instance of the same type.

**Returns:**

True if the instances are equal according to the type's definition of equality, False otherwise.

### `__ne__`

`__ne__(self: T, other: T) -> Bool`

Define whether two instances of the object are not equal to each other.

**Args:**

- ​**other** (`T`): Another instance of the same type.

**Returns:**

True if the instances are not equal according to the type's definition of equality, False otherwise.

### `__hash__`

`__hash__(self: T) -> Int`

Return a 64-bit hash of the type's data.