# os

Implements os methods.

You can import a method from the `os` package. For example:

```
from os import listdir
```

## `listdir`

`listdir(path: String) -> List[String]`

Gets the list of entries contained in the path provided.

**Args:**

- ​**path** (`String`): The path to the directory.

**Returns:**

Returns the list of entries in the path provided.

`listdir[pathlike: PathLike](path: pathlike) -> List[String]`

Gets the list of entries contained in the path provided.

**Parameters:**

- ​**pathlike** (`PathLike`): The a type conforming to the os.PathLike trait.

**Args:**

- ​**path** (`pathlike`): The path to the directory.

**Returns:**

Returns the list of entries in the path provided.

## `abort`

`abort[result: Movable]() -> result`

Calls a target dependent trap instruction if available.

**Parameters:**

- ​**result** (`Movable`): The result type.

**Returns:**

A null result type.

`abort[result: Movable, stringable: Stringable](message: stringable) -> result`

Calls a target dependent trap instruction if available.

**Parameters:**

- ​**result** (`Movable`): The result type.
- ​**stringable** (`Stringable`): The Stringable type.

**Args:**

- ​**message** (`stringable`): The message to include when aborting.

**Returns:**

A null result type.