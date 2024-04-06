# autotuning

Implements the autotune functionality.

You can import these APIs from the `autotune` package. For example:

```
from autotune import cost_of
```

## `cost_of`

`cost_of[fn_type: AnyRegType, func: fn_type]() -> Int`

Count the number of operations in a function.

This function takes a function reference and estimates the "cost" of invoking the function by counting the number of MLIR operations in the function after elaboration.

**Parameters:**

- ​**fn\_type** (`AnyRegType`): The signature type of the function.
- ​**func** (`fn_type`): The function to evaluate.

**Returns:**

The number of post-elaboration operations in the function.