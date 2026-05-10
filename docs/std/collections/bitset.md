---
title: "bitset"
sidebar_label: "bitset"
description: "Provides a compact set of non-negative integers backed by inline storage.  Optimized for space (1 bit per element) and speed (O(1) operations). Offers set/clear/test/toggle and fast population count. "
---

# bitset

Provides a compact set of non-negative integers backed by inline storage.

Optimized for space (1 bit per element) and speed (O(1) operations).
Offers set/clear/test/toggle and fast population count.

Example:
```mojo
from std.collections import BitSet

var bs = BitSet[128]()  # 128-bit set, all clear
bs.set(42)              # Mark value 42 as present.
if bs.test(42):         # Check membership.
    print("hit")        # Prints "hit".
bs.clear(42)            # Remove 42.
print(len(bs))          # Prints 0.
```

## 类型

### BitSet

`struct BitSet[size`

**Fields:**

- `_words: InlineArray[Int64, Self._words_size]  # Payload storage.`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__(init`

- **__len__**: `@always_inline def __len__(self) -&gt; Int`

- **__bool__**: `@always_inline def __bool__(self) -&gt; Bool`

- **_zero_upper**: `@always_inline def _zero_upper(mut self)`

- **set**: `@always_inline def set(mut self, idx`

- **clear**: `@always_inline def clear(mut self, idx`

- **toggle**: `@always_inline def toggle(mut self, idx`

- **test**: `@always_inline def test(self, idx`

- **clear_all**: `def clear_all(mut self)`

- **toggle_all**: `def toggle_all(mut self)`

- **set_all**: `def set_all(mut self)`

- **_vectorize_apply**: `@always_inline @staticmethod def _vectorize_apply[
        func`

- **_intersect**: `@always_inline def _intersect[
            simd_width`

- **union**: `def union(self, other`

- **_union**: `@parameter @always_inline def _union[
            simd_width`

- **intersection**: `def intersection(self, other`

- **_intersection**: `@parameter @always_inline def _intersection[
            simd_width`

- **difference**: `def difference(self, other`

- **_difference**: `@parameter @always_inline def _difference[
            simd_width`

- **write_to**: `@no_inline def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

## 函数

### _word_index

`@always_inline def _word_index(idx`

### _bit_mask

`@always_inline def _bit_mask(idx`

### _check_index_bounds

`@always_inline def _check_index_bounds[operation_name`
