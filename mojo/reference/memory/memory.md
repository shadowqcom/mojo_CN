# memory

Defines functions for memory manipulations.

You can import these APIs from the `memory` package. For example:

```
from memory import memcmp
```

## `memcmp`[​](https://docs.modular.com/mojo/stdlib/memory/memory#memcmp "Direct link to memcmp")

`memcmp[s1: DType, s1: AddressSpace](s1: DTypePointer[s1, s1], s2: DTypePointer[s1, s1], count: Int) -> Int`

Compares two buffers. Both strings are assumed to be of the same length.

**Args:**

- ​**s1** (`DTypePointer[s1, s1]`): The first buffer address.
- ​**s2** (`DTypePointer[s1, s1]`): The second buffer address.
- ​**count** (`Int`): The number of elements in the buffers.

**Returns:**

Returns 0 if the bytes buffers are identical, 1 if s1 > s2, and -1 if s1 < s2. The comparison is performed by the first different byte in the buffer.

`memcmp[type: AnyRegType, address_space: AddressSpace](s1: Pointer[*"type", address_space], s2: Pointer[*"type", address_space], count: Int) -> Int`

Compares two buffers. Both strings are assumed to be of the same length.

**Parameters:**

- ​**type** (`AnyRegType`): The element type.
- ​**address\_space** (`AddressSpace`): The address space of the pointer.

**Args:**

- ​**s1** (`Pointer[*"type", address_space]`): The first buffer address.
- ​**s2** (`Pointer[*"type", address_space]`): The second buffer address.
- ​**count** (`Int`): The number of elements in the buffers.

**Returns:**

Returns 0 if the bytes strings are identical, 1 if s1 > s2, and -1 if s1 < s2. The comparison is performed by the first different byte in the byte strings.

## `memcpy`[​](https://docs.modular.com/mojo/stdlib/memory/memory#memcpy "Direct link to memcpy")

`memcpy[count: Int, dest: AnyRegType, dest: AddressSpace](dest: Pointer[dest, dest], src: Pointer[dest, dest])`

Copies a memory area.

**Parameters:**

- ​**count** (`Int`): The number of elements to copy (not bytes!).

**Args:**

- ​**dest** (`Pointer[dest, dest]`): The destination pointer.
- ​**src** (`Pointer[dest, dest]`): The source pointer.

`memcpy[count: Int, dest: DType, dest: AddressSpace](dest: DTypePointer[dest, dest], src: DTypePointer[dest, dest])`

Copies a memory area.

**Parameters:**

- ​**count** (`Int`): The number of elements to copy (not bytes!).

**Args:**

- ​**dest** (`DTypePointer[dest, dest]`): The destination pointer.
- ​**src** (`DTypePointer[dest, dest]`): The source pointer.

`memcpy[dest: AnyRegType, dest: AddressSpace](dest: Pointer[dest, dest], src: Pointer[dest, dest], count: Int)`

Copies a memory area.

**Args:**

- ​**dest** (`Pointer[dest, dest]`): The destination pointer.
- ​**src** (`Pointer[dest, dest]`): The source pointer.
- ​**count** (`Int`): The number of elements to copy.

`memcpy[dest: DType, dest: AddressSpace](dest: DTypePointer[dest, dest], src: DTypePointer[dest, dest], count: Int)`

Copies a memory area.

**Args:**

- ​**dest** (`DTypePointer[dest, dest]`): The destination pointer.
- ​**src** (`DTypePointer[dest, dest]`): The source pointer.
- ​**count** (`Int`): The number of elements to copy (not bytes!).

## `memset`[​](https://docs.modular.com/mojo/stdlib/memory/memory#memset "Direct link to memset")

`memset[type: DType, address_space: AddressSpace](ptr: DTypePointer[type, address_space], value: SIMD[ui8, 1], count: Int)`

Fills memory with the given value.

**Parameters:**

- ​**type** (`DType`): The element dtype.
- ​**address\_space** (`AddressSpace`): The address space of the pointer.

**Args:**

- ​**ptr** (`DTypePointer[type, address_space]`): Pointer to the beginning of the memory block to fill.
- ​**value** (`SIMD[ui8, 1]`): The value to fill with.
- ​**count** (`Int`): Number of elements to fill (in elements, not bytes).

`memset[type: AnyRegType, address_space: AddressSpace](ptr: Pointer[*"type", address_space], value: SIMD[ui8, 1], count: Int)`

Fills memory with the given value.

**Parameters:**

- ​**type** (`AnyRegType`): The element dtype.
- ​**address\_space** (`AddressSpace`): The address space of the pointer.

**Args:**

- ​**ptr** (`Pointer[*"type", address_space]`): Pointer to the beginning of the memory block to fill.
- ​**value** (`SIMD[ui8, 1]`): The value to fill with.
- ​**count** (`Int`): Number of elements to fill (in elements, not bytes).

## `memset_zero`[​](https://docs.modular.com/mojo/stdlib/memory/memory#memset_zero "Direct link to memset_zero")

`memset_zero[type: DType, address_space: AddressSpace](ptr: DTypePointer[type, address_space], count: Int)`

Fills memory with zeros.

**Parameters:**

- ​**type** (`DType`): The element dtype.
- ​**address\_space** (`AddressSpace`): The address space of the pointer.

**Args:**

- ​**ptr** (`DTypePointer[type, address_space]`): Pointer to the beginning of the memory block to fill.
- ​**count** (`Int`): Number of elements to set (in elements, not bytes).

`memset_zero[type: AnyRegType, address_space: AddressSpace](ptr: Pointer[*"type", address_space], count: Int)`

Fills memory with zeros.

**Parameters:**

- ​**type** (`AnyRegType`): The element type.
- ​**address\_space** (`AddressSpace`): The address space of the pointer.

**Args:**

- ​**ptr** (`Pointer[*"type", address_space]`): Pointer to the beginning of the memory block to fill.
- ​**count** (`Int`): Number of elements to fill (in elements, not bytes).

## `stack_allocation`[​](https://docs.modular.com/mojo/stdlib/memory/memory#stack_allocation "Direct link to stack_allocation")

`stack_allocation[count: Int, type: DType, alignment: Int, address_space: AddressSpace]() -> DTypePointer[type, address_space]`

Allocates data buffer space on the stack given a data type and number of elements.

**Parameters:**

- ​**count** (`Int`): Number of elements to allocate memory for.
- ​**type** (`DType`): The data type of each element.
- ​**alignment** (`Int`): Address alignment of the allocated data.
- ​**address\_space** (`AddressSpace`): The address space of the pointer.

**Returns:**

A data pointer of the given type pointing to the allocated space.

`stack_allocation[count: Int, type: AnyRegType, alignment: Int, address_space: AddressSpace]() -> Pointer[*"type", address_space]`

Allocates data buffer space on the stack given a data type and number of elements.

**Parameters:**

- ​**count** (`Int`): Number of elements to allocate memory for.
- ​**type** (`AnyRegType`): The data type of each element.
- ​**alignment** (`Int`): Address alignment of the allocated data.
- ​**address\_space** (`AddressSpace`): The address space of the pointer.

**Returns:**

A data pointer of the given type pointing to the allocated space.