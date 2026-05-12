---
title: "iter"
sidebar_label: "iter"
description: "迭代 trait 和工具：Iterable、IterableOwned、Iterator、enumerate、zip、map。此包通过 Iterable、IterableOwned 和 Iterator trait 定义了 Mojo 的核心迭代协议。"
---

# iter

迭代 trait 和工具：Iterable、IterableOwned、Iterator、enumerate、zip、map。

此包通过 `Iterable`、`IterableOwned` 和 `Iterator` trait 定义了 Mojo 的核心迭代协议。符合这些 trait 的类型可以用于 `for` 循环以及 `enumerate()`、`zip()` 和 `map()` 等迭代工具。

迭代协议由三个关键 trait 组成：

- `Iterable`：可以通过借用（`ref self`）产生迭代器的类型。迭代器借用集合并产生元素的引用或副本，而不消耗源数据。
- `IterableOwned`：可以通过获取所有权（`var self`）产生迭代器的类型。迭代器消耗集合，获取其元素的所有权。
- `Iterator`：可以逐个产生值序列的类型。

示例：

```mojo
from std.iter import enumerate, zip, map

# 带索引枚举
var items = ["a", "b", "c"]
for index, value in enumerate(items):
    print(index, value)

# 合并多个可迭代对象
var numbers = [1, 2, 3]
var letters = ["x", "y", "z"]
for num, letter in zip(numbers, letters):
    print(num, letter)

# 对可迭代对象应用函数
def square(x: Int) -> Int:
    return x * x
var values = [1, 2, 3, 4]
for squared in map[square](values):
    print(squared)
```
