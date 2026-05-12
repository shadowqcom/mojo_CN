---
title: "warp"
sidebar_label: "warp"
description: "GPU warp 级操作和工具。此模块提供 NVIDIA 和 AMD GPU 的 warp 级操作，包括：- 洗牌操作，用于在 warp 中的线程之间交换值：- shuffle_idx：从源通道复制值到其他通道"
---

# warp

GPU warp 级操作和工具。

此模块提供 NVIDIA 和 AMD GPU 的 warp 级操作，包括：

- 洗牌操作，用于在 warp 中的线程之间交换值：
  - shuffle_idx：从源通道复制值到其他通道
  - shuffle_up：从较低通道 ID 复制
  - shuffle_down：从较高通道 ID 复制
  - shuffle_xor：以蝴蝶模式交换值

- Warp 级归约：
  - sum：计算 warp 内的总和
  - max：查找 warp 内的最大值
  - min：查找 warp 内的最小值
  - broadcast：将值广播到所有通道

该模块通过核心操作的架构特定实现处理 NVIDIA 和 AMD GPU 架构。它支持各种数据类型，包括整数、浮点数和半精度浮点数，具有 SIMD 向量化。

## 函数

### _dpp_update_i32

`@always_inline def _dpp_update_i32[
    dpp_ctrl`

### _dpp_move

`@always_inline def _dpp_move[
    dtype`

### _dpp_reduce_and_broadcast

`@always_inline def _dpp_reduce_and_broadcast[
    dtype`

### _cross_row_step

`@always_inline def _cross_row_step[
        shuffle_width`

### _shuffle

`@always_inline def _shuffle[
    mnemonic`

### _shuffle_amd_helper

`@always_inline def _shuffle_amd_helper[
    dtype`

### _shuffle_apple_helper

`@always_inline def _shuffle_apple_helper[
    op`

### shuffle_idx

`@always_inline def shuffle_idx[
    dtype`

### _shuffle_idx_amd

`@always_inline def _shuffle_idx_amd[
    dtype`

### shuffle_idx

`@always_inline def shuffle_idx[
    dtype`

### shuffle_up

`@always_inline def shuffle_up[
    dtype`

### _shuffle_up_amd

`@always_inline def _shuffle_up_amd[
    dtype`

### shuffle_up

`@always_inline def shuffle_up[
    dtype`

### shuffle_down

`@always_inline def shuffle_down[
    dtype`

### _shuffle_down_amd

`@always_inline def _shuffle_down_amd[
    dtype`

### shuffle_down

`@always_inline def shuffle_down[
    dtype`

### shuffle_xor

`@always_inline def shuffle_xor[
    dtype`

### _shuffle_xor_amd

`@always_inline def _shuffle_xor_amd[
    dtype`

### shuffle_xor

`@always_inline def shuffle_xor[
    dtype`

### lane_group_reduce

`@always_inline def lane_group_reduce[
    val_type`

### reduce

`@always_inline def reduce[
    val_type`

### _lane_group_broadcast_reduce

`@always_inline def _lane_group_broadcast_reduce[
    val_type`

### lane_group_sum

`@always_inline def lane_group_sum[
    val_type`

### _reduce_add

`@parameter def _reduce_add(x`

### sum

`@always_inline def sum(val`

### prefix_sum

`@always_inline def prefix_sum[
    dtype`

### _has_redux_f32_support

`def _has_redux_f32_support[dtype`

### _redux_f32_max_min

`def _redux_f32_max_min[direction`

### lane_group_max

`@always_inline def lane_group_max[
    val_type`

### _reduce_max

`@parameter def _reduce_max(x`

### max

`@always_inline def max(val`

### lane_group_min

`@always_inline def lane_group_min[
    val_type`

### _reduce_min

`@parameter def _reduce_min(x`

### min

`@always_inline def min(val`

### broadcast

`@always_inline def broadcast[
    val_type`

### broadcast

`def broadcast(val`

### broadcast

`def broadcast(val`

### _vote_nvidia_helper

`@always_inline def _vote_nvidia_helper(vote`

### _vote_amd_helper

`@always_inline def _vote_amd_helper[ret_type`

### vote

`@always_inline def vote[ret_type`
