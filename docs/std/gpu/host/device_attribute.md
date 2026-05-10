---
title: "device_attribute"
sidebar_label: "device_attribute"
description: "This module defines GPU device attributes that can be queried from CUDA-compatible devices.  The module provides the `DeviceAttribute` struct which encapsulates the various device properties and capab"
---

# device_attribute

This module defines GPU device attributes that can be queried from CUDA-compatible devices.

The module provides the `DeviceAttribute` struct which encapsulates the various device
properties and capabilities that can be queried through the CUDA driver API. Each attribute
is represented as a constant with a corresponding integer value that maps to the CUDA
driver's attribute enumeration.

These attributes allow applications to query specific hardware capabilities and limitations
of GPU devices, such as maximum thread counts, memory sizes, compute capabilities, and
supported features.

:::note
See the [`DeviceContext`](/docs/std/gpu/host/device_context/DeviceContext/) page
for examples that retrieve `DeviceAttribute` values.
:::

## 类型

### DeviceAttribute

`struct DeviceAttribute(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `_value: Int32`
