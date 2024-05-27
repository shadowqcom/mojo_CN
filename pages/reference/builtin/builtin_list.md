# builtin\_list

Implements the ListLiteral class.

These are Mojo built-ins, so you don't need to import them.

## `ListLiteral`

The type of a literal heterogenous list expression.

A list consists of zero or more values, separated by commas.

**Parameters:**

- ​**Ts** (`*AnyRegType`): The type of the elements.

**Fields:**

- ​**storage** (`*Ts`): The underlying storage for the list.

**Implemented traits:**

`AnyType`, `Sized`

**Methods:**

### `__init__`

`__init__(*args: Ts) -> Self`

Construct the list literal from the given values.

**Args:**

- ​**args** (`*Ts`): The init values.

**Returns:**

The constructed ListLiteral.

### `__len__`

`__len__(self: Self) -> Int`

Get the list length.

**Returns:**

The length of this ListLiteral.

### `get`

`get[i: Int, T: AnyRegType](self: Self) -> T`

Get a list element at the given index.

**Parameters:**

- ​**i** (`Int`): The element index.
- ​**T** (`AnyRegType`): The element type.

**Returns:**

The element at the given index.

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

## `VariadicList`

A utility class to access variadic function arguments. Provides a "list" view of the function argument so that the size of the argument list and each individual argument can be accessed.

**Parameters:**

- ​**type** (`AnyRegType`): The type of the elements in the list.

**Aliases:**

- ​`storage_type = variadic<*"type">`

- ​`IterType = _VariadicListIter[*"type"]`

**Fields:**

- ​**value** (`variadic<*"type">`): The underlying storage for the variadic list.

**Implemented traits:**

`AnyType`, `Sized`

**Methods:**

### `__init__`

`__init__(*value: *"type") -> Self`

Constructs a VariadicList from a variadic list of arguments.

**Args:**

- ​**value** (`**"type"`): The variadic argument list to construct the variadic list with.

**Returns:**

The VariadicList constructed.

`__init__(*value: *"type") -> Self`

Constructs a VariadicList from a variadic argument type.

**Args:**

- ​**value** (`**"type"`): The variadic argument to construct the list with.

**Returns:**

The VariadicList constructed.

### `__getitem__`

`__getitem__(self: Self, index: Int) -> *"type"`

Gets a single element on the variadic list.

**Args:**

- ​**index** (`Int`): The index of the element to access on the list.

**Returns:**

The element on the list corresponding to the given index.

### `__len__`

`__len__(self: Self) -> Int`

Gets the size of the list.

**Returns:**

The number of elements on the variadic list.

### `__iter__`

`__iter__(self: Self) -> _VariadicListIter[*"type"]`

Iterate over the list.

**Returns:**

An iterator to the start of the list.

## `VariadicListMem`

A utility class to access variadic function arguments of memory-only types that may have ownership. It exposes references to the elements in a way that can be enumerated. Each element may be accessed with `elt[]`.

**Parameters:**

- ​**element\_type** (`AnyType`): The type of the elements in the list.
- ​**elt\_is\_mutable** (`i1`): True if the elements of the list are mutable for an inout or owned argument.
- ​**lifetime** (`lifetime<elt_is_mutable>`): The reference lifetime of the underlying elements.

**Aliases:**

- ​`reference_type = Reference[element_type, elt_is_mutable, lifetime]`

- ​`mlir_ref_type = !lit.ref<:trait<@stdlib::@builtin::@anytype::@AnyType> element_type, mut=elt_is_mutable, lifetime>`

- ​`storage_type = variadic<!lit.ref<:trait<@stdlib::@builtin::@anytype::@AnyType> element_type, mut=elt_is_mutable, lifetime>, borrow_in_mem>`

- ​`inout_storage_type = variadic<!lit.ref<:trait<@stdlib::@builtin::@anytype::@AnyType> element_type, mut=elt_is_mutable, lifetime>, byref>`

- ​`owned_storage_type = variadic<!lit.ref<:trait<@stdlib::@builtin::@anytype::@AnyType> element_type, mut=elt_is_mutable, lifetime>, owned_in_mem>`

**Fields:**

- ​**value** (`variadic<!lit.ref<:trait<@stdlib::@builtin::@anytype::@AnyType> element_type, mut=elt_is_mutable, lifetime>, borrow_in_mem>`): The underlying storage, a variadic list of references to elements of the given type.

**Implemented traits:**

`AnyType`, `Sized`

**Methods:**

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

### `__init__`

`__init__(inout self: Self, *value: element_type)`

Constructs a VariadicList from a variadic argument type.

**Args:**

- ​**value** (`*element_type`): The variadic argument to construct the list with.

`__init__(inout self: Self, inout *value: element_type)`

Constructs a VariadicList from a variadic argument type.

**Args:**

- ​**value** (`*element_type`): The variadic argument to construct the list with.

`__init__(inout self: Self, owned *value: element_type)`

Constructs a VariadicList from a variadic argument type.

**Args:**

- ​**value** (`*element_type`): The variadic argument to construct the list with.

### `__moveinit__`

`__moveinit__(inout self: Self, owned existing: Self)`

Moves constructor.

**Args:**

- ​**existing** (`Self`): The existing VariadicListMem.

### `__del__`

`__del__(owned self: Self)`

Destructor that releases elements if owned.

### `__getitem__`

`__getitem__(self: Self, index: Int) -> Reference[element_type, elt_is_mutable, lifetime]`

Gets a single element on the variadic list.

**Args:**

- ​**index** (`Int`): The index of the element to access on the list.

**Returns:**

A low-level pointer to the element on the list corresponding to the given index.

### `__len__`

`__len__(self: Self) -> Int`

Gets the size of the list.

**Returns:**

The number of elements on the variadic list.

### `__refitem__`

`__refitem__(self: Self, index: Int) -> Reference[element_type, elt_is_mutable, {lifetime, (mutcast imm self)}]`

Gets a single element on the variadic list.

**Args:**

- ​**index** (`Int`): The index of the element to access on the list.

**Returns:**

A low-level pointer to the element on the list corresponding to the given index.

### `__iter__`

`__iter__(self: Self) -> _VariadicListMemIter[element_type, elt_is_mutable, lifetime, self]`

Iterate over the list.

**Returns:**

An iterator to the start of the list.

## `VariadicPack`

A utility class to access variadic pack arguments and provide an API for doing things with them.

**Parameters:**

- ​**elt\_is\_mutable** (`i1`): True if the elements of the list are mutable for an inout or owned argument pack.
- ​**lifetime** (`lifetime<elt_is_mutable>`): The reference lifetime of the underlying elements.
- ​**element\_types** (`*AnyType`): The list of types held by the argument pack.

**Implemented traits:**

`AnyType`, `Sized`

**Methods:**

### `__init__`

`__init__(inout self: Self, value: !lit.ref.pack<:variadic<trait<_stdlib::_builtin::_anytype::_AnyType>> element_types, mut=elt_is_mutable, lifetime>, is_owned: Bool)`

Constructs a VariadicPack from the internal representation.

**Args:**

- ​**value** (`!lit.ref.pack<:variadic<trait<_stdlib::_builtin::_anytype::_AnyType>> element_types, mut=elt_is_mutable, lifetime>`): The argument to construct the pack with.
- ​**is\_owned** (`Bool`): Whether this is an 'owned' pack or 'inout'/'borrowed'.

### `__del__`

`__del__(owned self: Self)`

Destructor that releases elements if owned.

### `__len__`

`static __len__() -> Int`

Return the VariadicPack length.

**Returns:**

The number of elements in the variadic pack.

`__len__(self: Self) -> Int`

Return the VariadicPack length.

**Returns:**

The number of elements in the variadic pack.

### `get_element`

`get_element[index: Int](self: Self) -> Reference[element_types[index.value], elt_is_mutable, lifetime]`

Return a reference to an element of the pack.

**Parameters:**

- ​**index** (`Int`): The element of the pack to return.

**Returns:**

A reference to the element. The Reference's mutability follows the mutability of the pack argument convention.

### `each`

`each[func: fn[AnyType]($0, /) -> None](self: Self)`

Apply a function to each element of the pack in order. This applies the specified function (which must be parametric on the element type) to each element of the pack, from the first element to the last, passing in each element as a borrowed argument.

**Parameters:**

- ​**func** (`fn[AnyType]($0, /) -> None`): The function to apply to each element.