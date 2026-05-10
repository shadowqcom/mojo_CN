---
title: "runner"
sidebar_label: "runner"
description: "Implements the property test runner and configuration."
---

# runner

Implements the property test runner and configuration.

## 类型

### PropTestConfig

`struct PropTestConfig(Copyable)`

**Implemented Traits:**

- `Copyable`

**Fields:**

- `runs: Int`
- `seed: Int`

**Methods:**

- **__init__**: `def __init__(out self, *, runs`

### PropTest

`struct PropTest(Movable)`

**Implemented Traits:**

- `Movable`

**Fields:**

- `_config: PropTestConfig`

**Methods:**

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__(out self, *, var config`

- **test**: `def test[
        StrategyType`

### _PropTestError

`struct _PropTestError(Copyable, Writable)`

**Implemented Traits:**

- `Copyable`
- `Writable`

**Fields:**

- `runs: Int`
- `seed: Int`
- `error: Error`

**Methods:**

- **__init__**: `def __init__(out self, *, runs`

- **write_to**: `def write_to(self, mut writer`
