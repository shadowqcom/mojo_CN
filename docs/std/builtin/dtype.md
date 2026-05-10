---
title: "dtype"
sidebar_label: "dtype"
description: "Implements the DType class.  These are Mojo built-ins, so you don't need to import them."
---

# dtype

Implements the DType class.

These are Mojo built-ins, so you don't need to import them.

## 类型

### DType

`struct DType(
    Equatable,
    Hashable,
    ImplicitlyCopyable,
    KeyElement,
    TrivialRegisterPassable,
    Writable,
)`

**Implemented Traits:**

- `Equatable`
- `Hashable`
- `ImplicitlyCopyable`
- `KeyElement`
- `TrivialRegisterPassable`
- `Writable`

**Fields:**

- `_mlir_value: Self._mlir_type`

**Methods:**

- **__init__**: `def __init__(out self, *, mlir_value`

- **_from_str**: `@staticmethod def _from_str(str`

- **elif**: `fn elifstr == "float8_e3m4"`

- **elif**: `fn elifstr == "float8_e4m3fnuz"`

- **write_to**: `@no_inline def write_to(self, mut writer`

- **write_repr_to**: `def write_repr_to(self, mut writer`

- **get_value**: `def get_value(self) -&gt; __mlir_type.`!kgen.dtype``

- **_from_ui8**: `def _from_ui8(ui8`

- **_as_ui8**: `def _as_ui8(self) -&gt; UInt8._mlir_type`

- **_match**: `def _match(self, mask`

- **_match**: `def _match(self, mask`

- **__eq__**: `def __eq__(self, rhs`

- **__ne__**: `def __ne__(self, rhs`

- **__hash__**: `def __hash__[H`

- **is_unsigned**: `def is_unsigned(self) -&gt; Bool`

- **is_signed**: `def is_signed(self) -&gt; Bool`

- **_is_non_index_integral**: `def _is_non_index_integral(self) -&gt; Bool`

- **is_integral**: `def is_integral(self) -&gt; Bool`

- **is_floating_point**: `def is_floating_point(self) -&gt; Bool`

- **is_float8**: `def is_float8(self) -&gt; Bool`

- **or**: `fn orself == DType.float8_e4m3fnuz
            or self == DType.float8_e5m2
            or self == DType.float8_e5m2fnuz
        )

    @always_inline("builtin")
    def is_half_float(self) -&gt; Bool`

- **is_numeric**: `def is_numeric(self) -&gt; Bool`

- **and**: `fn andself != DType.float8_e8m0fnu)
        )

    # ===-------------------------------------------------------------------===#
    # Floating point generics
    # ===-------------------------------------------------------------------===#

    @staticmethod
    @always_inline("nodebug")
    def mantissa_width[dtype`

- **max_exponent**: `def max_exponent[dtype`

- **exponent_width**: `def exponent_width[dtype`

- **exponent_bias**: `@staticmethod @always_inline def exponent_bias[dtype`

- **__mlir_type**: `def __mlir_type(self) -&gt; __mlir_type.`!kgen.deferred``
