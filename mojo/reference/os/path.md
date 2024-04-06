# path

Implements the os.path operations.

You can import these APIs from the `os.path` package. For example:

```
from os.path import isdir
```

## `isdir`[​](https://docs.modular.com/mojo/stdlib/os/path/path#isdir "Direct link to isdir")

`isdir(path: String) -> Bool`

Return True if path is an existing directory. This follows symbolic links, so both islink() and isdir() can be true for the same path.

**Args:**

- ​**path** (`String`): The path to the directory.

**Returns:**

True if the path is a directory or a link to a directory and False otherwise.

`isdir[pathlike: PathLike](path: pathlike) -> Bool`

Return True if path is an existing directory. This follows symbolic links, so both islink() and isdir() can be true for the same path.

**Parameters:**

- ​**pathlike** (`PathLike`): The a type conforming to the os.PathLike trait.

**Args:**

- ​**path** (`pathlike`): The path to the directory.

**Returns:**

True if the path is a directory or a link to a directory and False otherwise.

## `isfile`[​](https://docs.modular.com/mojo/stdlib/os/path/path#isfile "Direct link to isfile")

`isfile(path: String) -> Bool`

Test whether a path is a regular file.

**Args:**

- ​**path** (`String`): The path to the directory.

**Returns:**

Returns True if the path is a regular file.

`isfile[pathlike: PathLike](path: pathlike) -> Bool`

Test whether a path is a regular file.

**Parameters:**

- ​**pathlike** (`PathLike`): The a type conforming to the os.PathLike trait.

**Args:**

- ​**path** (`pathlike`): The path to the directory.

**Returns:**

Returns True if the path is a regular file.

## `islink`[​](https://docs.modular.com/mojo/stdlib/os/path/path#islink "Direct link to islink")

`islink(path: String) -> Bool`

Return True if path refers to an existing directory entry that is a symbolic link.

**Args:**

- ​**path** (`String`): The path to the directory.

**Returns:**

True if the path is a link to a directory and False otherwise.

`islink[pathlike: PathLike](path: pathlike) -> Bool`

Return True if path refers to an existing directory entry that is a symbolic link.

**Parameters:**

- ​**pathlike** (`PathLike`): The a type conforming to the os.PathLike trait.

**Args:**

- ​**path** (`pathlike`): The path to the directory.

**Returns:**

True if the path is a link to a directory and False otherwise.

## `exists`[​](https://docs.modular.com/mojo/stdlib/os/path/path#exists "Direct link to exists")

`exists(path: String) -> Bool`

Return True if path exists.

**Args:**

- ​**path** (`String`): The path to the directory.

**Returns:**

Returns True if the path exists and is not a broken symbolic link.

`exists[pathlike: PathLike](path: pathlike) -> Bool`

Return True if path exists.

**Parameters:**

- ​**pathlike** (`PathLike`): The a type conforming to the os.PathLike trait.

**Args:**

- ​**path** (`pathlike`): The path to the directory.

**Returns:**

Returns True if the path exists and is not a broken symbolic link.

## `lexists`[​](https://docs.modular.com/mojo/stdlib/os/path/path#lexists "Direct link to lexists")

`lexists(path: String) -> Bool`

Return True if path exists or is a broken symlink.

**Args:**

- ​**path** (`String`): The path to the directory.

**Returns:**

Returns True if the path exists or is a broken symbolic link.

`lexists[pathlike: PathLike](path: pathlike) -> Bool`

Return True if path exists or is a broken symlink.

**Parameters:**

- ​**pathlike** (`PathLike`): The a type conforming to the os.PathLike trait.

**Args:**

- ​**path** (`pathlike`): The path to the directory.

**Returns:**

Returns True if the path exists or is a broken symbolic link.