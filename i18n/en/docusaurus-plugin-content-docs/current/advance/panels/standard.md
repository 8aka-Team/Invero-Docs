---
sidebar_position: 2
---

# Standard Panel

Standard panel is the most commonly used panel, mainly implementing custom icons & interaction functions

## Properties

| **Node**   | Accepted Values  | Description                    |
|------------|------------------|--------------------------------|
| **locate** | String / Int     | Panel positioning (slot syntax) |
| **layout** | String / List    | Panel layout                   |
| **scale**  | ListInt          | Scale                          |
| **icons**  | Map              | Icons                          |

## Example

```yaml
title: demo

layout:
  - '#########'
  - '#A      #'
  - '#########'

# layout: |-
#   #########
#   #A      #
#   #########

items:
  'A':
    material: stone
```