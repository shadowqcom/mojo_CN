---
title: "format_int"
sidebar_label: "format_int"
description: "提供 `hex` 和 `bin` 函数。这些是 Mojo 内置类型，因此您不需要导入它们。"
---

# format_int

提供 `hex` 和 `bin` 函数。

这些是 Mojo 内置类型，因此您不需要导入它们。

## 类型

### a

`struct anull-terminated buffer of single-byte char.
        var zero_buf`

**Methods:**

- **process_digits**: `@parameter def process_digits[
        get_digit_value`

- **pos_digit_value**: `def pos_digit_value(value`

- **floor_div**: `def floor_div(value`

- **neg_digit_value**: `def neg_digit_value(value`

- **ceil_div**: `def ceil_div(value`

## 函数

### bin

`def bin(num`

### bin

`def bin(b`

### bin

`def bin[T`

### hex

`def hex(value`

### hex

`def hex[T`

### hex

`def hex(value`

### oct

`def oct(value`

### oct

`def oct[T`

### oct

`def oct(value`

### _format_int

`def _format_int[
    dtype`

### _write_int

`def _write_int[
    dtype`
