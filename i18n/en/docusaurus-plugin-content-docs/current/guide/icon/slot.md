---
sidebar_position: 3
---

# Slots

| **Node** | Aliases | Accepted Values     | Description           |
|----------|---------|--------------------|-----------------------|
| **slot** | slots   | (List) Int / String | Specify display slots |

:::tip Relative Slots
Note that all slots involved in Invero configuration are calculated relative to the **current panel**  
Not the slots of the entire container
:::

## Numeric Slots

```yaml title=Single
slots: 0
```

```yaml title=Multiple
slots:
  - 0
  - 1
  - 2
```

```yaml title=Range
slots:
  - 2..15
  - 1~10
```

## Coordinate Slots

```yaml
slots:
  - 0,2
  - 0,4
  - 0x1
  - 0x8
```

> **,** and **x** have the same function here, separating X/Y  
> X and Y correspond to horizontal and vertical coordinates respectively

:::note Separators
For string slots, you can also use **;** to separate writing
For example:
```yaml
slots: '0;1;2'
```
```yaml
slots: '0..8 ; 9 ; 10 ; 3x6'
```
:::