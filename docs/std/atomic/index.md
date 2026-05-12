---
title: "atomic"
sidebar_label: "atomic"
description: "原子操作和内存排序。`atomic` 包提供了 `Atomic` 类型用于对标量值执行原子读-修改-写操作，以及 `Ordering` 类型用于指定这些操作的内存排序。"
---

# atomic

原子操作和内存排序。

`atomic` 包提供了 `Atomic` 类型用于对标量值执行原子读-修改-写操作，以及 `Ordering` 类型用于指定这些操作的内存排序。它还公开了 `fence` 函数用于创建独立的内存屏障。

在实现无锁数据结构、引用计数或任何其他需要精细控制线程间内存排序的同步原语时，请使用此包。

## 模块

- [atomic](/docs/std/atomic/atomic)
