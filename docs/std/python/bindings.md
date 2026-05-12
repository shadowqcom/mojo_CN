---
title: "bindings"
sidebar_label: "bindings"
description: "提供为 Mojo 代码创建 Python 绑定的基础设施。此模块实现通过 CPython C API 将 Mojo 函数和类型暴露给 Python 的核心机制。"
---

# bindings

提供为 Mojo 代码创建 Python 绑定的基础设施。

此模块实现通过 CPython C API 将 Mojo 函数和类型暴露给 Python 的核心机制。它包括用于构建 Python 模块和类型对象的构建器类型、用于在 Mojo 和 Python 调用约定之间转换的包装函数，以及用于参数验证和类型转换的工具。这实现了 Mojo 和 Python 代码之间的无缝双向互操作性。

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
