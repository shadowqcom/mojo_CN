---
title: "sys"
sidebar_label: "sys"
description: "系统运行时：I/O、硬件信息、内部函数、编译时工具。`sys` 包提供对系统功能和运行时信息的低级访问。"
---

# sys

系统运行时：I/O、硬件信息、内部函数、编译时工具。

`sys` 包提供对系统功能和运行时信息的低级访问。它包括与操作系统交互、查询硬件能力和访问编译器内部函数的工具。此包连接 Mojo 代码和底层系统环境。

使用此包进行系统级编程、硬件特定优化，或当您需要直接访问平台功能和编译器特性时。对于外部函数接口 (FFI) 功能，使用 `ffi` 模块。

## 模块

- [arg](/docs/std/sys/arg)
- [compile](/docs/std/sys/compile)
- [debug](/docs/std/sys/debug)
- [defines](/docs/std/sys/defines)
- [info](/docs/std/sys/info)
- [intrinsics](/docs/std/sys/intrinsics)
- [terminate](/docs/std/sys/terminate)
