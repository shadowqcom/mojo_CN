---
title: "pwd"
sidebar_label: "pwd"
description: "Provides access to the user password database on Unix-like systems.  This module retrieves user account information from the system password database, similar to Python's `pwd` module. It provides fun"
---

# pwd

Provides access to the user password database on Unix-like systems.

This module retrieves user account information from the system password database,
similar to Python's `pwd` module. It provides functions to look up user entries by
user ID or username, returning structured account information including home
directory, shell, and user/group IDs.

Constraints:
    Available on Linux and macOS only.

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
