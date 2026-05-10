---
title: "bindings"
sidebar_label: "bindings"
description: "Provides infrastructure for creating Python bindings to Mojo code.  This module implements the core machinery for exposing Mojo functions and types to Python through CPython's C API. It includes build"
---

# bindings

Provides infrastructure for creating Python bindings to Mojo code.

This module implements the core machinery for exposing Mojo functions and types
to Python through CPython's C API. It includes builder types for constructing
Python modules and type objects, wrapper functions for converting between Mojo
and Python calling conventions, and utilities for argument validation and type
conversion. This enables seamless bidirectional interoperability between Mojo
and Python code.

## 类型

### PyMojoObject

`struct PyMojoObject[T`

**Fields:**

- `ob_base: PyObject`
- `mojo_value: Self.T`
- `is_initialized: Bool`

### PythonModuleBuilder

`struct PythonModuleBuilder`

**Fields:**

- `module: PythonObject`
- `functions: List[PyMethodDef]`
- `type_builders: List[PythonTypeBuilder]`

**Methods:**

- **__init__**: `def __init__(out self, name`

- **__init__**: `def __init__(out self, module`

- **add_type**: `def add_type[
        T`

- **def_py_c_function**: `def def_py_c_function(
        mut self,
        func`

- **def_py_c_function**: `def def_py_c_function(
        mut self,
        func`

- **def_py_function**: `def def_py_function[
        func`

- **def_py_function**: `def def_py_function[
        func`

- **_generic_def_py_function**: `def _generic_def_py_function[
        func`

- **def_function**: `def def_function[
        func_type`

- **finalize**: `def finalize(mut self) raises -&gt; PythonObject`

### PythonTypeBuilder

`struct PythonTypeBuilder(Copyable)`

**Implemented Traits:**

- `Copyable`

**Fields:**

- `type_name: StaticString`
- `_type_id: Optional[StaticString]`
- `basicsize: Int`
- `_slots: Dict[Int, _CPointer[NoneType, MutAnyOrigin]]`
- `methods: List[PyMethodDef]`

**Methods:**

- **__init__**: `def __init__(out self, type_name`

- **bind**: `@staticmethod def bind[
        T`

- **finalize**: `def finalize(mut self, module`

- **_insert_slot**: `def _insert_slot(mut self, slot`

- **def_init_defaultable**: `def def_init_defaultable[
        T`

- **default_init_func**: `@always_inline def default_init_func(
            out self`

- **def_py_init**: `def def_py_init[
        T`

- **def_py_init**: `def def_py_init[
        T`

- **def_py_c_method**: `def def_py_c_method[
        static_method`

- **def_py_c_method**: `def def_py_c_method[
        static_method`

- **def_py_method**: `def def_py_method[
        method`

- **def_py_method**: `def def_py_method[
        method`

- **_generic_def_py_method**: `def _generic_def_py_method[
        method`

- **def_method**: `def def_method[
        method_type`

- **def_staticmethod**: `def def_staticmethod[
        method_type`

### a

`struct aPython 'type' object from our type spec.
        var type_obj_ptr = cpython.PyType_FromSpec(UnsafePointer(to=type_spec))

        if not type_obj_ptr`

**Implemented Traits:**

- `UnsafePointer(to=type_spec`

## 函数

### _register_py_type_object

`def _register_py_type_object(
    type_id`

### lookup_py_type_object

`def lookup_py_type_object[T`
