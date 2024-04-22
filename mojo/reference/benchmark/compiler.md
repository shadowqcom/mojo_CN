# compiler

## `keep`

`keep(val: Bool)`

Provides a hint to the compiler to not optimize the variable use away.

This is useful in benchmarking to avoid the compiler not deleting the code to be benchmarked because the variable is not used in a side-effecting manner.

**Args:**

- ​**val** (`Bool`): The value to not optimize away.

`keep(val: Int)`

Provides a hint to the compiler to not optimize the variable use away.

This is useful in benchmarking to avoid the compiler not deleting the code to be benchmarked because the variable is not used in a side-effecting manner.

**Args:**

- ​**val** (`Int`): The value to not optimize away.

`keep[type: DType, simd_width: Int](val: SIMD[type, simd_width])`

Provides a hint to the compiler to not optimize the variable use away.

This is useful in benchmarking to avoid the compiler not deleting the code to be benchmarked because the variable is not used in a side-effecting manner.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The value to not optimize away.

`keep[type: DType](val: DTypePointer[type, 0])`

Provides a hint to the compiler to not optimize the variable use away.

This is useful in benchmarking to avoid the compiler not deleting the code to be benchmarked because the variable is not used in a side-effecting manner.

**Parameters:**

- ​**type** (`DType`): The type of the input.

**Args:**

- ​**val** (`DTypePointer[type, 0]`): The value to not optimize away.

`keep[type: AnyRegType](val: Pointer[*"type", 0])`

Provides a hint to the compiler to not optimize the variable use away.

This is useful in benchmarking to avoid the compiler not deleting the code to be benchmarked because the variable is not used in a side-effecting manner.

**Parameters:**

- ​**type** (`AnyRegType`): The type of the input.

**Args:**

- ​**val** (`Pointer[*"type", 0]`): The value to not optimize away.

`keep[type: AnyRegType](inout *val: "type")`

Provides a hint to the compiler to not optimize the variable use away.

This is useful in benchmarking to avoid the compiler not deleting the code to be benchmarked because the variable is not used in a side-effecting manner.

**Parameters:**

- ​**type** (`AnyRegType`): The type of the input.

**Args:**

- ​**val** (`*"type"`): The value to not optimize away.