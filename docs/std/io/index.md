---
title: "io"
sidebar_label: "io"
description: "Core I/O operations: console input/output, file handling, writing traits.  The `io` package provides fundamental input/output functionality for reading from and writing to various sources including th"
---

# io

Core I/O operations: console input/output, file handling, writing traits.

The `io` package provides fundamental input/output functionality for reading
from and writing to various sources including the console, files, and custom
streams. It defines the core traits for the I/O system (`Writer` and
`Writable`) that enable formatted output across different backends, along with
concrete implementations for file operations and standard streams.

Use this package for console interaction, file operations, implementing custom
output formatting for your types, or building I/O abstractions. Most programs
use `print()` and file operations from this package, while library authors
implement `Writable` to enable their types to work with any `Writer`.

## 模块

- [file](/docs/std/io/file)
- [file_descriptor](/docs/std/io/file_descriptor)
- [io](/docs/std/io/io)
- [write](/docs/std/io/write)
