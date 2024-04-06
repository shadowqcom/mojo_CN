# random

Provides functions for random numbers.

You can import these APIs from the `random` package. For example:

```
from random import seed
```

## `seed`[​](https://docs.modular.com/mojo/stdlib/random/random#seed "Direct link to seed")

`seed()`

Seeds the random number generator using the current time.

`seed(a: Int)`

Seeds the random number generator using the value provided.

**Args:**

- ​**a** (`Int`): The seed value.

## `random_float64`[​](https://docs.modular.com/mojo/stdlib/random/random#random_float64 "Direct link to random_float64")

`random_float64(min: SIMD[f64, 1], max: SIMD[f64, 1]) -> SIMD[f64, 1]`

Returns a random `Float64` number from the given range.

**Args:**

- ​**min** (`SIMD[f64, 1]`): The minimum number in the range (default is 0.0).
- ​**max** (`SIMD[f64, 1]`): The maximum number in the range (default is 1.0).

**Returns:**

A random number from the specified range.

## `random_si64`[​](https://docs.modular.com/mojo/stdlib/random/random#random_si64 "Direct link to random_si64")

`random_si64(min: SIMD[si64, 1], max: SIMD[si64, 1]) -> SIMD[si64, 1]`

Returns a random `Int64` number from the given range.

**Args:**

- ​**min** (`SIMD[si64, 1]`): The minimum number in the range.
- ​**max** (`SIMD[si64, 1]`): The maximum number in the range.

**Returns:**

A random number from the specified range.

## `random_ui64`[​](https://docs.modular.com/mojo/stdlib/random/random#random_ui64 "Direct link to random_ui64")

`random_ui64(min: SIMD[ui64, 1], max: SIMD[ui64, 1]) -> SIMD[ui64, 1]`

Returns a random `UInt64` number from the given range.

**Args:**

- ​**min** (`SIMD[ui64, 1]`): The minimum number in the range.
- ​**max** (`SIMD[ui64, 1]`): The maximum number in the range.

**Returns:**

A random number from the specified range.

## `randint`[​](https://docs.modular.com/mojo/stdlib/random/random#randint "Direct link to randint")

`randint[type: DType](ptr: DTypePointer[type, 0], size: Int, low: Int, high: Int)`

Fills memory with uniform random in range \[low, high\].

**Constraints:**

The type should be integral.

**Parameters:**

- ​**type** (`DType`): The dtype of the pointer.

**Args:**

- ​**ptr** (`DTypePointer[type, 0]`): The pointer to the memory area to fill.
- ​**size** (`Int`): The number of elements to fill.
- ​**low** (`Int`): The minimal value for random.
- ​**high** (`Int`): The maximal value for random.

## `rand`[​](https://docs.modular.com/mojo/stdlib/random/random#rand "Direct link to rand")

`rand[type: DType](ptr: DTypePointer[type, 0], size: Int)`

Fills memory with random values from a uniform distribution.

**Parameters:**

- ​**type** (`DType`): The dtype of the pointer.

**Args:**

- ​**ptr** (`DTypePointer[type, 0]`): The pointer to the memory area to fill.
- ​**size** (`Int`): The number of elements to fill.

## `randn_float64`[​](https://docs.modular.com/mojo/stdlib/random/random#randn_float64 "Direct link to randn_float64")

`randn_float64(mean: SIMD[f64, 1], variance: SIMD[f64, 1]) -> SIMD[f64, 1]`

Returns a random double sampled from Normal(mean, variance) distribution.

**Args:**

- ​**mean** (`SIMD[f64, 1]`): Normal distribution mean.
- ​**variance** (`SIMD[f64, 1]`): Normal distribution variance.

**Returns:**

A random float64 sampled from Normal(mean, variance).

## `randn`[​](https://docs.modular.com/mojo/stdlib/random/random#randn "Direct link to randn")

`randn[type: DType](ptr: DTypePointer[type, 0], size: Int, mean: SIMD[f64, 1], variance: SIMD[f64, 1])`

Fills memory with random values from a Normal(mean, variance) distribution.

**Constraints:**

The type should be floating point.

**Parameters:**

- ​**type** (`DType`): The dtype of the pointer.

**Args:**

- ​**ptr** (`DTypePointer[type, 0]`): The pointer to the memory area to fill.
- ​**size** (`Int`): The number of elements to fill.
- ​**mean** (`SIMD[f64, 1]`): Normal distribution mean.
- ​**variance** (`SIMD[f64, 1]`): Normal distribution variance.