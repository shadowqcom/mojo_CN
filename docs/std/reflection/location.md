---
title: "location"
sidebar_label: "location"
description: "实现捕获和表示源代码位置的工具。此模块提供源代码位置的编译时和运行时内省：- `SourceLocation` - 保存文件名、行号和列号信息的结构体。"
---

# location

实现捕获和表示源代码位置的工具。

此模块提供源代码位置的编译时和运行时内省：

- `SourceLocation` - 保存文件名、行号和列号信息的结构体。
- `source_location()` - 返回调用此函数的位置。
- `call_location()` - 返回调用者的位置（用于内联函数）。

这些工具对于错误报告、日志记录、调试以及构建向用户报告有意义位置的自定义断言函数非常有用。

使用 `source_location()` 获取当前位置的示例：

```mojo
from std.reflection import source_location

def main():
    var loc = source_location()
    print(loc)  # 打印：/path/to/file.mojo:5:15
    print("Line:", loc.line(), "Column:", loc.column())
```

使用 `call_location()` 构建报告调用者位置的自定义断言的示例。注意 `@always_inline` 是 `call_location()` 工作所必需的——函数必须内联，以便编译器可以捕获调用者的位置：

```mojo
from std.reflection import call_location

@always_inline  # call_location() 工作所必需
def my_assert(cond: Bool, msg: String = "assertion failed") raises:
    if not cond:
        raise Error(call_location().prefix(msg))

def main() raises:
    var x = 5
    my_assert(x > 10, "x must be > 10")  # 错误指向此行
```

## 类型

### SourceLocation

`struct SourceLocation(TrivialRegisterPassable, UnsafeSingleNicheable, Writable)`

**Implemented Traits:**

- `TrivialRegisterPassable`
- `UnsafeSingleNicheable`
- `Writable`

**Fields:**

- `_line: Int`
- `_col: Int`
- `_file_name: StaticString`

**Methods:**

- **__init__**: `@always_inline @doc_hidden def __init__(out self, line`

- **line**: `@always_inline def line(self) -&gt; Int`

- **column**: `@always_inline def column(self) -&gt; Int`

- **file_name**: `@always_inline def file_name(self) -&gt; StaticString`

- **prefix**: `@no_inline def prefix[T`

- **write_to**: `def write_to(self, mut writer`

- **write_niche**: `@staticmethod @always_inline @doc_hidden def write_niche(
        memory`

- **isa_niche**: `@staticmethod @always_inline @doc_hidden def isa_niche(
        memory`
