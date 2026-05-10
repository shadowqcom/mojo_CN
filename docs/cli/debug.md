---
sidebar_position: 3
---

# mojo debug

Launches the Mojo debugger using the command-line interface or an external editor.

## Synopsis

```
mojo debug [debug-options]
```

## Description

This command, which underneath uses the LLDB debugger, or cuda-gdb, offers four basic debug session modes:

* Build and debug a Mojo file.

        mojo debug [options] <file.mojo> [runtime args]

    Builds the Mojo file at the given path and launches it under the debugger. Options, which come before the Mojo file, can include any compilation options expected by the `mojo run`, as well as regular debuggingcommands. Runtime args, which come after the Mojo file, are passed directly to the debuggee upon launch. By default, this mode uses `-O0` and `--debug-level=full` as compilation options.

* Debug a precompiled program.

        mojo debug [options] <program> [runtime args]

    Launches the program at the given path in the debugger. Options, which come before the program path, cannot include compilation commands. Runtime args, which come after the program path, are passed directly to the debuggee upon launch.

* Attach to a running process.

        mojo debug [options] [--pid <pid> | --process-name <process-name>]

    Attaches to the process specified by pid or name, which can be the full path of the process' executable. Options other than the process identifier cannot include compilation options.

* Start the debugger command-line interface.

        mojo debug [options]

    Launches the debugger CLI with support for debugging Mojo programs. This command only supports LLDB or cuda-gdb options via the `--X` option.

You can also select one of two interfaces for the debug session:

* CLI: By default, all debug session modes are launched using the regular debugger command-line interface.

* VS Code Debug Server: If you add the `--vscode` option, the debug session is launched in VS Code via the Mojo extension. VS Code must be running and the Mojo extension must be enabled. Besides that, the environment variables and the current working directory of this invocation are preserved when launching programs in the debugger on VS Code.

Finally, it is worth mentioning that this debugger can debug programs written in other standard native languages like Rust, C and C++, as it is based on LLDB or cuda-gdb.

Debugger capabilities:

* LLDB: this is the default debugger and has great support for CPU Mojo code, but has no support at all for Mojo GPU code.

* cuda-gdb: this is invoked via the `--cuda-gdb` option and has minimal support for CPU Mojo code but it has support for GPU Mojo code.

## Options

### Attach options

#### `--pid <PID>`

Indicates the debugger to attach to the process with the given PID.

#### `--process-name <NAME>`

Indicates the debugger to attach to the process with the given name or path.

### cuda-gdb options

#### `--cuda-gdb`

Uses cuda-gdb instead of LLDB for debugging. In this mode, it's possible to step into GPU code, but the CPU debugging experience is degraded.

#### `--cuda-gdb-path <CUDA_GDB_PATH>`

Uses the given CUDA_GDB_PATH instead of looking for cuda-gdb in the PATH environment variable.

#### `--break-on-launch`

Set the breakOnLaunch option for cuda-gdb.  This makes the debugger break on the first instruction of every launched kernel.

### Compilation options

#### `--optimization-level <LEVEL>`, `-O`, `--no-optimization (LEVEL=0)`

Sets the level of optimization to use at compilation. The value must be a number between 0 and 3. The default is 3.

#### `-I <PATH>`

Appends the given path to the list of directories to search for imported Mojo files.

#### `-D <KEY=VALUE>`

Defines a named value that can be used from within the Mojo source file being executed. For example, `-Dfoo=42` defines a name `foo` that, when queried with the `std.defines` module from within the Mojo program, would yield the compile-time value `42`.

#### `--debug-level <LEVEL>`, `-g (LEVEL=full)`, `-g0 (LEVEL=none)`, `-g1 (LEVEL=line-tables)`, `-g2 (LEVEL=full)`

Sets the level of debug info to use at compilation. The value must be one of: `none`, `line-tables`, or `full`. Default is `none`, except when using `mojo debug foo.mojo`, which defaults to `full`. Please note that there are issues when generating debug info for some Mojo programs that have yet to be addressed.

#### `--num-threads <NUM>`, `-j`

Sets the maximum number of threads to use for compilation. The default is 0 (use all available threads).

#### `--elaboration-error-include-prelude`

Show elaboration error with locations in mojo startup modules (prelude).

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

#### `--target-accelerator <ACCELERATOR>`

Sets the GPU or accelerator architecture for heterogeneous computing (e.g., sm_90 for NVIDIA H100, gfx942 for AMD MI300).

#### `--print-effective-target`

Print the effective target configuration after absorbing all command-line flags and exit.

#### `--print-supported-targets`

Print all available target names and exit.

#### `--print-supported-cpus`

Print valid CPU names for the specified target and exit. Requires --target-triple.

#### `--print-supported-accelerators`

Print all supported GPU and accelerator architectures and exit.

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

### Debugger options

#### `--X <ARG>`

Passes ARG as an argument to the debugger when the debug session is launched using the debugger command-line interface. This option can be specified multiple times. It is ignored when using the RPC mode.

### Debug server options

#### `--vscode`

Launches the debug session on VS Code via the Mojo extension.

#### `--rpc`

Alias for --vscode.

#### `--terminal <TERMINAL>`

The type of terminal to use when starting a launch debug session.

* `console` (default): the debuggee will be launched in the default environment for the editor. If using VS Code, this will be the Debug Console.
* `dedicated`: the debuggee will be launched in a dedicated terminal within the editor.

#### `--port <PORT>`

Uses the given PORT to communicate with the RPC debug server. Defaults to trying all ports from 12355 to 12364 inclusive.

#### `--stop-on-entry`

Automatically stop after launch.

#### `--init-command <INIT_COMMAND>`

Initialization command executed upon debugger startup. Can be specified multiple times.

### Linker options

#### `-Xlinker <ARG>`

Pass ARG to the linker.

### Experimental compilation options

#### `--sanitize <CHECK>`

Turns on runtime checks. The following values are supported: `address` (detects memory issues), and `thread` (detects multi-threading issues).

#### `--shared-libasan`

Dynamically link the address sanitizer runtime. Requires address sanitization turned on with `--sanitize` option.

#### `--debug-info-language <LANGUAGE>`

Sets the language to emit as part of the debug info. The supported languages are: `Mojo`, and `C`. `Mojo` is the default. `C` is useful to enable rudimentary debugging and binary introspection in tools that don't understand Mojo, but is not required for `mojo debug`.

### Common options

#### `--help`, `-h`

Displays help information.

#### `--help-hidden`

Displays help for hidden options.

