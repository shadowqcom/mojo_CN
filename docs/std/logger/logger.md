---
title: "logger"
slug: logger
sidebar_label: "logger"
description: "提供具有不同严重级别的日志功能。此模块实现了一个简单的日志系统，具有可配置的严重级别：`NOTSET`、`DEBUG`、`INFO`、`WARNING`、`ERROR` 和 `CRITICAL`。"
---

# logger

提供具有不同严重级别的日志功能。

此模块实现了一个简单的日志系统，具有可配置的严重级别：`NOTSET`、`DEBUG`、`INFO`、`WARNING`、`ERROR` 和 `CRITICAL`。日志级别可以通过 LOGGING_LEVEL 环境变量设置。

主要组件包括：

- `Level`：一个类似枚举的结构体，定义可用的日志级别
- `Logger`：一个处理不同严重级别日志消息的结构体

示例：

```mojo
from std.logger import Logger

var logger = Logger()  # 使用 LOGGING_LEVEL 环境变量的默认级别
logger.info("Starting process")
logger.debug("Debug information")
logger.error("An error occurred")
```

日志记录器可以配置为写入不同的文件描述符（默认为 stdout）。低于配置级别的消息将被静默忽略。

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
