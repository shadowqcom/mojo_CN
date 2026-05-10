---
title: "iter"
sidebar_label: "iter"
description: "Iteration traits and utilities: Iterable, IterableOwned, Iterator, enumerate, zip, map.  This package defines the core iteration protocol for Mojo through the `Iterable`, `IterableOwned`, and `Iterato"
---

# iter

Iteration traits and utilities: Iterable, IterableOwned, Iterator,
enumerate, zip, map.

This package defines the core iteration protocol for Mojo through the
`Iterable`, `IterableOwned`, and `Iterator` traits. Types that conform to
these traits can be used with `for` loops and iteration utilities like
`enumerate()`, `zip()`, and `map()`.

The iteration protocol consists of three key traits:

- `Iterable`: Types that can produce an iterator by borrowing (`ref self`).
  The iterator borrows the collection and yields references or copies of
  elements without consuming the source.
- `IterableOwned`: Types that can produce an iterator by taking ownership
  (`var self`). The iterator consumes the collection, taking ownership of
  its elements.
- `Iterator`: Types that can produce a sequence of values one at a time.

Examples:

```mojo
from std.iter import enumerate, zip, map

# Enumerate with index
var items = ["a", "b", "c"]
for index, value in enumerate(items):
    print(index, value)

# Zip multiple iterables
var numbers = [1, 2, 3]
var letters = ["x", "y", "z"]
for num, letter in zip(numbers, letters):
    print(num, letter)

# Map a function over an iterable
def square(x: Int) -> Int:
    return x * x
var values = [1, 2, 3, 4]
for squared in map[square](values):
    print(squared)
```
