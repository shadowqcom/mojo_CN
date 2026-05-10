---
title: "range"
sidebar_label: "range"
description: "Implements a 'range' call.  These are Mojo built-ins, so you don't need to import them."
---

# range

Implements a 'range' call.

These are Mojo built-ins, so you don't need to import them.

## 类型

### _ZeroStartingRange

`struct _ZeroStartingRange(
    Iterable, Iterator, ReversibleRange, Sized, TrivialRegisterPassable
)`

**Implemented Traits:**

- `Iterable`
- `Iterator`
- `ReversibleRange`
- `Sized`
- `TrivialRegisterPassable`

**Fields:**

- `curr: Int`
- `end: Int`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, end`

- **__iter__**: `@always_inline def __iter__(ref self) -&gt; Self.IteratorType[origin_of(self)]`

- **__next__**: `@always_inline def __next__(mut self) raises StopIteration -&gt; Int`

- **__len__**: `@always_inline def __len__(self) -&gt; Int`

- **__getitem__**: `@always_inline def __getitem__[I`

- **__reversed__**: `@always_inline def __reversed__(self) -&gt; _StridedRange`

- **bounds**: `@always_inline def bounds(self) -&gt; Tuple[Int, Optional[Int]]`

### _SequentialRange

`struct _SequentialRange(
    Iterable, Iterator, ReversibleRange, Sized, TrivialRegisterPassable
)`

**Implemented Traits:**

- `Iterable`
- `Iterator`
- `ReversibleRange`
- `Sized`
- `TrivialRegisterPassable`

**Fields:**

- `start: Int`
- `end: Int`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, start`

- **__iter__**: `@always_inline def __iter__(ref self) -&gt; Self.IteratorType[origin_of(self)]`

- **__next__**: `@always_inline def __next__(mut self) raises StopIteration -&gt; Int`

- **__len__**: `@always_inline def __len__(self) -&gt; Int`

- **__getitem__**: `@always_inline def __getitem__[I`

- **__reversed__**: `@always_inline def __reversed__(self) -&gt; _StridedRange`

- **bounds**: `@always_inline def bounds(self) -&gt; Tuple[Int, Optional[Int]]`

### _StridedRangeIterator

`@fieldwise_init struct _StridedRangeIterator(
    Iterable, Iterator, Sized, TrivialRegisterPassable
)`

**Implemented Traits:**

- `Iterable`
- `Iterator`
- `Sized`
- `TrivialRegisterPassable`

**Fields:**

- `start: Int`
- `end: Int`
- `step: Int`

**Methods:**

- **__iter__**: `@always_inline def __iter__(ref self) -&gt; Self.IteratorType[origin_of(self)]`

- **__len__**: `@always_inline def __len__(self) -&gt; Int`

- **__next__**: `@always_inline def __next__(mut self) raises StopIteration -&gt; Int`

- **__has_next__**: `@always_inline def __has_next__(self) -&gt; Bool`

- **bounds**: `@always_inline def bounds(self) -&gt; Tuple[Int, Optional[Int]]`

### _StridedRange

`struct _StridedRange(
    Iterable, Iterator, ReversibleRange, Sized, TrivialRegisterPassable
)`

**Implemented Traits:**

- `Iterable`
- `Iterator`
- `ReversibleRange`
- `Sized`
- `TrivialRegisterPassable`

**Fields:**

- `start: Int`
- `end: Int`
- `step: Int`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, start`

- **__iter__**: `@always_inline def __iter__(ref self) -&gt; Self.IteratorType[origin_of(self)]`

- **__next__**: `@always_inline def __next__(mut self) raises StopIteration -&gt; Int`

- **__len__**: `@always_inline def __len__(self) -&gt; Int`

- **__getitem__**: `@always_inline def __getitem__[I`

- **__reversed__**: `@always_inline def __reversed__(self) -&gt; _StridedRange`

- **bounds**: `@always_inline def bounds(self) -&gt; Tuple[Int, Optional[Int]]`

### _ZeroStartingScalarRange

`struct _ZeroStartingScalarRange[dtype`

### _SequentialScalarRange

`struct _SequentialScalarRange[dtype`

### _StridedScalarRange

`@fieldwise_init struct _StridedScalarRange[dtype`

## 函数

### _sign

`@always_inline def _sign(x`
