# complex

Implements the Complex type.

You can import these APIs from the `complex` package. For example:

```
from complex import ComplexSIMD
```

**Aliases:**

- ​`ComplexFloat32 = ComplexSIMD[f32, 1]`

- ​`ComplexFloat64 = ComplexSIMD[f64, 1]`

## `ComplexSIMD`[​](https://docs.modular.com/mojo/stdlib/complex/complex#complexsimd "Direct link to complexsimd")

Represents a complex SIMD value.

The class provides basic methods for manipulating complex values.

**Parameters:**

- ​**type** (`DType`): DType of the value.
- ​**size** (`Int`): SIMD width of the value.

**Fields:**

- ​**re** (`SIMD[type, size]`): The real part of the complex SIMD value.

- ​**im** (`SIMD[type, size]`): The imaginary part of the complex SIMD value.

**Implemented traits:**

`AnyType`, `Copyable`, `Movable`, `Stringable`

**Methods:**

### `__neg__`[​](https://docs.modular.com/mojo/stdlib/complex/complex#__neg__ "Direct link to __neg__")

`__neg__(self: Self) -> Self`

Negates the complex value.

**Returns:**

The negative of the complex value.

### `__add__`[​](https://docs.modular.com/mojo/stdlib/complex/complex#__add__ "Direct link to __add__")

`__add__(self: Self, rhs: Self) -> Self`

Adds two complex values.

**Args:**

- ​**rhs** (`Self`): Complex value to add.

**Returns:**

A sum of this and RHS complex values.

### `__mul__`[​](https://docs.modular.com/mojo/stdlib/complex/complex#__mul__ "Direct link to __mul__")

`__mul__(self: Self, rhs: Self) -> Self`

Multiplies two complex values.

**Args:**

- ​**rhs** (`Self`): Complex value to multiply with.

**Returns:**

A product of this and RHS complex values.

### `__str__`[​](https://docs.modular.com/mojo/stdlib/complex/complex#__str__ "Direct link to __str__")

`__str__(self: Self) -> String`

Get the complex as a string.

**Returns:**

A string representation.

### `norm`[​](https://docs.modular.com/mojo/stdlib/complex/complex#norm "Direct link to norm")

`norm(self: Self) -> SIMD[type, size]`

Returns the magnitude of the complex value.

**Returns:**

Value of `sqrt(re*re + im*im)`.

### `squared_norm`[​](https://docs.modular.com/mojo/stdlib/complex/complex#squared_norm "Direct link to squared_norm")

`squared_norm(self: Self) -> SIMD[type, size]`

Returns the squared magnitude of the complex value.

**Returns:**

Value of `re*re + im*im`.

### `fma`[​](https://docs.modular.com/mojo/stdlib/complex/complex#fma "Direct link to fma")

`fma(self: Self, b: Self, c: Self) -> Self`

Computes FMA operation.

Compute fused multiple-add with two other complex values: `result = self * b + c`

**Args:**

- ​**b** (`Self`): Multiplier complex value.
- ​**c** (`Self`): Complex value to add.

**Returns:**

Computed `Self * B + C` complex value.

### `squared_add`[​](https://docs.modular.com/mojo/stdlib/complex/complex#squared_add "Direct link to squared_add")

`squared_add(self: Self, c: Self) -> Self`

Computes Square-Add operation.

Compute `Self * Self + C`.

**Args:**

- ​**c** (`Self`): Complex value to add.

**Returns:**

Computed `Self * Self + C` complex value.