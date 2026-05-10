---
sidebar_position: 2
---

# mojo build

Builds an executable from a Mojo file.

## Synopsis

```
mojo build [options] <path>
```

## Description

Compiles the Mojo file at the given path into an executable.

By default, the executable is saved to the current directory and named the same as the input file, but without a file extension.

Beware that any Python libraries used in your Mojo project are not included in the executable binary, so they must be provided by the environment where you run the executable.

## Options

### Output options

#### `-o <PATH>`

Sets the path and filename for the executable output. By default, it outputs the executable to the current directory, with the same name and no extension.

#### `--emit <FILE_TYPE>`

The type of output file to generate.

- `exe` (default): emit an executable binary file.
- `shared-lib`: emit a shared (dynamic) library.
- `object`: (EXPERIMENTAL) emit a single object file.
- `llvm`: emit unoptimized LLVM IR.
- `llvm-bitcode`: emit bitcode of unoptimized LLVM IR.
- `asm`: emit target assembly. For GPU targets, also emits a
  sidecar file per kernel alongside the host assembly: `.ptx`
  for NVIDIA, `.amdgcn` for AMD, `.ll` for Metal.

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

Sets the GPU or accelerator architecture for heterogeneous computing (e.g., sm\_90 for NVIDIA H100, gfx942 for AMD MI300).

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

#### `--diagnostic-format <FORMAT>`

The format in which diagnostics and error messages are printed. Must be one of "text" or "json" ("text" is the default).

#### `--help`, `-h`

Displays help information.

#### `--help-hidden`

Displays help for hidden options.
