# debug\_assert

Implements a debug assert.

These are Mojo built-ins, so you don't need to import them.

## `debug_assert`[​](https://docs.modular.com/mojo/stdlib/builtin/debug_assert#debug_assert "Direct link to debug_assert")

`debug_assert(cond: Bool, msg: StringLiteral)`

Asserts that the condition is true.

The `debug_assert` is similar to `assert` in C++. It is a no-op in release builds unless MOJO\_ENABLE\_ASSERTIONS is defined.

Right now, users of the mojo-sdk must explicitly specify `-D MOJO_ENABLE_ASSERTIONS` to enable assertions. It is not sufficient to compile programs with `-debug-level full` for enabling assertions in the library.

**Args:**

- ​**cond** (`Bool`): The bool value to assert.
- ​**msg** (`StringLiteral`): The message to display on failure.

`debug_assert[boolable: Boolable](cond: boolable, msg: StringLiteral)`

Asserts that the condition is true.

The `debug_assert` is similar to `assert` in C++. It is a no-op in release builds unless MOJO\_ENABLE\_ASSERTIONS is defined.

Right now, users of the mojo-sdk must explicitly specify `-D MOJO_ENABLE_ASSERTIONS` to enable assertions. It is not sufficient to compile programs with `-debug-level full` for enabling assertions in the library.

**Parameters:**

- ​**boolable** (`Boolable`): The trait of the conditional.

**Args:**

- ​**cond** (`boolable`): The bool value to assert.
- ​**msg** (`StringLiteral`): The message to display on failure.