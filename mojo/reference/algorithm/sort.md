# sort

Implements sorting functions.

You can import these APIs from the `algorithm` package. For example:

```
from algorithm.sort import sort
```

## `partition`

`partition[type: AnyRegType, cmp_fn: fn[AnyRegType]($0, $0, /) capturing -> Bool](buff: Pointer[*"type", 0], k: Int, size: Int)`

Partition the input vector inplace such that first k elements are the largest (or smallest if cmp\_fn is <= operator) elements. The ordering of the first k elements is undefined.

**Parameters:**

- ​**type** (`AnyRegType`): DType of the underlying data.
- ​**cmp\_fn** (`fn[AnyRegType]($0, $0, /) capturing -> Bool`): Comparison functor of type, type) capturing -> Bool type.

**Args:**

- ​**buff** (`Pointer[*"type", 0]`): Input buffer.
- ​**k** (`Int`): Index of the partition element.
- ​**size** (`Int`): The length of the buffer.

## `sort`

`sort(inout buff: Pointer[Int, 0], len: Int)`

Sort the vector inplace.

The function doesn't return anything, the vector is updated inplace.

**Args:**

- ​**buff** (`Pointer[Int, 0]`): Input buffer.
- ​**len** (`Int`): The length of the buffer.

`sort[type: DType](inout buff: Pointer[SIMD[type, 1], 0], len: Int)`

Sort the vector inplace.

The function doesn't return anything, the vector is updated inplace.

**Parameters:**

- ​**type** (`DType`): DType of the underlying data.

**Args:**

- ​**buff** (`Pointer[SIMD[type, 1], 0]`): Input buffer.
- ​**len** (`Int`): The length of the buffer.

`sort(inout v: List[Int])`

Sort the vector inplace.

The function doesn't return anything, the vector is updated inplace.

**Args:**

- ​**v** (`List[Int]`): Input integer vector to sort.

`sort[type: DType](inout v: List[SIMD[type, 1]])`

Sort the vector inplace.

The function doesn't return anything, the vector is updated inplace.

**Parameters:**

- ​**type** (`DType`): DType of the underlying data.

**Args:**

- ​**v** (`List[SIMD[type, 1]]`): Input vector to sort.