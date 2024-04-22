# io

Provides utilities for working with input/output.

These are Mojo built-ins, so you don't need to import them.

## `print`

`print(*, sep: StringLiteral, end: StringLiteral, flush: Bool)`

Prints the end value.

**Args:**

- ​**sep** (`StringLiteral`): The separator used between elements.
- ​**end** (`StringLiteral`): The String to write after printing the elements.
- ​**flush** (`Bool`): If set to true, then the stream is forcibly flushed.

`print[T: Stringable, *Ts: Stringable](first: T, *rest: Ts, *, sep: StringLiteral, end: StringLiteral, flush: Bool)`

Prints elements to the text stream. Each element is separated by `sep` and followed by `end`.

**Parameters:**

- ​**T** (`Stringable`): The first element type.
- ​**Ts** (`*Stringable`): The remaining element types.

**Args:**

- ​**first** (`T`): The first element.
- ​**rest** (`*Ts`): The remaining elements.
- ​**sep** (`StringLiteral`): The separator used between elements.
- ​**end** (`StringLiteral`): The String to write after printing the elements.
- ​**flush** (`Bool`): If set to true, then the stream is forcibly flushed.