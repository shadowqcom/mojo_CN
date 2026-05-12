---
title: "identifiable"
sidebar_label: "identifiable"
description: "定义用于基于身份比较的 Identifiable trait。此模块提供了 `Identifiable` trait，使类型能够使用 `is` 和 `is not` 运算符支持身份比较。"
---

# identifiable

定义用于基于身份比较的 Identifiable trait。

此模块提供了 `Identifiable` trait，使类型能够使用 `is` 和 `is not` 运算符支持身份比较。身份比较检查两个值是否引用同一个对象，这与检查两个值是否具有相同内容的相等比较不同。

## Traits

### Identifiable

`trait Identifiable`

**Methods:**

- **__is__**: `def __is__(self, rhs`

- **__isnot__**: `@always_inline def __isnot__(self, rhs`
