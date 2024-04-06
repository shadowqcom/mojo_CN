# coroutine

Implements classes and methods for coroutines.

These are Mojo built-ins, so you don't need to import them.

## `Coroutine`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#coroutine "Direct link to coroutine")

Represents a coroutine.

Coroutines can pause execution saving the state of the program (including values of local variables and the location of the next instruction to be executed). When the coroutine is resumed, execution continues from where it left off, with the saved state restored.

**Parameters:**

- ​**type** (`AnyRegType`): Type of value returned upon completion of the coroutine.

**Implemented traits:**

`AnyType`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#__init__ "Direct link to __init__")

`__init__(handle: !pop.coroutine<() -> !kgen.paramref<*"type">>) -> Self`

Construct a coroutine object from a handle.

**Args:**

- ​**handle** (`!pop.coroutine<() -> !kgen.paramref<*"type">>`): The init handle.

**Returns:**

The constructed coroutine object.

### `__del__`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#__del__ "Direct link to __del__")

`__del__(owned self: Self)`

Destroy the coroutine object.

### `__await__`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#__await__ "Direct link to __await__")

`__await__(self: Self) -> *"type"`

Suspends the current coroutine until the coroutine is complete.

**Returns:**

The coroutine promise.

### `get`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#get "Direct link to get")

`get(self: Self) -> *"type"`

Get the value of the fulfilled coroutine promise.

**Returns:**

The value of the fulfilled promise.

### `__call__`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#__call__ "Direct link to __call__")

`__call__(self: Self) -> *"type"`

Execute the coroutine synchronously.

**Returns:**

The coroutine promise.

## `RaisingCoroutine`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#raisingcoroutine "Direct link to raisingcoroutine")

Represents a coroutine that can raise.

Coroutines can pause execution saving the state of the program (including values of local variables and the location of the next instruction to be executed). When the coroutine is resumed, execution continues from where it left off, with the saved state restored.

**Parameters:**

- ​**type** (`AnyRegType`): Type of value returned upon completion of the coroutine.

**Implemented traits:**

`AnyType`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#__init__-1 "Direct link to __init__-1")

`__init__(handle: !pop.coroutine<() throws -> !kgen.variant<_stdlib::_builtin::_error::_Error, *"type">>) -> Self`

Construct a coroutine object from a handle.

**Args:**

- ​**handle** (`!pop.coroutine<() throws -> !kgen.variant<_stdlib::_builtin::_error::_Error, *"type">>`): The init handle.

**Returns:**

The constructed coroutine object.

### `__del__`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#__del__-1 "Direct link to __del__-1")

`__del__(owned self: Self)`

Destroy the coroutine object.

### `__await__`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#__await__-1 "Direct link to __await__-1")

`__await__(self: Self) -> *"type"`

Suspends the current coroutine until the coroutine is complete.

**Returns:**

The coroutine promise.

### `get`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#get-1 "Direct link to get-1")

`get(self: Self) -> *"type"`

Get the value of the fulfilled coroutine promise.

**Returns:**

The value of the fulfilled promise.

### `__call__`[​](https://docs.modular.com/mojo/stdlib/builtin/coroutine#__call__-1 "Direct link to __call__-1")

`__call__(self: Self) -> *"type"`

Execute the coroutine synchronously.

**Returns:**

The coroutine promise.