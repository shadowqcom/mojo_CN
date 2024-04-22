# mojo

The Mojo🔥 command line interface.

## Synopsis

```sh
mojo <command>mojo [run-options] <path>mojo [options]mojo
```

## Description

The `mojo` CLI provides all the tools you need for Mojo development, such as commands to run, compile, and package Mojo code. A list of all commands are listed below, and you can learn more about each one by adding the `--help` option to the command (for example, `mojo package --help`).

However, you may omit the `run` and `repl` commands. That is, you can run a Mojo file by simply passing the filename to `mojo`:

```sh
mojo hello.mojo
```

And you can start a REPL session by running `mojo` with no commands.

To update Mojo to the latest version, use the [`modular` tool](https://docs.modular.com/cli/):

```sh
modular update mojo
```

You can check your current version with `mojo --version`. For information about Mojo updates, see the [Mojo changelog](https://docs.modular.com/mojo/changelog.html).

## Commands

`run` — Builds and executes a Mojo file.

`build` — Builds an executable from a Mojo file.

`repl` — Launches the Mojo REPL.

`debug` — Launches the Mojo debugger using the command-line interface or an external editor.

`package` — Compiles a Mojo package.

`format` — Formats Mojo source files.

`doc` — Compiles docstrings from a Mojo file.

`demangle` — Demangles the given name.

`test` — Execute unit, integration, and documentation tests.

## Options

### Diagnostic options

#### `--version`, `-v`

Prints the Mojo version and exits.

### Common options

#### `--help`, `-h`

Displays help information.