---
title: "format"
sidebar_label: "format"
description: "Provides formatting traits for converting types to text.  The `format` package provides traits that control how types format themselves as text and where that text gets written. The `Writable` trait d"
---

# format

Provides formatting traits for converting types to text.

The `format` package provides traits that control how types format themselves as
text and where that text gets written. The `Writable` trait describes how a
type converts itself to UTF-8 text, while the `Writer` trait accepts formatted
output from writable types. Together, they enable efficient formatting without
unnecessary allocations by writing directly to destinations like files, strings,
or network sockets.

Use this package to implement custom text formatting for your types, control
output representation, or write formatted data directly to various destinations.

## Quick Start

The `Writable` trait has a default implementation that uses reflection to
automatically format all struct fields. Simply declare the trait conformance:

```mojo
@fieldwise_init
struct Point(Writable):
    var x: Float64
    var y: Float64

var p = Point(1.5, 2.7)
print(p)  # Point(x=1.5, y=2.7)
print(repr(p)) # Point(x=Float64(1.5), y=Float64(2.7))
```

## Custom Formatting

Override `write_to()` for custom output:

```mojo
@fieldwise_init
struct Point(Writable):
    var x: Float64
    var y: Float64

    def write_to(self, mut writer: Some[Writer]):
        writer.write("(", self.x, ", ", self.y, ")")

var p = Point(1.5, 2.7)
print(p)  # (1.5, 2.7)
```

## Debug Formatting

Override `write_repr_to()` to provide different debug output:

```mojo
@fieldwise_init
struct Point(Writable):
    var x: Float64
    var y: Float64

    def write_repr_to(self, mut writer: Some[Writer]):
        writer.write("Point: x=", self.x, ", y=", self.y)

var p = Point(1.5, 2.7)
print(repr(p)) # Point: x=1.5, y=2.7
```

## 模块

- [repr](/docs/std/format/repr)
- [tstring](/docs/std/format/tstring)
