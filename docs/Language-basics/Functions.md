As mentioned in Language basics, Mojo supports two
types of functions: `def` and `fn` functions. You can use either declaration
with any function, including the `main()` function, but they have different
default behaviors, as described on this page.

We believe both `def` and `fn` have good use cases and don't consider either to
be better than the other. Deciding which to use is a matter personal taste as
to which style best fits a given task.

We believe Mojo's flexibility in this regard is a superpower that allows you to
write code in the manner that's best for your project.

:::note

Functions declared inside a struct are called
"methods," but they have all the same qualities as "functions" described here.

:::

## `def` functions

The `def` function provides the same dynamism and flexibility as a Python
`def` function. For example, this function works the same in Python and Mojo:


```mojo
def greet(name):
    greeting = "Hello, " + name + "!"
    return greeting
```

In Mojo, you also have the option to specify the argument type and the return
type. You can also declare variables with `var`, with or without explicit
typing.


```mojo
def greet(name: String) -> String:
    var greeting = "Hello, " + name + "!"
    return greeting
```

This way, the compiler ensures that `name` is a string, and the return type is a
string.

Here's everything to know about `def`:

- Arguments don't require a declared type.

  Undeclared arguments are actually passed as an `object`, which allows the
  function to receive any type (Mojo infers the type at runtime).

- Return types don't need to be declared and also default to `object`.

- Arguments are mutable (usually passed by value, using the `owned` [argument
  convention](/mojo/manual/values/ownership.html#argument-conventions)).

  If an argument is an `object` type, it's received as a reference, following
  [object reference
  semantics](/mojo/manual/values/value-semantics.html#python-style-reference-semantics).
  
  If an argument is any other declared type, it's received as a value (using
  the `owned` argument
  convention.

- Variables don't need to be declared using 
  `var`.

### The `object` type

If you don't declare the type for an argument or return value in a `def`, it
becomes an object, which is unlike
any other type in the standard library.

The `object` type allows for dynamic typing because it can actually represent
any type in the Mojo standard library, and the actual type is inferred at
runtime. (Actually, there's still more to do before it can represent all Mojo
types.) This is great for compatibility with Python and all of the flexibility
that it provides with dynamic types. However, this lack of type enforcement can
lead to runtime errors when a function receives or returns an unexpected type.

For compatibility with Python, `object` values are passed using [object
reference
semantics](/mojo/manual/values/value-semantics.html#python-style-reference-semantics).
As such, the `object` type is not compatible with the [argument
conventions](/mojo/manual/values/ownership.html#argument-conventions) that
enforce value semantics. So, be careful if using `object` values alongside other
strongly-typed values—their behavior might be inconsistent because `object` is 
the only type in the standard library that does not conform to [full value
semantics](/mojo/manual/values/value-semantics.html#full-value-semantics).

## `fn` functions

The `fn` function provides strict type checking and additional memory safety.
It basically forces you to write the optional things in `def`, and it ensures
that you don't accidentally mutate received arguments. For example, here's the
same function from above using `fn`:


```mojo
fn greet(name: String) -> String:
    var greeting = "Hello, " + name + "!"
    return greeting
```

As far as a function caller is concerned, `def` and `fn` functions are
interchangeable. That is, there's nothing a `def` can do that an `fn` can't
(and vice versa). The difference is that, compared to a `def` function, an `fn`
function is more strict on the inside.

Here's everything to know about `fn`:

- Arguments must specify a type (except for the
  `self` argument in [struct methods](/mojo/manual/structs.html)).

- Return values must specify a type, unless the function doesn't return a value.
  
  If you don't specify a return type, it defaults to `None` (meaning no return
  value).

- By default, arguments are received as an immutable reference (values are
  read-only, using the `borrowed` [argument
  convention](/mojo/manual/values/ownership.html#argument-conventions)).
  
  This prevents accidental mutations, and permits the use of non-copyable types
  as arguments.
  
  If you want a local copy, you can simply assign the value to a local
  variable. Or, you can get a mutable reference to the value by declaring the
  `inout` [argument
  convention](/mojo/manual/values/ownership.html#argument-conventions)).

- [Variables](/mojo/manual/variables.html) must be declared using the `var`
  keyword.

- If the function raises an exception, it must be explicitly declared with the
  `raises` keyword. (A `def` function does not need to declare exceptions.)

By enforcing these type checks, using the `fn` function helps avoid a variety
of runtime errors. It also improves performance compared to the dynamic typing
in a `def` function, because there's no overhead processing required to figure
out what data types to use at runtime—the types are fixed at compile time.

## Optional arguments

An optional argument is one that includes a default value, such as the `exp`
argument here:


```mojo
fn pow(base: Int, exp: Int = 2) -> Int:
    return base ** exp

fn use_defaults():
    # Uses the default value for `exp`
    var z = pow(3)
    print(z)
```

However, you cannot define a default value for an argument that's declared as
[`inout`](/mojo/manual/values/ownership.html#mutable-arguments-inout).

## Keyword arguments

You can also use keyword arguments when calling a function. Keyword arguments
are specified using the format <code><var>argument_name</var> =
<var>argument_value</var></code>. You can pass keyword arguments in any order:


```mojo
fn pow(base: Int, exp: Int = 2) -> Int:
    return base ** exp

fn use_keywords():
    # Uses keyword argument names (with order reversed)
    var z = pow(exp=3, base=2)
    print(z)
```

## Variadic arguments

Variadic arguments let a function accept a variable number of arguments. To
define a function that takes a variadic argument, use the variadic argument
syntax <code>*<var>argument_name</var></code>:


```mojo
fn sum(*values: Int) -> Int:
  var sum: Int = 0
  for value in values:
    sum = sum+value
  return sum
```

The variadic argument `values` here is a placeholder that accepts any number of 
passed positional arguments.

You can define zero or more arguments before the variadic argument. When calling
the function, any remaining positional arguments are assigned to the variadic
argument, so any arguments declared **after** the variadic argument can only be
specified by keyword (see 
[Positional-only and keyword-only arguments](#positional-only-and-keyword-only-arguments)).

Currently variadic arguments must be a single type—all `Int`, or all `String`,
for example. A few standard library APIs, such as
`print()`, support mixed-type, or
heterogeneous, variadic arguments, but this currently requires working with
undocumented MLIR APIs. We plan to support heterogeneous variadic arguments in
Mojo in the future.

Inside the function body, the variadic argument is available an iterable list
for ease of use. But there are some differences in handling the list depending
on whether the arguments are register-passable types (such as `Int`) or
memory-only types (such as `String`).

Register-passable types, such as `Int`, are available as a 
`VariadicList` type. As
shown in the previous example, you can iterate over the values using a `for..in`
loop.

Memory-only types, such as `String`, are available as a 
`VariadicListMem`.
Iterating over this list directly with a `for..in` loop currently produces a
`Reference for each value instead
of the value itself. You must add an empty subscript operator `[]` to
dereference the reference and retrieve the value:



```mojo
fn make_worldly(inout *strs: String):
    # Requires extra [] to dereference the reference for now.
    for i in strs:
        i[] += " world"

```


Alternately, subscripting into a `VariadicListMem` returns the argument value,
and doesn't require any dereferencing:

  ```mojo
  fn make_worldly(inout *strs: String):
      # This "just works" as you'd expect!
      for i in range(len(strs)):
          strs[i] += " world"
  ```

:::note Variadic parameters

Mojo parameters are distinct from arguments
(parameters are used for compile-time metaprogramming). However, most rules
that apply to argument lists also apply to parameter lists. Variadic parameters
are supported, but with some limitations—for details see 
variadic parameters.

:::


### Variadic keyword arguments

Mojo functions also support variadic keyword arguments (`**kwargs`). Variadic
keyword arguments allow the user to pass an arbitrary number of keyword
arguments. To define a function that takes a variadic keyword argument, use the
variadic keyword argument syntax <code>**<var>kw_argument_name</var></code>:

  ```mojo
  fn print_nicely(**kwargs: Int) raises:
    for key in kwargs.keys():
        print(key[], "=", kwargs[key[]])

   # prints:
   # `a = 7`
   # `y = 8`
  print_nicely(a=7, y=8)
  ```

  In this example, the argument name `kwargs` is a placeholder that accepts any
  number of keyword arguments. Inside the body of the function, you can access
  the arguments as a `Dict`of keywords and
  argument values.
  
  There are currently a few limitations:

  - Variadic keyword arguments are always implicitly treated as if they
    were declared with the `owned` argument 
    convention, and
    can't be declared otherwise:

    ```mojo
    # Not supported yet.
    fn borrowed_var_kwargs(borrowed **kwargs: Int): ...
    ```

  - All the variadic keyword arguments must have the same type, and this
    determines the type of the argument dictionary. For example, if the argument
    is `**kwargs: Float64` then the argument dictionary will be a 
    `Dict[String, Float64]`.

  - Functions with variadic keyword arguments can't have default values for
    keyword-only arguments. For example:

    ```mojo
    # Not allowed yet, because `b` is keyword-only with a default.
    fn not_yet(*, b: Int = 9, **kwargs: Int): ...

    # Okay, because `c` is positional-or-keyword, so it can have a default.
    fn still_works(c: Int = 5, **kwargs: Int): ...
    ```

  - Dictionary unpacking is not supported yet:

    ```mojo
    fn takes_dict(d: Dict[String, Int]):
      print_nicely(**d)  # Not supported yet.
    ```

  - Variadic keyword _parameters_ are not supported yet:

    ```mojo
    # Not supported yet.
    fn var_kwparams[**kwparams: Int](): ...
    ```

## Positional-only and keyword-only arguments

When defining a function, you can restrict some arguments so that they can only
be passed as positional arguments, or they can only be passed as keyword 
arguments.

To define positional-only arguments, add a slash character (`/`) to the
argument list. Any arguments before the `/` are positional-only: they can't be
passed as keyword arguments. For example:


```mojo
fn min(a: Int, b: Int, /) -> Int:
    return a if a < b else b
```

This `min()` function can be called with `min(1, 2)` but can't be called using
keywords, like `min(a=1, b=2)`.

There are several reasons you might want to write a function with
positional-only arguments:

- The argument names aren't meaningful for the the caller.
- You want the freedom to change the argument names later on without breaking
  backward compatibility.

For example, in the `min()` function, the argument names don't add any real
information, and there's no reason to specify arguments by keyword. 

For more information on positional-only arguments, see [PEP 570 – Python
Positional-Only Parameters](https://peps.python.org/pep-0570/).

Keyword-only arguments are the inverse of positional-only arguments: they can
only be specified by keyword. If a function accepts variadic arguments, any 
arguments defined _after_ the variadic arguments are treated as keyword-only.
For example:

```mojo
fn sort(*values: Float64, ascending: Bool = True): ...
```

In this example, the user can pass any number of `Float64` values, optionally
followed by the keyword `ascending` argument:

```mojo
var a = sort(1.1, 6.5, 4.3, ascending=False)
```

If the function doesn't accept variadic arguments, you can add a single star
(`*`) to the argument list to separate the keyword-only arguments:


```mojo
fn kw_only_args(a1: Int, a2: Int, *, double: Bool) -> Int:
    var product = a1 * a2
    if double:
        return product * 2
    else:
        return product
```

Keyword-only arguments often have default values, but this is not required. If a
keyword-only argument doesn't have a default value, it is a _required 
keyword-only argument_. It must be specified, and it must be specified by 
keyword.

For more information on keyword-only arguments, see [PEP 3102 – Keyword-Only
Arguments](https://peps.python.org/pep-3102/).

## Overloaded functions

If a `def` function does not specify argument types, then it can accept any
data type and decide how to handle each type internally. This is nice when you
want expressive APIs that just work by accepting arbitrary inputs, so there's
usually no need to write function overloads for a `def` function.

On the other hand, all `fn` functions must specify argument types, so if you
want a function to work with different data types, you need to implement
separate versions of the function that each specify different argument types.
This is called "overloading" a function.

For example, here's an overloaded `add()` function that can accept either
`Int` or `String` types:


```mojo
fn add(x: Int, y: Int) -> Int:
    return x + y

fn add(x: String, y: String) -> String:
    return x + y
```

If you pass anything other than `Int` or `String` to the `add()` function,
you'll get a compiler error. That is, unless `Int` or `String` can implicitly
cast the type into their own type. For example, `String` includes an overloaded
version of its constructor (`__init__()`) that accepts a `StringLiteral` value.
Thus, you can also pass a `StringLiteral` to a function that expects a `String`.

When resolving an overloaded function call, the Mojo compiler tries each
candidate function and uses the one that works (if only one version works), or
it picks the closest match (if it can determine a close match), or it reports
that the call is ambiguous (if it can’t figure out which one to pick).

If the compiler can't figure out which function to use, you can resolve the
ambiguity by explicitly casting your value to a supported argument type. For
example, in the following code, we want to call the overloaded `foo()`
function, but both implementations accept an argument that supports [implicit
conversion](/mojo/manual/variables.html#implicit-type-conversion) from
`StringLiteral`. So, the call to `foo(string)` is ambiguous and creates a
compiler error. We can fix it by casting the value to the type we really want:


```mojo
@value
struct MyString:
    fn __init__(inout self, string: StringLiteral):
        pass

fn foo(name: String):
    print("String")

fn foo(name: MyString):
    print("MyString")

fn call_foo():
    var string = "Hello"
    # foo(string) # This call is ambiguous because two `foo` functions match it
    foo(MyString(string))
```



When resolving an overloaded function, Mojo does not consider the return type
or other contextual information at the call site—only the argument types affect
which function is selected.

Overloading also works with combinations of both `fn` and `def` functions.
For example, you could define multiple `fn` function overloads and then one
or more `def` versions that don't specify all argument types, as a fallback.

:::note

Although we haven't discussed
[parameters](/mojo/manual/parameters/) yet (they're
different from function arguments, and used for compile-time metaprogramming),
you can also overload functions based on parameter types.

:::
