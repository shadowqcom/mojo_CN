# variant

Defines a Variant type.

You can use this type to implement variant/sum types. For example:

```
from utils.variant import Variantalias IntOrString = Variant[Int, String]fn to_string(inout x: IntOrString) -> String:  if x.isa[String]():    return x.get[String]()[]  # x.isa[Int]()  return str(x.get[Int]())[]# They have to be mutable for now, and implement CollectionElementvar an_int = IntOrString(4)var a_string = IntOrString(String("I'm a string!"))var who_knows = IntOrString(0)import randomif random.random_ui64(0, 1):    who_knows.set[String]("I'm actually a string too!")print(to_string(an_int))print(to_string(a_string))print(to_string(who_knows))
```

## `Variant`[​](https://docs.modular.com/mojo/stdlib/utils/variant#variant "Direct link to variant")

A runtime-variant type.

Data for this type is stored internally. Currently, its size is the largest size of any of its variants plus a 16-bit discriminant.

You can - use `isa[T]()` to check what type a variant is - use `take[T]()` to take a value from the variant - use `get[T]()` to get a value out of a variant - This currently does an extra copy/move until we have lifetimes - It also temporarily requires the value to be mutable - use `set[T](owned new_value: T)` to reset the variant to a new value

Example:

```
from utils.variant import Variantalias IntOrString = Variant[Int, String]fn to_string(inout x: IntOrString) -> String:    if x.isa[String]():        return x.get[String]()[]    # x.isa[Int]()    return str(x.get[Int]()[])# They have to be mutable for now, and implement CollectionElementvar an_int = IntOrString(4)var a_string = IntOrString(String("I'm a string!"))var who_knows = IntOrString(0)import randomif random.random_ui64(0, 1):    who_knows.set[String]("I'm actually a string too!")print(to_string(an_int))print(to_string(a_string))print(to_string(who_knows))
```

**Parameters:**

- ​**Ts** (`*CollectionElement`): The elements of the variadic.

**Implemented traits:**

`AnyType`, `CollectionElement`, `Copyable`, `Movable`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/utils/variant#__init__ "Direct link to __init__")

`__init__[T: CollectionElement](inout self: Self, owned value: T)`

Create a variant with one of the types.

**Parameters:**

- ​**T** (`CollectionElement`): The type to initialize the variant to. Generally this should be able to be inferred from the call type, eg. `Variant[Int, String](4)`.

**Args:**

- ​**value** (`T`): The value to initialize the variant with.

### `__copyinit__`[​](https://docs.modular.com/mojo/stdlib/utils/variant#__copyinit__ "Direct link to __copyinit__")

`__copyinit__(inout self: Self, other: Self)`

Creates a deep copy of an existing variant.

**Args:**

- ​**other** (`Self`): The variant to copy from.

### `__moveinit__`[​](https://docs.modular.com/mojo/stdlib/utils/variant#__moveinit__ "Direct link to __moveinit__")

`__moveinit__(inout self: Self, owned other: Self)`

Move initializer for the variant.

**Args:**

- ​**other** (`Self`): The variant to move.

### `__del__`[​](https://docs.modular.com/mojo/stdlib/utils/variant#__del__ "Direct link to __del__")

`__del__(owned self: Self)`

Destroy the variant.

### `take`[​](https://docs.modular.com/mojo/stdlib/utils/variant#take "Direct link to take")

`take[T: CollectionElement](owned self: Self) -> T`

Take the current value of the variant as the provided type.

The caller takes ownership of the underlying value. The variant type is consumed without calling any deleters.

This doesn't explicitly check that your value is of that type! If you haven't verified the type correctness at runtime, you'll get a type that _looks_ like your type, but has potentially unsafe and garbage member data.

**Parameters:**

- ​**T** (`CollectionElement`): The type to take.

**Returns:**

The undelying data as an owned value.

### `set`[​](https://docs.modular.com/mojo/stdlib/utils/variant#set "Direct link to set")

`set[T: CollectionElement](inout self: Self, owned value: T)`

Set the variant value.

This will call the destructor on the old value, and update the variant's internal type and data to the new value.

**Parameters:**

- ​**T** (`CollectionElement`): The new variant type. Must be one of the Variant's type arguments.

**Args:**

- ​**value** (`T`): The new value to set the variant to.

### `isa`[​](https://docs.modular.com/mojo/stdlib/utils/variant#isa "Direct link to isa")

`isa[T: CollectionElement](self: Self) -> Bool`

Check if the variant contains the required type.

**Parameters:**

- ​**T** (`CollectionElement`): The type to check.

**Returns:**

True if the variant contains the requested type.

### `get`[​](https://docs.modular.com/mojo/stdlib/utils/variant#get "Direct link to get")

`get[T: CollectionElement, mutability: i1, self_life: lifetime<mutability>](self: !lit.ref<_stdlib::_utils::_variant::_Variant<:variadic<trait<_stdlib::_builtin::_value::_CollectionElement>> Ts>, mut=mutability, self_life>) -> Reference[T, mutability, self_life]`

Get the value out of the variant as a type-checked type.

This doesn't explicitly check that your value is of that type! If you haven't verified the type correctness at runtime, you'll get a type that _looks_ like your type, but has potentially unsafe and garbage member data.

For now this has the limitations that it - requires the variant value to be mutable

**Parameters:**

- ​**T** (`CollectionElement`): The type of the value to get out.
- ​**mutability** (`i1`): The inferred mutability of the variant type.
- ​**self\_life** (`lifetime<mutability>`): The inferred lifetime of the variant type.

**Returns:**

The internal data represented as a `Reference[T]`.