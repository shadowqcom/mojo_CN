# optional

Defines Optional, a type modeling a value which may or may not be present.

Optional values can be thought of as a type-safe nullable pattern. Your value can take on a value or `None`, and you need to check and explicitly extract the value to get it out.

```
from collections.optional import Optionalvar a = Optional(1)var b = Optional[Int](None)if a:    print(a.value())  # prints 1if b:  # b is False, so no print    print(b.value())var c = a.or_else(2)var d = b.or_else(2)print(c.value())  # prints 1print(d.value())  # prints 2
```

## `Optional`[​](https://docs.modular.com/mojo/stdlib/collections/optional#optional "Direct link to optional")

A type modeling a value which may or may not be present.

Optional values can be thought of as a type-safe nullable pattern. Your value can take on a value or `None`, and you need to check and explicitly extract the value to get it out.

Currently T is required to be a `CollectionElement` so we can implement copy/move for Optional and allow it to be used in collections itself.

```
from collections.optional import Optionalvar a = Optional(1)var b = Optional[Int](None)if a:    print(a.value())  # prints 1if b:  # b is False, so no print    print(b.value())var c = a.or_else(2)var d = b.or_else(2)print(c.value())  # prints 1print(d.value())  # prints 2
```

**Parameters:**

- ​**T** (`CollectionElement`): The type of value stored in the Optional.

**Implemented traits:**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `Movable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__init__ "Direct link to __init__")

`__init__(inout self: Self)`

Construct an empty Optional.

`__init__(inout self: Self, owned value: T)`

Construct an Optional containing a value.

**Args:**

- ​**value** (`T`): The value to store in the optional.

`__init__(inout self: Self, value: None)`

Construct an empty Optional.

**Args:**

- ​**value** (`None`): Must be exactly `None`.

### `__bool__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__bool__ "Direct link to __bool__")

`__bool__(self: Self) -> Bool`

Return true if the Optional has a value.

**Returns:**

True if the optional has a value and False otherwise.

### `__invert__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__invert__ "Direct link to __invert__")

`__invert__(self: Self) -> Bool`

Return False if the optional has a value.

**Returns:**

False if the optional has a value and True otherwise.

### `__and__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__and__ "Direct link to __and__")

`__and__[type: Boolable](self: Self, *other: "type") -> Bool`

Return true if self has a value and the other value is coercible to True.

**Parameters:**

- ​**type** (`Boolable`): Type coercible to Bool.

**Args:**

- ​**other** (`*"type"`): Value to compare to.

**Returns:**

True if both inputs are True after boolean coercion.

### `__or__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__or__ "Direct link to __or__")

`__or__[type: Boolable](self: Self, *other: "type") -> Bool`

Return true if self has a value or the other value is coercible to True.

**Parameters:**

- ​**type** (`Boolable`): Type coercible to Bool.

**Args:**

- ​**other** (`*"type"`): Value to compare to.

**Returns:**

True if either inputs is True after boolean coercion.

### `__rand__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__rand__ "Direct link to __rand__")

`__rand__[type: Boolable](self: Self, *other: "type") -> Bool`

Return true if self has a value and the other value is coercible to True.

**Parameters:**

- ​**type** (`Boolable`): Type coercible to Bool.

**Args:**

- ​**other** (`*"type"`): Value to compare to.

**Returns:**

True if both inputs are True after boolean coercion.

### `__ror__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__ror__ "Direct link to __ror__")

`__ror__[type: Boolable](self: Self, *other: "type") -> Bool`

Return true if self has a value or the other value is coercible to True.

**Parameters:**

- ​**type** (`Boolable`): Type coercible to Bool.

**Args:**

- ​**other** (`*"type"`): Value to compare to.

**Returns:**

True if either inputs is True after boolean coercion.

### `value`[​](https://docs.modular.com/mojo/stdlib/collections/optional#value "Direct link to value")

`value(self: Self) -> T`

Unsafely retrieve the value out of the Optional.

This function currently creates a copy. Once we have lifetimes we'll be able to have it return a reference.

This doesn't check to see if the optional contains a value. If you call this without first verifying the optional with **bool**() eg. by `if my_option:` or without otherwise knowing that it contains a value (for instance with `or_else`), you'll get garbage unsafe data out.

**Returns:**

The contained data of the option as a T value.

### `take`[​](https://docs.modular.com/mojo/stdlib/collections/optional#take "Direct link to take")

`take(owned self: Self) -> T`

Unsafely move the value out of the Optional.

The caller takes ownership over the new value, and the Optional is destroyed.

This doesn't check to see if the optional contains a value. If you call this without first verifying the optional with **bool**() eg. by `if my_option:` or without otherwise knowing that it contains a value (for instance with `or_else`), you'll get garbage unsafe data out.

**Returns:**

The contained data of the option as an owned T value.

### `or_else`[​](https://docs.modular.com/mojo/stdlib/collections/optional#or_else "Direct link to or_else")

`or_else(self: Self, default: T) -> T`

Return the underlying value contained in the Optional or a default value if the Optional's underlying value is not present.

**Args:**

- ​**default** (`T`): The new value to use if no value was present.

**Returns:**

The underlying value contained in the Optional or a default value.

## `OptionalReg`[​](https://docs.modular.com/mojo/stdlib/collections/optional#optionalreg "Direct link to optionalreg")

A register-passable optional type.

This struct optionally contains a value. It only works with trivial register passable types at the moment.

**Parameters:**

- ​**T** (`AnyRegType`): The type of value stored in the Optional.

**Implemented traits:**

`AnyType`, `Boolable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__init__-1 "Direct link to __init__-1")

`__init__() -> Self`

Create an optional without a value.

**Returns:**

The optional.

`__init__(value: T) -> Self`

Create an optional with a value.

**Args:**

- ​**value** (`T`): The value.

**Returns:**

The optional.

`__init__(value: None) -> Self`

Create an optional without a value from a None literal.

**Args:**

- ​**value** (`None`): The None value.

**Returns:**

The optional without a value.

### `__bool__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__bool__-1 "Direct link to __bool__-1")

`__bool__(self: Self) -> Bool`

Return true if the optional has a value.

**Returns:**

True if the optional has a valu and False otherwise.

### `__invert__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__invert__-1 "Direct link to __invert__-1")

`__invert__(self: Self) -> Bool`

Return False if the optional has a value.

**Returns:**

False if the optional has a value and True otherwise.

### `__and__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__and__-1 "Direct link to __and__-1")

`__and__[type: Boolable](self: Self, *other: "type") -> Bool`

Return true if self has a value and the other value is coercible to True.

**Parameters:**

- ​**type** (`Boolable`): Type coercible to Bool.

**Args:**

- ​**other** (`*"type"`): Value to compare to.

**Returns:**

True if both inputs are True after boolean coercion.

### `__or__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__or__-1 "Direct link to __or__-1")

`__or__[type: Boolable](self: Self, *other: "type") -> Bool`

Return true if self has a value or the other value is coercible to True.

**Parameters:**

- ​**type** (`Boolable`): Type coercible to Bool.

**Args:**

- ​**other** (`*"type"`): Value to compare to.

**Returns:**

True if either inputs is True after boolean coercion.

### `__rand__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__rand__-1 "Direct link to __rand__-1")

`__rand__[type: Boolable](self: Self, *other: "type") -> Bool`

Return true if self has a value and the other value is coercible to True.

**Parameters:**

- ​**type** (`Boolable`): Type coercible to Bool.

**Args:**

- ​**other** (`*"type"`): Value to compare to.

**Returns:**

True if both inputs are True after boolean coercion.

### `__ror__`[​](https://docs.modular.com/mojo/stdlib/collections/optional#__ror__-1 "Direct link to __ror__-1")

`__ror__[type: Boolable](self: Self, *other: "type") -> Bool`

Return true if self has a value or the other value is coercible to True.

**Parameters:**

- ​**type** (`Boolable`): Type coercible to Bool.

**Args:**

- ​**other** (`*"type"`): Value to compare to.

**Returns:**

True if either inputs is True after boolean coercion.

### `value`[​](https://docs.modular.com/mojo/stdlib/collections/optional#value-1 "Direct link to value-1")

`value(self: Self) -> T`

Get the optional value.

**Returns:**

The contained value.