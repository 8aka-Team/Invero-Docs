---
sidebar_position: 6
---

# Bindings

```yaml title=Bind Chat Content
bindings:
  chat: 'content'
```

```yaml title=Bind Chat Content
bindings:
  chat:
   - 'content1'
   - 'content2'
```

```yaml title=Bind Chat Command
bindings:
  chat: '/menu'
```

```yaml title=Bind Item Interaction
bindings:
  item: 'minecraft:compass'
```

```yaml title=Bind Shift+F (Swap Offhand)
bindings:
  shift_f: 500
```

```yaml title=Right-click Entity to Open Menu
bindings:
  entity: pig
```

:::info Note
Binding commands through chat does not register the command to the server  
Detailed menu command registration and more complex item feature structures will be explained in the advanced section
:::