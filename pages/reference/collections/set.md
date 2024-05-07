set(集合)
============================
实现 Set 数据类型。

## `Set`
设置的数据类型。

O(1) 平均大小写摊销添加、删除和成员资格检查。

```mojo
from collections import Set

var set = Set[Int](1, 2, 3)
print(len(set))  # 3
set.add(4)

for element in set:
    print(element[])

set -= Set[Int](3, 4, 5)
print(set == Set[Int](1, 2))  # True
print(set | Set[Int](0, 1) == Set[Int](0, 1, 2))  # True
var element = set.pop()
print(len(set))  # 1
```



**参数：**

- **T** (`KeyElement`)：集合的元素类型。必须实现 KeyElement。

**实现的特征：**

`AnyType` , `Boolable`, `EqualityComparable`, `Hashable`, `Sized`

**方法：**

### `__init__`
```
__init__(inout self: Self, *ts: T)
```

从初始元素构造一个集合。

**参数：**

- **ts** (`*T`)：要添加到集合中的元素的可变性。

```
__init__(inout self: Self, elements: Self)
```

显式复制另一个 Set 实例。

**参数：**

- **elements** (`Self`)：要复制的现有集合。

```
__init__(inout self: Self, elements: List[T])
```

从元素列表构造一个集合。

**参数：**

- **elements** (`List[T]`)：要添加到集合中的元素的向量。

### `__moveinit__`
```
__moveinit__(inout self: Self, owned other: Self)
```

移动构造函数。

**参数：**

- **other** (`Self`)：要从中移动的现有 Set 实例。

### `__bool__`
```
__bool__(self: Self) -> Bool
```

该集是否为非空。

**返回：**

如果集合不为空，则为 True，如果集为空，则为 False。

### `__eq__`
```
__eq__(self: Self, other: Self) -> Bool
```

设置相等。

**参数：**

- **other** (`Self`)：另一个要检查相等性的 Set 实例。

**返回：**

如果集合包含相同的元素，则为 True，否则为 False。

### `__ne__`
```
__ne__(self: Self, other: Self) -> Bool
```

设置不等式。

**参数：**

- **other** (`Self`)：另一个要检查相等性的 Set 实例。

**返回：**

如果集合不同，则为 True，否则为 False。

### `__contains__`
```
__contains__(self: Self, t: T) -> Bool
```

集合是否包含元素。

**参数：**

- **t** (`T`)：用于检查集合中成员身份的元素。

**返回：**

集合是否包含元素。

### `__sub__`
```
__sub__(self: Self, other: Self) -> Self
```

设置减法。

**参数：**

- **other** (`Self`)：另一个要从这个实例中减去的 Set 实例。

**返回：**

包含此集合的元素的新集合，但不包含`other`集合中的任何元素。

### `__and__`
```
__and__(self: Self, other: Self) -> Self
```

设置的交集运算符。

**参数：**

- **other** (`Self`)：与此实例相交的另一个 Set 实例。

**返回：**

一个新集合，仅包含此集合和`other`集合中同时出现的元素。

### `__or__`
```
__or__(self: Self, other: Self) -> Self
```

集合联合运算符。

**参数：**

- **other** (`Self`)：另一个要与此实例联合的 Set 实例。

**返回：**

包含此集合或`other`该集合中出现的任何元素的新集合。

### `__isub__`
```
__isub__(inout self: Self, other: Self)
```

就地集合减法。

更新集以从`other`集中删除任何元素。

**参数：**

- **other** (`Self`)：另一个要从这个实例中减去的 Set 实例。

### `__iand__`
```
__iand__(inout self: Self, other: Self)
```

就地设置交叉点。

更新集合以仅包含 集合，也包含在`other`集合中。

**参数：**

- **other** (`Self`)：与此实例相交的另一个 Set 实例。

### `__ior__`
```
__ior__(inout self: Self, other: Self)
```

就地设置联合。

更新集合以包含`other`集合中的所有元素 以及它已经包含的所有元素。

**参数：**

- **other** (`Self`)：另一个要与此实例联合的 Set 实例。

### `__len__`
```
__len__(self: Self) -> Int
```

集合的大小。

**返回：**

集合中的元素数。

### `__hash__`
```
__hash__(self: Self) -> Int
```

集合中元素的哈希值。

哈希值与顺序无关，因此 s1 == s2 -> 哈希 (s1) == 哈希 (s2)。

**返回：**

适用于非加密目的的集合的哈希值。

### `__iter__`
```
__iter__[mutability: i1, self_life: lifetime<mutability>](self: !lit.ref<_stdlib::_collections::_set::_Set<:trait<_stdlib::_collections::_dict::_KeyElement> T>, mut=mutability, self_life>) -> _DictKeyIter[T, None, mutability, self_life]
```

遍历集合的元素，返回不可变的引用。

**返回：**

对集合元素的不可变引用的迭代器。

### `add`
```
add(inout self: Self, t: T)
```

将元素添加到集合中。

**参数：**

- **t** (`T`)：要添加到集合中的元素。

### `remove`
```
remove(inout self: Self, t: T)
```

从集合中删除元素。

提高： 如果元素不在要删除的集合中。

**参数：**

- **t** (`T`)：要从集合中删除的元素。

### `pop`
```
pop(inout self: Self) -> T
```

从套装中移除任意一件物品，然后将其退回。

作为实现细节，这将删除第一项 根据插入顺序。这实际上很有用 用于广度优先的搜索实现。

提高： 如果该集为空。

**返回：**

从集合中删除的元素。

### `union`
```
union(self: Self, other: Self) -> Self
```

设置并集。

**参数：**

- **other** (`Self`)：另一个要与此实例联合的 Set 实例。

**返回：**

包含此集合或`other`该集合中出现的任何元素的新集合。

### `intersection`
```
intersection(self: Self, other: Self) -> Self
```

设置交叉点。

**参数：**

- **other** (`Self`)：与此实例相交的另一个 Set 实例。

**返回：**

一个新集合，仅包含此集合和`other`集合中同时出现的元素。

### `remove_all`
```
remove_all(inout self: Self, other: Self)
```

就地集合减法。

更新集以从`other`集中删除任何元素。

**参数：**

- **other** (`Self`)：另一个要从这个实例中减去的 Set 实例。
