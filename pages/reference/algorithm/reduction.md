# reduction

实现 SIMD reductions。

您可以从包中导入这些 API。例如：`algorithm`

```python
from algorithm import map_reduce
```

## `map_reduce`

```python
map_reduce[
        simd_width: Int, 
        size: Dim, 
        type: DType, 
        acc_type: DType, 
        input_gen_fn: fn[DType, Int](Int, /) capturing -> SIMD[$0, $1], 
        reduce_vec_to_vec_fn: fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2], 
        reduce_vec_to_scalar_fn: fn[DType, Int](SIMD[$0, $1], /) -> SIMD[$0, 1]
    ]
    (dst: Buffer[type, size, 0], init: SIMD[acc_type, 1]) -> SIMD[acc_type, 1]
```
将调用input_gen_fn的结果存储在 dst 中，同时使用自定义归并函数归并结果。

**参数：**

- **simd_width** ：计算的向量宽度。`Int`
- **size** ：缓冲区大小。`Dim`
- **type** ：缓冲区元素 dtype。`DType`
- **acc_type** ：归并累加器的 dtype。`DType`
- **input_gen_fn** ：生成要reduction的输入的函数。`fn[DType, Int](Int, /) capturing -> SIMD[$0, $1]`
- **reduce_vec_to_vec_fn** ：映射函数。此函数用于组合累积两个输入数据块：例如，我们加载两个元素向量，并需要将它们简化为单个向量。`fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2]``8xfloat32``8xfloat32`
- **reduce_vec_to_scalar_fn** ：归并函数。此函数用于将向量简化为标量。例如，当我们得到向量并希望将其简化为标量时。`fn[DType, Int](SIMD[$0, $1], /) -> SIMD[$0, 1]``8xfloat32``float32`

**参数：**

- **dst** ：输出缓冲区。`Buffer[type, size, 0]`
- **init** ：要在累加器中使用的初始值。`SIMD[acc_type, 1]`

**返回：**

计算出的归并值。

## `reduce`
```python
reduce[
    reduce_fn: fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2], 
    src: DType, 
    src: Dim, 
    src: AddressSpace, 
    init: DType
    ](src: Buffer[src, src, src], init: SIMD[init, 1]) -> SIMD[init, 1]
```

计算缓冲区元素的自定义归并。

**参数：**

- **reduce_fn** ：实现约简的 lambda。`fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2]`

**参数：**

- **src** ：输入缓冲区。`Buffer[src, src, src]`
- **init** ：要在累加器中使用的初始值。`SIMD[init, 1]`

**返回：**

计算出的归并值。

```python
reduce[
        map_fn: fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2], 
        reduce_fn: fn[DType, Int](SIMD[$0, $1], /) -> SIMD[$0, 1], 
        reduce_axis: Int, 
        src: DType, 
        src: Int, 
        src: DimList, 
        src: AddressSpace, 
        dst: DType, 
        dst: Int, 
        dst: DimList, 
        dst: AddressSpace
    ](src: NDBuffer[src, src, src, src], dst: NDBuffer[dst, dst, dst, dst], init: SIMD[dst, 1])
```

在 NDBuffer src 的reduce_axis上执行归并，并将结果存储在 NDBuffer dst 中。

首先，src 被重塑为 3D 张量。在不失去普遍性的情况下，这三个 轴将被称为 [H，W，C]，其中要归并的轴是 W， 归并轴之前的轴被装入 H，而归并轴被打包到C.中，即具有dims [D1， D2， ...， Di， ...， Dn]的张量 跨轴 i 的缩减被打包成一个带有 dims [H， W， C] 的 3D 张量， 其中 H=prodD1,...,Di-1，W = Di，C = prodDi+1,...,Dn。

**参数：**

- **map_fn** ：映射函数。当合并累积两个输入数据块时，会使用此函数：例如，我们加载两个 8xfloat32 向量的元素，并需要将它们简化为单个 8xfloat32 向量。`fn[DType, DType, Int](SIMD[$0, $2], SIMD[$1, $2], /) capturing -> SIMD[$0, $2]`
- **reduce_fn** ：约简函数。此函数用于将向量简化为标量。例如，当我们得到 8xfloat32 向量并希望将其归并到 1xfloat32 时。`fn[DType, Int](SIMD[$0, $1], /) -> SIMD[$0, 1]`
- **reduce_axis** ：要缩小的轴。`Int`

**参数：**

- **src** ：输入缓冲区。`NDBuffer[src, src, src, src]`
- **dst** ：输出缓冲区。`NDBuffer[dst, dst, dst, dst]`
- **init** ：要在累加器中使用的初始值。`SIMD[dst, 1]`

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

## `reduce_boolean`

```
reduce_boolean[
    reduce_fn: fn[DType, Int](SIMD[$0, $1], /) capturing -> Bool, 
    continue_fn: fn(Bool, /) capturing -> Bool, 
    src: DType, 
    src: Dim, 
    src: AddressSpace
    ](src: Buffer[src, src, src], init: Bool) -> Bool
```
计算缓冲元素的布尔值归并。如果`continue_fn`返回 False，则将提前退出归并。

**参数：**

- **reduce_fn** ：布尔约简函数。此函数用于将向量简化为标量。例如，当我们得到向量并希望将其简化为 .`fn[DType, Int](SIMD[$0, $1], /) capturing -> Bool``8xfloat32``bool`
- **continue_fn** ：一个函数，指示我们是否要继续处理其余的迭代。这将获取reduce_fn的结果，并返回 True 以继续处理，并返回 False 以提前退出。`fn(Bool, /) capturing -> Bool`

**参数：**

- **src** ：输入缓冲区。`Buffer[src, src, src]`
- **init** ：要使用的初始值。`Bool`

**返回：**

计算出的还原值。

## `max`

`max[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> SIMD[src, 1]`

计算缓冲区中的 max 元素。

**参数：**

- **src** ：缓冲区。`Buffer[src, src, src]`

**返回：**

缓冲区元素的最大值。

**Args:**

- **src** (`Buffer[src, src, src]`): The buffer.



`max[reduce_axis: Int, src: DType, src: Int, src: DimList, src: AddressSpace, dst: DimList](src: NDBuffer[src, src, src, src], dst: NDBuffer[src, src, dst, 0])`

计算 NDBuffer reduce_axis的最大值。

**参数：**

- **reduce_axis** ：要缩小的轴。`Int`

**参数：**

- **src** ：输入缓冲区。`NDBuffer[src, src, src, src]`
- **dst** ：输出缓冲区。`NDBuffer[src, src, dst, 0]`



## `min`

`min[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> SIMD[src, 1]`

计算缓冲区中的 min 元素。

**参数：**

- **src** ：缓冲区。`Buffer[src, src, src]`

**返回：**

缓冲区元素的最小值。



`min[reduce_axis: Int, src: DType, src: Int, src: DimList, src: AddressSpace, dst: DimList](src: NDBuffer[src, src, src, src], dst: NDBuffer[src, src, dst, 0])`

计算 NDBuffer reduce_axis的最小值。

**参数：**

- **reduce_axis** ：要归并的轴。`Int`

**参数：**

- **src** ：输入缓冲区。`NDBuffer[src, src, src, src]`
- **dst** ：输出缓冲区。`NDBuffer[src, src, dst, 0]`

## `sum`

`sum[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> SIMD[src, 1]`

计算缓冲区元素的总和。

**参数：**

- **src** ：缓冲区。`Buffer[src, src, src]`

**返回：**

缓冲区元素的总和。



`sum[reduce_axis: Int, src: DType, src: Int, src: DimList, src: AddressSpace, dst: DimList](src: NDBuffer[src, src, src, src], dst: NDBuffer[src, src, dst, 0])`

计算 NDBuffer 的 reduce_axis 的总和。

**参数：**

- **reduce_axis** ：要缩小的轴。`Int`

**参数：**

- **src** ：输入缓冲区。`NDBuffer[src, src, src, src]`
- **dst** ：输出缓冲区。`NDBuffer[src, src, dst, 0]`

## `product`

`product[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> SIMD[src, 1]`

计算缓冲区元素的乘积。

**参数：**

- **src** ：缓冲区。`Buffer[src, src, src]`

**返回：**

缓冲元素的乘积。

`product[reduce_axis: Int, src: DType, src: Int, src: DimList, src: AddressSpace, dst: DimList](src: NDBuffer[src, src, src, src], dst: NDBuffer[src, src, dst, 0])`

计算 NDBuffer reduce_axis的乘积。

**参数：**

- **reduce_axis** ：要归并的轴。`Int`

**参数：**

- **src** ：输入缓冲区。`NDBuffer[src, src, src, src]`

- **dst** ：输出缓冲区。`NDBuffer[src, src, dst, 0]`


<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

## `mean`

`mean[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> SIMD[src, 1]`

计算缓冲区中元素的平均值。

**参数：**

- **src** ：计算均值的元素的缓冲区。`Buffer[src, src, src]`

**返回：**

给定缓冲区中元素的平均值。



`mean[reduce_axis: Int, src: DType, src: Int, src: DimList, src: AddressSpace, dst: DimList](src: NDBuffer[src, src, src, src], dst: NDBuffer[src, src, dst, 0])`

计算 NDBuffer reduce_axis的平均值。

**参数：**

- **reduce_axis** ：要缩小的轴。`Int`

**参数：**

- **src** ：输入缓冲区。`NDBuffer[src, src, src, src]`
- **dst** ：输出缓冲区。`NDBuffer[src, src, dst, 0]`

```python
mean[
        type: DType, 
        input_fn: fn[Int, Int](StaticIntTuple[$1], /) capturing -> SIMD[type, $0], 
        output_fn: fn[Int, Int](StaticIntTuple[$1], SIMD[type, $0], /) capturing -> None, 
        single_thread_blocking_override: Bool, 
        target: StringLiteral, 
        input_shape: Int
    ](input_shape: StaticIntTuple[input_shape], reduce_dim: Int, output_shape: StaticIntTuple[input_shape])
```

计算输入和输出形状的平均值。

这将对 指定的域执行平均计算， 使用 存储结果。结果的域是使用 .`input_shape`,`input_0_fn`,`output_shape`,`output_0_fn`

**参数：**

- **type** ：输入和输出的类型。`DType`
- **input_fn** ：加载输入的函数。`fn[Int, Int](StaticIntTuple[$1], /) capturing -> SIMD[type, $0]`
- **output_fn** ：存储输出的函数。`fn[Int, Int](StaticIntTuple[$1], SIMD[type, $0], /) capturing -> None`
- **single_thread_blocking_override** ：如果为 True，则使用单个线程同步运行操作。`Bool`
- **target** ：要运行的目标。`StringLiteral`

**参数：**

- **input_shape** ：输入形状。`StaticIntTuple[input_shape]`
- **reduce_dim** ：要执行平均值的轴。`Int`
- **output_shape** ：输出形状。`StaticIntTuple[input_shape]`

## `variance`

`variance[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src], mean_value: SIMD[src, 1], correction: Int) -> SIMD[src, 1]`

给定平均值，计算缓冲区中元素的方差。

平均值用于避免对数据进行第二次传递：

```
variance(x) = sum((x - E(x))^2) / (size - correction)
```

**参数：**

- **src** ：缓冲区。`Buffer[src, src, src]`
- **mean_value** ：缓冲区的平均值。`SIMD[src, 1]`
- **校正** ：按大小归一化方差 - 校正。`Int`

**返回：**

缓冲区中元素的方差值。



`variance[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src], correction: Int) -> SIMD[src, 1]`

计算缓冲区中元素的方差值。

```
variance(x) = sum((x - E(x))^2) / (size - correction)
```

**参数：**

- **src** ：缓冲区。`Buffer[src, src, src]`
- **更正** ：按大小归一化方差 - 校正 Default=1。`Int`

**返回：**

缓冲区中元素的方差值。



## `all_true`

`all_true[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> Bool`

如果缓冲区中的所有元素均为 True，则返回 True，否则返回 False。

**参数：**

- **src** ：缓冲区。`Buffer[src, src, src]`

**返回：**

如果缓冲区的所有元素均为 True，则为 True，否则为 False。



## `any_true`

`any_true[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> Bool`

如果缓冲区中的任意元素为 True，则返回 True，否则返回 False。

**参数：**

- **src** ：缓冲区。`Buffer[src, src, src]`

**返回：**

如果缓冲区的任何元素为 True，则为 True，否则为 False。



## `none_true`

`none_true[src: DType, src: Dim, src: AddressSpace](src: Buffer[src, src, src]) -> Bool`

如果缓冲区中没有一个元素为 True，则返回 True，否则返回 False。

**参数：**

- **src** ：缓冲区。`Buffer[src, src, src]`

**返回：**

如果缓冲区的所有元素均不为 True，则为 True，否则为 False。



## `argmax`

```python
argmax[
    input: DType, 
    input: Int, 
    input: DimList, 
    input: AddressSpace, 
    output: DType, 
    output: Int, 
    output: DimList, 
    output: AddressSpace
    ](input: NDBuffer[input, input, input, input], axis: Int, output: NDBuffer[output, output, output, output])
```

沿指定轴查找最大元素的索引。

**参数：**

- **input**：输入张量。`NDBuffer[input, input, input, input]`
- **axis** ：轴。`Int`
- **output**：输出张量。`NDBuffer[output, output, output, output]`



```python
argmax[
    input: DType, 
    input: Int, 
    input: DimList, 
    input: AddressSpace, 
    axis_buf: DType, 
    axis_buf: Int, 
    axis_buf: DimList, 
    axis_buf: AddressSpace, 
    output: DType, 
    output: Int, 
    output: DimList, 
    output: AddressSpace
](input: NDBuffer[input, input, input, input], axis_buf: NDBuffer[axis_buf, axis_buf, axis_buf, axis_buf], output: NDBuffer[output, output, output, output])
```

沿指定轴查找最大元素的索引。

**参数：**

- **input**：输入张量。`NDBuffer[input, input, input, input]`
- **axis_buf** ：轴张量。`NDBuffer[axis_buf, axis_buf, axis_buf, axis_buf]`
- **output** ：轴张量。`NDBuffer[output, output, output, output]`

## `argmin`

```
argmin[
    input: DType, 
    input: Int, 
    input: DimList, 
    input: AddressSpace, 
    output: DType, 
    output: Int, 
    output: DimList,
    output: AddressSpace
](input: NDBuffer[input, input, input, input], axis: Int, output: NDBuffer[output, output, output, output])
```

沿指定轴查找最小元素的索引。

**参数：**

- **input**：输入张量。`NDBuffer[input, input, input, input]`
- **axis** ：轴。`Int`
- **output**：输出张量。`NDBuffer[output, output, output, output]`



```
argmin[
    input: DType, 
    input: Int, 
    input: DimList, 
    input: AddressSpace, 
    axis_buf: DType, 
    axis_buf: Int, 
    axis_buf: DimList, 
    axis_buf: AddressSpace, 
    output: DType, 
    output: Int, 
    output: DimList, 
    output: AddressSpace
](input: NDBuffer[input, input, input, input], axis_buf: NDBuffer[axis_buf, axis_buf, axis_buf, axis_buf], output: NDBuffer[output, output, output, output])
```

沿指定轴查找最小元素的索引。

**参数：**

- **input**：输入张量。`NDBuffer[input, input, input, input]`
- **axis_buf** ：轴张量。`NDBuffer[axis_buf, axis_buf, axis_buf, axis_buf]`
- **output** ：轴张量。`NDBuffer[output, output, output, output]`


<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

## `reduce_shape`

```
reduce_shape[input_rank: Int, input_type: DType, axis_type: DType, single_thread_blocking_override: Bool](input_buf: NDBuffer[input_type, input_rank, create_unknown[stdlib::builtin::int::Int][input_rank](), 0], axis_buf: NDBuffer[axis_type, 1, create_unknown[stdlib::builtin::int::Int][1](), 0]) -> StaticIntTuple[input_rank]
```

计算操作的输出形状，并断言输入兼容。`pad`

**参数：**

- **input_rank** ：输入张量的Input_rank。`Int`
- **input_type** ：输入张量的类型。`DType`
- **axis_type** ：轴张量的类型。`DType`
- **single_thread_blocking_override** ：如果为 True，则使用单个线程同步运行操作。`Bool`

**参数：**

- **input_buf** ：输入张量。`NDBuffer[input_type, input_rank, create_unknown[stdlib::builtin::int::Int][input_rank](), 0]`
- **axis_buf** ：轴张量。`NDBuffer[axis_type, 1, create_unknown[stdlib::builtin::int::Int][1](), 0]`

**返回：**

输出形状。



## `cumsum`

`cumsum[dst: DType, dst: Dim, dst: AddressSpace](dst: Buffer[dst, dst, dst], src: Buffer[dst, dst, dst])`

计算缓冲区中所有元素的累积总和。dst[i] = src[i] + src[i-1] + ... + src[0]。

**参数：**

- **dst**：存储累积求和运算结果的缓冲区。`Buffer[dst, dst, dst]`
- **src** ：计算累积总和的元素的缓冲区。`Buffer[dst, dst, dst]`