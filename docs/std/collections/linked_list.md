---
title: "linked_list"
sidebar_label: "linked_list"
description: "Implements a doubly-linked list data structure.  This module provides the `LinkedList` type, a doubly-linked list where each element points to both the next and previous elements. This structure enabl"
---

# linked_list

Implements a doubly-linked list data structure.

This module provides the `LinkedList` type, a doubly-linked list where each
element points to both the next and previous elements. This structure enables
efficient insertion and deletion at any position, though random access requires
traversal. The implementation includes iterator support for forward and reverse
traversal.

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
