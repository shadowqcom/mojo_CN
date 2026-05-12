---
title: "hasher"
sidebar_label: "hasher"
description: "定义 Hasher trait 和默认哈希器实现。此模块提供用于实现哈希算法的 `Hasher` trait 和常见用例的默认哈希器实例。"
---

# hasher

定义 Hasher trait 和默认哈希器实现。

此模块提供用于实现哈希算法的 `Hasher` trait 和常见用例的默认哈希器实例。`default_hasher` 使用 AHash 进行运行时哈希，而 `default_comp_time_hasher` 使用 FNV-1a 进行编译时哈希。

## Traits

### Hasher

`trait Hasher`

**Methods:**

- **__init__**: `def __init__(out self)`

- **_update_with_bytes**: `def _update_with_bytes(mut self, data`

- **_update_with_simd**: `def _update_with_simd(mut self, value`

- **update**: `def update(mut self, value`

- **finish**: `def finish(var self) -&gt; UInt64`
