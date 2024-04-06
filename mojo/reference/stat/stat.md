# stat

Implements the stat module.

**Aliases:**

- ​`S_IFMT = 61440`: Bits that determine the file type.

- ​`S_IFDIR = 16384`: Bits that determine the directory.

- ​`S_IFCHR = 8192`: Bits that determine the char device.

- ​`S_IFBLK = 24576`: Bits that determine the block device.

- ​`S_IFREG = 32768`: Bits that determine the regular file.

- ​`S_IFIFO = 4096`: Bits that determine the fifo.

- ​`S_IFLNK = 40960`: Bits that determine the symlink.

- ​`S_IFSOCK = 49152`: Bits that determine the socket.

## `S_ISLNK`[​](https://docs.modular.com/mojo/stdlib/stat/stat#s_islnk "Direct link to s_islnk")

`S_ISLNK[intable: Intable](mode: intable) -> Bool`

Returns True if the mode is a symlink.

**Parameters:**

- ​**intable** (`Intable`): A type conforming to Intable.

**Args:**

- ​**mode** (`intable`): The file mode.

**Returns:**

True if the mode is a symlink and False otherwise.

## `S_ISREG`[​](https://docs.modular.com/mojo/stdlib/stat/stat#s_isreg "Direct link to s_isreg")

`S_ISREG[intable: Intable](mode: intable) -> Bool`

Returns True if the mode is a regular file.

**Parameters:**

- ​**intable** (`Intable`): A type conforming to Intable.

**Args:**

- ​**mode** (`intable`): The file mode.

**Returns:**

True if the mode is a regular file and False otherwise.

## `S_ISDIR`[​](https://docs.modular.com/mojo/stdlib/stat/stat#s_isdir "Direct link to s_isdir")

`S_ISDIR[intable: Intable](mode: intable) -> Bool`

Returns True if the mode is a directory.

**Parameters:**

- ​**intable** (`Intable`): A type conforming to Intable.

**Args:**

- ​**mode** (`intable`): The file mode.

**Returns:**

True if the mode is a directory and False otherwise.

## `S_ISCHR`[​](https://docs.modular.com/mojo/stdlib/stat/stat#s_ischr "Direct link to s_ischr")

`S_ISCHR[intable: Intable](mode: intable) -> Bool`

Returns True if the mode is a character device.

**Parameters:**

- ​**intable** (`Intable`): A type conforming to Intable.

**Args:**

- ​**mode** (`intable`): The file mode.

**Returns:**

True if the mode is a character device and False otherwise.

## `S_ISBLK`[​](https://docs.modular.com/mojo/stdlib/stat/stat#s_isblk "Direct link to s_isblk")

`S_ISBLK[intable: Intable](mode: intable) -> Bool`

Returns True if the mode is a block device.

**Parameters:**

- ​**intable** (`Intable`): A type conforming to Intable.

**Args:**

- ​**mode** (`intable`): The file mode.

**Returns:**

True if the mode is a block device and False otherwise.

## `S_ISFIFO`[​](https://docs.modular.com/mojo/stdlib/stat/stat#s_isfifo "Direct link to s_isfifo")

`S_ISFIFO[intable: Intable](mode: intable) -> Bool`

Returns True if the mode is a fifo.

**Parameters:**

- ​**intable** (`Intable`): A type conforming to Intable.

**Args:**

- ​**mode** (`intable`): The file mode.

**Returns:**

True if the mode is a fifo and False otherwise.

## `S_ISSOCK`[​](https://docs.modular.com/mojo/stdlib/stat/stat#s_issock "Direct link to s_issock")

`S_ISSOCK[intable: Intable](mode: intable) -> Bool`

Returns True if the mode is a socket.

**Parameters:**

- ​**intable** (`Intable`): A type conforming to Intable.

**Args:**

- ​**mode** (`intable`): The file mode.

**Returns:**

True if the mode is a socket and False otherwise.