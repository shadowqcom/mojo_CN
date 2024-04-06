# testing

Implements various testing utils.

You can import these APIs from the `testing` package. For example:

```
from testing import assert_true
```

## `assert_raises`[​](https://docs.modular.com/mojo/stdlib/testing/testing#assert_raises "Direct link to assert_raises")

Context manager that asserts that the block raises an exception.

You can use this to test expected error cases, and to test that the correct errors are raised. For instance:

```
from testing import assert_raises# Good! Caught the raised error, test passeswith assert_raises():    raise "SomeError"# Also good!with assert_raises(contains="Some"):    raise "SomeError"# This will assert, we didn't raisewith assert_raises():    pass# This will let the underlying error propagate, failing the testwith assert_raises(contains="Some"):    raise "OtherError"
```

**Fields:**

- ​**message\_contains** (`Optional[String]`): If present, check that the error message contains this literal string.

**Implemented traits:**

`AnyType`

**Methods:**

### `__init__`[​](https://docs.modular.com/mojo/stdlib/testing/testing#__init__ "Direct link to __init__")

`__init__(inout self: Self)`

Construct a context manager with no message pattern.

`__init__(inout self: Self, *, contains: String)`

Construct a context manager matching specific errors.

**Args:**

- ​**contains** (`String`): The test will only pass if the error message includes the literal text passed.

### `__enter__`[​](https://docs.modular.com/mojo/stdlib/testing/testing#__enter__ "Direct link to __enter__")

`__enter__(self: Self)`

Enter the context manager.

### `__exit__`[​](https://docs.modular.com/mojo/stdlib/testing/testing#__exit__ "Direct link to __exit__")

`__exit__(self: Self)`

Exit the context manager with no error.

Raises: AssertionError: Always. The block must raise to pass the test.

`__exit__(self: Self, error: Error) -> Bool`

Exit the context manager with an error.

Raises: Error: If the error raised doesn't match the expected error to raise.

## `assert_true`[​](https://docs.modular.com/mojo/stdlib/testing/testing#assert_true "Direct link to assert_true")

`assert_true[T: Boolable](val: T, msg: String)`

Asserts that the input value is True. If it is not then an Error is raised.

Raises: An Error with the provided message if assert fails and `None` otherwise.

**Parameters:**

- ​**T** (`Boolable`): A Boolable type.

**Args:**

- ​**val** (`T`): The value to assert to be True.
- ​**msg** (`String`): The message to be printed if the assertion fails.

## `assert_false`[​](https://docs.modular.com/mojo/stdlib/testing/testing#assert_false "Direct link to assert_false")

`assert_false[T: Boolable](val: T, msg: String)`

Asserts that the input value is False. If it is not then an Error is raised.

Raises: An Error with the provided message if assert fails and `None` otherwise.

**Parameters:**

- ​**T** (`Boolable`): A Boolable type.

**Args:**

- ​**val** (`T`): The value to assert to be False.
- ​**msg** (`String`): The message to be printed if the assertion fails.

## `assert_equal`[​](https://docs.modular.com/mojo/stdlib/testing/testing#assert_equal "Direct link to assert_equal")

`assert_equal(lhs: Int, rhs: Int, msg: String)`

Asserts that the input values are equal. If it is not then an Error is raised.

Raises: An Error with the provided message if assert fails and `None` otherwise.

**Args:**

- ​**lhs** (`Int`): The lhs of the equality.
- ​**rhs** (`Int`): The rhs of the equality.
- ​**msg** (`String`): The message to be printed if the assertion fails.

`assert_equal(lhs: String, rhs: String, msg: String)`

Asserts that the input values are equal. If it is not then an Error is raised.

Raises: An Error with the provided message if assert fails and `None` otherwise.

**Args:**

- ​**lhs** (`String`): The lhs of the equality.
- ​**rhs** (`String`): The rhs of the equality.
- ​**msg** (`String`): The message to be printed if the assertion fails.

`assert_equal[type: DType, size: Int](lhs: SIMD[type, size], rhs: SIMD[type, size], msg: String)`

Asserts that the input values are equal. If it is not then an Error is raised.

Raises: An Error with the provided message if assert fails and `None` otherwise.

**Parameters:**

- ​**type** (`DType`): The dtype of the left- and right-hand-side SIMD vectors.
- ​**size** (`Int`): The width of the left- and right-hand-side SIMD vectors.

**Args:**

- ​**lhs** (`SIMD[type, size]`): The lhs of the equality.
- ​**rhs** (`SIMD[type, size]`): The rhs of the equality.
- ​**msg** (`String`): The message to be printed if the assertion fails.

## `assert_not_equal`[​](https://docs.modular.com/mojo/stdlib/testing/testing#assert_not_equal "Direct link to assert_not_equal")

`assert_not_equal(lhs: Int, rhs: Int, msg: String)`

Asserts that the input values are not equal. If it is not then an Error is raised.

Raises: An Error with the provided message if assert fails and `None` otherwise.

**Args:**

- ​**lhs** (`Int`): The lhs of the inequality.
- ​**rhs** (`Int`): The rhs of the inequality.
- ​**msg** (`String`): The message to be printed if the assertion fails.

`assert_not_equal(lhs: String, rhs: String, msg: String)`

Asserts that the input values are not equal. If it is not then an an Error is raised.

Raises: An Error with the provided message if assert fails and `None` otherwise.

**Args:**

- ​**lhs** (`String`): The lhs of the inequality.
- ​**rhs** (`String`): The rhs of the inequality.
- ​**msg** (`String`): The message to be printed if the assertion fails.

`assert_not_equal[type: DType, size: Int](lhs: SIMD[type, size], rhs: SIMD[type, size], msg: String)`

Asserts that the input values are not equal. If it is not then an Error is raised.

Raises: An Error with the provided message if assert fails and `None` otherwise.

**Parameters:**

- ​**type** (`DType`): The dtype of the left- and right-hand-side SIMD vectors.
- ​**size** (`Int`): The width of the left- and right-hand-side SIMD vectors.

**Args:**

- ​**lhs** (`SIMD[type, size]`): The lhs of the inequality.
- ​**rhs** (`SIMD[type, size]`): The rhs of the inequality.
- ​**msg** (`String`): The message to be printed if the assertion fails.

## `assert_almost_equal`[​](https://docs.modular.com/mojo/stdlib/testing/testing#assert_almost_equal "Direct link to assert_almost_equal")

`assert_almost_equal[type: DType, size: Int](lhs: SIMD[type, size], rhs: SIMD[type, size], /, *, msg: String, atol: SIMD[type, 1], rtol: SIMD[type, 1])`

Asserts that the input values are equal up to a tolerance. If it is not then an Error is raised.

Raises: An Error with the provided message if assert fails and `None` otherwise.

**Parameters:**

- ​**type** (`DType`): The dtype of the left- and right-hand-side SIMD vectors.
- ​**size** (`Int`): The width of the left- and right-hand-side SIMD vectors.

**Args:**

- ​**lhs** (`SIMD[type, size]`): The lhs of the equality.
- ​**rhs** (`SIMD[type, size]`): The rhs of the equality.
- ​**msg** (`String`): The message to print.
- ​**atol** (`SIMD[type, 1]`): The \_absolute tolerance.
- ​**rtol** (`SIMD[type, 1]`): The relative tolerance.