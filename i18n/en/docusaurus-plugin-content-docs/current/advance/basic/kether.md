---
sidebar_position: 2
---

# Script Statements

This section does not explain the general usage of Kether, but only introduces some syntax and examples extended by Invero based on Kether.

If you want to [execute commands](https://taboo.8aka.cn/kether-list?action=command) / [show titles](https://taboo.8aka.cn/kether-list?action=title) / [play sounds](https://taboo.8aka.cn/kether-list?action=sound), etc., please refer to [Kether List](https://taboo.8aka.cn/kether-list).

## Send Message

- Name: `message`, `msg`
- Description: Sends a message to the player that supports Invero-related formatting.
- Usage

```
msg "<red>Hello {{player name}}"
```

This statement omits chained writing like `tell inline color`, but requires more computation by default.

## Vault

- Name: `money`, `eco`
- Description: Controls Vault economy
- Usage

```
money get
money has <action>
money give <action>
money take <action>
money set <action>
```

## PlayerPoints

- Name: `playerpoints`, `points`
- Description: Controls PlayerPoints economy
- Usage

```
points get
points has <action>
points give <action>
points take <action>
points set <action>
```

## Cross-Server

- Name: `connect`

```
connect <action>
connect <serverName> for <playerName>
```

## Dependency

- Name: `depend`
- Description: Checks if the server has the specified dependency.
- Returns: true/false
- Usage

```
depend plugin <action>
depend papi <action>
```

## Maximum Value

- Name: `max`
- Description: Gets the maximum of two or more values.
- Returns: Integer/Float
- Usage

```
max {aciton} {action}
max [ {action} {action} {action} ]
```

## Minimum Value

- Name: `min`
- Description: Gets the minimum of two or more values.
- Returns: Integer/Float
- Usage

```
min {aciton} {action}
min [ {action} {action} {action} ]
```

## Context

- Name: `context`, `ctx`
- Description: Operates on variable data within the menu context when a menu context is present (i.e., a menu is open).
- Usage

```
context get <key>
context has <key>
context (no|without) <key>
context (rem|del|delete) <key>
context (inc|increase) <key> by <value>
context (dec|decrease) <key>
context set <key> to <value>
```

## Persistent Data

- Name: `persist`
- Description: Operates on persistent data independently of the menu context.

```
persist get <key> by global
persist set <key> to <value> by global

persist get <key> player "PlayerName"
persist set <key> to <value> player "PlayerName"
```

## Menu

- Name: `menu`

```
menu title to <text>
menu title pause
menu title resume
menu title update
menu close
menu open <menuId> for [player]
menu open_ctx <menuId> for [player]
```

## Icon

- Name: `icon`

```
icon (by <id> | at <slot>) <operator>
```

```yml title=operator
relocate
update
refresh
index | sub_index
pause_update
pause_relocate
pause_frames
resume_update
resume_relocate
resume_frames
```

refresh = update (update variables) + relocate (redirect sub-icons)

Specifically, you can use `icons` to operate on all icons, for example:

```
icons update
```

Can be used to update all icons in the menu.

## Paging
- Name: `page`
- Requires a pageable panel in context.

```
page isFirst
page isLast
page get
page max
page next (by <value>)
page previous (by <value>)
page set <value>
```

## Scrolling
- Name: `scroll`
- Requires a scrollable panel in context.

```
scroll (index|get)
scroll (next|right|down)
scroll (previous|left|up)
scroll reset
```

## Generator
- Name: `regenerate`
- Requires an element generator panel in context.

```
regenerate
regenerate filter <filter>
regenerate filter <filter> sort <sortby_key>
```

## Generator Element
- Name: `element`
- Only for use in element generator template icons

```
element <key>
```

## Element
- Name: `element`
- Only for use in element generator template icons

```
element <key>
```

## Interactive Slot
- Name: `storage`
- Only for use in interactive panels

```
storage at <slot> exist
storage at <slot> empty
storage at <slot> delete
storage at <slot> get
storage at <slot> set to <value>
storage at <slot> isLocked
storage at <slot> free
storage at <slot> lock
```

## Node

- Name: `node`
- Returns: ANY

```
node <key>
node <key> with <invokeArgs>
```

## Build Item

- Name: `item`, `itemstack`
- Returns: ItemStack

```
item <action>
item <action> by <source>
item <action> by <source> amount <amount>
```