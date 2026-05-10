---
title: "bencher"
sidebar_label: "bencher"
description: "Implements comprehensive benchmarking infrastructure with statistical analysis.  This module provides the core types and functions for running benchmarks with configurable execution parameters, statis"
---

# bencher

Implements comprehensive benchmarking infrastructure with statistical analysis.

This module provides the core types and functions for running benchmarks with
configurable execution parameters, statistical analysis, and formatted output.
It includes support for throughput metrics, warmup iterations, batch execution,
and both CPU and GPU kernel benchmarking.

## 类型

### BenchMetric

`@fieldwise_init struct BenchMetric(ImplicitlyCopyable, Writable)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `Writable`

**Fields:**

- `code: Int`
- `name: String`
- `unit: String`

**Methods:**

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **__eq__**: `def __eq__(self, other`

- **__ne__**: `def __ne__(self, other`

- **check_name**: `def check_name(self, alt_name`

- **get_metric_from_list**: `@staticmethod def get_metric_from_list(
        name`

### ThroughputMeasure

`@fieldwise_init struct ThroughputMeasure(ImplicitlyCopyable, Writable)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `Writable`

**Fields:**

- `metric: BenchMetric`
- `value: Int`

**Methods:**

- **__init__**: `def __init__(
        out self,
        name`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **compute**: `def compute(self, elapsed_sec`

### Format

`@fieldwise_init struct Format(ImplicitlyCopyable, Writable)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `Writable`

**Fields:**

- `value: StaticString`

**Methods:**

- **__init__**: `def __init__(out self, value`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **__eq__**: `def __eq__(self, other`

### BenchConfig

`@fieldwise_init struct BenchConfig(Copyable)`

**Implemented Traits:**

- `Copyable`

**Fields:**

- `out_file: Optional[Path]`
- `min_runtime_secs: Float64`
- `max_runtime_secs: Float64`
- `num_warmup_iters: Int`
- `max_batch_size: Int`
- `max_iters: Int`
- `num_repetitions: Int`
- `flush_denormals: Bool`
- `show_progress: Bool`
- `format: Format`
- `out_file_format: Format`
- `verbose_timing: Bool`
- `verbose_metric_names: Bool`

**Methods:**

- **__init__**: `def __init__(
        out self,
        out_file`

- **argparse**: `@parameter def argparse() raises`

### BenchId

`@fieldwise_init struct BenchId`

**Fields:**

- `func_name: String`
- `input_id: Optional[String]`

**Methods:**

- **__init__**: `def __init__(out self, func_name`

- **__init__**: `def __init__(out self, func_name`

- **__init__**: `def __init__(out self, func_name`

### BenchmarkInfo

`struct BenchmarkInfo(Copyable)`

**Implemented Traits:**

- `Copyable`

**Fields:**

- `name: String`
- `result: Report`
- `measures: List[ThroughputMeasure]`
- `verbose_timing: Bool`
- `result: Report,`
- `measures: List[ThroughputMeasure] = {},`

**Methods:**

- **__init__**: `def __init__(
        out self,
        name`

### Mode

`@fieldwise_init struct Mode(ImplicitlyCopyable)`

**Implemented Traits:**

- `ImplicitlyCopyable`

**Fields:**

- `value: Int`

**Methods:**

- **__eq__**: `def __eq__(self, other`

### Bench

`struct Bench(Writable)`

**Implemented Traits:**

- `Writable`

**Fields:**

- `config: BenchConfig`
- `mode: Mode`
- `info_vec: List[BenchmarkInfo]`
- `measures: List[ThroughputMeasure] = {},`
- `measures: List[ThroughputMeasure] = {},`
- `res: Report`
- `sep: String`

**Methods:**

- **__init__**: `def __init__(
        out self,
        config`

- **argparse**: `@parameter def argparse()`

- **check_mpirun**: `def check_mpirun(mut self) raises -&gt; Int`

- **append_output_suffix**: `def append_output_suffix(mut self, suffix`

- **bench_with_input**: `def bench_with_input[
        T`

- **input_closure**: `@parameter def input_closure(mut b`

- **bench_with_input**: `def bench_with_input[
        T`

- **input_closure**: `@parameter def input_closure(mut b`

- **bench_with_input**: `def bench_with_input[
        T`

- **input_closure**: `@parameter def input_closure(mut b`

- **bench_with_input**: `def bench_with_input[
        T`

- **input_closure**: `@parameter def input_closure(mut b`

- **bench_multicontext**: `@always_inline def bench_multicontext[
        bench_fn`

- **func_unified**: `@always_inline def func_unified(mut b`

- **bench_multicontext**: `@always_inline def bench_multicontext[
        FuncType`

- **per_gpu**: `@parameter def per_gpu(i`

- **context_closure**: `@parameter def context_closure(mut b`

- **bench_function**: `@always_inline def bench_function[
        bench_fn`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **bench_function**: `@always_inline def bench_function[
        FuncType`

- **bench_iter**: `@always_inline def bench_iter(
            mut b`

- **bench_function**: `@always_inline def bench_function[
        bench_fn`

- **bench_iter**: `@parameter @always_inline def bench_iter(mut b`

- **call_func**: `@parameter @always_inline def call_func()`

- **bench_function**: `def bench_function[
        bench_fn`

- **bench_with_abort_on_err**: `@parameter def bench_with_abort_on_err(mut b`

- **bench_function**: `def bench_function[
        FuncType`

- **_test**: `def _test[bench_fn`

- **func_unified**: `@always_inline def func_unified(mut b`

- **_test**: `def _test[
        FuncType`

- **_bench**: `def _bench[
        user_bench_fn`

- **func_unified**: `@always_inline def func_unified(mut b`

- **_bench**: `def _bench[
        FuncType`

- **bench_fn**: `@parameter def bench_fn(mut b`

- **benchmark_fn**: `@parameter @always_inline def benchmark_fn(num_iters`

- **dump_report**: `def dump_report(mut self) raises`

- **pad**: `def pad[
        pad_str`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **_get_max_name_width**: `def _get_max_name_width(self, label`

- **_get_max_iters_width**: `def _get_max_iters_width(self, label`

- **_get_metrics**: `def _get_metrics(self) -&gt; Dict[String, _Metric]`

- **_get_max_timing_widths**: `def _get_max_timing_widths(self, met_label`

### _Metric

`@fieldwise_init struct _Metric(Copyable)`

**Implemented Traits:**

- `Copyable`

**Fields:**

- `max_width: Int`
- `rates: Dict[Int, Float64]`

### Bencher

`@fieldwise_init struct Bencher(RegisterPassable)`

**Implemented Traits:**

- `RegisterPassable`

**Fields:**

- `num_iters: Int`
- `elapsed: Int`

**Methods:**

- **__init__**: `def __init__(out self, num_iters`

- **iter**: `def iter[iter_fn`

- **unified_closure**: `@always_inline def unified_closure() {}`

- **iter**: `def iter[IterFn`

- **iter_preproc**: `def iter_preproc[
        iter_fn`

- **iter_unified**: `@always_inline def iter_unified() {}`

- **preproc_unified**: `@always_inline def preproc_unified() {}`

- **iter_preproc**: `def iter_preproc[
        IterFn`

- **iter_custom**: `def iter_custom[iter_fn`

- **iter_custom**: `def iter_custom[
        FuncType`

- **iter_custom**: `def iter_custom[
        kernel_launch_fn`

- **iter_custom**: `def iter_custom[
        FuncType`

- **iter_custom**: `def iter_custom[
        kernel_launch_fn`

- **iter_custom**: `def iter_custom[
        FuncType`

- **iter_custom_multicontext**: `def iter_custom_multicontext[
        kernel_launch_fn`

- **iter**: `def iter[iter_fn`
