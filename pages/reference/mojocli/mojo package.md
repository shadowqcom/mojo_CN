# mojo package

Compiles a Mojo package.

## Synopsis

```
mojo package [options] <path>
```

## Description

Compiles a directory of Mojo source files into a binary package suitable to share and import into other Mojo programs and modules. A Mojo package is portable across different systems because it includes only non-elaborated code (it's not an arch-specific package). The code becomes an arch-specific executable only after it's imported into a Mojo program that's then compiled with `mojo build`.

To create a Mojo package, first add an `__init__.mojo` file to your package directory. Then pass that directory name to this command, and specify the output path and filename with `-o`.

For more information, see [Mojo modules and packages](https://docs.modular.com/mojo/manual/packages).

## Options

### Output options

#### `-o <PATH>`

Sets the path and filename for the output package. The filename must end with either `.mojopkg` or `.📦`. The filename given here defines the package name you can then use to import the code (minus the file extension). If you don't specify this option, a `.mojopkg` file is generated in the current working directory, with a name based on the name of the input directory.

### Compilation options

#### `-I <PATH>`

Appends the given path to the list of directories to search for imported Mojo files.

#### `-D <KEY=VALUE>`

Defines a named value that can be used from within the Mojo source file being executed. For example, `-D foo=42` defines a name `foo` that, when queried with the `sys.param_env` module from within the Mojo program, would yield the compile-time value `42`.

### Diagnostic options

#### `--warn-missing-doc-strings`

Emits warnings for missing or partial docstrings.

#### `--max-notes-per-diagnostic <INTEGER>`

When the Mojo compiler emits diagnostics, it sometimes also prints notes with additional information. This option sets an upper threshold on the number of notes that can be printed with a diagnostic. If not specified, the default maximum is 10.

### Common options

#### `--help`, `-h`

Displays help information.

[

Previous

](https://docs.modular.com/mojo/cli/format)