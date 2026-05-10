---
title: "logger"
sidebar_label: "logger"
description: "Provides logging functionality with different severity levels.  This module implements a simple logging system with configurable severity levels: `NOTSET`, `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CR"
---

# logger

Provides logging functionality with different severity levels.

This module implements a simple logging system with configurable severity
levels: `NOTSET`, `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`. The
logging level can be set via the LOGGING_LEVEL environment variable.

The main components are:

- `Level`: An enum-like struct defining the available logging levels
- `Logger`: A struct that handles logging messages with different severity levels

Example:

```mojo
from std.logger import Logger

var logger = Logger()  # Uses default level from LOGGING_LEVEL env var
logger.info("Starting process")
logger.debug("Debug information")
logger.error("An error occurred")
```

The logger can be configured to write to different file descriptors (default
stdout). Messages below the configured level will be silently ignored.

## 类型

### Level

`@fieldwise_init struct Level(
    Comparable,
    ImplicitlyCopyable,
    Writable,
)`

**Implemented Traits:**

- `Comparable`
- `ImplicitlyCopyable`
- `Writable`

**Fields:**

- `_value: Int`

**Methods:**

- **__eq__**: `@always_inline def __eq__(self, other`

- **__lt__**: `def __lt__(self, other`

- **color**: `def color(self) -&gt; Color`

- **_from_str**: `@staticmethod def _from_str(name`

- **write_to**: `def write_to(self, mut writer`

### Logger

`struct Logger[level`

**Fields:**

- `_fd: FileDescriptor`
- `_prefix: String`
- `_source_location: Bool`

**Methods:**

- **__init__**: `def __init__(
        out self,
        fd`

- **_is_disabled**: `@always_inline @staticmethod def _is_disabled[target_level`

- **trace**: `@always_inline def trace[
        *Ts`

- **debug**: `@always_inline def debug[
        *Ts`

- **info**: `@always_inline def info[
        *Ts`

- **warning**: `@always_inline def warning[
        *Ts`

- **error**: `@always_inline def error[
        *Ts`

- **critical**: `@always_inline def critical[
        *Ts`

- **_write_out**: `def _write_out[
        _level`
