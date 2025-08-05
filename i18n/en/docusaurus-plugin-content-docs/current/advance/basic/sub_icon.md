---
sidebar_position: 0
---

# Conditional Icons

Conditional icons are an additional property of main icons,  
aimed at more standardized implementation of "displaying icons and executing actions under certain conditions"

The configuration of conditional sub-icons is done under the root node of the **main icon**

| **Node** | Aliases | Description      |
|----------|---------|------------------|
| **sub**  | icons   | Sub-icon list    |

## Sub-icon Properties

In addition to the properties that regular icons have, sub-icons also have additional properties as follows:

| **Node**      | Aliases   | Accepted Values | Description                    |
|---------------|-----------|-----------------|--------------------------------|
| **condition** | if, rule  | String          | Display condition              |
| **inherit**   | -         | Bool            | Whether to inherit parent icon properties |

- `condition` is an essential Kether conditional expression for sub-icons
- `inherit` is enabled by default, reducing some repetitive configuration

```yaml title=Example
'myCustomIcon':
  material: apple
  name: 'Apple'
  sub:
    if: player op
    material: diamond
    name: 'Diamond'
    action: tell Hello
```

In this example with only one sub-icon, the condition is judged when the icon is first rendered

If `player op` is satisfied, i.e., the player is an OP administrator, then display an icon with `diamond` material,  
and support executing the action `tell Hello` when interacted with

If the condition is not satisfied, then display the default icon with `apple` material

## Multi-level Sub-icons

Similarly, write in the sub-icon node, just write each sub-icon in `List` format

```yaml title=Example
rank:
  material: stone
  name: 'Unranked'
  sub:
    - rule: perm "group.vip+"
      material: emerald
      name: 'VIP+'
    - rule: perm "group.vip"
      material: diamond
      name: 'VIP'
```

The judgment order in this example is from front to back, i.e., first judge `VIP+`, then judge `VIP`  
If neither condition is satisfied, then display the default `Unranked`