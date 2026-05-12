---
title: "dict"
sidebar_label: "dict"
description: "定义 `Dict`，一个存储键值对的集合。Dict 为字典元素的插入、查找和删除提供了高效的 O(1) 平均时间复杂度。它使用瑞士表实现和 SIMD 组探测进行快速查找。"
---

# dict

定义 `Dict`，一个存储键值对的集合。

Dict 为字典元素的插入、查找和删除提供了高效的 O(1) 平均时间复杂度。它使用瑞士表实现和 SIMD 组探测进行快速查找：

- 性能和大小针对小型字典进行了高度优化，但也可以扩展到大型字典。

- 插入顺序被隐式保留。对键、值和项的迭代具有基于插入的确定性顺序。

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
