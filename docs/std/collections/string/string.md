---
title: "string"
sidebar_label: "string"
description: "Implements the core `String` type and related utilities."
---

# string

Implements the core `String` type and related utilities.

## 类型

### String

`struct String(
    Boolable,
    Comparable,
    ConvertibleFromPython,
    ConvertibleToPython,
    Defaultable,
    FloatableRaising,
    ImplicitlyCopyable,
    IntableRaising,
    KeyElement,
    PathLike,
    Writable,
    Writer,
)`

**Implemented Traits:**

- `Boolable`
- `Comparable`
- `ConvertibleFromPython`
- `ConvertibleToPython`
- `Defaultable`
- `FloatableRaising`
- `ImplicitlyCopyable`
- `IntableRaising`
- `KeyElement`
- `PathLike`
- `Writable`
- `Writer`

**Fields:**

- `_ptr_or_data: UnsafePointer[UInt8, MutExternalOrigin]`
- `_len_or_data: Int`
- `_capacity_or_data: Int`

**Methods:**

- **__del__**: `def __del__(deinit self)`

- **__init__**: `def __init__(out self)`

- **__init__**: `def __init__(out self, *, capacity`

- **__init__**: `def __init__(out self, data`

- **__init__**: `def __init__(out self, data`

- **__init__**: `def __init__(out self, tstring`

- **__init__**: `def __init__(out self, *, unsafe_from_utf8`

- **__init__**: `def __init__(out self, *, from_utf8_lossy`

- **__init__**: `def __init__(out self, *, from_utf8`

- **__init__**: `def __init__[
        *Ts`

- **write**: `@staticmethod def write[
        *Ts`

- **write**: `def write[*Ts`

- **write**: `def write[T`

- **write**: `@staticmethod def write[T`

- **__init__**: `def __init__(out self, *, unsafe_uninit_length`

- **__init__**: `def __init__(
        out self,
        *,
        unsafe_from_utf8_ptr`

- **__init__**: `def __init__(
        out self, *, unsafe_from_utf8_ptr`

- **__init__**: `def __init__(out self, *, copy`

- **capacity**: `def capacity(self) -&gt; Int`

- **_set_nul_terminated**: `def _set_nul_terminated(mut self)`

- **_has_nul_terminator**: `def _has_nul_terminator(self) -&gt; Bool`

- **_clear_nul_terminator**: `def _clear_nul_terminator(mut self)`

- **_is_inline**: `def _is_inline(self) -&gt; Bool`

- **_set_ref_counted**: `def _set_ref_counted(mut self)`

- **_is_ref_counted**: `def _is_ref_counted(self) -&gt; Bool`

- **_refcount**: `def _refcount(self) -&gt; ref[self._ptr_or_data.origin] Atomic[DType.int]`

- **_is_unique**: `def _is_unique(mut self) -&gt; Bool`

- **_add_ref**: `def _add_ref(mut self)`

- **_drop_ref**: `def _drop_ref(mut self)`

- **_alloc**: `@staticmethod def _alloc(capacity`

- **write_string**: `def write_string(mut self, string`

- **__getitem__**: `@always_inline def __getitem__[
        I`

- **__getitem__**: `@always_inline def __getitem__(self, *, byte`

- **__getitem__**: `def __getitem__(
        self, *, byte`

- **__eq__**: `def __eq__(self, rhs`

- **__eq__**: `def __eq__(self, other`

- **__ne__**: `def __ne__(self, other`

- **__lt__**: `def __lt__(self, rhs`

- **_add**: `@staticmethod def _add(lhs`

- **__add__**: `def __add__(self, other`

- **_unsafe_append_byte**: `def _unsafe_append_byte(mut self, byte`

- **append**: `def append(mut self, codepoint`

- **__radd__**: `def __radd__(self, other`

- **_iadd**: `def _iadd(mut self, other`

- **__iadd__**: `def __iadd__(mut self, other`

- **__iter__**: `def __iter__(self) -&gt; CodepointSliceIter[origin_of(self)]`

- **__reversed__**: `def __reversed__(self) -&gt; CodepointSliceIter[origin_of(self), False]`

- **__bool__**: `def __bool__(self) -&gt; Bool`

- **__fspath__**: `def __fspath__(self) -&gt; String`

- **to_python_object**: `def to_python_object(var self) raises -&gt; PythonObject`

- **__init__**: `def __init__(out self, *, py`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

- **join**: `def join[T`

- **codepoints**: `def codepoints(self) -&gt; CodepointsIter[origin_of(self)]`

- **codepoint_slices**: `def codepoint_slices(self) -&gt; CodepointSliceIter[origin_of(self)]`

- **codepoint_slices_reversed**: `def codepoint_slices_reversed(
        self,
    ) -&gt; CodepointSliceIter[origin_of(self), False]`

- **graphemes**: `def graphemes(self) -&gt; GraphemeSliceIter[origin_of(self)]`

- **graphemes_reversed**: `def graphemes_reversed(
        self,
    ) -&gt; GraphemeSliceIter[origin_of(self), False]`

- **grapheme_indices**: `def grapheme_indices(self) -&gt; GraphemeIndicesIter[origin_of(self)]`

- **nth_grapheme**: `def nth_grapheme(self, n`

- **split_at_grapheme**: `def split_at_grapheme(
        self, n`

- **count_graphemes**: `def count_graphemes(self) -&gt; Int`

- **unsafe_ptr**: `def unsafe_ptr(
        self,
    ) -&gt; UnsafePointer[Byte, origin_of(self)]`

- **unsafe_ptr_mut**: `def unsafe_ptr_mut(
        mut self, var capacity`

- **as_c_string_slice**: `@always_inline def as_c_string_slice(
        mut self,
    ) -&gt; CStringSlice[ImmutOrigin(origin_of(self))]`

- **as_bytes**: `def as_bytes(self) -&gt; Span[Byte, origin_of(self)]`

- **unsafe_as_bytes_mut**: `def unsafe_as_bytes_mut(mut self) -&gt; Span[Byte, origin_of(self)]`

- **as_string_slice**: `def as_string_slice(self) -&gt; StringSlice[origin_of(self)]`

- **byte_length**: `def byte_length(self) -&gt; Int`

- **count_codepoints**: `@always_inline def count_codepoints(self) -&gt; Int`

- **set_byte_length**: `def set_byte_length(mut self, new_len`

- **count**: `def count(self, substr`

- **__contains__**: `def __contains__(self, substr`

- **find**: `def find(self, substr`

- **rfind**: `def rfind(self, substr`

- **isspace**: `def isspace(self) -&gt; Bool`

- **split**: `@always_inline def split(self, sep`

- **split**: `@always_inline def split(
        self, sep`

- **split**: `@always_inline def split(self, sep`

- **split**: `@always_inline def split(
        self, sep`

- **splitlines**: `def splitlines(
        self, keepends`

- **replace**: `def replace(self, old`

- **strip**: `def strip(self, chars`

- **strip**: `def strip(self) -&gt; StringSlice[origin_of(self)]`

- **rstrip**: `def rstrip(self, chars`

- **rstrip**: `def rstrip(self) -&gt; StringSlice[origin_of(self)]`

- **lstrip**: `def lstrip(self, chars`

- **lstrip**: `def lstrip(self) -&gt; StringSlice[origin_of(self)]`

- **__hash__**: `def __hash__[H`

- **lower**: `def lower(self) -&gt; String`

- **upper**: `def upper(self) -&gt; String`

- **startswith**: `def startswith(
        self, prefix`

- **endswith**: `def endswith(
        self, suffix`

- **removeprefix**: `def removeprefix(
        self, prefix`

- **removesuffix**: `def removesuffix(
        self, suffix`

- **__int__**: `def __int__(self) raises -&gt; Int`

- **__float__**: `def __float__(self) raises -&gt; Float64`

- **__mul__**: `def __mul__(self, n`

- **format**: `def format[*Ts`

- **is_ascii_digit**: `def is_ascii_digit(self) -&gt; Bool`

- **isupper**: `def isupper(self) -&gt; Bool`

- **islower**: `def islower(self) -&gt; Bool`

- **is_ascii_printable**: `def is_ascii_printable(self) -&gt; Bool`

- **ascii_rjust**: `def ascii_rjust(self, width`

- **ascii_ljust**: `def ascii_ljust(self, width`

- **ascii_center**: `def ascii_center(self, width`

- **resize**: `def resize(mut self, length`

- **resize**: `def resize(mut self, *, unsafe_uninit_length`

- **reserve**: `def reserve(mut self, new_capacity`

- **_inline_string**: `def _inline_string(mut self)`

- **_realloc_mutable**: `def _realloc_mutable(mut self, capacity`

### a

`struct aString from invalid UTF-8 data")
        self = String(unsafe_from_utf8=from_utf8)

    # ===------------------------------------------------------------------=== #
    # Writables
    # ===------------------------------------------------------------------=== #
    # There is duplication here to avoid passing around variadic packs in such
    # a common callsite, as that isn't free for both compilation speed and
    # register pressure.

    def __init__[
        *Ts`

**Implemented Traits:**

- `unsafe_from_utf8=from_utf8`

**Methods:**

- **write**: `@staticmethod def write[
        *Ts`

- **write**: `def write[*Ts`

- **write**: `def write[T`

- **write**: `@staticmethod def write[T`

- **__init__**: `def __init__(out self, *, unsafe_uninit_length`

- **__init__**: `def __init__(
        out self,
        *,
        unsafe_from_utf8_ptr`

- **__init__**: `def __init__(
        out self, *, unsafe_from_utf8_ptr`

- **__init__**: `def __init__(out self, *, copy`

- **capacity**: `def capacity(self) -&gt; Int`

- **_set_nul_terminated**: `def _set_nul_terminated(mut self)`

- **_has_nul_terminator**: `def _has_nul_terminator(self) -&gt; Bool`

- **_clear_nul_terminator**: `def _clear_nul_terminator(mut self)`

- **_is_inline**: `def _is_inline(self) -&gt; Bool`

- **_set_ref_counted**: `def _set_ref_counted(mut self)`

- **_is_ref_counted**: `def _is_ref_counted(self) -&gt; Bool`

- **_refcount**: `def _refcount(self) -&gt; ref[self._ptr_or_data.origin] Atomic[DType.int]`

- **_is_unique**: `def _is_unique(mut self) -&gt; Bool`

- **_add_ref**: `def _add_ref(mut self)`

- **_drop_ref**: `def _drop_ref(mut self)`

- **_alloc**: `@staticmethod def _alloc(capacity`

- **write_string**: `def write_string(mut self, string`

- **__getitem__**: `@always_inline def __getitem__[
        I`

- **__getitem__**: `@always_inline def __getitem__(self, *, byte`

- **__getitem__**: `def __getitem__(
        self, *, byte`

- **__eq__**: `def __eq__(self, rhs`

- **__eq__**: `def __eq__(self, other`

- **__ne__**: `def __ne__(self, other`

- **__lt__**: `def __lt__(self, rhs`

- **_add**: `@staticmethod def _add(lhs`

- **__add__**: `def __add__(self, other`

- **_unsafe_append_byte**: `def _unsafe_append_byte(mut self, byte`

- **append**: `def append(mut self, codepoint`

- **__radd__**: `def __radd__(self, other`

- **_iadd**: `def _iadd(mut self, other`

- **__iadd__**: `def __iadd__(mut self, other`

- **__iter__**: `def __iter__(self) -&gt; CodepointSliceIter[origin_of(self)]`

- **__reversed__**: `def __reversed__(self) -&gt; CodepointSliceIter[origin_of(self), False]`

- **__bool__**: `def __bool__(self) -&gt; Bool`

- **__fspath__**: `def __fspath__(self) -&gt; String`

- **to_python_object**: `def to_python_object(var self) raises -&gt; PythonObject`

- **__init__**: `def __init__(out self, *, py`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

- **join**: `def join[T`

- **codepoints**: `def codepoints(self) -&gt; CodepointsIter[origin_of(self)]`

- **codepoint_slices**: `def codepoint_slices(self) -&gt; CodepointSliceIter[origin_of(self)]`

- **codepoint_slices_reversed**: `def codepoint_slices_reversed(
        self,
    ) -&gt; CodepointSliceIter[origin_of(self), False]`

- **graphemes**: `def graphemes(self) -&gt; GraphemeSliceIter[origin_of(self)]`

- **graphemes_reversed**: `def graphemes_reversed(
        self,
    ) -&gt; GraphemeSliceIter[origin_of(self), False]`

- **grapheme_indices**: `def grapheme_indices(self) -&gt; GraphemeIndicesIter[origin_of(self)]`

- **nth_grapheme**: `def nth_grapheme(self, n`

- **split_at_grapheme**: `def split_at_grapheme(
        self, n`

- **count_graphemes**: `def count_graphemes(self) -&gt; Int`

- **unsafe_ptr**: `def unsafe_ptr(
        self,
    ) -&gt; UnsafePointer[Byte, origin_of(self)]`

- **unsafe_ptr_mut**: `def unsafe_ptr_mut(
        mut self, var capacity`

- **as_c_string_slice**: `@always_inline def as_c_string_slice(
        mut self,
    ) -&gt; CStringSlice[ImmutOrigin(origin_of(self))]`

- **as_bytes**: `def as_bytes(self) -&gt; Span[Byte, origin_of(self)]`

- **unsafe_as_bytes_mut**: `def unsafe_as_bytes_mut(mut self) -&gt; Span[Byte, origin_of(self)]`

- **as_string_slice**: `def as_string_slice(self) -&gt; StringSlice[origin_of(self)]`

- **byte_length**: `def byte_length(self) -&gt; Int`

- **count_codepoints**: `@always_inline def count_codepoints(self) -&gt; Int`

- **set_byte_length**: `def set_byte_length(mut self, new_len`

- **count**: `def count(self, substr`

- **__contains__**: `def __contains__(self, substr`

- **find**: `def find(self, substr`

- **rfind**: `def rfind(self, substr`

- **isspace**: `def isspace(self) -&gt; Bool`

- **split**: `@always_inline def split(self, sep`

- **split**: `@always_inline def split(
        self, sep`

- **split**: `@always_inline def split(self, sep`

- **split**: `@always_inline def split(
        self, sep`

- **splitlines**: `def splitlines(
        self, keepends`

- **replace**: `def replace(self, old`

- **strip**: `def strip(self, chars`

- **strip**: `def strip(self) -&gt; StringSlice[origin_of(self)]`

- **rstrip**: `def rstrip(self, chars`

- **rstrip**: `def rstrip(self) -&gt; StringSlice[origin_of(self)]`

- **lstrip**: `def lstrip(self, chars`

- **lstrip**: `def lstrip(self) -&gt; StringSlice[origin_of(self)]`

- **__hash__**: `def __hash__[H`

- **lower**: `def lower(self) -&gt; String`

- **upper**: `def upper(self) -&gt; String`

- **startswith**: `def startswith(
        self, prefix`

- **endswith**: `def endswith(
        self, suffix`

- **removeprefix**: `def removeprefix(
        self, prefix`

- **removesuffix**: `def removesuffix(
        self, suffix`

- **__int__**: `def __int__(self) raises -&gt; Int`

- **__float__**: `def __float__(self) raises -&gt; Float64`

- **__mul__**: `def __mul__(self, n`

- **format**: `def format[*Ts`

- **is_ascii_digit**: `def is_ascii_digit(self) -&gt; Bool`

- **isupper**: `def isupper(self) -&gt; Bool`

- **islower**: `def islower(self) -&gt; Bool`

- **is_ascii_printable**: `def is_ascii_printable(self) -&gt; Bool`

- **ascii_rjust**: `def ascii_rjust(self, width`

- **ascii_ljust**: `def ascii_ljust(self, width`

- **ascii_center**: `def ascii_center(self, width`

- **resize**: `def resize(mut self, length`

- **resize**: `def resize(mut self, *, unsafe_uninit_length`

- **reserve**: `def reserve(mut self, new_capacity`

- **_inline_string**: `def _inline_string(mut self)`

- **_realloc_mutable**: `def _realloc_mutable(mut self, capacity`
