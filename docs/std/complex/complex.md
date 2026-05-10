---
title: "complex"
sidebar_label: "complex"
description: "Implements the Complex dtype.  You can import these APIs from the `complex` package. For example:  ```mojo from std.complex import ComplexSIMD ```"
---

# complex

Implements the Complex dtype.

You can import these APIs from the `complex` package. For example:

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
