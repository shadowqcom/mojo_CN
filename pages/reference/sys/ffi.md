# ffi

Implements a foreign functions interface (FFI).

**Aliases:**

- ​`DEFAULT_RTLD = __or__(2, cond(apply(:!lit.signature<("self": !lit.declref<@stdlib::@builtin::@bool::@Bool> borrow) -> i1> @stdlib::@builtin::@bool::@Bool::@"__mlir_i1__(stdlib::builtin::bool::Bool)", apply(:!lit.signature<() -> !lit.declref<@stdlib::@builtin::@bool::@Bool>> @stdlib::@sys::@info::@"os_is_linux()")), {:!kgen.int_literal 256}, {:!kgen.int_literal 8}))`

## `RTLD`

Enumeration of the RTLD flags used during dynamic library loading.

**Aliases:**

- ​`LAZY = 1`: Load library lazily (defer function resolution until needed).

- ​`NOW = 2`: Load library immediately (resolve all symbols on load).

- ​`LOCAL = 4`: Make symbols not available for symbol resolution of subsequently loaded libraries.

- ​`GLOBAL = cond(apply(:!lit.signature<("self": !lit.declref<@stdlib::@builtin::@bool::@Bool> borrow) -> i1> @stdlib::@builtin::@bool::@Bool::@"__mlir_i1__(stdlib::builtin::bool::Bool)", apply(:!lit.signature<() -> !lit.declref<@stdlib::@builtin::@bool::@Bool>> @stdlib::@sys::@info::@"os_is_linux()")), {:!kgen.int_literal 256}, {:!kgen.int_literal 8})`: Make symbols available for symbol resolution of subsequently loaded libraries.

**Implemented traits:**

`AnyType`

## `DLHandle`

Represents a dynamically linked library that can be loaded and unloaded.

The library is loaded on initialization and unloaded on deletion of the object.

**Fields:**

- ​**handle** (`DTypePointer[si8, 0]`): The handle to the dynamic library.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `Movable`

**Methods:**

### `__init__`

`__init__(path: String, flags: Int) -> Self`

Initialize a DLHandle object by loading the dynamic library at the given path.

**Args:**

- ​**path** (`String`): The path to the dynamic library file.
- ​**flags** (`Int`): The flags to load the dynamic library.

**Returns:**

The constructed handle object.

### `close`

`close(inout self: Self)`

Delete the DLHandle object unloading the associated dynamic library.

### `get_function`

`get_function[result_type: AnyRegType](self: Self, name: String) -> result_type`

Returns a handle to the function with the given name in the dynamic library.

**Parameters:**

- ​**result\_type** (`AnyRegType`): The type of the function pointer to return.

**Args:**

- ​**name** (`String`): The name of the function to get the handle for.

**Returns:**

A handle to the function.

## `external_call`

`external_call[callee: StringLiteral, type: AnyRegType]() -> *"type"`

Calls an external function.

**Parameters:**

- ​**callee** (`StringLiteral`): The name of the external function.
- ​**type** (`AnyRegType`): The return type.

**Returns:**

The external call result.

`external_call[callee: StringLiteral, type: AnyRegType, T0: AnyRegType](arg0: T0) -> *"type"`

Calls an external function.

**Parameters:**

- ​**callee** (`StringLiteral`): The name of the external function.
- ​**type** (`AnyRegType`): The return type.
- ​**T0** (`AnyRegType`): The first argument type.

**Args:**

- ​**arg0** (`T0`): The first argument.

**Returns:**

The external call result.

`external_call[callee: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType](arg0: T0, arg1: T1) -> *"type"`

Calls an external function.

**Parameters:**

- ​**callee** (`StringLiteral`): The name of the external function.
- ​**type** (`AnyRegType`): The return type.
- ​**T0** (`AnyRegType`): The first argument type.
- ​**T1** (`AnyRegType`): The second argument type.

**Args:**

- ​**arg0** (`T0`): The first argument.
- ​**arg1** (`T1`): The second argument.

**Returns:**

The external call result.

`external_call[callee: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType, T2: AnyRegType](arg0: T0, arg1: T1, arg2: T2) -> *"type"`

Calls an external function.

**Parameters:**

- ​**callee** (`StringLiteral`): The name of the external function.
- ​**type** (`AnyRegType`): The return type.
- ​**T0** (`AnyRegType`): The first argument type.
- ​**T1** (`AnyRegType`): The second argument type.
- ​**T2** (`AnyRegType`): The third argument type.

**Args:**

- ​**arg0** (`T0`): The first argument.
- ​**arg1** (`T1`): The second argument.
- ​**arg2** (`T2`): The third argument.

**Returns:**

The external call result.

`external_call[callee: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType, T2: AnyRegType, T3: AnyRegType](arg0: T0, arg1: T1, arg2: T2, arg3: T3) -> *"type"`

Calls an external function.

**Parameters:**

- ​**callee** (`StringLiteral`): The name of the external function.
- ​**type** (`AnyRegType`): The return type.
- ​**T0** (`AnyRegType`): The first argument type.
- ​**T1** (`AnyRegType`): The second argument type.
- ​**T2** (`AnyRegType`): The third argument type.
- ​**T3** (`AnyRegType`): The fourth argument type.

**Args:**

- ​**arg0** (`T0`): The first argument.
- ​**arg1** (`T1`): The second argument.
- ​**arg2** (`T2`): The third argument.
- ​**arg3** (`T3`): The fourth argument.

**Returns:**

The external call result.

`external_call[callee: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType, T2: AnyRegType, T3: AnyRegType, T4: AnyRegType](arg0: T0, arg1: T1, arg2: T2, arg3: T3, arg4: T4) -> *"type"`

Calls an external function.

**Parameters:**

- ​**callee** (`StringLiteral`): The name of the external function.
- ​**type** (`AnyRegType`): The return type.
- ​**T0** (`AnyRegType`): The first argument type.
- ​**T1** (`AnyRegType`): The second argument type.
- ​**T2** (`AnyRegType`): The third argument type.
- ​**T3** (`AnyRegType`): The fourth argument type.
- ​**T4** (`AnyRegType`): The fifth argument type.

**Args:**

- ​**arg0** (`T0`): The first argument.
- ​**arg1** (`T1`): The second argument.
- ​**arg2** (`T2`): The third argument.
- ​**arg3** (`T3`): The fourth argument.
- ​**arg4** (`T4`): The fifth argument.

**Returns:**

The external call result.