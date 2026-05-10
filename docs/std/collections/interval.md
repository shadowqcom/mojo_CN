---
title: "interval"
sidebar_label: "interval"
description: "A self-balancing interval tree is a specialized binary search tree designed to efficiently store and query intervals.  It maintains intervals sorted by their low endpoints and augments each node with "
---

# interval

A self-balancing interval tree is a specialized binary search tree designed to
efficiently store and query intervals.

It maintains intervals sorted by their low endpoints and augments each node with a
`max_high` attribute, representing the maximum high endpoint in its subtree. This
`max_high` value enables efficient overlap searching by pruning the search space.
Self-balancing mechanisms, such as Red-Black or AVL trees, ensure logarithmic time
complexity for operations.

Key Features:
  - Stores intervals (low, high).
  - Nodes ordered by `low` endpoints.
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
