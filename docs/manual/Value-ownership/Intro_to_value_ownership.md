A program is nothing without data, and all modern programming languages store
data in one of two places: the call stack and the heap (also sometimes in CPU
registers, but we won't get into that here). However, each language reads and
writes data a bit differently—sometimes very differently. So in the following
sections, we'll explain how Mojo manages memory in your programs and how this
affects the way you write Mojo code.

## Stack and heap overview

In general, all programming languages use a call stack the same way: When a
function is called, the compiler allocates a block of memory on the stack that
is exactly the size required to store the execution logic and _fixed-size_
local values. When another function is called, its data is likewise added to
the top of the stack. When a function is done, all its data in the stack is
destroyed so that memory becomes available for other code.

Notice that we said only "_fixed-size_ local values" are stored in the stack.
Dynamically-sized values that can change in size at runtime are instead
stored in the heap, which is a much larger region of memory that allows for
dynamic memory access at runtime. Technically, a local variable for such a value
is still stored in the call stack, but its value is a fixed-size pointer to the
real value on the heap.

Additionally, values that need to outlive the lifetime of a function (such as
an array that's passed between functions and should not be copied) are stored
in the heap, because heap memory is accessible from anywhere in the call stack,
even after the function that created it is removed from the stack. This sort of
situation—in which a heap-allocated value is used by multiple functions—is where
most memory errors occur, and it's where memory management strategies vary the
most between programming languages.

## Memory management strategies

Because memory is limited, it's important that programs remove unused data from
the heap ("free" the memory) as quickly as possible. Figuring out when to free
that memory is pretty complicated.

Some programming languages try to hide the complexities of memory management
from you by utilizing a "garbage collector" process that tracks all memory
usage and deallocates unused heap memory periodically (also known as automatic
memory management). A significant benefit of this method is that it relieves
developers from the burden of manual memory management, generally avoiding more
errors and making developers more productive. However, it incurs a performance
cost because the garbage collector interrupts the program's execution, and it
might not reclaim memory very quickly.

Other languages require that you manually free data that's allocated on the
heap. When done properly, this makes programs execute quickly, because there's
no processing time consumed by a garbage collector. However, the challenge with
this approach is that programmers make mistakes, especially when multiple parts
of the program need access to the same memory—it becomes difficult to know
which part of the program "owns" the data and must deallocate it. Programmers
might accidentally deallocate data before the program is done with it (causing
"use-after-free" errors), or they might deallocate it twice ("double free"
errors), or they might never deallocate it ("leaked memory" errors). Mistakes
like these and others can have catastrophic results for the program, and these
bugs are often hard to track down, making it especially important that they
don't occur in the first place.

Mojo uses a third approach called "ownership" that relies on a collection of
rules that programmers must follow when passing values. The rules ensure there
is only one "owner" for each chunk of memory at a time, and that the memory is
deallocated accordingly. In this way, Mojo automatically allocates and
deallocates heap memory for you, but it does so in a way that's deterministic
and safe from errors such as use-after-free, double-free and memory leaks. Plus,
it does so with a very low performance overhead.

Mojo's value ownership model provides an excellent balance of programming
productivity and strong memory safety. It only requires that you learn some new
syntax and a few rules about how to share access to memory within your program.

But before we explain the rules and syntax for Mojo's value ownership model,
you first need to understand value
semantics.
