# list

Provides utilities for working with static and variadic lists.

You can import these APIs from the `buffer` package. For example:

```
from buffer.list import Dim
```

## `Dim`[​](https://docs.modular.com/mojo/stdlib/buffer/list#dim "Direct link to dim")

A static or dynamic dimension modeled with an optional integer.

This class is meant to represent an optional static dimension. When a value is present, the dimension has that static value. When a value is not present, the dimension is dynamic.

**Fields:**

- ​**value** (`OptionalReg[Int]`): An optional value for the dimension.

**Implemented traits:**

`AnyType`, `Boolable`, `Copyable`, `Intable`, `Movable`, `Stringable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/buffer/list#__init__ "Direct link to __init__")

`__init__[type: Intable](*value: "type") -> Self`

Creates a statically-known dimension.

**Parameters:**

- ​**type** (`Intable`): The Intable type.

**Args:**

- ​**value** (`*"type"`): The static dimension value.

**Returns:**

A dimension with a static value.

`__init__(value: index) -> Self`

Creates a statically-known dimension.

**Args:**

- ​**value** (`index`): The static dimension value.

**Returns:**

A dimension with a static value.

`__init__() -> Self`

Creates a dynamic dimension.

**Returns:**

A dimension value with no static value.

### `__bool__`[​](https://docs.modular.com/mojo/stdlib/buffer/list#__bool__ "Direct link to __bool__")

`__bool__(self: Self) -> Bool`

Returns True if the dimension has a static value.

**Returns:**

Whether the dimension has a static value.

### `__eq__`[​](https://docs.modular.com/mojo/stdlib/buffer/list#__eq__ "Direct link to __eq__")

`__eq__(self: Self, rhs: Self) -> Bool`

Compares two dimensions for equality.

**Args:**

- ​**rhs** (`Self`): The other dimension.

**Returns:**

True if the dimensions are the same.

### `__ne__`[​](https://docs.modular.com/mojo/stdlib/buffer/list#__ne__ "Direct link to __ne__")

`__ne__(self: Self, rhs: Self) -> Bool`

Compare two dimensions for inequality.

**Args:**

- ​**rhs** (`Self`): The dimension to compare.

**Returns:**

True if they are not equal.

### `__mul__`[​](https://docs.modular.com/mojo/stdlib/buffer/list#__mul__ "Direct link to __mul__")

`__mul__(self: Self, rhs: Self) -> Self`

Multiplies two dimensions.

If either are unknown, the result is unknown as well.

**Args:**

- ​**rhs** (`Self`): The other dimension.

**Returns:**

The product of the two dimensions.

### `__floordiv__`[​](https://docs.modular.com/mojo/stdlib/buffer/list#__floordiv__ "Direct link to __floordiv__")

`__floordiv__(self: Self, rhs: Self) -> Self`

Divide two dimensions and round towards negative infinite.

If either are unknown, the result is unknown as well.

**Args:**

- ​**rhs** (`Self`): The other dimension.

**Returns:**

The floor division of the two dimensions.

### `has_value`[​](https://docs.modular.com/mojo/stdlib/buffer/list#has_value "Direct link to has_value")

`has_value(self: Self) -> Bool`

Returns True if the dimension has a static value.

**Returns:**

Whether the dimension has a static value.

### `is_dynamic`[​](https://docs.modular.com/mojo/stdlib/buffer/list#is_dynamic "Direct link to is_dynamic")

`is_dynamic(self: Self) -> Bool`

Returns True if the dimension has a dynamic value.

**Returns:**

Whether the dimension is dynamic.

### `get`[​](https://docs.modular.com/mojo/stdlib/buffer/list#get "Direct link to get")

`get(self: Self) -> Int`

Gets the static dimension value.

**Returns:**

The static dimension value.

### `is_multiple`[​](https://docs.modular.com/mojo/stdlib/buffer/list#is_multiple "Direct link to is_multiple")

`is_multiple[alignment: Int](self: Self) -> Bool`

Checks if the dimension is aligned.

**Parameters:**

- ​**alignment** (`Int`): The alignment requirement.

**Returns:**

Whether the dimension is aligned.

### `__int__`[​](https://docs.modular.com/mojo/stdlib/buffer/list#__int__ "Direct link to __int__")

`__int__(self: Self) -> Int`

### `__str__`[​](https://docs.modular.com/mojo/stdlib/buffer/list#__str__ "Direct link to __str__")

`__str__(self: Self) -> String`

Converts the Dim to a String. If the value is unknown, then the string "?" is returned.

**Returns:**

The string representation of the type.

## `DimList`[​](https://docs.modular.com/mojo/stdlib/buffer/list#dimlist "Direct link to dimlist")

This type represents a list of dimensions. Each dimension may have a static value or not have a value, which represents a dynamic dimension.

**Fields:**

- ​**value** (`VariadicList[Dim]`): The underlying storage for the list of dimensions.

**Implemented traits:**

`AnyType`, `Sized`, `Stringable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/buffer/list#__init__-1 "Direct link to __init__-1")

`__init__(values: Tuple[Int]) -> Self`

Creates a dimension list from the given list of values.

**Args:**

- ​**values** (`Tuple[Int]`): The initial dim values list.

**Returns:**

A dimension list.

`__init__(values: Tuple[Int, Int]) -> Self`

Creates a dimension list from the given list of values.

**Args:**

- ​**values** (`Tuple[Int, Int]`): The initial dim values list.

**Returns:**

A dimension list.

`__init__(values: Tuple[Int, Int, Int]) -> Self`

Creates a dimension list from the given list of values.

**Args:**

- ​**values** (`Tuple[Int, Int, Int]`): The initial dim values list.

**Returns:**

A dimension list.

`__init__(values: VariadicList[Dim]) -> Self`

Creates a dimension list from the given list of values.

**Args:**

- ​**values** (`VariadicList[Dim]`): The initial dim values list.

**Returns:**

A dimension list.

`__init__(*values: Dim) -> Self`

Creates a dimension list from the given Dim values.

**Args:**

- ​**values** (`*Dim`): The initial dim values.

**Returns:**

A dimension list.

### `__len__`[​](https://docs.modular.com/mojo/stdlib/buffer/list#__len__ "Direct link to __len__")

`__len__(self: Self) -> Int`

Gets the size of the DimList.

**Returns:**

The number of elements in the DimList.

### `get`[​](https://docs.modular.com/mojo/stdlib/buffer/list#get-1 "Direct link to get-1")

`get[i: Int](self: Self) -> Int`

Gets the static dimension value at a specified index.

**Parameters:**

- ​**i** (`Int`): The dimension index.

**Returns:**

The static dimension value at the specified index.

### `at`[​](https://docs.modular.com/mojo/stdlib/buffer/list#at "Direct link to at")

`at[i: Int](self: Self) -> Dim`

Gets the dimension at a specified index.

**Parameters:**

- ​**i** (`Int`): The dimension index.

**Returns:**

The dimension at the specified index.

### `has_value`[​](https://docs.modular.com/mojo/stdlib/buffer/list#has_value-1 "Direct link to has_value-1")

`has_value[i: Int](self: Self) -> Bool`

Returns True if the dimension at the given index has a static value.

**Parameters:**

- ​**i** (`Int`): The dimension index.

**Returns:**

Whether the specified dimension has a static value.

### `product`[​](https://docs.modular.com/mojo/stdlib/buffer/list#product "Direct link to product")

`product[length: Int](self: Self) -> Dim`

Computes the product of all the dimensions in the list.

If any are dynamic, the result is a dynamic dimension value.

**Parameters:**

- ​**length** (`Int`): The number of elements in the list.

**Returns:**

The product of all the dimensions.

### `product_range`[​](https://docs.modular.com/mojo/stdlib/buffer/list#product_range "Direct link to product_range")

`product_range[start: Int, end: Int](self: Self) -> Dim`

Computes the product of a range of the dimensions in the list.

If any in the range are dynamic, the result is a dynamic dimension value.

**Parameters:**

- ​**start** (`Int`): The starting index.
- ​**end** (`Int`): The end index.

**Returns:**

The product of all the dimensions.

### `contains`[​](https://docs.modular.com/mojo/stdlib/buffer/list#contains "Direct link to contains")

`contains[length: Int](self: Self, value: Dim) -> Bool`

Determines whether the dimension list contains a specified dimension value.

**Parameters:**

- ​**length** (`Int`): The number of elements in the list.

**Args:**

- ​**value** (`Dim`): The value to find.

**Returns:**

True if the list contains a dimension of the specified value.

### `all_known`[​](https://docs.modular.com/mojo/stdlib/buffer/list#all_known "Direct link to all_known")

`all_known[length: Int](self: Self) -> Bool`

Determines whether all dimensions are statically known.

**Parameters:**

- ​**length** (`Int`): The number of elements in the list.

**Returns:**

True if all dimensions have a static value.

`all_known[start: Int, end: Int](self: Self) -> Bool`

Determines whether all dimensions within \[start, end) are statically known.

**Parameters:**

- ​**start** (`Int`): The first queried dimension.
- ​**end** (`Int`): The last queried dimension.

**Returns:**

True if all queried dimensions have a static value.

### `create_unknown`[​](https://docs.modular.com/mojo/stdlib/buffer/list#create_unknown "Direct link to create_unknown")

`static create_unknown[length: Int]() -> Self`

Creates a dimension list of all dynamic dimension values.

**Parameters:**

- ​**length** (`Int`): The number of elements in the list.

**Returns:**

A list of all dynamic dimension values.

### `__str__`[​](https://docs.modular.com/mojo/stdlib/buffer/list#__str__-1 "Direct link to __str__-1")

`__str__(self: Self) -> String`

Converts the DimList to a String. The String is a comma separated list of the string representation of Dim.

**Returns:**

The string representation of the type.