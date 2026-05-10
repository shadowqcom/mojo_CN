---
title: "testing"
sidebar_label: "testing"
description: "Implements various testing utils.  You can import these APIs from the `testing` package. For example:  ```mojo from std.testing import assert_true  def main() raises:     x = 1     y = 2     try:     "
---

# testing

Implements various testing utils.

You can import these APIs from the `testing` package. For example:

```mojo
from std.testing import assert_true

def main() raises:
    x = 1
    y = 2
    try:
        assert_true(x==1)
        assert_true(y==2)
        assert_true((x+y)==3)
        print("All assertions succeeded")
    except e:
        print("At least one assertion failed:")
        print(e)
```

## 类型

### assert_raises

`struct assert_raises`

**Fields:**

- `message_contains: Optional[String]`
- `call_location: SourceLocation`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, *, location`

- **__init__**: `@always_inline def __init__(
        out self,
        *,
        contains`

- **__enter__**: `def __enter__(self)`

- **__exit__**: `def __exit__(self) raises`

- **__exit__**: `def __exit__[E`

## 函数

### _assert_error

`@always_inline def _assert_error[T`

### assert_true

`@always_inline def assert_true[
    T`

### assert_false

`@always_inline def assert_false[
    T`

### assert_equal

`@always_inline def assert_equal[
    T`

### assert_equal

`@always_inline def assert_equal[
    O1`

### assert_equal

`@always_inline def assert_equal(
    lhs`

### assert_equal_pyobj

`@always_inline def assert_equal_pyobj[
    LHS`

### assert_not_equal

`@always_inline def assert_not_equal[
    T`

### assert_almost_equal

`@always_inline def assert_almost_equal[
    dtype`

### assert_is

`@always_inline def assert_is[
    T`

### assert_is_not

`@always_inline def assert_is_not[
    T`

### _colorize_diff_string

`def _colorize_diff_string[color`

### _create_colored_diff

`def _create_colored_diff(lhs`

### _assert_cmp_error

`def _assert_cmp_error[
    cmp`
