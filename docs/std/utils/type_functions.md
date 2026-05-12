---
title: "type_functions"
sidebar_label: "type_functions"
description: "提供用于编译时类型操作的类型函数。类型函数是从编译时参数输入生成类型的 `comptime` 声明。"
---

# type_functions

提供用于编译时类型操作的类型函数。

类型函数是从编译时参数输入生成类型的 `comptime` 声明。与接受和返回运行时值的常规 `fn` 函数不同，类型函数完全在编译时操作——它们接受 `comptime` 参数并求值为类型，没有运行时组件。
