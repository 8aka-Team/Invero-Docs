---
sidebar_position: 6
---

# Interactive Slot Panel

:::warning

The current interactive slot panel is still in **early testing** phase.
There may still be some instability and bugs, please do not use it on production servers.

:::

Interactive slot panels are special panels that enhance interactive item slots.
Using interactive slot panels will disable player inventory overlay & virtual container functions.

## Declaration

In addition to the common attributes of regular panels, the generator panel has an independent configuration node.
Through this node, an interactive slot panel can be declared.

| **Node**     | Accepted Value | Description                 |
|--------------|----------------|-----------------------------|
| **crafting** | Object         | Declare interactive slot panel settings |

## Attributes

The following attributes are all under the `scroll` node:

| **Node**     | Accepted Value | Description                          |
|--------------|----------------|--------------------------------------|
| **listener** | String         | Kether script executed when an item changes |

## Example

### apple->golden_apple

![](/post/example_convert.gif)

- https://github.com/8aka-Team/Invero/blob/main/src/main/resources/default/crafting_apple.yml

### Rubbish Bin

![](/post/rubbish_bin.gif)

- https://www.minebbs.com/resources/.10921
