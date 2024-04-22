# env

Implements basic routines for working with the OS.

You can import these APIs from the `os` package. For example:

```
from os import setenv
```

## `setenv`

`setenv(name: String, value: String, overwrite: Bool) -> Bool`

Changes or adds an environment variable.

**Constraints:**

The function only works on macOS or Linux and returns False otherwise.

**Args:**

- ​**name** (`String`): The name of the environment variable.
- ​**value** (`String`): The value of the environment variable.
- ​**overwrite** (`Bool`): If an environment variable with the given name already exists, its value is not changed unless `overwrite` is True.

**Returns:**

False if the name is empty or contains an `=` character. In any other case, True is returned.

## `getenv`

`getenv(name: String, default: String) -> String`

Returns the value of the given environment variable.

**Constraints:**

The function only works on macOS or Linux and returns an empty string otherwise.

**Args:**

- ​**name** (`String`): The name of the environment variable.
- ​**default** (`String`): The default value to return if the environment variable doesn't exist.

**Returns:**

The value of the environment variable.