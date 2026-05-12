---
title: "info"
sidebar_label: "info"
description: "实现查询主机目标信息的方法。您可以从 `sys` 包导入这些 API。例如：```mojo from std.sys import CompilationTarget  print(CompilationTarget.is_x86()) "
---

# info

实现查询主机目标信息的方法。

您可以从 `sys` 包导入这些 API。例如：

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
