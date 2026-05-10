---
title: "itertools"
sidebar_label: "itertools"
description: "Provides iterator utilities for common iteration patterns.  This module includes functions for creating specialized iterators:  - `count()` - Creates an infinite counter with customizable start and st"
---

# itertools

Provides iterator utilities for common iteration patterns.

This module includes functions for creating specialized iterators:

- `count()` - Creates an infinite counter with customizable start and step values
- `cycle()` - Cycles through an iterable indefinitely
- `drop_while()` - Drops elements while predicate is true, then yields the rest
- `product()` - Computes the Cartesian product of two, three, or four iterables
- `repeat()` - Repeats an element a specified number of times
- `take_while()` - Yields elements while predicate is true

These utilities enable functional-style iteration patterns and composable iterator
operations.

## 类型

### _CountIterator

`@fieldwise_init struct _CountIterator(
    Iterable, IterableOwned, Iterator, TrivialRegisterPassable
)`

**Implemented Traits:**

- `Iterable`
- `IterableOwned`
- `Iterator`
- `TrivialRegisterPassable`

**Fields:**

- `start: Int`
- `step: Int`

**Methods:**

- **__iter__**: `@always_inline def __iter__(ref self) -&gt; Self.IteratorType[origin_of(self)]`

- **__iter__**: `@always_inline def __iter__(var self) -&gt; Self.IteratorOwnedType`

- **__next__**: `@always_inline def __next__(mut self) raises StopIteration -&gt; Int`

### _Product2

`@fieldwise_init struct _Product2[IteratorTypeA`

### _Product3

`@fieldwise_init struct _Product3[
    IteratorTypeA`

### _Product4

`@fieldwise_init struct _Product4[
    IteratorTypeA`

### _CycleIterator

`@fieldwise_init struct _CycleIterator[InnerIteratorType`

### _TakeWhileIterator

`@fieldwise_init struct _TakeWhileIterator[
    InnerIteratorType`

### _DropWhileIterator

`@fieldwise_init struct _DropWhileIterator[
    InnerIteratorType`

### _RepeatIterator

`@fieldwise_init struct _RepeatIterator[ElementType`
