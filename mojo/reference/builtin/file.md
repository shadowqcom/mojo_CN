# file

Implements the file based methods.

These are Mojo built-ins, so you don't need to import them.

For example, here's how to read a file:

```
var  f = open("my_file.txt", "r")print(f.read())f.close()
```

Or use a `with` statement to close the file automatically:

```
with open("my_file.txt", "r") as f:  print(f.read())
```

## `FileHandle`[​](https://docs.modular.com/mojo/stdlib/builtin/file#filehandle "Direct link to filehandle")

File handle to an opened file.

**Fields:**

- ​**handle** (`DTypePointer[invalid, 0]`): The underlying pointer to the file handle.

**Implemented traits:**

`AnyType`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/builtin/file#__init__ "Direct link to __init__")

`__init__(inout self: Self)`

Default constructor.

`__init__(inout self: Self, path: String, mode: String)`

Construct the FileHandle using the file path and mode.

**Args:**

- ​**path** (`String`): The file path.
- ​**mode** (`String`): The mode to open the file in (the mode can be "r" or "w").

`__init__(inout self: Self, path: StringRef, mode: StringRef)`

Construct the FileHandle using the file path and string.

**Args:**

- ​**path** (`StringRef`): The file path.
- ​**mode** (`StringRef`): The mode to open the file in (the mode can be "r" or "w").

### `__moveinit__`[​](https://docs.modular.com/mojo/stdlib/builtin/file#__moveinit__ "Direct link to __moveinit__")

`__moveinit__(inout self: Self, owned existing: Self)`

Moves constructor for the file handle.

**Args:**

- ​**existing** (`Self`): The existing file handle.

### `__del__`[​](https://docs.modular.com/mojo/stdlib/builtin/file#__del__ "Direct link to __del__")

`__del__(owned self: Self)`

Closes the file handle.

### `close`[​](https://docs.modular.com/mojo/stdlib/builtin/file#close "Direct link to close")

`close(inout self: Self)`

Closes the file handle.

### `read`[​](https://docs.modular.com/mojo/stdlib/builtin/file#read "Direct link to read")

`read(self: Self, size: SIMD[si64, 1]) -> String`

Reads the data from the file.

**Args:**

- ​**size** (`SIMD[si64, 1]`): Requested number of bytes to read.

**Returns:**

The contents of the file.

### `read_bytes`[​](https://docs.modular.com/mojo/stdlib/builtin/file#read_bytes "Direct link to read_bytes")

`read_bytes(self: Self, size: SIMD[si64, 1]) -> List[SIMD[si8, 1]]`

Read from file buffer until we have `size` characters or we hit EOF. If `size` is negative or omitted, read until EOF.

**Args:**

- ​**size** (`SIMD[si64, 1]`): Requested number of bytes to read.

**Returns:**

The contents of the file.

### `seek`[​](https://docs.modular.com/mojo/stdlib/builtin/file#seek "Direct link to seek")

`seek(self: Self, offset: SIMD[ui64, 1]) -> SIMD[ui64, 1]`

Seeks to the given offset in the file.

Raises: An error if this file handle is invalid, or if file seek returned a failure.

**Args:**

- ​**offset** (`SIMD[ui64, 1]`): The byte offset to seek to from the start of the file.

**Returns:**

The resulting byte offset from the start of the file.

### `write`[​](https://docs.modular.com/mojo/stdlib/builtin/file#write "Direct link to write")

`write(self: Self, data: StringLiteral)`

Write the data to the file.

**Args:**

- ​**data** (`StringLiteral`): The data to write to the file.

`write(self: Self, data: String)`

Write the data to the file.

**Args:**

- ​**data** (`String`): The data to write to the file.

`write(self: Self, data: StringRef)`

Write the data to the file.

**Args:**

- ​**data** (`StringRef`): The data to write to the file.

### `__enter__`[​](https://docs.modular.com/mojo/stdlib/builtin/file#__enter__ "Direct link to __enter__")

`__enter__(owned self: Self) -> Self`

The function to call when entering the context.

## `open`[​](https://docs.modular.com/mojo/stdlib/builtin/file#open "Direct link to open")

`open(path: String, mode: String) -> FileHandle`

Opens the file specified by path using the mode provided, returning a FileHandle.

**Args:**

- ​**path** (`String`): The path to the file to open.
- ​**mode** (`String`): The mode to open the file in.

**Returns:**

A file handle.

`open[pathlike: PathLike](path: pathlike, mode: String) -> FileHandle`

Opens the file specified by path using the mode provided, returning a FileHandle.

**Parameters:**

- ​**pathlike** (`PathLike`): The a type conforming to the os.PathLike trait.

**Args:**

- ​**path** (`pathlike`): The path to the file to open.
- ​**mode** (`String`): The mode to open the file in (the mode can be "r" or "w").

**Returns:**

A file handle.