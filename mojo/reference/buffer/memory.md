# memory

Implements `parallel_memcpy`.

You can import these APIs from the `buffer` package. For example:

```
from buffer import parallel_memcpy
```

## `parallel_memcpy`[​](https://docs.modular.com/mojo/stdlib/buffer/memory#parallel_memcpy "Direct link to parallel_memcpy")

`parallel_memcpy[type: DType](dest: DTypePointer[type, 0], src: DTypePointer[type, 0], count: Int, count_per_task: Int, num_tasks: Int)`

Copies `count` elements from a memory buffer `src` to `dest` in parallel by spawning `num_tasks` tasks each copying `count_per_task` elements.

**Parameters:**

- ​**type** (`DType`): The element dtype.

**Args:**

- ​**dest** (`DTypePointer[type, 0]`): The destination buffer.
- ​**src** (`DTypePointer[type, 0]`): The source buffer.
- ​**count** (`Int`): Number of elements in the buffer.
- ​**count\_per\_task** (`Int`): Task size.
- ​**num\_tasks** (`Int`): Number of tasks to run in parallel.

`parallel_memcpy[type: DType](dest: DTypePointer[type, 0], src: DTypePointer[type, 0], count: Int)`

Copies `count` elements from a memory buffer `src` to `dest` in parallel.

**Parameters:**

- ​**type** (`DType`): The element type.

**Args:**

- ​**dest** (`DTypePointer[type, 0]`): The destination pointer.
- ​**src** (`DTypePointer[type, 0]`): The source pointer.
- ​**count** (`Int`): The number of elements to copy.