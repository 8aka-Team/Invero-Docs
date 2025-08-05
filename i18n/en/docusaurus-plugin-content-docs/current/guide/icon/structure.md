---
sidebar_position: 1
---

# Structure

## Introduction

Icon configuration properties are widely used,  
The parent can be a standard element panel or serve as a template icon for a generator

Usually, the icon configuration structure is a key-value pair configured under the panel `icons | items` node  
The key serves as the icon ID, and the value is an object containing the icon's related properties

For example, an icon:
```yaml
'myCustomIcon':
  material: apple
  name: 'Custom Apple'
  lore: |-
    Description 1
    Description 2
```

- `myCustomIcon` is the ID of this icon
- `material`, `name`, `lore`, etc. are all properties of the icon

## Root Nodes

The following lists the nodes available for icon configuration  
Please note that except for declaring the material of the root node which is necessary, all other nodes are optional  

### Display Properties

> Common display properties  

| **Node**            | Aliases              | Accepted Values     | Description                    |
|---------------------|----------------------|---------------------|--------------------------------|
| **material**        | texture, mat         | String / Object     | Icon material (vanilla or special source) |
| **name**            | -                    | String              | Item display name              |
| **lore**            | lores                | String / List       | Item display description       |
| **amount**          | count, amt           | Int                 | Item quantity                  |
| **damage**          | durability, dur      | Int                 | Item durability                |
| **customModelData** | model                | Int                 | Item model ID (1.14+)          |
| **color**           | -                    | String              | Item color                     |
| **glow**            | shiny                | Bool                | Whether item glows             |
| **enchantments**    | enchantment, enchant | Map                 | Item enchantment properties    |
| **flags**           | flag                 | List                | Item flags                     |
| **unbreakable**     | -                    | Bool                | Whether item is unbreakable    |
| **nbt**             | -                    | Map                 | Item NBT properties            |
| **enhancedLore**    | -                    | Bool                | Enable enhanced Lore parsing   |
| **slot**            | slots                | (List) Int / String | Specify display slot           |

> Special material source properties  
> All nodes below accept String type values

| **Node**           | Aliases | Description                 |
|------------------|---------|------------------------------|
| **head**         | skull   | Custom skull material        |
| **AzureFlow**    | af      | AzureFlow plugin support     |
| **craftengine**  | ce      | CraftEngine plugin support   |
| **EcoItems**     | eco     | EcoItems plugin support      |
| **HeadDatabase** | hdb     | HeadDatabase plugin support  |
| **HMCCosmetics** | hmc     | HMCCosmetics plugin support  |
| **itemsadder**   | ia      | ItemsAdder plugin support    |
| **MagicCosmetics** | magic | MagicCosmetics plugin support |
| **MagicGem**     | gem     | MagicGem plugin support      |
| **MMOItems**     | mi      | MMOItems plugin support      |
| **NeigeItems**   | ni      | NeigeItems plugin support    |
| **Nexo**         | -       | Nexo plugin support          |
| **oraxen**       | -       | Oraxen plugin support        |
| **ratziel**      | -       | Ratziel plugin support       |
| **SX-Item**      | si      | SX-Item plugin support       |
| **Slimefun**     | sf      | Slimefun plugin support      |
| **zaphkiel**     | zap     | Zaphkiel plugin support      |
| **serialized**   | base64  | Serialized base64 item       |
| **kether**       | -       | Kether script item           |

### Interaction Handling

This node accepts multiple types of configuration values, which will be explained in detail in subsequent chapters

| **Node**   | Aliases                  | Description        |
|------------|--------------------------|-------------------|
| **action** | actions, handler, click  | Interaction action |

### Icon Properties

| **Node**              | Aliases           | Accepted Values | Description                        |
|-----------------------|-------------------|-----------------|-----------------------------------|
| **id**                | key               | String          | Override icon ID                  |
| **update**            | -                 | Long            | Icon auto-translate variable cycle |
| **relocate**          | -                 | Long            | Icon auto-filter locate sub-icon cycle |
| **frames**            | -                 | List            | Dynamic item frames               |
| **frames-properties** | frames-prop, prop | Object          | Dynamic item frame default settings |
| **sub**               | -                 | List            | Conditional sub-icons             |