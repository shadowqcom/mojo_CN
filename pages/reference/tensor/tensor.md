# tensor

Implements the `Tensor` type.

Example:

```
from tensor import Tensor, TensorSpec, TensorShapefrom utils.index import Indexfrom random import randvar height = 256var width = 256var channels = 3# Create the tensor of dimensions height, width, channels# and fill with random values.var image = rand[DType.float32](height, width, channels)# Declare the grayscale image.var spec = TensorSpec(DType.float32, height, width)var gray_scale_image = Tensor[DType.float32](spec)# Perform the RGB to grayscale transform.for y in range(height):  for x in range(width):    var r = image[y,x,0]    var g = image[y,x,1]    var b = image[y,x,2]    gray_scale_image[Index(y,x)] = 0.299 * r + 0.587 * g + 0.114 * bprint(gray_scale_image.shape().__str__())
```

## `Tensor`

A tensor type which owns its underlying data and is parameterized on DType.

**Parameters:**

- ​**dtype** (`DType`): The underlying element type of the tensor.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Movable`, `Stringable`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Default initializer for TensorShape.

`__init__(inout self: Self, other: Self)`

Creates a deep copy of an existing tensor.

**Args:**

- ​**other** (`Self`): The tensor to copy from.

`__init__(inout self: Self, *dims: Int)`

Allocates a tensor using the shape provided.

**Args:**

- ​**dims** (`*Int`): The tensor dimensions.

`__init__(inout self: Self, owned shape: TensorShape)`

Allocates a tensor using the shape provided.

**Args:**

- ​**shape** (`TensorShape`): The tensor shape.

`__init__(inout self: Self, owned spec: TensorSpec)`

Allocates a tensor using the spec provided.

**Args:**

- ​**spec** (`TensorSpec`): The tensor spec.

`__init__(inout self: Self, owned ptr: DTypePointer[dtype, 0], owned shape: TensorShape)`

Initializes a Tensor from the pointer and shape provided. The caller relinquishes the ownership of the pointer being passed in.

**Args:**

- ​**ptr** (`DTypePointer[dtype, 0]`): The data pointer.
- ​**shape** (`TensorShape`): The tensor shapes.

`__init__(inout self: Self, owned ptr: DTypePointer[dtype, 0], owned spec: TensorSpec)`

Initializes a Tensor from the pointer and shape provided. The caller relinquishes the ownership of the pointer being passed in.

**Args:**

- ​**ptr** (`DTypePointer[dtype, 0]`): The data pointer.
- ​**spec** (`TensorSpec`): The tensor spec.

`__init__(inout self: Self, shape: TensorShape, *data: SIMD[dtype, 1])`

Initializes a Tensor from the shape and data provided. The caller assumes ownership of the new tensor data.

**Args:**

- ​**shape** (`TensorShape`): The tensor shape.
- ​**data** (`*SIMD[dtype, 1]`): Elements to place into the created tensor.

`__init__(inout self: Self, shape: TensorShape, owned list: List[SIMD[dtype, 1]])`

Initializes a 1-dimensional Tensor from the provided list.

**Args:**

- ​**shape** (`TensorShape`): The tensor shape.
- ​**list** (`List[SIMD[dtype, 1]]`): The list to construct this Tensor from.

`__init__(inout self: Self, owned list: List[SIMD[dtype, 1]])`

Initializes a 1-dimensional Tensor from the provided list.

**Args:**

- ​**list** (`List[SIMD[dtype, 1]]`): The list to construct this Tensor from.

### `__copyinit__`

`__copyinit__(inout self: Self, other: Self)`

Creates a deep copy of an existing tensor.

**Args:**

- ​**other** (`Self`): The tensor to copy from.

### `__moveinit__`

`__moveinit__(inout self: Self, owned existing: Self)`

Move initializer for the tensor.

**Args:**

- ​**existing** (`Self`): The tensor to move.

### `__del__`

`__del__(owned self: Self)`

Delete the spec and release any owned memory.

### `__getitem__`

`__getitem__(self: Self, index: Int) -> SIMD[dtype, 1]`

Gets the value at the specified index.

**Args:**

- ​**index** (`Int`): The index of the value to retrieve.

**Returns:**

The value at the specified indices.

`__getitem__(self: Self, *indices: Int) -> SIMD[dtype, 1]`

Gets the value at the specified indices.

**Args:**

- ​**indices** (`*Int`): The indices of the value to retrieve.

**Returns:**

The value at the specified indices.

`__getitem__(self: Self, indices: VariadicList[Int]) -> SIMD[dtype, 1]`

Gets the value at the specified indices.

**Args:**

- ​**indices** (`VariadicList[Int]`): The indices of the value to retrieve.

**Returns:**

The value at the specified indices.

`__getitem__[len: Int](self: Self, indices: StaticIntTuple[len]) -> SIMD[dtype, 1]`

Gets the SIMD value at the specified indices.

**Parameters:**

- ​**len** (`Int`): The length of the indecies.

**Args:**

- ​**indices** (`StaticIntTuple[len]`): The indices of the value to retrieve.

**Returns:**

The value at the specified indices.

### `__setitem__`

`__setitem__(inout self: Self, index: Int, val: SIMD[dtype, 1])`

Sets the value at the specified index.

**Args:**

- ​**index** (`Int`): The index of the value to set.
- ​**val** (`SIMD[dtype, 1]`): The value to store.

`__setitem__(inout self: Self, indices: VariadicList[Int], val: SIMD[dtype, 1])`

Sets the value at the specified indices.

**Args:**

- ​**indices** (`VariadicList[Int]`): The indices of the value to set.
- ​**val** (`SIMD[dtype, 1]`): The value to store.

`__setitem__[len: Int](inout self: Self, indices: StaticIntTuple[len], val: SIMD[dtype, 1])`

Sets the value at the specified indices.

**Parameters:**

- ​**len** (`Int`): The length of the indecies.

**Args:**

- ​**indices** (`StaticIntTuple[len]`): The indices of the value to set.
- ​**val** (`SIMD[dtype, 1]`): The value to store.

### `__eq__`

`__eq__(self: Self, other: Self) -> Bool`

Returns True if the two tensors are the same and False otherwise.

**Args:**

- ​**other** (`Self`): The other Tensor to compare against.

**Returns:**

True if the two tensors are the same and False otherwise.

### `__ne__`

`__ne__(self: Self, other: Self) -> Bool`

Returns True if the two tensors are not the same and False otherwise.

**Args:**

- ​**other** (`Self`): The other Tensor to compare against.

**Returns:**

True if the two tensors are the not the same and False otherwise.

### `__add__`

`__add__(self: Self, other: Self) -> Self`

Adds this tensor with another tensor.

**Constraints:**

The two tensors must have the same rank, type, and dimensions.

**Args:**

- ​**other** (`Self`): The RHS of the add operation.

**Returns:**

The addition of both tensors.

`__add__(self: Self, other: SIMD[dtype, 1]) -> Self`

Adds this tensor with a scalar.

**Args:**

- ​**other** (`SIMD[dtype, 1]`): The RHS of the add operation.

**Returns:**

The addition result.

### `__sub__`

`__sub__(self: Self, other: Self) -> Self`

Subtracts a tensor from this tensor.

**Constraints:**

The two tensors must have the same rank, type, and dimensions.

**Args:**

- ​**other** (`Self`): The RHS of the sub operation.

**Returns:**

The addition of both tensors.

`__sub__(self: Self, other: SIMD[dtype, 1]) -> Self`

Subtracts a scalar from this tensor.

**Args:**

- ​**other** (`SIMD[dtype, 1]`): The RHS of the sub operation.

**Returns:**

The subtraction result.

### `__mul__`

`__mul__(self: Self, other: Self) -> Self`

Multiplies this tensor with another tensor.

**Constraints:**

The two tensors must have the same rank, type, and dimensions.

**Args:**

- ​**other** (`Self`): The RHS of the mul operation.

**Returns:**

The multiplication of both tensors.

`__mul__(self: Self, other: SIMD[dtype, 1]) -> Self`

Multiplies this tensor with a scalar.

**Args:**

- ​**other** (`SIMD[dtype, 1]`): The RHS of the mul operation.

**Returns:**

The multiplication result.

### `__truediv__`

`__truediv__(self: Self, other: Self) -> Self`

Divides this tensor by another tensor.

TODO: Change the return type if inputs are int

**Constraints:**

The two tensors must have the same rank, type, and dimensions.

**Args:**

- ​**other** (`Self`): The RHS of the div operation.

**Returns:**

The division of both tensors.

`__truediv__(self: Self, other: SIMD[dtype, 1]) -> Self`

Divides this tensor by a scalar.

**Args:**

- ​**other** (`SIMD[dtype, 1]`): The RHS of the div operation.

**Returns:**

The division result.

### `__pow__`

`__pow__(self: Self, exponent: Int) -> Self`

Returns a copy of the tensor with each element raised to the power of `exponent`.

**Constraints:**

For integral values the exponent cannot be negative.

**Args:**

- ​**exponent** (`Int`): Integer power to raise tensor to.

**Returns:**

An exponentiated copy of tensor.

### `__radd__`

`__radd__(self: Self, other: SIMD[dtype, 1]) -> Self`

Adds this tensor with a scalar.

**Args:**

- ​**other** (`SIMD[dtype, 1]`): The LHS of the add operation.

**Returns:**

The addition result.

### `__rsub__`

`__rsub__(self: Self, other: SIMD[dtype, 1]) -> Self`

Subtracts this tensor from a scalar.

**Args:**

- ​**other** (`SIMD[dtype, 1]`): The LHS of the sub operation.

**Returns:**

The addition result.

### `__rmul__`

`__rmul__(self: Self, other: SIMD[dtype, 1]) -> Self`

Multiplies this tensor with a scalar.

**Args:**

- ​**other** (`SIMD[dtype, 1]`): The LHS of the mul operation.

**Returns:**

The multiplication result.

### `__rtruediv__`

`__rtruediv__(self: Self, other: SIMD[dtype, 1]) -> Self`

Divides a scalar by this tensor, broadcasting elementwise.

**Args:**

- ​**other** (`SIMD[dtype, 1]`): The LHS of the div operation.

**Returns:**

The division result.

### `__ipow__`

`__ipow__(inout self: Self, exponent: Int)`

In-place pow operator.

Raises each element of the tensor to the power of `exponent` in place.

**Constraints:**

For integral values the exponent cannot be negative.

**Args:**

- ​**exponent** (`Int`): Integer power to raise tensor to.

### `ireshape`

`ireshape(inout self: Self, new_shape: TensorShape)`

(Inplace) Reshapes the tensor by assigning it a new shape.

**Args:**

- ​**new\_shape** (`TensorShape`): The new shape.

### `reshape`

`reshape(inout self: Self, new_shape: TensorShape) -> Self`

Returns a reshaped tensor.

**Args:**

- ​**new\_shape** (`TensorShape`): The new shape.

**Returns:**

A Tensor that is a reshaped version of the original tensor.

### `astype`

`astype[new_dtype: DType](self: Self) -> Tensor[new_dtype]`

Copy the Tensor with elements cast to the new type.

**Parameters:**

- ​**new\_dtype** (`DType`): The type to cast the values to.

**Returns:**

A new tensor with the same values but the new type.

### `clip`

`clip(self: Self, lower_bound: SIMD[dtype, 1], upper_bound: SIMD[dtype, 1]) -> Self`

Clips the values of the tensor.

**Args:**

- ​**lower\_bound** (`SIMD[dtype, 1]`): The lower bound.
- ​**upper\_bound** (`SIMD[dtype, 1]`): The upper bound.

**Returns:**

A clipped version of the tensor.

### `data`

`data(self: Self) -> DTypePointer[dtype, 0]`

Gets the underlying Data pointer to the Tensor.

**Returns:**

The underlying data pointer of the tensor.

### `type`

`type(self: Self) -> DType`

Gets the underlying DType of the tensor.

**Returns:**

The underlying DType of the tensor.

### `rank`

`rank(self: Self) -> Int`

Gets the rank of the tensor.

**Returns:**

The rank of the tensor.

### `num_elements`

`num_elements(self: Self) -> Int`

Gets the total number of elements in the tensor.

**Returns:**

The total number of elements in the tensor.

### `bytecount`

`bytecount(self: Self) -> Int`

Gets the total bytecount of the tensor.

**Returns:**

The total bytecount of the tensor.

### `spec`

`spec(self: Self) -> TensorSpec`

Gets the specification of the tensor.

**Returns:**

The underlying tensor spec of the tensor.

### `shape`

`shape(self: Self) -> TensorShape`

Gets the shape of the tensor.

**Returns:**

The underlying tensor shape of the tensor.

### `dim`

`dim(self: Self, idx: Int) -> Int`

Gets the dimension at the specified index.

**Args:**

- ​**idx** (`Int`): The dimension index.

**Returns:**

The dimension at the specified index.

### `__str__`

`__str__(self: Self) -> String`

Gets the tensor as a string.

**Returns:**

A compact string of the tensor.

### `__repr__`

`__repr__(self: Self) -> String`

Gets the tensor as a string.

**Returns:**

A compact string representation of the tensor.

### `load`

`load[width: Int](self: Self, index: Int) -> SIMD[dtype, width]`

Gets the SIMD value at the specified index.

**Parameters:**

- ​**width** (`Int`): The SIMD width of the vector.

**Args:**

- ​**index** (`Int`): The index of the value to retrieve.

**Returns:**

The SIMD value at the specified indices.

`load[width: Int](self: Self, *indices: Int) -> SIMD[dtype, width]`

Gets the SIMD value at the specified indices.

**Parameters:**

- ​**width** (`Int`): The SIMD width of the vector.

**Args:**

- ​**indices** (`*Int`): The indices of the value to retrieve.

**Returns:**

The SIMD value at the specified indices.

`load[width: Int](self: Self, indices: VariadicList[Int]) -> SIMD[dtype, width]`

Gets the SIMD value at the specified indices.

**Parameters:**

- ​**width** (`Int`): The SIMD width of the vector.

**Args:**

- ​**indices** (`VariadicList[Int]`): The indices of the value to retrieve.

**Returns:**

The SIMD value at the specified indices.

`load[len: Int, width: Int](self: Self, indices: StaticIntTuple[len]) -> SIMD[dtype, width]`

Gets the SIMD value at the specified indices.

**Parameters:**

- ​**len** (`Int`): The length of the indecies.
- ​**width** (`Int`): The SIMD width of the vector.

**Args:**

- ​**indices** (`StaticIntTuple[len]`): The indices of the value to retrieve.

**Returns:**

The SIMD value at the specified indices.

`static load(path: Path) -> Self`

Read tensor from a file. The path should be a file saved with Tensor.save method.

**Args:**

- ​**path** (`Path`): Path to the output file.

**Returns:**

The tensor read from file.

### `store`

`store[width: Int](inout self: Self, index: Int, val: SIMD[dtype, width])`

Sets the SIMD value at the specified index.

**Parameters:**

- ​**width** (`Int`): The SIMD width of the vector.

**Args:**

- ​**index** (`Int`): The index of the value to set.
- ​**val** (`SIMD[dtype, width]`): The SIMD value to store.

`store[width: Int](inout self: Self, indices: VariadicList[Int], val: SIMD[dtype, width])`

Sets the SIMD value at the specified indices.

**Parameters:**

- ​**width** (`Int`): The SIMD width of the vector.

**Args:**

- ​**indices** (`VariadicList[Int]`): The indices of the value to set.
- ​**val** (`SIMD[dtype, width]`): The SIMD value to store.

`store[len: Int, width: Int](inout self: Self, indices: StaticIntTuple[len], val: SIMD[dtype, width])`

Sets the SIMD value at the specified indices.

**Parameters:**

- ​**len** (`Int`): The length of the indecies.
- ​**width** (`Int`): The SIMD width of the vector.

**Args:**

- ​**indices** (`StaticIntTuple[len]`): The indices of the value to set.
- ​**val** (`SIMD[dtype, width]`): The SIMD value to store.

### `argmax`

`argmax(self: Self, *, axis: Int) -> Self`

Finds the indices of the maximum element along the specified axis.

**Args:**

- ​**axis** (`Int`): The axis.

**Returns:**

A new tensor containing the indices of the maximum elements along axis.

### `argmin`

`argmin(self: Self, *, axis: Int) -> Self`

Finds the indices of the minimum element along the specified axis.

**Args:**

- ​**axis** (`Int`): The axis.

**Returns:**

A new tensor containing the indices of the minimum elements along axis.

### `tofile`

`tofile(self: Self, path: Path)`

Write values to a file.

**Args:**

- ​**path** (`Path`): Path to the output file.

### `fromfile`

`static fromfile(path: Path) -> Self`

Read tensor from a file.

**Args:**

- ​**path** (`Path`): Path to the output file.

**Returns:**

The tensor read from file.

### `save`

`save(self: Self, path: Path)`

Save given tensor to file. This method preserves shape and datatype information.

**Args:**

- ​**path** (`Path`): Path of file.