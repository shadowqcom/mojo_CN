---
title: "compile"
sidebar_label: "compile"
description: "Provides utilities for compiling and inspecting Mojo code.  This module contains functionality for compiling Mojo functions and examining their assembly, LLVM IR, or object code output. It is particul"
---

# compile

Provides utilities for compiling and inspecting Mojo code.

This module contains functionality for compiling Mojo functions and examining
their assembly, LLVM IR, or object code output. It is particularly useful for
kernel engineers who want to inspect the low-level implementation details of
specific functions without dealing with entire files or manual invocation of
compilation tools.

Key features:
- Compile individual functions to assembly, LLVM IR, or object code
- Get linkage names and module information
- Inspect number of captures and other function metadata
- Write compilation output to files
- Control compilation options and targets

Example:
```mojo
from std.compile import compile_info

def my_func(x: Int) -> Int:
    return x

# Get assembly for the function
info = compile_info[my_func]()
print(info)
```

## 类型

### _Info

`struct _Info(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `asm: __mlir_type.`!kgen.string``
- `module_name: __mlir_type.`!kgen.string``
- `num_captures: __mlir_type.index`
- `capture_sizes: UnsafePointer[UInt64, ImmutExternalOrigin]`

### _PopulateInfo

`struct _PopulateInfo(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `populate: def(__mlir_type.`!kgen.pointer<none>`) capturing -&gt; None`

### CompiledFunctionInfo

`@fieldwise_init struct CompiledFunctionInfo[
    func_type`
