---
title: "subprocess"
sidebar_label: "subprocess"
description: "Provides utilities for executing shell commands and capturing output.  This module offers functions for running shell commands in subprocesses and retrieving their output, similar to Python's `subproc"
---

# subprocess

Provides utilities for executing shell commands and capturing output.

This module offers functions for running shell commands in subprocesses and
retrieving their output, similar to Python's `subprocess` module. It handles
process creation, output capture, and resource cleanup automatically.

## 类型

### _POpenHandle

`struct _POpenHandle`

**Fields:**

- `_handle: FILE_ptr`
- `len: Int = 0`

**Methods:**

- **__init__**: `def __init__(out self, var cmd`

- **__del__**: `def __del__(deinit self)`

- **read**: `def read(self) raises -&gt; String`
