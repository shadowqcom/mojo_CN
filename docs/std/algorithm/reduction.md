---
title: "reduction"
sidebar_label: "reduction"
description: "Implements SIMD reductions.  You can import these APIs from the `algorithm` package. For example:  ```mojo from std.algorithm import map_reduce ```"
---

# reduction

Implements SIMD reductions.

You can import these APIs from the `algorithm` package. For example:

```mojo
from std.algorithm import map_reduce
```

## 函数

### _get_nd_indices_from_flat_index

`@always_inline def _get_nd_indices_from_flat_index(
    flat_index`

### _reduce_generator

`@always_inline def _reduce_generator[
    num_reductions`

### _reduce_generator_wrapper

`@always_inline def _reduce_generator_wrapper[
    dtype`

### input_fn_wrapper

`@always_inline @parameter def input_fn_wrapper[
        _dtype`

### output_fn_wrapper

`@always_inline @parameter def output_fn_wrapper[
        _dtype`

### reduce_fn

`@always_inline @parameter def reduce_fn[
        ty`

### _reduce_generator

`@always_inline def _reduce_generator[
    input_0_fn`

### output_fn_wrapper

`@always_inline @parameter def output_fn_wrapper[
        dtype`

### reduce_fn_wrapper

`@always_inline @parameter def reduce_fn_wrapper[
        dtype`

### max

`@always_inline def max[
    dtype`

### input_fn_wrapper

`@always_inline @parameter def input_fn_wrapper[
        _dtype`

### output_fn_wrapper

`@always_inline @parameter def output_fn_wrapper[
        _dtype`

### reduce_impl

`@always_inline @parameter def reduce_impl[
        ty`

### min

`@always_inline def min[
    dtype`

### input_fn_wrapper

`@always_inline @parameter def input_fn_wrapper[
        _dtype`

### output_fn_wrapper

`@always_inline @parameter def output_fn_wrapper[
        _dtype`

### reduce_impl

`@always_inline @parameter def reduce_impl[
        ty`

### sum

`@always_inline def sum[
    dtype`

### input_fn_wrapper

`@always_inline @parameter def input_fn_wrapper[
        _dtype`

### output_fn_wrapper

`@always_inline @parameter def output_fn_wrapper[
        _dtype`

### reduce_impl

`@always_inline @parameter def reduce_impl[
        ty`

### product

`@always_inline def product[
    dtype`

### input_fn_wrapper

`@always_inline @parameter def input_fn_wrapper[
        _dtype`

### output_fn_wrapper

`@always_inline @parameter def output_fn_wrapper[
        _dtype`

### reduce_impl

`@always_inline @parameter def reduce_impl[
        ty`

### mean

`@always_inline def mean[
    dtype`

### description_fn

`@always_inline @parameter def description_fn() -&gt; String`

### reduce_impl

`@always_inline @parameter def reduce_impl[
            ty`

### input_fn_wrapper

`@always_inline @parameter def input_fn_wrapper[
            _dtype`

### wrapped_output_mul

`@parameter def wrapped_output_mul[
                _dtype`

### wrapped_output_div

`@parameter def wrapped_output_div[
                _dtype`

### map_reduce

`@always_inline @parameter def map_reduce[
    simd_width`

### output_fn

`@always_inline @parameter def output_fn[
        _dtype`

### map_reduce

`@always_inline @parameter def map_reduce[
    simd_width`

### reduce

`@always_inline @parameter def reduce[
    reduce_fn`

### input_fn

`@always_inline @parameter def input_fn[
        _dtype`

### output_fn

`@always_inline @parameter def output_fn[
        _dtype`

### reduce_fn_wrapper

`@always_inline @parameter def reduce_fn_wrapper[
        _dtype`

### reduce_boolean

`@always_inline @parameter def reduce_boolean[
    reduce_fn`

### _simd_max

`@always_inline def _simd_max[
    dtype`

### _simd_max_elementwise

`@always_inline @parameter def _simd_max_elementwise[
    acc_type`

### max

`def max[dtype`

### _simd_min

`@always_inline def _simd_min[
    dtype`

### _simd_min_elementwise

`@always_inline @parameter def _simd_min_elementwise[
    acc_type`

### min

`def min[dtype`

### _simd_sum

`@always_inline def _simd_sum[
    dtype`

### _simd_sum_elementwise

`@always_inline @parameter def _simd_sum_elementwise[
    acc_type`

### sum

`def sum[dtype`

### input_fn_1d

`@parameter @always_inline def input_fn_1d[
        dtype_`

### sum

`def sum[
    dtype`

### input_fn_nd

`@always_inline @parameter def input_fn_nd[
        _dtype`

### output_fn

`@always_inline @parameter def output_fn[
        _dtype`

### reduce_fn_wrapper

`@always_inline @parameter def reduce_fn_wrapper[
        dtype`

### _simd_product

`@always_inline def _simd_product[
    dtype`

### _simd_product_elementwise

`@always_inline @parameter def _simd_product_elementwise[
    acc_type`

### product

`def product[dtype`

### mean

`def mean[dtype`

### input_fn_1d

`@parameter @always_inline def input_fn_1d[
        dtype_`

### mean

`def mean[
    dtype`

### variance

`def variance[
    dtype`

### input_fn_1d

`def input_fn_1d[
        dtype_`

### variance

`def variance[
    dtype`

### input_fn_nd

`@always_inline @parameter def input_fn_nd[
        _dtype`

### output_fn

`@always_inline @parameter def output_fn[
        _dtype`

### reduce_fn_wrapper

`@always_inline @parameter def reduce_fn_wrapper[
        dtype`

### variance

`def variance[
    dtype`

### input_fn_1d

`@always_inline @parameter def input_fn_1d[
        dtype_`

### variance

`def variance[
    dtype`

### _cumsum_small

`@always_inline def _cumsum_small[
    dtype`

### cumsum

`def cumsum[
    dtype`
