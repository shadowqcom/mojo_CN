---
title: "quick_bench"
sidebar_label: "quick_bench"
description: "提供简化的基准测试接口，自动处理样板代码。此模块实现了 `QuickBench` 类型，它封装了完整的 `Bench` 基础设施，为常见基准测试任务提供更简单的接口。"
---

# quick_bench

提供简化的基准测试接口，自动处理样板代码。

此模块实现了 `QuickBench` 类型，它封装了完整的 `Bench` 基础设施，为常见基准测试任务提供更简单的接口。它自动处理 `Bencher` 设置和防止优化所需的 `keep()` 调用，支持 0-10 个参数的函数。

## 类型

### QuickBench

`struct QuickBench`

**Fields:**

- `m: Bench`

**Methods:**

- **__init__**: `@always_inline def __init__(out self) raises`

- **dump_report**: `@always_inline def dump_report(mut self) raises`

- **run**: `@always_inline def run[
        T_out`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **run**: `@always_inline def run[
        T0`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **run**: `@always_inline def run[
        T0`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **run**: `@always_inline def run[
        T0`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **run**: `@always_inline def run[
        T0`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **run**: `@always_inline def run[
        T0`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **run**: `@always_inline def run[
        T0`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **run**: `@always_inline def run[
        T0`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **run**: `@always_inline def run[
        T0`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **run**: `@always_inline def run[
        T0`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **run**: `@always_inline def run[
        T0`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`
