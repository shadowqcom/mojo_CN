list
===================
定义 List 类型[官方文档](https://docs.modular.com/mojo/stdlib/collections/list)。

您可以从`collections`包中导入这些 API。例如：

```mojo
from collections import List
```

## `List`
`List`类型是动态分配的列表。

它支持从后面推送和弹出，调整底层大小 根据需要存储。当它被释放时，它会释放其内存。

**参数：**

- **T** (`CollectionElement`)：元素的类型。

**领域：**

- **data** (`AnyPointer[T]`)：列表的基础存储。

- **size** (`Int`)：列表中的元素数。

- **capacity** (`Int`)：无需调整列表大小即可放入列表的元素数量。

**实现的特征：**

`AnyType`, `CollectionElement`, `Copyable`, `Movable`, `Sized`


**方法：**

### `__init__`
```
__init__(inout self: Self)
```

构造一个空列表。

```
__init__(inout self: Self, existing: Self)
```

创建给定列表的深层副本。

**参数：**

- **existing** (`Self`)：要复制的列表。

```
__init__(inout self: Self, *, capacity: Int)
```

构造具有给定容量的列表。

**参数：**

- **capacity** (`Int`)：列表请求的容量。

```
__init__(inout self: Self, *values: T)
```

从给定值构造列表。

**参数：**

- **values** (`*T`)：要填充列表的值。

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

### `__copyinit__`
```
__copyinit__(inout self: Self, existing: Self)
```

创建给定列表的深层副本。

**参数：**

- **existing** ()：要复制的列表。`Self`

### `__moveinit__`
```
__moveinit__(inout self: Self, owned existing: Self)
```

将现有列表的数据移动到新列表中。

**参数：**

- **existing** (`Self`)：现有列表。

### `__del__`
```
__del__(owned self: Self)
```

销毁列表中的所有元素并释放其内存。

### `__getitem__`
```
__getitem__(self: Self, span: Slice) -> Self
```

获取指定位置的元素序列。

**参数：**

- **span** (`Slice`)：指定新列表位置的切片。

**返回：**

包含指定范围处的列表的新列表。

```
__getitem__(self: Self, i: Int) -> T
```

获取给定索引处的 list 元素的副本。

FIXME(lifetimes)：这应该返回一个引用，而不是一个副本！

**参数：**

- **i** (`Int`)：元素的索引。

**返回：**

给定索引处的元素的副本。

### `__setitem__`
```
__setitem__(inout self: Self, i: Int, owned value: T)
```

在给定索引处设置列表元素。

**参数：**

- **i** (`Int`)：元素的索引。
- **value** (`T`)：要分配的值。

### `__len__`
```
__len__(self: Self) -> Int
```

获取列表中的元素数。

**返回：**

列表中的元素数。

### `append`
```
append(inout self: Self, owned value: T)
```

将一个值追加到此列表。

**参数：**

- **value** (`T`)：要追加的值。

### `extend`
```
extend(inout self: Self, owned other: Self)
```

通过使用 的元素来扩展此列表。`other`

**参数：**

- **other** (`Self`)：将按此列表末尾添加其元素的列表。

### `pop_back`
```
pop_back(inout self: Self) -> T
```

从此列表的后面弹出一个值。

**返回：**

弹出的值。

### `reserve`
```
reserve(inout self: Self, new_capacity: Int)
```

预留请求的容量。

如果当前容量大于或相等，则为无操作。 否则，将重新分配存储并移动日期。

**参数：**

- **new_capacity** (`Int`)：新容量。

### `resize`
```
resize(inout self: Self, new_size: Int, value: T)
```

将列表大小调整为给定的新大小。

如果新大小小于当前大小，则末尾的元素 被丢弃。如果新大小大于当前大小，则 list 将附加到新值元素，最大为请求的大小。

**参数：**

- **new_size** (`Int`)：新大小。
- **value** (`T`)：用于填充新元素的值。

### `reverse`
```
reverse(inout self: Self)
```

反转列表的元素。

### `clear`
```
clear(inout self: Self)
```

清除列表中的元素。

### `steal_data`
```
steal_data(inout self: Self) -> AnyPointer[T]
```

从列表中获取基础指针的所有权。

**返回：**

基础数据。

### `__iter__`
```
__iter__[mutability: i1, self_life: lifetime<mutability>](
    self: !lit.ref<_stdlib::_collections::_list::_List<:trait<_stdlib::_builtin::_value::_CollectionElement> T>, mut=mutability, self_life>
    ) -> _ListIter[T, mutability, self_life]
```

遍历列表的元素，返回不可变的引用。

**返回：**
对列表元素的不可变引用的迭代器。
