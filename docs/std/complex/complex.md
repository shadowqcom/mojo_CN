---
title: "complex"
slug: complex
sidebar_label: "complex"
description: "实现 Complex 数据类型。您可以从 `complex` 包导入这些 API。例如：```mojo from std.complex import ComplexSIMD ```"
---

# complex

实现 Complex 数据类型。

您可以从 `complex` 包导入这些 API。例如：

```mojo
from std.complex import ComplexSIMD
```

## 类型

### ComplexSIMD

`struct ComplexSIMD[dtype`

## Traits

### requires

`trait requiresreturning Self
# dtype. We could maybe get rid of this if we had associated dtypes?
@always_inline
def abs(x`
