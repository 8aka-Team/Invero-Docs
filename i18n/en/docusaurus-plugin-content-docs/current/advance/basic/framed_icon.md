---
sidebar_position: 5
---

# Item Animation

Animated icons are mainly implemented through the `frames` node, which configures a List collection where the objects in the collection are item frames
For example:

```yaml
'animatedIcon':
  material: stone
  frames:
    - material: stone
    - material: diamond
      last: 20
```

## Item Frames

Each item frame contains the same nodes as the display part of icons, as follows:

| **Node**            | Aliases              | Accepted Values     | Description                     |
|---------------------|----------------------|--------------------|---------------------------------|
| **last**            | delay                | Long               | Duration of the item frame      |
| **material**        | texture, mat         | String / Object    | Icon material (vanilla or special source) |
| **head**            | skull                | String             | Custom skull material           |
| **zaphkiel**        | zap                  | String             | Zaphkiel plugin support         |
| **oraxen**          | -                    | String             | Oraxen plugin support           |
| **itemsadder**      | ia                   | String             | ItemsAdder plugin support       |
| **NeigeItems**      | ni                   | String             | NeigeItems plugin support       |
| **craftengine**     | ce                   | String             | CraftEngine plugin support      |
| **HMCCosmetics**    | hmc                  | String             | HMCCosmetics plugin support     |
| **SX-Item**         | si                   | String             | SX-Item plugin support          |
| **MMOItems**        | mi                   | String             | MMOItems plugin support         |
| **EcoItems**        | eco                  | String             | EcoItems plugin support         |
| **MagicCosmetics**  | magic                | String             | MagicCosmetics plugin support   |
| **headdatabase**    | hdb                  | String             | HeadDatabase plugin support     |
| **serialized**      | base64               | String             | Serialized base64 item          |
| **kether**          | -                    | String             | Kether script item              |
| **name**            | -                    | String             | Item display name               |
| **lore**            | lores                | String / List      | Item display description        |
| **amount**          | count, amt           | Int                | Item quantity                   |
| **damage**          | durability, dur      | Int                | Item durability                 |
| **customModelData** | model                | Int                | Item model ID (1.14+)           |
| **color**           | -                    | String             | Item color                      |
| **glow**            | shiny                | Bool               | Whether item glows              |
| **enchantments**    | enchantment, enchant | Map                | Item enchantment properties     |
| **flags**           | flag                 | List               | Item flags                      |
| **unbreakable**     | -                    | Bool               | Whether item is unbreakable     |
| **nbt**             | -                    | Map                | Item NBT properties             |
| **enhancedLore**    | -                    | Bool               | Enable enhanced Lore parsing    |
| **slot**            | slots                | (List) Int / String | Specify display slots           |

The new node `last` specifies the duration of this item frame

:::tip
Item frames only need to configure partial properties. When playing to this frame, the item will only change the properties configured in this frame  
All other properties remain unchanged
:::

## Default Properties

Default properties of the dynamic frame system are set through the `frames-properties` property under the icon root node

| **Node**              | Aliases           | Accepted Values | Description                        |
|-----------------------|-------------------|-----------------|-----------------------------------|
| **frames-properties** | frames-prop, prop | Object          | Dynamic item frame default settings |

```yaml
frames-prop:
  last: 20
  mode: reversable
```

- `last` is the default duration of item frames
- `mode` is the playback mode

## Playback Modes

| **Mode**       | Description              |
|----------------|--------------------------|
| **LOOP**       | Sequential loop (default) |
| **ONE_WAY**    | Single loop              |
| **REVERSABLE** | Forward and reverse loop |
| **RANDOM**     | Random frame selection   |

:::tip Did you know?
The playback mode of dynamic titles also has the same configuration properties
:::

## Examples

```yaml title=Stone with Dynamic Name
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

```yaml title=Rainbow Running Wool
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

:::tip Time Units
Unless otherwise specified, time units are in ticks  
`20 ticks` = `1 second`
:::