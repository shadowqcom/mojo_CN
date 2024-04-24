# dict字典



定义 ，存储键值对的集合。`Dict`

Dict 为字典元素的插入、查找和删除提供了高效的 O（1） 摊销平均时间复杂度。它的实现与 Python 的实现非常相似：`dict`

- 性能和大小针对小型词典进行了大量优化，但可以扩展到大型词典。
- 插入顺序被隐式保留。对键、值和项的迭代具有基于插入的确定性顺序。

关键元素必须实现`KeyElement`该特征，其中包括 Movable、Hashable 和 EqualityComparable。它还包括 CollectionElement 和 Copyable，直到我们通过标准库类型推送引用。

出于类似原因，Value 元素必须是 CollectionElements。键和值类型都必须始终是 Movable，以便我们可以随着字典的增长而调整字典的大小。

有关更多详细信息，请参阅文档。`Dict`

## `DictEntry`



将键值对条目存储在字典中。

**参数：**

- **K** （`KeyElement`）：字典的键类型。必须是 Hashable+EqualityComparable。
- **V** （`CollectionElement`）：字典的值类型。

**属性：**

- **hash** （`Int`）：，因此在字典查找期间不会重新计算哈希。`key.__hash__()`
- **key** （`K`）：条目的唯一键。
- **value** （`V`）：与键关联的值。

**实现的特征：**

```
AnyType`,`CollectionElement`,`Copyable`,`Movable
```

**方法：**

### `__init__`
```
__init__(inout self: Self, owned key: K, owned value: V)
```

从键和值创建条目，计算哈希值。

**参数：**

- **key** （`K`）：条目的键。
- **value** （`V`）：条目的值。

## `Dict`



存储键值对的容器。

键类型和值类型必须静态指定，这与 Python 字典不同，Python 字典可以接受任意键和值类型。

键类型必须实现`KeyElement`包含`Movable` 、`Hashable` 和`EqualityComparable` 的特征。它还包括`CollectionElement`和`Copyable`直到我们有引用。

值类型必须实现`CollectionElement`特征。

用法：
```python
from collections import Dict

var d = Dict[String, Int]()
d["a"] = 1
d["b"] = 2
print(len(d))      # prints 2
print(d["a"])      # prints 1
print(d.pop("b"))  # prints 2
print(len(d))      # prints 1
```



**参数：**

- **K** （`KeyElement`）：字典键的类型。必须是 Hashable 和 EqualityTropable，这样我们才能在地图中找到键。
- **V** （`CollectionElement`）：字典的值类型。当前必须是 CollectionElement。

**别名：**

- `EMPTY = -1`
- `REMOVED = -2`

**属性：**

- **size** （`Int`）：当前存储在字典中的元素数。

**实现的特征：**

```
AnyType`,`CollectionElement`, `Copyable`, `Movable`, `Sized
```

**方法：**

### `__init__`



```
__init__(inout self: Self)
```

初始化一个空字典。

```
__init__(inout self: Self, existing: Self)
```

复制现有词典。

**参数：**

- **existing** （）：现有字典。`Self`

### `__copyinit__`



```
__copyinit__(inout self: Self, existing: Self)
```

复制现有词典。

**参数：**

- **existing** （）：现有字典。`Self`

### `__moveinit__`



```
__moveinit__(inout self: Self, owned existing: Self)
```

将现有字典的数据移动到新字典中。

**参数：**

- **existing** （）：现有字典。`Self`

### `__getitem__`



```
__getitem__(self: Self, key: K) -> V
```

从字典中检索值。

引发：“KeyError”（如果密钥不存在）。

**参数：**

- **key** （`K`）：要检索的密钥。

**返回：**

与键关联的值（如果存在）。

### `__setitem__`



```
__setitem__(inout self: Self, key: K, value: V)
```

按键在字典中设置值。

**参数：**

- **key** （`K`）：要与指定值关联的键。
- **value** （`V`）：要存储在字典中的数据。

### `__contains__`



```
__contains__(self: Self, key: K) -> Bool
```

检查给定值是否在字典中。

**参数：**

- **key** （`K`）：要检查的密钥。

**返回：**

如果字典中存在键，则为 True，否则为 False。

### `__len__`



```
__len__(self: Self) -> Int
```

当前存储在字典中的元素数。

### `find`



```
find(self: Self, key: K) -> Optional[V]
```

按键在字典中查找值。

**参数：**

- **key** （`K`）：要在字典中搜索的键。

**返回：**

一个可选值，其中包含该值的副本（如果存在），否则为空的 Optional。

### `pop`



```
pop(inout self: Self, key: K, owned default: Optional[V]) -> V
```

按键从字典中删除值。

引发：“KeyError”，如果字典中不存在该键，并且未提供默认值。

**参数：**

- **key** （）：要从字典中删除的键。`K`
- **default** （）：（可选）提供默认值，以便在未找到键时返回，而不是引发。`Optional[V]`

**返回：**

与键关联的值（如果该键在字典中）。如果不是，请改为返回提供的默认值。

### `__iter__`



```cpp
__iter__[mutability: i1, self_life: lifetime<mutability>](
    self: !lit.ref<_stdlib::_collections::_dict::_Dict<
                    :trait<_stdlib::_collections::_dict::_KeyElement> K, 
                    :trait<_stdlib::_builtin::_value::_CollectionElement> V >, 
                    mut=mutability, 
                    self_life>
                    ) -> _DictKeyIter[K, V, mutability, self_life]
```

将 dict 的键作为不可变引用进行迭代。

**参数：**

- **可变性** （`i1`）：字典是否可变。
- **self_life** （`lifetime<mutability>`）：字典的生存期。

**返回：**

对字典键的不可变引用的迭代器。

### `keys`

```
keys[mutability: i1, self_life: lifetime<mutability>](
    self: !lit.ref<_stdlib::_collections::_dict::_Dict<
        :trait<_stdlib::_collections::_dict::_KeyElement> K, 
        :trait<_stdlib::_builtin::_value::_CollectionElement> V>, 
        mut=mutability, self_life>
        ) -> _DictKeyIter[K, V, mutability, self_life]
```

将 dict 的键作为不可变引用进行迭代。

**参数：**

- **可变性** （`i1`）：字典是否可变。
- **self_life** （`lifetime<mutability>`）：字典的生存期。

**返回：**

对字典键的不可变引用的迭代器。

### `values`

```cpp
values[mutability: i1, self_life: lifetime<mutability>](
    self: !lit.ref<_stdlib::_collections::_dict::_Dict<
        :trait<_stdlib::_collections::_dict::_KeyElement> K, 
        :trait<_stdlib::_builtin::_value::_CollectionElement> V>, 
        mut=mutability, self_life>
        ) -> _DictValueIter[K, V, mutability, self_life]
```

循环访问 dict 的值作为引用。

**参数：**

- **可变性** （`i1`）：字典是否可变。
- **self_life** （`lifetime<mutability>`）：字典的生存期。

**返回：**

对字典值的引用的迭代器。

### `items`

```cpp
items[mutability: i1, self_life: lifetime<mutability>](
    self: !lit.ref<_stdlib::_collections::_dict::_Dict<
        :trait<_stdlib::_collections::_dict::_KeyElement> K, 
        :trait<_stdlib::_builtin::_value::_CollectionElement> V>, 
        mut=mutability, self_life>
        ) -> _DictEntryIter[K, V, mutability, self_life]
```

将字典的条目作为不可变引用进行迭代。

这些还不能像 Python dict 项目那样解压缩，但您可以将键和值作为属性访问，即。

```
for e in dict.items():    
    print(e[].key, e[].value)
```



**参数：**

- **可变性** （`i1`）：字典是否可变。
- **self_life** （`lifetime<mutability>`）：字典的生存期。

**返回：**

对字典条目的不可变引用的迭代器。

## `KeyElement`



实现字典键所有要求的类型的特征组合。对于哈希映射，Dict 键必须至少为 Movable、Hashable 和 EqualityComparable。在我们有参考文献之前，它们也必须是可复制的。

**实现的特征：**

```
AnyType`, `CollectionElement`, `Copyable`, `EqualityComparable`, `Hashable`, `Movable
```

**方法：**

### `__copyinit__`

```
__copyinit__(inout self: T, existing: T, /)
```

通过复制现有值创建值的新实例。

**参数：**

- **existing** （`T`）：要复制的值。

### `__moveinit__`



```
__moveinit__(inout self: T, owned existing: T, /)
```

通过移动另一个值的值来创建该值的新实例。

**参数：**

- **existing** （`T`）：要移动的值。

### `__del__`



```
__del__(owned self: T, /)
```

销毁包含的值。

析构函数接收拥有的值，并应执行结束对象生存期所需的任何操作。在最简单的情况下，这什么都不是，并且语言在此函数结束时将对象视为死的。

### `__eq__`



```
__eq__(self: T, other: T) -> Bool
```

定义对象的两个实例是否彼此相等。

**参数：**

- **other** （`T`）：另一个相同类型的实例。

**返回：**

如果实例根据类型的相等定义相等，则为 True，否则为 False。

### `__ne__`



```
__ne__(self: T, other: T) -> Bool
```

定义对象的两个实例是否彼此不相等。

**参数：**

- **other** （`T`）：另一个相同类型的实例。

**返回：**

如果实例根据类型的相等定义不相等，则为 True，否则为 False。

### `__hash__`



```
__hash__(self: T) -> Int
```

返回类型数据的 64 位哈希值。