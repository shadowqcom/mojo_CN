# reduction

Implements SIMD reductions.

You can import these APIs from the `algorithm` package. For example:

```
from algorithm import map_reduce
```

## `map_reduce`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#map_reduce "Direct link to map_reduce")

`map_reduce[simd_width: Int, size: Dim, type: DType, acc_type: DType, input_gen_fn: fn[DType, Int](Int, /) capturing -> SIMD[$0, $1], reduce_vec_to_vec_fn: fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2], reduce_vec_to_scalar_fn: fn[DType, Int](SIMD[$0, $1], /) -> SIMD[$0, 1]](dst: Buffer[type, size, 0], init: SIMD[acc_type, 1]) -> SIMD[acc_type, 1]`

Stores the result of calling input\_gen\_fn in dst and simultaneously reduce the result using a custom reduction function.

**Parameters:**

- ​**simd\_width** (`Int`): The vector width for the computation.
- ​**size** (`Dim`): The buffer size.
- ​**type** (`DType`): The buffer elements dtype.
- ​**acc\_type** (`DType`): The dtype of the reduction accumulator.
- ​**input\_gen\_fn** (`fn[DType, Int](Int, /) capturing -> SIMD[$0, $1]`): A function that generates inputs to reduce.
- ​**reduce\_vec\_to\_vec\_fn** (`fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2]`): A mapping function. This function is used to combine (accumulate) two chunks of input data: e.g. we load two `8xfloat32` vectors of elements and need to reduce them into a single `8xfloat32` vector.
- ​**reduce\_vec\_to\_scalar\_fn** (`fn[DType, Int](SIMD[$0, $1], /) -> SIMD[$0, 1]`): A reduction function. This function is used to reduce a vector to a scalar. E.g. when we got `8xfloat32` vector and want to reduce it to an `float32` scalar.

**Args:**

- ​**dst** (`Buffer[type, size, 0]`): The output buffer.
- ​**init** (`SIMD[acc_type, 1]`): The initial value to use in accumulator.

**Returns:**

The computed reduction value.

## `reduce`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#reduce "Direct link to reduce")

`reduce[reduce_fn: fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2], src: DType, src: Dim, src: AddressSpace, init: DType](src: Buffer[src, src, src], init: SIMD[init, 1]) -> SIMD[init, 1]`

Computes a custom reduction of buffer elements.

**Parameters:**

- ​**reduce\_fn** (`fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2]`): The lambda implementing the reduction.

**Args:**

- ​**src** (`Buffer[src, src, src]`): The input buffer.
- ​**init** (`SIMD[init, 1]`): The initial value to use in accumulator.

**Returns:**

The computed reduction value.

`reduce[map_fn: fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2], reduce_fn: fn[DType, Int](SIMD[$0, $1], /) -> SIMD[$0, 1], reduce_axis: Int, src: DType, src: Int, src: DimList, src: AddressSpace, dst: DType, dst: Int, dst: DimList, dst: AddressSpace](src: NDBuffer[src, src, src, src], dst: NDBuffer[dst, dst, dst, dst], init: SIMD[dst, 1])`

Performs a reduction across reduce\_axis of an NDBuffer (src) and stores the result in an NDBuffer (dst).

First src is reshaped into a 3D tensor. Without loss of generality, the three axes will be referred to as \[H,W,C\], where the axis to reduce across is W, the axes before the reduce axis are packed into H, and the axes after the reduce axis are packed into C. i.e. a tensor with dims \[D1, D2, ..., Di, ..., Dn\] reducing across axis i gets packed into a 3D tensor with dims \[H, W, C\], where H=prod(D1,...,Di-1), W = Di, and C = prod(Di+1,...,Dn).

**Parameters:**

- ​**map\_fn** (`fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2]`): A mapping function. This function is used when to combine (accumulate) two chunks of input data: e.g. we load two 8xfloat32 vectors of elements and need to reduce them to a single 8xfloat32 vector.
- ​**reduce\_fn** (`fn[DType, Int](SIMD[$0, $1], /) -> SIMD[$0, 1]`): A reduction function. This function is used to reduce a vector to a scalar. E.g. when we got 8xfloat32 vector and want to reduce it to 1xfloat32.
- ​**reduce\_axis** (`Int`): The axis to reduce across.

**Args:**

- ​**src** (`NDBuffer[src, src, src, src]`): The input buffer.
- ​**dst** (`NDBuffer[dst, dst, dst, dst]`): The output buffer.
- ​**init** (`SIMD[dst, 1]`): The initial value to use in accumulator.

## `reduce_boolean`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#reduce_boolean "Direct link to reduce_boolean")

`reduce_boolean[reduce_fn: fn[DType, Int](SIMD[$0, $1], /) capturing -> Bool, continue_fn: fn(Bool, /) capturing -> Bool, src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src], init: Bool) -> Bool`

Computes a bool reduction of buffer elements. The reduction will early exit if the `continue_fn` returns False.

**Parameters:**

- ​**reduce\_fn** (`fn[DType, Int](SIMD[$0, $1], /) capturing -> Bool`): A boolean reduction function. This function is used to reduce a vector to a scalar. E.g. when we got `8xfloat32` vector and want to reduce it to a `bool`.
- ​**continue\_fn** (`fn(Bool, /) capturing -> Bool`): A function to indicate whether we want to continue processing the rest of the iterations. This takes the result of the reduce\_fn and returns True to continue processing and False to early exit.

**Args:**

- ​**src** (`Buffer[src, src, src]`): The input buffer.
- ​**init** (`Bool`): The initial value to use.

**Returns:**

The computed reduction value.

## `max`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#max "Direct link to max")

`max[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> SIMD[src, 1]`

Computes the max element in a buffer.

**Args:**

- ​**src** (`Buffer[src, src, src]`): The buffer.

**Returns:**

The maximum of the buffer elements.

`max[reduce_axis: Int, src: DType, src: Int, src: DimList, src: AddressSpace, dst: DimList](src: NDBuffer[src, src, src, src], dst: NDBuffer[src, src, dst, 0])`

Computes the max across reduce\_axis of an NDBuffer.

**Parameters:**

- ​**reduce\_axis** (`Int`): The axis to reduce across.

**Args:**

- ​**src** (`NDBuffer[src, src, src, src]`): The input buffer.
- ​**dst** (`NDBuffer[src, src, dst, 0]`): The output buffer.

## `min`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#min "Direct link to min")

`min[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> SIMD[src, 1]`

Computes the min element in a buffer.

**Args:**

- ​**src** (`Buffer[src, src, src]`): The buffer.

**Returns:**

The minimum of the buffer elements.

`min[reduce_axis: Int, src: DType, src: Int, src: DimList, src: AddressSpace, dst: DimList](src: NDBuffer[src, src, src, src], dst: NDBuffer[src, src, dst, 0])`

Computes the min across reduce\_axis of an NDBuffer.

**Parameters:**

- ​**reduce\_axis** (`Int`): The axis to reduce across.

**Args:**

- ​**src** (`NDBuffer[src, src, src, src]`): The input buffer.
- ​**dst** (`NDBuffer[src, src, dst, 0]`): The output buffer.

## `sum`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#sum "Direct link to sum")

`sum[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> SIMD[src, 1]`

Computes the sum of buffer elements.

**Args:**

- ​**src** (`Buffer[src, src, src]`): The buffer.

**Returns:**

The sum of the buffer elements.

`sum[reduce_axis: Int, src: DType, src: Int, src: DimList, src: AddressSpace, dst: DimList](src: NDBuffer[src, src, src, src], dst: NDBuffer[src, src, dst, 0])`

Computes the sum across reduce\_axis of an NDBuffer.

**Parameters:**

- ​**reduce\_axis** (`Int`): The axis to reduce across.

**Args:**

- ​**src** (`NDBuffer[src, src, src, src]`): The input buffer.
- ​**dst** (`NDBuffer[src, src, dst, 0]`): The output buffer.

## `product`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#product "Direct link to product")

`product[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> SIMD[src, 1]`

Computes the product of the buffer elements.

**Args:**

- ​**src** (`Buffer[src, src, src]`): The buffer.

**Returns:**

The product of the buffer elements.

`product[reduce_axis: Int, src: DType, src: Int, src: DimList, src: AddressSpace, dst: DimList](src: NDBuffer[src, src, src, src], dst: NDBuffer[src, src, dst, 0])`

Computes the product across reduce\_axis of an NDBuffer.

**Parameters:**

- ​**reduce\_axis** (`Int`): The axis to reduce across.

**Args:**

- ​**src** (`NDBuffer[src, src, src, src]`): The input buffer.
- ​**dst** (`NDBuffer[src, src, dst, 0]`): The output buffer.

## `mean`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#mean "Direct link to mean")

`mean[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> SIMD[src, 1]`

Computes the mean value of the elements in a buffer.

**Args:**

- ​**src** (`Buffer[src, src, src]`): The buffer of elements for which the mean is computed.

**Returns:**

The mean value of the elements in the given buffer.

`mean[reduce_axis: Int, src: DType, src: Int, src: DimList, src: AddressSpace, dst: DimList](src: NDBuffer[src, src, src, src], dst: NDBuffer[src, src, dst, 0])`

Computes the mean across reduce\_axis of an NDBuffer.

**Parameters:**

- ​**reduce\_axis** (`Int`): The axis to reduce across.

**Args:**

- ​**src** (`NDBuffer[src, src, src, src]`): The input buffer.
- ​**dst** (`NDBuffer[src, src, dst, 0]`): The output buffer.

`mean[type: DType, input_fn: fn[Int, Int](StaticIntTuple[$1], /) capturing -> SIMD[type, $0], output_fn: fn[Int, Int](StaticIntTuple[$1], SIMD[type, $0], /) capturing -> None, single_thread_blocking_override: Bool, target: StringLiteral, input_shape: Int](input_shape: StaticIntTuple[input_shape], reduce_dim: Int, output_shape: StaticIntTuple[input_shape])`

Computes the mean across the input and output shape.

This performs the mean computation on the domain specified by `input_shape`, storing the results using the`input_0_fn`. The results' domain is `output_shape` which are stored using the `output_0_fn`.

**Parameters:**

- ​**type** (`DType`): The type of the input and output.
- ​**input\_fn** (`fn[Int, Int](StaticIntTuple[$1], /) capturing -> SIMD[type, $0]`): The function to load the input.
- ​**output\_fn** (`fn[Int, Int](StaticIntTuple[$1], SIMD[type, $0], /) capturing -> None`): The function to store the output.
- ​**single\_thread\_blocking\_override** (`Bool`): If True, then the operation is run synchronously using a single thread.
- ​**target** (`StringLiteral`): The target to run on.

**Args:**

- ​**input\_shape** (`StaticIntTuple[input_shape]`): The input shape.
- ​**reduce\_dim** (`Int`): The axis to perform the mean on.
- ​**output\_shape** (`StaticIntTuple[input_shape]`): The output shape.

## `variance`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#variance "Direct link to variance")

`variance[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src], mean_value: SIMD[src, 1], correction: Int) -> SIMD[src, 1]`

Given a mean, computes the variance of elements in a buffer.

The mean value is used to avoid a second pass over the data:

```
variance(x) = sum((x - E(x))^2) / (size - correction)
```

**Args:**

- ​**src** (`Buffer[src, src, src]`): The buffer.
- ​**mean\_value** (`SIMD[src, 1]`): The mean value of the buffer.
- ​**correction** (`Int`): Normalize variance by size - correction.

**Returns:**

The variance value of the elements in a buffer.

`variance[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src], correction: Int) -> SIMD[src, 1]`

Computes the variance value of the elements in a buffer.

```
variance(x) = sum((x - E(x))^2) / (size - correction)
```

**Args:**

- ​**src** (`Buffer[src, src, src]`): The buffer.
- ​**correction** (`Int`): Normalize variance by size - correction (Default=1).

**Returns:**

The variance value of the elements in a buffer.

## `all_true`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#all_true "Direct link to all_true")

`all_true[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> Bool`

Returns True if all the elements in a buffer are True and False otherwise.

**Args:**

- ​**src** (`Buffer[src, src, src]`): The buffer.

**Returns:**

True if all of the elements of the buffer are True and False otherwise.

## `any_true`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#any_true "Direct link to any_true")

`any_true[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> Bool`

Returns True if any the elements in a buffer are True and False otherwise.

**Args:**

- ​**src** (`Buffer[src, src, src]`): The buffer.

**Returns:**

True if any of the elements of the buffer are True and False otherwise.

## `none_true`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#none_true "Direct link to none_true")

`none_true[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> Bool`

Returns True if none of the elements in a buffer are True and False otherwise.

**Args:**

- ​**src** (`Buffer[src, src, src]`): The buffer.

**Returns:**

True if none of the elements of the buffer are True and False otherwise.

## `argmax`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#argmax "Direct link to argmax")

`argmax[input: DType, input: Int, input: DimList, input: AddressSpace, output: DType, output: Int, output: DimList, output: AddressSpace](input: NDBuffer[input, input, input, input], axis: Int, output: NDBuffer[output, output, output, output])`

Finds the indices of the maximum element along the specified axis.

**Args:**

- ​**input** (`NDBuffer[input, input, input, input]`): The input tensor.
- ​**axis** (`Int`): The axis.
- ​**output** (`NDBuffer[output, output, output, output]`): The output tensor.

`argmax[input: DType, input: Int, input: DimList, input: AddressSpace, axis_buf: DType, axis_buf: Int, axis_buf: DimList, axis_buf: AddressSpace, output: DType, output: Int, output: DimList, output: AddressSpace](input: NDBuffer[input, input, input, input], axis_buf: NDBuffer[axis_buf, axis_buf, axis_buf, axis_buf], output: NDBuffer[output, output, output, output])`

Finds the indices of the maximum element along the specified axis.

**Args:**

- ​**input** (`NDBuffer[input, input, input, input]`): The input tensor.
- ​**axis\_buf** (`NDBuffer[axis_buf, axis_buf, axis_buf, axis_buf]`): The axis tensor.
- ​**output** (`NDBuffer[output, output, output, output]`): The axis tensor.

## `argmin`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#argmin "Direct link to argmin")

`argmin[input: DType, input: Int, input: DimList, input: AddressSpace, output: DType, output: Int, output: DimList, output: AddressSpace](input: NDBuffer[input, input, input, input], axis: Int, output: NDBuffer[output, output, output, output])`

Finds the indices of the maximum element along the specified axis.

**Args:**

- ​**input** (`NDBuffer[input, input, input, input]`): The input tensor.
- ​**axis** (`Int`): The axis.
- ​**output** (`NDBuffer[output, output, output, output]`): The output tensor.

`argmin[input: DType, input: Int, input: DimList, input: AddressSpace, axis_buf: DType, axis_buf: Int, axis_buf: DimList, axis_buf: AddressSpace, output: DType, output: Int, output: DimList, output: AddressSpace](input: NDBuffer[input, input, input, input], axis_buf: NDBuffer[axis_buf, axis_buf, axis_buf, axis_buf], output: NDBuffer[output, output, output, output])`

Finds the indices of the minimum element along the specified axis.

**Args:**

- ​**input** (`NDBuffer[input, input, input, input]`): The input tensor.
- ​**axis\_buf** (`NDBuffer[axis_buf, axis_buf, axis_buf, axis_buf]`): The axis tensor.
- ​**output** (`NDBuffer[output, output, output, output]`): The axis tensor.

## `reduce_shape`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#reduce_shape "Direct link to reduce_shape")

`reduce_shape[input_rank: Int, input_type: DType, axis_type: DType, single_thread_blocking_override: Bool](input_buf: NDBuffer[input_type, input_rank, create_unknown[stdlib::builtin::int::Int][input_rank](), 0], axis_buf: NDBuffer[axis_type, 1, create_unknown[stdlib::builtin::int::Int][1](), 0]) -> StaticIntTuple[input_rank]`

Compute the output shape of a `pad` operation, and assert the inputs are compatible.

**Parameters:**

- ​**input\_rank** (`Int`): Input\_rank of the input tensor.
- ​**input\_type** (`DType`): Type of the input tensor.
- ​**axis\_type** (`DType`): Type of the axis tensor.
- ​**single\_thread\_blocking\_override** (`Bool`): If True, then the operation is run synchronously using a single thread.

**Args:**

- ​**input\_buf** (`NDBuffer[input_type, input_rank, create_unknown[stdlib::builtin::int::Int][input_rank](), 0]`): The input tensor.
- ​**axis\_buf** (`NDBuffer[axis_type, 1, create_unknown[stdlib::builtin::int::Int][1](), 0]`): The axis tensor.

**Returns:**

The output shape.

## `cumsum`[​](https://docs.modular.com/mojo/stdlib/algorithm/reduction#cumsum "Direct link to cumsum")

`cumsum[dst: DType, dst: Dim, dst: AddressSpace](dst: Buffer[dst, dst, dst], src: Buffer[dst, dst, dst])`

Computes the cumulative sum of all elements in a buffer. dst\[i\] = src\[i\] + src\[i-1\] + ... + src\[0\].

**Args:**

- ​**dst** (`Buffer[dst, dst, dst]`): The buffer that stores the result of cumulative sum operation.
- ​**src** (`Buffer[dst, dst, dst]`): The buffer of elements for which the cumulative sum is computed.