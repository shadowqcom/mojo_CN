# Testing

The Mojo CLI has a built-in test runner that can be used to test Mojo programs. The `mojo test` command recursively searches the `test` directory for any files with `test` in the filename. For example, given the following directory structure:

```
test/  
    test_users_controller.mojo  
    factories.mojo  
    models/    
        user_model_tests.mojo
```

The `mojo` CLI will search `test_users_controller.mojo` and `user_model_tests.mojo` for tests, but not `factories.mojo`.

## Test functions

Test functions must be named `test_*` and take no arguments. Use `def` notation rather than `fn` notation. By definition, every test function should be capable of raising an error. So:

```mojo
from testing import assert_equal

def test_foo():    
    assert_equal(1, 1)
```

Not:

```mojo
fn test_foo() raises:    
    assert_equal(1, 1)
```

The testing module defines a set of test-related utilities.

<span style=color:#fff0>&#77;&#111;&#106;&#111;&#20013;&#25991;&#32593;&#65306;&#109;&#111;&#106;&#111;&#99;&#110;&#46;&#111;&#114;&#103;&#10;&#77;&#111;&#106;&#111;&#32;&#68;&#101;&#118;&#31038;&#21306;&#65306;&#109;&#111;&#106;&#111;&#111;&#46;&#111;&#114;&#103;</span>