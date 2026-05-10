---
title: "os"
sidebar_label: "os"
description: "OS interface layer: environment, filesystem, process control.  The `os` package provides platform-independent access to operating system functionality including filesystem operations, environment vari"
---

# os

OS interface layer: environment, filesystem, process control.

The `os` package provides platform-independent access to operating system
functionality including filesystem operations, environment variables, and
process control. It offers portable interfaces to OS-dependent features,
abstracting platform differences while exposing system-level capabilities. This
package serves as the foundation for system programming in Mojo.

Use this package for system-level operations, filesystem management,
environment configuration, or platform abstraction. For file I/O operations,
use the built-in `open()` function. For path manipulation, see the `os.path`
package for path functions or the `pathlib` package for the object-oriented
`Path` type.

## 模块

- [env](/docs/std/os/env)
- [fstat](/docs/std/os/fstat)
- [os](/docs/std/os/os)
- [pathlike](/docs/std/os/pathlike)
- [process](/docs/std/os/process)

## 子包

- [path](/docs/std/os/path)
