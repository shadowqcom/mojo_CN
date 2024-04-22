# polynomial

Provides two implementations for evaluating polynomials.

You can import these APIs from the `math` package. For example:

```
from math.polynomial import polynomial_evaluate
```

## `EvaluationMethod`

The evaluation method used to evaluate the polynomial.

**Aliases:**

- ​`HORNER = 0`: Evaluate the polynomial using Horner's method.

- ​`ESTRIN = 1`: Evaluate the polynomial using Estrin's method.

**Implemented traits:**

`AnyType`, `Copyable`, `EqualityComparable`, `Movable`

**Methods:**

### `__eq__`

`__eq__(self: Self, other: Self) -> Bool`

Checks if the two methods are equal.

**Args:**

- ​**other** (`Self`): The other method.

**Returns:**

True if both methods are the same and False otherwise.

### `__ne__`

`__ne__(self: Self, other: Self) -> Bool`

Checks if the two methods are not equal.

**Args:**

- ​**other** (`Self`): The other method.

**Returns:**

True if both methods are the different and False otherwise.

## `polynomial_evaluate`

`polynomial_evaluate[dtype: DType, simd_width: Int, coefficients: List[SIMD[dtype, simd_width]], method: EvaluationMethod](x: SIMD[dtype, simd_width]) -> SIMD[dtype, simd_width]`

Evaluates the polynomial.

**Parameters:**

- ​**dtype** (`DType`): The dtype of the value.
- ​**simd\_width** (`Int`): The simd\_width of the computed value.
- ​**coefficients** (`List[SIMD[dtype, simd_width]]`): The coefficients.
- ​**method** (`EvaluationMethod`): The evaluation method used.

**Args:**

- ​**x** (`SIMD[dtype, simd_width]`): The value to compute the polynomial with.

**Returns:**

The polynomial evaluation results using the specified value and the constant coefficients.