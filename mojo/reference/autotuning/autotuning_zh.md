# autotuning自动调谐

实现自动调谐功能。
您可以从包中导入这些 API。例如：`autotune`

```
from autotune import cost_of
```



## `cost_of`
```
cost_of[fn_type: AnyRegType, func: fn_type]() -> Int
```

计算函数中的操作数。

此函数采用函数引用，并通过计算函数中的 MLIR 操作数来估计调用函数的“成本”。

**参数：**

- **fn_type** ()：函数的签名类型。`AnyRegType`
- **func** ()：要计算的函数。`fn_type`

**返回：**

函数中细化后操作的数目。