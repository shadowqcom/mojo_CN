---
title: "list"
sidebar_label: "list"
description: "Defines the List type.  These APIs are imported automatically, just like builtins."
---

# list

Defines the List type.

These APIs are imported automatically, just like builtins.

## 类型

### _ListIter

`@fieldwise_init struct _ListIter[
    mut`

### _ListIterOwned

`@fieldwise_init struct _ListIterOwned[T`

**Fields:**

- `_list: List[Self.T]`
- `_index: Int`

**Methods:**

- **__del__**: `@always_inline def __del__(deinit self)`

- **__iter__**: `@always_inline def __iter__(var self) -&gt; Self.IteratorOwnedType`

- **__next__**: `def __next__(mut self) raises StopIteration -&gt; Self.Element`

- **bounds**: `@always_inline def bounds(self) -&gt; Tuple[Int, Optional[Int]]`

### List

`struct List[T`
