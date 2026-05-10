---
title: "anytype"
sidebar_label: "anytype"
description: "Defines the core traits for object lifetime management in Mojo.  This module provides the foundational traits that define how objects are created, managed and destroyed in Mojo:  - `AnyType`: The most"
---

# anytype

Defines the core traits for object lifetime management in Mojo.

This module provides the foundational traits that define how objects are created,
managed and destroyed in Mojo:

- `AnyType`: The most basic trait that all types extend by default.
   Types with this trait have no destructor and no lifetime management.

- `ImplicitlyDestructible`: The base trait for types that require lifetime
   management through destructors. Any type that needs cleanup when it goes out
   of scope should implement this trait.

These traits are built into Mojo and do not need to be imported.

## Traits

### AnyType

`trait AnyType`

### ImplicitlyDestructible

`trait ImplicitlyDestructible`

**Methods:**

- **__del__**: `def __del__(deinit self, /)`
