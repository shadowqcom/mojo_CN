# 向量

定义 InlinedFixedVector。

您可以从`collections`包中导入这些 API。例如：

```mojo
from collections.vector import InlinedFixedVector
```



## `InlinedFixedVector`

具有小向量优化和固定最大容量的动态分配向量。

不调整大小或实现边界检查。是的 使用小向量大小(在编译时指定)和 最大容量(在运行时指定)。`InlinedFixedVector`

第一个元素存储在静态分配的 small 矢量存储。任何剩余的元素都存储在动态分配的 存储。`size`

当它被释放时，它会释放其内存。

TODO：一旦我们有了特征，它就应该调用它的元素析构函数。

此数据结构对于需要数量的应用程序非常有用 元素在编译时是未知的，但一旦在运行时知道，就是 保证等于或小于一定容量。

**参数：**

- **type** (`AnyRegType`)：元素的类型。
- **size** (`Int`)：静态已知的小向量大小。

**别名：**

- `static_size = size`

- `static_data_type = StaticTuple[*"type", size]`

**属性：**

- **static_data** (`StaticTuple[*"type", size]`)：底层静态存储，用于小向量。

- **dynamic_data** (`Pointer[*"type", 0]`)：底层动态存储，用于生长大型向量。

- **current_size** (`Int`)：向量中的元素数。

- **capacity** (`Int`)：矢量中可以容纳的最大元素数。

**实现的特征：**

`AnyType`,`Sized`

**方法：**

### `__init__`
```
__init__(inout self: Self, capacity: Int)
```

具有给定容量的构造。`InlinedFixedVector`

动态分配的部分是 。`capacity - size`

**参数：**

- **capacity** (`Int`)：请求的向量最大容量。

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

### `__copyinit__`
```
__copyinit__(inout self: Self, existing: Self)
```

创建浅拷贝(不复制基础元素)。

**参数：**

- **existing** ()：要复制的。`Self``InlinedFixedVector`

### `__getitem__`
```
__getitem__(self: Self, i: Int) -> *"type"
```

获取给定索引处的向量元素。

**参数：**

- **i** (`Int`)：元素的索引。

**返回：**

给定索引处的元素。

### `__setitem__`
```
__setitem__(inout self: Self, i: Int, *value: "type")
```

在给定索引处设置向量元素。

**参数：**

- **i** (`Int`)：元素的索引。
- **value** (`*"type"`)：要分配的值。

### `deepcopy`
```
deepcopy(self: Self) -> Self
```

创建此矢量的深层副本。

**返回：**

此向量的创建副本。

### `append`
```
append(inout self: Self, *value: "type")
```

将值追加到此向量。

**参数：**

- **value** (`*"type"`)：要追加的值。

### `__len__`
```
__len__(self: Self) -> Int
```

获取向量中的元素数。

**返回：**

向量中的元素数。

### `clear`
```
clear(inout self: Self)
```

清除矢量中的元素。

### `__iter__`
```
__iter__(inout self: Self) -> _VecIter[*"type", InlinedFixedVector[*"type", size], _deref_iter_impl[*"type", size]]
```

遍历向量。

**返回：**

向量起点的迭代器。
