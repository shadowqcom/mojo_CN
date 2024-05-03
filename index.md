---
layout: home
title: "Mojo：面向AI开发者的编程语言 | Mojo官网  Mojo社区"
hero:
  name: "Mojo"
  text: "AI开发者的编程语言"
  tagline: Mojo 将 Python 的可用性与 C 的性能相结合，解锁了 AI 硬件无与伦比的可编程性和 AI 模型的可扩展性。
  actions:
    - theme: brand
      text: 阅读文档
      link: /mojo/manual/
    - theme: alt
      text: 社区
      link: https://github.com/shadowqcom/mojo_dev
    - theme: alt
      text: 用户群
      link: /mojo/chat

  image:
    src: /img/6633770580be0d7ed44edf04_mojo243.jpeg
    alt: mojo

features:
  - icon: 🎉
    title: 用一种语言写下所有内容
    details: 用一种语言写下所有内容，使用Python或者直接操作底层硬件，编写与各种低级AI硬件交互的程序，无需C++或CUDA。。

  - icon: ⚡
    title: 提升Python性能
    details: 充分利用硬件的全部性能，包括多个核心、矢量单元和特殊加速器单元，使用全球最先进的编译器和异构运行时。实现与C++和CUDA相媲美的性能。

  - icon: ✨
    title: 访问整个Python生态系统
    details: 与Python生态系统实现真正的互操作性，无缝地混合使用诸如Numpy和Matplotlib等任意库与您的自定义代码和Mojo代码。

  - icon: 🛞
    title: 用Mojo写个Mojo社区
    details: 造个轮子，也许有用呢。
    link: https://github.com/shadowqcom/mojo_dev
---

<br><br>

<p style="font-weight: 600; font-size: 20px; padding: 0 24px;">下载&安装</p>
<span style="color:#6A737D; font-size: 14px; padding: 0 24px;">1.安装modular命令行工具:</span>

```sh
curl -s https://get.modular.com | sh -
```

<span style="color:#6A737D; font-size: 14px; padding: 0 24px;">2.安装 Mojo SDK:</span>

```sh
modular install mojo
```

<p style="font-weight: 600; font-size: 20px; padding: 0 24px;">Hello, world!</p>

::: code-group

```mojo [Mojo REPL]
print("Hello, world!")
```

```mojo [hello.mojo]
fn main():
    print("Hello, world!")
```
```sh [mojo build]
# 编译
mojo build hello.mojo

# 执行
./hello
:::