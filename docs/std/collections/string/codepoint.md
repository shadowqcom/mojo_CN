---
title: "codepoint"
sidebar_label: "codepoint"
description: "Unicode codepoint handling.  This module provides the `Codepoint` type for representing single Unicode scalar values. A codepoint represents a single Unicode character, restricted to valid Unicode sca"
---

# codepoint

Unicode codepoint handling.

This module provides the `Codepoint` type for representing single Unicode scalar values.
A codepoint represents a single Unicode character, restricted to valid Unicode scalar
values in the ranges `0` to `0xD7FF` and `0xE000` to `0x10FFFF` inclusive.

## 类型

### Codepoint

`struct Codepoint(Comparable, ImplicitlyCopyable, Intable, Movable, Writable)`

**Implemented Traits:**

- `Comparable`
- `ImplicitlyCopyable`
- `Intable`
- `Movable`
- `Writable`

**Fields:**

- `_scalar_value: UInt32`
- `is_ascii: Bool`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, *, unsafe_unchecked_codepoint`

- **__init__**: `@always_inline def __init__(out self, codepoint`

- **from_u32**: `@staticmethod def from_u32(codepoint`

- **ord**: `@staticmethod def ord(string`

- **unsafe_decode_utf8_codepoint**: `@staticmethod def unsafe_decode_utf8_codepoint(
        s`

- **__lt__**: `def __lt__(self, other`

- **__int__**: `@always_inline def __int__(self) -&gt; Int`

- **write_to**: `def write_to(self, mut w`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

- **is_ascii**: `@always_inline def is_ascii(self) -&gt; Bool`

- **is_ascii_digit**: `def is_ascii_digit(self) -&gt; Bool`

- **is_ascii_upper**: `def is_ascii_upper(self) -&gt; Bool`

- **is_ascii_lower**: `def is_ascii_lower(self) -&gt; Bool`

- **_is_ascii_printable**: `@staticmethod @always_inline def _is_ascii_printable(codepoint`

- **is_ascii_printable**: `@always_inline def is_ascii_printable(self) -&gt; Bool`

- **is_python_space**: `@always_inline def is_python_space(self) -&gt; Bool`

- **is_posix_space**: `def is_posix_space(self) -&gt; Bool`

- **to_u32**: `@always_inline def to_u32(self) -&gt; UInt32`

- **unsafe_write_utf8**: `@always_inline def unsafe_write_utf8[
        optimize_ascii`

- **utf8_byte_length**: `@always_inline def utf8_byte_length(self) -&gt; Int`

## 函数

### _is_unicode_scalar_value

`@always_inline def _is_unicode_scalar_value(codepoint`
