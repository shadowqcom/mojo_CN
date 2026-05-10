---
title: "inline_array"
sidebar_label: "inline_array"
description: "Provides a fixed-size array implementation with compile-time size checking.  The `InlineArray` type represents a fixed-size sequence of homogeneous elements where the size is determined at compile tim"
---

# inline_array

Provides a fixed-size array implementation with compile-time size checking.

The `InlineArray` type represents a fixed-size sequence of homogeneous elements
where the size is determined at compile time. It provides efficient memory
layout and bounds checking while maintaining type safety.  The `InlineArray`
type is part of the `prelude` module and therefore does not need to be imported
in order to use it.

Examples:

```mojo
# Create an array of 3 integers
var arr: InlineArray[Int, 3] = [1, 2, 3]

# Access elements
print(arr[0])  # Prints 1

# Fill with a value
var filled = InlineArray[Int, 5](fill=42)
```

## 类型

### _InlineArrayIter

`@fieldwise_init struct _InlineArrayIter[
    mut`

### _InlineArrayIterOwned

`struct _InlineArrayIterOwned[T`

### InlineArray

`struct InlineArray[ElementType`

### a

`struct aString here with the index for the error message, as
        # it causes infinite cycles in gpu compilation tests
        comptime assert (
            index(idx) &gt;= 0
        ), "negative indexing is not supported, use e.g. `x[len(x) - 1]`"
        comptime assert index(idx) &lt; Self.size, "index is out of bounds"
        return self._unchecked_get(materialize[idx]())

    @always_inline
    def _unchecked_get(
        ref self, idx`

**Parameters:**

- **len(x) - 1**

**Implemented Traits:**

- `index(idx`

**Methods:**

- **__len__**: `@always_inline def __len__(self) -&gt; Int`

- **__eq__**: `@always_inline def __eq__(
        self, other`

- **__ne__**: `@always_inline def __ne__(
        self, other`

- **__hash__**: `def __hash__[
        H`

- **unsafe_get**: `@always_inline def unsafe_get(ref self, idx`

- **unsafe_ptr**: `@always_inline def unsafe_ptr[
        origin`

- **__contains__**: `@always_inline def __contains__(
        self, value`

- **_write_self_to**: `def _write_self_to[
        f`

- **iterate**: `@parameter def iterate(mut w`

- **write_to**: `def write_to(
        self, mut writer`

- **write_repr_to**: `def write_repr_to(
        self, mut writer`

- **write_fields**: `@parameter def write_fields(mut w`

- **__iter__**: `def __iter__(var self) -&gt; Self.IteratorOwnedType`

- **__iter__**: `def __iter__(ref self) -&gt; Self.IteratorType[origin_of(self)]`

- **__reversed__**: `def __reversed__(
        ref self,
    ) -&gt; _InlineArrayIter[Self.ElementType, Self.size, origin_of(self), False]`

## 函数

### _inline_array_construction_checks

`def _inline_array_construction_checks[size`
