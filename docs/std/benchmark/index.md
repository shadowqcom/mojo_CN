---
title: "benchmark"
sidebar_label: "benchmark"
description: "性能基准测试：统计分析和详细报告。`benchmark` 包提供了测量和分析 Mojo 代码性能的工具。它支持统计基准测试，包括自动预热、批量执行和综合报告。"
---

# benchmark

性能基准测试：统计分析和详细报告。

`benchmark` 包提供了测量和分析 Mojo 代码性能的工具。它支持统计基准测试，包括自动预热、批量执行和综合报告，包括多次运行的平均值、最小值、最大值和总时间统计。

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
Warmup Mean: 0.01251
Warmup Total: 0.025020000000000001
Warmup Iters: 2
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
Warmup Mean: 0.0116705
Warmup Total: 0.023341000000000001
Warmup Iters: 2
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
Warmup Mean: 0.012505499999999999
Warmup Total: 0.025010999999999999
Warmup Iters: 2
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

请注意，最小总时间将优先于最大迭代次数

## 模块

- [bencher](/docs/std/benchmark/bencher)
- [benchmark](/docs/std/benchmark/benchmark)
- [compiler](/docs/std/benchmark/compiler)
- [memory](/docs/std/benchmark/memory)
- [quick_bench](/docs/std/benchmark/quick_bench)
