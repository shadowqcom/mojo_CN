---
title: "intrinsics"
sidebar_label: "intrinsics"
description: "Provides low-level GPU intrinsic operations and memory access primitives.  Implements hardware-specific intrinsics that map directly to GPU assembly instructions, focusing on NVIDIA GPU architectures."
---

# intrinsics

Provides low-level GPU intrinsic operations and memory access primitives.

Implements hardware-specific intrinsics that map directly to GPU assembly
instructions, focusing on NVIDIA GPU architectures. Includes:

- Global memory load/store operations with cache control
- Warp-level primitives and synchronization
- Memory fence and barrier operations
- Atomic operations and memory ordering primitives

These low-level primitives should be used carefully as they correspond
directly to hardware instructions and require understanding of the
underlying GPU architecture.

## 类型

### Scope

`@fieldwise_init struct Scope(Equatable, ImplicitlyCopyable, Writable)`

**Implemented Traits:**

- `Equatable`
- `ImplicitlyCopyable`
- `Writable`

**Fields:**

- `_value: Int`

**Methods:**

- **__eq__**: `def __eq__(self, other`

- **write_to**: `@no_inline def write_to(self, mut w`

- **write_repr_to**: `def write_repr_to(self, mut writer`

- **mnemonic**: `def mnemonic(self) -&gt; StaticString`

### AMDBufferResource

`struct AMDBufferResource(TrivialRegisterPassable)`

**Implemented Traits:**

- `TrivialRegisterPassable`

**Fields:**

- `desc: SIMD[DType.uint32, 4]`

**Methods:**

- **__init__**: `def __init__[
        dtype`

- **__init__**: `def __init__(out self)`

- **get_base_ptr**: `def get_base_ptr(self) -&gt; Int`

- **load**: `def load[
        dtype`

- **load_to_lds**: `def load_to_lds[
        dtype`

- **store**: `def store[
        dtype`

### is

`struct isonly applicable on AMDGPU hardware."

        self.desc = SIMD[DType.uint32, 4](0)
        var address = bitcast[DType.uint32, 2](UInt64(Int(gds_ptr)))
        self.desc[0] = address[0]
        # assuming 0 stride currently
        self.desc[1] = address[1]
        self.desc[2] = UInt32(size_of[dtype]() * num_records)

        # Architecture-specific word 3 value for buffer resource.
        # https`

**Parameters:**

- **DType.uint32**
- **4**

**Implemented Traits:**

- `0`

**Methods:**

- **__init__**: `def __init__(out self)`

- **get_base_ptr**: `def get_base_ptr(self) -&gt; Int`

- **load**: `def load[
        dtype`

- **load_to_lds**: `def load_to_lds[
        dtype`

- **store**: `def store[
        dtype`

- **_cache_operation_to_amd_aux**: `@parameter def _cache_operation_to_amd_aux[cache_policy`

- **_get_buffer_intrinsic_simd_dtype**: `def _get_buffer_intrinsic_simd_dtype[bytes`

- **_get_buffer_intrinsic_simd_width**: `@parameter def _get_buffer_intrinsic_simd_width[bytes`

- **ds_read_tr16_b64**: `@always_inline def ds_read_tr16_b64[
    dtype`

- **ds_read_tr8_b64**: `@always_inline def ds_read_tr8_b64[
    dtype`

- **cvt_pk_fp8_f32_raw**: `@always_inline def cvt_pk_fp8_f32_raw[
    dtype`

- **or**: `fn ordtype == DType.float8_e5m2
    ), "cvt_pk_fp8_f32_raw requires E4M3FN or E5M2 destination dtype."

    comptime intrinsic_name = (
        "llvm.amdgcn.cvt.pk.fp8.f32" if dtype
        == DType.float8_e4m3fn else "llvm.amdgcn.cvt.pk.bf8.f32"
    )

    var lo = llvm_intrinsic[intrinsic_name, UInt32, has_side_effect=False](
        src[0], src[1], UInt32(0), False
    )
    var packed = llvm_intrinsic[intrinsic_name, UInt32, has_side_effect=False](
        src[2], src[3], lo, True
    )
    return bitcast[dtype, 4](packed)


# ===-----------------------------------------------------------------------===#
# AMD permlane shuffle
# ===-----------------------------------------------------------------------===#


@always_inline
def permlane_swap[
    dtype`

- **permlane_shuffle**: `def permlane_shuffle[
    dtype`

### is

`struct isonly defined for CDNA"
                " and RDNA 1-4 GPUs."
            )
            # GFX9 (CDNA/GCN)
            self.desc[3] = 0x00020000

    @always_inline("nodebug")
    def __init__(out self)`

**Parameters:**

- **3**

**Implemented Traits:**

- `CDNA/GCN`

### is

`struct isonly applicable on AMDGPU hardware."
        self.desc = 0

    @always_inline("nodebug")
    def get_base_ptr(self) -&gt; Int`

**Implemented Traits:**

- `"nodebug"`

## 函数

### ldg

`@always_inline def ldg[
    dtype`

### warpgroup_reg_alloc

`def warpgroup_reg_alloc[count`

### warpgroup_reg_dealloc

`def warpgroup_reg_dealloc[count`

### lop

`@always_inline def lop[lut`

### byte_permute

`@always_inline def byte_permute(a`

### _byte_permute_inst

`def _byte_permute_inst() -&gt; StaticString`

### mulhi

`@always_inline def mulhi(a`

### mulhi

`@always_inline def mulhi(a`

### mulhi

`@always_inline def mulhi(a`

### mulhi

`@always_inline def mulhi(a`

### mulhi

`@always_inline def mulhi(a`

### mulhi

`@always_inline def mulhi(a`

### mulwide

`@always_inline def mulwide(a`

### mulwide

`@always_inline def mulwide(a`

### get_ib_sts

`@always_inline def get_ib_sts() -&gt; Int32`
