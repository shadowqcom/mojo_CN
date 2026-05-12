---
title: "anytype"
sidebar_label: "anytype"
description: "定义 Mojo 中对象生命周期管理的核心 trait。此模块提供了定义对象如何在 Mojo 中创建、管理和销毁的基础 trait。"
---

# anytype

定义 Mojo 中对象生命周期管理的核心 trait。

此模块提供了定义对象如何在 Mojo 中创建、管理和销毁的基础 trait：

- `AnyType`：所有类型默认扩展的最基本 trait。
   具有此 trait 的类型没有析构函数，也没有生命周期管理。

- `ImplicitlyDestructible`：需要通过析构函数进行生命周期管理的类型的基础 trait。任何需要在超出作用域时进行清理的类型都应该实现此 trait。

These traits are built into Mojo and do not need to be imported.

## Traits

### AnyType

`trait AnyType`

### ImplicitlyDestructible

`trait ImplicitlyDestructible`

**Methods:**

- **__del__**: `def __del__(deinit self, /)`
