---
title: "suite"
sidebar_label: "suite"
description: "Implements test suite infrastructure for organizing and running tests.  This module provides the `TestSuite` type for collecting, filtering, and executing unit tests with automatic discovery, command-"
---

# suite

Implements test suite infrastructure for organizing and running tests.

This module provides the `TestSuite` type for collecting, filtering, and
executing unit tests with automatic discovery, command-line filtering, and
formatted reporting. It includes support for colored output, timing statistics,
and flexible test selection via CLI arguments.

## 类型

### _Indent

`struct _Indent[W`

**Fields:**

- `writable: Pointer[Self.W, Self.origin]`
- `level: Int`

**Methods:**

- **__init__**: `def __init__(out self, ref[Self.origin] w`

- **write_to**: `def write_to(self, mut writer`

### TestResult

`@fieldwise_init struct TestResult(Equatable, ImplicitlyCopyable, Writable)`

**Implemented Traits:**

- `Equatable`
- `ImplicitlyCopyable`
- `Writable`

**Fields:**

- `_value: Int`

**Methods:**

- **__eq__**: `def __eq__(self, rhs`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

### TestReport

`struct TestReport(Copyable, Writable)`

**Implemented Traits:**

- `Copyable`
- `Writable`

**Fields:**

- `name: String`
- `duration_ns: UInt`
- `result: TestResult`
- `error: Optional[Error]`
- `name: String,`
- `error: Optional[Error] = {},`

**Methods:**

- **passed**: `@staticmethod def passed(*, var name`

- **failed**: `@staticmethod def failed(
        *, var name`

- **skipped**: `@staticmethod def skipped(*, var name`

- **__init__**: `@doc_hidden def __init__(
        out self,
        *,
        var name`

- **_format_error**: `@doc_hidden @staticmethod def _format_error(e`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

### TestSuiteReport

`struct TestSuiteReport(Copyable, Writable)`

**Implemented Traits:**

- `Copyable`
- `Writable`

**Fields:**

- `reports: List[TestReport]`
- `total_duration_ns: UInt`
- `failures: Int`
- `skipped: Int`
- `passed: Int`
- `location: SourceLocation`

**Methods:**

- **__init__**: `def __init__(
        out self, *, var reports`

- **write_to**: `def write_to(self, mut writer`

- **write_repr_to**: `@no_inline def write_repr_to(self, mut writer`

### _Test

`@fieldwise_init struct _Test(Copyable)`

**Implemented Traits:**

- `Copyable`

**Fields:**

- `test_fn: Self.fn_type`
- `name: StaticString`

### TestSuite

`struct TestSuite(Movable)`

**Implemented Traits:**

- `Movable`

**Fields:**

- `tests: List[_Test]`
- `location: SourceLocation`
- `skip_list: Set[String]`
- `allow_list: Optional[Set[String]]`
- `cli_args: List[StaticString]`
- `cli_args: Optional[List[StaticString]] = None,`
- `cli_args: Optional[List[StaticString]] = None,`
- `error: Optional[Error] = None`

**Methods:**

- **__init__**: `@always_inline def __init__(
        out self,
        *,
        location`

- **_register_tests**: `def _register_tests[test_funcs`

- **discover_tests**: `@always_inline @staticmethod def discover_tests[
        test_funcs`

- **test**: `def test[f`

- **skip**: `def skip[f`

- **_parse_filter_lists**: `def _parse_filter_lists(mut self) raises`

- **_should_skip**: `def _should_skip(self, test`

- **_validate_skip_list**: `def _validate_skip_list(self) raises`

- **generate_report**: `def generate_report(
        mut self, skip_all`

- **run**: `def run(deinit self, *, quiet`

- **abandon**: `def abandon(deinit self)`
