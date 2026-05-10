---
title: "profiler"
sidebar_label: "profiler"
description: "This module provides GPU profiling functionality.  The profiler module enables performance profiling of GPU code blocks through a simple context manager interface. It includes:  - ProfileBlock: A cont"
---

# profiler

This module provides GPU profiling functionality.

The profiler module enables performance profiling of GPU code blocks through a simple
context manager interface. It includes:

- ProfileBlock: A context manager for timing code blocks
- Configurable profiling that can be enabled/disabled at compile time
- Nanosecond precision timing using perf_counter_ns()
- Source location tracking for profiled blocks
- Formatted timing output

Example:

```mojo
from std.gpu import profiler

with profiler.ProfileBlock("my_kernel"):
    # Code to profile
    pass
```

## 类型

### ProfileBlock

`@fieldwise_init struct ProfileBlock[enabled`

**Fields:**

- `name: StaticString`
- `loc: SourceLocation`
- `start_time: UInt`

**Methods:**

- **__init__**: `@always_inline def __init__(out self, name`

- **__enter__**: `@always_inline def __enter__(mut self)`

- **__exit__**: `@always_inline def __exit__(mut self)`
