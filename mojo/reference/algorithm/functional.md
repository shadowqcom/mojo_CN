# functional

Implements higher-order functions.

You can import these APIs from the `algorithm` package. For example:

```
from algorithm import map
```

**Aliases:**

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

`map[func: fn(Int, /) capturing -> None](size: Int)`

Maps a function over a range from 0 to size.

**Parameters:**

- ​**func** (`fn(Int, /) capturing -> None`): Function to map.

**Args:**

- ​**size** (`Int`): The number of elements.

## `vectorize`

`vectorize[func: fn[Int](Int, /) capturing -> None, simd_width: Int, unroll_factor: Int](size: Int)`

Simplifies SIMD optimized loops by mapping a function across a range from 0 to `size`, incrementing by `simd_width` at each step. The remainder of `size % simd_width` will run in separate iterations.

The below example demonstrates how you could improve the performance of a loop, by setting multiple values at the same time using SIMD registers on the machine:

```
from algorithm.functional import vectorize# The amount of elements to loop throughalias size = 10# How many Dtype.int32 elements fit into the SIMD register (4 on 128bit)alias simd_width = simdwidthof[DType.int32]()fn main():    var p = DTypePointer[DType.int32].alloc(size)    # @parameter allows the closure to capture the `p` pointer    @parameter    fn closure[simd_width: Int](i: Int):        print("storing", simd_width, "els at pos", i)        p.store[width=simd_width](i, i)    vectorize[closure, simd_width](size)    print(p.load[width=size]())
```

On a machine with a SIMD register size of 128, this will set 4xInt32 values on each iteration. The remainder of 10 % 4 is 2, so those last two elements will be set in two separate iterations:

```
storing 4 els at pos 0storing 4 els at pos 4storing 1 els at pos 8storing 1 els at pos 9[0, 0, 0, 0, 4, 4, 4, 4, 8, 9]
```

You can also unroll the loop to potentially improve performance at the cost of binary size:

```
vectorize[closure, width, unroll_factor=2](size)
```

In the generated assembly the function calls will be repeated, resulting in fewer arithmetic, comparison, and conditional jump operations. The assembly would look like this in psuedocode:

```
closure[4](0)closure[4](4)# Remainder loop won't unroll unless `size` is passed as a parameterfor i in range(8, 10):    closure[1](i)    closure[1](i)
```

You can pass `size` as a parameter if it's compile time known to reduce the iterations for the remainder. This only occurs if the remainder is an exponent of 2 (2, 4, 8, 16, ...). The remainder loop will still unroll for performance improvements if not an exponent of 2.

**Parameters:**

- ​**func** (`fn[Int](Int, /) capturing -> None`): The function that will be called in the loop body.
- ​**simd\_width** (`Int`): The SIMD vector width.
- ​**unroll\_factor** (`Int`): The unroll factor for the main loop (Default 1).

**Args:**

- ​**size** (`Int`): The upper limit for the loop.

`vectorize[func: fn[Int](Int, /) capturing -> None, simd_width: Int, size: Int, unroll_factor: Int]()`

Simplifies SIMD optimized loops by mapping a function across a range from 0 to `size`, incrementing by `simd_width` at each step. The remainder of `size % simd_width` will run in a single iteration if it's an exponent of 2.

The below example demonstrates how you could improve the performance of a loop, by setting multiple values at the same time using SIMD registers on the machine:

```
from algorithm.functional import vectorize# The amount of elements to loop throughalias size = 10# How many Dtype.int32 elements fit in SIMD register (4 on 128bit)alias simd_width = simdwidthof[DType.int32]()fn main():    var p = DTypePointer[DType.int32].alloc(size)    # @parameter allows the closure to capture the `p` pointer    @parameter    fn closure[simd_width: Int](i: Int):        print("storing", simd_width, "els at pos", i)        p.store[width=simd_width](i, i)    vectorize[closure, simd_width, size]()    print(p.load[width=size]())
```

On a machine with a SIMD register size of 128, this will set 4xInt32 values on each iteration. The remainder of 10 % 4 is 2, so those last two elements will be set in a single iteration:

```
storing 4 els at pos 0storing 4 els at pos 4storing 2 els at pos 8[0, 0, 0, 0, 4, 4, 4, 4, 8, 8]
```

If the remainder is not an exponent of 2 (2, 4, 8, 16 ...) there will be a seperate iteration for each element. However passing `size` as a parameter also allows the loop for the remaining elements to be unrolled.

You can also unroll the main loop to potentially improve performance at the cost of binary size:

```
vectorize[closure, width, size=size, unroll_factor=2]()
```

In the generated assembly the function calls will be repeated, resulting in fewer arithmetic, comparison, and conditional jump operations. The assembly would look like this in psuedocode:

```
closure[4](0)closure[4](4)closure[2](8)
```

**Parameters:**

- ​**func** (`fn[Int](Int, /) capturing -> None`): The function that will be called in the loop body.
- ​**simd\_width** (`Int`): The SIMD vector width.
- ​**size** (`Int`): The upper limit for the loop.
- ​**unroll\_factor** (`Int`): The unroll factor for the main loop (Default 1).

## `async_parallelize`

`async_parallelize[func: fn(Int, /) capturing -> None](num_work_items: Int)`

Executes func(0) ... func(num\_work\_items-1) as parallel sub-tasks, and asynchronously completes when all are complete.

**Parameters:**

- ​**func** (`fn(Int, /) capturing -> None`): The function to invoke.

**Args:**

- ​**num\_work\_items** (`Int`): Number of parallel tasks.

`async_parallelize[func: fn(Int, /) raises capturing -> None](num_work_items: Int)`

Executes func(0) ... func(num\_work\_items-1) as parallel sub-tasks, and asynchronously completes when all are complete.

TODO: Currently exceptions raised by func will cause a trap rather than be propagated back to the caller.

**Parameters:**

- ​**func** (`fn(Int, /) raises capturing -> None`): The function to invoke.

**Args:**

- ​**num\_work\_items** (`Int`): Number of parallel tasks.

## `sync_parallelize`

`sync_parallelize[func: fn(Int, /) capturing -> None](num_work_items: Int)`

Executes func(0) ... func(num\_work\_items-1) as parallel sub-tasks, and returns when all are complete.

**Parameters:**

- ​**func** (`fn(Int, /) capturing -> None`): The function to invoke.

**Args:**

- ​**num\_work\_items** (`Int`): Number of parallel tasks.

`sync_parallelize[func: fn(Int, /) raises capturing -> None](num_work_items: Int)`

Executes func(0) ... func(num\_work\_items-1) as parallel sub-tasks, and returns when all are complete.

TODO: Currently exceptions raised by func will cause a trap rather than be propagated back to the caller.

**Parameters:**

- ​**func** (`fn(Int, /) raises capturing -> None`): The function to invoke.

**Args:**

- ​**num\_work\_items** (`Int`): Number of parallel tasks.

## `parallelize`

`parallelize[func: fn(Int, /) capturing -> None]()`

Executes func(0) ... func(N-1) as sub-tasks in parallel, and returns when all are complete. N is chosen to be the number of processors on the system.

**Parameters:**

- ​**func** (`fn(Int, /) capturing -> None`): The function to invoke.

`parallelize[func: fn(Int, /) capturing -> None](num_work_items: Int)`

Executes func(0) ... func(num\_work\_items-1) as sub-tasks in parallel, and returns when all are complete.

CAUTION: Creates and destroys a local runtime! Do not use from kernels!

**Parameters:**

- ​**func** (`fn(Int, /) capturing -> None`): The function to invoke.

**Args:**

- ​**num\_work\_items** (`Int`): Number of parallel tasks.

`parallelize[func: fn(Int, /) capturing -> None](num_work_items: Int, num_workers: Int)`

Executes func(0) ... func(num\_work\_items-1) as sub-tasks in parallel, and returns when all are complete.

**Parameters:**

- ​**func** (`fn(Int, /) capturing -> None`): The function to invoke.

**Args:**

- ​**num\_work\_items** (`Int`): Number of parallel tasks.
- ​**num\_workers** (`Int`): The number of workers to use for execution.

## `tile`

`tile[workgroup_function: fn[Int](Int, /) capturing -> None, tile_size_list: VariadicList[Int]](offset: Int, upperbound: Int)`

A generator that launches work groups in specified list of tile sizes.

A workgroup function is a function that can process a configurable consecutive "tile" of workload. E.g. `work_on[3](5)` should launch computation on item 5,6,7, and should be semantically equivalent to `work_on[1](5)`, `work_on[1](6)`, `work_on[1](7)`.

This generator will try to proceed with the given list of tile sizes on the listed order. E.g. `tile[func, (3,2,1)](offset, upperbound)` will try to call `func[3]` starting from offset until remaining work is less than 3 from upperbound and then try `func[2]`, and then `func[1]`, etc.

**Parameters:**

- ​**workgroup\_function** (`fn[Int](Int, /) capturing -> None`): Workgroup function that processes one tile of workload.
- ​**tile\_size\_list** (`VariadicList[Int]`): List of tile sizes to launch work.

**Args:**

- ​**offset** (`Int`): The initial index to start the work from.
- ​**upperbound** (`Int`): The runtime upperbound that the work function should not exceed.

`tile[workgroup_function: fn(Int, Int, /) capturing -> None](offset: Int, upperbound: Int, tile_size_list: VariadicList[Int])`

A generator that launches work groups in specified list of tile sizes.

This is the version of tile generator for the case where work\_group function can take the tile size as a runtime value.

**Parameters:**

- ​**workgroup\_function** (`fn(Int, Int, /) capturing -> None`): Workgroup function that processes one tile of workload.

**Args:**

- ​**offset** (`Int`): The initial index to start the work from.
- ​**upperbound** (`Int`): The runtime upperbound that the work function should not exceed.
- ​**tile\_size\_list** (`VariadicList[Int]`): List of tile sizes to launch work.

`tile[secondary_tile_size_list: VariadicList[Int], secondary_cleanup_tile: Int, workgroup_function: fn[Int](Int, Int, /) capturing -> None](offset: Int, upperbound: Int, primary_tile_size_list: VariadicList[Int], primary_cleanup_tile: Int)`

A generator that launches work groups in specified list of tile sizes until the sum of primary\_tile\_sizes has exceeded the upperbound.

**Parameters:**

- ​**secondary\_tile\_size\_list** (`VariadicList[Int]`): List of static tile sizes to launch work.
- ​**secondary\_cleanup\_tile** (`Int`): Last static tile to use when primary tile sizes don't fit exactly within the upperbound.
- ​**workgroup\_function** (`fn[Int](Int, Int, /) capturing -> None`): Workgroup function that processes one tile of workload.

**Args:**

- ​**offset** (`Int`): The initial index to start the work from.
- ​**upperbound** (`Int`): The runtime upperbound that the work function should not exceed.
- ​**primary\_tile\_size\_list** (`VariadicList[Int]`): List of dynamic tile sizes to launch work.
- ​**primary\_cleanup\_tile** (`Int`): Last dynamic tile to use when primary tile sizes don't fit exactly within the upperbound.

`tile[workgroup_function: fn[Int, Int](Int, Int, /) capturing -> None, tile_sizes_x: VariadicList[Int], tile_sizes_y: VariadicList[Int]](offset_x: Int, offset_y: Int, upperbound_x: Int, upperbound_y: Int)`

Launches workgroup\_function using the largest tile sizes possible in each dimension, starting from the x and y offset, until the x and y upperbounds are reached.

**Parameters:**

- ​**workgroup\_function** (`fn[Int, Int](Int, Int, /) capturing -> None`): Function that is invoked for each tile and offset.
- ​**tile\_sizes\_x** (`VariadicList[Int]`): List of tile sizes to use for the first parameter of workgroup\_function.
- ​**tile\_sizes\_y** (`VariadicList[Int]`): List of tile sizes to use for the second parameter of workgroup\_function.

**Args:**

- ​**offset\_x** (`Int`): Initial x offset passed to workgroup\_function.
- ​**offset\_y** (`Int`): Initial y offset passed to workgroup\_function.
- ​**upperbound\_x** (`Int`): Max offset in x dimension passed to workgroup function.
- ​**upperbound\_y** (`Int`): Max offset in y dimension passed to workgroup function.

## `unswitch`

`unswitch[switched_func: fn[Bool]() capturing -> None](dynamic_switch: Bool)`

Performs a functional unswitch transformation.

Unswitch is a simple pattern that is similar idea to loop unswitching pass but extended to functional patterns. The pattern facilitates the following code transformation that reduces the number of branches in the generated code

Before:

```
for i in range(...)    if i < xxx:        ...
```

After:

```
if i < ...    for i in range(...)        ...else    for i in range(...)        if i < xxx:            ...
```

This unswitch function generalizes that pattern with the help of meta parameters and can be used to perform both loop unswitching and other tile predicate lifting like in simd and amx.

TODO: Generalize to support multiple predicates. TODO: Once nested lambdas compose well should make unswitch compose with tile in an easy way.

**Parameters:**

- ​**switched\_func** (`fn[Bool]() capturing -> None`): The function containing the inner loop logic that can be unswitched.

**Args:**

- ​**dynamic\_switch** (`Bool`): The dynamic condition that enables the unswitched code path.

`unswitch[switched_func: fn[Bool, Bool]() capturing -> None](dynamic_switch_a: Bool, dynamic_switch_b: Bool)`

Performs a functional 2-predicates unswitch transformation.

**Parameters:**

- ​**switched\_func** (`fn[Bool, Bool]() capturing -> None`): The function containing the inner loop logic that has 2 predicates which can be unswitched.

**Args:**

- ​**dynamic\_switch\_a** (`Bool`): The first dynamic condition that enables the outer unswitched code path.
- ​**dynamic\_switch\_b** (`Bool`): The second dynamic condition that enables the inner unswitched code path.

## `tile_and_unswitch`

`tile_and_unswitch[workgroup_function: fn[Int, Bool](Int, Int, /) capturing -> None, tile_size_list: VariadicList[Int]](offset: Int, upperbound: Int)`

Performs time and unswitch functional transformation.

A variant of static tile given a workgroup function that can be unswitched. This generator is a fused version of tile and unswitch, where the static unswitch is true throughout the "inner" portion of the workload and is false only on the residue tile.

**Parameters:**

- ​**workgroup\_function** (`fn[Int, Bool](Int, Int, /) capturing -> None`): Workgroup function that processes one tile of workload.
- ​**tile\_size\_list** (`VariadicList[Int]`): List of tile sizes to launch work.

**Args:**

- ​**offset** (`Int`): The initial index to start the work from.
- ​**upperbound** (`Int`): The runtime upperbound that the work function should not exceed.

`tile_and_unswitch[workgroup_function: fn[Bool](Int, Int, Int, /) capturing -> None](offset: Int, upperbound: Int, tile_size_list: VariadicList[Int])`

Performs time and unswitch functional transformation.

A variant of dynamic tile given a workgroup function that can be unswitched. This generator is a fused version of tile and unswitch, where the static unswitch is true throughout the "inner" portion of the workload and is false only on the residue tile.

**Parameters:**

- ​**workgroup\_function** (`fn[Bool](Int, Int, Int, /) capturing -> None`): Workgroup function that processes one tile of workload.

**Args:**

- ​**offset** (`Int`): The initial index to start the work from.
- ​**upperbound** (`Int`): The runtime upperbound that the work function should not exceed.
- ​**tile\_size\_list** (`VariadicList[Int]`): List of tile sizes to launch work.

## `tile_middle_unswitch_boundaries`

`tile_middle_unswitch_boundaries[work_fn: fn[Int, Bool](Int, /) capturing -> None, middle_tile_sizes: VariadicList[Int], left_tile_size: Int, right_tile_size: Int](left_boundary_start: Int, left_boundary_end: Int, right_boundary_start: Int, right_boundary_end: Int)`

Divides 1d iteration space into three parts and tiles them with different steps.

The 1d iteration space is divided into: 1. \[left\_boundary\_start, left\_boundary\_end), effected by left boundary. 2. \[left\_boundary\_end, right\_boundary\_start), not effected by any boundary. 3. \[right\_boundary\_start, right\_boundary\_end), effected by right boundary.

work\_fn's switch is true for the left and right boundaries, implying boundary conditions like padding in convolution. The middle part is tiled with static tile sizes with the switch as false.

`middle_tile_sizes` should be in descending order for optimal performance. (Larger tile size appeared later in the list fails the while-loop.)

**Parameters:**

- ​**work\_fn** (`fn[Int, Bool](Int, /) capturing -> None`): Work function that processes one tile of workload.
- ​**middle\_tile\_sizes** (`VariadicList[Int]`): List of tile sizes for the middle part.
- ​**left\_tile\_size** (`Int`): Tile size for the left boundary region.
- ​**right\_tile\_size** (`Int`): Tile size for the right boundary region.

**Args:**

- ​**left\_boundary\_start** (`Int`): Start index of the left boundary.
- ​**left\_boundary\_end** (`Int`): End index of the left boundary.
- ​**right\_boundary\_start** (`Int`): Start index of the right boundary.
- ​**right\_boundary\_end** (`Int`): End index of the right boundary.

`tile_middle_unswitch_boundaries[work_fn: fn[Int, Bool, Bool](Int, /) capturing -> None, tile_size: Int, size: Int]()`

Tile 1d iteration space with boundary conditions at both ends.

This generator is primarily for convolution with static shapes. `work_fn`'s flags hints the function to handle padding at the boundary. The size is the static output row size, i.e., WO dimension.

**Parameters:**

- ​**work\_fn** (`fn[Int, Bool, Bool](Int, /) capturing -> None`): Work function that updates one tile. It has two flags for left and right boundaries, respectively.
- ​**tile\_size** (`Int`): 1D Tile size.
- ​**size** (`Int`): Iteration range is \[0, size).

## `elementwise`

`elementwise[func: fn[Int, Int](StaticIntTuple[$1], /) capturing -> None, simd_width: Int, rank: Int](shape: StaticIntTuple[rank])`

Executes `func[width, rank](indices)`, possibly as sub-tasks, for a suitable combination of width and indices so as to cover shape. Returns when all sub-tasks have completed.

**Parameters:**

- ​**func** (`fn[Int, Int](StaticIntTuple[$1], /) capturing -> None`): The body function.
- ​**simd\_width** (`Int`): The SIMD vector width to use.
- ​**rank** (`Int`): The rank of the buffer.

**Args:**

- ​**shape** (`StaticIntTuple[rank]`): The shape of the buffer.

## `parallelize_over_rows`

`parallelize_over_rows[func: fn(Int, Int, /) capturing -> None, shape: Int](shape: StaticIntTuple[shape], axis: Int, grain_size: Int)`

Parallelize func over non-axis dims of shape.

**Parameters:**

- ​**func** (`fn(Int, Int, /) capturing -> None`): Function to call on range of rows.

**Args:**

- ​**shape** (`StaticIntTuple[shape]`): Shape to parallelize over.
- ​**axis** (`Int`): Rows are slices along the axis dimension of shape.
- ​**grain\_size** (`Int`): The minimum number of elements to warrant using an additional thread.

## `stencil`

`stencil[rank: Int, stencil_rank: Int, stencil_axis: StaticIntTuple[stencil_rank], simd_width: Int, type: DType, map_fn: fn(StaticIntTuple[stencil_rank], /) capturing -> Tuple[StaticIntTuple[stencil_rank], StaticIntTuple[stencil_rank]], map_strides: fn(dim: Int) capturing -> Int, load_fn: fn[Int, DType](StaticIntTuple[rank], /) capturing -> SIMD[$1, $0], compute_init_fn: fn[Int]() capturing -> SIMD[type, $0], compute_fn: fn[Int](StaticIntTuple[rank], SIMD[type, $0], SIMD[type, $0], /) capturing -> SIMD[type, $0], compute_finalize_fn: fn[Int](StaticIntTuple[rank], SIMD[type, $0], /) capturing -> None](shape: StaticIntTuple[rank], input_shape: StaticIntTuple[rank])`

Computes stencil operation in parallel.

Computes output as a function that processes input stencils, stencils are computed as a continuous region for each output point that is determined by map\_fn : map\_fn(y) -> lower\_bound, upper\_bound. The boundary conditions for regions that fail out of the input domain are handled by load\_fn.

**Parameters:**

- ​**rank** (`Int`): Input and output domain rank.
- ​**stencil\_rank** (`Int`): Rank of stencil subdomain slice.
- ​**stencil\_axis** (`StaticIntTuple[stencil_rank]`): Stencil subdomain axes.
- ​**simd\_width** (`Int`): The SIMD vector width to use.
- ​**type** (`DType`): The input and output data type.
- ​**map\_fn** (`fn(StaticIntTuple[stencil_rank], /) capturing -> Tuple[StaticIntTuple[stencil_rank], StaticIntTuple[stencil_rank]]`): A function that a point in the output domain to the input co-domain.
- ​**map\_strides** (`fn(dim: Int) capturing -> Int`): A function that returns the stride for the dim.
- ​**load\_fn** (`fn[Int, DType](StaticIntTuple[rank], /) capturing -> SIMD[$1, $0]`): A function that loads a vector of simd\_width from input.
- ​**compute\_init\_fn** (`fn[Int]() capturing -> SIMD[type, $0]`): A function that initializes vector compute over the stencil.
- ​**compute\_fn** (`fn[Int](StaticIntTuple[rank], SIMD[type, $0], SIMD[type, $0], /) capturing -> SIMD[type, $0]`): A function the process the value computed for each point in the stencil.
- ​**compute\_finalize\_fn** (`fn[Int](StaticIntTuple[rank], SIMD[type, $0], /) capturing -> None`): A function that finalizes the computation of a point in the output domain given a stencil.

**Args:**

- ​**shape** (`StaticIntTuple[rank]`): The shape of the output buffer.
- ​**input\_shape** (`StaticIntTuple[rank]`): The shape of the input buffer.