# sort[排序](https://mojocn.org/mojo/reference/algorithm/sort.html#sort)

实现排序功能。

您可以从包中导入这些 API。例如：`algorithm`

```
from algorithm.sort import sort
```

## `partition`

```
partition[type: AnyRegType, cmp_fn: fn[AnyRegType]($0, $0, /) capturing -> Bool](buff: Pointer[*"type", 0], k: Int, size: Int)
```

对输入向量进行就地分区，使前 k 个元素是最大(如果cmp_fn 是 <= 运算符，则为最小)元素。前 k 个元素的顺序是未定义的。

**参数：**

- **type** ()：基础数据的 DType。`AnyRegType`
- **cmp_fn** ()：类型、类型)捕获 -> Bool 类型的比较函子。`fn[AnyRegType]($0, $0, /) capturing -> Bool`

**参数：**

- **buff** ()：输入缓冲区。`Pointer[*"type", 0]`
- **k** ()：分区元素的索引。`Int`
- **size** ()：缓冲区的长度。`Int`

## `sort`

```
sort(inout buff: Pointer[Int, 0], len: Int)
```

对向量进行就地排序。

该函数不返回任何内容，向量就地更新。

**参数：**

- **buff** ()：输入缓冲区。`Pointer[Int, 0]`
- **len** ()：缓冲区的长度。`Int`

```
sort[type: DType](inout buff: Pointer[SIMD[type, 1], 0], len: Int)
```

对向量进行就地排序。

该函数不返回任何内容，向量就地更新。

**参数：**

- **type** ()：基础数据的 DType。`DType`

**参数：**

- **buff** ()：输入缓冲区。`Pointer[SIMD[type, 1], 0]`
- **len** ()：缓冲区的长度。`Int`

```
sort(inout v: List[Int])
```

对向量进行就地排序。

该函数不返回任何内容，向量就地更新。

**参数：**

- **v** ()：输入要排序的整数向量。`List[Int]`

```
sort[type: DType](inout v: List[SIMD[type, 1]])
```

对向量进行就地排序。

该函数不返回任何内容，向量就地更新。

**参数：**

- **type** ()：基础数据的 DType。`DType`

**参数：**

- **v** ()：要排序的输入向量。`List[SIMD[type, 1]]`