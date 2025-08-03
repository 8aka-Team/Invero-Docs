---
sidebar_position: 5
---

# 物品动画

动画图标主要通过 `frames` 节点实现, 该节点配置一个 List 集合，集合中的对象即是物品帧
例如

```yaml
'animatedIcon':
  material: stone
  frames:
    - material: stone
    - material: diamond
      last: 20
```

## 物品帧

每个物品帧包含的节点与图标的显示部分相同，如下

| **节点**            | 别称                   | 接受值                 | 描述                   |
|---------------------|----------------------|---------------------|-----------------------------|
| **last**            | delay                | Long                | 物品帧持续的时间             |
| **material**        | texture, mat         | String / Object     | 图标材质（原版或特殊源）      |
| **head**            | skull                | String              | 自定义头颅材质               |
| **zaphkiel**        | zap                  | String              | Zaphkiel 插件支持           |
| **oraxen**          | -                    | String              | Oraxen 插件支持             |
| **itemsadder**      | ia                   | String              | ItemsAdder 插件支持         |
| **NeigeItems**      | ni                   | String              | NeigeItems 插件支持         |
| **craftengine**     | ce                   | String              | CraftEngine 插件支持        |
| **HMCCosmetics**    | hmc                  | String              | HMCCosmetics 插件支持       |
| **SX-Item**         | si                   | String              | SX-Item 插件支持            |
| **MMOItems**        | mi                   | String              | MMOItems 插件支持           |
| **EcoItems**        | eco                  | String              | EcoItems 插件支持           |
| **MagicCosmetics**  | magic                | String              | MagicCosmetics 插件支持     |
| **headdatabase**    | hdb                  | String              | HeadDatabase 插件支持       |
| **serialized**      | base64               | String              | Serialized base64 物品      |
| **kether**          | -                    | String              | Kether 脚本物品             |
| **name**            | -                    | String              | 物品显示名称                |
| **lore**            | lores                | String / List       | 物品显示描述                |
| **amount**          | count, amt           | Int                 | 物品数量                    |
| **damage**          | durability, dur      | Int                 | 物品耐久                    |
| **customModelData** | model                | Int                 | 物品模型 ID （1.14+）       |
| **color**           | -                    | String              | 物品颜色                    |
| **glow**            | shiny                | Bool                | 物品是否发光                |
| **enchantments**    | enchantment, enchant | Map                 | 物品附魔属性                |
| **flags**           | flag                 | List                | 物品标签                    |
| **unbreakable**     | -                    | Bool                | 物品是否不可破坏            |
| **nbt**             | -                    | Map                 | 物品 NBT 属性               |
| **enhancedLore**    | -                    | Bool                | 是否启用增强 Lore 解析      |
| **slot**            | slots                | (List) Int / String | 指定显示槽位                |

新增的节点 `last` 规定该物品帧持续的时间

:::tip
物品帧只需要配置部分属性。当播放到此帧时，物品只会改变该帧配置了的属性  
其余属性都保持不变
:::

## 默认属性

动态帧系统的默认属性通过图标根节点下的 `frames-properties` 属性来设置

| **节点**                | 别称                | 接受值    | 描述        |
|-----------------------|-------------------|--------|-----------|
| **frames-properties** | frames-prop, prop | Object | 动态物品帧默认设置 |

```yaml
frames-prop:
  last: 20
  mode: reversable
```

- `last` 为物品帧默认的持续时间
- `mode` 为播放模式

## 播放模式

| **模式**         | 描述           |
|----------------|------------------|
| **LOOP**       | 顺序循环（默认） |
| **ONE_WAY**    | 单次循环         |
| **REVERSABLE** | 顺逆双循环       |
| **RANDOM**     | 随机抽帧         |

:::tip 你知道吗？
动态标题的播放模式也同这个是一样的配置属性
:::

## 示例

```yaml title=具有动态名称的石头
'animatedStone':
  material: stone
  frames-prop:
    last: 3
    type: reversable
  frames:
    - name: S
    - name: St
    - name: Sto
    - name: Ston
    - name: Stone
```
![animated_stone](/res/demo_animated_stone.gif)

```yaml title=来回跑的彩虹羊毛
'rainbowRunningWool':
  material: white wool
  frames-prop:
    last: 3
    type: reversable
  frames:
    - material: red wool
      slot: 0
    - material: orange wool
      slot: 1
    - material: yellow wool
      slot: 2
    - material: green wool
      slot: 3
    - material: lime wool
      slot: 4
    - material: cyan wool
      slot: 5
    - material: pink wool
      slot: 6
    - material: pink wool
      slot: 7
    - material: gray wool
      slot: 8
```

![animated_wool](/res/demo_animated_wool.gif)

:::tip 时间单位
未经特殊说明的时间单位均为 tick  
`20 ticks` = `1 second`
:::
