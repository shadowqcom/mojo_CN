# path

Implements `Path` and related functions.

**Aliases:**

- ​`DIR_SEPARATOR = cond(apply(:!lit.signature<("self": !lit.declref<@stdlib::@builtin::@bool::@Bool> borrow) -> i1> @stdlib::@builtin::@bool::@Bool::@"__mlir_i1__(stdlib::builtin::bool::Bool)", apply(:!lit.signature<() -> !lit.declref<@stdlib::@builtin::@bool::@Bool>> @stdlib::@sys::@info::@"os_is_windows()")), {:string "\\"}, {:string "/"})`

## `Path`

The Path object.

**Fields:**

- ​**path** (`String`): The underlying path string representation.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Hashable`, `KeyElement`, `Movable`, `PathLike`, `Stringable`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Initializes a path with the current directory.

`__init__(inout self: Self, path: StringLiteral)`

Initializes a path with the provided path.

**Args:**

- ​**path** (`StringLiteral`): The file system path.

`__init__(inout self: Self, path: String)`

Initializes a path with the provided path.

**Args:**

- ​**path** (`String`): The file system path.

### `__copyinit__`

`__copyinit__(inout self: Self, existing: Self)`

Copy constructor for the path struct.

**Args:**

- ​**existing** (`Self`): The existing struct to copy from.

### `__moveinit__`

`__moveinit__(inout self: Self, owned existing: Self)`

Move data of an existing Path into a new one.

**Args:**

- ​**existing** (`Self`): The existing Path.

### `__eq__`

`__eq__(self: Self, other: Self) -> Bool`

Returns True if the two paths are equal.

**Args:**

- ​**other** (`Self`): The other path to compare against.

**Returns:**

True if the paths are equal and False otherwise.

### `__ne__`

`__ne__(self: Self, other: Self) -> Bool`

Returns True if the two paths are not equal.

**Args:**

- ​**other** (`Self`): The other path to compare against.

**Returns:**

True if the paths are not equal and False otherwise.

### `__truediv__`

`__truediv__(self: Self, suffix: Self) -> Self`

Joins two paths using the system-defined path separator.

**Args:**

- ​**suffix** (`Self`): The suffix to append to the path.

**Returns:**

A new path with the suffix appended to the current path.

`__truediv__(self: Self, suffix: StringLiteral) -> Self`

Joins two paths using the system-defined path separator.

**Args:**

- ​**suffix** (`StringLiteral`): The suffix to append to the path.

**Returns:**

A new path with the suffix appended to the current path.

`__truediv__(self: Self, suffix: String) -> Self`

Joins two paths using the system-defined path separator.

**Args:**

- ​**suffix** (`String`): The suffix to append to the path.

**Returns:**

A new path with the suffix appended to the current path.

### `__itruediv__`

`__itruediv__(inout self: Self, suffix: String)`

Joins two paths using the system-defined path separator.

**Args:**

- ​**suffix** (`String`): The suffix to append to the path.

### `__str__`

`__str__(self: Self) -> String`

Returns a string representation of the path.

**Returns:**

A string represntation of the path.

### `__fspath__`

`__fspath__(self: Self) -> String`

Returns a string representation of the path.

**Returns:**

A string represntation of the path.

### `__repr__`

`__repr__(self: Self) -> String`

Returns a printable representation of the path.

**Returns:**

A printable represntation of the path.

### `__hash__`

`__hash__(self: Self) -> Int`

Hash the underlying path string using builtin hash.

**Returns:**

An integer value containing the hash of the path string.

### `stat`

`stat(self: Self) -> stat_result`

Returns the stat information on the path.

**Returns:**

A stat\_result object containing information about the path.

### `lstat`

`lstat(self: Self) -> stat_result`

Returns the lstat information on the path. This is similar to stat, but if the file is a symlink then it gives you information about the symlink rather than the target.

**Returns:**

A stat\_result object containing information about the path.

### `exists`

`exists(self: Self) -> Bool`

Returns True if the path exists and False otherwise.

**Returns:**

True if the path exists on disk and False otherwise.

### `is_dir`

`is_dir(self: Self) -> Bool`

Returns True if the path is a directory and False otherwise.

**Returns:**

Return True if the path points to a directory (or a link pointing to a directory).

### `is_file`

`is_file(self: Self) -> Bool`

Returns True if the path is a file and False otherwise.

**Returns:**

Return True if the path points to a file (or a link pointing to a file).

### `read_text`

`read_text(self: Self) -> String`

Returns content of the file.

**Returns:**

Contents of file as string.

### `read_bytes`

`read_bytes(self: Self) -> List[SIMD[si8, 1]]`

Returns content of the file as bytes.

**Returns:**

Contents of file as list of bytes.

### `write_text`

`write_text[stringable: Stringable](self: Self, value: stringable)`

Writes the value to the file as text.

**Parameters:**

- ​**stringable** (`Stringable`): The Stringable type.

**Args:**

- ​**value** (`stringable`): The value to write.

### `suffix`

`suffix(self: Self) -> String`

The path's extension, if any. This includes the leading period. For example: '.txt'. If no extension is found, returns the empty string.

**Returns:**

The path's extension.

### `joinpath`

`joinpath(self: Self, *pathsegments: String) -> Self`

Joins the Path using the pathsegments.

**Args:**

- ​**pathsegments** (`*String`): The path segments.

**Returns:**

The path concatination with the pathsegments using the directory separator.

### `listdir`

`listdir(self: Self) -> List[Path]`

Gets the list of entries contained in the path provided.

**Returns:**

Returns the list of entries in the path provided.

## `cwd`

`cwd() -> Path`

Gets the current directory.

**Returns:**

The current directory.