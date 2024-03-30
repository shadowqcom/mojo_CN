A variable is a name that holds a value or object. All variables in Mojo are mutable—their value can be changed. (If you want to define a constant value that can't change at runtime, see the 
`alias` keyword.)



Mojo formerly supported the `let` keyword for declaring immutable variables.
This has been removed to simplify the language, and for other reasons
[discussed
elsewhere](https://github.com/modularml/mojo/blob/main/proposals/remove-let-decls.md).
To simplify the migration of older code, `let` declarations are currently
supported, but function the same as `var` declarations.



## Undeclared variables

Within a `def` function or a REPL environment, you can create a variable with
just a name and a value. For example:


```python
name = "Sam"
```

A variable declared without `var` follows s.




Undeclared variables are not allowed in an `fn` function or as a struct
field.



## Declared variables

You can declare a variable with the `var` keyword. For example:


```python
var name = "Sam"
var user_id: Int
```

The `name` variable is initialized to the string "Sam". The `user_id` variable is uninitialized, but it has a declared type, `Int` for an integer value. All
declared values are typed—either explicitly with a 
type annotation or implicitly when they're initialized with a value.

Since declared variables are strongly typed, you can't assign a variable a
value of a different type, unless those types can be 
implicitly converted. For example, this code will not compile:

```python
var user_id: Int = "Sam"
```

In addition to typing, declared variables also follow 
lexical scoping, unlike undeclared variables.

Finally, using `var` helps prevent runtime errors caused by typos. For example,
if you misspell the name of an undeclared variable,
Mojo simply instantiates a new variable using the misspelled name. But when all
mutable variables must be first declared with `var` (which is the case inside
an `fn` function), then misspellings such as the following are caught by the
compiler:

```python
var name = "Sam"
# Somewhere later...
nane = "Sammy"  # This is not allowed in an `fn` function
```

Although you can use `var` in a `def` function, this benefit is
realized only when used inside an `fn` function, where the Mojo compiler will
flag undeclared variables (such as the above `nane`) as unknown declarations.




When using Mojo in a REPL environment, top-level variables (variables
outside a function or struct) do not require `var` declarations.



## Type annotations

Although Mojo supports dynamic variable types (it can infer a value type at
runtime), it also supports static type annotations on variables. This enables
strong compile-time type checking for variables, which can make your code more
predictable, manageable, and secure (especially when combined with type
checking in `fn` functions).

To specify the type for a variable, add a colon followed by the type name:


```python
var name: String = "Sam"
```

This way, `name` can never be assigned a value that's not a string (or that
cannot be implicitly converted to a string).



You must declare a variable with `var` to use type annotations.



If a type has a constructor with just one argument, you can initialize it in
two ways:


```python
var name1: String = "Sam"
var name2 = String("Sam")
```

Both of these lines invoke the same constructor to create a `String` from a
`StringLiteral`.

### Late initialization

Using type annotations allows for late initialization. For example, notice here
that the `z` variable is first declared with just a type, and the value is
assigned later:


```python
fn my_function(x: Int):
    var z: Float32
    if x != 0:
        z = 1.0
    else:
        z = foo()
    print(z)

fn foo() -> Float32:
    return 3.14
```



Late initialization works only if the variable is declared with a
type.



### Implicit type conversion

Some types include built-in type conversion (type casting) from one type into
its own type. For example, if you assign a number to a `String`, it creates the
string `"1"` instead of a compiler error:


```python
var number: String = 1
```

As shown above, value assignment can be converted into a constructor call if the 
target type has a constructor that takes a single argument that matches the
value being assigned. So, this code uses the 
`String` constructor that takes an
integer: `__init__(inout self, num: Int)`.

Implicit conversion follows the logic of overloaded
functions, because
that's exactly what's happening here: assigning a number to a `String` variable
is exactly the same as this:


```python
var number = String(1)
```

Thus, if you call a function that requires an argument of a certain type (such
as `String`), you can pass in any value as long as that value type can
implicitly convert to the required type (using one of the type's overloaded
constructors).

For example, you can pass an `Int` to a function that expects a `String`,
because `String` includes a constructor that takes an `Int`:


```python
fn take_string(version: String):
    print(version)

fn pass_integer():
    var version: Int = 1
    take_string(version)
```

For more details on implicit conversion, see 
Constructors and implicit 
conversion.

## Variable scopes

Variables declared with `var` are bound by *lexical scoping*. This
means that nested code blocks can read and modify variables defined in an
outer scope. But an outer scope **cannot** read variables defined in an
inner scope at all.

For example, the `if` code block shown here creates an inner scope where outer
variables are accessible to read/write, but any new variables do not live
beyond the scope of the `if` block:


```python
def lexical_scopes():
    var num = 10
    var dig = 1
    if True:
        print("num:", num)  # Reads the outer-scope "num"
        var num = 20        # Creates new inner-scope "num"
        print("num:", num)  # Reads the inner-scope "num"
        dig = 2             # Edits the outer-scope "dig"
    print("num:", num)      # Reads the outer-scope "num"
    print("dig:", dig)      # Reads the outer-scope "dig"

lexical_scopes()
```

    num: 10
    num: 20
    num: 10
    dig: 2
    

Note that the `var` statement inside the `if` creates a **new** variable with the same name as the outer variable. This prevents the inner loop from accessing the outer `num` variable. (This is called "variable shadowing," where the inner scope variable hides or "shadows" a variable from an outer scope.)

The lifetime of the inner `num` ends exactly where the `if` code block ends,
because that's the scope in which the variable was defined.

This is in contrast to undeclared variables (those without the `var`
keyword), which use **function-level scoping** (consistent with Python variable
behavior). That means, when you change the value of an undeclared variable
inside the `if` block, it actually changes the value for the entire function.

For example, here's the same code but *without* the `var` declarations:


```python
def function_scopes():
    num = 1
    if num == 1:
        print(num)   # Reads the function-scope "num"
        num = 2      # Updates the function-scope variable
        print(num)   # Reads the function-scope "num"
    print(num)       # Reads the function-scope "num"

function_scopes()
```

    1
    2
    2
    

Now, the last `print()` function sees the updated `num` value from the inner
scope, because undeclared variables (Python-style variables) use function-level
scope (instead of lexical scope).
