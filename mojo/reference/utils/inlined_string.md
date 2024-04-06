# inlined\_string

Implements a string that has a small-string optimization which avoids heap allocations for short strings.

## `InlinedString`

A string that performs small-string optimization to avoid heap allocations for short strings.

**Aliases:**

- ​`SMALL_CAP = 24`: The number of bytes of string data that can be stored inline in this string before a heap allocation is required.

- ​`Layout = Variant[String, _FixedString[24]]`

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `Movable`, `Sized`, `Stringable`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Constructs a new empty string.

`__init__(inout self: Self, literal: StringLiteral)`

Constructs a InlinedString value given a string literal.

**Args:**

- ​**literal** (`StringLiteral`): The input constant string.

`__init__(inout self: Self, owned heap_string: String)`

Construct a new small string by taking ownership of an existing heap-allocated String.

**Args:**

- ​**heap\_string** (`String`): The heap string to take ownership of.

### `__add__`

`__add__(self: Self, other: StringLiteral) -> Self`

Construct a string by appending another string at the end of this string.

**Args:**

- ​**other** (`StringLiteral`): The string to append.

**Returns:**

A new string containing the concatenation of `self` and `other`.

`__add__(self: Self, other: String) -> Self`

Construct a string by appending another string at the end of this string.

**Args:**

- ​**other** (`String`): The string to append.

**Returns:**

A new string containing the concatenation of `self` and `other`.

`__add__(self: Self, other: Self) -> Self`

Construct a string by appending another string at the end of this string.

**Args:**

- ​**other** (`Self`): The string to append.

**Returns:**

A new string containing the concatenation of `self` and `other`.

### `__iadd__`

`__iadd__(inout self: Self, literal: StringLiteral)`

Appends another string to this string.

**Args:**

- ​**literal** (`StringLiteral`): The string to append.

`__iadd__(inout self: Self, string: String)`

Appends another string to this string.

**Args:**

- ​**string** (`String`): The string to append.

`__iadd__(inout self: Self, strref: StringRef)`

Appends another string to this string.

**Args:**

- ​**strref** (`StringRef`): The string to append.

### `__len__`

`__len__(self: Self) -> Int`

### `__str__`

`__str__(self: Self) -> String`

### `as_ptr`

`as_ptr(self: Self) -> DTypePointer[si8, 0]`

Returns a pointer to the bytes of string data.

**Returns:**

The pointer to the underlying memory.