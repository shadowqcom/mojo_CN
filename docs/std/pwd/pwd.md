---
title: "pwd"
slug: pwd
sidebar_label: "pwd"
description: "提供对类 Unix 系统上用户密码数据库的访问。此模块从系统密码数据库检索用户账户信息，类似于 Python 的 `pwd` 模块。"
---

# pwd

提供对类 Unix 系统上用户密码数据库的访问。

此模块从系统密码数据库检索用户账户信息，类似于 Python 的 `pwd` 模块。它提供按用户 ID 或用户名查找用户条目的函数，返回包括主目录、shell 和用户/组 ID 的结构化账户信息。

限制：
    仅在 Linux 和 macOS 上可用。

## 类型

### Passwd

`@fieldwise_init struct Passwd(Copyable, Writable)`

**Implemented Traits:**

- `Copyable`
- `Writable`

**Fields:**

- `pw_name: String`
- `pw_passwd: String`
- `pw_uid: Int`
- `pw_gid: Int`
- `pw_gecos: String`
- `pw_dir: String`
- `pw_shell: String`

**Methods:**

- **write_to**: `def write_to(self, mut writer`
