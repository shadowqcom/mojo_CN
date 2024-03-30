# Helllo,world!
## Before you start

Before you start, make sure the `MODULAR_HOME` and `PATH` environment variables
are set, as described in the install procedure, so you can run the `mojo`
command:

```python
mojo --version
```

If you have other issues during install, check our known
issues.

## 1. Run code in the REPL

First, let's use the Mojo
REPL,
which allows you to write and run Mojo code in a command prompt:

1. To start a REPL session, type `mojo` in your terminal and press
   <kbd>Enter</kbd>.

2. Then type `print("Hello, world!")` and press <kbd>Enter</kbd> twice
(a blank line is required to indicate the end of an expression).

That's it! For example:

```python
$ mojo
Welcome to Mojo! 🔥

Expressions are delimited by a blank line.
Type `:quit` to exit the REPL and `:mojo help repl` for further assistance.

1> print("Hello, world!")
2.
Hello, world!
```

You can write as much code as you want in the REPL. You can press
<kbd>Enter</kbd> to start a new line and continue writing code, and when you
want Mojo to evaluate the code, press <kbd>Enter</kbd> twice. If there's
something to print, Mojo prints it and then returns the prompt to you.

The REPL is primarily useful for short experiments because the code isn't
saved. So when you want to write a real program, you need to write the code in
a `.mojo` source file.

## 2. Run a Mojo file

Now let's write the code in a Mojo source file and run it with the
`mojo` command:

1. Create a file named `hello.mojo` (or `hello.🔥`) and add the following code:

   ```python
   fn main():
       print("Hello, world!")
   ```

   That's all you need. Save the file and return to your terminal.

2. Now run it with the `mojo` command:

    ```sh
    mojo hello.mojo
    ```

    It should immediately print the message:

    ```python
    Hello, world!
    ```

If this didn't work for you, double-check your code looks exactly like the code
in step 1, and make sure you correctly installed
Mojo.

## 3. Build an executable binary

Finally, let's build and run that same code as an executable:

1. Create an executable file with the `build` command:

    ```sh
    mojo build hello.mojo
    ```

    The executable file uses the same name as the `.mojo` file, but
    you can change that with the `-o` option.

2. Then run the executable:

    ```sh
    ./hello
    ```

This creates a statically compiled binary file, so it contains all the code and
libraries it needs to run.

## Next steps

- If you're new to Mojo, we suggest you continue to the next section about
  language basics.

- If you want to experiment with some code, clone the Mojo
repo to try our code examples:

  ```sh
  git clone https://github.com/modularml/mojo.git
  ```

  In addition to several `.mojo` examples, the repo includes [Jupyter
  notebooks](https://github.com/modularml/mojo/tree/main/examples/notebooks#readme)
  that teach advanced Mojo features.

- To see all the available Mojo APIs, check out the Mojo standard library
  reference.
