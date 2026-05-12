---
title: "compiler"
sidebar_label: "compiler"
description: "提供编译器提示以防止基准测试代码被优化。此模块包含防止编译器优化掉正在基准测试的代码的工具。`keep()` 和 `black_box()` 函数向编译器提供提示，防止过度优化掉正在基准测试的代码。"
---

# compiler

提供编译器提示以防止基准测试代码被优化。

此模块包含防止编译器优化掉正在基准测试的代码的工具。
`keep()` 和 `black_box()` 函数向编译器提供提示，防止过度优化掉正在基准测试的代码。

## 函数

### keep

`@always_inline def keep[T`

### black_box

`@always_inline def black_box[
    T`

### black_box

`@always_inline def black_box[T`
