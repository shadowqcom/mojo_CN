# info

Implements methods for querying the host target info.

You can import these APIs from the `sys` package. For example:

```
from sys.info import is_x86
```

## `is_x86`[​](https://docs.modular.com/mojo/stdlib/sys/info#is_x86 "Direct link to is_x86")

`is_x86() -> Bool`

Returns True if the host system architecture is X86 and False otherwise.

**Returns:**

True if the host system architecture is X86 and False otherwise.

## `has_sse4`[​](https://docs.modular.com/mojo/stdlib/sys/info#has_sse4 "Direct link to has_sse4")

`has_sse4() -> Bool`

Returns True if the host system has sse4, otherwise returns False.

**Returns:**

True if the host system has sse4, otherwise returns False.

## `has_avx`[​](https://docs.modular.com/mojo/stdlib/sys/info#has_avx "Direct link to has_avx")

`has_avx() -> Bool`

Returns True if the host system has AVX, otherwise returns False.

**Returns:**

True if the host system has AVX, otherwise returns False.

## `has_avx2`[​](https://docs.modular.com/mojo/stdlib/sys/info#has_avx2 "Direct link to has_avx2")

`has_avx2() -> Bool`

Returns True if the host system has AVX2, otherwise returns False.

**Returns:**

True if the host system has AVX2, otherwise returns False.

## `has_avx512f`[​](https://docs.modular.com/mojo/stdlib/sys/info#has_avx512f "Direct link to has_avx512f")

`has_avx512f() -> Bool`

Returns True if the host system has AVX512, otherwise returns False.

**Returns:**

True if the host system has AVX512, otherwise returns False.

## `has_vnni`[​](https://docs.modular.com/mojo/stdlib/sys/info#has_vnni "Direct link to has_vnni")

`has_vnni() -> Bool`

Returns True if the host system has avx512\_vnni, otherwise returns False.

**Returns:**

True if the host system has avx512\_vnni, otherwise returns False.

## `has_neon`[​](https://docs.modular.com/mojo/stdlib/sys/info#has_neon "Direct link to has_neon")

`has_neon() -> Bool`

Returns True if the host system has Neon support, otherwise returns False.

**Returns:**

True if the host system support the Neon instruction set.

## `has_neon_int8_dotprod`[​](https://docs.modular.com/mojo/stdlib/sys/info#has_neon_int8_dotprod "Direct link to has_neon_int8_dotprod")

`has_neon_int8_dotprod() -> Bool`

Returns True if the host system has the Neon int8 dot product extension, otherwise returns False.

**Returns:**

True if the host system support the Neon int8 dot product extension and False otherwise.

## `has_neon_int8_matmul`[​](https://docs.modular.com/mojo/stdlib/sys/info#has_neon_int8_matmul "Direct link to has_neon_int8_matmul")

`has_neon_int8_matmul() -> Bool`

Returns True if the host system has the Neon int8 matrix multiplication extension (I8MM), otherwise returns False.

**Returns:**

True if the host system support the Neon int8 matrix multiplication extension (I8MM) and False otherwise.

## `is_apple_m1`[​](https://docs.modular.com/mojo/stdlib/sys/info#is_apple_m1 "Direct link to is_apple_m1")

`is_apple_m1() -> Bool`

Returns True if the host system is an Apple M1 with AMX support, otherwise returns False.

**Returns:**

True if the host system is an Apple M1 with AMX support and False otherwise.

## `is_apple_m2`[​](https://docs.modular.com/mojo/stdlib/sys/info#is_apple_m2 "Direct link to is_apple_m2")

`is_apple_m2() -> Bool`

Returns True if the host system is an Apple M2 with AMX support, otherwise returns False.

**Returns:**

True if the host system is an Apple M2 with AMX support and False otherwise.

## `is_apple_m3`[​](https://docs.modular.com/mojo/stdlib/sys/info#is_apple_m3 "Direct link to is_apple_m3")

`is_apple_m3() -> Bool`

Returns True if the host system is an Apple M3 with AMX support, otherwise returns False.

**Returns:**

True if the host system is an Apple M3 with AMX support and False otherwise.

## `is_apple_silicon`[​](https://docs.modular.com/mojo/stdlib/sys/info#is_apple_silicon "Direct link to is_apple_silicon")

`is_apple_silicon() -> Bool`

Returns True if the host system is an Apple Silicon with AMX support, otherwise returns False.

**Returns:**

True if the host system is an Apple Silicon with AMX support and False otherwise.

## `is_neoverse_n1`[​](https://docs.modular.com/mojo/stdlib/sys/info#is_neoverse_n1 "Direct link to is_neoverse_n1")

`is_neoverse_n1() -> Bool`

Returns True if the host system is a Neoverse N1 system, otherwise returns False.

**Returns:**

True if the host system is a Neoverse N1 system and False otherwise.

## `has_intel_amx`[​](https://docs.modular.com/mojo/stdlib/sys/info#has_intel_amx "Direct link to has_intel_amx")

`has_intel_amx() -> Bool`

Returns True if the host system has Intel AMX support, otherwise returns False.

**Returns:**

True if the host system has Intel AMX and False otherwise.

## `os_is_macos`[​](https://docs.modular.com/mojo/stdlib/sys/info#os_is_macos "Direct link to os_is_macos")

`os_is_macos() -> Bool`

Returns True if the host operating system is macOS.

**Returns:**

True if the host operating system is macOS and False otherwise.

## `os_is_linux`[​](https://docs.modular.com/mojo/stdlib/sys/info#os_is_linux "Direct link to os_is_linux")

`os_is_linux() -> Bool`

Returns True if the host operating system is Linux.

**Returns:**

True if the host operating system is Linux and False otherwise.

## `os_is_windows`[​](https://docs.modular.com/mojo/stdlib/sys/info#os_is_windows "Direct link to os_is_windows")

`os_is_windows() -> Bool`

Returns True if the host operating system is Windows.

**Returns:**

True if the host operating system is Windows and False otherwise.

## `is_triple`[​](https://docs.modular.com/mojo/stdlib/sys/info#is_triple "Direct link to is_triple")

`is_triple[triple: StringLiteral]() -> Bool`

Returns True if the target triple of the compiler matches the input and False otherwise.

**Parameters:**

- ​**triple** (`StringLiteral`): The triple value to be checked against.

**Returns:**

True if the triple matches and False otherwise.

## `triple_is_nvidia_cuda`[​](https://docs.modular.com/mojo/stdlib/sys/info#triple_is_nvidia_cuda "Direct link to triple_is_nvidia_cuda")

`triple_is_nvidia_cuda() -> Bool`

Returns True if the target triple of the compiler is `nvptx64-nvidia-cuda` False otherwise.

**Returns:**

True if the triple target is cuda and False otherwise.

## `is_little_endian`[​](https://docs.modular.com/mojo/stdlib/sys/info#is_little_endian "Direct link to is_little_endian")

`is_little_endian[target: target]() -> Bool`

Returns True if the host endianness is little and False otherwise.

**Parameters:**

- ​**target** (`target`): The target architecture.

**Returns:**

True if the host target is little endian and False otherwise.

## `is_big_endian`[​](https://docs.modular.com/mojo/stdlib/sys/info#is_big_endian "Direct link to is_big_endian")

`is_big_endian[target: target]() -> Bool`

Returns True if the host endianness is big and False otherwise.

**Parameters:**

- ​**target** (`target`): The target architecture.

**Returns:**

True if the host target is big endian and False otherwise.

## `simdbitwidth`[​](https://docs.modular.com/mojo/stdlib/sys/info#simdbitwidth "Direct link to simdbitwidth")

`simdbitwidth[target: target]() -> Int`

Returns the vector size (in bits) of the host system.

**Parameters:**

- ​**target** (`target`): The target architecture.

**Returns:**

The vector size (in bits) of the host system.

## `simdbytewidth`[​](https://docs.modular.com/mojo/stdlib/sys/info#simdbytewidth "Direct link to simdbytewidth")

`simdbytewidth[target: target]() -> Int`

Returns the vector size (in bytes) of the host system.

**Parameters:**

- ​**target** (`target`): The target architecture.

**Returns:**

The vector size (in bytes) of the host system.

## `sizeof`[​](https://docs.modular.com/mojo/stdlib/sys/info#sizeof "Direct link to sizeof")

`sizeof[type: AnyRegType, target: target]() -> Int`

Returns the size of (in bytes) of the type.

**Parameters:**

- ​**type** (`AnyRegType`): The type in question.
- ​**target** (`target`): The target architecture.

**Returns:**

The size of the type in bytes.

`sizeof[type: DType, target: target]() -> Int`

Returns the size of (in bytes) of the dtype.

**Parameters:**

- ​**type** (`DType`): The DType in question.
- ​**target** (`target`): The target architecture.

**Returns:**

The size of the dtype in bytes.

## `alignof`[​](https://docs.modular.com/mojo/stdlib/sys/info#alignof "Direct link to alignof")

`alignof[type: AnyRegType, target: target]() -> Int`

Returns the align of (in bytes) of the type.

**Parameters:**

- ​**type** (`AnyRegType`): The type in question.
- ​**target** (`target`): The target architecture.

**Returns:**

The alignment of the type in bytes.

`alignof[type: DType, target: target]() -> Int`

Returns the align of (in bytes) of the dtype.

**Parameters:**

- ​**type** (`DType`): The DType in question.
- ​**target** (`target`): The target architecture.

**Returns:**

The alignment of the dtype in bytes.

## `bitwidthof`[​](https://docs.modular.com/mojo/stdlib/sys/info#bitwidthof "Direct link to bitwidthof")

`bitwidthof[type: AnyRegType, target: target]() -> Int`

Returns the size of (in bits) of the type.

**Parameters:**

- ​**type** (`AnyRegType`): The type in question.
- ​**target** (`target`): The target architecture.

**Returns:**

The size of the type in bits.

`bitwidthof[type: DType, target: target]() -> Int`

Returns the size of (in bits) of the dtype.

**Parameters:**

- ​**type** (`DType`): The type in question.
- ​**target** (`target`): The target architecture.

**Returns:**

The size of the dtype in bits.

## `simdwidthof`[​](https://docs.modular.com/mojo/stdlib/sys/info#simdwidthof "Direct link to simdwidthof")

`simdwidthof[type: AnyRegType, target: target]() -> Int`

Returns the vector size of the type on the host system.

**Parameters:**

- ​**type** (`AnyRegType`): The type in question.
- ​**target** (`target`): The target architecture.

**Returns:**

The vector size of the type on the host system.

`simdwidthof[type: DType, target: target]() -> Int`

Returns the vector size of the type on the host system.

**Parameters:**

- ​**type** (`DType`): The DType in question.
- ​**target** (`target`): The target architecture.

**Returns:**

The vector size of the dtype on the host system.

## `num_physical_cores`[​](https://docs.modular.com/mojo/stdlib/sys/info#num_physical_cores "Direct link to num_physical_cores")

`num_physical_cores() -> Int`

Returns the number of physical cores across all CPU sockets.

**Returns:**

Int: The number of physical cores on the system.

## `num_logical_cores`[​](https://docs.modular.com/mojo/stdlib/sys/info#num_logical_cores "Direct link to num_logical_cores")

`num_logical_cores() -> Int`

Returns the number of hardware threads, including hyperthreads across all CPU sockets.

**Returns:**

Int: The number of threads on the system.

## `num_performance_cores`[​](https://docs.modular.com/mojo/stdlib/sys/info#num_performance_cores "Direct link to num_performance_cores")

`num_performance_cores() -> Int`

Returns the number of physical performance cores across all CPU sockets. If not known, returns the total number of physical cores.

**Returns:**

Int: The number of physical performance cores on the system.