---
title: "itertools"
slug: itertools
sidebar_label: "itertools"
description: "提供常见迭代模式的迭代器工具。此模块包含创建专用迭代器的函数：- `count()` - 创建具有可自定义起始值和步长的无限计数器"
---

# itertools

提供常见迭代模式的迭代器工具。

此模块包含创建专用迭代器的函数：

- `count()` - 创建具有可自定义起始值和步长的无限计数器
- `cycle()` - 无限循环遍历可迭代对象
- `drop_while()` - 在谓词为真时跳过元素，然后返回剩余元素
- `product()` - 计算两个、三个或四个可迭代对象的笛卡尔积
- `repeat()` - 将元素重复指定次数
- `take_while()` - 在谓词为真时返回元素

这些工具支持函数式风格的迭代模式和可组合的迭代器操作。

## 类型

### _CountIterator

`@fieldwise_init struct _CountIterator(
    Iterable, IterableOwned, Iterator, TrivialRegisterPassable
)`

**Implemented Traits:**

- `Iterable`
- `IterableOwned`
- `Iterator`
- `TrivialRegisterPassable`

**Fields:**

- `start: Int`
- `step: Int`

**Methods:**

- **__iter__**: `@always_inline def __iter__(ref self) -&gt; Self.IteratorType[origin_of(self)]`

- **__iter__**: `@always_inline def __iter__(var self) -&gt; Self.IteratorOwnedType`

- **__next__**: `@always_inline def __next__(mut self) raises StopIteration -&gt; Int`

### _Product2

`@fieldwise_init struct _Product2[IteratorTypeA`

### _Product3

`@fieldwise_init struct _Product3[
    IteratorTypeA`

### _Product4

`@fieldwise_init struct _Product4[
    IteratorTypeA`

### _CycleIterator

`@fieldwise_init struct _CycleIterator[InnerIteratorType`

### _TakeWhileIterator

`@fieldwise_init struct _TakeWhileIterator[
    InnerIteratorType`

### _DropWhileIterator

`@fieldwise_init struct _DropWhileIterator[
    InnerIteratorType`

### _RepeatIterator

`@fieldwise_init struct _RepeatIterator[ElementType`
