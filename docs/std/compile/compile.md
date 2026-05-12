---
title: "compile"
slug: compile
sidebar_label: "compile"
description: "提供编译和检查 Mojo 代码的工具。此模块包含编译 Mojo 函数并检查其汇编、LLVM IR 或目标代码输出的功能。"
---

# compile

提供编译和检查 Mojo 代码的工具。

此模块包含编译 Mojo 函数并检查其汇编、LLVM IR 或目标代码输出的功能。对于想要检查特定函数的底层实现细节而无需处理整个文件或手动调用编译工具的内核工程师特别有用。

主要功能：
- 将单个函数编译为汇编、LLVM IR 或目标代码
- 获取链接名称和模块信息
- 检查捕获数量和其他函数元数据
- 将编译输出写入文件
- 控制编译选项和目标

示例：
```mojo
from std.compile import compile_info

def my_func(x: Int) -> Int:
    return x

# 获取函数的汇编代码
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
