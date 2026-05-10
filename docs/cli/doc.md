---
sidebar_position: 5
---


# mojo doc

Compiles docstrings from a Mojo file.

## Synopsis

```
mojo doc [options] <path>
```

## Description

This is an early version of a documentation tool that generates an API reference from Mojo code comments. Currently, it generates a structured output of all docstrings into a JSON file, and it does not generate HTML. This output format is subject to change.

The input may be a single file or a directory. If you specify a directory, it will generate a single JSON output with documentation for all modules found in that path, recursively.

## Options

### Output options

#### `-o <PATH>`

Sets the path and filename for the JSON output. If not provided, output is written to stdout.

### Compilation options

#### `-I <PATH>`

Appends the given path to the list of directories that Mojo will search for any package/module dependencies. That is, if the file you pass to `mojo doc` imports any packages that do not reside in the local path and are not part of the Mojo standard library, use this to specify the path where Mojo can find those packages.

### Validation options

The following validation options help ensure that your docstrings use valid structure and meet other style criteria. By default, warnings are emitted only if the docstrings contain errors that prevent translation to the output format. (More options coming later.)

#### `--diagnose-missing-doc-strings`

Emits diagnostic warnings for missing or partial doc strings.

#### `--docs-base-path <PATH>`

Sets the path prefix for generated documentation links.

### Compilation diagnostic options

Controls how the Mojo compiler outputs diagnostics related to compiling and running Mojo source code.

#### `--max-notes-per-diagnostic <INTEGER>`

When the Mojo compiler emits diagnostics, it sometimes also prints notes with additional information. This option sets an upper threshold on the number of notes that can be printed with a diagnostic. If not specified, the default maximum is 10.

#### `--Werror`

Treat warnings as errors.

#### `--Wno-error`

Do not treat warnings as errors (overrides -Werror).

### Common options

#### `--diagnostic-format <FORMAT>`

The format in which diagnostics and error messages are printed. Must be one of "text" or "json" ("text" is the default).

#### `--help`, `-h`

Displays help information.

#### `--help-hidden`

Displays help for hidden options.

