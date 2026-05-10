---
title: "hasher"
sidebar_label: "hasher"
description: "Defines the Hasher trait and default hasher implementations.  This module provides the `Hasher` trait for implementing hash algorithms and default hasher instances for common use cases. The `default_h"
---

# hasher

Defines the Hasher trait and default hasher implementations.

This module provides the `Hasher` trait for implementing hash algorithms and
default hasher instances for common use cases. The `default_hasher` uses AHash
for runtime hashing, while `default_comp_time_hasher` uses FNV-1a for
compile-time hashing.

## Traits

### Hasher

`trait Hasher`

**Methods:**

- **__init__**: `def __init__(out self)`

- **_update_with_bytes**: `def _update_with_bytes(mut self, data`

- **_update_with_simd**: `def _update_with_simd(mut self, value`

- **update**: `def update(mut self, value`

- **finish**: `def finish(var self) -&gt; UInt64`
