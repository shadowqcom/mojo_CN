# value

Defines core value traits.

These are Mojo built-ins, so you don't need to import them.

## `Movable`

The Movable trait denotes a type whose value can be moved.

Implement the `Movable` trait on `Foo` which requires the `__moveinit__` method:

```
struct Foo(Movable):    fn __init__(inout self):        pass    fn __moveinit__(inout self, owned existing: Self):        print("moving")
```

You can now use the ^ suffix to move the object instead of copying it inside generic functions:

```
fn return_foo[T: Movable](owned foo: T) -> T:    return foo^var foo = Foo()var res = return_foo(foo^)
```

```
moving
```

**Implemented traits:**

`AnyType`

**Methods:**

### `__moveinit__`

`__moveinit__(inout self: T, owned existing: T, /)`

Create a new instance of the value by moving the value of another.

**Args:**

- ​**existing** (`T`): The value to move.

### `__del__`

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

## `Copyable`

The Copyable trait denotes a type whose value can be copied.

Example implementing the `Copyable` trait on `Foo` which requires the `__copyinit__` method:

```
struct Foo(Copyable):    var s: String    fn __init__(inout self, s: String):        self.s = s    fn __copyinit__(inout self, other: Self):        print("copying value")        self.s = other.s
```

You can now copy objects inside a generic function:

```
fn copy_return[T: Copyable](foo: T) -> T:    var copy = foo    return copyvar foo = Foo("test")var res = copy_return(foo)
```

```
copying value
```

**Implemented traits:**

`AnyType`

**Methods:**

### `__copyinit__`

`__copyinit__(inout self: T, existing: T, /)`

Create a new instance of the value by copying an existing one.

**Args:**

- ​**existing** (`T`): The value to copy.

### `__del__`

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

## `CollectionElement`

The CollectionElement trait denotes a trait composition of the `Copyable` and `Movable` traits.

This is useful to have as a named entity since Mojo does not currently support anonymous trait compositions to constrain on `Copyable & Movable` in the parameter.

**Implemented traits:**

`AnyType`, `Copyable`, `Movable`

**Methods:**

### `__copyinit__`

`__copyinit__(inout self: T, existing: T, /)`

Create a new instance of the value by copying an existing one.

**Args:**

- ​**existing** (`T`): The value to copy.

### `__moveinit__`

`__moveinit__(inout self: T, owned existing: T, /)`

Create a new instance of the value by moving the value of another.

**Args:**

- ​**existing** (`T`): The value to move.

### `__del__`

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.