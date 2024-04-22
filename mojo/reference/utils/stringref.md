# stringref

Implements the StringRef class.

## `StringRef`

Represent a constant reference to a string, i.e. a sequence of characters and a length, which need not be null terminated.

**Fields:**

- ​**data** (`DTypePointer[si8, 0]`): A pointer to the beginning of the string data being referenced.

- ​**length** (`Int`): The length of the string being referenced.

**Implemented traits:**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Hashable`, `IntableRaising`, `Movable`, `Sized`, `Stringable`

**Methods:**

### `__init__`

`__init__(str: StringLiteral) -> Self`

Construct a StringRef value given a constant string.

**Args:**

- ​**str** (`StringLiteral`): The input constant string.

**Returns:**

Constructed `StringRef` object.

`__init__(ptr: Pointer[SIMD[si8, 1], 0], len: Int) -> Self`

Construct a StringRef value given a (potentially non-0 terminated string).

The constructor takes a raw pointer and a length.

**Args:**

- ​**ptr** (`Pointer[SIMD[si8, 1], 0]`): Pointer to the string.
- ​**len** (`Int`): The length of the string.

**Returns:**

Constructed `StringRef` object.

`__init__(ptr: DTypePointer[si8, 0], len: Int) -> Self`

Construct a StringRef value given a (potentially non-0 terminated string).

The constructor takes a raw pointer and a length.

**Args:**

- ​**ptr** (`DTypePointer[si8, 0]`): Pointer to the string.
- ​**len** (`Int`): The length of the string.

**Returns:**

Constructed `StringRef` object.

`__init__(ptr: Pointer[SIMD[si8, 1], 0]) -> Self`

Construct a StringRef value given a null-terminated string.

**Args:**

- ​**ptr** (`Pointer[SIMD[si8, 1], 0]`): Pointer to the string.

**Returns:**

Constructed `StringRef` object.

`__init__(ptr: DTypePointer[si8, 0]) -> Self`

Construct a StringRef value given a null-terminated string.

**Args:**

- ​**ptr** (`DTypePointer[si8, 0]`): Pointer to the string.

**Returns:**

Constructed `StringRef` object.

### `__bool__`

`__bool__(self: Self) -> Bool`

Checks if the string is empty or not.

**Returns:**

Returns True if the string is not empty and False otherwise.

### `__getitem__`

`__getitem__(self: Self, idx: Int) -> Self`

Get the string value at the specified position.

**Args:**

- ​**idx** (`Int`): The index position.

**Returns:**

The character at the specified position.

### `__eq__`

`__eq__(self: Self, rhs: Self) -> Bool`

Compares two strings are equal.

**Args:**

- ​**rhs** (`Self`): The other string.

**Returns:**

True if the strings match and False otherwise.

### `__ne__`

`__ne__(self: Self, rhs: Self) -> Bool`

Compares two strings are not equal.

**Args:**

- ​**rhs** (`Self`): The other string.

**Returns:**

True if the strings do not match and False otherwise.

### `__contains__`

`__contains__(self: Self, substr: Self) -> Bool`

Returns True if the substring is contained within the current string.

**Args:**

- ​**substr** (`Self`): The substring to check.

**Returns:**

True if the string contains the substring.

### `__str__`

`__str__(self: Self) -> String`

Convert the string reference to a string.

**Returns:**

A new string.

### `__len__`

`__len__(self: Self) -> Int`

Returns the length of the string.

**Returns:**

The length of the string.

### `__hash__`

`__hash__(self: Self) -> Int`

Hash the underlying buffer using builtin hash.

**Returns:**

A 64-bit hash value. This value is _not_ suitable for cryptographic uses. Its intended usage is for data structures. See the `hash` builtin documentation for more details.

### `count`

`count(self: Self, substr: Self) -> Int`

Return the number of non-overlapping occurrences of substring `substr` in the string.

If sub is empty, returns the number of empty strings between characters which is the length of the string plus one.

**Args:**

- ​**substr** (`Self`): The substring to count.

**Returns:**

The number of occurrences of `substr`.

### `find`

`find(self: Self, substr: Self, start: Int) -> Int`

Finds the offset of the first occurrence of `substr` starting at `start`. If not found, returns -1.

**Args:**

- ​**substr** (`Self`): The substring to find.
- ​**start** (`Int`): The offset from which to find.

**Returns:**

The offset of `substr` relative to the beginning of the string.

### `rfind`

`rfind(self: Self, substr: Self, start: Int) -> Int`

Finds the offset of the last occurrence of `substr` starting at `start`. If not found, returns -1.

**Args:**

- ​**substr** (`Self`): The substring to find.
- ​**start** (`Int`): The offset from which to find.

**Returns:**

The offset of `substr` relative to the beginning of the string.

### `__int__`

`__int__(self: Self) -> Int`

Parses the given string as a base-10 integer and returns that value.

For example, `int("19")` returns `19`. If the given string cannot be parsed as an integer value, an error is raised. For example, `int("hi")` raises an error.

**Returns:**

An integer value that represents the string, or otherwise raises.