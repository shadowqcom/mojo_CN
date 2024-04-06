# math

Defines math utilities.

You can import these APIs from the `math` package. For example:

```
from math import mul
```

## `mod`[​](https://docs.modular.com/mojo/stdlib/math/math#mod "Direct link to mod")

`mod[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise modulo operation of two SIMD vectors.

**Parameters:**

- ​**type** (`DType`): DType of the input SIMD vectors.
- ​**simd\_width** (`Int`): Width of the input SIMD vectors.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): The numerator of the operation.
- ​**y** (`SIMD[type, simd_width]`): The denominator of the operation.

**Returns:**

The remainder of x divided by y.

## `mul`[​](https://docs.modular.com/mojo/stdlib/math/math#mul "Direct link to mul")

`mul[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise multiplication of two SIMD vectors.

**Parameters:**

- ​**type** (`DType`): DType of the input SIMD vectors.
- ​**simd\_width** (`Int`): Width of the input SIMD vectors.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): First SIMD vector to multiply.
- ​**y** (`SIMD[type, simd_width]`): Second SIMD vector to multiply.

**Returns:**

Elementwise multiplication of x and y.

## `sub`[​](https://docs.modular.com/mojo/stdlib/math/math#sub "Direct link to sub")

`sub[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise subtraction of two SIMD vectors.

**Parameters:**

- ​**type** (`DType`): DType of the input SIMD vectors.
- ​**simd\_width** (`Int`): Width of the input SIMD vectors.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector which y will be subtracted from.
- ​**y** (`SIMD[type, simd_width]`): SIMD vector to subtract from x.

**Returns:**

Elementwise subtraction of SIMD vector y x - y).

## `add`[​](https://docs.modular.com/mojo/stdlib/math/math#add "Direct link to add")

`add[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise addition of two SIMD vectors.

**Parameters:**

- ​**type** (`DType`): DType of the input SIMD vectors.
- ​**simd\_width** (`Int`): Width of the input SIMD vectors.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): First SIMD vector to add.
- ​**y** (`SIMD[type, simd_width]`): Second SIMD vector to add.

**Returns:**

Elementwise addition of x and y.

## `div`[​](https://docs.modular.com/mojo/stdlib/math/math#div "Direct link to div")

`div[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise division of two SIMD vectors.

**Parameters:**

- ​**type** (`DType`): DType of the input SIMD vectors.
- ​**simd\_width** (`Int`): Width of the input SIMD vectors.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector containing the dividends.
- ​**y** (`SIMD[type, simd_width]`): SIMD vector containing the quotients.

**Returns:**

Elementwise division of SIMD vector x by SIMD vector y (this is x / y).

## `clamp`[​](https://docs.modular.com/mojo/stdlib/math/math#clamp "Direct link to clamp")

`clamp[type: DType, simd_width: Int](x: SIMD[type, simd_width], lower_bound: SIMD[type, simd_width], upper_bound: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Clamps the values in a SIMD vector to be in a certain range.

Clamp cuts values in the input SIMD vector off at the upper bound and lower bound values. For example, SIMD vector `[0, 1, 2, 3]` clamped to a lower bound of 1 and an upper bound of 2 would return `[1, 1, 2, 2]`.

**Parameters:**

- ​**type** (`DType`): DType of the input SIMD vectors.
- ​**simd\_width** (`Int`): Width of the input SIMD vectors.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform the clamp operation on.
- ​**lower\_bound** (`SIMD[type, simd_width]`): Minimum of the range to clamp to.
- ​**upper\_bound** (`SIMD[type, simd_width]`): Maximum of the range to clamp to.

**Returns:**

A new SIMD vector containing x clamped to be within lower\_bound and upper\_bound.

## `abs`[​](https://docs.modular.com/mojo/stdlib/math/math#abs "Direct link to abs")

`abs(x: Int) -> Int`

Gets the absolute value of an integer.

**Args:**

- ​**x** (`Int`): Value to take the absolute value of.

**Returns:**

The absolute value of x.

`abs[type: DType, simd_width: Int](x: ComplexSIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise abs (norm) on each element of the complex value.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`ComplexSIMD[type, simd_width]`): The complex vector to perform absolute value on.

**Returns:**

The elementwise abs of x.

`abs[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise absolute value on the elements of a SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform absolute value on.

**Returns:**

The elementwise absolute value of x.

## `rotate_bits_left`[​](https://docs.modular.com/mojo/stdlib/math/math#rotate_bits_left "Direct link to rotate_bits_left")

`rotate_bits_left[shift: Int](x: Int) -> Int`

Shifts the bits of a input to the left by `shift` bits (with wrap-around).

**Constraints:**

`-size <= shift < size`

**Parameters:**

- ​**shift** (`Int`): The number of bit positions by which to rotate the bits of the integer to the left (with wrap-around).

**Args:**

- ​**x** (`Int`): The input value.

**Returns:**

The input rotated to the left by `shift` elements (with wrap-around).

`rotate_bits_left[shift: Int, type: DType, width: Int](x: SIMD[type, width]) -> SIMD[type, width]`

Shifts bits to the left by `shift` positions (with wrap-around) for each element of a SIMD vector.

**Constraints:**

`0 <= shift < size` Only unsigned types can be rotated.

**Parameters:**

- ​**shift** (`Int`): The number of positions by which to shift left the bits for each element of a SIMD vector to the left (with wrap-around).
- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, width]`): SIMD vector to perform the operation on.

**Returns:**

The SIMD vector with each element's bits shifted to the left by `shift` bits (with wrap-around).

## `rotate_bits_right`[​](https://docs.modular.com/mojo/stdlib/math/math#rotate_bits_right "Direct link to rotate_bits_right")

`rotate_bits_right[shift: Int](x: Int) -> Int`

Shifts the bits of a input to the left by `shift` bits (with wrap-around).

**Constraints:**

`-size <= shift < size`

**Parameters:**

- ​**shift** (`Int`): The number of bit positions by which to rotate the bits of the integer to the left (with wrap-around).

**Args:**

- ​**x** (`Int`): The input value.

**Returns:**

The input rotated to the left by `shift` elements (with wrap-around).

`rotate_bits_right[shift: Int, type: DType, width: Int](x: SIMD[type, width]) -> SIMD[type, width]`

Shifts bits to the right by `shift` positions (with wrap-around) for each element of a SIMD vector.

**Constraints:**

`0 <= shift < size` Only unsigned types can be rotated.

**Parameters:**

- ​**shift** (`Int`): The number of positions by which to shift right the bits for each element of a SIMD vector to the left (with wrap-around).
- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, width]`): SIMD vector to perform the operation on.

**Returns:**

The SIMD vector with each element's bits shifted to the right by `shift` bits (with wrap-around).

## `rotate_left`[​](https://docs.modular.com/mojo/stdlib/math/math#rotate_left "Direct link to rotate_left")

`rotate_left[shift: Int](x: Int) -> Int`

Shifts the bits of a input to the left by `shift` bits (with wrap-around).

**Constraints:**

`-size <= shift < size`

**Parameters:**

- ​**shift** (`Int`): The number of bit positions by which to rotate the bits of the integer to the left (with wrap-around).

**Args:**

- ​**x** (`Int`): The input value.

**Returns:**

The input rotated to the left by `shift` elements (with wrap-around).

`rotate_left[shift: Int, type: DType, size: Int](x: SIMD[type, size]) -> SIMD[type, size]`

Shifts the elements of a SIMD vector to the left by `shift` elements (with wrap-around).

**Constraints:**

`-size <= shift < size`

**Parameters:**

- ​**shift** (`Int`): The number of positions by which to rotate the elements of SIMD vector to the left (with wrap-around).
- ​**type** (`DType`): The `DType` of the input and output SIMD vector.
- ​**size** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, size]`): The input value.

**Returns:**

The SIMD vector rotated to the left by `shift` elements (with wrap-around).

## `rotate_right`[​](https://docs.modular.com/mojo/stdlib/math/math#rotate_right "Direct link to rotate_right")

`rotate_right[shift: Int](x: Int) -> Int`

Shifts the bits of a input to the right by `shift` bits (with wrap-around).

**Constraints:**

`-size <= shift < size`

**Parameters:**

- ​**shift** (`Int`): The number of bit positions by which to rotate the bits of the integer to the right (with wrap-around).

**Args:**

- ​**x** (`Int`): The input value.

**Returns:**

The input rotated to the right by `shift` elements (with wrap-around).

`rotate_right[shift: Int, type: DType, size: Int](x: SIMD[type, size]) -> SIMD[type, size]`

Shifts the elements of a SIMD vector to the right by `shift` elements (with wrap-around).

**Constraints:**

`-size < shift <= size`

**Parameters:**

- ​**shift** (`Int`): The number of positions by which to rotate the elements of SIMD vector to the right (with wrap-around).
- ​**type** (`DType`): The `DType` of the input and output SIMD vector.
- ​**size** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, size]`): The input value.

**Returns:**

The SIMD vector rotated to the right by `shift` elements (with wrap-around).

## `floor`[​](https://docs.modular.com/mojo/stdlib/math/math#floor "Direct link to floor")

`floor[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise floor on the elements of a SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform floor on.

**Returns:**

The elementwise floor of x.

## `ceil`[​](https://docs.modular.com/mojo/stdlib/math/math#ceil "Direct link to ceil")

`ceil[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise ceiling on the elements of a SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform ceiling on.

**Returns:**

The elementwise ceiling of x.

## `ceildiv`[​](https://docs.modular.com/mojo/stdlib/math/math#ceildiv "Direct link to ceildiv")

`ceildiv(x: Int, y: Int) -> Int`

Return the rounded-up result of dividing x by y.

**Args:**

- ​**x** (`Int`): The numerator.
- ​**y** (`Int`): The denominator.

**Returns:**

The ceiling of dividing x by y.

## `trunc`[​](https://docs.modular.com/mojo/stdlib/math/math#trunc "Direct link to trunc")

`trunc[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise truncation on the elements of a SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform trunc on.

**Returns:**

The elementwise truncation of x.

## `round`[​](https://docs.modular.com/mojo/stdlib/math/math#round "Direct link to round")

`round[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise rounding on the elements of a SIMD vector.

This rounding goes to the nearest integer with ties away from zero.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform rounding on.

**Returns:**

The elementwise rounding of x.

## `roundeven`[​](https://docs.modular.com/mojo/stdlib/math/math#roundeven "Direct link to roundeven")

`roundeven[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise banker's rounding on the elements of a SIMD vector.

This rounding goes to the nearest integer with ties toward the nearest even integer.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform rounding on.

**Returns:**

The elementwise banker's rounding of x.

## `round_half_down`[​](https://docs.modular.com/mojo/stdlib/math/math#round_half_down "Direct link to round_half_down")

`round_half_down[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Rounds ties towards the smaller integer".

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform rounding on.

**Returns:**

The elementwise rounding of x evaluating ties towards the smaller integer.

## `round_half_up`[​](https://docs.modular.com/mojo/stdlib/math/math#round_half_up "Direct link to round_half_up")

`round_half_up[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Rounds ties towards the larger integer".

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform rounding on.

**Returns:**

The elementwise rounding of x evaluating ties towards the larger integer.

## `sqrt`[​](https://docs.modular.com/mojo/stdlib/math/math#sqrt "Direct link to sqrt")

`sqrt(x: Int) -> Int`

Performs square root on an integer.

**Args:**

- ​**x** (`Int`): The integer value to perform square root on.

**Returns:**

The square root of x.

`sqrt[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise square root on the elements of a SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform square root on.

**Returns:**

The elementwise square root of x.

## `rsqrt`[​](https://docs.modular.com/mojo/stdlib/math/math#rsqrt "Direct link to rsqrt")

`rsqrt[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise reciprocal square root on the elements of a SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform reciprocal square root on.

**Returns:**

The elementwise reciprocal square root of x.

## `exp2`[​](https://docs.modular.com/mojo/stdlib/math/math#exp2 "Direct link to exp2")

`exp2[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes elementwise 2 raised to the power of n, where n is an element of the input SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform exp2 on.

**Returns:**

Vector containing 2n2^n2n computed elementwise, where n is an element in the input SIMD vector.

## `ldexp`[​](https://docs.modular.com/mojo/stdlib/math/math#ldexp "Direct link to ldexp")

`ldexp[type: DType, simd_width: Int](x: SIMD[type, simd_width], exp: SIMD[si32, simd_width]) -> SIMD[type, simd_width]`

Computes elementwise ldexp function.

The ldexp function multiplies a floating point value x by the number 2 raised to the exp power. I.e. ldexp(x,exp)ldexp(x,exp)ldexp(x,exp) calculate the value of x∗2expx \* 2^{exp}x∗2exp and is used within the erferferf function.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector of floating point values.
- ​**exp** (`SIMD[si32, simd_width]`): SIMD vector containing the exponents.

**Returns:**

Vector containing elementwise result of ldexp on x and exp.

## `exp`[​](https://docs.modular.com/mojo/stdlib/math/math#exp "Direct link to exp")

`exp[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Calculates elementwise exponential of the input vector.

Given an input vector XXX and an output vector YYY, sets Yi\=eXiY\_i = e^{X\_i}Yi​\=eXi​ for each position iii in the input vector (where eee is the mathmatical constant eee).

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): The input SIMD vector.

**Returns:**

A SIMD vector containing eee raised to the power XiX\_iXi​ where XiX\_iXi​ is an element in the input SIMD vector.

## `frexp`[​](https://docs.modular.com/mojo/stdlib/math/math#frexp "Direct link to frexp")

`frexp[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> StaticTuple[SIMD[type, simd_width], 2]`

Breaks floating point values into a fractional part and an exponent part.

**Constraints:**

`type` must be a floating point value.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): The input values.

**Returns:**

A tuple of two SIMD vectors containing the fractional and exponent parts of the input floating point values.

## `log`[​](https://docs.modular.com/mojo/stdlib/math/math#log "Direct link to log")

`log[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise natural log (base E) of a SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): Vector to perform logarithm operation on.

**Returns:**

Vector containing result of performing natural log base E on x.

## `log2`[​](https://docs.modular.com/mojo/stdlib/math/math#log2 "Direct link to log2")

`log2[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise log (base 2) of a SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): Vector to perform logarithm operation on.

**Returns:**

Vector containing result of performing log base 2 on x.

## `copysign`[​](https://docs.modular.com/mojo/stdlib/math/math#copysign "Direct link to copysign")

`copysign[type: DType, simd_width: Int](magnitude: SIMD[type, simd_width], sign: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Returns a value with the magnitude of the first operand and the sign of the second operand.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**magnitude** (`SIMD[type, simd_width]`): The magnitude to use.
- ​**sign** (`SIMD[type, simd_width]`): The sign to copy.

**Returns:**

Copies the sign from sign to magnitude.

## `erf`[​](https://docs.modular.com/mojo/stdlib/math/math#erf "Direct link to erf")

`erf[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs the elementwise Erf on a SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector to perform elementwise Erf on.

**Returns:**

The result of the elementwise Erf operation.

## `tanh`[​](https://docs.modular.com/mojo/stdlib/math/math#tanh "Direct link to tanh")

`tanh[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise evaluation of the tanh function.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): The vector to perform the elementwise tanh on.

**Returns:**

The result of the elementwise tanh operation.

## `isclose`[​](https://docs.modular.com/mojo/stdlib/math/math#isclose "Direct link to isclose")

`isclose[type: DType, simd_width: Int](a: SIMD[type, simd_width], b: SIMD[type, simd_width], *, atol: SIMD[type, 1], rtol: SIMD[type, 1]) -> SIMD[bool, simd_width]`

Checks if the two input values are numerically within a tolerance.

When the type is integral, then equality is checked. When the type is floating point, then this checks if the two input values are numerically the close using the abs(a−b)<\=max(rtol∗max(abs(a),abs(b)),atol)abs(a - b) <= max(rtol \* max(abs(a), abs(b)), atol)abs(a−b)<=max(rtol∗max(abs(a),abs(b)),atol) formula.

Unlike Pythons's `math.isclose`, this implementation is symmetric. I.e. `isclose(a,b) == isclose(b,a)`.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**a** (`SIMD[type, simd_width]`): The first value to compare.
- ​**b** (`SIMD[type, simd_width]`): The second value to compare.
- ​**atol** (`SIMD[type, 1]`): The absolute tolerance.
- ​**rtol** (`SIMD[type, 1]`): The relative tolerance.

**Returns:**

A boolean vector where a and b are equal within the specified tolerance.

## `all_true`[​](https://docs.modular.com/mojo/stdlib/math/math#all_true "Direct link to all_true")

`all_true[simd_width: Int](val: SIMD[bool, simd_width]) -> Bool`

Returns True if all elements in the SIMD vector are True and False otherwise.

**Parameters:**

- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**val** (`SIMD[bool, simd_width]`): The SIMD vector to reduce.

**Returns:**

True if all values in the SIMD vector are True and False otherwise.

## `any_true`[​](https://docs.modular.com/mojo/stdlib/math/math#any_true "Direct link to any_true")

`any_true[simd_width: Int](val: SIMD[bool, simd_width]) -> Bool`

Returns True if any elements in the SIMD vector is True and False otherwise.

**Parameters:**

- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**val** (`SIMD[bool, simd_width]`): The SIMD vector to reduce.

**Returns:**

True if any values in the SIMD vector is True and False otherwise.

## `none_true`[​](https://docs.modular.com/mojo/stdlib/math/math#none_true "Direct link to none_true")

`none_true[simd_width: Int](val: SIMD[bool, simd_width]) -> Bool`

Returns True if all element in the SIMD vector are False and False otherwise.

**Parameters:**

- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**val** (`SIMD[bool, simd_width]`): The SIMD vector to reduce.

**Returns:**

True if all values in the SIMD vector are False and False otherwise.

## `reduce_bit_count`[​](https://docs.modular.com/mojo/stdlib/math/math#reduce_bit_count "Direct link to reduce_bit_count")

`reduce_bit_count[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> Int`

Returns a scalar containing total number of bits set in given vector.

**Constraints:**

The input must be either integral or boolean type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The SIMD vector to reduce.

**Returns:**

Count of set bits across all elements of the vector.

## `iota`[​](https://docs.modular.com/mojo/stdlib/math/math#iota "Direct link to iota")

`iota[type: DType, simd_width: Int]() -> SIMD[type, simd_width]`

Creates a SIMD vector containing an increasing sequence, starting from 0.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Returns:**

An increasing sequence of values, starting from 0.

`iota[type: DType, simd_width: Int](offset: SIMD[type, 1]) -> SIMD[type, simd_width]`

Creates a SIMD vector containing an increasing sequence, starting from offset.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**offset** (`SIMD[type, 1]`): The value to start the sequence at. Default is zero.

**Returns:**

An increasing sequence of values, starting from offset.

`iota[type: DType](buff: DTypePointer[type, 0], len: Int, offset: Int)`

Fill the buffer with numbers ranging from offset to offset + len - 1, spaced by 1.

The function doesn't return anything, the buffer is updated inplace.

**Parameters:**

- ​**type** (`DType`): DType of the underlying data.

**Args:**

- ​**buff** (`DTypePointer[type, 0]`): The buffer to fill.
- ​**len** (`Int`): The length of the buffer to fill.
- ​**offset** (`Int`): The value to fill at index 0.

`iota[type: DType](v: List[SIMD[type, 1]], offset: Int)`

Fill the vector with numbers ranging from offset to offset + len - 1, spaced by 1.

The function doesn't return anything, the vector is updated inplace.

**Parameters:**

- ​**type** (`DType`): DType of the underlying data.

**Args:**

- ​**v** (`List[SIMD[type, 1]]`): The vector to fill.
- ​**offset** (`Int`): The value to fill at index 0.

`iota(v: List[Int], offset: Int)`

Fill the vector with numbers ranging from offset to offset + len - 1, spaced by 1.

The function doesn't return anything, the vector is updated inplace.

**Args:**

- ​**v** (`List[Int]`): The vector to fill.
- ​**offset** (`Int`): The value to fill at index 0.

## `is_power_of_2`[​](https://docs.modular.com/mojo/stdlib/math/math#is_power_of_2 "Direct link to is_power_of_2")

`is_power_of_2[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise check of whether SIMD vector contains integer powers of two.

An element of the result SIMD vector will be True if the value is an integer power of two, and False otherwise.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The SIMD vector to perform is\_power\_of\_2 on.

**Returns:**

A SIMD vector containing True if the corresponding element in val is a power of two, otherwise False.

`is_power_of_2(val: Int) -> Bool`

Checks whether an integer is a power of two.

**Args:**

- ​**val** (`Int`): The integer to check.

**Returns:**

True if val is a power of two, otherwise False.

## `is_odd`[​](https://docs.modular.com/mojo/stdlib/math/math#is_odd "Direct link to is_odd")

`is_odd(val: Int) -> Bool`

Performs elementwise check of whether an integer value is odd.

**Args:**

- ​**val** (`Int`): The int value to check.

**Returns:**

True if the input is odd and False otherwise.

`is_odd[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise check of whether SIMD vector contains odd values.

An element of the result SIMD vector will be True if the value is odd, and False otherwise.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The SIMD vector to check.

**Returns:**

A SIMD vector containing True if the corresponding element in val is odd, otherwise False.

## `is_even`[​](https://docs.modular.com/mojo/stdlib/math/math#is_even "Direct link to is_even")

`is_even(val: Int) -> Bool`

Performs elementwise check of whether an integer value is even.

**Args:**

- ​**val** (`Int`): The int value to check.

**Returns:**

True if the input is even and False otherwise.

`is_even[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise check of whether SIMD vector contains even values.

An element of the result SIMD vector will be True if the value is even, and False otherwise.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The SIMD vector to check.

**Returns:**

A SIMD vector containing True if the corresponding element in val is even, otherwise False.

## `fma`[​](https://docs.modular.com/mojo/stdlib/math/math#fma "Direct link to fma")

`fma(a: Int, b: Int, c: Int) -> Int`

Performs `fma` (fused multiply-add) on the inputs.

The result is `(a * b) + c`.

**Args:**

- ​**a** (`Int`): The first input.
- ​**b** (`Int`): The second input.
- ​**c** (`Int`): The third input.

**Returns:**

`(a * b) + c`.

`fma[type: DType, simd_width: Int](a: SIMD[type, simd_width], b: SIMD[type, simd_width], c: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise `fma` (fused multiply-add) on the inputs.

Each element in the result SIMD vector is (Ai∗Bi)+Ci(A\_i \* B\_i) + C\_i(Ai​∗Bi​)+Ci​, where AiA\_iAi​, BiB\_iBi​ and CiC\_iCi​ are elements at index iii in a, b, and c respectively.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**a** (`SIMD[type, simd_width]`): The first vector of inputs.
- ​**b** (`SIMD[type, simd_width]`): The second vector of inputs.
- ​**c** (`SIMD[type, simd_width]`): The third vector of inputs.

**Returns:**

Elementwise `fma` of a, b and c.

## `reciprocal`[​](https://docs.modular.com/mojo/stdlib/math/math#reciprocal "Direct link to reciprocal")

`reciprocal[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Takes the elementwise reciprocal of a SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): The SIMD vector to perform elementwise reciprocal on.

**Returns:**

A SIMD vector the elementwise reciprocal of x.

## `identity`[​](https://docs.modular.com/mojo/stdlib/math/math#identity "Direct link to identity")

`identity[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Gets the identity of a SIMD vector.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): The SIMD vector to take identity of.

**Returns:**

Identity of x, which is x.

## `greater`[​](https://docs.modular.com/mojo/stdlib/math/math#greater "Direct link to greater")

`greater[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise check of whether values in x are greater than values in y.

An element of the result SIMD vector will be True if the corresponding element in x is greater than the corresponding element in y, and False otherwise.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): First SIMD vector to compare.
- ​**y** (`SIMD[type, simd_width]`): Second SIMD vector to compare.

**Returns:**

A SIMD vector containing True if the corresponding element in x is greater than the corresponding element in y, otherwise False.

## `greater_equal`[​](https://docs.modular.com/mojo/stdlib/math/math#greater_equal "Direct link to greater_equal")

`greater_equal[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise check of whether values in x are greater than or equal to values in y.

An element of the result SIMD vector will be True if the corresponding element in x is greater than or equal to the corresponding element in y, and False otherwise.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): First SIMD vector to compare.
- ​**y** (`SIMD[type, simd_width]`): Second SIMD vector to compare.

**Returns:**

A SIMD vector containing True if the corresponding element in x is greater than or equal to the corresponding element in y, otherwise False.

## `less`[​](https://docs.modular.com/mojo/stdlib/math/math#less "Direct link to less")

`less[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise check of whether values in x are less than values in y.

An element of the result SIMD vector will be True if the corresponding element in x is less than the corresponding element in y, and False otherwise.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): First SIMD vector to compare.
- ​**y** (`SIMD[type, simd_width]`): Second SIMD vector to compare.

**Returns:**

A SIMD vector containing True if the corresponding element in x is less than the corresponding element in y, otherwise False.

## `less_equal`[​](https://docs.modular.com/mojo/stdlib/math/math#less_equal "Direct link to less_equal")

`less_equal[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise check of whether values in x are less than or equal to values in y.

An element of the result SIMD vector will be True if the corresponding element in x is less than or equal to the corresponding element in y, and False otherwise.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): First SIMD vector to compare.
- ​**y** (`SIMD[type, simd_width]`): Second SIMD vector to compare.

**Returns:**

A SIMD vector containing True if the corresponding element in x is less than or equal to the corresponding element in y, otherwise False.

## `equal`[​](https://docs.modular.com/mojo/stdlib/math/math#equal "Direct link to equal")

`equal[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise check of whether values in x are equal to values in y.

An element of the result SIMD vector will be True if the corresponding element in x is equal to the corresponding element in y, and False otherwise.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): First SIMD vector to compare.
- ​**y** (`SIMD[type, simd_width]`): Second SIMD vector to compare.

**Returns:**

A SIMD vector containing True if the corresponding element in x is equal to the corresponding element in y, otherwise False.

## `logical_and`[​](https://docs.modular.com/mojo/stdlib/math/math#logical_and "Direct link to logical_and")

`logical_and[simd_width: Int](x: SIMD[bool, simd_width], y: SIMD[bool, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise logical And operation.

An element of the result SIMD vector will be True if the corresponding elements in x and y are both True, and False otherwise.

**Parameters:**

- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[bool, simd_width]`): First SIMD vector to perform the And operation.
- ​**y** (`SIMD[bool, simd_width]`): Second SIMD vector to perform the And operation.

**Returns:**

A SIMD vector containing True if the corresponding elements in x and y are both True, otherwise False.

## `logical_not`[​](https://docs.modular.com/mojo/stdlib/math/math#logical_not "Direct link to logical_not")

`logical_not[simd_width: Int](x: SIMD[bool, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise logical Not operation.

An element of the result SIMD vector will be True if the corresponding element in x is True, and False otherwise.

**Parameters:**

- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[bool, simd_width]`): SIMD vector to perform the Not operation.

**Returns:**

A SIMD vector containing True if the corresponding element in x is True, otherwise False.

## `logical_xor`[​](https://docs.modular.com/mojo/stdlib/math/math#logical_xor "Direct link to logical_xor")

`logical_xor[simd_width: Int](x: SIMD[bool, simd_width], y: SIMD[bool, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise logical Xor operation.

An element of the result SIMD vector will be True if only one of the corresponding elements in x and y is True, and False otherwise.

**Parameters:**

- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[bool, simd_width]`): First SIMD vector to perform the Xor operation.
- ​**y** (`SIMD[bool, simd_width]`): Second SIMD vector to perform the Xor operation.

**Returns:**

A SIMD vector containing True if only one of the corresponding elements in x and y is True, otherwise False.

## `not_equal`[​](https://docs.modular.com/mojo/stdlib/math/math#not_equal "Direct link to not_equal")

`not_equal[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Performs elementwise check of whether values in x are not equal to values in y.

An element of the result SIMD vector will be True if the corresponding element in x is not equal to the corresponding element in y, and False otherwise.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): First SIMD vector to compare.
- ​**y** (`SIMD[type, simd_width]`): Second SIMD vector to compare.

**Returns:**

A SIMD vector containing True if the corresponding element in x is not equal to the corresponding element in y, otherwise False.

## `select`[​](https://docs.modular.com/mojo/stdlib/math/math#select "Direct link to select")

`select[type: DType, simd_width: Int](cond: SIMD[bool, simd_width], true_case: SIMD[type, simd_width], false_case: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Selects the values of the true\_case or the false\_case based on the input boolean values of the given SIMD vector.

**Parameters:**

- ​**type** (`DType`): The element type of the input and output SIMD vectors.
- ​**simd\_width** (`Int`): Width of the SIMD vectors we are comparing.

**Args:**

- ​**cond** (`SIMD[bool, simd_width]`): The vector of bools to check.
- ​**true\_case** (`SIMD[type, simd_width]`): The values selected if the positional value is True.
- ​**false\_case** (`SIMD[type, simd_width]`): The values selected if the positional value is False.

**Returns:**

A new vector of the form `[true_case[i] if cond[i] else false_case[i] in enumerate(self)]`.

## `max`[​](https://docs.modular.com/mojo/stdlib/math/math#max "Direct link to max")

`max(x: Int, y: Int) -> Int`

Gets the maximum of two integers.

**Args:**

- ​**x** (`Int`): Integer input to max.
- ​**y** (`Int`): Integer input to max.

**Returns:**

Maximum of x and y.

`max[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Performs elementwise maximum of x and y.

An element of the result SIMD vector will be the maximum of the corresponding elements in x and y.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): First SIMD vector.
- ​**y** (`SIMD[type, simd_width]`): Second SIMD vector.

**Returns:**

A SIMD vector containing the elementwise maximum of x and y.

## `min`[​](https://docs.modular.com/mojo/stdlib/math/math#min "Direct link to min")

`min(x: Int, y: Int) -> Int`

Gets the minimum of two integers.

**Args:**

- ​**x** (`Int`): Integer input to max.
- ​**y** (`Int`): Integer input to max.

**Returns:**

Minimum of x and y.

`min[type: DType, simd_width: Int](x: SIMD[type, simd_width], y: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Gets the elementwise minimum of x and y.

An element of the result SIMD vector will be the minimum of the corresponding elements in x and y.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): First SIMD vector.
- ​**y** (`SIMD[type, simd_width]`): Second SIMD vector.

**Returns:**

A SIMD vector containing the elementwise minimum of x and y.

## `pow`[​](https://docs.modular.com/mojo/stdlib/math/math#pow "Direct link to pow")

`pow[type: DType, simd_width: Int](lhs: SIMD[type, simd_width], rhs: Int) -> SIMD[type, simd_width]`

Computes the `pow` of the inputs.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**lhs** (`SIMD[type, simd_width]`): The first input argument.
- ​**rhs** (`Int`): The second input argument.

**Returns:**

The `pow` of the inputs.

`pow[lhs_type: DType, rhs_type: DType, simd_width: Int](lhs: SIMD[lhs_type, simd_width], rhs: SIMD[rhs_type, simd_width]) -> SIMD[lhs_type, simd_width]`

Computes elementwise power of a floating point type raised to another floating point type.

An element of the result SIMD vector will be the result of raising the corresponding element of lhs to the corresponding element of rhs.

**Constraints:**

`rhs_type` and `lhs_type` must be the same, and must be floating point types.

**Parameters:**

- ​**lhs\_type** (`DType`): The `dtype` of the lhs SIMD vector.
- ​**rhs\_type** (`DType`): The `dtype` of the rhs SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vectors.

**Args:**

- ​**lhs** (`SIMD[lhs_type, simd_width]`): Base of the power operation.
- ​**rhs** (`SIMD[rhs_type, simd_width]`): Exponent of the power operation.

**Returns:**

A SIMD vector containing elementwise lhs raised to the power of rhs.

`pow[n: Int, type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the elementwise power where the exponent is an integer known at compile time.

**Constraints:**

`n` must be a signed `si32` type.

**Parameters:**

- ​**n** (`Int`): Exponent of the power operation.
- ​**type** (`DType`): The `dtype` of the x SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vectors.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): Base of the power operation.

**Returns:**

A SIMD vector containing elementwise x raised to the power of n.

## `div_ceil`[​](https://docs.modular.com/mojo/stdlib/math/math#div_ceil "Direct link to div_ceil")

`div_ceil(numerator: Int, denominator: Int) -> Int`

Divides an integer by another integer, and round up to the nearest integer.

**Constraints:**

Will raise an exception if denominator is zero.

**Args:**

- ​**numerator** (`Int`): The numerator.
- ​**denominator** (`Int`): The denominator.

**Returns:**

The ceiling of numerator divided by denominator.

## `align_down`[​](https://docs.modular.com/mojo/stdlib/math/math#align_down "Direct link to align_down")

`align_down(value: Int, alignment: Int) -> Int`

Returns the closest multiple of alignment that is less than or equal to value.

**Constraints:**

Will raise an exception if the alignment is zero.

**Args:**

- ​**value** (`Int`): The value to align.
- ​**alignment** (`Int`): Value to align to.

**Returns:**

Closest multiple of the alignment that is less than or equal to the input value. In other words, floor(value / alignment) \* alignment.

## `align_down_residual`[​](https://docs.modular.com/mojo/stdlib/math/math#align_down_residual "Direct link to align_down_residual")

`align_down_residual(value: Int, alignment: Int) -> Int`

Returns the remainder after aligning down value to alignment.

**Constraints:**

Will raise an exception if the alignment is zero.

**Args:**

- ​**value** (`Int`): The value to align.
- ​**alignment** (`Int`): Value to align to.

**Returns:**

The remainder after aligning down value to the closest multiple of alignment. In other words, value - align\_down(value, alignment).

## `align_up`[​](https://docs.modular.com/mojo/stdlib/math/math#align_up "Direct link to align_up")

`align_up(value: Int, alignment: Int) -> Int`

Returns the closest multiple of alignment that is greater than or equal to value.

**Constraints:**

Will raise an exception if the alignment is zero.

**Args:**

- ​**value** (`Int`): The value to align.
- ​**alignment** (`Int`): Value to align to.

**Returns:**

Closest multiple of the alignment that is greater than or equal to the input value. In other words, ceiling(value / alignment) \* alignment.

## `acos`[​](https://docs.modular.com/mojo/stdlib/math/math#acos "Direct link to acos")

`acos[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `acos` of the inputs.

**Constraints:**

The input must be a floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `acos` of the input.

## `asin`[​](https://docs.modular.com/mojo/stdlib/math/math#asin "Direct link to asin")

`asin[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `asin` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `asin` of the input.

## `atan`[​](https://docs.modular.com/mojo/stdlib/math/math#atan "Direct link to atan")

`atan[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `atan` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `atan` of the input.

## `atan2`[​](https://docs.modular.com/mojo/stdlib/math/math#atan2 "Direct link to atan2")

`atan2[type: DType, simd_width: Int](arg0: SIMD[type, simd_width], arg1: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `atan2` of the inputs.

**Constraints:**

The inputs must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg0** (`SIMD[type, simd_width]`): The first input argument.
- ​**arg1** (`SIMD[type, simd_width]`): The second input argument.

**Returns:**

The `atan2` of the inputs.

## `cos`[​](https://docs.modular.com/mojo/stdlib/math/math#cos "Direct link to cos")

`cos[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `cos` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `cos` of the input.

## `sin`[​](https://docs.modular.com/mojo/stdlib/math/math#sin "Direct link to sin")

`sin[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `sin` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `sin` of the input.

## `tan`[​](https://docs.modular.com/mojo/stdlib/math/math#tan "Direct link to tan")

`tan[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `tan` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `tan` of the input.

## `acosh`[​](https://docs.modular.com/mojo/stdlib/math/math#acosh "Direct link to acosh")

`acosh[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `acosh` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `acosh` of the input.

## `asinh`[​](https://docs.modular.com/mojo/stdlib/math/math#asinh "Direct link to asinh")

`asinh[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `asinh` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `asinh` of the input.

## `atanh`[​](https://docs.modular.com/mojo/stdlib/math/math#atanh "Direct link to atanh")

`atanh[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `atanh` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `atanh` of the input.

## `cosh`[​](https://docs.modular.com/mojo/stdlib/math/math#cosh "Direct link to cosh")

`cosh[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `cosh` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `cosh` of the input.

## `sinh`[​](https://docs.modular.com/mojo/stdlib/math/math#sinh "Direct link to sinh")

`sinh[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `sinh` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `sinh` of the input.

## `expm1`[​](https://docs.modular.com/mojo/stdlib/math/math#expm1 "Direct link to expm1")

`expm1[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `expm1` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `expm1` of the input.

## `log10`[​](https://docs.modular.com/mojo/stdlib/math/math#log10 "Direct link to log10")

`log10[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `log10` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `log10` of the input.

## `log1p`[​](https://docs.modular.com/mojo/stdlib/math/math#log1p "Direct link to log1p")

`log1p[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `log1p` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `log1p` of the input.

## `logb`[​](https://docs.modular.com/mojo/stdlib/math/math#logb "Direct link to logb")

`logb[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `logb` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `logb` of the input.

## `cbrt`[​](https://docs.modular.com/mojo/stdlib/math/math#cbrt "Direct link to cbrt")

`cbrt[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `cbrt` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `cbrt` of the input.

## `hypot`[​](https://docs.modular.com/mojo/stdlib/math/math#hypot "Direct link to hypot")

`hypot[type: DType, simd_width: Int](arg0: SIMD[type, simd_width], arg1: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `hypot` of the inputs.

**Constraints:**

The inputs must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg0** (`SIMD[type, simd_width]`): The first input argument.
- ​**arg1** (`SIMD[type, simd_width]`): The second input argument.

**Returns:**

The `hypot` of the inputs.

## `erfc`[​](https://docs.modular.com/mojo/stdlib/math/math#erfc "Direct link to erfc")

`erfc[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `erfc` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `erfc` of the input.

## `lgamma`[​](https://docs.modular.com/mojo/stdlib/math/math#lgamma "Direct link to lgamma")

`lgamma[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `lgamma` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `lgamma` of the input.

## `tgamma`[​](https://docs.modular.com/mojo/stdlib/math/math#tgamma "Direct link to tgamma")

`tgamma[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `tgamma` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `tgamma` of the input.

## `nearbyint`[​](https://docs.modular.com/mojo/stdlib/math/math#nearbyint "Direct link to nearbyint")

`nearbyint[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `nearbyint` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `nearbyint` of the input.

## `rint`[​](https://docs.modular.com/mojo/stdlib/math/math#rint "Direct link to rint")

`rint[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `rint` of the inputs.

**Constraints:**

The input must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input argument.

**Returns:**

The `rint` of the input.

## `remainder`[​](https://docs.modular.com/mojo/stdlib/math/math#remainder "Direct link to remainder")

`remainder[type: DType, simd_width: Int](arg0: SIMD[type, simd_width], arg1: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `remainder` of the inputs.

**Constraints:**

The inputs must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg0** (`SIMD[type, simd_width]`): The first input argument.
- ​**arg1** (`SIMD[type, simd_width]`): The second input argument.

**Returns:**

The `remainder` of the inputs.

## `nextafter`[​](https://docs.modular.com/mojo/stdlib/math/math#nextafter "Direct link to nextafter")

`nextafter[type: DType, simd_width: Int](arg0: SIMD[type, simd_width], arg1: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `nextafter` of the inputs.

**Constraints:**

The inputs must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg0** (`SIMD[type, simd_width]`): The first input argument.
- ​**arg1** (`SIMD[type, simd_width]`): The second input argument.

**Returns:**

The `nextafter` of the inputs.

## `j0`[​](https://docs.modular.com/mojo/stdlib/math/math#j0 "Direct link to j0")

`j0[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the Bessel function of the first kind of order 0 for each input value.

**Constraints:**

The input vector must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input vector.

**Returns:**

A vector containing the computed value for each value in the input vector.

## `j1`[​](https://docs.modular.com/mojo/stdlib/math/math#j1 "Direct link to j1")

`j1[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the Bessel function of the first kind of order 1 for each input value.

**Constraints:**

The input vector must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input vector.

**Returns:**

A vector containing the computed value for each value in the input vector.

## `y0`[​](https://docs.modular.com/mojo/stdlib/math/math#y0 "Direct link to y0")

`y0[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the Bessel function of the second kind of order 0 for each input value.

**Constraints:**

The input vector must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input vector.

**Returns:**

A vector containing the computed value for each value in the input vector.

## `y1`[​](https://docs.modular.com/mojo/stdlib/math/math#y1 "Direct link to y1")

`y1[type: DType, simd_width: Int](arg: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the Bessel function of the second kind of order 1 for each input value.

**Constraints:**

The input vector must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg** (`SIMD[type, simd_width]`): The input vector.

**Returns:**

A vector containing the computed value for each value in the input vector.

## `scalb`[​](https://docs.modular.com/mojo/stdlib/math/math#scalb "Direct link to scalb")

`scalb[type: DType, simd_width: Int](arg0: SIMD[type, simd_width], arg1: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the `scalb` of the inputs.

**Constraints:**

The inputs must be of floating point type.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**arg0** (`SIMD[type, simd_width]`): The first input argument.
- ​**arg1** (`SIMD[type, simd_width]`): The second input argument.

**Returns:**

The `scalb` of the inputs.

## `gcd`[​](https://docs.modular.com/mojo/stdlib/math/math#gcd "Direct link to gcd")

`gcd(a: Int, b: Int) -> Int`

Computes the greatest common divisor of two integers.

**Constraints:**

The inputs must be non-negative integers.

**Args:**

- ​**a** (`Int`): The first input argument.
- ​**b** (`Int`): The second input argument.

**Returns:**

The `gcd` of the inputs.

## `lcm`[​](https://docs.modular.com/mojo/stdlib/math/math#lcm "Direct link to lcm")

`lcm(a: Int, b: Int) -> Int`

Computes the least common multiple of two integers.

**Constraints:**

The inputs must be non-negative integers.

**Args:**

- ​**a** (`Int`): The first input argument.
- ​**b** (`Int`): The second input argument.

**Returns:**

The least common multiple of the inputs.

## `factorial`[​](https://docs.modular.com/mojo/stdlib/math/math#factorial "Direct link to factorial")

`factorial(n: Int) -> Int`

Computes the factorial of the integer.

**Args:**

- ​**n** (`Int`): The input value.

**Returns:**

The factorial of the input.

## `nan`[​](https://docs.modular.com/mojo/stdlib/math/math#nan "Direct link to nan")

`nan[type: DType]() -> SIMD[type, 1]`

Gets a NaN value for the given dtype.

**Constraints:**

Can only be used for FP dtypes.

**Parameters:**

- ​**type** (`DType`): The value dtype.

**Returns:**

The NaN value of the given dtype.

## `isnan`[​](https://docs.modular.com/mojo/stdlib/math/math#isnan "Direct link to isnan")

`isnan[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Checks if the value is Not a Number (NaN).

**Parameters:**

- ​**type** (`DType`): The value dtype.
- ​**simd\_width** (`Int`): The width of the SIMD vector.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The value to check.

**Returns:**

True if val is NaN and False otherwise.

## `isinf`[​](https://docs.modular.com/mojo/stdlib/math/math#isinf "Direct link to isinf")

`isinf[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Checks if the value is infinite.

This is always False for non-FP data types.

**Parameters:**

- ​**type** (`DType`): The value dtype.
- ​**simd\_width** (`Int`): The width of the SIMD vector.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The value to check.

**Returns:**

True if val is infinite and False otherwise.

## `isfinite`[​](https://docs.modular.com/mojo/stdlib/math/math#isfinite "Direct link to isfinite")

`isfinite[type: DType, simd_width: Int](val: SIMD[type, simd_width]) -> SIMD[bool, simd_width]`

Checks if the value is not infinite.

This is always True for non-FP data types.

**Parameters:**

- ​**type** (`DType`): The value dtype.
- ​**simd\_width** (`Int`): The width of the SIMD vector.

**Args:**

- ​**val** (`SIMD[type, simd_width]`): The value to check.

**Returns:**

True if val is finite and False otherwise.

## `divmod`[​](https://docs.modular.com/mojo/stdlib/math/math#divmod "Direct link to divmod")

`divmod(lhs: Int, rhs: Int) -> StaticIntTuple[2]`

Computes both the quotient and remainder using integer division.

**Args:**

- ​**lhs** (`Int`): The value of the left hand side.
- ​**rhs** (`Int`): The value of the right hand side.

**Returns:**

The quotient and remainder as a tuple `(lhs // rhs, lhs % rhs)`.

## `ulp`[​](https://docs.modular.com/mojo/stdlib/math/math#ulp "Direct link to ulp")

`ulp[type: DType, simd_width: Int](x: SIMD[type, simd_width]) -> SIMD[type, simd_width]`

Computes the ULP (units of last place) or (units of least precision) of the number.

**Parameters:**

- ​**type** (`DType`): The `dtype` of the input and output SIMD vector.
- ​**simd\_width** (`Int`): The width of the input and output SIMD vector.

**Args:**

- ​**x** (`SIMD[type, simd_width]`): SIMD vector input.

**Returns:**

The ULP of x.