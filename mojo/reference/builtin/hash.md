# hash

Implements the `Hashable` trait and `hash()` built-in function.

There are a few main tools in this module:

- `Hashable` trait for types implementing `__hash__(self) -> Int`
- `hash[T: Hashable](hashable: T) -> Int` built-in function.
- A `hash()` implementation for abritrary byte strings, `hash(data: DTypePointer[DType.int8], n: Int) -> Int`, is the workhorse function, which implements efficient hashing via SIMD vectors. See the documentation of this function for more details on the hash implementation.
- `hash(SIMD)` and `hash(Int8)` implementations These are useful helpers to specialize for the general bytes implementation.

## `Hashable`[​](https://docs.modular.com/mojo/stdlib/builtin/hash#hashable "Direct link to hashable")

A trait for types which specify a function to hash their data.

This hash function will be used for applications like hash maps, and don't need to be cryptographically secure. A good hash function will hash similar / common types to different values, and in particular the _low order bits_ of the hash, which are used in smaller dictionaries, should be sensitive to any changes in the data structure. If your type's hash function doesn't meet this criteria it will get poor performance in common hash map implementations.

```
@valuestruct Foo(Hashable):    fn __hash__(self) -> Int:        return 4  # chosen by fair random dice rollvar foo = Foo()print(hash(foo))
```

**Implemented traits:**

`AnyType`

**Methods:**

### `__del__`[​](https://docs.modular.com/mojo/stdlib/builtin/hash#__del__ "Direct link to __del__")

`__del__(owned self: T, /)`

Destroy the contained value.

The destructor receives an owned value and is expected to perform any actions needed to end the lifetime of the object. In the simplest case, this is nothing, and the language treats the object as being dead at the end of this function.

### `__hash__`[​](https://docs.modular.com/mojo/stdlib/builtin/hash#__hash__ "Direct link to __hash__")

`__hash__(self: T) -> Int`

Return a 64-bit hash of the type's data.

## `hash`[​](https://docs.modular.com/mojo/stdlib/builtin/hash#hash "Direct link to hash")

`hash[T: Hashable](hashable: T) -> Int`

Hash a Hashable type using its underlying hash implementation.

**Parameters:**

- ​**T** (`Hashable`): Any Hashable type.

**Args:**

- ​**hashable** (`T`): The input data to hash.

**Returns:**

A 64-bit integer hash based on the underlying implementation.

`hash(bytes: DTypePointer[si8, 0], n: Int) -> Int`

Hash a byte array using a SIMD-modified DJBX33A hash algorithm.

The DJBX33A algorithm is commonly used for data structures that rely on well-distributed hashing for performance. The low order bits of the result depend on each byte in the input, meaning that single-byte changes will result in a changed hash even when masking out most bits eg. for small dictionaries.

_This hash function is not suitable for cryptographic purposes._ The algorithm is easy to reverse and produce deliberate hash collisions. We _do_ however initialize a random hash secret which is mixed into the final hash output. This can help prevent DDOS attacks on applications which make use of this function for dictionary hashing. As a consequence, hash values are deterministic within an individual runtime instance ie. a value will always hash to the same thing, but in between runs this value will change based on the hash secret.

Standard DJBX33A is:

- Set _hash_ = 5361
- For each byte: _hash_ = 33 \* _hash_ + _byte_

Instead, for all bytes except trailing bytes that don't align to the max SIMD vector width, we:

- Interpret those bytes as a SIMD vector.
- Apply a vectorized hash: _v_ = 33 \* _v_ + _bytes\_as\_simd\_value_
- Call [`reduce_add()`](https://docs.modular.com/mojo/stdlib/builtin/simd.html#reduce_add) on the final result to get a single hash value.
- Use this value in fallback for the remaining suffix bytes with standard DJBX33A.

Python uses DJBX33A with a hash secret for smaller strings, and then the SipHash algorithm for longer strings. The arguments and tradeoffs are well documented in PEP 456. We should consider this and deeper performance/security tradeoffs as Mojo evolves.

References:

- [Wikipedia: Non-cryptographic hash function](https://en.wikipedia.org/wiki/Non-cryptographic_hash_function)
- [Python PEP 456](https://peps.python.org/pep-0456/)
- [PHP Hash algorithm and collisions](https://www.phpinternalsbook.com/php5/hashtables/hash_algorithm.html)

```
from random import randvar n = 64var rand_bytes = DTypePointer[DType.int8].alloc(n)rand(rand_bytes, n)hash(rand_bytes, n)
```

**Args:**

- ​**bytes** (`DTypePointer[si8, 0]`): The byte array to hash.
- ​**n** (`Int`): The length of the byte array.

**Returns:**

A 64-bit integer hash. This hash is _not_ suitable for cryptographic purposes, but will have good low-bit hash collision statistical properties for common data structures.