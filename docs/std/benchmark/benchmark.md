---
title: "benchmark"
sidebar_label: "benchmark"
description: "Implements the benchmark module for runtime benchmarking.  You can import these APIs from the `benchmark` package. For example:  ```mojo from std.benchmark import run, Unit from std.time import sleep "
---

# benchmark

Implements the benchmark module for runtime benchmarking.

You can import these APIs from the `benchmark` package. For example:

```mojo
from std.benchmark import run, Unit
from std.time import sleep
```

You can pass any `fn` as a parameter into `run[...]()`, it will return
a `Report` where you can get the mean, duration, max, and more:

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

You can print a full report:

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

Or all the batch runs:

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

If you want to use a different time unit you can bring in the Unit and pass
it in as an argument:

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

The unit's are just aliases for string constants, so you can for example:

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

Benchmark.run takes four arguments to change the behaviour, to set warmup
iterations to 5:

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

To set 1 warmup iteration, 2 max iterations, a min total time of 3 sec, and a
max total time of 4 s:

```mojo
from std.benchmark import run
from std.time import sleep

def sleeper():
    sleep(.01)

var r = run[func2=sleeper](1, 2, 3, 4)
```

Note that benchmarking continues until `min_runtime_secs` has
elapsed and either `max_runtime_secs` OR `max_iters` is achieved.

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
