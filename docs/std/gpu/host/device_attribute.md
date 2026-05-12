---
title: "device_attribute"
sidebar_label: "device_attribute"
description: "此模块定义可以从 CUDA 兼容设备查询的 GPU 设备属性。该模块提供 `DeviceAttribute` 结构体，封装了可以通过 CUDA 驱动 API 查询的各种设备属性和功能。"
---

# device_attribute

此模块定义可以从 CUDA 兼容设备查询的 GPU 设备属性。

该模块提供 `DeviceAttribute` 结构体，封装了可以通过 CUDA 驱动 API 查询的各种设备属性和功能。每个属性表示为一个常量，具有映射到 CUDA 驱动属性枚举的相应整数值。

这些属性允许应用程序查询 GPU 设备的特定硬件功能和限制，例如最大线程数、内存大小、计算能力和支持的功能。

:::note
有关检索 `DeviceAttribute` 值的示例，请参阅 [`DeviceContext`](/docs/std/gpu/host/device_context/DeviceContext/) 页面。
:::

## 类型

### DeviceAttribute

`struct DeviceAttribute(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `_value: Int32`
