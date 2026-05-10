---
title: "atomic"
sidebar_label: "atomic"
description: "Atomic operations and memory orderings.  The `atomic` package provides the `Atomic` type for performing atomic read-modify-write operations on scalar values, along with the `Ordering` type for specify"
---

# atomic

Atomic operations and memory orderings.

The `atomic` package provides the `Atomic` type for performing atomic
read-modify-write operations on scalar values, along with the `Ordering`
type for specifying the memory ordering of those operations. It also
exposes the `fence` function to create standalone memory barriers.

Use this package when implementing lock-free data structures, reference
counting, or any other synchronization primitive that requires fine-grained
control over memory ordering between threads.

## 模块

- [atomic](/docs/std/atomic/atomic)
