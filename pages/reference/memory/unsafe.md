# unsafe

Implements classes for working with unsafe pointers.

You can import these APIs from the `memory` package. For example:

```
from memory.unsafe import Pointer, AnyLifetime
```

## `AddressSpace`

Address space of the pointer.

**Aliases:**

- ​`GENERIC = 0`: Generic address space.

**Implemented traits:**

`AnyType`, `Copyable`, `EqualityComparable`, `Movable`

**Methods:**

### `__init__`

`__init__(value: Int) -> Self`

Initializes the address space from the underlying integeral value.

**Args:**

- ​**value** (`Int`): The address space value.

**Returns:**

The address space.

`__init__(value: _GPUAddressSpace) -> Self`

Initializes the address space from the underlying integeral value.

**Args:**

- ​**value** (`_GPUAddressSpace`): The address space value.

**Returns:**

The address space.

### `__eq__`

`__eq__(self: Self, other: Self) -> Bool`

True if the two address spaces are equal and False otherwise.

**Args:**

- ​**other** (`Self`): The other address space value.

**Returns:**

True if the two address spaces are equal and False otherwise.

### `__ne__`

`__ne__(self: Self, other: Self) -> Bool`

True if the two address spaces are inequal and False otherwise.

**Args:**

- ​**other** (`Self`): The other address space value.

**Returns:**

True if the two address spaces are inequal and False otherwise.

### `value`

`value(self: Self) -> Int`

The integral value of the address space.

**Returns:**

The integral value of the address space.

### `__int__`

`__int__(self: Self) -> Int`

The integral value of the address space.

**Returns:**

The integral value of the address space.

## `Reference`

Defines a non-nullable safe reference.

**Parameters:**

- ​**type** (`AnyType`): Type of the underlying data.
- ​**is\_mutable** (`i1`): Whether the referenced data may be mutated through this.
- ​**lifetime** (`lifetime<is_mutable>`): The lifetime of the reference.

**Aliases:**

- ​`mlir_ref_type = !lit.ref<:trait<@stdlib::@builtin::@anytype::@AnyType> *"type", mut=is_mutable, lifetime>`

**Fields:**

- ​**value** (`!lit.ref<:trait<@stdlib::@builtin::@anytype::@AnyType> *"type", mut=is_mutable, lifetime>`): The underlying MLIR reference.

**Implemented traits:**

`AnyType`, `Copyable`, `Movable`

**Methods:**

### `__init__`

`__init__(inout self: Self, value: !lit.ref<:trait<_stdlib::_builtin::_anytype::_AnyType> *"type", mut=is_mutable, lifetime>)`

Constructs a Reference from the MLIR reference.

**Args:**

- ​**value** (`!lit.ref<:trait<_stdlib::_builtin::_anytype::_AnyType> *"type", mut=is_mutable, lifetime>`): The MLIR reference.

### `__refitem__`

`__refitem__(self: Self) -> !lit.ref<:trait<_stdlib::_builtin::_anytype::_AnyType> *"type", mut=is_mutable, lifetime>`

Enable subscript syntax `ref[]` to access the element.

**Returns:**

The MLIR reference for the Mojo compiler to use.

### `__mlir_ref__`

`__mlir_ref__(self: Self) -> !lit.ref<:trait<_stdlib::_builtin::_anytype::_AnyType> *"type", mut=is_mutable, lifetime>`

Enable the Mojo compiler to see into `Reference`.

**Returns:**

The MLIR reference for the Mojo compiler to use.

### `get_unsafe_pointer`

`get_unsafe_pointer(self: Self) -> Pointer[*"type", 0]`

Constructs a Pointer from a safe reference.

**Returns:**

Constructed Pointer object.

### `offset`

`offset(self: Self, offset: Int) -> Self`

Offset the reference like an array.

**Args:**

- ​**offset** (`Int`): The integer offset.

**Returns:**

A new reference.

### `bitcast_element`

`bitcast_element[new_element_type: AnyType](self: Self) -> Reference[new_element_type, is_mutable, lifetime]`

Cast the reference to one of another element type, but the same lifetime, mutability, and address space.

**Parameters:**

- ​**new\_element\_type** (`AnyType`): The result type.

**Returns:**

The new reference.

### `destroy_element_unsafe`

`destroy_element_unsafe(self: Self)`

This unsafe operation runs the destructor of the element addressed by this reference. This is equivalent to `x->~Type()` syntax in C++.

## `Pointer`

Defines a Pointer struct that contains the address of a register passable type.

**Parameters:**

- ​**type** (`AnyRegType`): Type of the underlying data.
- ​**address\_space** (`AddressSpace`): The address space the pointer is in.

**Aliases:**

- ​`pointer_type = pointer<*"type", #lit.struct.extract<:@stdlib::@builtin::@int::@Int apply(:!lit.signature<("self": !lit.declref<@stdlib::@memory::@unsafe::@AddressSpace> borrow) -> !lit.declref<@stdlib::@builtin::@int::@Int>> @stdlib::@memory::@unsafe::@AddressSpace::@"value(stdlib::memory::unsafe::AddressSpace)", address_space), "value">>`

**Fields:**

- ​**address** (`pointer<*"type", #lit.struct.extract<:@stdlib::@builtin::@int::@Int apply(:!lit.signature<("self": !lit.declref<@stdlib::@memory::@unsafe::@AddressSpace> borrow) -> !lit.declref<@stdlib::@builtin::@int::@Int>> @stdlib::@memory::@unsafe::@AddressSpace::@"value(stdlib::memory::unsafe::AddressSpace)", address_space), "value">>`): The pointed-to address.

**Implemented traits:**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Intable`, `Movable`, `Stringable`

**Methods:**

### `__init__`

`__init__() -> Self`

Constructs a null Pointer from the value of pop.pointer type.

**Returns:**

Constructed Pointer object.

`__init__(address: Self) -> Self`

Constructs a Pointer from the address.

**Args:**

- ​**address** (`Self`): The input pointer.

**Returns:**

Constructed Pointer object.

`__init__(address: pointer<*"type", #lit.struct.extract<:_stdlib::_builtin::_int::_Int apply(:!lit.signature<("self": !lit.declref<_stdlib::_memory::_unsafe::_AddressSpace> borrow) -> !lit.declref<_stdlib::_builtin::_int::_Int>> _stdlib::_memory::_unsafe::_AddressSpace::_"value(stdlib::memory::unsafe::AddressSpace)", address_space), "value">>) -> Self`

Constructs a Pointer from the address.

**Args:**

- ​**address** (`pointer<*"type", #lit.struct.extract<:_stdlib::_builtin::_int::_Int apply(:!lit.signature<("self": !lit.declref<_stdlib::_memory::_unsafe::_AddressSpace> borrow) -> !lit.declref<_stdlib::_builtin::_int::_Int>> _stdlib::_memory::_unsafe::_AddressSpace::_"value(stdlib::memory::unsafe::AddressSpace)", address_space), "value">>`): The input pointer address.

**Returns:**

Constructed Pointer object.

`__init__(value: SIMD[address, 1]) -> Self`

Constructs a Pointer from the value of scalar address.

**Args:**

- ​**value** (`SIMD[address, 1]`): The input pointer index.

**Returns:**

Constructed Pointer object.

### `__bool__`

`__bool__(self: Self) -> Bool`

Checks if the Pointer is null.

**Returns:**

Returns False if the Pointer is null and True otherwise.

### `__getitem__`

`__getitem__[T: Intable](self: Self, offset: T) -> *"type"`

Loads the value the Pointer object points to with the given offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**offset** (`T`): The offset to load from.

**Returns:**

The loaded value.

### `__setitem__`

`__setitem__[T: Intable](self: Self, offset: T, *val: "type")`

Stores the specified value to the location the Pointer object points to with the given offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**offset** (`T`): The offset to store to.
- ​**val** (`*"type"`): The value to store.

### `__lt__`

`__lt__(self: Self, rhs: Self) -> Bool`

Returns True if this pointer represents a lower address than rhs.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if this pointer represents a lower address and False otherwise.

### `__eq__`

`__eq__(self: Self, rhs: Self) -> Bool`

Returns True if the two pointers are equal.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if the two pointers are equal and False otherwise.

### `__ne__`

`__ne__(self: Self, rhs: Self) -> Bool`

Returns True if the two pointers are not equal.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if the two pointers are not equal and False otherwise.

### `__add__`

`__add__[T: Intable](self: Self, rhs: T) -> Self`

Returns a new pointer shifted by the specified offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**rhs** (`T`): The offset.

**Returns:**

The new Pointer shifted by the offset.

### `__sub__`

`__sub__[T: Intable](self: Self, rhs: T) -> Self`

Returns a new pointer shifted back by the specified offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**rhs** (`T`): The offset.

**Returns:**

The new Pointer shifted back by the offset.

### `__iadd__`

`__iadd__[T: Intable](inout self: Self, rhs: T)`

Shifts the current pointer by the specified offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**rhs** (`T`): The offset.

### `__isub__`

`__isub__[T: Intable](inout self: Self, rhs: T)`

Shifts back the current pointer by the specified offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**rhs** (`T`): The offset.

### `__refitem__`

`__refitem__(self: Self) -> !lit.ref<*"type", mut #lit.lifetime, #lit.struct.extract<:_stdlib::_builtin::_int::_Int apply(:!lit.signature<("self": !lit.declref<_stdlib::_memory::_unsafe::_AddressSpace> borrow) -> !lit.declref<_stdlib::_builtin::_int::_Int>> _stdlib::_memory::_unsafe::_AddressSpace::_"value(stdlib::memory::unsafe::AddressSpace)", address_space), "value">>`

Enable subscript syntax `ref[]` to access the element.

**Returns:**

The MLIR reference for the Mojo compiler to use.

### `get_null`

`static get_null() -> Self`

Constructs a Pointer representing nullptr.

**Returns:**

Constructed nullptr Pointer object.

### `__str__`

`__str__(self: Self) -> String`

Format this pointer as a hexadecimal string.

**Returns:**

A String containing the hexadecimal representation of the memory location destination of this pointer.

### `address_of`

`static address_of(inout *arg: "type") -> Self`

Gets the address of the argument.

**Args:**

- ​**arg** (`*"type"`): The value to get the address of.

**Returns:**

A Pointer struct which contains the address of the argument.

### `load`

`load[alignment: Int](self: Self) -> *"type"`

Loads the value the Pointer object points to.

**Parameters:**

- ​**alignment** (`Int`): The minimal alignment of the address.

**Returns:**

The loaded value.

`load[T: Intable, alignment: Int](self: Self, offset: T) -> *"type"`

Loads the value the Pointer object points to with the given offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.
- ​**alignment** (`Int`): The minimal alignment of the address.

**Args:**

- ​**offset** (`T`): The offset to load from.

**Returns:**

The loaded value.

### `store`

`store[T: Intable, alignment: Int](self: Self, offset: T, *value: "type")`

Stores the specified value to the location the Pointer object points to with the given offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.
- ​**alignment** (`Int`): The minimal alignment of the address.

**Args:**

- ​**offset** (`T`): The offset to store to.
- ​**value** (`*"type"`): The value to store.

`store[alignment: Int](self: Self, *value: "type")`

Stores the specified value to the location the Pointer object points to.

**Parameters:**

- ​**alignment** (`Int`): The minimal alignment of the address.

**Args:**

- ​**value** (`*"type"`): The value to store.

### `nt_store`

`nt_store(self: Self, *value: "type")`

Stores a value using non-temporal store.

The address must be properly aligned, 64B for avx512, 32B for avx2, and 16B for avx.

**Args:**

- ​**value** (`*"type"`): The value to store.

### `__int__`

`__int__(self: Self) -> Int`

Returns the pointer address as an integer.

**Returns:**

The address of the pointer as an Int.

### `alloc`

`static alloc(count: Int, /, *, alignment: Int) -> Self`

Heap-allocates a number of element of the specified type using the specified alignment.

**Args:**

- ​**count** (`Int`): The number of elements to allocate (note that this is not the bytecount).
- ​**alignment** (`Int`): The alignment used for the allocation.

**Returns:**

A new Pointer object which has been allocated on the heap.

### `free`

`free(self: Self)`

Frees the heap allocated memory.

### `bitcast`

`bitcast[new_type: AnyRegType](self: Self) -> Pointer[new_type, address_space]`

Bitcasts a Pointer to a different type.

**Parameters:**

- ​**new\_type** (`AnyRegType`): The target type.

**Returns:**

A new Pointer object with the specified type and the same address, as the original Pointer.

### `address_space_cast`

`address_space_cast[new_address_space: AddressSpace](self: Self) -> Pointer[*"type", new_address_space]`

Casts a Pointer to a different address space.

**Parameters:**

- ​**new\_address\_space** (`AddressSpace`): The address space.

**Returns:**

A new Pointer object with the specified type and the same address, as the original Pointer but located in a different address space.

### `offset`

`offset[T: Intable](self: Self, idx: T) -> Self`

Returns a new pointer shifted by the specified offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**idx** (`T`): The offset.

**Returns:**

The new Pointer shifted by the offset.

## `DTypePointer`

Defines a `DTypePointer` struct that contains an address of the given dtype.

**Parameters:**

- ​**type** (`DType`): DType of the underlying data.
- ​**address\_space** (`AddressSpace`): The address space the pointer is in.

**Aliases:**

- ​`element_type = SIMD[type, 1]`

- ​`pointer_type = Pointer[SIMD[type, 1], address_space]`

**Fields:**

- ​**address** (`Pointer[SIMD[type, 1], address_space]`): The pointed-to address.

**Implemented traits:**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Intable`, `Movable`, `Stringable`

**Methods:**

### `__init__`

`__init__() -> Self`

Constructs a null `DTypePointer` from the given type.

**Returns:**

Constructed `DTypePointer` object.

`__init__(value: pointer<scalar<#lit.struct.extract<:_stdlib::_builtin::_dtype::_DType type, "value">>, #lit.struct.extract<:_stdlib::_builtin::_int::_Int apply(:!lit.signature<("self": !lit.declref<_stdlib::_memory::_unsafe::_AddressSpace> borrow) -> !lit.declref<_stdlib::_builtin::_int::_Int>> _stdlib::_memory::_unsafe::_AddressSpace::_"value(stdlib::memory::unsafe::AddressSpace)", address_space), "value">>) -> Self`

Constructs a `DTypePointer` from a scalar pointer of the same type.

**Args:**

- ​**value** (`pointer<scalar<#lit.struct.extract<:_stdlib::_builtin::_dtype::_DType type, "value">>, #lit.struct.extract<:_stdlib::_builtin::_int::_Int apply(:!lit.signature<("self": !lit.declref<_stdlib::_memory::_unsafe::_AddressSpace> borrow) -> !lit.declref<_stdlib::_builtin::_int::_Int>> _stdlib::_memory::_unsafe::_AddressSpace::_"value(stdlib::memory::unsafe::AddressSpace)", address_space), "value">>`): The scalar pointer.

**Returns:**

Constructed `DTypePointer`.

`__init__(value: Pointer[SIMD[type, 1], address_space]) -> Self`

Constructs a `DTypePointer` from a scalar pointer of the same type.

**Args:**

- ​**value** (`Pointer[SIMD[type, 1], address_space]`): The scalar pointer.

**Returns:**

Constructed `DTypePointer`.

`__init__(value: SIMD[address, 1]) -> Self`

Constructs a `DTypePointer` from the value of scalar address.

**Args:**

- ​**value** (`SIMD[address, 1]`): The input pointer index.

**Returns:**

Constructed `DTypePointer` object.

### `__bool__`

`__bool__(self: Self) -> Bool`

Checks if the DTypePointer is _null_.

**Returns:**

Returns False if the DTypePointer is _null_ and True otherwise.

### `__getitem__`

`__getitem__[T: Intable](self: Self, offset: T) -> SIMD[type, 1]`

Loads a single element (SIMD of size 1) from the pointer at the specified index.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**offset** (`T`): The offset to load from.

**Returns:**

The loaded value.

### `__setitem__`

`__setitem__[T: Intable](self: Self, offset: T, val: SIMD[type, 1])`

Stores a single element value at the given offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**offset** (`T`): The offset to store to.
- ​**val** (`SIMD[type, 1]`): The value to store.

### `__lt__`

`__lt__(self: Self, rhs: Self) -> Bool`

Returns True if this pointer represents a lower address than rhs.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if this pointer represents a lower address and False otherwise.

### `__eq__`

`__eq__(self: Self, rhs: Self) -> Bool`

Returns True if the two pointers are equal.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if the two pointers are equal and False otherwise.

### `__ne__`

`__ne__(self: Self, rhs: Self) -> Bool`

Returns True if the two pointers are not equal.

**Args:**

- ​**rhs** (`Self`): The value of the other pointer.

**Returns:**

True if the two pointers are not equal and False otherwise.

### `__add__`

`__add__[T: Intable](self: Self, rhs: T) -> Self`

Returns a new pointer shifted by the specified offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**rhs** (`T`): The offset.

**Returns:**

The new DTypePointer shifted by the offset.

### `__sub__`

`__sub__[T: Intable](self: Self, rhs: T) -> Self`

Returns a new pointer shifted back by the specified offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**rhs** (`T`): The offset.

**Returns:**

The new DTypePointer shifted by the offset.

### `__iadd__`

`__iadd__[T: Intable](inout self: Self, rhs: T)`

Shifts the current pointer by the specified offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**rhs** (`T`): The offset.

### `__isub__`

`__isub__[T: Intable](inout self: Self, rhs: T)`

Shifts back the current pointer by the specified offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**rhs** (`T`): The offset.

### `get_null`

`static get_null() -> Self`

Constructs a `DTypePointer` representing _nullptr_.

**Returns:**

Constructed _nullptr_ `DTypePointer` object.

### `__str__`

`__str__(self: Self) -> String`

Format this pointer as a hexadecimal string.

**Returns:**

A String containing the hexadecimal representation of the memory location destination of this pointer.

### `address_of`

`static address_of(inout arg: SIMD[type, 1]) -> Self`

Gets the address of the argument.

**Args:**

- ​**arg** (`SIMD[type, 1]`): The value to get the address of.

**Returns:**

A DTypePointer struct which contains the address of the argument.

### `alloc`

`static alloc(count: Int, /, *, alignment: Int) -> Self`

Heap-allocates a number of element of the specified type using the specified alignment.

**Args:**

- ​**count** (`Int`): The number of elements to allocate (note that this is not the bytecount).
- ​**alignment** (`Int`): The alignment used for the allocation.

**Returns:**

A new `DTypePointer` object which has been allocated on the heap.

### `free`

`free(self: Self)`

Frees the heap allocates memory.

### `bitcast`

`bitcast[new_type: DType](self: Self) -> DTypePointer[new_type, address_space]`

Bitcasts `DTypePointer` to a different dtype.

**Parameters:**

- ​**new\_type** (`DType`): The target dtype.

**Returns:**

A new `DTypePointer` object with the specified dtype and the same address, as the original `DTypePointer`.

### `address_space_cast`

`address_space_cast[new_address_space: AddressSpace](self: Self) -> DTypePointer[type, new_address_space]`

Casts a Pointer to a different address space.

**Parameters:**

- ​**new\_address\_space** (`AddressSpace`): The address space.

**Returns:**

A new Pointer object with the specified type and the same address, as the original Pointer but located in a different address space.

### `prefetch`

`prefetch[params: PrefetchOptions](self: Self)`

Prefetches memory at the underlying address.

**Parameters:**

- ​**params** (`PrefetchOptions`): Prefetch options (see `PrefetchOptions` for details).

### `load`

`load[width: Int, alignment: Int](self: Self) -> SIMD[type, width]`

Loads the value the Pointer object points to.

**Parameters:**

- ​**width** (`Int`): The SIMD width.
- ​**alignment** (`Int`): The minimal alignment of the address.

**Returns:**

The loaded value.

`load[T: Intable, width: Int, alignment: Int](self: Self, offset: T) -> SIMD[type, width]`

Loads the value the Pointer object points to with the given offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.
- ​**width** (`Int`): The SIMD width.
- ​**alignment** (`Int`): The minimal alignment of the address.

**Args:**

- ​**offset** (`T`): The offset to load from.

**Returns:**

The loaded value.

### `store`

`store[T: Intable, width: Int, alignment: Int](self: Self, offset: T, val: SIMD[type, width])`

Stores a single element value at the given offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.
- ​**width** (`Int`): The SIMD width.
- ​**alignment** (`Int`): The minimal alignment of the address.

**Args:**

- ​**offset** (`T`): The offset to store to.
- ​**val** (`SIMD[type, width]`): The value to store.

`store[width: Int, alignment: Int](self: Self, val: SIMD[type, width])`

Stores a single element value.

**Parameters:**

- ​**width** (`Int`): The SIMD width.
- ​**alignment** (`Int`): The minimal alignment of the address.

**Args:**

- ​**val** (`SIMD[type, width]`): The value to store.

### `simd_nt_store`

`simd_nt_store[width: Int, T: Intable](self: Self, offset: T, val: SIMD[type, width])`

Stores a SIMD vector using non-temporal store.

**Parameters:**

- ​**width** (`Int`): The SIMD width.
- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**offset** (`T`): The offset to store to.
- ​**val** (`SIMD[type, width]`): The SIMD value to store.

`simd_nt_store[width: Int](self: Self, val: SIMD[type, width])`

Stores a SIMD vector using non-temporal store.

The address must be properly aligned, 64B for avx512, 32B for avx2, and 16B for avx.

**Parameters:**

- ​**width** (`Int`): The SIMD width.

**Args:**

- ​**val** (`SIMD[type, width]`): The SIMD value to store.

### `simd_strided_load`

`simd_strided_load[width: Int, T: Intable](self: Self, stride: T) -> SIMD[type, width]`

Performs a strided load of the SIMD vector.

**Parameters:**

- ​**width** (`Int`): The SIMD width.
- ​**T** (`Intable`): The Intable type of the stride.

**Args:**

- ​**stride** (`T`): The stride between loads.

**Returns:**

A vector which is stride loaded.

### `simd_strided_store`

`simd_strided_store[width: Int, T: Intable](self: Self, val: SIMD[type, width], stride: T)`

Performs a strided store of the SIMD vector.

**Parameters:**

- ​**width** (`Int`): The SIMD width.
- ​**T** (`Intable`): The Intable type of the stride.

**Args:**

- ​**val** (`SIMD[type, width]`): The SIMD value to store.
- ​**stride** (`T`): The stride between stores.

### `__int__`

`__int__(self: Self) -> Int`

Returns the pointer address as an integer.

**Returns:**

The address of the pointer as an Int.

### `is_aligned`

`is_aligned[alignment: Int](self: Self) -> Bool`

Checks if the pointer is aligned.

**Parameters:**

- ​**alignment** (`Int`): The minimal desired alignment.

**Returns:**

`True` if the pointer is at least `alignment`\-aligned or `False` otherwise.

### `offset`

`offset[T: Intable](self: Self, idx: T) -> Self`

Returns a new pointer shifted by the specified offset.

**Parameters:**

- ​**T** (`Intable`): The Intable type of the offset.

**Args:**

- ​**idx** (`T`): The offset of the new pointer.

**Returns:**

The new constructed DTypePointer.

## `bitcast`

`bitcast[type: AnyRegType, address_space: AddressSpace](val: Int) -> Pointer[*"type", address_space]`

Bitcasts an integer to a pointer.

**Parameters:**

- ​**type** (`AnyRegType`): The target type.
- ​**address\_space** (`AddressSpace`): The address space the pointer is in.

**Args:**

- ​**val** (`Int`): The pointer address.

**Returns:**

A new Pointer with the specified address.

`bitcast[type: DType, address_space: AddressSpace](val: Int) -> DTypePointer[type, address_space]`

Bitcasts an integer to a pointer.

**Parameters:**

- ​**type** (`DType`): The target type.
- ​**address\_space** (`AddressSpace`): The address space the pointer is in.

**Args:**

- ​**val** (`Int`): The pointer address.

**Returns:**

A new Pointer with the specified address.

`bitcast[new_type: Movable, src_type: Movable](ptr: AnyPointer[src_type]) -> AnyPointer[new_type]`

Bitcasts an AnyPointer to a different type.

**Parameters:**

- ​**new\_type** (`Movable`): The target type.
- ​**src\_type** (`Movable`): The source type.

**Args:**

- ​**ptr** (`AnyPointer[src_type]`): The source pointer.

**Returns:**

A new Pointer with the specified type and the same address, as the original Pointer.

`bitcast[new_type: AnyRegType, src_type: AnyRegType, address_space: AddressSpace](ptr: Pointer[src_type, address_space]) -> Pointer[new_type, address_space]`

Bitcasts a Pointer to a different type.

**Parameters:**

- ​**new\_type** (`AnyRegType`): The target type.
- ​**src\_type** (`AnyRegType`): The source type.
- ​**address\_space** (`AddressSpace`): The address space the pointer is in.

**Args:**

- ​**ptr** (`Pointer[src_type, address_space]`): The source pointer.

**Returns:**

A new Pointer with the specified type and the same address, as the original Pointer.

`bitcast[new_type: DType, src_type: DType, address_space: AddressSpace](ptr: DTypePointer[src_type, address_space]) -> DTypePointer[new_type, address_space]`

Bitcasts a DTypePointer to a different type.

**Parameters:**

- ​**new\_type** (`DType`): The target type.
- ​**src\_type** (`DType`): The source type.
- ​**address\_space** (`AddressSpace`): The address space the pointer is in.

**Args:**

- ​**ptr** (`DTypePointer[src_type, address_space]`): The source pointer.

**Returns:**

A new DTypePointer with the specified type and the same address, as the original DTypePointer.

`bitcast[new_type: DType, new_width: Int, src_type: DType, src_width: Int](val: SIMD[src_type, src_width]) -> SIMD[new_type, new_width]`

Bitcasts a SIMD value to another SIMD value.

**Constraints:**

The bitwidth of the two types must be the same.

**Parameters:**

- ​**new\_type** (`DType`): The target type.
- ​**new\_width** (`Int`): The target width.
- ​**src\_type** (`DType`): The source type.
- ​**src\_width** (`Int`): The source width.

**Args:**

- ​**val** (`SIMD[src_type, src_width]`): The source value.

**Returns:**

A new SIMD value with the specified type and width with a bitcopy of the source SIMD value.

`bitcast[new_type: DType, src_type: DType](val: SIMD[src_type, 1]) -> SIMD[new_type, 1]`

Bitcasts a SIMD value to another SIMD value.

**Constraints:**

The bitwidth of the two types must be the same.

**Parameters:**

- ​**new\_type** (`DType`): The target type.
- ​**src\_type** (`DType`): The source type.

**Args:**

- ​**val** (`SIMD[src_type, 1]`): The source value.

**Returns:**

A new SIMD value with the specified type and width with a bitcopy of the source SIMD value.

`bitcast[new_type: DType, src_width: Int](val: SIMD[bool, src_width]) -> SIMD[new_type, 1]`

Packs a SIMD bool into an integer.

**Constraints:**

The bitwidth of the two types must be the same.

**Parameters:**

- ​**new\_type** (`DType`): The target type.
- ​**src\_width** (`Int`): The source width.

**Args:**

- ​**val** (`SIMD[bool, src_width]`): The source value.

**Returns:**

A new integer scalar which has the same bitwidth as the bool vector.

## `emplace_ref_unsafe`

`emplace_ref_unsafe[type: Movable, lifetime: lifetime<1>](dest: Reference[*"type", 1, lifetime], owned *value: "type")`

This unsafe operation assumes the memory pointed to by the reference is uninitialized and overwrites it with an owned version of the specified value. This is equivalent to `new(ptr) Type(v)` syntax in C++.

**Parameters:**

- ​**type** (`Movable`): Type of the underlying data.
- ​**lifetime** (`lifetime<1>`): The lifetime of the reference.

**Args:**

- ​**dest** (`Reference[*"type", 1, lifetime]`): The reference to uninitialized memory to overwrite.
- ​**value** (`*"type"`): The value to write into it.