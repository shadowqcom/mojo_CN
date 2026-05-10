---
title: "io"
sidebar_label: "io"
description: "Provides utilities for working with input/output.  These are Mojo built-ins, so you don't need to import them."
---

# io

Provides utilities for working with input/output.

These are Mojo built-ins, so you don't need to import them.

## 类型

### _fdopen

`@fieldwise_init struct _fdopen[mode`

**Fields:**

- `handle: FILE_ptr`

**Methods:**

- **__init__**: `def __init__(out self, stream_id`

- **__enter__**: `def __enter__(self) -&gt; Self`

- **__exit__**: `def __exit__(self)`

- **readline**: `def readline(self) raises -&gt; String`

- **read_until_delimiter**: `def read_until_delimiter(self, delimiter`
