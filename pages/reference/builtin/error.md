# error

Implements the Error class.

These are Mojo built-ins, so you don't need to import them.

## `Error`

This type represents an Error.

**Fields:**

- ​**data** (`DTypePointer[si8, 0]`): A pointer to the beginning of the string data being referenced.

- ​**loaded\_length** (`Int`): The length of the string being referenced. Error instances conditionally own their error message. To reduce the size of the error instance we use the sign bit of the length field to store the ownership value. When loaded\_length is negative it indicates ownership and a free is executed in the destructor.

**Implemented traits:**

`AnyType`, `Boolable`, `Stringable`

**Methods:**

### `__init__`

`__init__() -> Self`

Default constructor.

**Returns:**

The constructed Error object.

`__init__(value: StringLiteral) -> Self`

Construct an Error object with a given string literal.

**Args:**

- ​**value** (`StringLiteral`): The error message.

**Returns:**

The constructed Error object.

`__init__(src: String) -> Self`

Construct an Error object with a given string.

**Args:**

- ​**src** (`String`): The error message.

**Returns:**

The constructed Error object.

`__init__(src: StringRef) -> Self`

Construct an Error object with a given string ref.

**Args:**

- ​**src** (`StringRef`): The error message.

**Returns:**

The constructed Error object.

### `__copyinit__`

`__copyinit__(existing: Self) -> Self`

Creates a deep copy of an existing error.

**Returns:**

The copy of the original error.

### `__del__`

`__del__(owned self: Self)`

Releases memory if allocated.

### `__bool__`

`__bool__(self: Self) -> Bool`

Returns True if the error is set and false otherwise.

**Returns:**

True if the error object contains a value and False otherwise.

### `__str__`

`__str__(self: Self) -> String`

Converts the Error to string representation.

**Returns:**

A String of the error message.

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

### `__repr__`

`__repr__(self: Self) -> String`

Converts the Error to printable representation.

**Returns:**

A printable representation of the error message.

[

Previous

](https://docs.modular.com/mojo/stdlib/builtin/equality_comparable)