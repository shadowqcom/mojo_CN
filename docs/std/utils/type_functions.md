---
title: "type_functions"
sidebar_label: "type_functions"
description: "Provides type functions for compile-time type manipulation.  Type functions are `comptime` declarations that produce a type from compile-time parameter inputs. Unlike regular `fn` functions which acce"
---

# type_functions

Provides type functions for compile-time type manipulation.

Type functions are `comptime` declarations that produce a type from compile-time
parameter inputs. Unlike regular `fn` functions which accept and return runtime
values, type functions operate entirely at compile time -- they take `comptime`
parameters and evaluate to a type, with no runtime component.
