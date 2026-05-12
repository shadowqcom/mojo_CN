---
title: "cluster"
sidebar_label: "cluster"
description: "此模块提供 SM90+ 架构的底层 NVIDIA GPU 集群同步原语。该模块实现线程块集群操作，支持 NVIDIA Hopper 架构及更新 GPU 上集群内线程块 (CTA) 之间的高效通信和同步。"
---

# cluster

此模块提供 SM90+ 架构的底层 NVIDIA GPU 集群同步原语。

该模块实现线程块集群操作，支持 NVIDIA Hopper 架构及更新 GPU 上集群内线程块 (CTA) 之间的高效通信和同步。

所有函数仅限于 NVIDIA SM90+ GPU，在不支持的硬件上使用会引发错误。

注意：这些是对应 PTX/NVVM 指令的底层原语，应仔细考虑底层硬件同步机制后使用。

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
