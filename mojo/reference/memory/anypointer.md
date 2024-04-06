# anypointer

Implement a generic unsafe pointer type.

You can import these APIs from the `memory` package. For example:

```
from memory.anypointer import AnyPointer
```

## `AnyPointer`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#anypointer "Direct link to anypointer")

This is a pointer type that can point to any generic value that is movable.

**Parameters:**

- ​**T** (`Movable`): The pointer element type, which must be movable.

**Aliases:**

- ​`pointer_type = pointer<:trait<@stdlib::@builtin::@value::@Movable> T>`: The underlying pointer type.

- ​`mlir_ref_type = !lit.ref<:trait<@stdlib::@builtin::@value::@Movable> T, mut #lit.lifetime>`

**Fields:**

- ​**value** (`pointer<:trait<@stdlib::@builtin::@value::@Movable> T>`): The underlying pointer.

**Implemented traits:**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Intable`, `Movable`, `Stringable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__init__ "Direct link to __init__")

`__init__() -> Self`

Create a null pointer.

**Returns:**

A null pointer.

`__init__(value: pointer<:trait<_stdlib::_builtin::_value::_Movable> T>) -> Self`

Create a pointer with the input value.

**Args:**

- ​**value** (`pointer<:trait<_stdlib::_builtin::_value::_Movable> T>`): The input pointer to construct with.

**Returns:**

A null pointer.

### `__bool__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__bool__ "Direct link to __bool__")

`__bool__(self: Self) -> Bool`

Return true if the pointer is non-null.

**Returns:**

Whether the pointer is null.

### `__lt__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__lt__ "Direct link to __lt__")

`__lt__(self: Self, rhs: Self) -> Bool`

Returns True if this pointer represents a lower address than rhs.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if this pointer represents a lower address and False otherwise.

### `__le__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__le__ "Direct link to __le__")

`__le__(self: Self, rhs: Self) -> Bool`

Returns True if this pointer represents a lower than or equal address than rhs.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if this pointer represents a lower address and False otherwise.

### `__eq__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__eq__ "Direct link to __eq__")

`__eq__(self: Self, rhs: Self) -> Bool`

Returns True if the two pointers are equal.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if the two pointers are equal and False otherwise.

### `__ne__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__ne__ "Direct link to __ne__")

`__ne__(self: Self, rhs: Self) -> Bool`

Returns True if the two pointers are not equal.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if the two pointers are not equal and False otherwise.

### `__gt__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__gt__ "Direct link to __gt__")

`__gt__(self: Self, rhs: Self) -> Bool`

Returns True if this pointer represents a higher address than rhs.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if this pointer represents a higher than or equal address and False otherwise.

### `__ge__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__ge__ "Direct link to __ge__")

`__ge__(self: Self, rhs: Self) -> Bool`

Returns True if this pointer represents a higher than or equal address than rhs.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if this pointer represents a higher than or equal address and False otherwise.

### `__add__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__add__ "Direct link to __add__")

`__add__(self: Self, offset: Int) -> Self`

Return a pointer at an offset from the current one.

**Args:**

- ​**offset** (`Int`): The offset index.

**Returns:**

An offset pointer.

### `__sub__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__sub__ "Direct link to __sub__")

`__sub__(self: Self, offset: Int) -> Self`

Return a pointer at an offset from the current one.

**Args:**

- ​**offset** (`Int`): The offset index.

**Returns:**

An offset pointer.

### `alloc`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#alloc "Direct link to alloc")

`static alloc(count: Int) -> Self`

Allocate an array with default alignment.

**Args:**

- ​**count** (`Int`): The number of elements in the array.

**Returns:**

The pointer to the newly allocated array.

### `address_of`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#address_of "Direct link to address_of")

`static address_of(inout arg: T) -> Self`

Gets the address of the argument.

**Args:**

- ​**arg** (`T`): The value to get the address of.

**Returns:**

An AnyPointer which contains the address of the argument.

### `free`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#free "Direct link to free")

`free(self: Self)`

Free the memory referenced by the pointer.

### `bitcast`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#bitcast "Direct link to bitcast")

`bitcast[new_type: Movable](self: Self) -> AnyPointer[new_type]`

Bitcasts the pointer to a different type.

**Parameters:**

- ​**new\_type** (`Movable`): The target type.

**Returns:**

A new pointer with the specified type and the same address, as the original pointer.

### `take_value`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#take_value "Direct link to take_value")

`take_value(self: Self) -> T`

Move the value at the pointer out.

The pointer must not be null, and the pointer memory location is assumed to contain a valid initialized instance of `T`.

This performs a _consuming_ move, ending the lifetime of the value stored in this pointer memory location. Subsequent reads of this pointer are not valid. If a new valid value is stored using `emplace_value()`, then reading from this pointer becomes valid again.

**Returns:**

The value at the pointer.

### `emplace_value`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#emplace_value "Direct link to emplace_value")

`emplace_value(self: Self, owned value: T)`

Emplace a new value into the pointer location.

The pointer memory location is assumed to contain uninitialized data, and consequently the current contents of this pointer are not destructed before writing `value`. Similarly, ownership of `value` is logically transfered into the pointer location.

**Args:**

- ​**value** (`T`): The value to emplace.

### `move_into`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#move_into "Direct link to move_into")

`move_into(self: Self, dest: Self)`

Moves the value contained in this pointer into the memory location pointed to by `dest`.

This performs a consuming move (using `__moveinit__()`) out of the memory location pointed to by this pointer. Subsequent reads of this pointer are not valid unless and until a new, valid value has been moved into this pointer's memory location using `emplace_value()`.

This transfers the value out of `self` and into `dest` using at most one `__moveinit__()` call.

Safety: \* `self` must not be null \* `self` must contain a valid, initialized instance of `T` \* `dest` must not be null \* The contents of `dest` should be uninitialized. If `dest` was previously written with a valid value, that value will be be overwritten and its destructor will NOT be run.

**Args:**

- ​**dest** (`Self`): Destination pointer that the value will be moved into.

### `__int__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__int__ "Direct link to __int__")

`__int__(self: Self) -> Int`

Returns the pointer address as an integer.

**Returns:**

The address of the pointer as an Int.

### `__str__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__str__ "Direct link to __str__")

`__str__(self: Self) -> String`

### `__refitem__`[​](https://docs.modular.com/mojo/stdlib/memory/anypointer#__refitem__ "Direct link to __refitem__")

`__refitem__(self: Self) -> !lit.ref<:trait<_stdlib::_builtin::_value::_Movable> T, mut #lit.lifetime>`

Return a reference to the underlying data, offset by the offset index.

**Returns:**

A reference to the value.

`__refitem__(self: Self, offset: Int) -> !lit.ref<:trait<_stdlib::_builtin::_value::_Movable> T, mut #lit.lifetime>`

Return a reference to the underlying data, offset by the offset index.

**Args:**

- ​**offset** (`Int`): The offset index.

**Returns:**

An offset reference.