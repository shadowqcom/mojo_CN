# @unroll

You can add the `@unroll` decorator on any loop (such as `for` and `while`) to make the Mojo compiler [unroll the loop](https://en.wikipedia.org/wiki/Loop_unrolling), either fully or with a given unroll factor.

For example, the compiler will unroll all 10 iterations of the following loop into 10 consecutive calls to `print()` (removing the `for` loop entirely):

```
@unrollfor i in range(10):    print(i)
```

The decorator also accepts an "unroll factor" argument, which specifies how many iterations to unroll at once. For example, the unroll above is equivalent to `@unroll(10)` because it unrolls all iterations of the loop. So if you pass a number smaller than the loop bounds, the compiler creates multiple unrolls. For example:

```
# Unroll every 2 iterations, leaving a loop with 5 iterations.@unroll(2)for i in range (10):    print(i)
```

The result is equivalent to this:

```
for i in range(0, 10, 2):    print(i)    print(i+1)
```

However, the compiler can unroll a loop only when the following statements are true:

- The loop's lower bound, upper bound, and induction step size are compile-time constants (they do not vary at runtime). For example, in the above code `range(0, 10, 2)`, `0` is the lower bound, `10` is the upper bound, and `2` is the induction step size—these could instead be defined with variable names, but the values cannot vary at runtime.
    
- Likewise, there are no early exits in the loop that make the loop count variable at runtime.
    

## Compared to `unroll()`[​](https://docs.modular.com/mojo/manual/decorators/unroll#compared-to-unroll "Direct link to compared-to-unroll")

The Mojo standard library also includes a function called [`unroll()`](https://docs.modular.com/mojo/stdlib/utils/loop/unroll) that unrolls a given function that you want to call repeatedly, but has some important differences when compared to the `@unroll` decorator:

- The `@unroll` decorator operates on loop expressions only, not on functions like the `unroll()` function does.
    
- The `@unroll` decorator determines how to unroll the loop based on the induction variable (`i`), the value of which _is not_ known when compilation begins. Whereas, the `unroll()` function calls upon your looping function (`func`) with the `Int` loop index parameter that _is_ known at compile time.
    
    This means two things:
    
    - Within a loop using the `@unroll` decorator, the `i` induction variable is still a runtime variable, so you _cannot_ use it as a parameter value (such as for `SIMD[Int8, i]`). Whereas, within the `func` callback used with the `unroll()` function, the `Int` loop index is known at compile time, so you _can_ use it as a parameter value.
        
    - The `unroll()` function unrolls at the beginning of compilation, which might explode the program size that still needs to be compiled, depending on the amount of code that's unrolled. Whereas, the `@unroll` decorator performs unrolling later in the compilation, after the compiler is able to evaluate the induction variable (`i`), which avoids early explosion of the program size that still needs compilation.