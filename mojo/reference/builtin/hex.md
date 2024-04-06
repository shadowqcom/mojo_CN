# hex

Provides the `hex` function.

These are Mojo built-ins, so you don't need to import them.

## `hex`[​](https://docs.modular.com/mojo/stdlib/builtin/hex#hex "Direct link to hex")

`hex[T: Intable](value: T) -> String`

Returns the hex string represention of the given integer.

The hexadecimal representation is a base-16 encoding of the integer value.

The returned string will be prefixed with "0x" to indicate that the subsequent digits are hex.

**Parameters:**

- ​**T** (`Intable`): The intable type to represent in hexadecimal.

**Args:**

- ​**value** (`T`): The integer value to format.

**Returns:**

A string containing the hex representation of the given integer.