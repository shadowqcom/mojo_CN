---
title: "location"
sidebar_label: "location"
description: "Implements utilities to capture and represent source code location.  This module provides compile-time and runtime introspection of source locations:  - `SourceLocation` - A struct holding file name, "
---

# location

Implements utilities to capture and represent source code location.

This module provides compile-time and runtime introspection of source locations:

- `SourceLocation` - A struct holding file name, line, and column information.
- `source_location()` - Returns the location where this function is called.
- `call_location()` - Returns the caller's location (for use in inlined functions).

These utilities are useful for error reporting, logging, debugging, and building
custom assertion functions that report meaningful locations to users.

Example using `source_location()` to get the current location:

```mojo
from std.reflection import source_location

def main():
    var loc = source_location()
    print(loc)  # Prints: /path/to/file.mojo:5:15
    print("Line:", loc.line(), "Column:", loc.column())
```

Example using `call_location()` for a custom assertion that reports the
caller's location. Note that `@always_inline` is required for `call_location()`
to work - the function must be inlined so the compiler can capture the caller's
location:

```mojo
from std.reflection import call_location

@always_inline  # Required for call_location() to work
def my_assert(cond: Bool, msg: String = "assertion failed") raises:
    if not cond:
        raise Error(call_location().prefix(msg))

def main() raises:
    var x = 5
    my_assert(x > 10, "x must be > 10")  # Error points to THIS line
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
