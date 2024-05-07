# @parameter

You can add the `@parameter` decorator on an `if` statement or on a nested function to run that code at compile time.

## Parametric if statement

You can add `@parameter` to any `if` condition that's based on a valid parameter expression (it's an expression that evaluates at compile time). This ensures that only the live branch of the `if` statement is compiled into the program, which can reduce your final binary size. For example:

```
@parameterif True:    print("this will be included in the binary")else:    print("this will be eliminated at compile time")
```

this will be included in the binary

## Parametric closure

You can add `@parameter` on a nested function to create a “parametric” capturing closure. This means you can create a closure function that captures values from the outer scope (regardless of whether they are variables or parameters), and then use that closure as a parameter. For example:

```
fn use_closure[func: fn(Int) capturing -> Int](num: Int) -> Int:    return func(num)fn create_closure():    var x = 1    @parameter    fn add(i: Int) -> Int:        return x + i    var y = use_closure[add](2)    print(y)create_closure()
```

3

Without the `@parameter` decorator, you'll get a compiler error that says you "cannot use a dynamic value in call parameter"—referring to the `use_closure[add](2)` call—because the `add()` closure would still be dynamic.

caution

This is an unsafe feature because we currently do not model the lifetimes of capture-by-reference.