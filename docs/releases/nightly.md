---
title: Mojo 每日构建版
---

此版本仍在开发中。

## 亮点

- 执行大量隐式转换的代码（最显眼的是大型集合字面量）编译更快：编译器不再对一开始就不能用于隐式转换的构造器运行参数推断。以数据为主的文件（如标准库的 Unicode 查找表）编译速度约快 1.3 倍。

## 文档

## 语言增强

- `thin` 函数类型现在可以携带尾随 `where` 子句，约束其声明的参数。这让泛型算法能陈述它对所接收函数的承诺，而无需在每个绑定处重述约束。

  ```mojo
  comptime Kernel = def[w: Int](Int) thin -> None where (
      w > 0, "width must be positive"
  )

  def apply[F: Kernel](x: Int):
      F[4](x)     # ok
      F[0](x)     # error: violated constraint
  ```

  该子句绑定到最内层的函数类型，因此跟在函数类型结果后面的声明级 `where` 需要将该结果用括号包裹：

  ```mojo
  def make[n: Int]() -> (def() thin -> None) where n > 0: ...
  ```

## 语言变更

- 将受约束函数绑定到未声明匹配 `where` 子句的函数类型现在是错误，而不是静默丢弃约束。请在函数类型上声明该义务（既然 `thin` 函数类型可以携带尾随 `where` 子句），或绑定一个不需要它的函数。在期望受约束类型处传入未受约束的函数仍然允许且仍然免费。

- 将参数化闭包上的 `@parameter` 装饰器重命名为 `@__parameter`。已弃用的 `@parameter if` / `@parameter for` 形式不变；对于编译期控制流，请优先使用 `comptime if` / `comptime for`。

- 模块与包系统：

  - 目录现在可以具有 "命名空间" 语义；单个目录名可以解析到磁盘上共享该名的不同位置。

    ```mojo
    # .
    # ├── one
    # │   └── foo
    # │       └── bar.mojo
    # └── two
    #     └── foo
    #         └── baz.mojo
    #
    # Compiles with -Ione -Itwo
    import foo.bar
    import foo.baz
    ```

  - 从不同模块 import 同名函数并将它们合并为一个重载集，现已是错误，此前经过一段弃用期。

  - 不带显式 `import` 的包内访问现已是错误，此前经过一段弃用期。

## 库稳定化

## 库变更

- `Bencher.bench_function()` 现在接受会抛异常的闭包。

- `StringDict` 现在在其值类型为 `Writable` 时遵循 `Writable`，与 `Dict` 的现有行为一致。这使你能 `print()` 一个 `StringDict` 或将其转换为 `String`。

- `StringSpan`、`String` 和 `StringLiteral` 上 `strip()`、`lstrip()` 和 `rstrip()` 的 `chars` 参数现在是一个 `ImmStringSpan`，因此可变字符串可作为 `chars` 接受，包括被剥离的字符串本身（`s.strip(s)`）。

- `StringDict.__getitem__()` 现在接受 `StringSpan`，因此你可以用借用的字符串视图索引 `StringDict`，而无需仅为执行查找而分配一个 `String`。

- 将 `Tuple` 和 `VariadicPack` 上的可变类型列表参数重命名为 `Ts`，标准化标准库中使用的命名约定。旧名称 `element_types` 作为弃用别名保留。

- 新增实验性 `DType.float6_e2m3fn` 和 `DType.float6_e3m2fn`，即来自 [Open Compute microscaling 规范](https://www.opencompute.org/documents/ocp-microscaling-formats-mx-v1-0-spec-final-pdf) 的两种 6 位编码。两者都是仅有限的，因此都没有 inf 和 NaN 编码。

  这些是用于打包权重的实验性存储格式而非通用数值类型，标准库支持是故意部分的。与现有 `DType.float4_e2m1fn` 一样，它们被排除在 `is_numeric()` 之外，未实现算术，且在每个目标上都不支持与另一种浮点类型的相互转换，因此值也无法被打印。

- `Array` 现在在其类型 `T` 也是 `Defaultable` 时遵循 `Defaultable`。

- `Array` 现在在其类型 `T` 为 `Movable` 时支持用 `+` 运算符进行拼接。两个操作数都被消费，其元素被移入新数组，新数组的长度是两个操作数长度之和。

- 弃用 `std.memory` 中的 `is_trivially_movable()`、`is_trivially_copyable()` 和 `is_trivially_deletable()`，改用 `std.traits` 中的 `IsTriviallyMovable[T]`、`IsTriviallyCopyable[T]` 和 `IsTriviallyDeinitable[T]`。替代品是 `comptime` 谓词而非函数，因此在使用点请去掉调用括号，例如用 `IsTriviallyCopyable[T]` 代替 `is_trivially_copyable[T]()`。

- 将 `UnsafeMaybeUninit` 重命名为 `MaybeUninit`。它仅当所含类型自身的移动、拷贝或隐式去初始化器是平凡的时才遵循 `Movable`、`Copyable`/`ImplicitlyCopyable` 和 `Deinitable`，因为移动、拷贝或销毁一个 `MaybeUninit` 只触碰其原始位，从不触碰所含值自身的生命周期方法。以这种方式门控遵循，将原本会是静默内存安全 bug 的情况变为编译期错误。

- `Atomic` 现在参数化为值类型 `T` 而非 `DType`。将调用点从 `Atomic[DType.float32]` 更新为 `Atomic[Float32]`。原子操作（`load()`、`store()`、`fetch_add()`、`compare_exchange()` 等）仍仅支持 `Scalar` 类型。

- 新增 `Pointer[T].unsafe_write(def() -> T)`，用闭包返回的值初始化所指对象，直接就地构造它而非将一个已构造的值移动过去。与 `unsafe_write(var T)` 不同，这不要求所指对象类型为 `Movable`。

- 为 `MaybeUninit` 和 `Pointer` 新增 `write()`，作为对可平凡去初始化类型（例如 `Int`）的 `unsafe_write()` 的安全对应物。由于平凡去初始化器是 no-op，通过 `write()` 覆盖一个活跃值不会泄漏资源，因此无需先销毁前一个值即可调用。每当所指对象类型可平凡去初始化时，请优先使用它而非 `unsafe_write()`。

- `Pointer.mut_cast` 现已被弃用。开发者应优先通过 `MutPointer` 或 `ImmPointer` 在调用点使用显式可变性。如果确实需要 mut 转换（应尽量避免）——可以使用 `unsafe_mut_cast`。

- 为 `StringLiteral`、`CStringSlice`、`ArcPointer` 和 `OwnedPointer` 新增 `ptr()`，弃用它们的 `unsafe_ptr()` 方法。这些类型总是持有有效、活跃的值，因此指向它的指针从不是不安全的。

- 以下 API 已迁移到统一闭包：`sort`、`debug_assert`、`Span.apply`。

- 未捕获的异常现在打印到 `stderr` 而非 `stdout`。

## GPU 编程

## 工具链变更

- `mojo doc` 现在会报告条件 trait 遵循的条件，生成的 API 文档会将其与 trait 一起显示。此前该条件被丢弃，使条件遵循与无条件遵循无法区分。还修复了某些 `where` 子句的渲染。

## 已移除

本版本完成了对 v1.0 周期内弃用 API 的移除。

- 移除了 `Array` 的临时 `InlineArray` alias，包括其从 `std.collections` 和 prelude 的重导出。请直接使用 `Array`。

- 移除了 `std.gpu.profiler` 模块及其 `ProfileBlock` 上下文管理器。它计时的是主机挂钟时间而非 GPU 工作，且报告经过时间时操作数顺序反了。请直接用 [`perf_counter_ns()`](/docs/std/time/time/perf_counter_ns/) 计时一块主机代码，并使用 GPU 分析器（如 Nsight Systems 或 `rocprof`）进行设备计时。

- 移除了 `memcmp` 及其在 `std.memory` 中的重导出。请改用 `unsafe_memcmp`。

- 移除了 `String.set_byte_length()`，这是一个设置长度字段而不保留容量的内部辅助函数。

- 移除了 [`b64decode()`](/docs/std/base64/base64/b64decode/) 的 `validate` 参数，该函数现在总是校验。传入 `validate=False` 在有效输入上不会跳过任何工作；它只会将 base64 字母表之外的字符变成静默损坏的输出字节。请从现有调用中去掉 `[validate=True]`；依赖默认值的调用现在会抛异常而非返回垃圾数据。

- 移除了从 `Immut` 到 `Imm` 和 `External` 到 `Untracked` 重命名后遗留的源 alias。在每种情况下请使用存活的写法：`ImmOrigin` 替代 `ImmutOrigin`，`ImmUnsafeAnyOrigin` 替代 `ImmutUnsafeAnyOrigin`，`ImmStaticOrigin` 替代 `StaticConstantOrigin`，`UntrackedOrigin` 替代 `ExternalOrigin`，`MutUntrackedOrigin` 替代 `MutExternalOrigin`，`ImmUntrackedOrigin` 替代 `ImmutUntrackedOrigin` 和 `ImmutExternalOrigin`。

- 移除了统一前的指针 alias `MutUnsafePointer`、`ImmUnsafePointer`、`ImmutUnsafePointer`、`ImmutOpaquePointer`、`ImmutPointer` 和 `OptionalUnsafePointer`。请改用 `MutPointer`、`ImmPointer`、`ImmOpaquePointer` 和 `OptionalPointer`。`UnsafePointer` 本身仍可用，但已弃用，请改用 `Pointer`。

- 移除了被其 `unsafe_` 前缀写法取代的裸内存函数：`memcpy`、`memset`、`memset_zero`、`uninit_move_n`、`uninit_copy_n` 和 `destroy_n`。请改用 `unsafe_memcpy`、`unsafe_memset`、`unsafe_memset_zero`、`unsafe_uninit_move_n`、`unsafe_uninit_copy_n` 和 `unsafe_destroy_n`。

- 移除了 `size` 到 `length` 重命名后遗留的 `size` alias：`SIMD.size`、`Array.size`、`TypeList.size`，以及 `SIMDLength` 的 `SIMDSize` alias。请使用 `length` 和 `SIMDLength`。

- 移除了 `Pointer`、`Span` 和 `StringSpan` 上的 `as_immutable()` 和 `get_immutable()` 方法。请使用 `as_imm()`。

- 移除了 `ImmutSpan` alias。请使用 `ImmSpan`。

- 移除了 `String.as_string_slice()`。请改为从字符串构造一个 `StringSpan`：`StringSpan(my_string)`。

- 移除了 `ImplicitlyDestructible` 和 `ImplicitlyDeletable` alias。请使用 `Deinitable`。

- 移除了已弃用的所有权转移方法：`List.steal_data()` 和 `OwnedPointer.steal_data()` 现在是 `unsafe_take_allocation()`，`OwnedPointer.take()` 是 `into_inner()`，`Variant.take()` 和 `Variant.unsafe_take()` 是 `unwrap()` 和 `unsafe_unwrap()`。

- 移除了被其 `unsafe_` 前缀写法取代的 `Pointer` 方法：`as_noalias_ptr()`、`destroy_pointee()`、`destroy_pointee_with()`、`init_pointee_move()`、`init_pointee_copy()` 和 `init_pointee_move_from()`。请改用 `unsafe_as_noalias()`、`unsafe_deinit_pointee()`、`unsafe_deinit_pointee_with()`、`unsafe_write()` 和 `unsafe_write_move_from()`。`Pointer.T` 的 `Pointer.type` alias 也已移除。

- 移除了 `ConditionalType` 类型函数和 `std.utils.type_functions` 模块。请使用三元表达式 `T if cond else U`。

- 移除了 `trait_downcast()`。请改为用 `where` 子句或 `comptime assert` 中的 `conforms_to(type_of(src), Trait)` 在 trait 上进行约束。

- 移除了参数化 `benchmark.run[func]()` 重载。请将函数作为参数传给 `run(f)`，它接受统一闭包。

- 从 prelude 中移除了 `AnyCoroutine`、`Coroutine` 和 `RaisingCoroutine`，并将定义它们的模块设为私有。Mojo 的异步支持尚未完成，这些类型全局可见会导致人们在不带任何稳定性保证的 API 上构建。`async def` 不受影响：编译器仍会为你合成这些类型，因此它们继续出现在推断类型和诊断中。没有受支持的直接命名它们的方式。

- 从公共 `std.runtime.asyncrt` 模块移除了异步任务 API，该模块现在为私有。`initialize_runtime()` 和 `parallelism_level()` 不受影响，并已上移到 `std.runtime` 包，因此请从 `std.runtime` 而非 `std.runtime.asyncrt` import 它们。

- 经过一段弃用期后，移除了对 `.mojopkg` 文件的支持。请改用 `.mojoc` 文件。

## 已修复

- `mojo build` 现在可以再次交叉编译到 RISC-V。此前为 `riscv32` 或 `riscv64` triple 发出 LLVM IR、汇编或对象文件会失败，错误为 `target '...' is not supported by this build`。

- `mojo build --print-supported-targets` 不再列出编译器无法为其生成代码的目标。

- `mojo build --emit asm` 和 `--emit llvm` 现在总是将 offload 内核文件写到主机输出文件旁边。构建一个先前构建已编译过的内核可能会将它们写到先前构建的输出目录，或在无诊断的情况下跳过它们。

- 参数化 `raises` 现在在函数签名中接受任何主表达式作为抛出类型，与类型在其他情况下出现的语法位置一致。这最显著地修复了 trait 和结构体方法上的 `raises Self.SomeAssocType`，此前会失败报错。括号变通方法（`raises (Self.DriveErrorType)`）不再需要。

- 步长为零的整型 `range()` 现在总是空的。此前它是无限循环——运行时永远迭代，并在 comptime 时挂起编译器。

- 步进式 `range()` 不再在最后一个元素之后的元素超出元素类型范围时无限迭代，如 `range(UInt8(250), UInt8(255), UInt8(2))`。游标过去会绕过类型限制并落回范围内，因此迭代从相反限制附近重启，且永远不与 `len()` 一致。这影响了两个步进方向上的有符号和无符号 range。

- 标量 `range()` 上的 `reversed()` 不再在 range 起点距元素类型限制不到一个步长时 yield 空迭代器，如 `reversed(range(Int8.MIN, Int8.MIN + 8, Int8(1)))`。无符号 range，以及跨度溢出其元素类型的 range，由同一变更修复。

  反转一个已反转的 range，如 `reversed(reversed(range(10)))`，现在是编译期错误。

- 修复了 `ceildiv()` 对接近类型最大值的无符号操作数返回 `0` 的问题。无符号代码路径计算 `numerator + denominator - 1`，对大操作数会溢出并回绕；它现在改为从地板除法和余数推导天花板。

- `Counter.most_common(n)` 现在在 `n` 超过唯一元素数量时返回所有元素，与 Python 一致，而不是中止。

- `os.path.join()` 现在基于累积路径而非第一个参数插入分隔符，因此 `join("/", "a", "b")` 返回 `/a/b`（先前为 `/ab`），`join("a", "b/", "c")` 返回 `a/b/c`（先前为 `a/b//c`）。

- `base64.b64decode()` 现在在输入长度不能被 4 整除时抛出错误，而不是读取越过输入末尾（或在启用断言时中止）。

- 在 macOS 上，`os.stat()` 和 `os.lstat()` 不再对常规文件返回负的 `st_mode`。底层 `mode_t` 和 `nlink_t` C 类型 alias 被声明为有符号 16 位整数，但 macOS 将它们定义为无符号，因此任何设置了 `S_IFREG` 位的模式（每个常规文件）都符号扩展为负的 `Int`。

- `PythonObject` 在调用 Python 对象时不再每个位置参数泄漏一个 CPython 引用，在设置项、属性或集合字面量元素时也不再泄漏。
