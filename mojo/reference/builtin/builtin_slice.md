# builtin\_slice

Implements slice.

These are Mojo built-ins, so you don't need to import them.

## `Slice`

Represents a slice expression.

Objects of this type are generated when slice syntax is used within square brackets, e.g.:

```
var msg: String = "Hello Mojo"# Both are equivalent and print "Mojo".print(msg[6:])print(msg.__getitem__(Slice(6, len(msg))))
```

**Fields:**

- ​**start** (`Int`): The starting index of the slice.

- ​**end** (`Int`): The end index of the slice.

- ​**step** (`Int`): The step increment value of the slice.

**Implemented traits:**

`AnyType`, `EqualityComparable`, `Sized`, `Stringable`

**Methods:**

### `__init__`

`__init__(start: Int, end: Int) -> Self`

Construct slice given the start and end values.

**Args:**

- ​**start** (`Int`): The start value.
- ​**end** (`Int`): The end value.

**Returns:**

The constructed slice.

`__init__[T0: AnyRegType, T1: AnyRegType, T2: AnyRegType](start: T0, end: T1, step: T2) -> Self`

Construct slice given the start, end and step values.

**Parameters:**

- ​**T0** (`AnyRegType`): Type of the start value.
- ​**T1** (`AnyRegType`): Type of the end value.
- ​**T2** (`AnyRegType`): Type of the step value.

**Args:**

- ​**start** (`T0`): The start value.
- ​**end** (`T1`): The end value.
- ​**step** (`T2`): The step value.

**Returns:**

The constructed slice.

### `__getitem__`

`__getitem__(self: Self, idx: Int) -> Int`

Get the slice index.

**Args:**

- ​**idx** (`Int`): The index.

**Returns:**

The slice index.

### `__eq__`

`__eq__(self: Self, other: Self) -> Bool`

Compare this slice to the other.

**Args:**

- ​**other** (`Self`): The slice to compare to.

**Returns:**

True if start, end, and step values of this slice match the corresponding values of the other slice and False otherwise.

### `__ne__`

`__ne__(self: Self, other: Self) -> Bool`

Compare this slice to the other.

**Args:**

- ​**other** (`Self`): The slice to compare to.

**Returns:**

False if start, end, and step values of this slice match the corresponding values of the other slice and True otherwise.

### `__str__`

`__str__(self: Self) -> String`

Gets the string representation of the span.

**Returns:**

The string representation of the span.

### `__len__`

`__len__(self: Self) -> Int`

Return the length of the slice.

**Returns:**

The length of the slice.

## `slice`

`slice(end: Int) -> Slice`

Construct slice given the end value.

**Args:**

- ​**end** (`Int`): The end value.

**Returns:**

The constructed slice.

`slice(start: Int, end: Int) -> Slice`

Construct slice given the start and end values.

**Args:**

- ​**start** (`Int`): The start value.
- ​**end** (`Int`): The end value.

**Returns:**

The constructed slice.

`slice[T0: AnyRegType, T1: AnyRegType, T2: AnyRegType](start: T0, end: T1, step: T2) -> Slice`

Construct a Slice given the start, end and step values.

**Parameters:**

- ​**T0** (`AnyRegType`): Type of the start value.
- ​**T1** (`AnyRegType`): Type of the end value.
- ​**T2** (`AnyRegType`): Type of the step value.

**Args:**

- ​**start** (`T0`): The start value.
- ​**end** (`T1`): The end value.
- ​**step** (`T2`): The step value.

**Returns:**

The constructed slice.