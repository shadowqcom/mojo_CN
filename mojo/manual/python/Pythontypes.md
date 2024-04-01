# Python类型
在调用Python方法时，Mojo需要在本地Python对象和本地Mojo对象之间进行转换。大多数情况下，这些转换会自动进行，但有一些情况Mojo尚未处理。在这些情况下，您可能需要进行显式转换或调用额外的方法。

## Python中的Mojo类型

Mojo原始类型会隐式转换为Python对象。目前，我们支持列表、元组、整数、浮点数、布尔值和字符串。

例如，给定以下打印Python类型的Python函数：

```mojo
%%python
def type_printer(value):
    print(type(value))
```

（您可以忽略代码示例开头的`%%python`，它在下面的说明中解释。）

您可以毫无问题地将Mojo类型传递给这个Python函数：

```mojo
type_printer(4)
type_printer(3.14)
type_printer(("Mojo", True))
```

    <class 'int'>
    <class 'float'>
    <class 'tuple'>

这是一个简化的代码示例，以一组Jupyter笔记本单元格的形式编写。第一个单元格包含`%%python`指令，因此被解释为Python代码。第二个单元格包含顶级Mojo代码。您需要根据实际情况调整此代码才能在其他地方运行。

## Mojo中的Python类型

您也可以在Mojo中使用Python对象。例如，Mojo还没有标准的字典类型，但是您可以在Mojo中使用Python字典。要创建Python字典，请使用`dict()`方法：

```mojo
from python import Python

fn use_dict() raises:
    var dictionary = Python.dict()
    dictionary["fruit"] = "apple"
    dictionary["starch"] = "potato"
    print("Fruit: ", dictionary["fruit"])
```

### Mojo包装对象

当您在Mojo代码中使用Python对象时，Mojo会在Python对象周围添加`PythonObject`包装器。该对象公开了许多常见的双下划线方法（dunder方法），如`__getitem__()`和`__getattr__()`，并将它们传递给底层的Python对象。

您可以通过使用Mojo文字初始化`PythonObject`来显式创建一个包装的Python对象：

```mojo
from python.object import PythonObject

var py_list: PythonObject = [1, 2, 3, 4]
```

大多数情况下，您可以像在Python中一样处理包装对象。您可以使用Python的`[]`运算符访问列表中的项，并使用点表示法访问属性和调用方法。例如：

```mojo
var n = py_list[2]
py_list.append(5)
```

如果您想构造一个在Mojo中没有字面等效的Python类型，您还可以使用`Python.evaluate()`方法。例如，要创建一个Python `set`：

```mojo
fn use_py_set() raises:
    var py_set = Python.evaluate('set([2, 3, 5, 7, 11])')
    var num_items = len(py_set)
    print(num_items, " items in set.")  # 输出 "5 items in set"
    print(py_set.__contains__(6))       # 输出 "False"
```

注意：您应该能够使用表达式`6 in py_set`。然而，由于`PythonObject`目前的工作方式，您需要直接调用`__contains__()`方法。

某些Mojo API可以很好地处理`PythonObject`，但有时您需要显式将Python值转换为本地Mojo值。

目前，`PythonObject`符合`Intable`和`Stringable`特征，这意味着您可以使用内置的`int()`和`str()`函数将Python值转换为Mojo的`Int`和`String`类型，并使用内置的`print()`函数打印Python值。

`PythonObject`还提供了`__bool__()`和`to_float64()`方法，用于分别转换为布尔值和浮点数值。

```mojo
var i: Int = int(py_int)
var s: String = str(py_string)
varbool = py_bool.__bool__()
var f: Float64 = py_float.to_float64()
```

我们提到过Python类型会被包装在`PythonObject`包装器中。目前有一个例外情况：Python字典有自己专门的Mojo包装类型`Dictionary`。尽管名称是这样，但它并不是真正的字典类型，只是另一种包装类型。大多数情况下，这只是一个实现细节，但您可能会注意到类型不同。

### 在Mojo中比较Python类型

在条件语句中，Python对象的行为与您预期的一样：像`False`和`None`这样的Python值在Mojo中也会被解释为假。

如果您需要知道底层Python对象的类型，可以使用`Python.type()`方法，它相当于Python的内置`type()`函数。您可以使用`Python.is_type()`方法（相当于Python的`is`运算符）比较两个Python对象的标识：

```mojo
fn python_types() raises:
    from python import Python
    from python.object import PythonObject

    var value1: PythonObject = 3.7
    var value2 = Python.evaluate("10/3")
    var float_type = Python.evaluate("float")

    print(Python.type(value1))   # <class 'float'>
    print(Python.is_type(Python.type(value1), Python.type(value2)))  # True
    print(Python.is_type(Python.type(value1), float_type))           # True
    print(Python.is_type(Python.type(value1), Python.none()))        # False
```

这里有一个TODO项：`Python.is_type()`方法的命名有些误导，因为它不是比较类型，而是比较对象的标识。

## 更多阅读

了解更多信息，请参阅Mojo开发者社区中的[结合Python使用Mojo](https://dev.mojocn.org/d/5)。