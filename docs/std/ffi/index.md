---
title: "ffi"
sidebar_label: "ffi"
description: "Foreign function interface (FFI) for calling C code and loading libraries.  This module provides tools for interfacing Mojo with C libraries and other foreign code. It includes:  - **C type aliases**:"
---

# ffi

Foreign function interface (FFI) for calling C code and loading libraries.

This module provides tools for interfacing Mojo with C libraries and other
foreign code. It includes:

- **C type aliases**: `c_int`, `c_char`, `c_long`, `c_size_t`, etc. for
  portable type definitions that match C's type sizes on each platform.
- **Dynamic library loading**: `OwnedDLHandle` for loading shared libraries
  at runtime and calling their functions.
- **External function calls**: `external_call()` for calling C functions
  by name with compile-time resolution.
- **String interop**: `CStringSlice` for working with null-terminated C strings.

Example:

```mojo
from std.ffi import c_int, external_call

def get_random() -> c_int:
    return external_call["rand", c_int]()
```

For loading dynamic libraries:

```mojo
from std.ffi import OwnedDLHandle

def main() raises:
    var lib = OwnedDLHandle("libm.so")
    var sqrt = lib.get_function[def(Float64) thin abi("C") -> Float64](
        "sqrt"
    )
    print(sqrt(4.0))  # 2.0
```

## 模块

- [cstring](/docs/std/ffi/cstring)
- [unsafe_union](/docs/std/ffi/unsafe_union)
