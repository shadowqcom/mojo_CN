# str

Provides the `str` function.

These are Mojo built-ins, so you don't need to import them.

## `Stringable`

The `Stringable` trait describes a type that can be converted to a [`String`](https://docs.modular.com/mojo/stdlib/builtin/string.html).

Any type that conforms to `Stringable` or [`StringableRaising`](https://docs.modular.com/mojo/stdlib/builtin/str.html#stringableraising) works with the built-in [`print()`](https://docs.modular.com/mojo/stdlib/builtin/io.html#print) and [`str()`](https://docs.modular.com/mojo/stdlib/builtin/str.html) functions.

The `Stringable` trait requires the type to define the `__str__()` method. For example:

```
@valuestruct Foo(Stringable):    var s: String    fn __str__(self) -> String:        return self.s
```

Now you can pass an instance of `Foo` to the `str()` function to get back a `String`:

```
var foo = Foo("test")print(str(foo) == "test")
```

```
True
```

If the `__str__()` method might raise an error, use the [`StringableRaising`](https://docs.modular.com/mojo/stdlib/builtin/str.html#stringableraising) trait, instead.

**Implemented traits:**

`AnyType`

**Methods:**

### `__del__`

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

### `__str__`

`__str__(self: T) -> String`

Get the string representation of the type.

**Returns:**

The string representation of the type.

## `StringableRaising`

The StringableRaising trait describes a type that can be converted to a [`String`](https://docs.modular.com/mojo/stdlib/builtin/string.html).

Any type that conforms to [`Stringable`](https://docs.modular.com/mojo/stdlib/builtin/str.html#stringable) or `StringableRaising` works with the built-in [`print()`](https://docs.modular.com/mojo/stdlib/builtin/io.html#print) and [`str()`](https://docs.modular.com/mojo/stdlib/builtin/str.html#str) functions.

The `StringableRaising` trait requires the type to define the `__str__()` method, which can raise an error. For example:

```
@valuestruct Foo(StringableRaising):    var s: String    fn __str__(self) raises -> String:        if self.s == "":            raise Error("Empty String")        return self.s
```

Now you can pass an instance of `Foo` to the `str()` function to get back a `String`:

```
fn main() raises:    var foo = Foo("test")    print(str(foo) == "test")
```

```
True
```

**Implemented traits:**

`AnyType`

**Methods:**

### `__del__`

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

### `__str__`

`__str__(self: T) -> String`

Get the string representation of the type.

Raises: If there is an error when computing the string representation of the type.

**Returns:**

The string representation of the type.

## `str`

`str[T: Stringable](value: T) -> String`

Get the string representation of a value.

**Parameters:**

- ​**T** (`Stringable`): The type conforming to Stringable.

**Args:**

- ​**value** (`T`): The object to get the string representation of.

**Returns:**

The string representation of the object.

`str(value: None) -> String`

Get the string representation of the `None` type.

**Args:**

- ​**value** (`None`): The object to get the string representation of.

**Returns:**

The string representation of the object.

`str[T: StringableRaising](value: T) -> String`

Get the string representation of a value.

Raises: If there is an error when computing the string representation of the type.

**Parameters:**

- ​**T** (`StringableRaising`): The type conforming to Stringable.

**Args:**

- ​**value** (`T`): The object to get the string representation of.

**Returns:**

The string representation of the object.