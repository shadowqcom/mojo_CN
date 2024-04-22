# time

Implements basic utils for working with time.

You can import these APIs from the `time` package. For example:

```
from time import now
```

## `now`

`now() -> Int`

Returns the current monotonic time time in nanoseconds. This function queries the current platform's monotonic clock, making it useful for measuring time differences, but the significance of the returned value varies depending on the underlying implementation.

**Returns:**

The current time in ns.

## `time_function`

`time_function[func: fn() capturing -> None]() -> Int`

Measures the time spent in the function.

**Parameters:**

- ​**func** (`fn() capturing -> None`): The function to time.

**Returns:**

The time elapsed in the function in ns.

## `sleep`

`sleep(sec: SIMD[f64, 1])`

Suspends the current thread for the seconds specified.

**Args:**

- ​**sec** (`SIMD[f64, 1]`): The number of seconds to sleep for.

`sleep(sec: Int)`

Suspends the current thread for the seconds specified.

**Args:**

- ​**sec** (`Int`): The number of seconds to sleep for.