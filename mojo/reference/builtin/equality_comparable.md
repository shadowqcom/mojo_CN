# equality\_comparable

## `EqualityComparable`

A type which can be compared for equality with other instances of itself.

**Implemented traits:**

`AnyType`

**Methods:**

### `__del__`

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

### `__eq__`

`__eq__(self: T, other: T) -> Bool`

Define whether two instances of the object are equal to each other.

**Args:**

- ​**other** (`T`): Another instance of the same type.

**Returns:**

True if the instances are equal according to the type's definition of equality, False otherwise.

### `__ne__`

`__ne__(self: T, other: T) -> Bool`

Define whether two instances of the object are not equal to each other.

**Args:**

- ​**other** (`T`): Another instance of the same type.

**Returns:**

True if the instances are not equal according to the type's definition of equality, False otherwise.