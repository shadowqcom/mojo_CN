# dtype

Implements the DType class.

These are Mojo built-ins, so you don't need to import them.

## `DType`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#dtype "Direct link to dtype")

Represents DType and provides methods for working with it.

**Aliases:**

- ​`type = dtype`

- ​`invalid = invalid`: Represents an invalid or unknown data type.

- ​`bool = bool`: Represents a boolean data type.

- ​`int8 = si8`: Represents a signed integer type whose bitwidth is 8.

- ​`uint8 = ui8`: Represents an unsigned integer type whose bitwidth is 8.

- ​`int16 = si16`: Represents a signed integer type whose bitwidth is 16.

- ​`uint16 = ui16`: Represents an unsigned integer type whose bitwidth is 16.

- ​`int32 = si32`: Represents a signed integer type whose bitwidth is 32.

- ​`uint32 = ui32`: Represents an unsigned integer type whose bitwidth is 32.

- ​`int64 = si64`: Represents a signed integer type whose bitwidth is 64.

- ​`uint64 = ui64`: Represents an unsigned integer type whose bitwidth is 64.

- ​`bfloat16 = bf16`: Represents a brain floating point value whose bitwidth is 16.

- ​`float16 = f16`: Represents an IEEE754-2008 `binary16` floating point value.

- ​`float32 = f32`: Represents an IEEE754-2008 `binary32` floating point value.

- ​`tensor_float32 = tf32`: Represents a special floating point format supported by NVIDIA Tensor Cores, with the same range as float32 and reduced precision (>=10 bits). Note that this type is only available on NVIDIA GPUs.

- ​`float64 = f64`: Represents an IEEE754-2008 `binary64` floating point value.

- ​`index = index`: Represents an integral type whose bitwidth is the maximum integral value on the system.

- ​`address = address`: Represents a pointer type whose bitwidth is the same as the bitwidth of the hardware's pointer type (32-bit on 32-bit machines and 64-bit on 64-bit machines).

**Fields:**

- ​**value** (`dtype`): The underlying storage for the DType value.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Hashable`, `KeyElement`, `Movable`, `Stringable`

**Methods:**

### `__eq__`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#__eq__ "Direct link to __eq__")

`__eq__(self: Self, rhs: Self) -> Bool`

Compares one DType to another for equality.

**Args:**

- ​**rhs** (`Self`): The DType to compare against.

**Returns:**

True if the DTypes are the same and False otherwise.

### `__ne__`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#__ne__ "Direct link to __ne__")

`__ne__(self: Self, rhs: Self) -> Bool`

Compares one DType to another for non-equality.

**Args:**

- ​**rhs** (`Self`): The DType to compare against.

**Returns:**

False if the DTypes are the same and True otherwise.

### `__str__`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#__str__ "Direct link to __str__")

`__str__(self: Self) -> String`

Gets the name of the DType.

**Returns:**

The name of the dtype.

### `get_value`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#get_value "Direct link to get_value")

`get_value(self: Self) -> dtype`

Gets the associated internal kgen.dtype value.

**Returns:**

The kgen.dtype value.

### `__hash__`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#__hash__ "Direct link to __hash__")

`__hash__(self: Self) -> Int`

### `isa`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#isa "Direct link to isa")

`isa[other: Self](self: Self) -> Bool`

Checks if this DType matches the other one, specified as a parameter.

**Parameters:**

- ​**other** (`Self`): The DType to compare against.

**Returns:**

True if the DTypes are the same and False otherwise.

### `is_bool`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_bool "Direct link to is_bool")

`is_bool(self: Self) -> Bool`

Checks if this DType is Bool.

**Returns:**

True if the DType is Bool and False otherwise.

### `is_uint8`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_uint8 "Direct link to is_uint8")

`is_uint8(self: Self) -> Bool`

Checks if this DType is UInt8.

**Returns:**

True if the DType is UInt8 and False otherwise.

### `is_int8`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_int8 "Direct link to is_int8")

`is_int8(self: Self) -> Bool`

Checks if this DType is Int8.

**Returns:**

True if the DType is Int8 and False otherwise.

### `is_uint16`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_uint16 "Direct link to is_uint16")

`is_uint16(self: Self) -> Bool`

Checks if this DType is UInt16.

**Returns:**

True if the DType is UInt16 and False otherwise.

### `is_int16`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_int16 "Direct link to is_int16")

`is_int16(self: Self) -> Bool`

Checks if this DType is Int16.

**Returns:**

True if the DType is Int16 and False otherwise.

### `is_uint32`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_uint32 "Direct link to is_uint32")

`is_uint32(self: Self) -> Bool`

Checks if this DType is UInt32.

**Returns:**

True if the DType is UInt32 and False otherwise.

### `is_int32`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_int32 "Direct link to is_int32")

`is_int32(self: Self) -> Bool`

Checks if this DType is Int32.

**Returns:**

True if the DType is Int32 and False otherwise.

### `is_uint64`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_uint64 "Direct link to is_uint64")

`is_uint64(self: Self) -> Bool`

Checks if this DType is UInt64.

**Returns:**

True if the DType is UInt64 and False otherwise.

### `is_int64`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_int64 "Direct link to is_int64")

`is_int64(self: Self) -> Bool`

Checks if this DType is Int64.

**Returns:**

True if the DType is Int64 and False otherwise.

### `is_bfloat16`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_bfloat16 "Direct link to is_bfloat16")

`is_bfloat16(self: Self) -> Bool`

Checks if this DType is BFloat16.

**Returns:**

True if the DType is BFloat16 and False otherwise.

### `is_float16`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_float16 "Direct link to is_float16")

`is_float16(self: Self) -> Bool`

Checks if this DType is Float16.

**Returns:**

True if the DType is Float16 and False otherwise.

### `is_float32`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_float32 "Direct link to is_float32")

`is_float32(self: Self) -> Bool`

Checks if this DType is Float32.

**Returns:**

True if the DType is Float32 and False otherwise.

### `is_tensor_float32`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_tensor_float32 "Direct link to is_tensor_float32")

`is_tensor_float32(self: Self) -> Bool`

Checks if this DType is Tensor Float32.

**Returns:**

True if the DType is Tensor Float32 and False otherwise.

### `is_float64`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_float64 "Direct link to is_float64")

`is_float64(self: Self) -> Bool`

Checks if this DType is Float64.

**Returns:**

True if the DType is Float64 and False otherwise.

### `is_index`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_index "Direct link to is_index")

`is_index(self: Self) -> Bool`

Checks if this DType is Index.

**Returns:**

True if the DType is Index and False otherwise.

### `is_address`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_address "Direct link to is_address")

`is_address(self: Self) -> Bool`

Checks if this DType is Address.

**Returns:**

True if the DType is Address and False otherwise.

### `is_unsigned`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_unsigned "Direct link to is_unsigned")

`is_unsigned(self: Self) -> Bool`

Returns True if the type parameter is unsigned and False otherwise.

**Returns:**

Returns True if the input type parameter is unsigned.

### `is_signed`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_signed "Direct link to is_signed")

`is_signed(self: Self) -> Bool`

Returns True if the type parameter is signed and False otherwise.

**Returns:**

Returns True if the input type parameter is signed.

### `is_integral`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_integral "Direct link to is_integral")

`is_integral(self: Self) -> Bool`

Returns True if the type parameter is an integer and False otherwise.

**Returns:**

Returns True if the input type parameter is an integer.

### `is_floating_point`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_floating_point "Direct link to is_floating_point")

`is_floating_point(self: Self) -> Bool`

Returns True if the type parameter is a floating-point and False otherwise.

**Returns:**

Returns True if the input type parameter is a floating-point.

### `is_numeric`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#is_numeric "Direct link to is_numeric")

`is_numeric(self: Self) -> Bool`

Returns True if the type parameter is numeric (i.e. you can perform arithmetic operations on).

**Returns:**

Returns True if the input type parameter is either integral or floating-point.

### `sizeof`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#sizeof "Direct link to sizeof")

`sizeof(self: Self) -> Int`

Returns the size in bytes of the current DType.

**Returns:**

Returns the size in bytes of the current DType.

### `bitwidth`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#bitwidth "Direct link to bitwidth")

`bitwidth(self: Self) -> Int`

Returns the size in bits of the current DType.

**Returns:**

Returns the size in bits of the current DType.

### `dispatch_integral`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#dispatch_integral "Direct link to dispatch_integral")

`dispatch_integral[func: fn[DType]() capturing -> None](self: Self)`

Dispatches an integral function corresponding to the current DType.

**Constraints:**

DType must be integral.

**Parameters:**

- ​**func** (`fn[DType]() capturing -> None`): A parametrized on dtype function to dispatch.

### `dispatch_floating`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#dispatch_floating "Direct link to dispatch_floating")

`dispatch_floating[func: fn[DType]() capturing -> None](self: Self)`

Dispatches a floating-point function corresponding to the current DType.

**Constraints:**

DType must be floating-point or integral.

**Parameters:**

- ​**func** (`fn[DType]() capturing -> None`): A parametrized on dtype function to dispatch.

### `dispatch_arithmetic`[​](https://docs.modular.com/mojo/stdlib/builtin/dtype#dispatch_arithmetic "Direct link to dispatch_arithmetic")

`dispatch_arithmetic[func: fn[DType]() capturing -> None](self: Self)`

Dispatches a function corresponding to the current DType.

**Parameters:**

- ​**func** (`fn[DType]() capturing -> None`): A parametrized on dtype function to dispatch.