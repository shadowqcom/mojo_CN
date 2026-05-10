---
title: "cluster"
sidebar_label: "cluster"
description: "This module provides low-level NVIDIA GPU cluster synchronization primitives for SM90+ architectures.  The module implements thread block cluster operations that enable efficient communication and syn"
---

# cluster

This module provides low-level NVIDIA GPU cluster synchronization primitives for SM90+ architectures.

The module implements thread block cluster operations that enable efficient communication and
synchronization between thread blocks (CTAs) within a cluster on NVIDIA Hopper architecture and newer GPUs.

All functions are constrained to NVIDIA SM90+ GPUs and will raise an error if used on unsupported hardware.

Note: These are low-level primitives that correspond directly to PTX/NVVM instructions and should be used
with careful consideration of the underlying hardware synchronization mechanisms.

## 函数

### block_rank_in_cluster

`def block_rank_in_cluster() -&gt; UInt32`

### elect_one_sync

`def elect_one_sync() -&gt; Bool`

### elect_one_sync_with_mask

`def elect_one_sync_with_mask(mask`

### cluster_arrive_relaxed

`def cluster_arrive_relaxed()`

### cluster_arrive

`def cluster_arrive()`

### cluster_wait

`def cluster_wait()`

### cluster_sync

`def cluster_sync()`

### cluster_sync_relaxed

`def cluster_sync_relaxed()`

### cluster_sync_acquire

`def cluster_sync_acquire()`

### cluster_sync_release

`def cluster_sync_release()`

### clusterlaunchcontrol_query_cancel_is_canceled

`def clusterlaunchcontrol_query_cancel_is_canceled(
    result`

### clusterlaunchcontrol_query_cancel_get_first_ctaid

`def clusterlaunchcontrol_query_cancel_get_first_ctaid[
    id`

### clusterlaunchcontrol_query_cancel_get_first_ctaid_v4

`def clusterlaunchcontrol_query_cancel_get_first_ctaid_v4(
    result`

### clusterlaunchcontrol_try_cancel

`def clusterlaunchcontrol_try_cancel[
    multicast`

### cluster_mask_base

`def cluster_mask_base[
    cluster_shape`
