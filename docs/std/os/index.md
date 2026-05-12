---
title: "os"
sidebar_label: "os"
description: "操作系统接口层：环境、文件系统、进程控制。`os` 包提供独立于平台的操作系统功能访问，包括文件系统操作、环境变量和进程控制。"
---

# os

操作系统接口层：环境、文件系统、进程控制。

`os` 包提供独立于平台的操作系统功能访问，包括文件系统操作、环境变量和进程控制。它提供操作系统相关功能的可移植接口，抽象平台差异同时暴露系统级功能。此包是 Mojo 系统编程的基础。

使用此包进行系统级操作、文件系统管理、环境配置或平台抽象。对于文件 I/O 操作，使用内置的 `open()` 函数。对于路径操作，请参阅 `os.path` 包获取路径函数，或 `pathlib` 包获取面向对象的 `Path` 类型。

## 模块

- [env](/docs/std/os/env)
- [fstat](/docs/std/os/fstat)
- [os](/docs/std/os/os)
- [pathlike](/docs/std/os/pathlike)
- [process](/docs/std/os/process)

## 子包

- [path](/docs/std/os/path)
