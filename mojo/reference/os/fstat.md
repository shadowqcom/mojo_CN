# fstat

Implements the file system stat operations.

You can import these APIs from the `os` package. For example:

```
from os import stat
```

## `stat_result`

Object whose fields correspond to the members of the stat structure.

**Fields:**

- ​**st\_mode** (`Int`): File mode: file type and file mode bits (permissions).

- ​**st\_ino** (`Int`): Platform dependent, but if non-zero, uniquely identifies the file for a given value of st\_dev.

- ​**st\_dev** (`Int`): Identifier of the device on which this file resides.

- ​**st\_nlink** (`Int`): Number of hard links.

- ​**st\_uid** (`Int`): User identifier of the file owner.

- ​**st\_gid** (`Int`): Group identifier of the file owner.

- ​**st\_size** (`Int`): Size of the file in bytes, if it is a regular file or a symbolic link.

- ​**st\_atimespec** (`_CTimeSpec`): Time of file most recent access.

- ​**st\_mtimespec** (`_CTimeSpec`): Time of file most recent modification.

- ​**st\_ctimespec** (`_CTimeSpec`): Time of file most recent change.

- ​**st\_birthtimespec** (`_CTimeSpec`): Time of file creation.

- ​**st\_blocks** (`Int`): Number of 512-byte blocks allocated for file.

- ​**st\_blksize** (`Int`): Preferred blocksize for efficient file system I/O.

- ​**st\_rdev** (`Int`): Type of device if an inode device.

- ​**st\_flags** (`Int`): User defined flags for file.

**Implemented traits:**

`AnyType`, `Copyable`, `Movable`, `Stringable`

**Methods:**

### `__init__`

`__init__(inout self: Self, *, st_mode: Int, st_ino: Int, st_dev: Int, st_nlink: Int, st_uid: Int, st_gid: Int, st_size: Int, st_atimespec: _CTimeSpec, st_mtimespec: _CTimeSpec, st_ctimespec: _CTimeSpec, st_birthtimespec: _CTimeSpec, st_blocks: Int, st_blksize: Int, st_rdev: Int, st_flags: Int)`

Intialize the stat\_result structure.

**Args:**

- ​**st\_mode** (`Int`): File mode: file type and file mode bits (permissions).
- ​**st\_ino** (`Int`): Uniquely identifier for a file.
- ​**st\_dev** (`Int`): Identifier of the device on which this file resides.
- ​**st\_nlink** (`Int`): Number of hard links.
- ​**st\_uid** (`Int`): User identifier of the file owner.
- ​**st\_gid** (`Int`): Group identifier of the file owner.
- ​**st\_size** (`Int`): Size of the file (bytes), if it is a file or a symlink.
- ​**st\_atimespec** (`_CTimeSpec`): Time of file most recent access.
- ​**st\_mtimespec** (`_CTimeSpec`): Time of file most recent modification.
- ​**st\_ctimespec** (`_CTimeSpec`): Time of file most recent change.
- ​**st\_birthtimespec** (`_CTimeSpec`): Time of file creation.
- ​**st\_blocks** (`Int`): Number of 512-byte blocks allocated for file.
- ​**st\_blksize** (`Int`): Preferred blocksize for efficient file system I/O.
- ​**st\_rdev** (`Int`): Type of device if an inode device.
- ​**st\_flags** (`Int`): User defined flags for file.

### `__str__`

`__str__(self: Self) -> String`

Constructs a string representation of stat\_result.

**Returns:**

A string representation of stat\_result.

### `__repr__`

`__repr__(self: Self) -> String`

Constructs a representation of stat\_result.

**Returns:**

A representation of stat\_result.

## `stat`

`stat(path: String) -> stat_result`

Get the status of a file or a file descriptor.

**Args:**

- ​**path** (`String`): The path to the directory.

**Returns:**

Returns the stat\_result on the path.

`stat[pathlike: PathLike](path: pathlike) -> stat_result`

Get the status of a file or a file descriptor.

**Parameters:**

- ​**pathlike** (`PathLike`): The a type conforming to the os.PathLike trait.

**Args:**

- ​**path** (`pathlike`): The path to the directory.

**Returns:**

Returns the stat\_result on the path.

## `lstat`

`lstat(path: String) -> stat_result`

Get the status of a file or a file descriptor (similar to stat, but does not follow symlinks).

**Args:**

- ​**path** (`String`): The path to the directory.

**Returns:**

Returns the stat\_result on the path.

`lstat[pathlike: PathLike](path: pathlike) -> stat_result`

Get the status of a file or a file descriptor (similar to stat, but does not follow symlinks).

**Parameters:**

- ​**pathlike** (`PathLike`): The a type conforming to the os.PathLike trait.

**Args:**

- ​**path** (`pathlike`): The path to the directory.

**Returns:**

Returns the stat\_result on the path.