---
title: "interval"
sidebar_label: "interval"
description: "自平衡区间树是一种专门设计的二叉搜索树，用于高效存储和查询区间。它维护按低端点排序的区间，并用 `max_high` 属性增强每个节点。"
---

# interval

自平衡区间树是一种专门设计的二叉搜索树，用于高效存储和查询区间。

它维护按低端点排序的区间，并用 `max_high` 属性增强每个节点，表示其子树中的最大高端点。此 `max_high` 值通过修剪搜索空间实现高效的重叠搜索。自平衡机制（如红黑树或 AVL 树）确保操作的对数时间复杂度。

关键特性：
  - 存储区间（低，高）。
  - 节点按 `low` 端点排序。
  - `max_high` attribute at each node for efficient overlap search.
  - Self-balancing (e.g., using Red-Black tree logic) for O(log n) operations.

Operations:
  - Insertion: O(log n) - Adds a new interval, maintaining balance and updating
    `max_high`.
  - Overlap Search: O(log n) - Finds intervals overlapping a query interval using
    `max_high` for pruning.
  - Deletion: O(log n) - Removes an interval, maintaining balance and updating
    `max_high`.

Space Complexity: O(n), where n is the number of intervals.

Use Cases:
  - Calendar scheduling
  - Computational geometry
  - Genomics
  - Database indexing
  - Resource allocation

In essence, this data structure provides a fast and efficient way to manage and
query interval data, particularly for finding overlaps.

## 类型

### Interval

`struct Interval[T`

### _IntervalNode

`struct _IntervalNode[
    T`

### IntervalTree

`struct IntervalTree[
    T`

## Traits

### IntervalElement

`trait IntervalElement(Comparable, Copyable, Intable, Writable)`

**Methods:**

- **__sub__**: `def __sub__(self, rhs`
