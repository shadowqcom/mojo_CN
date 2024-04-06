# param\_env

Implements functions for retrieving compile-time defines.

You can use these functions to set parameter values or runtime constants based on name-value pairs defined on the command line. For example:

```
  from sys.param_env import is_defined  alias float_type = DType.float32 if is_defined["FLOAT32"]() else DType.float64  # Use `float_type` as a constant.
```

And on the command line:

```
  mojo -D FLOAT_32 main.mojo
```

For more information, see the [Mojo build docs](https://docs.modular.com/mojo/cli/build.html#d-keyvalue). The `mojo run` command also supports the `-D` option.

You can import these APIs from the `sys` package. For example:

```
from sys.param_env import is_defined
```

## `is_defined`[​](https://docs.modular.com/mojo/stdlib/sys/param_env#is_defined "Direct link to is_defined")

`is_defined[name: StringLiteral]() -> Bool`

Return true if the named value is defined.

**Parameters:**

- ​**name** (`StringLiteral`): The name to test.

**Returns:**

True if the name is defined.

## `env_get_int`[​](https://docs.modular.com/mojo/stdlib/sys/param_env#env_get_int "Direct link to env_get_int")

`env_get_int[name: StringLiteral]() -> Int`

Try to get an integer-valued define. Compilation fails if the name is not defined.

**Parameters:**

- ​**name** (`StringLiteral`): The name of the define.

**Returns:**

An integer parameter value.

`env_get_int[name: StringLiteral, default: Int]() -> Int`

Try to get an integer-valued define. If the name is not defined, return a default value instead.

**Parameters:**

- ​**name** (`StringLiteral`): The name of the define.
- ​**default** (`Int`): The default value to use.

**Returns:**

An integer parameter value.

## `env_get_string`[​](https://docs.modular.com/mojo/stdlib/sys/param_env#env_get_string "Direct link to env_get_string")

`env_get_string[name: StringLiteral]() -> StringLiteral`

Try to get a string-valued define. Compilation fails if the name is not defined.

**Parameters:**

- ​**name** (`StringLiteral`): The name of the define.

**Returns:**

A string parameter value.

`env_get_string[name: StringLiteral, default: StringLiteral]() -> StringLiteral`

Try to get a string-valued define. If the name is not defined, return a default value instead.

**Parameters:**

- ​**name** (`StringLiteral`): The name of the define.
- ​**default** (`StringLiteral`): The default value to use.

**Returns:**

A string parameter value.