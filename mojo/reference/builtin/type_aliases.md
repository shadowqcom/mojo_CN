# type\_aliases

Defines some type aliases.

These are Mojo built-ins, so you don't need to import them.

**Aliases:**

- ​`AnyRegType = AnyRegType`: Represents any register passable Mojo data type.

- ​`NoneType = None`: Represents the absence of a value.

- ​`ImmLifetime = lifetime<0>`: Immutable lifetime reference.

- ​`MutLifetime = lifetime<1>`: Mutable lifetime reference.

## `AnyLifetime`

This represents a lifetime reference of potentially parametric type. TODO: This should be replaced with a parametric type alias.

**Parameters:**

- ​**is\_mutable** (`i1`): Whether the lifetime reference is mutable.

**Aliases:**

- ​`type = lifetime<is_mutable>`

**Implemented traits:**

`AnyType`