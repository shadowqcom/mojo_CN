# random

## `rand`

`rand[type: DType](*shape: Int) -> Tensor[type]`

Constructs a new tensor with the specified shape and fills it with random elements.

**Parameters:**

- ​**type** (`DType`): The dtype of the tensor.

**Args:**

- ​**shape** (`*Int`): The tensor shape.

**Returns:**

A new tensor of specified shape and filled with random elements.

`rand[type: DType](owned shape: TensorShape) -> Tensor[type]`

Constructs a new tensor with the specified shape and fills it with random elements.

**Parameters:**

- ​**type** (`DType`): The dtype of the tensor.

**Args:**

- ​**shape** (`TensorShape`): The tensor shape.

**Returns:**

A new tensor of specified shape and filled with random elements.

`rand[type: DType](owned spec: TensorSpec) -> Tensor[type]`

Constructs a new tensor with the specified specification and fills it with random elements.

**Parameters:**

- ​**type** (`DType`): The dtype of the tensor.

**Args:**

- ​**spec** (`TensorSpec`): The tensor specification.

**Returns:**

A new tensor of specified specification and filled with random elements.

## `randn`

`randn[type: DType](owned shape: TensorShape, mean: SIMD[f64, 1], variance: SIMD[f64, 1]) -> Tensor[type]`

Constructs a new Tensor from the shape and fills it with random values from a Normal(mean, variance) distribution.

**Constraints:**

The type should be floating point.

**Parameters:**

- ​**type** (`DType`): The dtype of the pointer.

**Args:**

- ​**shape** (`TensorShape`): The shape of the Tensor to fill with random values.
- ​**mean** (`SIMD[f64, 1]`): Normal distribution mean.
- ​**variance** (`SIMD[f64, 1]`): Normal distribution variance.

**Returns:**

A Tensor filled with random dtype samples from Normal(mean, variance).

`randn[type: DType](owned spec: TensorSpec, mean: SIMD[f64, 1], variance: SIMD[f64, 1]) -> Tensor[type]`

Constructs a new Tensor from the spec and fills it with random values from a Normal(mean, variance) distribution.

**Constraints:**

The type should be floating point.

**Parameters:**

- ​**type** (`DType`): The dtype of the pointer.

**Args:**

- ​**spec** (`TensorSpec`): The spec of the Tensor to fill with random values.
- ​**mean** (`SIMD[f64, 1]`): Normal distribution mean.
- ​**variance** (`SIMD[f64, 1]`): Normal distribution variance.

**Returns:**

A Tensor filled with random dtype samples from Normal(mean, variance).