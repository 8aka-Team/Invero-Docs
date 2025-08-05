---
sidebar_position: 1
---

# Structure


### Menu Structure

Below is a standard Invero menu structure distribution  
In practical applications, simpler menus do not strictly follow this structure for configuration  

```
myCustomMenuStructure
├─ menu ·················· Menu declaration
│    ├─ type ············· Container type
│    ├─ rows ············· Chest rows
│    ├─ title ············ Container title
│    ├─ virtual ·········· Enable virtual container
│    ├─ hide-player-inventory Hide player inventory
│    └─ option ··········· Other menu options
├─ panels ················ Menu panels
│    └─ standardPanel ···· Example standard panel
│           ├─ icons ····· Icons
│           ├─ layout ···· Layout
│           ├─ locate ···· Location
│           └─ scale ····· Scale
├─ bindings ·············· Menu bindings
├─ events ················ Menu events
├─ nodes ················· Menu nodes
└─ tasks ················· Menu periodic tasks
```

### Panel Concept

Panels can be understood as independent "sub-menus"  
Each has its own independent size (length x width), layout, icons, and functionality  

A menu can have one panel that is the size of the window itself,  
or it can be composed of multiple small panels with independent functions and purposes  

Based on functionality, Invero natively provides the following panels:
- Standard Panel
- Paged Panel
- Generator Panel
- Scroll Panel
- Interactive Slot Panel

:::tip Summary
For complex, multi-functional menu projects, the panel concept can greatly improve configuration management and reuse efficiency  
:::

### Polymorphic Serialization

Almost all configuration nodes in Invero support polymorphic serialization, simply understood as follows:
- Single node with multiple aliases
- Single node with multiple writing methods

For example, when configuring the menu title node, there are two writing methods based on requirements:
```yaml title=Static Title
title: 'My Custom Title'
```

```yaml title=Dynamic Title
title:
  mode: reversable
  period: 20
  values:
  - 'My custom title'
  - 'Reversable'
  - 'Animated title'
```

Another example, when configuring action interactions:

```yaml title=Single Text Kether Statement
action: 'tell Hello_World!'

action: |-
  tell "Hello world!"
  menu title update
  icon by 'headIcon' refresh
```
```yaml title=Single Structure Action
action:
  if: eco has 500
  then: |-
    eco take 500
    tell 'Took 500$ from your account.'
  else: |-
    tell 'You dont have enough balance.'
```
```yaml title=Multiple Actions
action:
  - 'tell Hi'
  - if: eco has 500
    then: |-
      eco take 500
      tell 'Took 500$ from your account.'
    else: |-
      tell 'You dont have enough balance.'
```
The above action writing methods are not exhaustive, and you don't need to understand the meaning of the above actions for now, as subsequent chapters will explain them in detail.

### Single Panel Simplified Syntax

Configuring according to the standard Invero structure requires configuring many nodes
Example as follows:

```yaml
menu:
  title: 'Spawn Menu'
  rows: 5

panel:
  - layout: |-
      #########
      |       |
      |   *   |
      |       |
      #########
    items:
      '#':
        material: gray stained glass pane
      '|':
        material: cyan stained glass pane
      '*':
        material: beacon
        name: '&c&lCLICK TP TO SPAWN'
        action: command spawn
```

Since only a single panel is used in this requirement, we can simplify it to the following form:

```yaml
title: 'Spawn Menu'

layout: |-
  #########
  |       |
  |   *   |
  |       |
  #########

items:
  '#':
    material: gray stained glass pane
  '|':
    material: cyan stained glass pane
  '*':
    material: beacon
    name: '<red><bold>CLICK TP TO SPAWN'
    action: command spawn
```

As you can see, for single-panel menus, all nodes of the panel itself and all nodes of the menu configuration can be moved to the root node  
It is recommended to use the standard configuration structure only when multi-panel, complex menu projects are required

All menu configurations in the `Getting Started` section of this documentation will use the simplified single-panel format

:::tip Did you know?
The underlying design of Icon is also divided into multiple parts such as `display` and `action`  
This documentation will not elaborate on this and will use the simplified form throughout
:::