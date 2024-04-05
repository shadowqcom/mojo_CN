# functional
Implements higher-order functions.

You can import these APIs from the algorithm package. For example:
```mojo
from algorithm import map
```
Aliases:
- ​Static1DTileUnitFunc = fn[Int](Int, /) capturing -> None: Signature of a 1d tiled function that performs some work with a static tile size and an offset. i.e. func<tile_size: Int> (offset: Int)
- ​Dynamic1DTileUnitFunc = fn(Int, Int, /) capturing -> None: Signature of a 1d tiled function that performs some work with a dynamic tile size and an offset. i.e. func(offset: Int, tile_size: Int)
- ​BinaryTile1DTileUnitFunc = fn[Int](Int, Int, /) capturing -> None: Signature of a tiled function that performs some work with a dynamic tile size and a secondary static tile size.
- ​Static2DTileUnitFunc = fn[Int, Int](Int, Int, /) capturing -> None: Signature of a 2d tiled function that performs some work with a static tile size and an offset. i.e. func<tile_size_x: Int, tile_size_y: Int> (offset_x: Int, offset_y: Int)
- ​SwitchedFunction = fn[Bool]() capturing -> None
- ​SwitchedFunction2 = fn[Bool, Bool]() capturing -> None
​- Static1DTileUnswitchUnitFunc = fn[Int, Bool](Int, Int, /) capturing -> None: Signature of a tiled function that performs some work with a static tile size and an offset. i.e. func<tile_size: Int> (offset: Int)
​- Static1DTileUnitFuncWithFlag = fn[Int, Bool](Int, /) capturing -> None
​- Dynamic1DTileUnswitchUnitFunc = fn[Bool](Int, Int, Int, /) capturing -> None
​- Static1DTileUnitFuncWithFlags = fn[Int, Bool, Bool](Int, /) capturing -> None