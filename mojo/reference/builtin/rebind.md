# rebind

Implements type rebind.

These are Mojo built-ins, so you don't need to import them.

## `rebind`[​](https://docs.modular.com/mojo/stdlib/builtin/rebind#rebind "Direct link to rebind")

`rebind[dest_type: AnyRegType, src_type: AnyRegType](val: src_type) -> dest_type`

Statically assert that a parameter input type `src_type` resolves to the same type as a parameter result type `dest_type` after function instantiation and "rebind" the input to the result type.

This function is meant to be used in uncommon cases where a parametric type depends on the value of a constrained parameter in order to manually refine the type with the constrained parameter value.

**Parameters:**

- ​**dest\_type** (`AnyRegType`): The type to rebind to.
- ​**src\_type** (`AnyRegType`): The original type.

**Args:**

- ​**val** (`src_type`): The value to rebind.

**Returns:**

The rebound value of `dest_type`.