---
title: "time"
sidebar_label: "time"
description: "Implements basic utils for working with time.  You can import these APIs from the `time` package. For example:  ```mojo from std.time import perf_counter_ns ```"
---

# time

Implements basic utils for working with time.

You can import these APIs from the `time` package. For example:

```mojo
from std.time import perf_counter_ns
```

## 类型

### _CTimeSpec

`@fieldwise_init struct _CTimeSpec(Defaultable, TrivialRegisterPassable, Writable)`

**Implemented Traits:**

- `Defaultable`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `tv_sec: Int  # Seconds`
- `tv_subsec: Int  # subsecond (nanoseconds on linux and usec on mac)`

**Methods:**

- **__init__**: `def __init__(out self)`

- **as_nanoseconds**: `def as_nanoseconds(self) -&gt; UInt`

- **write_to**: `@no_inline def write_to(self, mut writer`
