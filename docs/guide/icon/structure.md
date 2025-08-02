---
sidebar_position: 1
---

# 结构

## 介绍

图标的配置属性应用广泛，  
父级可以是一个标准的元素面板亦或是作为生成器的一个模板图标

通常情况下，图标配置结构是在面板 `icons | items` 节点下配置的一个键值对  
键作为图标 Id，值是一个对象，包含图标的相关属性

例如图标
```yaml
'myCustomIcon':
  material: apple
  name: 'Custom Apple'
  lore: |-
    Description 1
    Description 2
```

- `myCustomIcon` 为此图标的 Id
- `material`, `name`, `lore` 等均为图标的属性

## 根节点

以下列出了图标可供配置的节点  
请注意，除了声明根节点的材质是必要的，其余所有节点均为可选  

### 显示属性

> 常规显示属性  

| **节点**              | 别称                   | 接受值                 | 描述              |
|---------------------|----------------------|---------------------|-----------------|
| **material**        | texture, mat         | String / Object     | 图标材质（原版或特殊源）    |
| **name**            | -                    | String              | 物品显示名称          |
| **lore**            | lores                | String / List       | 物品显示描述          |
| **amount**          | count, amt           | Int                 | 物品数量            |
| **damage**          | durability, dur      | Int                 | 物品耐久            |
| **customModelData** | model                | Int                 | 物品模型 ID （1.14+） |
| **color**           | -                    | String              | 物品颜色            |
| **glow**            | shiny                | Bool                | 物品是否发光          |
| **enchantments**    | enchantment, enchant | Map                 | 物品附魔属性          |
| **flags**           | flag                 | List                | 物品标签            |
| **unbreakable**     | -                    | Bool                | 物品是否不可破坏        |
| **nbt**             | -                    | Map                 | 物品 NBT 属性       |
| **enhancedLore**    | -                    | Bool                | 是否启用增强 Lore 解析  |
| **slot**            | slots                | (List) Int / String | 指定显示槽位          |

> 特殊材质源属性  
> 以下节点接受值均为 String 字符串类型

| **节点**           | 别称     | 描述                 |
|------------------|--------|-------------------------|
| **head**         | skull  | 自定义头颅材质            |
| **zaphkiel**     | zap    | Zaphkiel 插件支持        |
| **oraxen**       | -      | Oraxen 插件支持          |
| **itemsadder**   | ia     | ItemsAdder 插件支持      |
| **NeigeItems**   | ni     | NeigeItems 插件支持      |
| **craftengine**  | ce     | CraftEngine 插件支持     |
| **headdatabase** | hdb    | HeadDatabase 插件支持    |
| **serialized**   | base64 | Serialized base64 物品  |
| **kether**       | -      | Kether 脚本物品          |

### 交互处理

该节点接受多种类型配置值，后续章节会详细讲解

| **节点**     | 别称                     | 描述   |
|------------|------------------------|------|
| **action** | actions, handler,click | 交互动作 |

### 图标属性

| **节点**                | 别称                | 接受值    | 描述              |
|-----------------------|-------------------|--------|-----------------|
| **id**                | key               | String | 覆写图标 ID         |
| **update**            | -                 | Long   | 图标自动翻译变量周期      |
| **relocate**          | -                 | Long   | 图标自动筛选定位子图标周期   |
| **frames**            | -                 | List   | 动态物品帧           |
| **frames-properties** | frames-prop, prop | Object | 动态物品帧默认设置       |
| **sub**               | -                 | List   | 条件子图标           |