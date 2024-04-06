# string\_literal

Implements the StringLiteral class.

These are Mojo built-ins, so you don't need to import them.

## `StringLiteral`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#stringliteral "Direct link to stringliteral")

This type represents a string literal.

String literals are all null-terminated for compatibility with C APIs, but this is subject to change. String literals store their length as an integer, and this does not include the null terminator.

**Aliases:**

- ​`type = string`

**Fields:**

- ​**value** (`string`): The underlying storage for the string literal.

**Implemented traits:**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Hashable`, `IntableRaising`, `KeyElement`, `Movable`, `Sized`, `Stringable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#__init__ "Direct link to __init__")

`__init__(value: string) -> Self`

Create a string literal from a builtin string type.

**Args:**

- ​**value** (`string`): The string value.

**Returns:**

A string literal object.

### `__bool__`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#__bool__ "Direct link to __bool__")

`__bool__(self: Self) -> Bool`

Convert the string to a bool value.

**Returns:**

True if the string is not empty.

### `__eq__`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#__eq__ "Direct link to __eq__")

`__eq__(self: Self, rhs: Self) -> Bool`

Compare two string literals for equality.

**Args:**

- ​**rhs** (`Self`): The string to compare.

**Returns:**

True if they are equal.

### `__ne__`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#__ne__ "Direct link to __ne__")

`__ne__(self: Self, rhs: Self) -> Bool`

Compare two string literals for inequality.

**Args:**

- ​**rhs** (`Self`): The string to compare.

**Returns:**

True if they are not equal.

### `__contains__`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#__contains__ "Direct link to __contains__")

`__contains__(self: Self, substr: Self) -> Bool`

Returns True if the substring is contained within the current string.

**Args:**

- ​**substr** (`Self`): The substring to check.

**Returns:**

True if the string contains the substring.

### `__add__`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#__add__ "Direct link to __add__")

`__add__(self: Self, rhs: Self) -> Self`

Concatenate two string literals.

**Args:**

- ​**rhs** (`Self`): The string to concat.

**Returns:**

The concatenated string.

### `__len__`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#__len__ "Direct link to __len__")

`__len__(self: Self) -> Int`

Get the string length.

**Returns:**

The length of this StringLiteral.

### `data`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#data "Direct link to data")

`data(self: Self) -> DTypePointer[si8, 0]`

Get raw pointer to the underlying data.

**Returns:**

The raw pointer to the data.

### `__hash__`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#__hash__ "Direct link to __hash__")

`__hash__(self: Self) -> Int`

Hash the underlying buffer using builtin hash.

**Returns:**

A 64-bit hash value. This value is _not_ suitable for cryptographic uses. Its intended usage is for data structures. See the `hash` builtin documentation for more details.

### `__str__`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#__str__ "Direct link to __str__")

`__str__(self: Self) -> String`

Convert the string literal to a string.

**Returns:**

A new string.

### `find`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#find "Direct link to find")

`find(self: Self, substr: Self, start: Int) -> Int`

Finds the offset of the first occurrence of `substr` starting at `start`. If not found, returns -1.

**Args:**

- ​**substr** (`Self`): The substring to find.
- ​**start** (`Int`): The offset from which to find.

**Returns:**

The offset of `substr` relative to the beginning of the string.

### `rfind`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#rfind "Direct link to rfind")

`rfind(self: Self, substr: Self, start: Int) -> Int`

Finds the offset of the last occurrence of `substr` starting at `start`. If not found, returns -1.

**Args:**

- ​**substr** (`Self`): The substring to find.
- ​**start** (`Int`): The offset from which to find.

**Returns:**

The offset of `substr` relative to the beginning of the string.

### `__int__`[​](https://docs.modular.com/mojo/stdlib/builtin/string_literal#__int__ "Direct link to __int__")

`__int__(self: Self) -> Int`

Parses the given string as a base-10 integer and returns that value.

For example, `int("19")` returns `19`. If the given string cannot be parsed as an integer value, an error is raised. For example, `int("hi")` raises an error.

**Returns:**

An integer value that represents the string, or otherwise raises.