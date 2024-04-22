# mojo debug

Launches the Mojo debugger using the command-line interface or an external editor.

## Synopsis

```
mojo debug [debug-options]
```

## Description

This command, which underneath uses the LLDB debugger, offers four basic debug session modes:

- Build and debug a Mojo file.
    
    ```
      mojo debug [options] <file.mojo> [runtime args]
    ```
    
    Builds the Mojo file at the given path and launches it under the debugger. Options, which come before the Mojo file, can include any compilation options expected by the `mojo run`, as well as regular debuggingcommands. Runtime args, which come after the Mojo file, are passed directly to the debuggee upon launch. By default, this mode uses `-O0` and `--debug-level=full` as compilation options.
    
- Debug a precompiled program.
    
    ```
      mojo debug [options] <program> [runtime args]
    ```
    
    Launches the program at the given path in the debugger. Options, which come before the program path, cannot include compilation commands. Runtime args, which come after the program path, are passed directly to the debuggee upon launch.
    
- Attach to a running process.
    
    ```
      mojo debug [options] [--pid <pid> | --process-name <process-name>]
    ```
    
    Attaches to the process specified by pid or name, which can be the full path of the process' executable. Options other than the process identifier cannot include compilation options.
    
- Start the LLDB command-line interface.
    
    ```
      mojo debug [options]
    ```
    
    Launches the LLDB CLI with support for debugging Mojo programs. This command only supports LLDB options (via the `--Xlldb` option).
    

You can also select one of two interfaces for the debug session:

- LLDB CLI: By default, all debug session modes are launched using the regular LLDB command-line interface.
    
- RPC debug server: If you add the `--rpc` option, the debug session is launched in a editor that has spawned an RPC debug server, e.g. VS Code via the RPC debug server launched by the Mojo extension. Besides that, the environment variable and the current working directory of this invocation are preserved when launching programs on the RPC debug server side.
    

Finally, it is worth mentioning that this debugger can debug programs written in other standard native languages like C and C++, as it is based on LLDB.

## Options

### LLDB options

#### `--Xlldb <ARG>`

Passes ARG as an argument to LLDB when the debug session is launched using the LLDB command-line interface. This option can be specified multiple times. It is ignored when using the RPC mode.

### Attach options

#### `--pid <PID>`

Indicates the debugger to attach to the process with the given PID.

#### `--process-name <NAME>`

Indicates the debugger to attach to the process with the given name or path.

### RPC debug server options

#### `--rpc`

Launches the debug session in the external editor that has an active RPC debug server.

#### `--terminal <TERMINAL>`

The type of terminal to use when starting a launch debug session.

- `console` (default): the debuggee will be launched in the default environment for the editor. If using VS Code, this will be the Debug Console.
- `dedicated`: the debuggee will be launched in a dedicated terminal within the editor.

#### `--port <PORT>`

Uses the given PORT to communicate with the RPC debug server. Defaults to 12346.

#### `--secret <SECRET>`

Uses the given optional SECRET string as a minimal authentication mechanism when communicating with the RPC debug server. It must be used if the RPC debug server expects it.

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