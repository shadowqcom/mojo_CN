---
sidebar_position: 7
---


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

Sets the path and filename for the output package. The filename must end with `.mojopkg`. The filename given here defines the package name you can then use to import the code (minus the file extension). If you don't specify this option, a `.mojopkg` file is generated in the current working directory, with a name based on the name of the input directory.

### Compilation options

#### `-I <PATH>`

Appends the given path to the list of directories to search for imported Mojo files.

#### `-kgenModule`

Export as a KGEN module.

### Compilation diagnostic options

Controls how the Mojo compiler outputs diagnostics related to compiling and running Mojo source code.

#### `--diagnose-missing-doc-strings`

Emits diagnostics for missing or partial doc strings.

#### `--max-notes-per-diagnostic <INTEGER>`

When the Mojo compiler emits diagnostics, it sometimes also prints notes with additional information. This option sets an upper threshold on the number of notes that can be printed with a diagnostic. If not specified, the default maximum is 10.

#### `--disable-builtins`

Do not use builtins when create package.

#### `--disable-warnings`

Do not print warning messages.

#### `--experimental-fixit`

Automatically apply fix-its to the code, and rerun the command again after the fix-its are applied. WARNING: this feature is highly experimental and may result in irreversible data loss.

#### `--experimental-export-fixit <YAML_FILE>`

Export fix-its to a YAML file in clang-tidy format instead of applying them directly. The file can be applied using 'clang-apply-replacements'. WARNING: this feature is highly experimental.

#### `--Werror`

Treat warnings as errors.

#### `--Wno-error`

Do not treat warnings as errors.

#### `--warn-on-unstable-apis`

Warn when using unstable APIs from the standard library.

#### `--ignore-incompatible-package-errors`

Ignore errors encountered when loading incompatible Mojo packages.

### Common options

#### `--diagnostic-format <FORMAT>`

The format in which diagnostics and error messages are printed. Must be one of "text" or "json" ("text" is the default).

#### `--help`, `-h`

Displays help information.

#### `--help-hidden`

Displays help for hidden options.

