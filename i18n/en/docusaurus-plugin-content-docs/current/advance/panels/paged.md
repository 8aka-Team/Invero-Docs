---
sidebar_position: 3
---

# Paged Panel

Implementation channel for paged panels.

## Properties

| **Node**         | Accepted Values | Description                        |
|------------------|----------------|------------------------------------|
| **locate**       | String / Int   | Panel positioning (slot syntax)   |
| **layout**       | String / List  | Panel layout                       |
| **scale**        | ListInt        | Scale                              |
| **default-page** | Int            | Default page number                |
| **pages**        | ListPanel      | Paged panels                       |

## Example

```yaml
title: 'Demo'
rows: 3

pageController: &page
  material: arrow
  name: '&aPage Controller'
  lore: |-
    Page: {{page get}} / {{page max}}

    &eLeft next
    &6Right previous
  action:
    left: page next icon by '>' refresh
    right: page previous icon by '>' refresh

pages:
  - layout: |-
      #########
      ---------
      ########>
    items:
      '#':
        material: diamond
      '-':
        material: emerald
      '>':
        <<: *page
  - layout: |-
      ##---####
      ##---####
      ##---###>
    items:
      '#':
        material: gold
      '-':
        material: emerald
      '>':
        <<: *page
  - layout: |-
      ######---
      #########
      ---#####>
    items:
      '#':
        material: leaves
      '-':
        material: emerald
      '>':
        <<: *page
```

![paged_panel](/res/demo_paged_panel.gif)

:::tip
This configuration file uses YAML anchors and references.
If you are unfamiliar with these operations, please refer to the [YAML Tutorial](https://www.runoob.com/w3cnote/yaml-intro.html).
:::

:::info Note
Paged panels currently still have certain limitations and instabilities.

It is not recommended to use paged panels for menus that are functionally and content-wise unrelated.
:::