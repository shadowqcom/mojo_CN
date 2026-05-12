---
title: "compile"
sidebar_label: "compile"
description: "实现返回编译时信息的函数。"
---

# compile

实现返回编译时信息的函数。

## 类型

### _OptimizationLevel

`@fieldwise_init struct _OptimizationLevel(ImplicitlyCopyable, Intable, Writable)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `Intable`
- `Writable`

**Methods:**

- **__int__**: `def __int__(self) -&gt; Int`

- **write_to**: `@no_inline def write_to(self, mut writer`

### _DebugLevel

`@fieldwise_init struct _DebugLevel(ImplicitlyCopyable, Writable)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `Writable`

**Methods:**

- **write_to**: `@no_inline def write_to(self, mut writer`

## 函数

### codegen_unreachable

`def codegen_unreachable[cond`
