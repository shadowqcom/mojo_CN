---
title: "conversions"
sidebar_label: "conversions"
description: "Implements conversion traits to and from PythonObject.  You can import these APIs from the `python` package. For example:  ```mojo from std.python import ConvertibleToPython ```"
---

# conversions

Implements conversion traits to and from PythonObject.

You can import these APIs from the `python` package. For example:

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
