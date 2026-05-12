---
title: "collections/string"
sidebar_label: "collections/string"
description: "提供全面的 Unicode 字符串功能。核心特性：- UTF-8 编码的 Unicode 支持 - 高效的字符串切片和视图 - 字符串格式化和插值 - 内存安全的字符串操作。"
---

# collections/string

提供全面的 Unicode 字符串功能。

核心特性：

- UTF-8 编码的 Unicode 支持
- 高效的字符串切片和视图
- 字符串格式化和插值
- 内存安全的字符串操作
- Unicode 大小写转换
- Unicode 属性查找和验证

关键组件：

- [`String`](/docs/std/collections/string/string/String/):
  可变且拥有的字符串

  - 使用智能三模式分配策略：字符串字面量的静态内存引用，≤23 字节字符串的小字符串优化（SSO）（直接存储在 `String` 对象内，零分配成本），以及较大字符串的引用计数堆分配。此设计使绝大多数实际字符串极其快速。

  - Owns its data and manages memory automatically when heap-allocated.

  - Mutable and grows dynamically as needed.

- [`StringSlice`](/docs/std/collections/string/string_slice/StringSlice/):
  Non-owning string view

  - Performs zero heap allocations: stores only a pointer and length
  that reference existing string data owned by another object.

  - Does not own the data pointed to, so it can't outlive the data it
  references.

- [`StaticString`](/docs/std/collections/string/string_slice/#staticstring):
  Compile-time constant (immutable) string reference

  - Performs zero heap allocations: stores a pointer and length to a
  compile-time constant or static program memory.

  - References data with a static lifetime that exists for the entire program
  duration, unlike `StringSlice` which can reference temporary data.

- [`Codepoint`](/docs/std/collections/string/codepoint/Codepoint/):
  Unicode codepoint representation and operations

  - Represents a single Unicode codepoint as a 32-bit value.

  - Enables iteration over string contents at the Unicode codepoint level
  rather than byte level for proper Unicode text processing.

- [`format`](/docs/std/collections/string/format/): Built-in string
formatting and interpolation utilities.

:::note Note

String stores data using UTF-8, and all operations (unless clearly noted) are intended to
be fully Unicode compliant and maintain correct UTF-8 encoded data.
A handful of operations are known to not be Unicode / UTF-8 compliant yet, but will be
fixed as time permits.

:::

## 模块

- [string](/docs/std/collections/string/string)
- [codepoint](/docs/std/collections/string/codepoint)
- [format](/docs/std/collections/string/format)
- [iterators](/docs/std/collections/string/iterators)
- [string_slice](/docs/std/collections/string/string_slice)
