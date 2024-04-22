# string

Implements basic object methods for working with strings.

These are Mojo built-ins, so you don't need to import them.

## `String`

Represents a mutable string.

**Implemented traits:**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Hashable`, `IntableRaising`, `KeyElement`, `Movable`, `Sized`, `Stringable`

**Methods:**

### `__init__`

`__init__(inout self: Self, owned impl: List[SIMD[si8, 1]])`

Construct a string from a buffer of bytes.

The buffer must be terminated with a null byte:

```
var buf = List[Int8]()buf.append(ord('H'))buf.append(ord('i'))buf.append(0)var hi = String(buf)
```

**Args:**

- ​**impl** (`List[SIMD[si8, 1]]`): The buffer.

`__init__(inout self: Self)`

Construct an uninitialized string.

`__init__(inout self: Self, str: StringRef)`

Construct a string from a StringRef object.

**Args:**

- ​**str** (`StringRef`): The StringRef from which to construct this string object.

`__init__(inout self: Self, str: StringLiteral)`

Constructs a String value given a constant string.

**Args:**

- ​**str** (`StringLiteral`): The input constant string.

`__init__[stringable: Stringable](inout self: Self, value: stringable)`

Creates a string from a value that conforms to Stringable trait.

**Parameters:**

- ​**stringable** (`Stringable`): The Stringable type.

**Args:**

- ​**value** (`stringable`): The value that conforms to Stringable.

`__init__(inout self: Self, ptr: Pointer[SIMD[si8, 1], 0], len: Int)`

Creates a string from the buffer. Note that the string now owns the buffer.

The buffer must be terminated with a null byte.

**Args:**

- ​**ptr** (`Pointer[SIMD[si8, 1], 0]`): The pointer to the buffer.
- ​**len** (`Int`): The length of the buffer, including the null terminator.

`__init__(inout self: Self, ptr: DTypePointer[si8, 0], len: Int)`

Creates a string from the buffer. Note that the string now owns the buffer.

The buffer must be terminated with a null byte.

**Args:**

- ​**ptr** (`DTypePointer[si8, 0]`): The pointer to the buffer.
- ​**len** (`Int`): The length of the buffer, including the null terminator.

### `__copyinit__`

`__copyinit__(inout self: Self, existing: Self)`

Creates a deep copy of an existing string.

**Args:**

- ​**existing** (`Self`): The string to copy.

### `__moveinit__`

`__moveinit__(inout self: Self, owned existing: Self)`

Move the value of a string.

**Args:**

- ​**existing** (`Self`): The string to move.

### `__bool__`

`__bool__(self: Self) -> Bool`

Checks if the string is not empty.

**Returns:**

True if the string length is greater than zero, and False otherwise.

### `__getitem__`

`__getitem__(self: Self, idx: Int) -> Self`

Gets the character at the specified position.

**Args:**

- ​**idx** (`Int`): The index value.

**Returns:**

A new string containing the character at the specified position.

`__getitem__(self: Self, span: Slice) -> Self`

Gets the sequence of characters at the specified positions.

**Args:**

- ​**span** (`Slice`): A slice that specifies positions of the new substring.

**Returns:**

A new string containing the string at the specified positions.

### `__eq__`

`__eq__(self: Self, other: Self) -> Bool`

Compares two Strings if they have the same values.

**Args:**

- ​**other** (`Self`): The rhs of the operation.

**Returns:**

True if the Strings are equal and False otherwise.

### `__ne__`

`__ne__(self: Self, other: Self) -> Bool`

Compares two Strings if they do not have the same values.

**Args:**

- ​**other** (`Self`): The rhs of the operation.

**Returns:**

True if the Strings are not equal and False otherwise.

### `__contains__`

`__contains__(self: Self, substr: Self) -> Bool`

Returns True if the substring is contained within the current string.

**Args:**

- ​**substr** (`Self`): The substring to check.

**Returns:**

True if the string contains the substring.

### `__add__`

`__add__(self: Self, other: Self) -> Self`

Creates a string by appending another string at the end.

**Args:**

- ​**other** (`Self`): The string to append.

**Returns:**

The new constructed string.

### `__mul__`

`__mul__(self: Self, n: Int) -> Self`

Concatenates the string `n` times.

**Args:**

- ​**n** (`Int`): The number of times to concatenate the string.

**Returns:**

The string concantenated `n` times.

### `__radd__`

`__radd__(self: Self, other: Self) -> Self`

Creates a string by prepending another string to the start.

**Args:**

- ​**other** (`Self`): The string to prepend.

**Returns:**

The new constructed string.

### `__iadd__`

`__iadd__(inout self: Self, other: Self)`

Appends another string to this string.

**Args:**

- ​**other** (`Self`): The string to append.

### `__str__`

`__str__(self: Self) -> Self`

### `__len__`

`__len__(self: Self) -> Int`

Returns the string length.

**Returns:**

The string length.

### `join`

`join[rank: Int](self: Self, elems: StaticIntTuple[rank]) -> Self`

Joins the elements from the tuple using the current string as a delimiter.

**Parameters:**

- ​**rank** (`Int`): The size of the tuple.

**Args:**

- ​**elems** (`StaticIntTuple[rank]`): The input tuple.

**Returns:**

The joined string.

`join[*Stringables: Stringable](self: Self, *elems: Stringables) -> Self`

Joins string elements using the current string as a delimiter.

**Parameters:**

- ​**Stringables** (`*Stringable`): The Stringable types.

**Args:**

- ​**elems** (`*Stringables`): The input values.

**Returns:**

The joined string.

### `as_bytes`

`as_bytes(self: Self) -> List[SIMD[si8, 1]]`

Retrieves the underlying byte sequence encoding the characters in this string.

This does not include the trailing null terminator.

**Returns:**

A sequence containing the encoded characters stored in this string.

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

### `split`

`split(self: Self, delimiter: Self) -> List[String]`

Split the string by a delimiter.

Raises: Error if an empty delimiter is specified.

**Args:**

- ​**delimiter** (`Self`): The string to split on.

**Returns:**

A List of Strings containing the input split by the delimiter.

### `replace`

`replace(self: Self, old: Self, new: Self) -> Self`

Return a copy of the string with all occurrences of substring `old` if replaced by `new`.

**Args:**

- ​**old** (`Self`): The substring to replace.
- ​**new** (`Self`): The substring to replace with.

**Returns:**

The string where all occurences of `old` are replaced with `new`.

### `strip`

`strip(self: Self) -> Self`

Return a copy of the string with leading and trailing whitespace characters removed.

See `isspace` for a list of whitespace characters

**Returns:**

A copy of the string with no leading or trailing whitespace characters.

### `rstrip`

`rstrip(self: Self) -> Self`

Return a copy of the string with trailing whitespace characters removed.

See `isspace` for a list of whitespace characters

**Returns:**

A copy of the string with no trailing whitespace characters.

### `lstrip`

`lstrip(self: Self) -> Self`

Return a copy of the string with leading whitespace characters removed.

See `isspace` for a list of whitespace characters

**Returns:**

A copy of the string with no leading whitespace characters.

### `__hash__`

`__hash__(self: Self) -> Int`

Hash the underlying buffer using builtin hash.

**Returns:**

A 64-bit hash value. This value is _not_ suitable for cryptographic uses. Its intended usage is for data structures. See the `hash` builtin documentation for more details.

### `lower`

`lower(self: Self) -> Self`

Returns a copy of the string with all ASCII cased characters converted to lowercase.

**Returns:**

A new string where cased letters have been convered to lowercase.

### `upper`

`upper(self: Self) -> Self`

Returns a copy of the string with all ASCII cased characters converted to uppercase.

**Returns:**

A new string where cased letters have been converted to uppercase.

### `startswith`

`startswith(self: Self, prefix: Self, start: Int, end: Int) -> Bool`

Checks if the string starts with the specified prefix between start and end positions. Returns True if found and False otherwise.

**Args:**

- ​**prefix** (`Self`): The prefix to check.
- ​**start** (`Int`): The start offset from which to check.
- ​**end** (`Int`): The end offset from which to check.

**Returns:**

True if the self\[start:end\] is prefixed by the input prefix.

### `endswith`

`endswith(self: Self, suffix: Self, start: Int, end: Int) -> Bool`

Checks if the string end with the specified suffix between start and end positions. Returns True if found and False otherwise.

**Args:**

- ​**suffix** (`Self`): The suffix to check.
- ​**start** (`Int`): The start offset from which to check.
- ​**end** (`Int`): The end offset from which to check.

**Returns:**

True if the self\[start:end\] is suffixed by the input suffix.

### `__int__`

`__int__(self: Self) -> Int`

Parses the given string as a base-10 integer and returns that value.

For example, `int("19")` returns `19`. If the given string cannot be parsed as an integer value, an error is raised. For example, `int("hi")` raises an error.

**Returns:**

An integer value that represents the string, or otherwise raises.

## `ord`

`ord(s: String) -> Int`

Returns an integer that represents the given one-character string.

Given a string representing one ASCII character, return an integer representing the code point of that character. For example, `ord("a")` returns the integer `97`. This is the inverse of the `chr()` function.

Currently, extended ASCII characters are not supported in this function.

**Args:**

- ​**s** (`String`): The input string, which must contain only a single character.

**Returns:**

An integer representing the code point of the given character.

## `chr`

`chr(c: Int) -> String`

Returns a string based on the given Unicode code point.

Returns the string representing a character whose code point (which must be a positive integer between 0 and 255) is the integer `i`. For example, `chr(97)` returns the string `"a"`. This is the inverse of the `ord()` function.

**Args:**

- ​**c** (`Int`): An integer between 0 and 255 that represents a code point.

**Returns:**

A string containing a single character based on the given code point.

## `atol`

`atol(str: String) -> Int`

Parses the given string as a base-10 integer and returns that value.

For example, `atol("19")` returns `19`. If the given string cannot be parsed as an integer value, an error is raised. For example, `atol("hi")` raises an error.

**Args:**

- ​**str** (`String`): A string to be parsed as a base-10 integer.

**Returns:**

An integer value that represents the string, or otherwise raises.

## `isdigit`

`isdigit(c: SIMD[si8, 1]) -> Bool`

Determines whether the given character is a digit \[0-9\].

**Args:**

- ​**c** (`SIMD[si8, 1]`): The character to check.

**Returns:**

True if the character is a digit.

## `isupper`

`isupper(c: SIMD[si8, 1]) -> Bool`

Determines whether the given character is an uppercase character. This currently only respects the default "C" locale, i.e. returns True only if the character specified is one of ABCDEFGHIJKLMNOPQRSTUVWXYZ.

**Args:**

- ​**c** (`SIMD[si8, 1]`): The character to check.

**Returns:**

True if the character is uppercase.

## `islower`

`islower(c: SIMD[si8, 1]) -> Bool`

Determines whether the given character is an lowercase character. This currently only respects the default "C" locale, i.e. returns True only if the character specified is one of abcdefghijklmnopqrstuvwxyz.

**Args:**

- ​**c** (`SIMD[si8, 1]`): The character to check.

**Returns:**

True if the character is lowercase.

## `isspace`

`isspace(c: SIMD[si8, 1]) -> Bool`

Determines whether the given character is a whitespace character. This currently only respects the default "C" locale, i.e. returns True only if the character specified is one of " ".

**Args:**

- ​**c** (`SIMD[si8, 1]`): The character to check.

**Returns:**

True if the character is one of the whitespace characters listed above, otherwise False.