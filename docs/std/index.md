---
title: "Mojo 标准库"
sidebar_label: "Mojo 标准库"
sidebar_position: 1
description: "Mojo 标准库提供了编写 Mojo 程序所需的所有数据类型、结构体、trait、函数和其他 API"
---

# Mojo 标准库

Mojo 标准库提供了编写 Mojo 程序所需的所有数据类型、结构体、trait、函数和其他 API。

## 包列表

- [algorithm](/docs/std/algorithm) - 高性能数据操作: 向量化、并行化、归约、内存操作
- [atomic](/docs/std/atomic) - 原子操作和内存排序
- [base64](/docs/std/base64) - 二进制数据编码: base64 和 base16 编码/解码函数
- [benchmark](/docs/std/benchmark) - 性能基准测试: 统计分析和详细报告
- [bit](/docs/std/bit) - 位操作: 操作、计数、旋转和 2 的幂次工具
- [builtin](/docs/std/builtin) - 语言基础: 内置类型、trait 和基本操作
- [collections](/docs/std/collections) - 核心数据结构: List, Dict, Set, Optional 及专用集合
- [compile](/docs/std/compile) - 运行时函数编译和内省: 汇编、IR、链接、元数据
- [complex](/docs/std/complex) - 复数: SIMD 类型、标量类型和操作
- [documentation](/docs/std/documentation) - 文档内置: 文档生成的装饰器和工具
- [ffi](/docs/std/ffi) - 外部函数接口 (FFI) 用于调用 C 代码和加载库
- [format](/docs/std/format) - 提供格式化 trait 用于将类型转换为文本
- [gpu](/docs/std/gpu) - GPU 编程原语: 线程块、异步内存、屏障和同步
- [hashlib](/docs/std/hashlib) - 加密和非加密哈希,支持可自定义算法
- [io](/docs/std/io) - 核心 I/O 操作: 控制台输入/输出、文件处理、写入 trait
- [iter](/docs/std/iter) - 迭代 trait 和工具: Iterable, IterableOwned, Iterator, enumerate, zip, map
- [itertools](/docs/std/itertools) - 迭代器工具,用于惰性序列生成和转换
- [logger](/docs/std/logger) - 日志记录,支持可配置的严重级别
- [math](/docs/std/math) - 数学函数和常量: 三角函数、指数、对数和特殊函数
- [memory](/docs/std/memory) - 底层内存管理: 指针、分配、地址空间
- [os](/docs/std/os) - 操作系统接口层: 环境、文件系统、进程控制
- [pathlib](/docs/std/pathlib) - 文件系统路径操作和导航
- [prelude](/docs/std/prelude) - 标准库前奏: 自动导入的基本类型、trait 和操作
- [pwd](/docs/std/pwd) - 密码数据库查找,用于用户账户信息
- [python](/docs/std/python) - Python 互操作: 导入包和模块、调用函数、类型转换
- [random](/docs/std/random) - 伪随机数生成,支持均匀分布和正态分布
- [reflection](/docs/std/reflection) - 编译时反射工具,用于内省 Mojo 类型和函数
- [runtime](/docs/std/runtime) - 运行时服务: 异步执行和程序追踪
- [stat](/docs/std/stat) - 文件类型常量和从 stat 系统调用检测
- [subprocess](/docs/std/subprocess) - 执行外部进程和命令
- [sys](/docs/std/sys) - 系统运行时: I/O、硬件信息、内部函数、编译时工具
- [tempfile](/docs/std/tempfile) - 管理临时文件和目录: 创建、定位和清理
- [testing](/docs/std/testing) - 单元测试: 断言 (相等、为真、抛出异常) 和测试套件
- [time](/docs/std/time) - 计时操作: 单调时钟、性能计数器、睡眠、time_function
- [utils](/docs/std/utils) - 通用工具: 索引、变体、静态元组和线程同步