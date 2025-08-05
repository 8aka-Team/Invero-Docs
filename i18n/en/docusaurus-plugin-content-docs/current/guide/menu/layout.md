---
sidebar_position: 4
---

# Layout

Layout is a property of panels that determines the position of icons through the relative arrangement of characters or strings
This reduces tedious operations like calculating rows, columns, and slots, improving efficiency

## Example

```yaml
layout: |-
  #########
  |       |
  |   *   |
  |       |
  #########
```

Icons can use `#`, `|`, `*` as IDs to quickly determine default slots

## String Identifiers

In addition to single character icon ID support, you can also use long strings enclosed in \`   \` to implement layouts  
For example:

```yaml
layout: |-
  ########`Close`

  `Pre`#######`Next`
```

Available icon IDs are `#`, `Close`, `Pre`, `Next`

:::info Note
Layouts that implement icon IDs through strings will reduce intuitiveness to some extent  
And using too many different characters in complex projects will also reduce readability and aesthetics

Therefore, for projects with a large number of different icons, it is still recommended to have some functional icons use traditional slot layouts
:::