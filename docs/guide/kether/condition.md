---
sidebar_position: 2
---

# 条件

本节介绍 Kether 如何作为条件使用

首先需要明确的一些概念是：
- Kether 语句是由 "动作" 组成
- 每个动作都有返回值

对返回值的直接引用或二次判断，是将 Kether 语句当条件使用的底层逻辑  
阅读本章时建议同时打开 [Kether Repository](https://taboo.8aka.org/kether-list) 进行一些基础动作的查阅

## 权限判断

写一条 Kether 表达式，判断玩家是否有 `invero.test` 权限  
首先在 Kether 仓库中查询到 Permission 动作，其描述为  
`将动作的返回值作为权限判断执行者是否持有该权限。`

```
permission invero.test
```

亦或简写为
```
perm invero.test
```

## 变量判断
参考 `check` 等动作

## 多个条件判断

参考 `all`, `any`, `none` 等动作