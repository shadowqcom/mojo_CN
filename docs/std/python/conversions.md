---
title: "conversions"
sidebar_label: "conversions"
description: "实现与 PythonObject 之间的转换 trait。您可以从 `python` 包导入这些 API。例如：```mojo from std.python import ConvertibleToPython ```"
---

# conversions

实现与 PythonObject 之间的转换 trait。

您可以从 `python` 包导入这些 API。例如：

```mojo
from std.python import ConvertibleToPython
```

## Traits

### ConvertibleToPython

`trait ConvertibleToPython(ImplicitlyDestructible)`

**Methods:**

- **to_python_object**: `def to_python_object(var self) raises -&gt; PythonObject`

### ConvertibleFromPython

`trait ConvertibleFromPython(Copyable, ImplicitlyDestructible)`

**Methods:**

- **__init__**: `def __init__(out self, *, py`
