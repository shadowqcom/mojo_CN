# set

Implements the Set datatype.

## `Set`[​](https://docs.modular.com/mojo/stdlib/collections/set#set "Direct link to set")

A set data type.

O(1) average-case amortized add, remove, and membership check.

```
from collections import Setvar set = Set[Int](1, 2, 3)print(len(set))  # 3set.add(4)for element in set:    print(element[])set -= Set[Int](3, 4, 5)print(set == Set[Int](1, 2))  # Trueprint(set | Set[Int](0, 1) == Set[Int](0, 1, 2))  # Truevar element = set.pop()print(len(set))  # 1
```

**Parameters:**

- ​**T** (`KeyElement`): The element type of the set. Must implement KeyElement.

**Implemented traits:**

`AnyType`, `Boolable`, `EqualityComparable`, `Hashable`, `Sized`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__init__ "Direct link to __init__")

`__init__(inout self: Self, *ts: T)`

Construct a set from initial elements.

**Args:**

- ​**ts** (`*T`): Variadic of elements to add to the set.

`__init__(inout self: Self, elements: Self)`

Explicitly copy another Set instance.

**Args:**

- ​**elements** (`Self`): An existing set to copy.

`__init__(inout self: Self, elements: List[T])`

Construct a set from a List of elements.

**Args:**

- ​**elements** (`List[T]`): A vector of elements to add to the set.

### `__moveinit__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__moveinit__ "Direct link to __moveinit__")

`__moveinit__(inout self: Self, owned other: Self)`

Move constructor.

**Args:**

- ​**other** (`Self`): The existing Set instance to move from.

### `__bool__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__bool__ "Direct link to __bool__")

`__bool__(self: Self) -> Bool`

Whether the set is non-empty or not.

**Returns:**

True if the set is non-empty, False if it is empty.

### `__eq__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__eq__ "Direct link to __eq__")

`__eq__(self: Self, other: Self) -> Bool`

Set equality.

**Args:**

- ​**other** (`Self`): Another Set instance to check equality against.

**Returns:**

True if the sets contain the same elements and False otherwise.

### `__ne__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__ne__ "Direct link to __ne__")

`__ne__(self: Self, other: Self) -> Bool`

Set inequality.

**Args:**

- ​**other** (`Self`): Another Set instance to check equality against.

**Returns:**

True if the sets are different and False otherwise.

### `__contains__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__contains__ "Direct link to __contains__")

`__contains__(self: Self, t: T) -> Bool`

Whether or not the set contains an element.

**Args:**

- ​**t** (`T`): The element to check membership in the set.

**Returns:**

Whether or not the set contains the element.

### `__sub__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__sub__ "Direct link to __sub__")

`__sub__(self: Self, other: Self) -> Self`

Set subtraction.

**Args:**

- ​**other** (`Self`): Another Set instance to subtract from this one.

**Returns:**

A new set containing elements of this set, but not containing any elements which were in the `other` set.

### `__and__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__and__ "Direct link to __and__")

`__and__(self: Self, other: Self) -> Self`

The set intersection operator.

**Args:**

- ​**other** (`Self`): Another Set instance to intersect with this one.

**Returns:**

A new set containing only the elements which appear in both this set and the `other` set.

### `__or__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__or__ "Direct link to __or__")

`__or__(self: Self, other: Self) -> Self`

The set union operator.

**Args:**

- ​**other** (`Self`): Another Set instance to union with this one.

**Returns:**

A new set containing any elements which appear in either this set or the `other` set.

### `__isub__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__isub__ "Direct link to __isub__")

`__isub__(inout self: Self, other: Self)`

In-place set subtraction.

Updates the set to remove any elements from the `other` set.

**Args:**

- ​**other** (`Self`): Another Set instance to subtract from this one.

### `__iand__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__iand__ "Direct link to __iand__")

`__iand__(inout self: Self, other: Self)`

In-place set intersection.

Updates the set to contain only the elements which are already in the set and are also contained in the `other` set.

**Args:**

- ​**other** (`Self`): Another Set instance to intersect with this one.

### `__ior__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__ior__ "Direct link to __ior__")

`__ior__(inout self: Self, other: Self)`

In-place set union.

Updates the set to contain all elements in the `other` set as well as all elements it already contained.

**Args:**

- ​**other** (`Self`): Another Set instance to union with this one.

### `__len__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__len__ "Direct link to __len__")

`__len__(self: Self) -> Int`

The size of the set.

**Returns:**

The number of elements in the set.

### `__hash__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__hash__ "Direct link to __hash__")

`__hash__(self: Self) -> Int`

A hash value of the elements in the set.

The hash value is order independent, so s1 == s2 -> hash(s1) == hash(s2).

**Returns:**

A hash value of the set suitable for non-cryptographic purposes.

### `__iter__`[​](https://docs.modular.com/mojo/stdlib/collections/set#__iter__ "Direct link to __iter__")

`__iter__[mutability: i1, self_life: lifetime<mutability>](self: !lit.ref<_stdlib::_collections::_set::_Set<:trait<_stdlib::_collections::_dict::_KeyElement> T>, mut=mutability, self_life>) -> _DictKeyIter[T, None, mutability, self_life]`

Iterate over elements of the set, returning immutable references.

**Returns:**

An iterator of immutable references to the set elements.

### `add`[​](https://docs.modular.com/mojo/stdlib/collections/set#add "Direct link to add")

`add(inout self: Self, t: T)`

Add an element to the set.

**Args:**

- ​**t** (`T`): The element to add to the set.

### `remove`[​](https://docs.modular.com/mojo/stdlib/collections/set#remove "Direct link to remove")

`remove(inout self: Self, t: T)`

Remove an element from the set.

Raises: If the element isn't in the set to remove.

**Args:**

- ​**t** (`T`): The element to remove from the set.

### `pop`[​](https://docs.modular.com/mojo/stdlib/collections/set#pop "Direct link to pop")

`pop(inout self: Self) -> T`

Remove any one item from the set, and return it.

As an implementation detail this will remove the first item according to insertion order. This is practically useful for breadth-first search implementations.

Raises: If the set is empty.

**Returns:**

The element which was removed from the set.

### `union`[​](https://docs.modular.com/mojo/stdlib/collections/set#union "Direct link to union")

`union(self: Self, other: Self) -> Self`

Set union.

**Args:**

- ​**other** (`Self`): Another Set instance to union with this one.

**Returns:**

A new set containing any elements which appear in either this set or the `other` set.

### `intersection`[​](https://docs.modular.com/mojo/stdlib/collections/set#intersection "Direct link to intersection")

`intersection(self: Self, other: Self) -> Self`

Set intersection.

**Args:**

- ​**other** (`Self`): Another Set instance to intersect with this one.

**Returns:**

A new set containing only the elements which appear in both this set and the `other` set.

### `remove_all`[​](https://docs.modular.com/mojo/stdlib/collections/set#remove_all "Direct link to remove_all")

`remove_all(inout self: Self, other: Self)`

In-place set subtraction.

Updates the set to remove any elements from the `other` set.

**Args:**

- ​**other** (`Self`): Another Set instance to subtract from this one.