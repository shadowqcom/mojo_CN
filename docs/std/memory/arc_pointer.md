---
title: "arc_pointer"
sidebar_label: "arc_pointer"
description: "Reference-counted smart pointers.  You can import these APIs from the `memory` package. For example:  ```mojo from std.memory import ArcPointer ```"
---

# arc_pointer

Reference-counted smart pointers.

You can import these APIs from the `memory` package. For example:

```mojo
from std.memory import ArcPointer
```

## 类型

### _ArcPointerInner

`@doc_hidden struct _ArcPointerInner[T`

**Fields:**

- `strong: Atomic[DType.uint64]`
- `weak: Atomic[DType.uint64]`
- `payload: UnsafeMaybeUninit[Self.T]`

**Methods:**

- **__init__**: `@doc_hidden def __init__(out self, var value`

- **add_strong**: `def add_strong(mut self)`

- **drop_strong**: `def drop_strong(mut self) -&gt; Bool`

- **try_add_strong**: `def try_add_strong(mut self) -&gt; Bool`

- **strong_count**: `def strong_count(self) -&gt; UInt64`

- **add_weak**: `def add_weak(mut self)`

- **drop_weak**: `def drop_weak(mut self) -&gt; Bool`

- **weak_count_with_implicit**: `def weak_count_with_implicit(self) -&gt; UInt64`

- **destroy_payload**: `def destroy_payload(mut self)`

- **payload_ref**: `def payload_ref(ref self) -&gt; ref[self.payload._array] Self.T`

### ArcPointer

`struct ArcPointer[T`

### WeakPointer

`struct WeakPointer[T`
