---
sidebar_position: 6
---

# 交互槽面板

:::warning

当前交互槽面板仍处于 **早期测试** 阶段
仍潜在一些不稳定性和漏洞，请不要用于生产服务器

:::

交互槽面板是提高可交互物品槽位的特殊面板  
使用交互槽面板将会禁用玩家背包覆盖 & 虚拟容器功能

## 声明

除了常规面板通用的属性外，生成器面板具有一个独立的配置节点  
通过此节点可以声明一个交互槽面板

| **节点**     | 接受值  | 描述                 |
|--------------|--------|----------------------|
| **crafting** | Object | 声明交互槽面板相关设置 |

## 属性

下列属性均为 `scroll` 节点下的

| **节点**     | 接受值  | 描述                          |
|--------------|--------|--------------------------------|
| **listener** | String | 物品发生改变时执行的 Kether 脚本 |

## 示例

### apple->golden_apple

![](/post/example_convert.gif)

- https://github.com/8aka-Team/Invero/blob/main/src/main/resources/default/crafting_apple.yml

### 垃圾桶

![](/post/rubbish_bin.gif)

- https://www.minebbs.com/resources/.10921
