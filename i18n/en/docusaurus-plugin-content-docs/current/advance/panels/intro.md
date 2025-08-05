---
sidebar_position: 1
---

# Overview

The concept of panels has been explained in the menu structure,  
You can understand them as "rectangular small menus", and different types of panels have unique functional implementations.

## Common Properties

Panels have some common properties, explained as follows:

| **Node**   | Accepted Values | Description                        |
|------------|----------------|------------------------------------|
| **locate** | String / Int   | Panel positioning (slot syntax)   |
| **layout** | String / List  | Panel layout                       |
| **scale**  | ListInt        | Scale                              |
| **icons**  | Map            | Icons                              |

- `locate` determines the panel's position (the position of the first icon in the top-left corner). If not defined, it will be arranged automatically in order.
- At least one of `layout` or `scale` must be configured to determine the panel's size.
- `icons` are not required for all panels, such as paged nested panels.

## Panel Size

For regular panels, configuring Layout can define the size simultaneously.
For cases where Layout is not used or a specific panel size is required (e.g., multi-page panels),

You can configure the size in the following format:

```yaml
# 9 x 4
scale: [ 9, 4 ]
```