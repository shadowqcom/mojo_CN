# benchmark

Implements the benchmark module for runtime benchmarking.

You can import these APIs from the `benchmark` package. For example:

```
import benchmarkfrom time import sleep
```

You can pass any `fn` as a parameter into `benchmark.run[...]()`, it will return a `Report` where you can get the mean, duration, max, and more:

```
fn sleeper():    sleep(.01)var report = benchmark.run[sleeper]()print(report.mean())
```

```
0.012256487394957985
```

You can print a full report:

```
report.print()
```

```
---------------------Benchmark Report (s)---------------------Mean: 0.012265747899159664Total: 1.459624Iters: 119Warmup Mean: 0.01251Warmup Total: 0.025020000000000001Warmup Iters: 2Fastest Mean: 0.0121578Slowest Mean: 0.012321428571428572
```

Or all the batch runs:

```
report.print_full()
```

```
---------------------Benchmark Report (s)---------------------Mean: 0.012368649122807017Total: 1.410026Iters: 114Warmup Mean: 0.0116705Warmup Total: 0.023341000000000001Warmup Iters: 2Fastest Mean: 0.012295586956521738Slowest Mean: 0.012508099999999999Batch: 1Iterations: 20Mean: 0.012508099999999999Duration: 0.250162Batch: 2Iterations: 46Mean: 0.012295586956521738Duration: 0.56559700000000002Batch: 3Iterations: 48Mean: 0.012380562499999999Duration: 0.59426699999999999
```

If you want to use a different time unit you can bring in the Unit and pass it in as an argument:

```
from benchmark import Unitreport.print(Unit.ms)
```

```
---------------------Benchmark Report (ms)---------------------Mean: 0.012312411764705882Total: 1.465177Iters: 119Warmup Mean: 0.012505499999999999Warmup Total: 0.025010999999999999Warmup Iters: 2Fastest Mean: 0.012015649999999999Slowest Mean: 0.012421204081632654
```

The unit's are just aliases for `StringLiteral`, so you can for example:

```
print(report.mean("ms"))
```

```
12.199145299145298
```

Benchmark.run takes four arguments to change the behaviour, to set warmup iterations to 5:

```
r = benchmark.run[sleeper](5)
```

```
0.012004808080808081
```

To set 1 warmup iteration, 2 max iterations, a min total time of 3 sec, and a max total time of 4 s:

```
r = benchmark.run[sleeper](1, 2, 3, 4)
```

Note that the min total time will take precedence over max iterations

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

## `Batch`

A batch of benchmarks, the benchmark.run() function works out how many iterations to run in each batch based the how long the previous iterations took.

**Fields:**

- ​**duration** (`Int`): Total duration of batch stored as nanoseconds.

- ​**iterations** (`Int`): Total iterations in the batch.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `Movable`

**Methods:**

### `mean`

`mean(self: Self, unit: String) -> SIMD[f64, 1]`

Returns the average duration of the batch.

**Args:**

- ​**unit** (`String`): The time unit to display for example: ns, ms, s (default `s`).

**Returns:**

The average duration of the batch.

## `Unit`

Time Unit used by Benchmark Report.

**Aliases:**

- ​`ns = "ns"`: Nanoseconds

- ​`ms = "ms"`: Milliseconds

- ​`s = "s"`: Seconds

**Implemented traits:**

`AnyType`

## `Report`

Contains the average execution time, iterations, min and max of each batch.

**Fields:**

- ​**warmup\_iters** (`Int`): The total warmup iterations.

- ​**warmup\_duration** (`Int`): The total duration it took to warmup.

- ​**runs** (`List[Batch]`): A `List` of benchmark runs.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `Movable`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Default initializer for the Report.

Sets all values to 0

### `__copyinit__`

`__copyinit__(inout self: Self, existing: Self)`

Creates a shallow copy (it doesn't copy the data).

**Args:**

- ​**existing** (`Self`): The `Report` to copy.

### `iters`

`iters(self: Self) -> Int`

The total benchmark iterations.

**Returns:**

The total benchmark iterations.

### `duration`

`duration(self: Self, unit: String) -> SIMD[f64, 1]`

The total duration it took to run all benchmarks.

**Args:**

- ​**unit** (`String`): The time unit to display for example: ns, ms, s (default `s`).

**Returns:**

The total duration it took to run all benchmarks.

### `mean`

`mean(self: Self, unit: String) -> SIMD[f64, 1]`

The average duration of all benchmark runs.

**Args:**

- ​**unit** (`String`): The time unit to display for example: ns, ms, s (default `s`).

**Returns:**

The average duration of all benchmark runs.

### `min`

`min(self: Self, unit: String) -> SIMD[f64, 1]`

The batch of benchmarks that was the fastest to run.

**Args:**

- ​**unit** (`String`): The time unit to display for example: ns, ms, s (default `s`).

**Returns:**

The fastest duration out of all batches.

### `max`

`max(self: Self, unit: String) -> SIMD[f64, 1]`

The batch of benchmarks that was the slowest to run.

**Args:**

- ​**unit** (`String`): The time unit to display for example: ns, ms, s (default `s`).

**Returns:**

The slowest duration out of all batches.

### `print`

`print(self: Self, unit: String)`

Prints out the shortened version of the report.

**Args:**

- ​**unit** (`String`): The time unit to display for example: ns, ms, s (default `s`).

### `print_full`

`print_full(self: Self, unit: String)`

Prints out the full version of the report with each batch of benchmark runs.

**Args:**

- ​**unit** (`String`): The time unit to display for example: ns, ms, s (default `s`).

## `run`

`run[func: fn() -> None](num_warmup: Int, max_iters: Int, min_runtime_secs: SIMD[f64, 1], max_runtime_secs: SIMD[f64, 1], max_batch_size: Int) -> Report`

Benchmarks the function passed in as a parameter.

Benchmarking continues until 'min\_time\_ns' has elapsed and either `max_time_ns` OR `max_iters` is achieved.

**Parameters:**

- ​**func** (`fn() -> None`): The function to benchmark.

**Args:**

- ​**num\_warmup** (`Int`): Number of warmup iterations to run before starting benchmarking (default 2).
- ​**max\_iters** (`Int`): Max number of iterations to run (default `1_000_000_000`).
- ​**min\_runtime\_secs** (`SIMD[f64, 1]`): Upper bound on benchmarking time in secs (default `2`).
- ​**max\_runtime\_secs** (`SIMD[f64, 1]`): Lower bound on benchmarking time in secs (default `60`).
- ​**max\_batch\_size** (`Int`): The maximum number of iterations to perform per time measurement.

**Returns:**

Average execution time of func in ns.

`run[func: fn() capturing -> None](num_warmup: Int, max_iters: Int, min_runtime_secs: SIMD[f64, 1], max_runtime_secs: SIMD[f64, 1], max_batch_size: Int) -> Report`

Benchmarks the function passed in as a parameter.

Benchmarking continues until 'min\_time\_ns' has elapsed and either `max_time_ns` OR `max_iters` is achieved.

**Parameters:**

- ​**func** (`fn() capturing -> None`): The function to benchmark.

**Args:**

- ​**num\_warmup** (`Int`): Number of warmup iterations to run before starting benchmarking (default 2).
- ​**max\_iters** (`Int`): Max number of iterations to run (default `1_000_000_000`).
- ​**min\_runtime\_secs** (`SIMD[f64, 1]`): Upper bound on benchmarking time in secs (default `2`).
- ​**max\_runtime\_secs** (`SIMD[f64, 1]`): Lower bound on benchmarking time in secs (default `60`).
- ​**max\_batch\_size** (`Int`): The maximum number of iterations to perform per time measurement.

**Returns:**

Average execution time of func in ns.