# bit

Provides functions for bit manipulation.

You can import these APIs from the `math` package. For example:

```
from math.bit import ctlz
```

## `ctlz`[​](https://docs.modular.com/mojo/stdlib/math/bit#ctlz "Direct link to ctlz")

`ctlz(val: Int) -> Int`

Counts the number of leading zeros of an integer.

**Args:**

- ​**val** (`Int`): The input value.

**Returns:**

The number of leading zeros of the input.

`ctlz[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Counts the per-element number of leading zeros in a SIMD vector.

**Constraints:**

DType must be integral.

**Parameters:**

- ​**type** (`DType`): `dtype` used for the computation.
- ​**simd\_width** (`Int`): SIMD width used for the computation.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The input value.

**Returns:**

A SIMD value where the element at position `i` contains the number of leading zeros at position `i` of the input value.

## `cttz`[​](https://docs.modular.com/mojo/stdlib/math/bit#cttz "Direct link to cttz")

`cttz(val: Int) -> Int`

Counts the number of trailing zeros for an integer.

**Args:**

- ​**val** (`Int`): The input value.

**Returns:**

The number of trailing zeros of the input.

`cttz[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Counts the number of trailing zero for a SIMD vector.

**Constraints:**

DType must be integral.

**Parameters:**

- ​**type** (`DType`): `dtype` used for the computation.
- ​**simd\_width** (`Int`): SIMD width used for the computation.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The input value.

**Returns:**

A SIMD value where the element at position `i` contains the number of trailing zeros at position `i` of the input value.

## `select`[​](https://docs.modular.com/mojo/stdlib/math/bit#select "Direct link to select")

`select[type: DType, simd_width: Int](cond: SIMD[bool, simd_width], true_case: SIMD[type, simd_width], false_case: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs an elementwise select based on the input condition value.

**Parameters:**

- ​**type** (`DType`): `dtype` used for the computation.
- ​**simd\_width** (`Int`): SIMD width used for the computation.

**Args:**

- ​**cond** (`SIMD[bool, simd_width]`): The condition.
- ​**true\_case** (`SIMD[type, simd_width]`): The value to pick if the condition is True.
- ​**false\_case** (`SIMD[type, simd_width]`): The value to pick if the condition is False.

**Returns:**

A SIMD value where the element at position `i` contains `true_case[i]` if `cond[i]` is True and `false_case[i]` otherwise.

## `bitreverse`[​](https://docs.modular.com/mojo/stdlib/math/bit#bitreverse "Direct link to bitreverse")

`bitreverse[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Reverses the bitpattern of an integral value.

**Constraints:**

DType must be integral.

**Parameters:**

- ​**type** (`DType`): `dtype` used for the computation.
- ​**simd\_width** (`Int`): SIMD width used for the computation.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The input value.

**Returns:**

A SIMD value where the element at position `i` has a reversed bitpattern of an integer value of the element at position `i` of the input value.

## `bswap`[​](https://docs.modular.com/mojo/stdlib/math/bit#bswap "Direct link to bswap")

`bswap[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Byte-swaps a value.

Byte swap an integer value or vector of integer values with an even number of bytes (positive multiple of 16 bits). This is equivalent to `llvm.bswap` intrinsic that has the following semantics:

The `llvm.bswap.i16` intrinsic returns an i16 value that has the high and low byte of the input i16 swapped. Similarly, the `llvm.bswap.i32` intrinsic returns an i32 value that has the four bytes of the input i32 swapped, so that if the input bytes are numbered 0, 1, 2, 3 then the returned i32 will have its bytes in 3, 2, 1, 0 order. The `llvm.bswap.i48`, `llvm.bswap.i64` and other intrinsics extend this concept to additional even-byte lengths (6 bytes, 8 bytes and more, respectively).

**Constraints:**

Number of bytes must be even (Bitwidth % 16 == 0). DType must be integral.

**Parameters:**

- ​**type** (`DType`): `dtype` used for the computation.
- ​**simd\_width** (`Int`): SIMD width used for the computation.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The input value.

**Returns:**

A SIMD value where the element at position `i` is the value of the element at position `i` of the input value with its bytes swapped.

## `ctpop`[​](https://docs.modular.com/mojo/stdlib/math/bit#ctpop "Direct link to ctpop")

`ctpop[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Counts the number of bits set in a value.

**Constraints:**

DType must be integral.

**Parameters:**

- ​**type** (`DType`): `dtype` used for the computation.
- ​**simd\_width** (`Int`): SIMD width used for the computation.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The input value.

**Returns:**

A SIMD value where the element at position `i` contains the number of bits set in the element at position `i` of the input value.

## `bit_not`[​](https://docs.modular.com/mojo/stdlib/math/bit#bit_not "Direct link to bit_not")

`bit_not[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs a bitwise NOT operation on an integral.

**Constraints:**

DType must be integral.

**Parameters:**

- ​**type** (`DType`): `dtype` used for the computation.
- ​**simd\_width** (`Int`): SIMD width used for the computation.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The input value.

**Returns:**

A SIMD value where the element at position `i` is computed as a bitwise NOT of the integer value at position `i` of the input value.

## `bit_and`[​](https://docs.modular.com/mojo/stdlib/math/bit#bit_and "Direct link to bit_and")

`bit_and[type: DType, simd_width: Int](a: SIMD[type, simd_width], b: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs a bitwise AND operation.

**Constraints:**

DType must be integral.

**Parameters:**

- ​**type** (`DType`): `dtype` used for the computation.
- ​**simd\_width** (`Int`): SIMD width used for the computation.

**Args:**

- ​**a** (`SIMD[type, simd_width]`): The first input value.
- ​**b** (`SIMD[type, simd_width]`): The second input value.

**Returns:**

A SIMD value where the element at position `i` is computed as a bitwise AND of the elements at position `i` of the input values.

## `bit_length`[​](https://docs.modular.com/mojo/stdlib/math/bit#bit_length "Direct link to bit_length")

`bit_length[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the number of digits required to represent the integer.

**Constraints:**

DType must be integral. The function asserts on non-integral dtypes in debug builds and returns 0 in release builds.

**Parameters:**

- ​**type** (`DType`): `dtype` used for the computation.
- ​**simd\_width** (`Int`): SIMD width used for the computation.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The input value.

**Returns:**

A SIMD value where the element at position `i` equals to the number of digits required to represent the integer at position `i` of the input value.