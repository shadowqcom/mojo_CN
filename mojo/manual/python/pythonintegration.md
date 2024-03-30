# Python integration
Our long-term goal is to make Mojo a *superset of Python* (that is, to make Mojo 
compatible with existing Python programs). Python programmers should be able to
use Mojo immediately, and be able to access the huge ecosystem of Python 
packages that are available today. 

However, Mojo is still in early development and many Python features are not yet
implemented. You can't currently write everything in Mojo that you can write in
Python. And Mojo doesn't have its own ecosystem of packages yet.

To help bridge this gap, Mojo lets you import Python modules, call Python 
functions and interact with Python objects from Mojo code. It runs Python code
using a standard Python interpreter (CPython), so your existing Python code
doesn't need to change.

## Import a Python module

To import a Python module in Mojo, just call 
`Python.import_module()` 
with the module name:


```python
from python import Python

fn use_array() raises:
    # This is equivalent to Python's `import numpy as np`
    var np = Python.import_module("numpy")

    # Now use numpy as if writing in Python
    var array = np.array([1, 2, 3])
    print(array)
```


```python
use_array()
```

    [1 2 3]
    

Yes, this imports Python NumPy, and you can import *any other Python module*
that you have installed.

A few things to note:

- Currently, you cannot import individual members (such as a single Python class
  or function)—you must import the whole Python module and then access members
  through the module name.

- Mojo doesn't yet support top-level code, so the `import_module()` call must
  be inside another method. This means you may need to import a module multiple
  times or pass around a reference to the module. This works the same way as 
  Python: importing the module multiple times won't run the initialization
  logic more than once, so you don't pay any performance penalty.

- `import_module()` may raise an exception (for example, if the module isn't
  installed). If you're using it inside an `fn` function, you need to either
  handle errors (using a `try/except` clause), or add the `raises` keyword to
  the function signature. You'll also see this when calling Python functions
  that may raise exceptions. (Raising exceptions is much more common in Python
  code than in the Mojo standard library, which 
  limits their use for performance reasons.)



Mojo loads the Python interpreter and Python modules at runtime, so
wherever you run a Mojo program, it must be able to access a compatible Python
interpreter, and to locate any imported Python modules. For more information,
see Python environment.



### Import a local Python module

If you have some local Python code you want to use in Mojo, just add
the directory to the Python path and then import the module.

For example, suppose you have a Python file named `mypython.py`:

```{.python filename="mypython.py"}
import numpy as np

def gen_random_values(size, base):
    # generate a size x size array of random numbers between base and base+1
    random_array = np.random.rand(size, size)
    return random_array + base
```

Here's how you can import it and use it in a Mojo file:

```{.mojo filename="main.mojo"}
from python import Python

fn main() raises:
    Python.add_to_path("path/to/module")
    var mypython = Python.import_module("mypython")

    var values = mypython.gen_random_values(2, 3)
    print(values)
```

Both absolute and relative paths work with 
`add_to_path()`. For example, you
can import from the local directory like this:

```python
Python.add_to_path(".")
```

## Call Mojo from Python

As shown above, you can call out to Python modules from Mojo. However, there's 
currently no way to do the reverse—import Mojo modules from Python or call Mojo
functions from Python.

This may present a challenge for using certain modules. For example, many UI 
frameworks have a main event loop that makes callbacks to user-defined code
in response to UI events. This is sometimes called an "inversion of control" 
pattern. Instead of your application code calling *in* to a library, the 
framework code calls *out* to your application code.

This pattern doesn't work because you can't pass Mojo callbacks to a Python 
module.

For example, consider the popular Tkinter package. 
The typical usage for Tkinter is something like this:

- You create a main, or "root" window for the application.
- You add one or more UI widgets to the window. The widgets can have associated
  callback functions (for example, when a button is pushed).
- You call the root window's `mainloop()` method, which listens for events, 
  updates the UI, and invokes callback functions. The main loop keeps running
  until the application exits.

Since Python can't call back into Mojo, one alternative is to have the Mojo
application drive the event loop and poll for updates. The following example
uses Tkinter, but the basic approach can be applied to other packages.

First we create a Python module that defines a Tkinter interface, with a window
and single button:


```python
%%python
import tkinter as tk

class App:
    def __init__(self):
        self._root = tk.Tk()
        self.clicked = False

    def click(self):
        self.clicked = True

    def create_button(self, button_text: str):
        button = tk.Button(
            master=self._root,
            text=button_text,
            command=self.click
        )
        button.place(relx=0.5, rely=0.5, anchor=tk.CENTER)

    def create(self, res: str):
        self._root.geometry(res)
        self.create_button("Hello Mojo!")

    def update(self):
        self._root.update()
```

We can call this module from Mojo like this:


```python
from python import Python

fn button_clicked():
    print("Hi from a Mojo🔥 fn!")

def main():
    Python.add_to_path(".")
    var app = Python.import_module("myapp").App()
    app.create("800x600")

    while True:
        app.update()
        if app.clicked:
            button_clicked()
            app.clicked = False
```

Instead of the Python module calling the Tkinter `mainloop()` method, the Mojo 
code calls the `update()` method in a loop and checks the `clicked` attribute 
after each update.

## Python environment

The Mojo SDK depends on an existing installed version of Python that includes
a shared library version of the Python interpreter. When you install the Mojo
SDK, it tries to locate a compatible version of the Python interpreter and set
up Python's `sys.path` to load matching modules. In most cases this just works
and you don't have to do any further configuration of your Python environment. 

If you run into problems after installing Mojo, see the following sections.

### Installation issues

When the installer runs, it tries to locate the CPython shared library using the 
find_libpython module.

This may fail if one of the following is true:

- There is no version of Python installed, or the installed version isn't
  supported by the Mojo SDK.

- The installer can't find a shared library version of the CPython interpreter 
  (for example, `.so` or `.dylib` file). Some Python distributions don't include
  shared libraries, which prevents Mojo from embedding the interpreter.

If one of these things is the case, you'll need to install a compatible version
of Python that includes shared libraries. Try following the instructions in 
Set up a Python environment with Conda
to install a virtual environment. 

### Set up a Python environment with Conda

Using a Python virtual environment like 
Conda is one way to avoid problems with 
your Python installation. This provides a consistent Python environment with a
known version of Python and all of the Python packages you want to use with
Mojo.

To set up a virtual environment with Conda:

1. Install Conda by following the 
   Quick command-line install instructions.

   Make sure to initialize Conda for the shell or shells you use, for example:

   ```bash
   ~/miniconda3/bin/conda init zsh
   ```

   Or:

   ```bash
   ~/miniconda3/bin/conda init --all
   ```

2. Restart your shell. 

3. Run the following command to configure Mojo to use the Python shared library
   from your Conda environment:

   ```bash
   export MOJO_PYTHON_LIBRARY="$(find $CONDA_PREFIX/lib -iname 'libpython*.[s,d]*' | sort -r | head -n 1)"
   echo "export MOJO_PYTHON_LIBRARY=$MOJO_PYTHON_LIBRARY" >> ~/.zshrc
   ```

   **Note:** If you're using a shell other than zsh, you'll need to adjust these
   commands. For example, if you're using bash, replace `.zshrc` with the
   shell configuration file you use, such as `.bashrc` or `.bash_profile`.

4. Try running the Mojo REPL:

   ```bash
   mojo
   ```

After setting up the Conda virtual environment, you can install any Python 
packages you want to use with Mojo using the `conda install` command. For
example:

```bash
conda install numpy
```

For more information on using Conda with Mojo, see 
Using Mojo with Python on
the Modular Blog.
