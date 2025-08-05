---
sidebar_position: 5
---

# Scroll Panel

Scroll panels are special panels that display configured icon columns in sequence, supporting vertical and horizontal scrolling to view more content.

## Declaration

In addition to the common properties of regular panels, generator panels have an independent configuration node.
Through this node, a scroll panel can be declared.

| **Node**     | Accepted Value | Description                 |
|--------------|----------------|-----------------------------|
| **scroll**   | Object         | Declare scroll panel settings |

## Properties

The following properties are all under the `scroll` node:

| **Node**        | Accepted Value | Description                  |
|-----------------|----------------|------------------------------|
| **direction**   | String         | Scroll direction (default is HORIZONTAL) |
| **tail**        | Int            | Tail behavior                |
| **colums**      | List           | Scroll columns               |

- `direction` available values:
    - `horizontal` horizontal
    - `vertical` vertical
- `tail` determines how scrolling ends:
    - `tail = 0` stops at the last column (no blank display)
    - `tail > 0` displays `tail+1` blank columns
    - `tail < 0` loops seamlessly
- `colums` configures scroll column elements

## Scroll Window

You need to define the scroll window using `Layout`, by leaving a blank rectangle in the Layout.

For example, with the configuration:

```yaml
layout: |-
  <       >
```

The scroll window will be a `7x1` window located at `[1, 0]`.
The size of the scroll window and the scroll direction will determine the upper limit of element column configuration.

### Horizontal Scrolling

For horizontally scrolling windows, each scroll column should include `scroll window height` elements.
For example, for a `7x5` window, each column should include at most `5` elements, and the elements in each column are arranged from top to bottom.

### Vertical Scrolling

For vertically scrolling windows, each scroll column should include `scroll window width` elements.
For example, for a `9x6` window, each column should include at most `9` elements, and the elements in each column are arranged from left to right.

## Scroll Columns

There is no upper limit to the number of scroll columns in a scroll window.
However, the number of elements in each scroll column is limited by the direction distribution.

For example, for a horizontally scrolling panel:

```yaml
layout: |-
  <       >
```

Its scroll window size is `7x1`, and the upper limit for a single column is `1` element.
It can be configured as follows:

```yaml
scroll:
  direction: horizontal
  tail: -1
  colums:
    - [ material: apple ]
    - [ material: golden_apple ]
    - [ material: enchanted golden apple ]
    - [ material: melon slice ]
    - [ material: sweet berries ]
    - [ material: glow berries ]
    - [ material: chorus fruit ]
    - [ material: carrot ]
    - [ material: golden carrot ]
    - [ material: potato ]
    - [ material: baked potato ]
    - [ material: poisonous potato ]
    - [ material: beetroot ]
    - [ material: dried kelp ]
    - [ material: raw beef ]
    - [ material: steak ]
    - [ material: raw porkchop ]
    - [ material: cooked porkchop ]
```

Also allowed to be simplified as

```yaml
scroll:
  direction: horizontal
  tail: -1
  colums:
    - material: apple
    - material: golden_apple
    - material: enchanted golden apple
    - material: melon slice
    - material: sweet berries
    - material: glow berries
    - material: chorus fruit
    - material: carrot
    - material: golden carrot
    - material: potato
    - material: baked potato
    - material: poisonous potato
    - material: beetroot
    - material: dried kelp
    - material: raw beef
    - material: steak
    - material: raw porkchop
    - material: cooked porkchop
```

![scroll_panel](/res/demo_scroll.gif)
