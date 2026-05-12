---
title: "path"
slug: path
sidebar_label: "path"
description: "提供一组独立于操作系统的函数用于操作文件系统路径。您可以从 `os.path` 包导入这些 API。例如：```mojo from std.os.path import isdir ```"
---

# path

提供一组独立于操作系统的函数用于操作文件系统路径。

您可以从 `os.path` 包导入这些 API。例如：

```mojo
from std.os.path import isdir
```

## 函数

### _get_stat_st_mode

`@always_inline def _get_stat_st_mode(var path`

### _get_lstat_st_mode

`@always_inline def _get_lstat_st_mode(var path`

### _user_home_path

`def _user_home_path(path`

### expanduser

`def expanduser[PathLike`

### isdir

`def isdir[PathLike`

### isfile

`def isfile[PathLike`

### islink

`def islink[PathLike`

### dirname

`def dirname[PathLike`

### realpath

`def realpath[
    PathLike`

### exists

`def exists[PathLike`

### lexists

`def lexists[PathLike`

### getsize

`def getsize[PathLike`

### is_absolute

`def is_absolute[PathLike`

### join

`def join(var path`

### split

`def split[PathLike`

### basename

`def basename[PathLike`

### join

`def join[PathLike`

### _split_extension

`def _split_extension(
    path`

### split_extension

`def split_extension[
    PathLike`

### splitroot

`def splitroot[
    PathLike`

### _is_shell_special_variable

`def _is_shell_special_variable(byte`

### _is_alphanumeric

`def _is_alphanumeric(byte`

### _parse_variable_name

`def _parse_variable_name[
    immutable`

### expandvars

`def expandvars[PathLike`
