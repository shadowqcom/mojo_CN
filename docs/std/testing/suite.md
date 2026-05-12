---
title: "suite"
sidebar_label: "suite"
description: "实现用于组织和运行测试的测试套件基础设施。此模块提供 `TestSuite` 类型，用于收集、过滤和执行单元测试，具有自动发现、命令行过滤功能。"
---

# suite

实现用于组织和运行测试的测试套件基础设施。

此模块提供 `TestSuite` 类型，用于收集、过滤和执行单元测试，具有自动发现、命令行过滤和格式化报告功能。它支持彩色输出、计时统计和通过 CLI 参数灵活选择测试。

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
