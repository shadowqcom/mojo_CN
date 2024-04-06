# atomic

Implements the Atomic class.

You can import these APIs from the `os` package. For example:

```
from os.atomic import Atomic
```

## `Atomic`[​](https://docs.modular.com/mojo/stdlib/os/atomic#atomic "Direct link to atomic")

Represents a value with atomic operations.

The class provides atomic `add` and `sub` methods for mutating the value.

**Parameters:**

- ​**type** (`DType`): DType of the value.

**Fields:**

- ​**value** (`SIMD[type, 1]`): The atomic value.

**Implemented traits:**

`AnyType`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/os/atomic#__init__ "Direct link to __init__")

`__init__(inout self: Self, value: SIMD[type, 1])`

Constructs a new atomic value.

**Args:**

- ​**value** (`SIMD[type, 1]`): Initial value represented as `Scalar[type]` type.

`__init__(inout self: Self, value: Int)`

Constructs a new atomic value.

**Args:**

- ​**value** (`Int`): Initial value represented as `mlir.index` type.

### `__iadd__`[​](https://docs.modular.com/mojo/stdlib/os/atomic#__iadd__ "Direct link to __iadd__")

`__iadd__(inout self: Self, rhs: SIMD[type, 1])`

Performs atomic in-place add.

Atomically replaces the current value with the result of arithmetic addition of the value and arg. That is, it performs atomic post-increment. The operation is a read-modify-write operation. Memory is affected according to the value of order which is sequentially consistent.

**Args:**

- ​**rhs** (`SIMD[type, 1]`): Value to add.

### `__isub__`[​](https://docs.modular.com/mojo/stdlib/os/atomic#__isub__ "Direct link to __isub__")

`__isub__(inout self: Self, rhs: SIMD[type, 1])`

Performs atomic in-place sub.

Atomically replaces the current value with the result of arithmetic subtraction of the value and arg. That is, it performs atomic post-decrement. The operation is a read-modify-write operation. Memory is affected according to the value of order which is sequentially consistent.

**Args:**

- ​**rhs** (`SIMD[type, 1]`): Value to subtract.

### `fetch_add`[​](https://docs.modular.com/mojo/stdlib/os/atomic#fetch_add "Direct link to fetch_add")

`fetch_add(inout self: Self, rhs: SIMD[type, 1]) -> SIMD[type, 1]`

Performs atomic in-place add.

Atomically replaces the current value with the result of arithmetic addition of the value and arg. That is, it performs atomic post-increment. The operation is a read-modify-write operation. Memory is affected according to the value of order which is sequentially consistent.

**Args:**

- ​**rhs** (`SIMD[type, 1]`): Value to add.

**Returns:**

The original value before addition.

### `fetch_sub`[​](https://docs.modular.com/mojo/stdlib/os/atomic#fetch_sub "Direct link to fetch_sub")

`fetch_sub(inout self: Self, rhs: SIMD[type, 1]) -> SIMD[type, 1]`

Performs atomic in-place sub.

Atomically replaces the current value with the result of arithmetic subtraction of the value and arg. That is, it performs atomic post-decrement. The operation is a read-modify-write operation. Memory is affected according to the value of order which is sequentially consistent.

**Args:**

- ​**rhs** (`SIMD[type, 1]`): Value to subtract.

**Returns:**

The original value before subtraction.

### `max`[​](https://docs.modular.com/mojo/stdlib/os/atomic#max "Direct link to max")

`max(inout self: Self, rhs: SIMD[type, 1])`

Performs atomic in-place max.

Atomically replaces the current value with the result of max of the value and arg. The operation is a read-modify-write operation perform according to sequential consistency semantics.

**Constraints:**

The input type must be either integral or floating-point type.

**Args:**

- ​**rhs** (`SIMD[type, 1]`): Value to max.

### `min`[​](https://docs.modular.com/mojo/stdlib/os/atomic#min "Direct link to min")

`min(inout self: Self, rhs: SIMD[type, 1])`

Performs atomic in-place min.

Atomically replaces the current value with the result of min of the value and arg. The operation is a read-modify-write operation. The operation is a read-modify-write operation perform according to sequential consistency semantics.

**Constraints:**

The input type must be either integral or floating-point type.

**Args:**

- ​**rhs** (`SIMD[type, 1]`): Value to min.

[

Previous

](https://docs.modular.com/mojo/stdlib/os/)