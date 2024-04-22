# @always\_inline

You can add the `@always_inline` decorator on any function to make the Mojo compiler "inline" the body of the function (copy it) directly into the body of the calling function.

This eliminates potential performance costs associated with function calls jumping to a new point in code. Normally, the compiler will do this automatically where it can improve performance, but this decorator forces it to do so. The downside is that it can increase the binary size by duplicating the function at every call site.

For example:

```
@always_inlinefn add(a: Int, b: Int) -> Int:    return a + bprint(add(1, 2))
```

Because `add()` is decorated with `@always_inline`, Mojo compiles this program without adding the `add()` function to the call stack, and it instead performs the addition directly at the `print()` call site, as if it were written like this:

```
print(1 + 2)
```

## `@always_inline("nodebug")`

You can also use the decorator with the `"nodebug"` argument, which has the same effect to inline the function, but without debug information. This means you can't step into the function when debugging, but it reduces the debug build binary size.