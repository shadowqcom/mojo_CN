# limit

Provides interfaces to query numeric various numeric properties of types.

You can import these APIs from the `math` package. For example:

```
from math.limit import inf
```

## `inf`

`inf[type: DType]() -> SIMD[type, 1]`

Gets a +inf value for the given dtype.

**Constraints:**

Can only be used for FP dtypes.

**Parameters:**

- ​**type** (`DType`): The value dtype.

**Returns:**

The +inf value of the given dtype.

## `neginf`

`neginf[type: DType]() -> SIMD[type, 1]`

Gets a -inf value for the given dtype.

**Constraints:**

Can only be used for FP dtypes.

**Parameters:**

- ​**type** (`DType`): The value dtype.

**Returns:**

The -inf value of the given dtype.

## `max_finite`

`max_finite[type: DType]() -> SIMD[type, 1]`

Returns the maximum finite value of type.

**Parameters:**

- ​**type** (`DType`): The value dtype.

**Returns:**

The maximum representable value of the type. Does not include infinity for floating-point types.

## `min_finite`

`min_finite[type: DType]() -> SIMD[type, 1]`

Returns the minimum (lowest) finite value of type.

**Parameters:**

- ​**type** (`DType`): The value dtype.

**Returns:**

The minimum representable value of the type. Does not include negative infinity for floating-point types.