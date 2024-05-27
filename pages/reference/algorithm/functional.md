# functional

实现高阶函数。

您可以从 algorithm 包导入这些 API。例如：

```mojo
from algorithm import map
```

**别名:**

- ​`Static1DTileUnitFunc = fn[Int](Int, /) capturing -> None`: Signature of a 1d tiled function that performs some work with a static tile size and an offset. i.e. func<tile\_size: Int> (offset: Int)

- ​`Dynamic1DTileUnitFunc = fn(Int, Int, /) capturing -> None`: Signature of a 1d tiled function that performs some work with a dynamic tile size and an offset. i.e. func(offset: Int, tile\_size: Int)

- ​`BinaryTile1DTileUnitFunc = fn[Int](Int, Int, /) capturing -> None`: Signature of a tiled function that performs some work with a dynamic tile size and a secondary static tile size.

- ​`Static2DTileUnitFunc = fn[Int, Int](Int, Int, /) capturing -> None`: Signature of a 2d tiled function that performs some work with a static tile size and an offset. i.e. func<tile\_size\_x: Int, tile\_size\_y: Int> (offset\_x: Int, offset\_y: Int)

- ​`SwitchedFunction = fn[Bool]() capturing -> None`

- ​`SwitchedFunction2 = fn[Bool, Bool]() capturing -> None`

- ​`Static1DTileUnswitchUnitFunc = fn[Int, Bool](Int, Int, /) capturing -> None`: Signature of a tiled function that performs some work with a static tile size and an offset. i.e. func<tile\_size: Int> (offset: Int)

- ​`Static1DTileUnitFuncWithFlag = fn[Int, Bool](Int, /) capturing -> None`

- ​`Dynamic1DTileUnswitchUnitFunc = fn[Bool](Int, Int, Int, /) capturing -> None`

- ​`Static1DTileUnitFuncWithFlags = fn[Int, Bool, Bool](Int, /) capturing -> None`


## `map`
```map[func: fn(Int, /) capturing -> None](size: Int)```

将函数映射到从0到size的范围上。

**Parameters:**

- **func** (`fn(Int, /) capturing -> None`)：要映射的函数。

**Args:**

- **size** (`Int`)：元素的数量。


## `vectorize`

```vectorize[func: fn[Int](Int, /) capturing -> None, simd_width: Int, unroll_factor: Int](size: Int)```

通过在 0 到 的范围内映射函数并在每一步`size`递增 来简化 SIMD 优化循环`simd_width`。其余部分`size % simd_width`将在单独的迭代中运行。

下面的示例演示了如何通过使用计算机上的 SIMD 寄存器同时设置多个值来提高循环的性能：

```mojo
from algorithm.functional import vectorize

# The amount of elements to loop through
alias size = 10
# How many Dtype.int32 elements fit into the SIMD register (4 on 128bit)
alias simd_width = simdwidthof[DType.int32]()

fn main():
    var p = DTypePointer[DType.int32].alloc(size)

    # @parameter allows the closure to capture the `p` pointer
    @parameter
    fn closure[simd_width: Int](i: Int):
        print("storing", simd_width, "els at pos", i)
        p.store[width=simd_width](i, i)

    vectorize[closure, simd_width](size)
    print(p.load[width=size]())
```

在 SIMD 寄存器大小为 128 的机器上，这将在每次迭代时设置 4xInt32 值。 10 % 4 的余数为 2，因此最后两个元素将在两次单独的迭代中设置：

```mojo
storing 4 els at pos 0
storing 4 els at pos 4
storing 1 els at pos 8
storing 1 els at pos 9
[0, 0, 0, 0, 4, 4, 4, 4, 8, 9]
```

您还可以展开循环以潜在地提高性能，但代价是二进制大小：

```mojo
vectorize[closure, width, unroll_factor=2](size)
```

在生成的程序集中，函数调用将被重复，从而导致算术、比较和条件跳转操作减少。程序集在伪代码中看起来像这样：

```mojo
closure[4](0)
closure[4](4)
# Remainder loop won't unroll unless `size` is passed as a parameter
for i in range(8, 10):
    closure[1](i)
    closure[1](i)
```

size如果已知编译时间可以减少剩余部分的迭代，则可以将其作为参数传递。仅当余数是 2 的指数 (2, 4, 8, 16, ...) 时才会发生这种情况。如果不是 2 的指数，余数循环仍会展开以提高性能。

**Parameters:**

- **func** ( `fn[Int](Int, /) capturing -> None`)：将在循环体中调用的函数。
- **​simd** **\_** **width** ( `Int`)：SIMD向量宽度。
- **​unroll\_factor** ( `Int`)：主循环的展开因子（默认 1 **）****。**

**Args:**

- **​size** ( `Int`): 循环的上限。

```vectorize[func: fn[Int](Int, /) capturing -> None, simd_width: Int, size: Int, unroll_factor: Int]()```

通过在 0 到 的范围内映射函数并在每一步`size`递增 来简化 SIMD 优化循环`simd_width`。`size % simd_width`如果它是 2 的指数，则其余部分将在单次迭代中运行。

下面的示例演示了如何通过使用计算机上的 SIMD 寄存器同时设置多个值来提高循环的性能：

```mojo
from algorithm.functional import vectorize

# The amount of elements to loop through
alias size = 10
# How many Dtype.int32 elements fit in SIMD register (4 on 128bit)
alias simd_width = simdwidthof[DType.int32]()

fn main():
    var p = DTypePointer[DType.int32].alloc(size)

    # @parameter allows the closure to capture the `p` pointer
    @parameter
    fn closure[simd_width: Int](i: Int):
        print("storing", simd_width, "els at pos", i)
        p.store[width=simd_width](i, i)

    vectorize[closure, simd_width, size]()
    print(p.load[width=size]())
```

在 SIMD 寄存器大小为 128 的机器上，这将在每次迭代时设置 4xInt32 值。 10 % 4 的余数为 2，因此最后两个元素将在单次迭代中设置：

```
storing 4 els at pos 0
storing 4 els at pos 4
storing 2 els at pos 8
[0, 0, 0, 0, 4, 4, 4, 4, 8, 8]
```

如果余数不是 2 的指数（2、4、8、16 ...），则每个元素都会进行单独的迭代。然而，作为参数传递`size`还允许展开剩余元素的循环。

您还可以展开主循环以潜在地提高性能，但代价是二进制大小：

```
vectorize[closure, width, size=size, unroll_factor=2]()
```

在生成的程序集中，函数调用将被重复，从而导致算术、比较和条件跳转操作减少。程序集在伪代码中看起来像这样：

```
closure[4](0)
closure[4](4)
closure[2](8)
```

**Parameters:**

- **func** ( `fn[Int](Int, /) capturing -> None`)：将在循环体中调用的函数。
- **​simd** **\_** **width** ( `Int`)：SIMD向量宽度。
- **​size** ( `Int`): 循环的上限。
- **​unroll\_factor** ( `Int`)：主循环的展开因子（默认 1 **）****。**

## `async_parallelize`

```async_parallelize[func: fn(Int, /) capturing -> None](num_work_items: Int)```

执行 func(0) ... func(num _ work _ items-1) 作为并行子任务，并在所有任务完成时异步完成。

**Parameters:**

- **func** ( `fn(Int, /) capturing -> None`)：要调用的函数。

**Args:**

- **​num** **\_** **work** **\_** **items** ( `Int`)：并行任务数。

```async_parallelize[func: fn(Int, /) raises capturing -> None](num_work_items: Int)```

执行 func(0) ... func(num _ work _ items-1) 作为并行子任务，并在所有任务完成时异步完成。

TODO：目前 func 引发的异常将导致陷阱，而不是传播回调用者。

**Parameters:**

- **func** ( `fn(Int, /) raises capturing -> None`)：要调用的函数。

**Args:**

- **​num** **\_** **work** **\_** **items** ( `Int`)：并行任务数。

## `sync_parallelize`

```
sync_parallelize[func: fn(Int, /) capturing -> None](num_work_items: Int)
```

执行 func(0) ... func(num \_ work \_ items-1) 作为并行子任务，并在所有任务完成后返回。

**Parameters:**

- **func** ( `fn(Int, /) capturing -> None`)：要调用的函数。

**Args:**

- **​num** **\_** **work** **\_** **items** ( `Int`)：并行任务数。

```
sync_parallelize[func: fn(Int, /) raises capturing -> None](num_work_items: Int)
```
执行 func(0) ... func(num \_ work \_ items-1) 作为并行子任务，并在所有任务完成后返回。

TODO：目前 func 引发的异常将导致陷阱，而不是传播回调用者。

**Parameters:**

- **func** ( `fn(Int, /) raises capturing -> None`)：要调用的函数。

**Args:**

- **​num** **\_** **work** **\_** **items** ( `Int`)：并行任务数。

## `parallelize`

```
parallelize[func: fn(Int, /) capturing -> None]()
```

并行执行 func(0) ... func(N-1) 作为子任务，并在所有任务完成后返回。 N 被选为系统上处理器的数量。

**Parameters:**

- **func** ( `fn(Int, /) capturing -> None`)：要调用的函数。

```parallelize\[func: fn(Int, /) capturing -> None\](num\_work\_items: Int)```

并行执行 func(0) ... func(num \_ work \_ items-1) 作为子任务，并在所有任务完成后返回。

注意：创建和销毁本地运行时！不要从内核中使用！

**Parameters:**

- **func** ( `fn(Int, /) capturing -> None`)：要调用的函数。

**Args:**

- **​num** **\_** **work** **\_** **items** ( `Int`)：并行任务数。

```parallelize[func: fn(Int, /) capturing -> None](num_work_items: Int, num_workers: Int)```

并行执行 func(0) ... func(num \_ work \_ items-1) 作为子任务，并在所有任务完成后返回。

**Parameters:**

- **func** ( `fn(Int, /) capturing -> None`)：要调用的函数。

**Args:**

- ​num _ work _ items ( Int)：并行任务数。
- ​num_workers ( )：用于执行的工作人员Int数量。

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

## `tile`

```tile[workgroup_function: fn[Int](Int, /) capturing -> None, tile_size_list: VariadicList[Int]](offset: Int, upperbound: Int)```

启动指定图块大小列表中的工作组的生成器。

工作组功能是一种可以处理可配置的连续“区块”工作负载的功能。例如， `work_on[3](5)` 应启动第 5、6、7 项的计算，并且在语义上应等同于 `work_on[1](5)`, `work_on[1](6)`, `work_on[1](7)`。

该生成器将尝试按照列出的顺序继续处理给定的图块尺寸列表。例如， `tile[func, (3,2,1)](offset, upperbound)` 将尝试`func[3]`从偏移量开始调用，直到剩余工作距离上限小于 3，然后尝试`func[2]`，然后`func[1]`等等。

**Parameters:**

- **​workgroup** **\_** **function** ( `fn[Int](Int, /) capturing -> None`)：处理一块工作负载的工作组函数。
- **​tile** **\_** **size** **\_** **list** ( `VariadicList[Int]`)：要启动工作的图块尺寸列表。

**Args:**

- **​offset** ( `Int`): 开始工作的初始索引。
- **​upperbound** ( `Int`)：工作函数不应超过的运行时上限。

```tile[workgroup_function: fn(Int, Int, /) capturing -> None](offset: Int, upperbound: Int, tile_size_list: VariadicList[Int])```

启动指定图块大小列表中的工作组的生成器。

这是瓦片生成器的版本，适用于work\_group函数可以将瓦片大小作为运行时值的情况。

**Parameters:**

- **​workgroup** **\_** **function** ( `fn(Int, Int, /) capturing -> None`)：处理一块工作负载的工作组函数。

**Args:**

- **​offset** ( `Int`): 开始工作的初始索引。
- **​upperbound** ( `Int`)：工作函数不应超过的运行时上限。
- **​tile** **\_** **size** **\_** **list** ( `VariadicList[Int]`)：要启动工作的图块尺寸列表。

> tile[secondary_tile_size_list: VariadicList[Int], secondary_cleanup_tile: Int, 
> workgroup_function: fn[Int](Int, Int, /) capturing -> None](offset: Int, upperbound: Int, 
> primary_tile_size_list: VariadicList[Int], primary_cleanup_tile: Int)

一个生成器，它在指定的图块大小列表中启动工作组，直到Primary_tile_大小的总和超过上限。

**Parameters:**

- **secondary\_tile\_size\_list** ( `VariadicList[Int]`)：要启动工作**的****静态****图块****尺寸****列表****。**
- **secondary\_cleanup\_tile** ( **)**`Int`：当主图块大小不完全符合上限时使用的最后一个**静态****图块****。**
- **​workgroup** **\_** **function** ( `fn[Int](Int, Int, /) capturing -> None`)：处理一块工作负载的工作组函数。

**Args:**

​offset ( Int): 开始工作的初始索引。
​upperbound ( Int)：工作函数不应超过的运行时上限。
​primary_tile_size_list ( ) VariadicList[Int]：要启动工作的动态图块尺寸列表。
​primary_cleanup_tile ( ) Int：当主图块大小不完全符合上限时使用的最后一个动态图块。

> tile[workgroup_function: fn[Int, Int](Int, Int, /) capturing -> None, tile_sizes_x: VariadicList[Int], tile_sizes_y: VariadicList[Int]](offset_x: Int, offset_y: Int, upperbound_x: Int, upperbound_y: Int)

使用每个维度中可能的最大图块大小启动工作组_函数，从 x 和 y 偏移量开始，直到达到 x 和 y 上限。

**Parameters:**

- **​workgroup** **\_** **function** ( `fn[Int, Int](Int, Int, /) capturing -> None`)：为每个图块和偏移量调用的函数。
- **​tile\_sizes\_x** **(** ) `VariadicList[Int]`：用于工作组\_函数第一个**参数的图块****尺寸列表****。**
- **​tile\_sizes\_y** **(** ) `VariadicList[Int]`：用于workgroup\_函数第二个参数**的**图块**尺寸****列表**。

**Args:**

- **offset** **\_** **x** ( `Int`): 传递给 workgroup \_函数的初始 x 偏移量。
- **offset** **\_** **y** ( `Int`): 传递给 workgroup \_函数的初始 y 偏移量。
- **​upperbound** **\_** **x** ( `Int`)：传递给工作组函数的 x 维度最大偏移量。
- **​upperbound** **\_** **y** ( `Int`)：传递给工作组函数的 y 维度最大偏移量。

## `unswitch`

`unswitch[switched_func: fn[Bool]() capturing -> None](dynamic_switch: Bool)`

执行功能性取消转换。

Unswitch 是一种简单的模式，与循环 unswitching pass 的想法类似，但扩展到了功能模式。该模式有利于以下代码转换，从而减少生成代码中的分支数量

前：

```
for i in range(...)
    if i < xxx:
        ...
```

后：

```
if i < ...
    for i in range(...)
        ...
else
    for i in range(...)
        if i < xxx:
            ...
```

此 unswitch 函数借助元参数概括了该模式，并且可用于执行循环取消切换和其他平铺谓词提升，如 simd 和 amx 中。

TODO：泛化以支持多个谓词。 TODO：一旦嵌套 lambda 组合良好，应该可以轻松地使 unswitch 与tile 组合。

**Parameters:**

- **​switched** **\_** **func** ( `fn[Bool]() capturing -> None`)：包含可取消切换的内部循环逻辑的函数。

**Args:**

- **​dynamic** **\_** **switch** ( `Bool`)：启用未切换代码路径的动态条件。

`unswitch[switched_func: fn[Bool, Bool]() capturing -> None](dynamic_switch_a: Bool, dynamic_switch_b: Bool)`

执行功能 2 谓词 unswitch 转换。

**Parameters:**

- **switched** **\_** **func** ( `fn[Bool, Bool]() capturing -> None`)：包含内部循环逻辑的函数，有 2 个可以取消切换的谓词。

**Args:**

- **​dynamic** **\_** **switch** **\_** **a** ( `Bool`)：启用外部未切换代码路径的第一个动态条件。
- **​dynamic** **\_** **switch** **\_** **b** ( `Bool`)：启用内部未切换代码路径的第二个动态条件。

## `tile_and_unswitch`

`tile_and_unswitch[workgroup_function: fn[Int, Bool](Int, Int, /) capturing -> None, tile_size_list: VariadicList[Int]](offset: Int, upperbound: Int)`

执行时间和取消开关功能转换。

静态图块的一种变体，具有可以取消切换的工作组功能。该生成器是tile和unswitch的融合版本，其中静态unswitch在整个工作负载的“内部”部分为真，而仅在剩余tile上为假。

**Parameters:**

- **​workgroup** **\_** **function** ( `fn[Int, Bool](Int, Int, /) capturing -> None`)：处理一块工作负载的工作组函数。
- **​tile** **\_** **size** **\_** **list** ( `VariadicList[Int]`)：要启动工作的图块尺寸列表。

**Args:**

- **​offset** ( `Int`): 开始工作的初始索引。
- **​upperbound** ( `Int`)：工作函数不应超过的运行时上限。

`tile_and_unswitch[workgroup_function: fn[Bool](Int, Int, Int, /) capturing -> None](offset: Int, upperbound: Int, tile_size_list: VariadicList[Int])`

执行时间和取消开关功能转换。

动态图块的一种变体，具有可以取消切换的工作组功能。该生成器是tile和unswitch的融合版本，其中静态unswitch在整个工作负载的“内部”部分为真，而仅在剩余tile上为假。

**Parameters:**

- **​workgroup** **\_** **function** ( `fn[Bool](Int, Int, Int, /) capturing -> None`)：处理一块工作负载的工作组函数。

**Args:**

- **​offset** ( `Int`): 开始工作的初始索引。
- **​upperbound** ( `Int`)：工作函数不应超过的运行时上限。
- **​tile** **\_** **size** **\_** **list** ( `VariadicList[Int]`)：要启动工作的图块尺寸列表。

## `tile_middle_unswitch_boundaries`

`tile_middle_unswitch_boundaries[work_fn: fn[Int, Bool](Int, /) capturing -> None, middle_tile_sizes: VariadicList[Int], left_tile_size: Int, right_tile_size: Int](left_boundary_start: Int, left_boundary_end: Int, right_boundary_start: Int, right_boundary_end: Int)`

将一维迭代空间分为三部分，并使用不同的步骤对它们进行平铺。

一维迭代空间分为： 1 . \[左\_边界\_开始，左\_边界\_结束)，受左边界影响。 2 . \[左\_边界\_结束，右\_边界\_开始），不受任何边界影响。 3 . \[右\_边界\_开始，右\_边界\_结束)，受右边界影响。

work \_ fn 的开关对于左右边界都是 true，这意味着边界条件，例如卷积中的填充。中间部分使用静态图块尺寸进行平铺，开关设置为 false。

`middle_tile_sizes`应按降序排列以获得最佳性能。 （列表中后面出现的较大图块大小使 while 循环失败。）

**Parameters:**

- **​work** **\_** **fn** ( `fn[Int, Bool](Int, /) capturing -> None`)：处理一块工作负载的工作函数。
- **middle** **\_tile\_sizes** ( ): 中间部分的**瓷砖****尺寸**`VariadicList[Int]`列表**。**
- **​left** **\_tile\_size** ( `Int`): 左边界区域的**平铺****大小****。**
- **​right\_tile\_size** ( ):**右边****界**`Int`区域的平铺**大小****。**

**Args:**

- **​left\_boundary\_start** **(** ) ：**左边界**`Int`的起始**索引****。**
- **​left** **\_** **border** **\_** **end** ( `Int`)：左边界的结束索引。
- **​right\_boundary\_start** **(** ) ：**右边****界**`Int`的起始索引**。**
- **​right** **\_** **border** **\_** **end** ( `Int`)：右边界的结束索引。

`tile_middle_unswitch_boundaries[work_fn: fn[Int, Bool, Bool](Int, /) capturing -> None, tile_size: Int, size: Int]()`

两端具有边界条件的平铺一维迭代空间。

该生成器主要用于与静态形状进行卷积。`work_fn`的标志暗示该函数处理边界处的填充。该大小是静态输出行大小，即WO 维度。

**Parameters:**

- **​work** **\_** **fn** ( `fn[Int, Bool, Bool](Int, /) capturing -> None`)：更新一个图块的工作函数。它有两个标志，分别表示左边界和右边界。
- **​tile** **\_** **size** ( `Int`): 一维图块尺寸。
- **​size** ( `Int`)：迭代范围为\[ 0, size)。

## `elementwise`

`elementwise[func: fn[Int, Int](StaticIntTuple[$1], /) capturing -> None, simd_width: Int, rank: Int](shape: StaticIntTuple[rank])`

执行`func[width, rank](indices)`，可能作为子任务，以获得宽度和索引的适当组合，以覆盖形状。当所有子任务完成时返回。

**Parameters:**

- **​func** ( `fn[Int, Int](StaticIntTuple[$1], /) capturing -> None`)：主体函数。
- **​simd** **\_** **width** ( `Int`)：要使用的 SIMD 向量宽度。
- **​rank** ( `Int`)：缓冲区的排名。

**Args:**

- **​shape** ( `StaticIntTuple[rank]`): 缓冲区的形状。

## `parallelize_over_rows`

`parallelize_over_rows[func: fn(Int, Int, /) capturing -> None, shape: Int](shape: StaticIntTuple[shape], axis: Int, grain_size: Int)`

在形状的非轴维度上并行化函数。

**Parameters:**

- **func** ( `fn(Int, Int, /) capturing -> None`)：在行范围内调用的函数。

**Args:**

- **​shape** ( `StaticIntTuple[shape]`)：要并行化的形状。
- **​axis** ( `Int`)：行是沿形状轴尺寸的切片。
- **grain\_size** **(** ) ：保证使用附加线程**的**`Int`最小元素数。

## `stencil`

`stencil[rank: Int, stencil_rank: Int, stencil_axis: StaticIntTuple[stencil_rank], simd_width: Int, type: DType, map_fn: fn(StaticIntTuple[stencil_rank], /) capturing -> Tuple[StaticIntTuple[stencil_rank], StaticIntTuple[stencil_rank]], map_strides: fn(dim: Int) capturing -> Int, load_fn: fn[Int, DType](StaticIntTuple[rank], /) capturing -> SIMD[$1, $0], compute_init_fn: fn[Int]() capturing -> SIMD[type, $0], compute_fn: fn[Int](StaticIntTuple[rank], SIMD[type, $0], SIMD[type, $0], /) capturing -> SIMD[type, $0], compute_finalize_fn: fn[Int](StaticIntTuple[rank], SIMD[type, $0], /) capturing -> None](shape: StaticIntTuple[rank], input_shape: StaticIntTuple[rank])`

并行计算模板操作。

将输出计算为处理输入模板的函数，模板被计算为由 map \_ fn确定的每个输出点的连续区域：map \_ fn(y) - \>下界、上界。超出输入域的区域的边界条件由 load\_fn处理。

**Parameters:**

- **​rank** ( `Int`)：输入和输出域的排名。
- **​stencil\_rank** **(** ) ：**模板**`Int`子域切片的排名。
- **​stencil** **\_** **axis** ( `StaticIntTuple[stencil_rank]`)：模板子域轴。
- **​simd** **\_** **width** ( `Int`)：要使用的 SIMD 向量宽度。
- **​type** ( `DType`)：输入和输出数据类型。
- **​map** **\_** **fn** ( `fn(StaticIntTuple[stencil_rank], /) capturing -> Tuple[StaticIntTuple[stencil_rank], StaticIntTuple[stencil_rank]]`)：将输出域中的点映射到输入共域的函数。
- **​map** **\_** **strides** ( `fn(dim: Int) capturing -> Int`)：返回暗淡步幅的函数。
- **​load** **\_** **fn** ( )：从输入加载 simd \_ width`fn[Int, DType](StaticIntTuple[rank], /) capturing -> SIMD[$1, $0]`向量的函数。
- **​compute** **\_** **init** **\_** **fn** ( `fn[Int]() capturing -> SIMD[type, $0]`)：在模板上初始化向量计算的函数。
- **​compute** **\_** **fn** ( `fn[Int](StaticIntTuple[rank], SIMD[type, $0], SIMD[type, $0], /) capturing -> SIMD[type, $0]`)：一个函数，用于处理模板中每个点的计算值。
- **​compute** **\_** **Finalize** **\_** **fn** ( `fn[Int](StaticIntTuple[rank], SIMD[type, $0], /) capturing -> None`)：一个函数，用于完成给定模板的输出域中的点的计算。

**Args:**

- **​shape** ( `StaticIntTuple[rank]`): 输出缓冲区的形状。
- **​input** **\_** **shape** ( `StaticIntTuple[rank]`)：输入缓冲区的形状。

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>