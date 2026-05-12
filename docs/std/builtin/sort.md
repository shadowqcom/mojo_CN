---
title: "sort"
sidebar_label: "sort"
description: "实现内置的 `sort` 函数。这些是 Mojo 内置类型，因此您不需要导入它们。"
---

# sort

实现内置的 `sort` 函数。

这些是 Mojo 内置类型，因此您不需要导入它们。

## 类型

### _Pair

`struct _Pair[T`

## 函数

### _insertion_sort

`@always_inline def _insertion_sort[
    T`

### _quicksort_partition_right

`@always_inline def _quicksort_partition_right[
    T`

### _quicksort_partition_left

`@always_inline def _quicksort_partition_left[
    T`

### _heap_sort_fix_down

`def _heap_sort_fix_down[
    T`

### _heap_sort

`@always_inline def _heap_sort[
    T`

### _estimate_initial_height

`@always_inline def _estimate_initial_height(size`

### _delegate_small_sort

`@always_inline def _delegate_small_sort[
    T`
