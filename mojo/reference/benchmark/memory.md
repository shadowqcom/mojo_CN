# memory

## `clobber_memory`[​](https://docs.modular.com/mojo/stdlib/benchmark/memory#clobber_memory "Direct link to clobber_memory")

`clobber_memory()`

Forces all pending memory writes to be flushed to memory.

This ensures that the compiler does not optimize away memory writes if it deems them to be not neccessary. In effect, this operation acts a barrier to memory reads and writes.