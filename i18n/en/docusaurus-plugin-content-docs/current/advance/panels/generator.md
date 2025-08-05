---
sidebar_position: 4
---

# Generator Panel

Generator panel is a special panel that automatically generates many objects according to a unified template and supports pagination viewing

## Declaration

In addition to the common properties of regular panels, generator panels have an independent configuration node  
Through this node, a generator panel can be declared

| **Node**      | Accepted Values | Description                      |
|---------------|-----------------|----------------------------------|
| **generator** | Object          | Declare generator panel settings |

## Properties

The following properties are all under the `generator` node

| **Node**     | Accepted Values | Description                        |
|--------------|----------------|------------------------------------|
| **source**   | String         | Object source (default is CUSTOM) |
| **elements** | ListObject     | Custom object source               |
| **filter**   | String         | Filter script (Kether statement)  |
| **sortBy**   | String         | Sort basis (a key of the object)  |
| **output**   | Icon           | Output icon template               |

## Object Source

First understand the objects of the generator, which are essentially Map\<String,String\> key-value pairs  
This can also be reflected in the configuration

For example, if we need to make a title list, then `title` can be treated as an object  
We give the `title` object two properties `prefix` and `perm`, implemented through custom object source

Configuration as follows:

```yaml
elements:
  - prefix: '[VIP]'
    perm: group.vip
  - prefix: '[SVIP]'
    perm: group.svip
  - prefix: '[MVP]'
    perm: group.mvp
  - prefix: '[MOD]'
    perm: group.mod
```

In addition to custom object sources, the plugin also presets some **dynamic object sources** for common needs as follows:

### PLAYER

> Bukkit server online players

| **Property**  |
|---------------|
| name          |
| displayName   |
| isSneaking    |
| isSprinting   |
| x             |
| y             |
| z             |
| yaw           |
| pitch         |
| address       |

### WORLD

> Bukkit server world list

| **Property**  |
|---------------|
| name          |
| uid           |
| environment   |
| seed          |
| minHeight     |
| maxHeight     |
| allowAnimals  |
| allowMonsters |
| difficulty    |
| time          |

### SOUND

> Bukkit sound name list

| **Property** | **Description** |
|--------------|-----------------|
| name         | Name            |
| ordinal      | Ordinal         |

### MENU

> Invero menu objects loaded into memory

| **Property** | **Description**     |
|--------------|---------------------|
| id           | Identifier          |
| type         | Container type      |
| rows         | Container rows      |
| panels       | Number of panels    |
| virtual      | Is virtual container |

## Property Invocation

In the context of filters or output icons, element properties can be invoked  
Kether statement is:
```element <key>```

For example, for PLAYER object source, to invoke the player's IP address, use `element address`

## Filter

Filter is a Kether conditional expression that returns false to filter out this element
In this expression, you can use the `element` statement to invoke element properties

To filter objects with `rank` property greater than 5, set it to:

```yaml
generator:
  filter: 'check element rank > 5'
```

## Sort Basis

Sort basis is a key name of the object source,  
For example, to sort by player name, set it to:

```yaml
generator:
  sortBy: name
```

## Output Icon

Output icon is written exactly the same as regular icons,  
except that in this icon context you can use `element` to invoke properties belonging to the object

For example, for a player list implemented with player object source, you can set it like this:

```yaml
generator:
  source: player
  output:
    head: '{{element name}}'
    name: '{{element name}}'
    action: |-
      msg "You clicked {{element name}}"
```

## Generation Pool

Generator panels allow using `layout` and `icons` nodes to set default static icons  
Slots not occupied by default icons are the generation pool, where object sources will be arranged in order  

## Examples

### Sound List

> The following is an example of an auto-generated multi-page, filterable & sortable sound preview written with a single YAML file

![](/post/example_sounds.gif)

- https://github.com/8aka-Team/Invero/blob/main/src/main/resources/default/generator_sounds.yml

### TPA Player Selection Menu

> A tpa case that can list all online players on the server and request teleportation

![](https://img.fastmirror.net/s/2024/08/21/66c50f9137702.png)

- https://www.minebbs.com/resources/.9240

### Check-in Menu

> Check-in imitating LiteSignin plugin, with basic check-in and make-up check-in functions

![](https://img.fastmirror.net/s/2024/08/20/66c4779828bc6.png)

- https://www.minebbs.com/resources/.9237