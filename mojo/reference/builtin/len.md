# len

Provides the `len()` function and its associated traits.

These are Mojo built-ins, so you don't need to import them.

## `Sized`[​](https://docs.modular.com/mojo/stdlib/builtin/len#sized "Direct link to sized")

The `Sized` trait describes a type that has an integer length (such as a string or array).

Any type that conforms to `Sized` or [`SizedRaising`](https://docs.modular.com/mojo/stdlib/builtin/len.html#sizedraising) works with the built-in [`len()`](https://docs.modular.com/mojo/stdlib/builtin/len.html#len) function.

The `Sized` trait requires a type to implement the `__len__()` method. For example:

```
@valuestruct Foo(Sized):    var length: Int    fn __len__(self) -> Int:        return self.length
```

You can pass an instance of `Foo` to the `len()` function to get its length:

```
var foo = Foo(42)print(len(foo) == 42)
```

```
True
```

If the `__len__()` method can raise an error, use the [`SizedRaising`](https://docs.modular.com/mojo/stdlib/builtin/len.html#sizedraising) trait instead.

**Implemented traits:**

`AnyType`

**Methods:**

### `__del__`[​](https://docs.modular.com/mojo/stdlib/builtin/len#__del__ "Direct link to __del__")

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

### `__len__`[​](https://docs.modular.com/mojo/stdlib/builtin/len#__len__ "Direct link to __len__")

`__len__(self: T) -> Int`

Get the length of the type.

**Returns:**

The length of the type.

## `SizedRaising`[​](https://docs.modular.com/mojo/stdlib/builtin/len#sizedraising "Direct link to sizedraising")

The `SizedRaising` trait describes a type that has an integer length, which might raise an error if the length can't be determined.

Any type that conforms to [`Sized`](https://docs.modular.com/mojo/stdlib/builtin/len.html#sized) or `SizedRaising` works with the built-in [`len()`](https://docs.modular.com/mojo/stdlib/builtin/len.html#len) function.

The `SizedRaising` trait requires a type to implement the `__len__()` method, which can raise an error. For example:

```
@valuestruct Foo(SizedRaising):    var length: Int    fn __len__(self) raises -> Int:        if self.length < 0:            raise Error("Length is negative")        return self.length
```

You can pass an instance of `Foo` to the `len()` function to get its length:

```
fn main() raises:    var foo = Foo(42)    print(len(foo) == 42)
```

```
True
```

**Implemented traits:**

`AnyType`

**Methods:**

### `__del__`[​](https://docs.modular.com/mojo/stdlib/builtin/len#__del__-1 "Direct link to __del__-1")

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

### `__len__`[​](https://docs.modular.com/mojo/stdlib/builtin/len#__len__-1 "Direct link to __len__-1")

`__len__(self: T) -> Int`

Get the length of the type.

Raises: If the length cannot be computed.

**Returns:**

The length of the type.

## `len`[​](https://docs.modular.com/mojo/stdlib/builtin/len#len "Direct link to len")

`len[T: Sized](value: T) -> Int`

Get the length of a value.

**Parameters:**

- ​**T** (`Sized`): The Sized type.

**Args:**

- ​**value** (`T`): The object to get the length of.

**Returns:**

The length of the object.

`len[T: SizedRaising](value: T) -> Int`

Get the length of a value.

Raises: If the length cannot be computed.

**Parameters:**

- ​**T** (`SizedRaising`): The Sized type.

**Args:**

- ​**value** (`T`): The object to get the length of.

**Returns:**

The length of the object.