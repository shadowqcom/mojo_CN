---
title: "quick_bench"
sidebar_label: "quick_bench"
description: "Provides simplified benchmarking interface with automatic boilerplate handling.  This module implements the `QuickBench` type, which wraps the full `Bench` infrastructure to provide a simpler interfac"
---

# quick_bench

Provides simplified benchmarking interface with automatic boilerplate handling.

This module implements the `QuickBench` type, which wraps the full `Bench`
infrastructure to provide a simpler interface for common benchmarking tasks. It
automatically handles `Bencher` setup and the `keep()` calls needed to prevent
optimization, supporting functions with 0-10 arguments.

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
