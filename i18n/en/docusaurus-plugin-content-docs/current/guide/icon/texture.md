---
sidebar_position: 2
---

# Texture

| **Node**            | Aliases              | Accepted Values | Description                    |
|---------------------|----------------------|-----------------|--------------------------------|
| **material**        | texture, mat         | String / Object | Icon material (vanilla or special source) |

### Vanilla Materials

> High version item names  

```yaml
material: red stained glass pane
```

> Low version numeric ID - DATA

```yaml
material: '35:3'
```

:::tip Material Tolerance
In Invero's vanilla material syntax, we ignore case, underscores and automatically find the material with the highest similarity  
Therefore you can simply write `red stained glass pane` or fully spell out `RED_STAINED_GLASS_PANE`
:::

### Skull Textures

With icon structure as root node, skull textures can be configured as follows:

```yaml title=Standard Syntax
texture:
  head: '<skull identifier>'
```

```yaml title=Simplified Syntax
head: '<skull identifier>'
```

This is also a manifestation of polymorphic serialization. Subsequent introductions to other types of materials will directly use the simplified syntax  
For skull identifiers, we support automatic detection and application of the following multiple types:

- Custom texture (base64): `eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDRmNDUyZDk5OGVhYmFjNDY0MmM2YjBmZTVhOGY0ZTJlNjczZWRjYWUyYTZkZmQ5ZTZhMmU4NmU3ODZlZGFjMCJ9fX0=`
- Custom texture (URL-hash): `44f452d998eabac4642c6b0fe5a8f4e2e673edcae2a6dfd9e6a2e86e786edac0`
- Player name: `Arasple`
- Variable: `{{player name}}`


:::info Note
For online players, the plugin will get the skin texture actually applied by their player profile  
For offline players, it defaults to requesting the genuine player skin texture of this ID  
The application logic of variable identifiers is to parse the return value of the variable, re-determine the texture type and then apply it
:::

### Item Sources

> Support for third-party plugins  

| **Node**           | Aliases | Description                 |
|------------------|---------|------------------------------|
| **AzureFlow**    | af      | AzureFlow plugin support     |
| **craftengine**  | ce      | CraftEngine plugin support   |
| **ecoItems**     | eco     | EcoItems plugin support      |
| **hmccosmetics** | hmc     | HMCCosmetics plugin support  |
| **itemsadder**   | ia      | ItemsAdder plugin support    |
| **magiccosmetics** | magic | MagicCosmetics plugin support |
| **magicgem**     | gem     | MagicGem plugin support      |
| **mmoitems**     | mi      | MMOItems plugin support      |
| **NeigeItems**   | ni      | NeigeItems plugin support    |
| **nexo**         | -       | Nexo plugin support          |
| **oraxen**       | -       | Oraxen plugin support        |
| **ratziel**      | -       | Ratziel plugin support       |
| **sxitem**       | si      | SX-Item plugin support       |
| **slimefun**     | sf      | Slimefun plugin support      |
| **zaphkiel**     | zap     | Zaphkiel plugin support      |
| **headdatabase** | hdb     | HeadDatabase plugin support  |

Examples:

- AzureFlow

```yaml
azureflow: custom_item
af: custom_item
```

- CraftEngine

```yaml
craftengine: namespace:custom_item
ce: namespace:custom_item
```

- EcoItems

```yaml
ecoitems: custom_item
eco: custom_item
```

- HeadDatabase

```yaml
headdatabase: custom_item
hdb: custom_item
```

- HMCCosmetics

```yaml
hmccosmetics: custom_item
hmc: custom_item
```

- ItemsAdder

```yaml
itemsadder: namespace:custom_item
ia: namespace:custom_item
```

- MagicCosmetics

```yaml
magiccosmetics: custom_item
magic: custom_item
magiccosmetics: equipped:HAT # Cosmetic for a specific part (hat in this case)
magic: equipped:HAT
```

- MagicGem

```yaml
magicgem: custom_item
gem: custom_item
```

- MMOItems

```yaml
mmoitems: namespace:custom_item
mi: namespace:custom_item
```

- NeigeItems

```yaml
title: 'NI Item Test'

layout: '    *    '

items:
  '*':
    texture:
      source: ni
      value: ExampleItem
```

The source: ni can also be written as source: neigeitems, no difference  
value: followed by item ID, can also add pointing data, such as `value: ExampleItem {"test1":"test1","test2":"test2"}`  
Item ID first checks NI items, if not found it will try to get MM items

- oraxen

```yaml
oraxen: custom_item
```

- SX-Item

```yaml
sxitem: custom_item
si: custom_item
```

- Slimefun

```yaml
slimefun: custom_item
sf: custom_item
```

- zaphkiel

```yaml
zaphkiel: custom_item
zap: custom_item
```

> Support for serialized items

| **Node**       | Aliases      | Description              |
|----------------|--------------|--------------------------|
| **serialized** | base64, json | base64 / json format item |

> Support for Kether script items

| **Node**   | Aliases | Description        |
|------------|---------|-------------------|
| **kether** | -       | Kether script item |

TODO_ DETAILED EXAMPLE