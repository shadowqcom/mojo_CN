---
title: "benchmark"
slug: benchmark
sidebar_label: "benchmark"
description: "实现运行时基准测试的 benchmark 模块。您可以从 `benchmark` 包导入这些 API。例如：```mojo from std.benchmark import run, Unit from std.time import sleep "
---

# benchmark

实现运行时基准测试的 benchmark 模块。

您可以从 `benchmark` 包导入这些 API。例如：

```mojo
from std.benchmark import run, Unit
from std.time import sleep
```

您可以将任何 `fn` 作为参数传递给 `run[...]()`,它将返回一个 `Report`,您可以从中获取平均值、持续时间、最大值等信息：

```mojo
from std.benchmark import run
from std.time import sleep

def sleeper():
    sleep(.01)

var report = run[func2=sleeper]()
print(report.mean())
```

```output
0.012256487394957985
```

您可以打印完整报告：

```mojo
from std.benchmark import run
from std.time import sleep

def sleeper():
    sleep(.01)

var report = run[func2=sleeper]()
report.print()
```

```output
---------------------
Benchmark Report (s)
---------------------
Mean: 0.012265747899159664
Total: 1.459624
Iters: 119
Warmup Total: 0.025020000000000001
Fastest Mean: 0.0121578
Slowest Mean: 0.012321428571428572

```

或者查看所有批量运行：

```mojo
from std.benchmark import run
from std.time import sleep

def sleeper():
    sleep(.01)

var report = run[func2=sleeper]()
report.print_full()
```

```output
---------------------
Benchmark Report (s)
---------------------
Mean: 0.012368649122807017
Total: 1.410026
Iters: 114
Warmup Total: 0.023341000000000001
Fastest Mean: 0.012295586956521738
Slowest Mean: 0.012508099999999999

Batch: 1
Iterations: 20
Mean: 0.012508099999999999
Duration: 0.250162

Batch: 2
Iterations: 46
Mean: 0.012295586956521738
Duration: 0.56559700000000002

Batch: 3
Iterations: 48
Mean: 0.012380562499999999
Duration: 0.59426699999999999
```

如果您想使用不同的时间单位，可以导入 Unit 并将其作为参数传递：

```mojo
from std.benchmark import run, Unit
from std.time import sleep

def sleeper():
    sleep(.01)

var report = run[func2=sleeper]()
report.print(Unit.ms)
```

```output
---------------------
Benchmark Report (ms)
---------------------
Mean: 0.012312411764705882
Total: 1.465177
Iters: 119
Warmup Total: 0.025010999999999999
Fastest Mean: 0.012015649999999999
Slowest Mean: 0.012421204081632654
```

单位只是字符串常量的别名，因此您可以这样做：

```mojo
from std.benchmark import run
from std.time import sleep

def sleeper():
    sleep(.01)

var report = run[func2=sleeper]()
print(report.mean("ms"))
```

```output
12.199145299145298
```

Benchmark.run 接受四个参数来更改行为，将预热迭代设置为 5：

```mojo
from std.benchmark import run
from std.time import sleep

def sleeper():
    sleep(.01)

var r = run[func2=sleeper](5)
```

```output
0.012004808080808081
```

设置 1 次预热迭代、2 次最大迭代、最小总时间 3 秒和最大总时间 4 秒：

```mojo
from std.benchmark import run
from std.time import sleep

def sleeper():
    sleep(.01)

var r = run[func2=sleeper](1, 2, 3, 4)
```

请注意，基准测试会持续进行，直到 `min_runtime_secs` 已经过去，并且达到 `max_runtime_secs` 或 `max_iters` 中的任意一个。

## 类型

### Batch

`@fieldwise_init struct Batch(TrivialRegisterPassable, Writable)`

**Implemented Traits:**

- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `duration: Int`
- `iterations: Int`
- `_is_significant: Bool`

**Methods:**

- **mean**: `def mean(self, unit`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

### Unit

`struct Unit`

**Methods:**

- **_divisor**: `@staticmethod def _divisor(unit`

### Report

`@fieldwise_init struct Report(Copyable, Defaultable)`

**Implemented Traits:**

- `Copyable`
- `Defaultable`

**Fields:**

- `warmup_duration: Int`
- `runs: List[Batch]`
- `lines: List[String] = [`

**Methods:**

- **__init__**: `def __init__(out self)`

- **iters**: `def iters(self) -&gt; Int`

- **duration**: `def duration(self, unit`

- **mean**: `def mean(self, unit`

- **min**: `def min(self, unit`

- **max**: `def max(self, unit`

- **as_string**: `def as_string(self, unit`

- **print**: `def print(self, unit`

- **print_full**: `def print_full(self, unit`

### _RunOptions

`struct _RunOptions[timing_fn`
