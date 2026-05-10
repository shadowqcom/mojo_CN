---
title: "process"
sidebar_label: "process"
description: "Implements os methods for dealing with processes.  Example:  ```mojo from std.os import Process from std.collections import List _ = Process.run(\"echo\", [\"== TEST_ECHO\"]) ```"
---

# process

Implements os methods for dealing with processes.

Example:

```mojo
from std.os import Process
from std.collections import List
_ = Process.run("echo", ["== TEST_ECHO"])
```

## 类型

### ProcessStatus

`struct ProcessStatus(Copyable, ImplicitlyCopyable, Movable)`

**Implemented Traits:**

- `Copyable`
- `ImplicitlyCopyable`
- `Movable`

**Fields:**

- `exit_code: Optional[Int]`
- `term_signal: Optional[Int]`

**Methods:**

- **__init__**: `def __init__(
        out self,
        exit_code`

- **running**: `@staticmethod def running() -&gt; Self`

- **has_exited**: `def has_exited(self) -&gt; Bool`

### Pipe

`struct Pipe`

**Fields:**

- `fd_in: Optional[FileDescriptor]`
- `fd_out: Optional[FileDescriptor]`

**Methods:**

- **__init__**: `def __init__(
        out self,
        in_close_on_exec`

- **__del__**: `def __del__(deinit self)`

- **_set_close_on_exec**: `@staticmethod def _set_close_on_exec(fd`

- **set_input_only**: `@always_inline def set_input_only(mut self)`

- **set_output_only**: `@always_inline def set_output_only(mut self)`

- **write_bytes**: `@always_inline def write_bytes(mut self, bytes`

- **read_bytes**: `@always_inline def read_bytes(mut self, buffer`

### Process

`struct Process`

**Fields:**

- `child_pid: c_pid_t`
- `status: Optional[ProcessStatus]`
- `status: c_int = 0`
- `status: c_int = 0`
- `pid: c_pid_t = 0`

**Methods:**

- **__init__**: `def __init__(out self, child_pid`

- **__del__**: `def __del__(deinit self)`

- **_kill**: `def _kill(mut self, signal`

- **_check_status**: `def _check_status(
        self, pid`

- **hangup**: `def hangup(mut self) -&gt; Bool`

- **interrupt**: `def interrupt(mut self) -&gt; Bool`

- **kill**: `def kill(mut self) -&gt; Bool`

- **poll**: `def poll(mut self) raises -&gt; ProcessStatus`

- **wait**: `def wait(mut self) raises -&gt; ProcessStatus`

- **run**: `@staticmethod def run(var path`
