---
title: "linked_list"
sidebar_label: "linked_list"
description: "实现双向链表数据结构。此模块提供 `LinkedList` 类型，这是一个双向链表，其中每个元素都指向下一个和上一个元素。"
---

# linked_list

实现双向链表数据结构。

此模块提供 `LinkedList` 类型，这是一个双向链表，其中每个元素都指向下一个和上一个元素。此结构能够在任何位置高效插入和删除，尽管随机访问需要遍历。该实现包括用于正向和反向遍历的迭代器支持。

## 类型

### Node

`struct Node[
    ElementType`

### _LinkedListIter

`@fieldwise_init struct _LinkedListIter[
    mut`

### _LinkedListIterOwned

`@fieldwise_init struct _LinkedListIterOwned[T`

### LinkedList

`struct LinkedList[ElementType`
