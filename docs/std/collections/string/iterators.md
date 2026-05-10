---
title: "iterators"
sidebar_label: "iterators"
description: "Implements the iterators and related utilities for efficient string operations."
---

# iterators

Implements the iterators and related utilities for efficient string
operations.

## 类型

### CodepointSliceIter

`struct CodepointSliceIter[
    mut`

### this

`struct thistype.
    @doc_hidden
    def __init__(out self, str_slice`

**Fields:**

- `result: Optional[StringSlice[Self.origin]] = self.peek_next()`
- `result: Optional[StringSlice[Self.origin]] = self.peek_back()`

**Methods:**

- **__iter__**: `def __iter__(ref self) -&gt; Self.IteratorType[origin_of(self)]`

- **__next__**: `@always_inline def __next__(mut self) raises StopIteration -&gt; StringSlice[Self.origin]`

- **__len__**: `@always_inline def __len__(self) -&gt; Int`

- **peek_next**: `def peek_next(self) -&gt; Optional[StringSlice[Self.origin]]`

- **peek_back**: `def peek_back(mut self) -&gt; Optional[StringSlice[Self.origin]]`

- **next**: `def next(mut self) -&gt; Optional[StringSlice[Self.origin]]`

- **next_back**: `def next_back(mut self) -&gt; Optional[StringSlice[Self.origin]]`

### CodepointsIter

`struct CodepointsIter[mut`

### this

`struct thistype.
    @doc_hidden
    def __init__(out self, str_slice`

**Fields:**

- `result: Optional[Codepoint] = self.peek_next()`

**Methods:**

- **__iter__**: `@doc_hidden def __iter__(ref self) -&gt; Self.IteratorType[origin_of(self)]`

- **__next__**: `def __next__(mut self) raises StopIteration -&gt; Codepoint`

- **__len__**: `@always_inline def __len__(self) -&gt; Int`

- **peek_next**: `def peek_next(self) -&gt; Optional[Codepoint]`

- **next**: `def next(mut self) -&gt; Optional[Codepoint]`

### GraphemeSliceIter

`struct GraphemeSliceIter[
    mut`

### GraphemeIndicesIter

`struct GraphemeIndicesIter[mut`
