Optional
======================
定义 Optional，一种类型，对可能存在或不存在的值进行建模。

可选值可以被视为类型安全的可为 null 模式。 您的值可以取值或`None` ，您需要检查 并显式提取值以将其取出。

```mojo
from collections.optional import Optional
var a = Optional(1)
var b = Optional[Int](None)
if a:
    print(a.value())  # prints 1
if b:  # b is False, so no print
    print(b.value())
var c = a.or_else(2)
var d = b.or_else(2)
print(c.value())  # prints 1
print(d.value())  # prints 2
```



## `Optional`

对可能存在也可能不存在的值进行建模的类型。

可选值可以被视为类型安全的可为 null 模式。 您的值可以取值或 `None`，您需要检查 并显式提取值以将其取出。

目前 T 需要是一个`CollectionElement`，这样我们才能实现 Optional 复制/移动，并允许它在集合本身中使用。

```mojo
from collections.optional import Optional
var a = Optional(1)
var b = Optional[Int](None)
if a:
    print(a.value())  # prints 1
if b:  # b is False, so no print
    print(b.value())
var c = a.or_else(2)
var d = b.or_else(2)
print(c.value())  # prints 1
print(d.value())  # prints 2
```



**参数：**

- **T** (`CollectionElement`)：存储在 Optional.

**实现的特征：**

`AnyType`, `Boolable`, `CollectionElement`, `Copyable`, `Movable`

**方法：**

### `__init__`
```
__init__(inout self: Self)
```

构造一个空的 Optional。

```
__init__(inout self: Self, owned value: T)
```

构造一个包含值的 Optional。

**参数：**

- **value** (`T`)：要存储在可选 中的值。

```
__init__(inout self: Self, value: None)
```

构造一个空的 Optional。

**参数：**

- **value** (`None`)：必须正好是`None` 。

### `__bool__`
```
__bool__(self: Self) -> Bool
```

如果 Optional 具有值，则返回 true。

**返回：**

如果可选值为 True，否则为 False。

### `__invert__`
```
__invert__(self: Self) -> Bool
```

如果可选项具有值，则返回 False。

**返回：**

如果可选值为 False，则为 True，否则为 True。

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

### `__and__`
```
__and__[type: Boolable](self: Self, *other: "type") -> Bool
```

如果 self 具有一个值，而另一个值强制为 True，则返回 true。

**参数：**

- **type** (`Boolable`)：强制到 Bool 的类型。

**参数：**

- **other** (`*"type"`)：要比较的值。

**返回：**

如果布尔强制后两个输入均为 True，则为 True。

### `__or__`
```
__or__[type: Boolable](self: Self, *other: "type") -> Bool
```

如果 self 具有值或其他值强制为 True，则返回 true。

**参数：**

- **type** (`Boolable`)：强制到 Bool 的类型。

**参数：**

- **other** (`*"type"`)：要比较的值。

**返回：**

如果任一输入在布尔强制后为 True，则为 True。

### `__rand__`
```
__rand__[type: Boolable](self: Self, *other: "type") -> Bool
```

如果 self 具有一个值，而另一个值强制为 True，则返回 true。

**参数：**

- **type** (`Boolable`)：强制到 Bool 的类型。

**参数：**

- **other** (`*"type"`)：要比较的值。

**返回：**

如果布尔强制后两个输入均为 True，则为 True。

### `__ror__`
```
__ror__[type: Boolable](self: Self, *other: "type") -> Bool
```

如果 self 具有值或其他值强制为 True，则返回 true。

**参数：**

- **type** (`Boolable`)：强制到 Bool 的类型。

**参数：**

- **other** (`*"type"`)：要比较的值。

**返回：**

如果任一输入在布尔强制后为 True，则为 True。

### `value`
```
value(self: Self) -> T
```

不安全地从“可选”中检索值。

此函数当前创建副本。一旦我们有了生命 我们将能够让它返回一个引用。

这不会检查可选项是否包含值。 如果你在没有先用 **bool**() 验证可选的情况下调用它 例如。无论是否知道它包含一个 值(例如 `if my_option:`，使用`or_else` )，您将得到垃圾不安全的数据。

**返回：**

以 T 值形式包含的选项数据。

### `take`
```
take(owned self: Self) -> T
```

不安全地将值移出“可选”。

调用方对新值拥有所有权，可选值为 摧毁。

这不会检查可选项是否包含值。 如果你在没有先用 **bool**() 验证可选的情况下调用它 例如。无论是否知道它包含一个 值(例如`if my_option:`，使用`or_else` )，您将得到垃圾不安全的数据。

**返回：**

期权的包含数据作为拥有的 T 值。

### `or_else`
```
or_else(self: Self, default: T) -> T
```

返回 Optional 中包含的基础值，如果 Optional 的基础值不存在，则返回默认值。

**参数：**

- **default** (`T`)：不存在值时要使用的新值。

**返回：**

包含在“可选”或默认值中的基础值。

## `OptionalReg`

寄存器可传递的可选类型。

此结构(可选)包含一个值。它仅适用于琐碎的寄存器 目前尚可的类型。

**参数：**

- **T** (`AnyRegType`)：存储在 Optional.

**实现的特征：**

`AnyType`, `Boolable`

**方法：**

### `__init__`
```
__init__() -> Self
```

创建一个不带值的可选项。

**返回：**

可选的。

```
__init__(value: T) -> Self
```

创建一个具有值的可选项。

**参数：**

- **value** (`T`)：值。

**返回：**

可选的。

```
__init__(value: None) -> Self
```

创建一个不带 None 文本值的可选项。

**参数：**

- **value** (`None`)：无值。

**返回：**

不带值的可选项。

### `__bool__`
```
__bool__(self: Self) -> Bool
```

如果 optional 具有值，则返回 true。

**返回：**

如果可选项具有 vau，则为 True，否则为 False。

### `__invert__`
```
__invert__(self: Self) -> Bool
```

如果可选项具有值，则返回 False。

**返回：**

如果可选值为 False，则为 True，否则为 True。

### `__and__`
```
__and__[type: Boolable](self: Self, *other: "type") -> Bool
```

如果 self 具有一个值，而另一个值强制为 True，则返回 true。

**参数：**

- **type** (`Boolable`)：强制到 Bool 的类型。

**参数：**

- **other** (`*"type"`)：要比较的值。

**返回：**

如果布尔强制后两个输入均为 True，则为 True。

### `__or__`
```
__or__[type: Boolable](self: Self, *other: "type") -> Bool
```

如果 self 具有值或其他值强制为 True，则返回 true。

**参数：**

- **type** (`Boolable`)：强制到 Bool 的类型。

**参数：**

- **other** (`*"type"`)：要比较的值。

**返回：**

如果任一输入在布尔强制后为 True，则为 True。

### `__rand__`
```
__rand__[type: Boolable](self: Self, *other: "type") -> Bool
```

如果 self 具有一个值，而另一个值强制为 True，则返回 true。

**参数：**

- **type** (`Boolable`)：强制到 Bool 的类型。

**参数：**

- **other** (`*"type"`)：要比较的值。

**返回：**

如果布尔强制后两个输入均为 True，则为 True。

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>

### `__ror__`
```
__ror__[type: Boolable](self: Self, *other: "type") -> Bool
```

如果 self 具有值或其他值强制为 True，则返回 true。

**参数：**

- **type** (`Boolable`)：强制到 Bool 的类型。

**参数：**

- **other** (`*"type"`)：要比较的值。

**返回：**

如果任一输入在布尔强制后为 True，则为 True。

### `value`
```
value(self: Self) -> T
```

获取可选值。

**返回：**

包含的值。