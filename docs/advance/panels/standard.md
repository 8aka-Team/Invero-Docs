---
sidebar_position: 2
---

# 标准面板

标准面板是最常用的面板，主要实现是自定义图标 & 交互功能

## 属性

| **节点**     | 接受值           | 描述          |
|------------|---------------|-------------|
| **locate** | String / Int  | 面板的定位（槽位写法） |
| **layout** | String / List | 面板的布局       |
| **scale**  | ListInt       | 尺寸          |
| **icons**  | Map           | 图标          |

## 示例

```yaml
title: demo

layout:
  - '#########'
  - '#A      #'
  - '#########'

# layout: |-
#   #########
#   #A      #
#   #########

items:
  'A':
    material: stone
```
