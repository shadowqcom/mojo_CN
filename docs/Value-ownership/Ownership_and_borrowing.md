A challenge you might face when using some programming languages is that you
must manually allocate and deallocate memory. When multiple parts of the
program need access to the same memory, it becomes difficult to keep track of
who "owns" a value and determine when is the right time to deallocate it. If
you make a mistake, it can result in a "use-after-free" error, a "double free"
error, or a "leaked memory" error, any one of which can be catastrophic.

Mojo helps avoid these errors by ensuring there is only one variable that owns
each value at a time, while still allowing you to share references with other
functions. When the lifetime of the owner ends, Mojo [destroys the
value](/mojo/manual/lifecycle/death.html).

On this page, we'll explain the rules that govern this ownership model and how
to specify different argument conventions that define how values are shared into
functions.

## Argument conventions

In all programming languages, code quality and performance is heavily dependent
upon how functions treat argument values. That is, whether a value received by
a function is a unique value or a reference, and whether it's mutable or
immutable, has a series of consequences that define the readability,
performance, and safety of the language.

In Mojo, we want to provide full [value
semantics](/mojo/manual/values/value-semantics.html) by default, which provides
consistent and predictable behavior. But as a systems programming language, we
also need to offer full control over memory optimizations, which generally
requires reference semantics. The trick is to introduce reference semantics in
a way that ensures all code is memory safe by tracking the lifetime of every
value and destroying each one at the right time (and only once). All of this is
made possible in Mojo through the use of argument conventions that ensure every
value has only one owner at a time.

An argument convention specifies whether an argument is mutable or immutable,
and whether the function owns the value. Each convention is defined by a
keyword at the beginning of an argument declaration:

- `borrowed`: The function receives an **immutable reference**. This means the
  function can read the original value (it is *not* a copy), but it cannot
  mutate (modify) it.
  
- `inout`: The function receives a **mutable reference**. This means the
  function can read and mutate the original value (it is *not* a copy).
  
- `owned`: The function takes **ownership**. This means the function has
  exclusive mutable access to the argument—the function caller does not have
  access to this value (anymore). Often, this also implies that the caller
  should transfer ownership to this function, but that's not always what
  happens and this might instead be a copy (as you'll learn below).

For example, this function has one argument that's a mutable
reference and one that's immutable:


```mojo
fn add(inout x: Int, borrowed y: Int):
    x += y

fn main():
    var a = 1
    var b = 2
    add(a, b)
    print(a)  # Prints 3
```

You've probably already seen some function arguments that don't declare a
convention. That's because every argument has a default convention, depending
on whether the function is declared with `fn` or `def`:

- All values passed into a Mojo [`def`
  function](/mojo/manual/functions.html#def-functions) are `owned`,
  by default. 

- All values passed into a Mojo [`fn`
  function](/mojo/manual/functions.html#fn-functions) are `borrowed`,
  by default.

In the following sections, we'll explain each of these argument conventions in
more detail.

## Ownership summary

The fundamental rules that make Mojo's ownership model work are the following:

- Every value has only one owner at a time.
- When the lifetime of the owner ends, Mojo destroys the value.

The "borrow checker" is a process in the Mojo compiler that ensures there is
only one owner for each value at any time. It also enforces some other
memory-safety rules:

- You cannot create multiple mutable references (`inout`) for the same value.
  (Multiple immutable references (`borrowed`) are okay.)

- You cannot create a mutable reference (`inout`) if there exists an
  immutable reference (`borrowed`) for the same value. (TODO: Not currently
  implemented.)

Because Mojo does not allow a mutable reference to overlap with another mutable
or immutable reference, it provides a predictable programming model about which
references are and aren't valid (an invalid reference is one who's lifetime has
ended, perhaps because the value ownership was transferred). Importantly, this
logic allows Mojo to immediately [destroy
values](/mojo/manual/lifecycle/death.html) when their lifetime ends.

## Immutable arguments (`borrowed`)

If you'd like your function to receive an **immutable reference**, add the
`borrowed` keyword in front of the argument name.

The `borrowed` convention is the default for all arguments in an `fn` function,
but you can still specify it to be explicit. It also works on `def` functions,
which otherwise receive arguments by value, which might not be desirable, such
as when the type is expensive to copy (or not copyable at all) and you just
need to read it. For example:


```mojo
from tensor import Tensor, TensorShape

def print_shape(borrowed tensor: Tensor[DType.float32]):
    shape = tensor.shape()
    print(shape.__str__())

var tensor = Tensor[DType.float32](256, 256)
print_shape(tensor)
```

    256x256
    

In general, passing an immutable reference is much more efficient when handling
large or expensive-to-copy values, because the copy constructor and destructor
are not invoked for a borrow.

### Compared to C++ and Rust

Mojo's borrowed argument convention is similar in some ways to passing an
argument by `const&` in C++, which also avoids a copy of the value and disables
mutability in the callee. However, the borrowed convention differs from
`const&` in C++ in two important ways:

- The Mojo compiler implements a borrow checker (similar to Rust) that prevents
code from dynamically forming mutable references to a value when there are
immutable references outstanding, and it prevents multiple mutable references
to the same value.

- Small values like `Int`, `Float`, and `SIMD` are passed directly in machine
registers instead of through an extra indirection (this is because they are
declared with the `@register_passable` decorator). This is a [significant
performance
enhancement](https://www.forrestthewoods.com/blog/should-small-rust-structs-be-passed-by-copy-or-by-borrow/)
when compared to languages like C++ and Rust, and moves this optimization from
every call site to a declaration on the type definition.

Similar to Rust, Mojo's borrow checker enforces the exclusivity of invariants.
The major difference between Rust and Mojo is that Mojo does not require a
sigil on the caller side to pass by borrow. Also, Mojo is more efficient when
passing small values, and Rust defaults to moving values instead of passing
them around by borrow. These policy and syntax decisions allow Mojo to provide
an easier-to-use programming model.

## Mutable arguments (`inout`)

If you'd like your function to receive a **mutable reference**, add the `inout`
keyword in front of the argument name. You can think of `inout` like this: it
means any changes to the value *in*side the function are visible *out*side the
function.

For example, this `mutate()` function updates the original `x` value:


```mojo
def mutate(inout y: Int):
    y += 1

var x = 1
mutate(x)
print(x)
```

    2
    

That behaves like an optimized shorthand for this:


```mojo
def mutate_copy(y: Int) -> Int:
    y += 1
    return y

var x = 1
x = mutate_copy(x)
print(x)
```

    2
    

Although the code using `inout` isn't that much shorter, it's more memory
efficient because it does not make a copy of the value.

However, remember that the values passed as `inout` must already be mutable.
For example, if you try to take a `borrowed` value and pass it to another
function as `inout`, you'll get a compiler error because Mojo can't form a
mutable reference from an immutable reference.

:::note

Notice that we don't call this argument passing "by reference."
Although the `inout` convention is conceptually the same, we don't call it
by-reference passing because the implementation may actually pass values using
pointers.

:::

:::note

You cannot define [default
values](/mojo/manual/functions.html#optional-arguments) for `inout`
arguments.

:::

## Transfer arguments (`owned` and `^`)

And finally, if you'd like your function to receive value **ownership**, add the
`owned` keyword in front of the argument name.

This convention is usually combined with use of the postfixed `^` "transfer"
operator on the variable that is passed into the function, which ends the
lifetime of that variable.

Technically, the `owned` keyword does not guarantee that the received value is
a mutable reference to _the original value_—it guarantees only that the function
gets unique ownership of this particular value (enforcing [value
semantics](/mojo/manual/values/value-semantics.html)). This happens in one of
two ways:

- The caller passes the argument with the `^` transfer operator, which ends the
lifetime of that variable (the variable becomes invalid) and ownership is
transferred into the function without making a copy of any heap-allocated data.

- The caller **does not** use the `^` transfer operator, in which case, the
value is copied into the function argument and the original variable remains
valid (unless it is not used again, in which case the compiler destroys the
variable anyway because its lifetime naturally ends there).

Regardless, when the function declares an argument as `owned`, it can be certain
that it has unique mutable access to that value. 

For example, the following code works by making a copy of the string,
because—although `take_text()` uses the `owned` convention—the caller does not
include the transfer operator:


```mojo
fn take_text(owned text: String):
    text += "!"
    print(text)

fn my_function():
    var message: String = "Hello"
    take_text(message)
    print(message)

my_function()
```

    Hello!
    Hello
    

However, if you add the `^` transfer operator when calling `take_text()`, the
compiler complains about `print(message)`, because at that point, the `message`
variable is no longer initialized. That is, this version does not compile:

```mojo
fn my_function():
    var message: String = "Hello"
    take_text(message^)  
    print(message)  # ERROR: The `message` variable is uninitialized
```

This is a critical feature of Mojo's borrow checker, because it ensures that no
two variables can have ownership of the same value. To fix the error, you must
not use the `message` variable after you end its lifetime with the `^` transfer
operator. So here is the corrected code:


```mojo

fn my_function():
    var message: String = "Hello"
    take_text(message^)

my_function()
```

    Hello!
    

:::note

Value lifetimes are not fully implemented for top-level code in
Mojo's REPL, so the transfer operator currently works as intended only when
used inside a function.

:::

### Transfer implementation details

In Mojo, it's important that you not conflate "ownership transfer" with a "move
operation"—these are not strictly the same thing. 

There are multiple ways that Mojo can transfer ownership of a value without
making a copy:

- If a type implements the [move
  constructor](/mojo/manual/lifecycle/life.html#consuming-move-constructor),
  `__moveinit__()`, Mojo may invoke this method _if_ a value of that type is
  transferred into a function as an `owned` argument, _and_ the original value's
  lifetime ends at the same point (with or without use of the `^` transfer
  operator).

- If a type hasn't implemented `__moveinit__()` Mojo may transfer ownership by
  simply passing the recipient a reference to the value in the caller's stack.

In order for the `owned` convention to work _without_ the transfer
operator, the value type must be copyable (via `__copyinit__()`).

## Comparing `def` and `fn` argument conventions

As mentioned in the section about
[functions](/mojo/manual/functions.html), the `def` and `fn` functions
are interchangeable, as far as a caller is concerned, and they can both
accomplish the same things. It's only the inside that differs, and Mojo's `def`
function is essentially just sugaring for the `fn` function:

- A `def` argument without a type annotation defaults to
  [`object`](/mojo/stdlib/builtin/object#object) type (whereas as `fn`
  requires all types be explicitly declared).

- A `def` argument without a convention keyword (`borrowed`, `inout`, or
  `owned`) defaults to `owned` (it receives a copy with a mutable variable).

For example, these two functions have the exact same behavior:


```mojo
def example(borrowed a: Int, inout b: Int, c):
    pass

fn example(a: Int, inout b: Int, owned c: object):
    pass
```

Or, instead of specifying `owned` for the `c` argument, you can get the same
effect by manually making a copy when you need it:


```mojo
fn example(a: Int, inout b: Int, c_in: object):
    var c = c_in
    pass
```

This shadow copy typically adds no overhead, because references for small types
like `object` are cheap to copy. The expensive part is adjusting the reference
count, but that's also eliminated by a compiler optimization.
