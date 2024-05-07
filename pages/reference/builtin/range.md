# range

Implements a 'range' call.

These are Mojo built-ins, so you don't need to import them.

## `range`

`range[type: Intable](*end: "type") -> _ZeroStartingRange`

Constructs a \[0; end) Range.

**Parameters:**

- ​**type** (`Intable`): The type of the end value.

**Args:**

- ​**end** (`*"type"`): The end of the range.

**Returns:**

The constructed range.

`range[type: IntableRaising](*end: "type") -> _ZeroStartingRange`

Constructs a \[0; end) Range.

**Parameters:**

- ​**type** (`IntableRaising`): The type of the end value.

**Args:**

- ​**end** (`*"type"`): The end of the range.

**Returns:**

The constructed range.

`range[t0: Intable, t1: Intable](start: t0, end: t1) -> _SequentialRange`

Constructs a \[start; end) Range.

**Parameters:**

- ​**t0** (`Intable`): The type of the start value.
- ​**t1** (`Intable`): The type of the end value.

**Args:**

- ​**start** (`t0`): The start of the range.
- ​**end** (`t1`): The end of the range.

**Returns:**

The constructed range.

`range[t0: IntableRaising, t1: IntableRaising](start: t0, end: t1) -> _SequentialRange`

Constructs a \[start; end) Range.

**Parameters:**

- ​**t0** (`IntableRaising`): The type of the start value.
- ​**t1** (`IntableRaising`): The type of the end value.

**Args:**

- ​**start** (`t0`): The start of the range.
- ​**end** (`t1`): The end of the range.

**Returns:**

The constructed range.

`range[t0: Intable, t1: Intable, t2: Intable](start: t0, end: t1, step: t2) -> _StridedRange`

Constructs a \[start; end) Range with a given step.

**Parameters:**

- ​**t0** (`Intable`): The type of the start value.
- ​**t1** (`Intable`): The type of the end value.
- ​**t2** (`Intable`): The type of the step value.

**Args:**

- ​**start** (`t0`): The start of the range.
- ​**end** (`t1`): The end of the range.
- ​**step** (`t2`): The step for the range.

**Returns:**

The constructed range.

`range[t0: IntableRaising, t1: IntableRaising, t2: IntableRaising](start: t0, end: t1, step: t2) -> _StridedRange`

Constructs a \[start; end) Range with a given step.

**Parameters:**

- ​**t0** (`IntableRaising`): The type of the start value.
- ​**t1** (`IntableRaising`): The type of the end value.
- ​**t2** (`IntableRaising`): The type of the step value.

**Args:**

- ​**start** (`t0`): The start of the range.
- ​**end** (`t1`): The end of the range.
- ​**step** (`t2`): The step for the range.

**Returns:**

The constructed range.