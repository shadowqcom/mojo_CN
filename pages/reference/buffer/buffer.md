# buffer

Implements the Buffer class.

You can import these APIs from the `memory` package. For example:

```
from buffer import Buffer
```

## `Buffer`

Defines a Buffer which can be parametrized on a static size and Dtype.

The Buffer does not own its underlying pointer.

**Parameters:**

- ​**type** (`DType`): The element type of the Buffer.
- ​**size** (`Dim`): The static size (if known) of the Buffer.
- ​**address\_space** (`AddressSpace`): The address space of the Buffer.

**Fields:**

- ​**data** (`DTypePointer[type, address_space]`): The underlying data pointer of the data.

- ​**dynamic\_size** (`Int`): The dynamic size of the buffer.

- ​**dtype** (`DType`): The dynamic data type of the buffer.

**Implemented traits:**

`AnyType`, `Copyable`, `Movable`, `Sized`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Default initializer for Buffer. By default the fields are all initialized to 0.

`__init__(inout self: Self, ptr: Pointer[SIMD[type, 1], address_space])`

Constructs a Buffer with statically known size and type.

**Constraints:**

The size is known.

**Args:**

- ​**ptr** (`Pointer[SIMD[type, 1], address_space]`): Pointer to the data.

`__init__(inout self: Self, ptr: DTypePointer[type, address_space])`

Constructs a Buffer with statically known size and type.

**Constraints:**

The size is known.

**Args:**

- ​**ptr** (`DTypePointer[type, address_space]`): Pointer to the data.

`__init__(inout self: Self, ptr: Pointer[SIMD[type, 1], address_space], in_size: Int)`

Constructs a Buffer with statically known type.

**Constraints:**

The size is unknown.

**Args:**

- ​**ptr** (`Pointer[SIMD[type, 1], address_space]`): Pointer to the data.
- ​**in\_size** (`Int`): Dynamic size of the buffer.

`__init__(inout self: Self, ptr: DTypePointer[type, address_space], in_size: Int)`

Constructs a Buffer with statically known type.

**Constraints:**

The size is unknown.

**Args:**

- ​**ptr** (`DTypePointer[type, address_space]`): Pointer to the data.
- ​**in\_size** (`Int`): Dynamic size of the buffer.

### `__getitem__`

`__getitem__(self: Self, idx: Int) -> SIMD[type, 1]`

Loads a single element (SIMD of size 1) from the buffer at the specified index.

**Args:**

- ​**idx** (`Int`): The index into the Buffer.

**Returns:**

The value at the `idx` position.

### `__setitem__`

`__setitem__(self: Self, idx: Int, val: scalar<#lit.struct.extract<:_stdlib::_builtin::_dtype::_DType type, "value">>)`

Stores a single value into the buffer at the specified index.

**Args:**

- ​**idx** (`Int`): The index into the Buffer.
- ​**val** (`scalar<#lit.struct.extract<:_stdlib::_builtin::_dtype::_DType type, "value">>`): The value to store.

`__setitem__(self: Self, idx: Int, val: SIMD[type, 1])`

Stores a single value into the buffer at the specified index.

**Args:**

- ​**idx** (`Int`): The index into the Buffer.
- ​**val** (`SIMD[type, 1]`): The value to store.

### `__len__`

`__len__(self: Self) -> Int`

Gets the size if it is a known constant, otherwise it gets the dynamic\_size.

This method is used by `Buffer.__len__` to get the size of the buffer. If the Buffer size is a known constant, then the size is returned. Otherwise, the dynamic\_size is returned.

**Returns:**

The size if static otherwise dynamic\_size.

### `load`

`load[width: Int, alignment: Int](self: Self, idx: Int) -> SIMD[type, width]`

Loads a simd value from the buffer at the specified index.

**Parameters:**

- ​**width** (`Int`): The simd\_width of the load.
- ​**alignment** (`Int`): The alignment value.

**Args:**

- ​**idx** (`Int`): The index into the Buffer.

**Returns:**

The simd value starting at the `idx` position and ending at `idx+width`.

### `store`

`store[width: Int, alignment: Int](self: Self, idx: Int, val: SIMD[type, width])`

Stores a simd value into the buffer at the specified index.

**Parameters:**

- ​**width** (`Int`): The width of the simd vector.
- ​**alignment** (`Int`): The alignment value.

**Args:**

- ​**idx** (`Int`): The index into the Buffer.
- ​**val** (`SIMD[type, width]`): The value to store.

### `simd_nt_store`

`simd_nt_store[width: Int](self: Self, idx: Int, val: SIMD[type, width])`

Stores a simd value using non-temporal store.

**Constraints:**

The address must be properly aligned, 64B for avx512, 32B for avx2, and 16B for avx.

**Parameters:**

- ​**width** (`Int`): The width of the simd vector.

**Args:**

- ​**idx** (`Int`): The index into the Buffer.
- ​**val** (`SIMD[type, width]`): The value to store.

### `prefetch`

`prefetch[params: PrefetchOptions](self: Self, idx: Int)`

Prefetches the data at the given index.

**Parameters:**

- ​**params** (`PrefetchOptions`): The prefetch configuration.

**Args:**

- ​**idx** (`Int`): The index of the prefetched location.

### `bytecount`

`bytecount(self: Self) -> Int`

Returns the size of the Buffer in bytes.

**Returns:**

The size of the Buffer in bytes.

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

### `zero`

`zero(self: Self)`

Sets all bytes of the Buffer to 0.

### `fill`

`fill(self: Self, val: SIMD[type, 1])`

Assigns val to all elements in the Buffer.

The fill is performed in chunks of size N, where N is the native SIMD width of type on the system.

**Args:**

- ​**val** (`SIMD[type, 1]`): The value to store.

### `tofile`

`tofile(self: Self, path: Path)`

Write values to a file.

**Args:**

- ​**path** (`Path`): Path to the output file.

### `aligned_stack_allocation`

`static aligned_stack_allocation[alignment: Int]() -> Self`

Constructs a buffer instance backed by stack allocated memory space.

**Parameters:**

- ​**alignment** (`Int`): Address alignment requirement for the allocation.

**Returns:**

Constructed buffer with the allocated space.

### `stack_allocation`

`static stack_allocation() -> Self`

Constructs a buffer instance backed by stack allocated memory space.

**Returns:**

Constructed buffer with the allocated space.

## `NDBuffer`

An N-dimensional Buffer.

NDBuffer can be parametrized on rank, static dimensions and Dtype. It does not own its underlying pointer.

**Parameters:**

- ​**type** (`DType`): The element type of the buffer.
- ​**rank** (`Int`): The rank of the buffer.
- ​**shape** (`DimList`): The static size (if known) of the buffer.
- ​**address\_space** (`AddressSpace`): The address space of the buffer.

**Fields:**

- ​**data** (`DTypePointer[type, address_space]`): The underlying data for the buffer. The pointer is not owned by the NDBuffer.

- ​**dynamic\_shape** (`StaticIntTuple[rank]`): The dynamic value of the shape.

- ​**dynamic\_stride** (`StaticIntTuple[rank]`): The dynamic stride of the buffer.

- ​**is\_contiguous** (`Bool`): True if the contents of the buffer are contiguous in memory.

**Implemented traits:**

`AnyType`, `Copyable`, `Movable`, `Sized`, `Stringable`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Default initializer for NDBuffer. By default the fields are all initialized to 0.

`__init__(inout self: Self, ptr: Pointer[SIMD[type, 1], address_space])`

Constructs an NDBuffer with statically known rank, shapes and type.

**Constraints:**

The rank, shapes, and type are known.

**Args:**

- ​**ptr** (`Pointer[SIMD[type, 1], address_space]`): Pointer to the data.

`__init__(inout self: Self, ptr: DTypePointer[type, address_space])`

Constructs an NDBuffer with statically known rank, shapes and type.

**Constraints:**

The rank, shapes, and type are known.

**Args:**

- ​**ptr** (`DTypePointer[type, address_space]`): Pointer to the data.

`__init__(inout self: Self, ptr: Pointer[scalar<#lit.struct.extract<:_stdlib::_builtin::_dtype::_DType type, "value">>, address_space], dynamic_shape: StaticIntTuple[rank])`

Constructs an NDBuffer with statically known rank, but dynamic shapes and type.

**Constraints:**

The rank is known.

**Args:**

- ​**ptr** (`Pointer[scalar<#lit.struct.extract<:_stdlib::_builtin::_dtype::_DType type, "value">>, address_space]`): Pointer to the data.
- ​**dynamic\_shape** (`StaticIntTuple[rank]`): A static tuple of size 'rank' representing shapes.

`__init__(inout self: Self, ptr: DTypePointer[type, address_space], dynamic_shape: StaticIntTuple[rank])`

Constructs an NDBuffer with statically known rank, but dynamic shapes and type.

**Constraints:**

The rank is known.

**Args:**

- ​**ptr** (`DTypePointer[type, address_space]`): Pointer to the data.
- ​**dynamic\_shape** (`StaticIntTuple[rank]`): A static tuple of size 'rank' representing shapes.

`__init__(inout self: Self, ptr: DTypePointer[type, address_space], dynamic_shape: DimList)`

Constructs an NDBuffer with statically known rank, but dynamic shapes and type.

**Constraints:**

The rank is known.

**Args:**

- ​**ptr** (`DTypePointer[type, address_space]`): Pointer to the data.
- ​**dynamic\_shape** (`DimList`): A static tuple of size 'rank' representing shapes.

`__init__(inout self: Self, ptr: Pointer[SIMD[type, 1], address_space], dynamic_shape: StaticIntTuple[rank], dynamic_stride: StaticIntTuple[rank])`

Constructs a strided NDBuffer with statically known rank, but dynamic shapes and type.

**Constraints:**

The rank is known.

**Args:**

- ​**ptr** (`Pointer[SIMD[type, 1], address_space]`): Pointer to the data.
- ​**dynamic\_shape** (`StaticIntTuple[rank]`): A static tuple of size 'rank' representing shapes.
- ​**dynamic\_stride** (`StaticIntTuple[rank]`): A static tuple of size 'rank' representing strides.

`__init__(inout self: Self, ptr: Pointer[SIMD[type, 1], address_space], dynamic_shape: DimList, dynamic_stride: StaticIntTuple[rank])`

Constructs a strided NDBuffer with statically known rank, but dynamic shapes and type.

**Constraints:**

The rank is known.

**Args:**

- ​**ptr** (`Pointer[SIMD[type, 1], address_space]`): Pointer to the data.
- ​**dynamic\_shape** (`DimList`): A DimList of size 'rank' representing shapes.
- ​**dynamic\_stride** (`StaticIntTuple[rank]`): A static tuple of size 'rank' representing strides.

`__init__(inout self: Self, ptr: DTypePointer[type, address_space], dynamic_shape: StaticIntTuple[rank], dynamic_stride: StaticIntTuple[rank])`

Constructs a strided NDBuffer with statically known rank, but dynamic shapes and type.

**Constraints:**

The rank is known.

**Args:**

- ​**ptr** (`DTypePointer[type, address_space]`): Pointer to the data.
- ​**dynamic\_shape** (`StaticIntTuple[rank]`): A static tuple of size 'rank' representing shapes.
- ​**dynamic\_stride** (`StaticIntTuple[rank]`): A static tuple of size 'rank' representing strides.

`__init__(inout self: Self, ptr: DTypePointer[type, address_space], dynamic_shape: DimList, dynamic_stride: StaticIntTuple[rank])`

Constructs a strided NDBuffer with statically known rank, but dynamic shapes and type.

**Constraints:**

The rank is known.

**Args:**

- ​**ptr** (`DTypePointer[type, address_space]`): Pointer to the data.
- ​**dynamic\_shape** (`DimList`): A DimList of size 'rank' representing shapes.
- ​**dynamic\_stride** (`StaticIntTuple[rank]`): A static tuple of size 'rank' representing strides.

### `__getitem__`

`__getitem__(self: Self, *idx: Int) -> SIMD[type, 1]`

Gets an element from the buffer from the specified index.

**Args:**

- ​**idx** (`*Int`): Index of the element to retrieve.

**Returns:**

The value of the element.

`__getitem__(self: Self, idx: StaticIntTuple[rank]) -> SIMD[type, 1]`

Gets an element from the buffer from the specified index.

**Args:**

- ​**idx** (`StaticIntTuple[rank]`): Index of the element to retrieve.

**Returns:**

The value of the element.

### `__setitem__`

`__setitem__(self: Self, idx: StaticIntTuple[rank], val: SIMD[type, 1])`

Stores a single value into the buffer at the specified index.

**Args:**

- ​**idx** (`StaticIntTuple[rank]`): The index into the Buffer.
- ​**val** (`SIMD[type, 1]`): The value to store.

### `__add__`

`__add__[rhs: DType, rhs: Int, rhs: DimList, rhs: AddressSpace](self: Self, rhs: NDBuffer[rhs, rhs, rhs, rhs]) -> Self`

Adds a NDBuffer.

**Args:**

- ​**rhs** (`NDBuffer[rhs, rhs, rhs, rhs]`): The RHS of the add operation.

**Returns:**

The addition result.

### `__sub__`

`__sub__(self: Self, rhs: Self) -> Self`

Subtracts a scalar.

**Args:**

- ​**rhs** (`Self`): The RHS of the sub operation.

**Returns:**

The subtraction result.

`__sub__[rhs_shape: DimList](self: Self, rhs: NDBuffer[type, 1, rhs_shape, 0]) -> Self`

Subtracts a NDBuffer.

**Parameters:**

- ​**rhs\_shape** (`DimList`): Shape of RHS.

**Args:**

- ​**rhs** (`NDBuffer[type, 1, rhs_shape, 0]`): The RHS of the sub operation.

**Returns:**

The subtraction result.

### `__mul__`

`__mul__(self: Self, rhs: Self) -> Self`

Multiplies a NDBuffer.

**Args:**

- ​**rhs** (`Self`): The RHS of the mul operation.

**Returns:**

The division result.

### `__imul__`

`__imul__(inout self: Self, rhs: SIMD[f32, 1])`

In-place multiplies a scalar.

**Args:**

- ​**rhs** (`SIMD[f32, 1]`): The RHS of the mul operation.

`__imul__[rhs: DType, rhs: Int, rhs: DimList, rhs: AddressSpace](inout self: Self, rhs: NDBuffer[rhs, rhs, rhs, rhs])`

In-place multiplies a NDBuffer.

**Args:**

- ​**rhs** (`NDBuffer[rhs, rhs, rhs, rhs]`): The RHS of the mul operation.

### `__itruediv__`

`__itruediv__[rhs: DType, rhs: Int, rhs: DimList, rhs: AddressSpace](inout self: Self, rhs: NDBuffer[rhs, rhs, rhs, rhs])`

In-place divides a NDBuffer.

**Args:**

- ​**rhs** (`NDBuffer[rhs, rhs, rhs, rhs]`): The RHS of the div operation.

### `get_rank`

`get_rank(self: Self) -> Int`

Returns the rank of the buffer.

**Returns:**

The rank of NDBuffer.

### `get_shape`

`get_shape(self: Self) -> StaticIntTuple[rank]`

Returns the shapes of the buffer.

**Returns:**

A static tuple of size 'rank' representing shapes of the NDBuffer.

### `get_nd_index`

`get_nd_index(self: Self, idx: Int) -> StaticIntTuple[rank]`

Computes the NDBuffer's ND-index based on the flat index.

**Args:**

- ​**idx** (`Int`): The flat index.

**Returns:**

The index positions.

### `__len__`

`__len__(self: Self) -> Int`

Computes the NDBuffer's number of elements.

**Returns:**

The total number of elements in the NDBuffer.

### `num_elements`

`num_elements(self: Self) -> Int`

Computes the NDBuffer's number of elements.

**Returns:**

The total number of elements in the NDBuffer.

### `size`

`size(self: Self) -> Int`

Computes the NDBuffer's number of elements.

**Returns:**

The total number of elements in the NDBuffer.

### `__str__`

`__str__(self: Self) -> String`

Gets the buffer as a string.

**Returns:**

A compact string of the buffer.

### `__repr__`

`__repr__(self: Self) -> String`

Gets the buffer as a string.

**Returns:**

A compact string representation of the buffer.

### `tile`

`tile[*tile_sizes: Dim](self: Self, tile_coords: StaticIntTuple[rank]) -> NDBuffer[type, rank, DimList(VariadicList[Dim](tile_sizes)), address_space]`

Returns an n-d tile "slice" of the buffer of size tile\_sizes at coords.

**Parameters:**

- ​**tile\_sizes** (`*Dim`): The size of the tiles.

**Args:**

- ​**tile\_coords** (`StaticIntTuple[rank]`): The tile index.

**Returns:**

The tiled buffer at tile\_coords.

### `load`

`load[width: Int, alignment: Int](self: Self, *idx: Int) -> SIMD[type, width]`

Loads a simd value from the buffer at the specified index.

**Constraints:**

The buffer must be contiguous or width must be 1.

**Parameters:**

- ​**width** (`Int`): The simd\_width of the load.
- ​**alignment** (`Int`): The alignment value.

**Args:**

- ​**idx** (`*Int`): The index into the NDBuffer.

**Returns:**

The simd value starting at the `idx` position and ending at `idx+width`.

`load[width: Int, alignment: Int](self: Self, idx: VariadicList[Int]) -> SIMD[type, width]`

Loads a simd value from the buffer at the specified index.

**Constraints:**

The buffer must be contiguous or width must be 1.

**Parameters:**

- ​**width** (`Int`): The simd\_width of the load.
- ​**alignment** (`Int`): The alignment value.

**Args:**

- ​**idx** (`VariadicList[Int]`): The index into the NDBuffer.

**Returns:**

The simd value starting at the `idx` position and ending at `idx+width`.

`load[width: Int, alignment: Int](self: Self, idx: StaticIntTuple[rank]) -> SIMD[type, width]`

Loads a simd value from the buffer at the specified index.

**Constraints:**

The buffer must be contiguous or width must be 1.

**Parameters:**

- ​**width** (`Int`): The simd\_width of the load.
- ​**alignment** (`Int`): The alignment value.

**Args:**

- ​**idx** (`StaticIntTuple[rank]`): The index into the NDBuffer.

**Returns:**

The simd value starting at the `idx` position and ending at `idx+width`.

`load[width: Int, alignment: Int](self: Self, idx: StaticTuple[Int, rank]) -> SIMD[type, width]`

Loads a simd value from the buffer at the specified index.

**Constraints:**

The buffer must be contiguous or width must be 1.

**Parameters:**

- ​**width** (`Int`): The simd\_width of the load.
- ​**alignment** (`Int`): The alignment value.

**Args:**

- ​**idx** (`StaticTuple[Int, rank]`): The index into the NDBuffer.

**Returns:**

The simd value starting at the `idx` position and ending at `idx+width`.

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

### `store`

`store[width: Int, alignment: Int](self: Self, idx: StaticIntTuple[rank], val: SIMD[type, width])`

Stores a simd value into the buffer at the specified index.

**Constraints:**

The buffer must be contiguous or width must be 1.

**Parameters:**

- ​**width** (`Int`): The width of the simd vector.
- ​**alignment** (`Int`): The alignment value.

**Args:**

- ​**idx** (`StaticIntTuple[rank]`): The index into the Buffer.
- ​**val** (`SIMD[type, width]`): The value to store.

`store[width: Int, alignment: Int](self: Self, idx: StaticTuple[Int, rank], val: SIMD[type, width])`

Stores a simd value into the buffer at the specified index.

**Constraints:**

The buffer must be contiguous or width must be 1.

**Parameters:**

- ​**width** (`Int`): The width of the simd vector.
- ​**alignment** (`Int`): The alignment value.

**Args:**

- ​**idx** (`StaticTuple[Int, rank]`): The index into the Buffer.
- ​**val** (`SIMD[type, width]`): The value to store.

### `simd_nt_store`

`simd_nt_store[width: Int](self: Self, idx: StaticIntTuple[rank], val: SIMD[type, width])`

Stores a simd value using non-temporal store.

**Constraints:**

The buffer must be contiguous. The address must be properly aligned, 64B for avx512, 32B for avx2, and 16B for avx.

**Parameters:**

- ​**width** (`Int`): The width of the simd vector.

**Args:**

- ​**idx** (`StaticIntTuple[rank]`): The index into the Buffer.
- ​**val** (`SIMD[type, width]`): The value to store.

`simd_nt_store[width: Int](self: Self, idx: StaticTuple[Int, rank], val: SIMD[type, width])`

Stores a simd value using non-temporal store.

**Constraints:**

The buffer must be contiguous. The address must be properly aligned, 64B for avx512, 32B for avx2, and 16B for avx.

**Parameters:**

- ​**width** (`Int`): The width of the simd vector.

**Args:**

- ​**idx** (`StaticTuple[Int, rank]`): The index into the Buffer.
- ​**val** (`SIMD[type, width]`): The value to store.

### `dim`

`dim[index: Int](self: Self) -> Int`

Gets the buffer dimension at the given index.

**Parameters:**

- ​**index** (`Int`): The number of dimension to get.

**Returns:**

The buffer size at the given dimension.

`dim(self: Self, index: Int) -> Int`

Gets the buffer dimension at the given index.

**Args:**

- ​**index** (`Int`): The number of dimension to get.

**Returns:**

The buffer size at the given dimension.

### `stride`

`stride(self: Self, index: Int) -> Int`

Gets the buffer stride at the given index.

**Args:**

- ​**index** (`Int`): The number of dimension to get the stride for.

**Returns:**

The stride at the given dimension.

### `flatten`

`flatten(self: Self) -> Buffer[type, Dim(), address_space]`

Constructs a flattened Buffer counterpart for this NDBuffer.

**Constraints:**

The buffer must be contiguous.

**Returns:**

Constructed Buffer object.

### `make_dims_unknown`

`make_dims_unknown(self: Self) -> NDBuffer[type, rank, create_unknown[stdlib::builtin::int::Int][rank](), address_space]`

Rebinds the NDBuffer to one with unknown shape.

**Returns:**

The rebound NDBuffer with unknown shape.

### `bytecount`

`bytecount(self: Self) -> Int`

Returns the size of the NDBuffer in bytes.

**Returns:**

The size of the NDBuffer in bytes.

### `zero`

`zero(self: Self)`

Sets all bytes of the NDBuffer to 0.

**Constraints:**

The buffer must be contiguous.

### `tofile`

`tofile(self: Self, path: Path)`

Write values to a file.

**Args:**

- ​**path** (`Path`): Path to the output file.

### `fill`

`fill(self: Self, val: SIMD[type, 1])`

Assigns val to all elements in the Buffer.

The fill is performed in chunks of size N, where N is the native SIMD width of type on the system.

**Args:**

- ​**val** (`SIMD[type, 1]`): The value to store.

### `aligned_stack_allocation`

`static aligned_stack_allocation[alignment: Int]() -> Self`

Constructs an NDBuffer instance backed by stack allocated memory space.

**Parameters:**

- ​**alignment** (`Int`): Address alignment requirement for the allocation.

**Returns:**

Constructed NDBuffer with the allocated space.

### `stack_allocation`

`static stack_allocation() -> Self`

Constructs an NDBuffer instance backed by stack allocated memory space.

**Returns:**

Constructed NDBuffer with the allocated space.

### `prefetch`

`prefetch[params: PrefetchOptions](self: Self, *idx: Int)`

Prefetches the data at the given index.

**Parameters:**

- ​**params** (`PrefetchOptions`): The prefetch configuration.

**Args:**

- ​**idx** (`*Int`): The N-D index of the prefetched location.

`prefetch[params: PrefetchOptions](self: Self, indices: StaticIntTuple[rank])`

Prefetches the data at the given index.

**Parameters:**

- ​**params** (`PrefetchOptions`): The prefetch configuration.

**Args:**

- ​**indices** (`StaticIntTuple[rank]`): The N-D index of the prefetched location.

## `DynamicRankBuffer`

DynamicRankBuffer represents a buffer with unknown rank, shapes and dtype.

It is not as efficient as the statically ranked buffer, but is useful when interacting with external functions. In particular the shape is represented as a fixed (ie \_MAX\_RANK) array of dimensions to simplify the ABI.

**Fields:**

- ​**data** (`DTypePointer[invalid, 0]`): The pointer to the buffer.

- ​**rank** (`Int`): The buffer rank. Has a max value of `_MAX_RANK`.

- ​**shape** (`StaticIntTuple[8]`): The dynamic shape of the buffer.

- ​**type** (`DType`): The dynamic dtype of the buffer.

**Implemented traits:**

`AnyType`

**Methods:**

### `__init__`

`__init__(inout self: Self, data: DTypePointer[invalid, 0], rank: Int, shape: StaticIntTuple[8], type: DType)`

Construct DynamicRankBuffer.

**Args:**

- ​**data** (`DTypePointer[invalid, 0]`): Pointer to the underlying data.
- ​**rank** (`Int`): Rank of the buffer.
- ​**shape** (`StaticIntTuple[8]`): Shapes of the buffer.
- ​**type** (`DType`): `dtype` of the buffer.

### `to_buffer`

`to_buffer[type: DType](self: Self) -> Buffer[type, Dim(), 0]`

Casts DynamicRankBuffer to Buffer.

**Parameters:**

- ​**type** (`DType`): `dtype` of the buffer.

**Returns:**

Constructed Buffer.

### `to_ndbuffer`

`to_ndbuffer[type: DType, rank: Int](self: Self) -> NDBuffer[type, rank, create_unknown[stdlib::builtin::int::Int][rank](), 0]`

Casts the buffer to NDBuffer.

**Constraints:**

Rank of DynamicRankBuffer must equal rank of NDBuffer.

**Parameters:**

- ​**type** (`DType`): `dtype` of the buffer.
- ​**rank** (`Int`): Rank of the buffer.

**Returns:**

Constructed NDBuffer.

`to_ndbuffer[type: DType, rank: Int](self: Self, stride: StaticIntTuple[rank]) -> NDBuffer[type, rank, create_unknown[stdlib::builtin::int::Int][rank](), 0]`

Casts the buffer to NDBuffer.

**Constraints:**

Rank of DynamicRankBuffer must equal rank of NDBuffer.

**Parameters:**

- ​**type** (`DType`): `dtype` of the buffer.
- ​**rank** (`Int`): Rank of the buffer.

**Args:**

- ​**stride** (`StaticIntTuple[rank]`): Strides of the buffer.

**Returns:**

Constructed NDBuffer.

### `rank_dispatch`

`rank_dispatch[func: fn[Int]() capturing -> None](self: Self)`

Dispatches the function call based on buffer rank.

**Constraints:**

Rank must be positive and less or equal to 8.

**Parameters:**

- ​**func** (`fn[Int]() capturing -> None`): Function to dispatch. The function should be parametrized on an index parameter, which will be used for rank when the function will be called.

### `num_elements`

`num_elements(self: Self) -> Int`

Gets number of elements in the buffer.

**Returns:**

The number of elements in the buffer.

### `get_shape`

`get_shape[rank: Int](self: Self) -> StaticIntTuple[rank]`

Gets a static tuple representing the buffer shape.

**Parameters:**

- ​**rank** (`Int`): Rank of the buffer.

**Returns:**

A static tuple of size 'Rank' filled with buffer shapes.

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

### `dim`

`dim(self: Self, idx: Int) -> Int`

Gets given dimension.

**Args:**

- ​**idx** (`Int`): The dimension index.

**Returns:**

The buffer size on the given dimension.

## `partial_simd_load`

`partial_simd_load[width: Int, storage: DType, storage: AddressSpace](storage: DTypePointer[storage, storage], lbound: Int, rbound: Int, pad_value: SIMD[storage, 1]) -> SIMD[storage, width]`

Loads a vector with dynamic bound.

Out of bound data will be filled with pad value. Data is valid if lbound <= idx < rbound for idx from 0 to (simd\_width-1). For example:

```
addr 0  1  2  3data x 42 43  xpartial_simd_load[4](addr0, 1, 3) #gives [0 42 43 0]
```

**Parameters:**

- ​**width** (`Int`): The system simd vector size.

**Args:**

- ​**storage** (`DTypePointer[storage, storage]`): Pointer to the address to perform load.
- ​**lbound** (`Int`): Lower bound of valid index within simd (inclusive).
- ​**rbound** (`Int`): Upper bound of valid index within simd (non-inclusive).
- ​**pad\_value** (`SIMD[storage, 1]`): Value to fill for out of bound indices.

**Returns:**

The SIMD vector loaded and zero-filled.

## `partial_simd_store`

`partial_simd_store[width: Int, storage: DType, storage: AddressSpace](storage: DTypePointer[storage, storage], lbound: Int, rbound: Int, data: SIMD[storage, width])`

Stores a vector with dynamic bound.

Out of bound data will ignored. Data is valid if lbound <= idx < rbound for idx from 0 to (simd\_width-1).

e.g. addr 0 1 2 3 data 0 0 0 0

```
partial_simd_load[4](addr0, 1, 3, [-1, 42, 43, -1]) #gives [0 42 43 0]
```

**Parameters:**

- ​**width** (`Int`): The system simd vector size.

**Args:**

- ​**storage** (`DTypePointer[storage, storage]`): Pointer to the address to perform load.
- ​**lbound** (`Int`): Lower bound of valid index within simd (inclusive).
- ​**rbound** (`Int`): Upper bound of valid index within simd (non-inclusive).
- ​**data** (`SIMD[storage, width]`): The vector value to store.

## `prod_dims`

`prod_dims[start_dim: Int, end_dim: Int, x: DType, x: Int, x: DimList, x: AddressSpace](x: NDBuffer[x, x, x, x]) -> Int`

Computes the product of a slice of the given buffer's dimensions.

**Parameters:**

- ​**start\_dim** (`Int`): The index at which to begin computing the product.
- ​**end\_dim** (`Int`): The index at which to stop computing the product.

**Args:**

- ​**x** (`NDBuffer[x, x, x, x]`): The NDBuffer whose dimensions will be multiplied.

**Returns:**

The product of the specified slice of the buffer's dimensions.