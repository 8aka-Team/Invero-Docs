---
sidebar_position: 2
---

# Creating

In this section, we will demonstrate Invero's basic menu logic by creating a menu named `spawn`  
The requirements are to implement the following functions:
- A 5-row high chest container, decorated with two different colored glass panes around the edges
- A beacon button in the center
- When the button is clicked, the player requests to return to spawn point

---

### Creating the File

First, create a new file with the extension `yml` in the working directory  
and open it with a text editor

```yaml title="workspace/spawn.yml"
# This is an empty file
```

---

### Declaring the Menu

1. Set the menu title
```yaml title="workspace/spawn.yml"
title: 'Spawn'
```

2. Imagine the menu layout and represent it with characters

```yaml title="workspace/spawn.yml"
title: 'Spawn Menu'

layout: |-
  #########
  |       |
  |   *   |
  |       |
  #########
```

:::note Understanding Layout

In the Layout here, we configured 5 rows of strings, each row has 9 characters  
Each character represents an item on a chest slot,
There are three types of characters `#` `|` `*` which are all icons we need to configure later

The actual position of icons in the menu also corresponds one-to-one with the layout characters
:::

3. Configure simple decorative icons

```yaml title="workspace/spawn.yml"
# .. omitted title and layout nodes
items:
  '#':
    material: gray stained glass pane
  '|':
    material: cyan stained glass pane
  '*':
    material: beacon
```

4. Configure the teleport button

```yaml title="workspace/spawn.yml"
# .. omitted previous nodes
  '*':
    material: beacon
    # Configure custom item name
    name: '&c&lCLICK TP TO SPAWN'
    # Click action node
    # Write the action to execute spawn command
    action: command spawn
```

### Viewing the Menu

- After the menu configuration is complete, execute `invero reload` to reload the workspace
- The menu name for the `workspace/spawn.yml` file will be `spawn`,
- We can then execute `invero open spawn` in the game to view this menu

![preview](/res/ui_spanw.png)

:::tip Tip
The concept of `Declaring Menu` in this example has been simplified,  
For details, refer to [Single Panel Simplified Syntax](./structure#single-panel-simplified-syntax)
:::