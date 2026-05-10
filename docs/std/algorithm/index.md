---
title: "algorithm"
sidebar_label: "algorithm"
description: "High performance data operations: vectorization, parallelization, reduction, memory.  The `algorithm` package provides high-performance primitives for data-parallel operations. It includes tools for v"
---

# algorithm

High performance data operations: vectorization, parallelization, reduction, memory.

The `algorithm` package provides high-performance primitives for data-parallel
operations. It includes tools for vectorization (SIMD operations on contiguous
data), parallelization (distributing work across multiple cores), and reduction
operations (aggregating values). These building blocks enable efficient
computational kernels without manual SIMD intrinsics or thread management.

Use this package for large datasets, numerical algorithms, or compute-intensive
code. For element-wise operations on small data, standard loops may be simpler.

## 模块

- [functional](/docs/std/algorithm/functional)
- [memory](/docs/std/algorithm/memory)
- [reduction](/docs/std/algorithm/reduction)
