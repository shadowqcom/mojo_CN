# python

Implements Python interoperability.

You can import these APIs from the `python` package. For example:

```
from python import Python
```

## `Python`

Provides methods that help you use Python code in Mojo.

**Fields:**

- ​**impl** (`_PythonInterfaceImpl`): The underlying implementation of Mojo's Python interface.

**Implemented traits:**

`AnyType`

**Methods:**

### `__init__`

`__init__(inout self: Self)`

Default constructor.

### `__copyinit__`

`__copyinit__(inout self: Self, existing: Self)`

Copy constructor.

**Args:**

- ​**existing** (`Self`): The existing instance to copy from.

### `eval`

`eval(inout self: Self, code: StringRef) -> Bool`

Executes the given Python code.

**Args:**

- ​**code** (`StringRef`): The python code to execute.

**Returns:**

`True` if the code executed successfully or `False` if the code raised an exception.

### `evaluate`

`static evaluate(expr: StringRef) -> PythonObject`

Executes the given Python code.

**Args:**

- ​**expr** (`StringRef`): The Python expression to evaluate.

**Returns:**

`PythonObject` containing the result of the evaluation.

### `add_to_path`

`static add_to_path(dir_path: String)`

Adds a directory to the Python path.

This might be necessary to import a Python module via `import_module()`. For example:

```
from python import Python# Specify path to `mypython.py` modulePython.add_to_path("path/to/module")var mypython = Python.import_module("mypython")var c = mypython.my_algorithm(2, 3)
```

**Args:**

- ​**dir\_path** (`String`): The path to a Python module you want to import.

### `import_module`

`static import_module(module: StringRef) -> PythonObject`

Imports a Python module.

This provides you with a module object you can use just like you would in Python. For example:

```
from python import Python# This is equivalent to Python's `import numpy as np`var np = Python.import_module("numpy")a = np.array([1, 2, 3])
```

**Args:**

- ​**module** (`StringRef`): The Python module name. This module must be visible from the list of available Python paths (you might need to add the module's path with `add_to_path()`).

**Returns:**

The Python module.

### `__str__`

`__str__(inout self: Self, str_obj: PythonObject) -> StringRef`

Return a string representing the given Python object.

This function allows to convert Python objects to Mojo string type.

**Returns:**

Mojo string representing the given Python object.

### `throw_python_exception_if_error_state`

`static throw_python_exception_if_error_state(inout cpython: CPython)`

Raise an exception if CPython interpreter is in an error state.

**Args:**

- ​**cpython** (`CPython`): The cpython instance we wish to error check.

### `is_type`

`static is_type(x: PythonObject, y: PythonObject) -> Bool`

Test if the `x` object is the `y` object, the same as `x is y` in Python.

**Args:**

- ​**x** (`PythonObject`): The left-hand-side value in the comparison.
- ​**y** (`PythonObject`): The right-hand-side type value in the comparison.

**Returns:**

True if `x` and `y` are the same object and False otherwise.

### `type`

`static type(obj: PythonObject) -> PythonObject`

Return Type of this PythonObject.

**Args:**

- ​**obj** (`PythonObject`): PythonObject we want the type of.

**Returns:**

A PythonObject that holds the type object.

### `none`

`static none() -> PythonObject`

Get a `PythonObject` representing `None`.

**Returns:**

`PythonObject` representing `None`.