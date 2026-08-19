---
title: Mojo 常见问题
sidebar_label: FAQ
description: 关于 Mojo 的常见问题解答。
---

我们在此页面整理了关于 Mojo 的常见问题。如果本页面没有回答你的所有问题，也请查看我们的[社区频道](https://mojoo.org/)。

## 动机

### 为什么你们要开发 Mojo？

我们开发 Mojo 是为了解决构建 [Modular 平台](https://www.modular.com)时遇到的一个内部挑战——跨整个技术栈编程太复杂了。我们需要一种灵活且可扩展的编程模型，能够面向 CPU、GPU、AI 加速器以及 AI 领域中普遍存在的其他异构系统。这意味着需要一种具有强大编译时元编程、自适应编译技术集成、全编译流程缓存以及其他现有语言不支持的功能的编程语言。

因此，我们对 Mojo 的长期成功极为投入，并在此方面大量投资。我们的总体使命是统一 AI 软件，而如果没有一种能够扩展到整个 AI 基础设施栈的统一语言，我们就无法实现这一目标。我们当前的重点是通过极速执行来统一 CPU 和 GPU 编程，为 Modular 平台服务。尽管如此，我们的北极星是让 Mojo 最终支持通用编程的全部范围。

更多细节，请参阅 [Mojo 愿景](/docs/vision/)。

### 为什么叫 Mojo？

Mojo 的意思是"一种神奇的魔力"或"超能力"。我们认为这个名字非常适合一种为程序员带来超能力的语言，包括为加速器和当今 AI 中普遍存在的其他异构系统解锁创新的编程模型。

### Mojo 解决了哪些其他语言无法解决的问题？

Mojo 将 Python 的易用性与它所缺失的系统编程功能结合在一起。我们更多是以实用主义而非新颖性为导向，但 Mojo 对 [MLIR](https://mlir.llvm.org/) 的使用使其能够以其他语言尚未展示的方式扩展到新的异构硬件类型和领域。它还在核心中内置了缓存和分布式编译。我们还相信 Mojo 有很大的机会在更广泛的 Python 社区中统一混合包。

### 哪类开发者最能从 Mojo 中受益？

Mojo 的最初重点是将可编程性带回 AI，使 AI 开发者能够定制并充分利用他们的硬件。因此，Mojo 将主要惠及希望编写高性能 AI 操作的研究人员和其他工程师。随着时间的推移，Mojo 将扩展其对通用系统编程的关注。我们希望这将有助于提升庞大的 Python 库生态系统，并赋能更多使用 C、C++、Rust 等语言的传统系统开发者。

### 为什么基于 Python 构建？

如今，几乎所有的 AI 研究和模型开发都在 Python 中进行，这是有充分理由的！Python 是一种强大的高级语言，具有简洁的语法和庞大的库生态系统。在 Modular，我们的核心原则之一是在客户所在的地方与客户相遇——我们的目标不是进一步分裂 AI 领域，而是统一和简化 AI 开发工作流。

我们的重点是在异构硬件上为 AI 工作负载创新可编程性，我们认为没有必要在语言_语法_或_社区_方面进行创新。我们选择基于 Python 风格的语法，因为它简单、熟悉，而且我们相信它是一门非常好的语言。我们优先考虑 Python 互操作性，因为 Python 被 AI 社区广泛使用和喜爱。

### 为什么创建新语言而不是增强现有方案？

由于各种原因，Python 不适合系统编程。领域特定语言（DSL）如 Triton 以最大的效率和通用性换取易用性。其他主要的编译型语言都是围绕 CPU 设计的，而非异构计算。

关于开发 Mojo 和 Modular 平台背后动机的更多信息，请参阅我们的博客系列 [Modular 如何让 AI 计算大众化](https://www.modular.com/blog/how-is-modular-democratizing-ai-compute)。

## 功能

### 在哪里可以了解更多关于 Mojo 功能的信息？

最好的起点是 [Mojo 手册](/docs/manual/)。如果你想了解未来会有哪些功能，请查看[路线图](/docs/roadmap)。

### 使用 MLIR 构建 Mojo 有什么好处？

当我们意识到没有现有语言能够解决 AI 计算中的挑战时，我们开始从第一性原理重新思考应该如何设计和实现编程语言来解决我们的问题。由于我们需要对各种加速器提供高性能支持，传统的编译器技术如 LLVM 和 GCC 并不适用（基于它们的任何语言和工具也不够用）。虽然它们支持广泛的 CPU 和一些常用的 GPU，但这些编译器技术是几十年前设计的，无法完全支持现代芯片架构。如今，专用机器学习加速器的标准技术是 MLIR。

[MLIR](https://mlir.llvm.org/) 提供了灵活的基础设施来构建编译器。它基于多层中间表示（IR），允许将任何代码逐步降低到任何硬件，并且自[首次发布](https://blog.google/technology/ai/mlir-accelerating-ai-open-source-infrastructure/)以来已被硬件加速器行业广泛采用。它最大的优势是能够构建_领域特定_的编译器，特别是针对非传统 CPU 和 GPU 的奇怪领域，如 AI ASIC、[量子计算系统](https://github.com/PennyLaneAI/catalyst)、FPGA 和[定制芯片](https://circt.llvm.org/)。

虽然你可以使用 MLIR 为任何编程语言创建灵活而强大的编译器，但 Mojo 是世界上第一种从零开始基于 MLIR 设计原则构建的语言。这意味着 Mojo 不仅为异构硬件提供高性能编译，还提供了对 MLIR 中间表示的直接编程支持，这在目前任何其他语言中都是不可能的。

### Mojo 只能用于 AI 吗，还是可以用于其他方面？

Mojo 的最初重点是解决 AI 可编程性挑战。然而，我们的目标是将 Mojo 发展成为一种通用编程语言。我们在 Modular 使用 Mojo 开发 AI 算法和 GPU 内核，但你也可以将其用于其他方面，如高性能计算、数据转换、编写前/后处理操作等等。

### Mojo 是解释型还是编译型语言？

Mojo 是编译型语言。[`mojo build`](/docs/cli/build/) 和 [`mojo run`](/docs/cli/run/) 都执行提前（AOT）编译。

### Mojo 支持分布式执行吗？

单靠 Mojo 不行。Mojo 是 Modular 平台的一个组件，它使你更容易编写高性能、可移植的 CPU 和 GPU 图操作，但你还需要一个支持图级转换和异构计算的运行时（或"操作系统"），这由 [Modular 平台](https://docs.modular.com/max/intro)提供。

### 如何将 Python 程序或库转换为 Mojo？

请参阅 [Python 开发者提示](/docs/manual/python-to-mojo/)，了解 Python 和 Mojo 之间重要差异的快速入门。[Mojo AI 技能](/docs/tools/skills/)可以帮助你的 AI 编码助手将 Python 代码翻译成可运行的 Mojo 代码。

你可以通过为 Python 构建 Mojo 绑定来将 Python 项目的部分迁移到 Mojo。请参阅关于如何[从 Python 调用 Mojo](/docs/manual/python/mojo-from-python) 的文档。

### 与 C/C++ 等其他语言的互操作性如何？

Mojo 代码可以与 C 代码互操作。有关信息，请参阅 [`ffi`](/docs/std/ffi/) 模块、[`@export`](/docs/manual/decorators/export/) 装饰器和 [`abi("C")` 函数效果](/docs/reference/mojo-function-declarations/#abi-c)的文档。

Mojo 代码还可以与使用 `extern "C"` 的 C++ 代码互操作。我们相信未来可以提供更好的 C++ 互操作性。

### Mojo 如何支持硬件底层映射？

Mojo 利用 LLVM 级别的方言来支持其硬件目标，并在适用时使用其他基于 MLIR 的代码生成后端。这也意味着 Mojo 可以轻松扩展到任何硬件后端。

### 谁来编写为 Mojo 添加更多硬件支持的软件？

Mojo 提供了任何人扩展硬件支持所需的所有语言功能。因此，我们预计硬件供应商和社区成员将在未来贡献额外的硬件支持。

## 性能

### Mojo 有 AI 相关的性能基准测试吗？

重要的是要记住，Mojo 被设计为通用编程语言，任何 AI 相关的基准测试都将严重依赖其他框架组件。例如，为 Modular 平台提供动力的内部 CPU 和 GPU 图操作都是用 Mojo 编写的。你可以在我们关于[在 AMD MI355 上部署 Modular 平台](https://www.modular.com/blog/achieving-state-of-the-art-performance-on-amd-mi355----in-just-14-days)和[在 NVIDIA Blackwell GPU 上优化矩阵乘法性能](https://www.modular.com/blog/matrix-multiplication-on-blackwell-part-4---breaking-sota)的博客文章中了解更多关于性能的信息。

## Mojo SDK

### 如何获取 Mojo SDK？

你可以通过任何 Python 或 Conda 包管理器安装 `mojo` 来获取 Mojo 和所有开发者工具。详情请参阅 [Mojo 安装指南](/install/)。

### Mojo SDK 包含什么？

我们实际上提供两个 Mojo 包：`mojo` 和 `mojo-compiler`。

`mojo` 包提供了 Mojo 开发所需的一切。它包括：

- [`mojo` CLI](/docs/cli/)（包括 Mojo 编译器）
- [Mojo 标准库](/docs/std/)
- [Layout 库](/docs/layout/)
- [`mojo` Python 包](https://github.com/modular/modular/tree/main/mojo/python/mojo)
- Mojo 语言服务器（LSP），用于 IDE/编辑器集成
- [Mojo 调试器](/docs/tools/debugging/)（包括 LLDB）
- [Mojo 代码格式化工具](/docs/cli/format/)
- [Mojo REPL](/docs/cli/repl/)

`mojo-compiler` 包更小，适用于只需要调用或构建现有 Mojo 代码的环境。例如，如果你在生产环境中运行 Mojo，或者在 Python 中编程并[调用 Mojo 包](/docs/manual/python/mojo-from-python)——这些情况下你不需要 LSP 和调试器工具。它包括：

- [`mojo` CLI](/docs/cli/)（包括 Mojo 编译器）
- [Mojo 标准库](/docs/std/)
- [Layout 库](/docs/layout/)
- [`mojo` Python 包](https://github.com/modular/modular/tree/main/mojo/python/mojo)

### SDK 的许可条款是什么？

请阅读[使用条款](https://www.modular.com/legal/terms)。

### 支持哪些操作系统？

Mojo 原生支持 Mac 和 Linux，并通过 WSL 支持 Windows。详情请参阅 [Mojo 系统要求](/docs/requirements/)。

### 有 IDE 集成吗？

是的，我们为 [Visual Studio Code](https://code.visualstudio.com/) 和其他支持 VS Code 扩展的编辑器（如 [Cursor](https://cursor.com/home)）发布了官方 Mojo 语言扩展。该扩展支持语法高亮、代码补全、格式化、悬停提示等多种功能。它与 remote-ssh 和 dev containers 无缝协作，实现 Mojo 的远程开发。

你可以从 [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=modular-mojotools.vscode-mojo) 或 [Open VSX Registry](https://open-vsx.org/extension/modular-mojotools/vscode-mojo) 获取该扩展。

### Mojo SDK 会收集遥测数据吗？

是的，Mojo SDK 会收集一些基本系统信息、崩溃报告和一些 LSP 事件，使我们能够识别、分析和优先处理 Mojo 问题。v25.6 及更早版本还收集编译器/运行时事件，但我们已经移除了这些。

具体来说，我们收集：

- **崩溃报告**：当 Mojo 编译器崩溃并产生堆栈跟踪时，报告中使用的唯一信息是操作系统版本和 MAX/Mojo 版本。
- **LSP 性能指标**：Mojo LSP 报告响应用户输入所需时间的汇总数据（解析延迟）。报告中使用的唯一信息是用户按键与 Mojo LSP 能够显示适当错误或警告消息之间的毫秒数。

我们从不收集或传输任何用户信息，如源代码、按键或任何其他用户数据。

此遥测对于帮助我们快速识别问题和改进产品至关重要。没有这些遥测数据，我们将不得不依赖用户提交的错误报告，根据我们数十年构建开发者产品的经验，我们知道大多数人不会这样做。遥测为我们提供了构建更好产品所需的洞察。

## 版本与兼容性

### Mojo 的版本策略是什么？

Mojo 正朝着 2026 年夏季发布 1.0 版本的方向努力。对于 1.0，我们预计核心语言功能将被稳定化。并非所有 Mojo 库 API 都会在 1.0 时稳定，但稳定的 API 将被标记。

请参阅我们的[路线图](/docs/roadmap/)以了解未来的发展方向。

### 你们多久发布一次 Mojo 的新版本？

Mojo 开发进展迅速，我们定期发布更新，包括几乎每天的 nightly 构建。

加入 [Mojo 社区频道](https://mojoo.org/)获取通知，并[订阅我们的新闻通讯](https://www.modular.com/blog#sign-up-for-our-newsletter)（在 Mojo 博客页面底部）获取更粗粒度的更新。

## 开源

### Mojo 会开源吗？

我们已承诺在 2026 年秋季将 Mojo 开源。

### 为什么不从一开始就公开开发 Mojo？

Mojo 是一个大项目，与以前的语言有几个架构上的差异。我们相信一个拥有共同愿景的紧密工程师团队比社区驱动的努力行动更快。这种开发方式在其他现已开源的项目中也很成熟（如 LLVM、Clang、Swift、MLIR 等）。

## 社区

### 在哪里可以提问或分享反馈？

如果你对即将推出的功能有疑问或对语言有建议，请务必先阅读 [Mojo 路线图](/docs/roadmap/)，其中提供了关于我们当前优先级的重要信息。

要联系 Mojo 团队和开发者社区，请使用我们[社区页面](https://mojoo.org/)上的资源。
