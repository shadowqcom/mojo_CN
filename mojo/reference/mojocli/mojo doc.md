# mojo doc

Compiles docstrings from a Mojo file.

## Synopsis

```
mojo doc [options] <path>
```

## Description

This is an early version of a documentation tool that generates an API reference from Mojo code comments. Currently, it generates a structured output of all docstrings into a JSON file, and it does not generate HTML. This output format is subject to change.

The input must be the path to a single Mojo source file.

## Options

### Output options

#### `-o <PATH>`

Sets the path and filename for the JSON output. If not provided, output is written to stdout.

### Compilation options

#### `-I <PATH>`

Appends the given path to the list of directories that Mojo will search for any package/module dependencies. That is, if the file you pass to `mojo doc` imports any packages that do not reside in the local path and are not part of the Mojo standard library, use this to specify the path where Mojo can find those packages.

### Validation options

The following validation options help ensure that your docstrings use valid structure and meet other style criteria. By default, warnings are emitted only if the docstrings contain errors that prevent translation to the output format. (More options coming later.)

#### `--warn-missing-doc-strings`

Emits warnings for missing or partial docstrings.

### Common options

#### `--help`, `-h`

Displays help information.