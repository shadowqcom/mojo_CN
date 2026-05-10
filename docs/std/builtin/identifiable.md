---
title: "identifiable"
sidebar_label: "identifiable"
description: "Defines the Identifiable trait for identity-based comparisons.  This module provides the `Identifiable` trait, which enables types to support identity comparison using the `is` and `is not` operators."
---

# identifiable

Defines the Identifiable trait for identity-based comparisons.

This module provides the `Identifiable` trait, which enables types to support
identity comparison using the `is` and `is not` operators. Identity comparison
checks if two values refer to the same object, distinct from equality
comparison which checks if two values have the same content.

## Traits

### Identifiable

`trait Identifiable`

**Methods:**

- **__is__**: `def __is__(self, rhs`

- **__isnot__**: `@always_inline def __isnot__(self, rhs`
