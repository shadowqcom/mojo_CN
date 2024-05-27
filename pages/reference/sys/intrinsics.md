# intrinsics

Defines intrinsics.

You can import these APIs from the `complex` package. For example:

```
from sys.intrinsics import PrefetchLocality
```

## `PrefetchLocality`

The prefetch locality.

The locality, rw, and cache type correspond to LLVM prefetch intrinsic's inputs (see [LLVM prefetch locality](https://llvm.org/docs/LangRef.html#llvm-prefetch-intrinsic))

**Aliases:**

- ​`NONE = PrefetchLocality(0)`: No locality.

- ​`LOW = PrefetchLocality(1)`: Low locality.

- ​`MEDIUM = PrefetchLocality(2)`: Medium locality.

- ​`HIGH = PrefetchLocality(3)`: Extremely local locality (keep in cache).

**Fields:**

- ​**value** (`SIMD[si32, 1]`): The prefetch locality to use. It should be a value in \[0, 3\].

**Implemented traits:**

`AnyType`

**Methods:**

### `__init__`

`__init__(value: Int) -> Self`

Constructs a prefetch locality option.

**Args:**

- ​**value** (`Int`): An integer value representing the locality. Should be a value in the range `[0, 3]`.

**Returns:**

The prefetch locality constructed.

## `PrefetchRW`

Prefetch read or write.

**Aliases:**

- ​`READ = PrefetchRW(0)`: Read prefetch.

- ​`WRITE = PrefetchRW(1)`: Write prefetch.

**Fields:**

- ​**value** (`SIMD[si32, 1]`): The read-write prefetch. It should be in \[0, 1\].

**Implemented traits:**

`AnyType`

**Methods:**

### `__init__`

`__init__(value: Int) -> Self`

Constructs a prefetch read-write option.

**Args:**

- ​**value** (`Int`): An integer value representing the prefetch read-write option to be used. Should be a value in the range `[0, 1]`.

**Returns:**

The prefetch read-write option constructed.

## `PrefetchCache`

Prefetch cache type.

**Aliases:**

- ​`INSTRUCTION = PrefetchCache(0)`: The instruction prefetching option.

- ​`DATA = PrefetchCache(1)`: The data prefetching option.

**Fields:**

- ​**value** (`SIMD[si32, 1]`): The cache prefetch. It should be in \[0, 1\].

**Implemented traits:**

`AnyType`

**Methods:**

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

### `__init__`

`__init__(value: Int) -> Self`

Constructs a prefetch option.

**Args:**

- ​**value** (`Int`): An integer value representing the prefetch cache option to be used. Should be a value in the range `[0, 1]`.

**Returns:**

The prefetch cache type that was constructed.

## `PrefetchOptions`

Collection of configuration parameters for a prefetch intrinsic call.

The op configuration follows similar interface as LLVM intrinsic prefetch op, with a "locality" attribute that specifies the level of temporal locality in the application, that is, how soon would the same data be visited again. Possible locality values are: `NONE`, `LOW`, `MEDIUM`, and `HIGH`.

The op also takes a "cache tag" attribute giving hints on how the prefetched data will be used. Possible tags are: `ReadICache`, `ReadDCache` and `WriteDCache`.

Note: the actual behavior of the prefetch op and concrete interpretation of these attributes are target-dependent.

**Fields:**

- ​**rw** (`PrefetchRW`): Indicates prefetching for read or write.

- ​**locality** (`PrefetchLocality`): Indicates locality level.

- ​**cache** (`PrefetchCache`): Indicates i-cache or d-cache prefetching.

**Implemented traits:**

`AnyType`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Constructs an instance of PrefetchOptions with default params.

### `for_read`

`for_read(self: Self) -> Self`

Sets the prefetch purpose to read.

**Returns:**

The updated prefetch parameter.

### `for_write`

`for_write(self: Self) -> Self`

Sets the prefetch purpose to write.

**Returns:**

The updated prefetch parameter.

### `no_locality`

`no_locality(self: Self) -> Self`

Sets the prefetch locality to none.

**Returns:**

The updated prefetch parameter.

### `low_locality`

`low_locality(self: Self) -> Self`

Sets the prefetch locality to low.

**Returns:**

The updated prefetch parameter.

### `medium_locality`

`medium_locality(self: Self) -> Self`

Sets the prefetch locality to medium.

**Returns:**

The updated prefetch parameter.

### `high_locality`

`high_locality(self: Self) -> Self`

Sets the prefetch locality to high.

**Returns:**

The updated prefetch parameter.

### `to_data_cache`

`to_data_cache(self: Self) -> Self`

Sets the prefetch target to data cache.

**Returns:**

The updated prefetch parameter.

### `to_instruction_cache`

`to_instruction_cache(self: Self) -> Self`

Sets the prefetch target to instruction cache.

**Returns:**

The updated prefetch parameter.

## `llvm_intrinsic`

`llvm_intrinsic[intrin: StringLiteral, type: AnyRegType]() -> *"type"`

Calls an LLVM intrinsic with no arguments.

Calls an LLVM intrinsic with the name intrin and return type type.

**Parameters:**

- ​**intrin** (`StringLiteral`): The name of the llvm intrinsic.
- ​**type** (`AnyRegType`): The return type of the intrinsic.

**Returns:**

The result of calling the llvm intrinsic with no arguments.

`llvm_intrinsic[intrin: StringLiteral, type: AnyRegType, T0: AnyRegType](arg0: T0) -> *"type"`

Calls an LLVM intrinsic with one argument.

Calls the intrinsic with the name intrin and return type type on argument arg0.

**Parameters:**

- ​**intrin** (`StringLiteral`): The name of the llvm intrinsic.
- ​**type** (`AnyRegType`): The return type of the intrinsic.
- ​**T0** (`AnyRegType`): The type of the first argument to the intrinsic (arg0).

**Args:**

- ​**arg0** (`T0`): The argument to call the LLVM intrinsic with. The type of arg0 must be T0.

**Returns:**

The result of calling the llvm intrinsic with arg0 as an argument.

`llvm_intrinsic[intrin: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType](arg0: T0, arg1: T1) -> *"type"`

Calls an LLVM intrinsic with two arguments.

Calls the LLVM intrinsic with the name intrin and return type type on arguments arg0 and arg1.

**Parameters:**

- ​**intrin** (`StringLiteral`): The name of the llvm intrinsic.
- ​**type** (`AnyRegType`): The return type of the intrinsic.
- ​**T0** (`AnyRegType`): The type of the first argument to the intrinsic (arg0).
- ​**T1** (`AnyRegType`): The type of the second argument to the intrinsic (arg1).

**Args:**

- ​**arg0** (`T0`): The first argument to call the LLVM intrinsic with. The type of arg0 must be T0.
- ​**arg1** (`T1`): The second argument to call the LLVM intrinsic with. The type of arg1 must be T1.

**Returns:**

The result of calling the llvm intrinsic with arg0 and arg1 as arguments.

`llvm_intrinsic[intrin: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType, T2: AnyRegType](arg0: T0, arg1: T1, arg2: T2) -> *"type"`

Calls an LLVM intrinsic with three arguments.

Calls the LLVM intrinsic with the name intrin and return type type on arguments arg0, arg1 and arg2.

**Parameters:**

- ​**intrin** (`StringLiteral`): The name of the llvm intrinsic.
- ​**type** (`AnyRegType`): The return type of the intrinsic.
- ​**T0** (`AnyRegType`): The type of the first argument to the intrinsic (arg0).
- ​**T1** (`AnyRegType`): The type of the second argument to the intrinsic (arg1).
- ​**T2** (`AnyRegType`): The type of the third argument to the intrinsic (arg2).

**Args:**

- ​**arg0** (`T0`): The first argument to call the LLVM intrinsic with. The type of arg0 must be T0.
- ​**arg1** (`T1`): The second argument to call the LLVM intrinsic with. The type of arg1 must be T1.
- ​**arg2** (`T2`): The third argument to call the LLVM intrinsic with. The type of arg2 must be T2.

**Returns:**

The result of calling the llvm intrinsic with arg0, arg1 and arg2 as arguments.

`llvm_intrinsic[intrin: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType, T2: AnyRegType, T3: AnyRegType](arg0: T0, arg1: T1, arg2: T2, arg3: T3) -> *"type"`

Calls an LLVM intrinsic with four arguments.

Calls the LLVM intrinsic with the name intrin and return type type on arguments arg0, arg1, arg2 and arg3.

**Parameters:**

- ​**intrin** (`StringLiteral`): The name of the llvm intrinsic.
- ​**type** (`AnyRegType`): The return type of the intrinsic.
- ​**T0** (`AnyRegType`): The type of the first argument to the intrinsic (arg0).
- ​**T1** (`AnyRegType`): The type of the second argument to the intrinsic (arg1).
- ​**T2** (`AnyRegType`): The type of the third argument to the intrinsic (arg2).
- ​**T3** (`AnyRegType`): The type of the fourth argument to the intrinsic (arg3).

**Args:**

- ​**arg0** (`T0`): The first argument to call the LLVM intrinsic with. The type of arg0 must be T0.
- ​**arg1** (`T1`): The second argument to call the LLVM intrinsic with. The type of arg1 must be T1.
- ​**arg2** (`T2`): The third argument to call the LLVM intrinsic with. The type of arg2 must be T2.
- ​**arg3** (`T3`): The fourth argument to call the LLVM intrinsic with. The type of arg3 must be T3.

**Returns:**

The result of calling the llvm intrinsic with arg0, arg1, arg2 and arg3 as arguments.

`llvm_intrinsic[intrin: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType, T2: AnyRegType, T3: AnyRegType, T4: AnyRegType](arg0: T0, arg1: T1, arg2: T2, arg3: T3, arg4: T4) -> *"type"`

Calls an LLVM intrinsic with five arguments.

Calls the LLVM intrinsic with the name intrin and return type type on arguments arg0, arg1, arg2, arg3 and arg4.

**Parameters:**

- ​**intrin** (`StringLiteral`): The name of the llvm intrinsic.
- ​**type** (`AnyRegType`): The return type of the intrinsic.
- ​**T0** (`AnyRegType`): The type of the first argument to the intrinsic (arg0).
- ​**T1** (`AnyRegType`): The type of the second argument to the intrinsic (arg1).
- ​**T2** (`AnyRegType`): The type of the third argument to the intrinsic (arg2).
- ​**T3** (`AnyRegType`): The type of the fourth argument to the intrinsic (arg3).
- ​**T4** (`AnyRegType`): The type of the fifth argument to the intrinsic (arg4).

**Args:**

- ​**arg0** (`T0`): The first argument to call the LLVM intrinsic with. The type of arg0 must be T0.
- ​**arg1** (`T1`): The second argument to call the LLVM intrinsic with. The type of arg1 must be T1.
- ​**arg2** (`T2`): The third argument to call the LLVM intrinsic with. The type of arg2 must be T2.
- ​**arg3** (`T3`): The fourth argument to call the LLVM intrinsic with. The type of arg3 must be T3.
- ​**arg4** (`T4`): The fifth argument to call the LLVM intrinsic with. The type of arg4 must be T4.

**Returns:**

The result of calling the llvm intrinsic with arg0...arg4 as arguments.

`llvm_intrinsic[intrin: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType, T2: AnyRegType, T3: AnyRegType, T4: AnyRegType, T5: AnyRegType](arg0: T0, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) -> *"type"`

Calls an LLVM intrinsic with six arguments.

Calls the LLVM intrinsic with the name intrin and return type type on arguments arg0, arg1, ..., arg5

**Parameters:**

- ​**intrin** (`StringLiteral`): The name of the llvm intrinsic.
- ​**type** (`AnyRegType`): The return type of the intrinsic.
- ​**T0** (`AnyRegType`): The type of the first argument to the intrinsic (arg0).
- ​**T1** (`AnyRegType`): The type of the second argument to the intrinsic (arg1).
- ​**T2** (`AnyRegType`): The type of the third argument to the intrinsic (arg2).
- ​**T3** (`AnyRegType`): The type of the fourth argument to the intrinsic (arg3).
- ​**T4** (`AnyRegType`): The type of the fifth argument to the intrinsic (arg4).
- ​**T5** (`AnyRegType`): The type of the sixth argument to the intrinsic (arg5).

**Args:**

- ​**arg0** (`T0`): The first argument to call the LLVM intrinsic with. The type of arg0 must be T0.
- ​**arg1** (`T1`): The second argument to call the LLVM intrinsic with. The type of arg1 must be T1.
- ​**arg2** (`T2`): The third argument to call the LLVM intrinsic with. The type of arg2 must be T2.
- ​**arg3** (`T3`): The fourth argument to call the LLVM intrinsic with. The type of arg3 must be T3.
- ​**arg4** (`T4`): The fifth argument to call the LLVM intrinsic with. The type of arg4 must be T4.
- ​**arg5** (`T5`): The sixth argument to call the LLVM intrinsic with. The type of arg5 must be T5.

**Returns:**

The result of calling the llvm intrinsic with arg0...arg5 as arguments.

`llvm_intrinsic[intrin: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType, T2: AnyRegType, T3: AnyRegType, T4: AnyRegType, T5: AnyRegType, T6: AnyRegType](arg0: T0, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) -> *"type"`

Calls an LLVM intrinsic with seven arguments.

Calls the LLVM intrinsic with the name intrin and return type type on arguments arg0, arg1, ..., arg6

**Parameters:**

- ​**intrin** (`StringLiteral`): The name of the llvm intrinsic.
- ​**type** (`AnyRegType`): The return type of the intrinsic.
- ​**T0** (`AnyRegType`): The type of the first argument to the intrinsic (arg0).
- ​**T1** (`AnyRegType`): The type of the second argument to the intrinsic (arg1).
- ​**T2** (`AnyRegType`): The type of the third argument to the intrinsic (arg2).
- ​**T3** (`AnyRegType`): The type of the fourth argument to the intrinsic (arg3).
- ​**T4** (`AnyRegType`): The type of the fifth argument to the intrinsic (arg4).
- ​**T5** (`AnyRegType`): The type of the sixth argument to the intrinsic (arg5).
- ​**T6** (`AnyRegType`): The type of the seventh argument to the intrinsic (arg6).

**Args:**

- ​**arg0** (`T0`): The first argument to call the LLVM intrinsic with. The type of arg0 must be T0.
- ​**arg1** (`T1`): The second argument to call the LLVM intrinsic with. The type of arg1 must be T1.
- ​**arg2** (`T2`): The third argument to call the LLVM intrinsic with. The type of arg2 must be T2.
- ​**arg3** (`T3`): The fourth argument to call the LLVM intrinsic with. The type of arg3 must be T3.
- ​**arg4** (`T4`): The fifth argument to call the LLVM intrinsic with. The type of arg4 must be T4.
- ​**arg5** (`T5`): The sixth argument to call the LLVM intrinsic with. The type of arg5 must be T5.
- ​**arg6** (`T6`): The seventh argument to call the LLVM intrinsic with. The type of arg6 must be T6.

**Returns:**

The result of calling the llvm intrinsic with arg0...arg6 as arguments.

`llvm_intrinsic[intrin: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType, T2: AnyRegType, T3: AnyRegType, T4: AnyRegType, T5: AnyRegType, T6: AnyRegType, T7: AnyRegType](arg0: T0, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) -> *"type"`

Calls an LLVM intrinsic with eight arguments.

Calls the LLVM intrinsic with the name intrin and return type type on arguments arg0, arg1, ..., arg7

**Parameters:**

- ​**intrin** (`StringLiteral`): The name of the llvm intrinsic.
- ​**type** (`AnyRegType`): The return type of the intrinsic.
- ​**T0** (`AnyRegType`): The type of the first argument to the intrinsic (arg0).
- ​**T1** (`AnyRegType`): The type of the second argument to the intrinsic (arg1).
- ​**T2** (`AnyRegType`): The type of the third argument to the intrinsic (arg2).
- ​**T3** (`AnyRegType`): The type of the fourth argument to the intrinsic (arg3).
- ​**T4** (`AnyRegType`): The type of the fifth argument to the intrinsic (arg4).
- ​**T5** (`AnyRegType`): The type of the sixth argument to the intrinsic (arg5).
- ​**T6** (`AnyRegType`): The type of the seventh argument to the intrinsic (arg6).
- ​**T7** (`AnyRegType`): The type of the eighth argument to the intrinsic (arg7).

**Args:**

- ​**arg0** (`T0`): The first argument to call the LLVM intrinsic with. The type of arg0 must be T0.
- ​**arg1** (`T1`): The second argument to call the LLVM intrinsic with. The type of arg1 must be T1.
- ​**arg2** (`T2`): The third argument to call the LLVM intrinsic with. The type of arg2 must be T2.
- ​**arg3** (`T3`): The fourth argument to call the LLVM intrinsic with. The type of arg3 must be T3.
- ​**arg4** (`T4`): The fifth argument to call the LLVM intrinsic with. The type of arg4 must be T4.
- ​**arg5** (`T5`): The sixth argument to call the LLVM intrinsic with. The type of arg5 must be T5.
- ​**arg6** (`T6`): The seventh argument to call the LLVM intrinsic with. The type of arg6 must be T6.
- ​**arg7** (`T7`): The eighth argument to call the LLVM intrinsic with. The type of arg7 must be T7.

**Returns:**

The result of calling the llvm intrinsic with arg0...arg7 as arguments.

`llvm_intrinsic[intrin: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType, T2: AnyRegType, T3: AnyRegType, T4: AnyRegType, T5: AnyRegType, T6: AnyRegType, T7: AnyRegType, T8: AnyRegType](arg0: T0, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) -> *"type"`

Calls an LLVM intrinsic with nine arguments.

Calls the LLVM intrinsic with the name intrin and return type type on arguments arg0, arg1, ..., arg8

**Parameters:**

- ​**intrin** (`StringLiteral`): The name of the llvm intrinsic.
- ​**type** (`AnyRegType`): The return type of the intrinsic.
- ​**T0** (`AnyRegType`): The type of the first argument to the intrinsic (arg0).
- ​**T1** (`AnyRegType`): The type of the second argument to the intrinsic (arg1).
- ​**T2** (`AnyRegType`): The type of the third argument to the intrinsic (arg2).
- ​**T3** (`AnyRegType`): The type of the fourth argument to the intrinsic (arg3).
- ​**T4** (`AnyRegType`): The type of the fifth argument to the intrinsic (arg4).
- ​**T5** (`AnyRegType`): The type of the sixth argument to the intrinsic (arg5).
- ​**T6** (`AnyRegType`): The type of the seventh argument to the intrinsic (arg6).
- ​**T7** (`AnyRegType`): The type of the eighth argument to the intrinsic (arg7).
- ​**T8** (`AnyRegType`): The type of the ninth argument to the intrinsic (arg8).

**Args:**

- ​**arg0** (`T0`): The first argument to call the LLVM intrinsic with. The type of arg0 must be T0.
- ​**arg1** (`T1`): The second argument to call the LLVM intrinsic with. The type of arg1 must be T1.
- ​**arg2** (`T2`): The third argument to call the LLVM intrinsic with. The type of arg2 must be T2.
- ​**arg3** (`T3`): The fourth argument to call the LLVM intrinsic with. The type of arg3 must be T3.
- ​**arg4** (`T4`): The fifth argument to call the LLVM intrinsic with. The type of arg4 must be T4.
- ​**arg5** (`T5`): The sixth argument to call the LLVM intrinsic with. The type of arg5 must be T5.
- ​**arg6** (`T6`): The seventh argument to call the LLVM intrinsic with. The type of arg6 must be T6.
- ​**arg7** (`T7`): The eighth argument to call the LLVM intrinsic with. The type of arg7 must be T7.
- ​**arg8** (`T8`): The ninth argument to call the LLVM intrinsic with. The type of arg8 must be T8.

**Returns:**

The result of calling the llvm intrinsic with arg0...arg8 as arguments.

`llvm_intrinsic[intrin: StringLiteral, type: AnyRegType, T0: AnyRegType, T1: AnyRegType, T2: AnyRegType, T3: AnyRegType, T4: AnyRegType, T5: AnyRegType, T6: AnyRegType, T7: AnyRegType, T8: AnyRegType, T9: AnyRegType](arg0: T0, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) -> *"type"`

Calls an LLVM intrinsic with ten arguments.

Calls the LLVM intrinsic with the name intrin and return type type on arguments arg0, arg1, ..., arg10

**Parameters:**

- ​**intrin** (`StringLiteral`): The name of the llvm intrinsic.
- ​**type** (`AnyRegType`): The return type of the intrinsic.
- ​**T0** (`AnyRegType`): The type of the first argument to the intrinsic (arg0).
- ​**T1** (`AnyRegType`): The type of the second argument to the intrinsic (arg1).
- ​**T2** (`AnyRegType`): The type of the third argument to the intrinsic (arg2).
- ​**T3** (`AnyRegType`): The type of the fourth argument to the intrinsic (arg3).
- ​**T4** (`AnyRegType`): The type of the fifth argument to the intrinsic (arg4).
- ​**T5** (`AnyRegType`): The type of the sixth argument to the intrinsic (arg5).
- ​**T6** (`AnyRegType`): The type of the seventh argument to the intrinsic (arg6).
- ​**T7** (`AnyRegType`): The type of the eighth argument to the intrinsic (arg7).
- ​**T8** (`AnyRegType`): The type of the ninth argument to the intrinsic (arg8).
- ​**T9** (`AnyRegType`): The type of the tenth argument to the intrinsic (arg9).

**Args:**

- ​**arg0** (`T0`): The first argument to call the LLVM intrinsic with. The type of arg0 must be T0.
- ​**arg1** (`T1`): The second argument to call the LLVM intrinsic with. The type of arg1 must be T1.
- ​**arg2** (`T2`): The third argument to call the LLVM intrinsic with. The type of arg2 must be T2.
- ​**arg3** (`T3`): The fourth argument to call the LLVM intrinsic with. The type of arg3 must be T3.
- ​**arg4** (`T4`): The fifth argument to call the LLVM intrinsic with. The type of arg4 must be T4.
- ​**arg5** (`T5`): The sixth argument to call the LLVM intrinsic with. The type of arg5 must be T5.
- ​**arg6** (`T6`): The seventh argument to call the LLVM intrinsic with. The type of arg6 must be T6.
- ​**arg7** (`T7`): The eighth argument to call the LLVM intrinsic with. The type of arg7 must be T7.
- ​**arg8** (`T8`): The ninth argument to call the LLVM intrinsic with. The type of arg8 must be T8.
- ​**arg9** (`T9`): The tenth argument to call the LLVM intrinsic with. The type of arg9 must be T9.

**Returns:**

The result of calling the llvm intrinsic with arg0...arg9 as arguments.

## `gather`

`gather[type: DType, size: Int](base: SIMD[address, size], mask: SIMD[bool, size], passthrough: SIMD[type, size], alignment: Int) -> SIMD[type, size]`

Reads scalar values from a SIMD vector, and gathers them into one vector.

The gather function reads scalar values from a SIMD vector of memory locations and gathers them into one vector. The memory locations are provided in the vector of pointers `base` as addresses. The memory is accessed according to the provided mask. The mask holds a bit for each vector lane, and is used to prevent memory accesses to the masked-off lanes. The masked-off lanes in the result vector are taken from the corresponding lanes of the `passthrough` operand.

In general, for some vector of pointers `base`, mask `mask`, and passthrough `pass` a call of the form:

```
gather(base, mask, pass)
```

is equivalent to the following sequence of scalar loads in C++:

```
for (int i = 0; i < N; i++)  result[i] = mask[i] ? *base[i] : passthrough[i];
```

**Parameters:**

- ​**type** (`DType`): DType of the return SIMD buffer.
- ​**size** (`Int`): Size of the return SIMD buffer.

**Args:**

- ​**base** (`SIMD[address, size]`): The vector containing memory addresses that gather will access.
- ​**mask** (`SIMD[bool, size]`): A binary vector which prevents memory access to certain lanes of the base vector.
- ​**passthrough** (`SIMD[type, size]`): In the result vector, the masked-off lanes are replaced with the passthrough vector.
- ​**alignment** (`Int`): The alignment of the source addresses. Must be 0 or a power of two constant integer value.

**Returns:**

A SIMD\[type, size\] containing the result of the gather operation.

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

## `scatter`

`scatter[type: DType, size: Int](value: SIMD[type, size], base: SIMD[address, size], mask: SIMD[bool, size], alignment: Int)`

Takes scalar values from a SIMD vector and `scatters` them into a vector of pointers.

The scatter operation stores scalar values from a SIMD vector of memory locations and scatters them into a vector of pointers. The memory locations are provided in the vector of pointers `base` as addresses. The memory is stored according to the provided mask. The mask holds a bit for each vector lane, and is used to prevent memory accesses to the masked-off lanes.

The `value` operand is a vector value to be written to memory. The `base` operand is a vector of pointers, pointing to where the value elements should be stored. It has the same underlying type as the value operand. The `mask` operand, mask, is a vector of boolean values. The types of the `mask` and the `value` operand must have the same number of vector elements.

The behavior of the \_scatter is undefined if the op stores into the same memory location more than once.

In general, for some vector %value, vector of pointers %base, and mask %mask instructions of the form:

```
%0 = pop.simd.scatter %value, %base[%mask] : !pop.simd<N, type>
```

is equivalent to the following sequence of scalar loads in C++:

```
for (int i = 0; i < N; i++)  if (mask[i])    base[i] = value[i];
```

**Parameters:**

- ​**type** (`DType`): DType of `value`, the result SIMD buffer.
- ​**size** (`Int`): Size of `value`, the result SIMD buffer.

**Args:**

- ​**value** (`SIMD[type, size]`): The vector that will contain the result of the scatter operation.
- ​**base** (`SIMD[address, size]`): The vector containing memory addresses that scatter will access.
- ​**mask** (`SIMD[bool, size]`): A binary vector which prevents memory access to certain lanes of the base vector.
- ​**alignment** (`Int`): The alignment of the source addresses. Must be 0 or a power of two constant integer value.

## `prefetch`

`prefetch[params: PrefetchOptions, type: DType, address_space: AddressSpace](addr: DTypePointer[type, address_space])`

Prefetches an instruction or data into cache before it is used.

The prefetch function provides prefetching hints for the target to prefetch instruction or data into cache before they are used.

**Parameters:**

- ​**params** (`PrefetchOptions`): Configuration options for the prefect intrinsic.
- ​**type** (`DType`): The DType of value stored in addr.
- ​**address\_space** (`AddressSpace`): The address space of the pointer.

**Args:**

- ​**addr** (`DTypePointer[type, address_space]`): The data pointer to prefetch.

## `masked_load`

`masked_load[size: Int, addr: DType, addr: AddressSpace](addr: DTypePointer[addr, addr], mask: SIMD[bool, size], passthrough: SIMD[addr, size], alignment: Int) -> SIMD[addr, size]`

Loads data from memory and return it, replacing masked lanes with values from the passthrough vector.

**Parameters:**

- ​**size** (`Int`): Size of the return SIMD buffer.

**Args:**

- ​**addr** (`DTypePointer[addr, addr]`): The base pointer for the load.
- ​**mask** (`SIMD[bool, size]`): A binary vector which prevents memory access to certain lanes of the memory stored at addr.
- ​**passthrough** (`SIMD[addr, size]`): In the result vector, the masked-off lanes are replaced with the passthrough vector.
- ​**alignment** (`Int`): The alignment of the source addresses. Must be 0 or a power of two constant integer value. Default is 1.

**Returns:**

The loaded memory stored in a vector of type SIMD\[type, size\].

## `masked_store`

`masked_store[size: Int, value: DType, value: Int](value: SIMD[value, value], addr: DTypePointer[value, 0], mask: SIMD[bool, size], alignment: Int)`

Stores a value at a memory location, skipping masked lanes.

**Parameters:**

- ​**size** (`Int`): Size of `value`, the data to store.

**Args:**

- ​**value** (`SIMD[value, value]`): The vector containing data to store.
- ​**addr** (`DTypePointer[value, 0]`): A vector of memory location to store data at.
- ​**mask** (`SIMD[bool, size]`): A binary vector which prevents memory access to certain lanes of `value`.
- ​**alignment** (`Int`): The alignment of the destination locations. Must be 0 or a power of two constant integer value.

## `compressed_store`

`compressed_store[type: DType, size: Int](value: SIMD[type, size], addr: DTypePointer[type, 0], mask: SIMD[bool, size])`

Compresses the lanes of `value`, skipping `mask` lanes, and stores at `addr`.

**Parameters:**

- ​**type** (`DType`): DType of `value`, the value to store.
- ​**size** (`Int`): Size of `value`, the value to store.

**Args:**

- ​**value** (`SIMD[type, size]`): The vector containing data to store.
- ​**addr** (`DTypePointer[type, 0]`): The memory location to store the compressed data.
- ​**mask** (`SIMD[bool, size]`): A binary vector which prevents memory access to certain lanes of `value`.

## `strided_load`

`strided_load[type: DType, simd_width: Int, address_space: AddressSpace](addr: DTypePointer[type, address_space], stride: Int, mask: SIMD[bool, simd_width]) -> SIMD[type, simd_width]`

Loads values from addr according to a specific stride.

**Parameters:**

- ​**type** (`DType`): DType of `value`, the value to store.
- ​**simd\_width** (`Int`): The width of the SIMD vectors.
- ​**address\_space** (`AddressSpace`): The address space of the memory location.

**Args:**

- ​**addr** (`DTypePointer[type, address_space]`): The memory location to load data from.
- ​**stride** (`Int`): How many lanes to skip before loading again.
- ​**mask** (`SIMD[bool, simd_width]`): A binary vector which prevents memory access to certain lanes of `value`.

**Returns:**

A vector containing the loaded data.

`strided_load[type: DType, simd_width: Int, address_space: AddressSpace](addr: DTypePointer[type, address_space], stride: Int) -> SIMD[type, simd_width]`

Loads values from addr according to a specific stride.

**Parameters:**

- ​**type** (`DType`): DType of `value`, the value to store.
- ​**simd\_width** (`Int`): The width of the SIMD vectors.
- ​**address\_space** (`AddressSpace`): The address space of the memory location.

**Args:**

- ​**addr** (`DTypePointer[type, address_space]`): The memory location to load data from.
- ​**stride** (`Int`): How many lanes to skip before loading again.

**Returns:**

A vector containing the loaded data.

## `strided_store`

`strided_store[type: DType, simd_width: Int, address_space: AddressSpace](value: SIMD[type, simd_width], addr: DTypePointer[type, address_space], stride: Int, mask: SIMD[bool, simd_width])`

Loads values from addr according to a specific stride.

**Parameters:**

- ​**type** (`DType`): DType of `value`, the value to store.
- ​**simd\_width** (`Int`): The width of the SIMD vectors.
- ​**address\_space** (`AddressSpace`): The address space of the memory location.

**Args:**

- ​**value** (`SIMD[type, simd_width]`): The values to store.
- ​**addr** (`DTypePointer[type, address_space]`): The location to store values at.
- ​**stride** (`Int`): How many lanes to skip before storing again.
- ​**mask** (`SIMD[bool, simd_width]`): A binary vector which prevents memory access to certain lanes of `value`.

`strided_store[type: DType, simd_width: Int, address_space: AddressSpace](value: SIMD[type, simd_width], addr: DTypePointer[type, address_space], stride: Int)`

Loads values from addr according to a specific stride.

**Parameters:**

- ​**type** (`DType`): DType of `value`, the value to store.
- ​**simd\_width** (`Int`): The width of the SIMD vectors.
- ​**address\_space** (`AddressSpace`): The address space of the memory location.

**Args:**

- ​**value** (`SIMD[type, simd_width]`): The values to store.
- ​**addr** (`DTypePointer[type, address_space]`): The location to store values at.
- ​**stride** (`Int`): How many lanes to skip before storing again.