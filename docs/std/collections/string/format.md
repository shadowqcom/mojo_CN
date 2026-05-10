---
title: "format"
sidebar_label: "format"
description: "String formatting utilities for Mojo.  This module provides string formatting functionality similar to Python's `str.format()` method. The `format()` method (available on the [`String`](/docs/std/coll"
---

# format

String formatting utilities for Mojo.

This module provides string formatting functionality similar to Python's
`str.format()` method. The `format()` method (available on the
[`String`](/docs/std/collections/string/string/String/#format) and
[`StringSlice`](/docs/std/collections/string/string_slice/StringSlice/#format)
types) takes the current string as a template (or "format string"), which can
contain literal text and/or replacement fields delimited by curly braces (`{}`).
The replacement fields are replaced with the values of the arguments.

Replacement fields can mapped to the arguments in one of two ways:

- Automatic indexing by argument position:

  ```mojo
  var s = "{} is {}".format("Mojo", "🔥")
  ```

- Manual indexing by argument position:

  ```mojo
  var s = "{1} is {0}".format("hot", "🔥")
  ```

The replacement fields can also contain the `!r` or `!s` conversion flags, to
indicate whether the argument should be formatted using `repr()` or `String()`,
respectively:

```mojo
var s = "{!r}".format("test")
```

Note that the following features from Python's `str.format()` are
**not yet supported**:

- Named arguments (for example `"{name} is {adjective}"`).
- Accessing the attributes of an argument value (for example, `"{0.name}"`.
- Accessing an indexed value from the argument (for example, `"{1[0]}"`).
- Format specifiers for controlling output format (width, precision, and so on).

Examples:

```mojo
# Basic formatting
var s1 = "Hello {0}!".format("World")  # Hello World!

# Multiple arguments
var s2 = "{0} plus {1} equals {2}".format(1, 2, 3)  # 1 plus 2 equals 3

# Conversion flags
var s4 = "{!r}".format("test")  # "'test'"
```

This module has no public API; its functionality is available through the
[`String.format()`](/docs/std/collections/string/string/String/#format) and
[`StringSlice.format()`](/docs/std/collections/string/string_slice/StringSlice/#format)
methods.

## 类型

### _PrecompiledEntries

`@fieldwise_init struct _PrecompiledEntries[
    format_origin`

### _PrecompiledEntriesRuntime

`@fieldwise_init struct _PrecompiledEntriesRuntime[
    format_origin`

### _FormatUtils

`struct _FormatUtils`

**Methods:**

- **format_precompiled**: `@staticmethod def format_precompiled[
        *Ts`

- **_build_slice**: `@always_inline def _build_slice(
            p`

- **format**: `@staticmethod def format[*Ts`

- **format_to_runtime**: `@staticmethod def format_to_runtime[
        *Ts`

- **format_to_comptime**: `@staticmethod def format_to_comptime[
        format`

- **compile_entries_runtime_no_raises**: `@staticmethod def compile_entries_runtime_no_raises[
        *Ts`

- **compile_entries_runtime**: `@staticmethod def compile_entries_runtime[
        *Ts`

### _FormatCurlyEntry

`struct _FormatCurlyEntry[origin`

**Fields:**

- `first_curly: Int`
- `last_curly: Int`
- `conversion_flag: UInt8`
- `field: Self._FieldVariantType`

**Methods:**

- **__init__**: `def __init__(
        out self,
        first_curly`

- **is_escaped_brace**: `@always_inline def is_escaped_brace(ref self) -&gt; Bool`

- **is_kwargs_field**: `@always_inline def is_kwargs_field(ref self) -&gt; Bool`

- **is_automatic_indexing**: `@always_inline def is_automatic_indexing(ref self) -&gt; Bool`

- **is_manual_indexing**: `@always_inline def is_manual_indexing(ref self) -&gt; Bool`

- **_handle_field_and_break**: `def _handle_field_and_break(
        mut self,
        fmt_src`

- **_build_slice**: `def _build_slice(
            p`

- **check_string**: `@parameter def check_string() -&gt; Bool`

- **_format_entry**: `def _format_entry[
        *Ts`

- **_format**: `def _format(idx`

## Traits

### that

`trait thatall format specifications conform to)
struct _FormatCurlyEntry[origin`

**Methods:**

- **__init__**: `def __init__(
        out self,
        first_curly`

- **is_escaped_brace**: `@always_inline def is_escaped_brace(ref self) -&gt; Bool`

- **is_kwargs_field**: `@always_inline def is_kwargs_field(ref self) -&gt; Bool`

- **is_automatic_indexing**: `@always_inline def is_automatic_indexing(ref self) -&gt; Bool`

- **is_manual_indexing**: `@always_inline def is_manual_indexing(ref self) -&gt; Bool`

- **_handle_field_and_break**: `def _handle_field_and_break(
        mut self,
        fmt_src`

- **_build_slice**: `def _build_slice(
            p`

- **check_string**: `@parameter def check_string() -&gt; Bool`

- **_format_entry**: `def _format_entry[
        *Ts`

- **_format**: `def _format(idx`

### needed

`trait neededby the conversion_flag to avoid
        # needing to constraint that every type needs to conform to every trait.
        comptime r_value = UInt8(ord("r"))
        comptime s_value = UInt8(ord("s"))
        # alias a_value = UInt8(ord("a")) # TODO

        def _format(idx`
