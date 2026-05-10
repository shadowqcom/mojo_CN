---
title: "value"
sidebar_label: "value"
description: "Defines core value traits.  These are Mojo built-ins, so you don't need to import them."
---

# value

Defines core value traits.

These are Mojo built-ins, so you don't need to import them.

## Traits

### Movable

`@explicit_destroy trait Movable`

**Methods:**

- **__init__**: `def __init__(out self, *, deinit take`

### Copyable

`@explicit_destroy trait Copyable(Movable)`

**Methods:**

- **__init__**: `def __init__(out self, *, copy`

- **copy**: `@always_inline def copy(self) -&gt; Self`

### ImplicitlyCopyable

`trait ImplicitlyCopyable(Copyable, ImplicitlyDestructible)`

### Defaultable

`trait Defaultable`

**Methods:**

- **__init__**: `def __init__(out self)`

### TrivialRegisterPassable

`trait TrivialRegisterPassable(
    ImplicitlyCopyable, ImplicitlyDestructible, Movable, RegisterPassable
)`

### RegisterPassable

`trait RegisterPassable(Movable)`
