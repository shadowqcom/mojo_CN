---
title: "time"
slug: time
sidebar_label: "time"
description: "实现时间处理的基本工具。您可以从 `time` 包导入这些 API。例如：```mojo from std.time import perf_counter_ns ```"
---

# time

实现时间处理的基本工具。

您可以从 `time` 包导入这些 API。例如：

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
