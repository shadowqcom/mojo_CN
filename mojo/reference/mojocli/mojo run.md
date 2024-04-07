# mojo run

Builds and executes a Mojo file.

## Synopsis

```
mojo run [options] <path>
```

## Description

Compiles the Mojo file at the given path and immediately executes it. Another way to execute this command is to simply pass a file to `mojo`. For example:

```
mojo hello.mojo
```

Options for this command itself, such as the ones listed below, must appear before the input file `path` argument. Any command line arguments that appear after the Mojo source file `path` are interpreted as arguments for that Mojo program.

## Options

### Compilation options

#### `--no-optimization`, `-O0`

Disables compiler optimizations. This might reduce the amount of time it takes to compile the Mojo source file. It might also reduce the runtime performance of the compiled executable.

#### `-I <PATH>`

Appends the given path to the list of directories to search for imported Mojo files.

#### `-D <KEY=VALUE>`

Defines a named value that can be used from within the Mojo source file being executed. For example, `-D foo=42` defines a name `foo` that, when queried with the `sys.param_env` module from within the Mojo program, would yield the compile-time value `42`.

### Target options

#### `--target-triple <TRIPLE>`

Sets the compilation target triple. Defaults to the host target.

#### `--target-cpu <CPU>`

Sets the compilation target CPU. Defaults to the host CPU.

#### `--target-features <FEATURES>`

Sets the compilation target CPU features. Defaults to the host features.

#### `--march <ARCHITECTURE>`

Sets the architecture for which to generate code.

#### `--mcpu <CPU>`

Sets the CPU for which to generate code.

#### `--mtune <TUNE>`

Sets the CPU for which to tune code.

### Diagnostic options

#### `--warn-missing-doc-strings`

Emits warnings for missing or partial docstrings.

#### `--max-notes-per-diagnostic <INTEGER>`

When the Mojo compiler emits diagnostics, it sometimes also prints notes with additional information. This option sets an upper threshold on the number of notes that can be printed with a diagnostic. If not specified, the default maximum is 10.

### Experimental compilation options

#### `--debug-level <LEVEL>`

Sets the level of debug info to use at compilation. The value must be one of: `none` (the default value), `line-tables`, or `full`. Please note that there are issues when generating debug info for some Mojo programs that have yet to be addressed.

#### `--sanitize <CHECK>`

Turns on runtime checks. The following values are supported: `address` (detects memory issues), and `thread` (detects multi-threading issues). Please note that these checks are not currently supported when executing Mojo programs.

#### `--debug-info-language <LANGUAGE>`

Sets the language to emit as part of the debug info. The supported languages are: `Mojo`, and `C`. `C` is the default, and is useful to enable rudimentary debugging and binary introspection in tools that don't understand Mojo.

### Common options

#### `--help`, `-h`

Displays help information.