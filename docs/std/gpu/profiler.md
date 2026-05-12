---
title: "profiler"
sidebar_label: "profiler"
description: "此模块提供 GPU 性能分析功能。分析器模块通过简单的上下文管理器接口实现对 GPU 代码块的性能分析。包括：- ProfileBlock：用于计时代码块的上下文管理器"
---

# profiler

此模块提供 GPU 性能分析功能。

分析器模块通过简单的上下文管理器接口实现对 GPU 代码块的性能分析。包括：

- ProfileBlock：用于计时代码块的上下文管理器
- 可在编译时启用/禁用的可配置分析
- 使用 perf_counter_ns() 的纳秒精度计时
- 分析块的源代码位置跟踪
- 格式化的计时输出

示例：

```mojo
from std.gpu import profiler

with profiler.ProfileBlock("my_kernel"):
    # 要分析的代码
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
