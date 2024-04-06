# @value

You can add the `@value` decorator on a struct to generate boilerplate lifecycle methods, including the member-wise `__init__()` constructor, `__copyinit__()` copy constructor, and `__moveinit__()` move constructor.

For example, consider a simple struct like this:

```
@valuestruct MyPet:    var name: String    var age: Int
```

Mojo sees the `@value` decorator and notices that you don't have any constructors and it synthesizes them for you, the result being as if you had actually written this:

```
struct MyPet:    var name: String    var age: Int    fn __init__(inout self, owned name: String, age: Int):        self.name = name^        self.age = age    fn __copyinit__(inout self, existing: Self):        self.name = existing.name        self.age = existing.age    fn __moveinit__(inout self, owned existing: Self):        self.name = existing.name^        self.age = existing.age
```

Mojo synthesizes each lifecycle method only when it doesn't exist, so you can use `@value` and still define your own versions to override the default behavior. For example, it is fairly common to use the default member-wise and move constructor, but create a custom copy constructor.

For more information about these lifecycle methods, read [Life of a value](https://docs.modular.com/mojo/manual/lifecycle/life.html).