---
title: "io"
sidebar_label: "io"
description: "核心 I/O 操作：控制台输入/输出、文件处理、写入 trait。`io` 包提供基本的输入/输出功能，用于从各种来源（包括控制台、文件和自定义流）读取和写入数据。"
---

# io

核心 I/O 操作：控制台输入/输出、文件处理、写入 trait。

`io` 包提供基本的输入/输出功能，用于从各种来源（包括控制台、文件和自定义流）读取和写入数据。它定义了 I/O 系统的核心 trait（`Writer` 和 `Writable`），支持跨不同后端的格式化输出，以及文件操作和标准流的具体实现。

使用此包进行控制台交互、文件操作、为您的类型实现自定义输出格式，或构建 I/O 抽象。大多数程序使用此包中的 `print()` 和文件操作，而库作者实现 `Writable` 以使其类型能够与任何 `Writer` 配合使用。

## 模块

- [file](/docs/std/io/file)
- [file_descriptor](/docs/std/io/file_descriptor)
- [io](/docs/std/io/io)
- [write](/docs/std/io/write)
