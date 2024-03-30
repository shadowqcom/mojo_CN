The Mojo extension for Visual Studio Code enables you to use VS Code's built-in
debugger with Mojo programs. (The Mojo extension also supports debugging C, C++,
and Objective-C.)

For complete coverage of VS Code's debugging features, see
[Debugging in Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging).

This page describes the features available through the Mojo extension, as well
as current limitations of the Mojo debugger.

The Mojo SDK includes the [LLDB debugger](https://lldb.llvm.org/) and a Mojo
LLDB plugin. Together these provide the low-level debugging interface for the
Mojo extension. You can also use `mojo debug` to start a command-line debugging
session using LLDB.

## Start debugging

There are several ways to start a debug session in VS Code.

To start debugging, you'll need to have a Mojo project to debug. There are
a number of examples ranging from simple to complex in the [Mojo repo on
GitHub](https://github.com/modularml/mojo).

:::note **VS Code veteran?**

If you're already familiar with debugging in VS Code, the
material in this section will mostly be review. You might want to skip ahead to
[Mojo launch configurations](#mojo-launch-configurations-launch-configurations)
or see [Using the debugger](#using-the-debugger) for notes on the features
supported in the Mojo debugger. 

:::

### Quick run or debug

If your active editor tab contains a Mojo file with an `fn main()` entry point,
one of the quickest ways to run or debug it is using the **Run or Debug** button
in the Editor toolbar.

![](images/quick-run-or-debug-button.png)

To start debugging the current file:

- Open the **Run or Debug** dropdown menu and choose **Debug Mojo File** or
**Debug Mojo File in Dedicated Terminal**.

  ![](images/quick-run-or-debug-menu.png)

The two debug configurations differ in how they handle input and output:

* **Debug Mojo File** launches the Mojo program detached from any terminal.
Standard output and standard error output for the program are displayed in the
**Debug Console**. You can't write to the program's standard input, but you can
see the program's output and interact wih the debugger in a single location.

* **Debug Mojo File in Dedicated Terminal** creates a new instance of VS Code's
integrated terminal and attaches the program's input and output to the terminal.
This lets you interact with the program's standard input, standard output and
standard error output in the terminal, while the **Debug Console** is used only
for interactions with the debugger.

The **Run or Debug** button uses predefined launch configurations. There's
currently no way to modify the `args`, `env`, `cwd` or other settings for
programs launched with the **Run or Debug** configurations. If you need to
customize any of these things, see [Edit launch
configurations](#edit-launch-configurations).

After you choose one of the debug configurations, the button updates to show
the debug symbol. Click the button to re-run the previous configuration.

![](images/quick-run-or-debug-button-debug.png).


### Run and Debug view

The **Run and Debug** view includes a button to launch debug sessions and a
menu to select debug configurations. It also has areas to display current
variables, watch expressions, the current call stack, and breakpoints.

![](images/run-and-debug-view.png)

To open **Run and Debug** view, click the **Run and Debug** icon in the
**Activity Bar** (on the left side of the VS Code window) or press
<kbd>Control+Shift+D</kbd> 
(<kbd>Command+Shift+D</kbd> on macOS).

![](images/run-and-debug-icon.png)

If you haven't created any launch configurations in the current project,
VS Code shows the **Run start view**.

![](images/run-start-view.png)

If you've already launched a debug session or created a `launch.json` file to
define launch configurations, you'll see the **Launch configurations** menu,
which lets you choose configurations and start debug sessions:

![](images/launch-configuration-menu.png)

### Other ways to start a debug session

There are a number of other ways to start a debug session.

#### Launching from the Command Palette

If you have a Mojo file open in your active editor, you can also start a debug
session from the **Command Palette**.

1. Click **View** > **Command Palette** or press <kbd>Control+Shift+P</kbd>
(<kbd>Command+Shift+P</kbd> on macOS). 

2. Enter "Mojo" at the prompt to bring up the Mojo commands. You should see the
same debug configurations described in [Quick run or
debug](#quick-run-or-debug).

#### Launching from the File Explorer

To launch a debug session from the the **File Explorer** view:

1. Right-click on a Mojo file.
2. Select a Mojo debug configuration.

You should see the same debug configurations described in [Quick run or
debug](#quick-run-or-debug). 

#### Debug with F5

Press F5 to start a debug session using the current debug configuration.

If you don't have any existing debug configurations available to select, and
your active editor contains a Mojo file with an `fn main()` entry point,
pressing F5 will launch and debug the current file using the **Debug Mojo
File** action described in [Quick run or debug](#quick-run-or-debug).

## Edit launch configurations

To edit launch configurations:

1. If the **Run and Debug** view isn't already open, click the **Run and
Debug** icon in the **Activity Bar** (on the left side of the VS Code window)
or press <kbd>Control+Shift+D</kbd> (<kbd>Command+Shift+D</kbd> on macOS).

   ![](images/run-and-debug-icon.png)
  
1. Create or open the `launch.json` file:
    1. If you see the **Run start view**, click **create a launch.json file**.
    1. If you already have launch configurations set up, click the gear icon
    next to the **Launch configurations** menu.
       ![](images/launch-configuration-menu.png)
1. Select **Mojo** from the list of debuggers.

VS Code opens the new `launch.json` file in an editor tab, with templates for
some common debug actions. Click **Add configuration** to add a new
configuration template. 

### Mojo launch configurations

The Mojo debugger provides the following launch configuration templates:

* Debug current Mojo file. Launches and debugs the Mojo file in the active
editor tab. Effectively the same as the **Debug Mojo File** action described in
[Quick run or debug](#quick-run-or-debug), but with more configuration options.

* Debug Mojo file. Like the previous entry, except that it identifies a
specific file to launch and debug, no matter what file is displayed in the
active editor.

* Debug binary. This configuration operates on a prebuilt binary, which could
be written in any mixture of languages supported by LLDB (Mojo, C, C++, etc.).
You need to set the `program` field to the path of your binary. 

* Attach to process. Launches a debug session attached to a running process. On
launch, you choose the process you want to debug from a list of running
processes.

You can edit any of these templates to customize them. All VS Code launch
configurations must contain the following attributes:

- `name`. The name of the launch configuration, which shows up in the UI (for
  example, "Run current Mojo file").
- `request`. Can be either `launch` (to run a program from VS Code) or `attach` 
  (to attach to and debug a running file). 
- `type`. Use `mojo-lldb` for the Mojo debugger.

In addition, Mojo launch configurations can contain the following attributes:

- `args`. Any command-line arguments to be passed to the program.
- `cwd`. The current working directory to run the program in.
- `description`. A longer description of the configuration, not shown in the UI.
- `env`. Environment variables to be set before running the program.
- `mojoFile`. Path to a Mojo file to launch and debug.
- `program`. Path to a compiled binary to launch and debug.
- `runInTerminal`. True to run the program with a dedicated terminal, which
  allows the program to receive standard input from the terminal. False to run
  the program with its output directed to the **Debug Console**.

Mojo `launch` configurations must include either the `mojoFile` or `program`
attribute.

VS Code performs variable substitution on the launch configurations. You can
use `${workspaceFolder}` to substitute the path to the current workspace, and
`${file}` to represent the file in the active editor tab. For a complete list
of variables, see the [Variables
reference](https://code.visualstudio.com/docs/editor/variables-reference).

Note that for launch configurations that launch a Mojo file, there is currently
no way to specify compilation options.


## Using the debugger

When a debug session is running, use the debug toolbar to pause, continue, and
step through the program.

![](images/debug-toolbar.png)

The buttons on the toolbar are:

- **Continue/Pause**: If the program is stopped, resume the normal execution of the
program up to the next breakpoint, signal or crash. Otherwise, pause all the
threads of the program at once.

- **Step Over**: Execute the next line of code without stopping at function calls.

- **Step Into**: Execute the next line of code and stop at the first function call. If the program is stopped just before a function call, steps into the function so you can step through it line-by-line.

- **Step Out**: Finish the execution of the current function and stop right after
returning to the parent function. 

- **Restart**: If this is a `launch` session, terminate the current program and
restart the debug session. Otherwise, detach from the target process and
reattach to it. 

- **Stop**: If this a a `launch` session, terminate the current program. Otherwise,
detach from the target process without killing it.

The debugger currently has the following limitations:

- No support for breaking automatically on Mojo errors.

- When stepping out of a function, the returned value is not displayed.

- LLDB doesn’t support stopping or resuming individual threads.

### Breakpoints

The Mojo debugger supports setting [standard 
breakpoints](https://code.visualstudio.com/docs/editor/debugging#_breakpoints),
[logpoints](https://code.visualstudio.com/docs/editor/debugging#_logpoints), and
[triggered breakpoints](https://code.visualstudio.com/docs/editor/debugging#_triggered-breakpoints), 
as described in the VS Code documentation.

When debugging Mojo code, the debugger doesn't support function breakpoints,
data breakpoints, or conditional breakpoints based on an expression (it does 
support hit counts, which VS Code classifies as a kind of conditional 
breakpoint).

When editing a breakpoint, you're offered four options:

- **Expression**. Set a conditional breakpoint (not currently supported).
- **Hit Count**. Add a hit count to a breakpoint (supported).
- **Log Message**. Add a logpoint (supported)
- **Wait for Breakpoint**. Add a triggered breakpoint (supported).

#### Hit counts

A hit count breakpoint is a breakpoint that only breaks execution after the
debugger hits it a specified number of times.

To set a hit count for a breakpoint:

- Right click on the breakpoint in the left gutter of the editor and select
  **Edit breakpoint**.
- Select **Hit Count** from the menu and enter the desired hit count.

You can also edit a breakpoint from the **Breakpoints** section of the **Run and
Debug** view:

- Right-click on the breakpoint and select **Edit Condition**, or,
- Click the **Edit Condition** icon next to the breakpoint.

This brings up the same menu, **next to the breakpoint in the editor tab**.

### Using the Debug Console

The **Debug Console** gives you a command-line interface to the debugger. The 
**Debug Console** processes LLDB commands and Mojo expressions.

Anything prefixed with a colon (`:`) is treated as an LLDB command. Any other
input is treated as an expression.

Currently Mojo expressions are limited to inspecting variables and their fields.
The console also supports subscript notation (`vector[index]`) for certain data
structures in the standard library, including  `List`, `SIMD`,
and `ListLiteral`. 

In the future, we intend to provide a way for arbitrary data structures to
support subscript notation in the **Debug Console**.

:::note 

The **Debug Console** only accepts input when the program is paused.

:::
