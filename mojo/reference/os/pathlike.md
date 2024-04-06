# pathlike

Implements PathLike trait.

You can import the trait from the `os` package. For example:

```
from os import PathLike
```

## `PathLike`[​](https://docs.modular.com/mojo/stdlib/os/pathlike#pathlike "Direct link to pathlike")

A trait representing file system paths.

**Implemented traits:**

`AnyType`

**Methods:**

### `__del__`[​](https://docs.modular.com/mojo/stdlib/os/pathlike#__del__ "Direct link to __del__")

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

### `__fspath__`[​](https://docs.modular.com/mojo/stdlib/os/pathlike#__fspath__ "Direct link to __fspath__")

`__fspath__(self: T) -> String`

Return the file system path representation of the object.

**Returns:**

The file system path representation as a string.