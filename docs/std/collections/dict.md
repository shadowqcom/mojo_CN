---
title: "dict"
sidebar_label: "dict"
description: "Defines `Dict`, a collection that stores key-value pairs.  Dict provides an efficient, O(1) amortized average-time complexity for insert, lookup, and removal of dictionary elements. It uses a Swiss Ta"
---

# dict

Defines `Dict`, a collection that stores key-value pairs.

Dict provides an efficient, O(1) amortized
average-time complexity for insert, lookup, and removal of dictionary elements.
It uses a Swiss Table implementation with SIMD group probing for fast lookups:

- Performance and size are heavily optimized for small dictionaries, but can
  scale to large dictionaries.

- Insertion order is implicitly preserved. Iteration over keys, values, and
  items have a deterministic order based on insertion.

- For more information on the Mojo `Dict` type, see the
  [Mojo `Dict` manual](/docs/manual/types/#dict). To learn more about using
  Python dictionaries from Mojo, see
  [Python types in Mojo](/docs/manual/python/types/#python-types-in-mojo).

Key elements must implement the `KeyElement` trait composition, which includes
`Hashable`, `Equatable`, and `Copyable`. The `Copyable`
requirement will eventually be removed.

Value elements must be `Copyable`. As with `KeyElement`, the
`Copyable` requirement for value elements will eventually be removed.

See the `Dict` docs for more details.

## 类型

### DictKeyError

`struct DictKeyError[K`

**Methods:**

- **__init__**: `@doc_hidden def __init__(out self)`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

### EmptyDictError

`@fieldwise_init struct EmptyDictError(ImplicitlyCopyable, Writable)`

**Implemented Traits:**

- `ImplicitlyCopyable`
- `Writable`

**Methods:**

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

### _DictEntryIter

`@fieldwise_init struct _DictEntryIter[
    mut`

### _TakeDictEntryIter

`@fieldwise_init struct _TakeDictEntryIter[
    K`

### _DictEntryIterOwned

`@fieldwise_init struct _DictEntryIterOwned[
    K`

### _DictKeyIterOwned

`@fieldwise_init struct _DictKeyIterOwned[
    K`

### _DictKeyIter

`@fieldwise_init struct _DictKeyIter[
    mut`

### _DictValueIter

`@fieldwise_init struct _DictValueIter[
    mut`

### Dict

`struct Dict[
    K`

### OwnedKwargsDict

`struct OwnedKwargsDict[V`
