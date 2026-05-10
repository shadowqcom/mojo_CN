---
title: "info"
sidebar_label: "info"
description: "Implements methods for querying the host target info.  You can import these APIs from the `sys` package. For example:  ```mojo from std.sys import CompilationTarget  print(CompilationTarget.is_x86()) "
---

# info

Implements methods for querying the host target info.

You can import these APIs from the `sys` package. For example:

```mojo
from std.sys import CompilationTarget

print(CompilationTarget.is_x86())
```

## 类型

### CompilationTarget

`struct CompilationTarget[value`

## 函数

### _current_target

`def _current_target() -&gt; _TargetType`
