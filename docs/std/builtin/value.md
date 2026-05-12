---
title: "value"
sidebar_label: "value"
description: "定义核心值 trait。这些是 Mojo 内置类型，因此您不需要导入它们。"
---

# value

定义核心值 trait。

这些是 Mojo 内置类型，因此您不需要导入它们。

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
