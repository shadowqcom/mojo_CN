# loop

Implements higher-order functions.

You can import these APIs from the `utils.loop` module. For example:

```
from utils.loop import unroll
```

## `unroll`[​](https://docs.modular.com/mojo/stdlib/utils/loop#unroll "Direct link to unroll")

`unroll[func: fn[Int]() capturing -> None, count: Int]()`

Repeatedly evaluates a function `count` times.

**Parameters:**

- ​**func** (`fn[Int]() capturing -> None`): The function to evaluate. The function should take a single `Int` argument, which is the loop index value.
- ​**count** (`Int`): A number of repetitions.

`unroll[func: fn[Int]() raises capturing -> None, count: Int]()`

Repeatedly evaluates a function `count` times.

**Parameters:**

- ​**func** (`fn[Int]() raises capturing -> None`): The function to evaluate. The function should take a single `Int` argument, which is the loop index value.
- ​**count** (`Int`): A number of repetitions.

`unroll[func: fn[Int, Int]() capturing -> None, dim0: Int, dim1: Int]()`

Repeatedly evaluates a 2D nested loop.

**Parameters:**

- ​**func** (`fn[Int, Int]() capturing -> None`): The function to evaluate. The function should take two `Int` arguments: the outer and inner loop index values.
- ​**dim0** (`Int`): The first dimension size.
- ​**dim1** (`Int`): The second dimension size.

`unroll[func: fn[Int, Int, Int]() capturing -> None, dim0: Int, dim1: Int, dim2: Int]()`

Repeatedly evaluates a 3D nested loop.

**Parameters:**

- ​**func** (`fn[Int, Int, Int]() capturing -> None`): The function to evaluate. The function should take three `Int` arguments: one for each nested loop index value.
- ​**dim0** (`Int`): The first dimension size.
- ​**dim1** (`Int`): The second dimension size.
- ​**dim2** (`Int`): The second dimension size.