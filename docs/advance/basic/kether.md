---
sidebar_position: 2
---

# 脚本语句

本节不会阐述 Kether 的相关用法，仅介绍 Invero 基于 Kether 拓展的一些语法和示例

## 发送消息

- 名称：`message`, `msg`
- 描述：向玩家发送一个支持 Invero 相关格式化的消息
- 用法

```
msg "<red>Hello {{player name}}"
```

该语句省去 `tell inline color` 等连锁写法，但相比而言默认需要更多运算

## Vault

- 名称：`money`, `eco`
- 描述：控制 Vault 经济
- 用法

```
money get
money has <action>
money give <action>
money take <action>
money set <action>
```

## PlayerPoints

- 名称：`playerpoints`, `points`
- 描述：控制 PlayerPoints 经济
- 用法

```
points get
points has <action>
points give <action>
points take <action>
points set <action>
```

## 跨服

- 名称：`connect`

```
connect <action>
connect <serverName> for <playerName>
```

## 语境

- 名称：`context`, `ctx`
- 描述：在具有菜单语境（即开启菜单）的情况下，操作菜单语境中的变量数据
- 用法

```
context get <key>
context has <key>
context (no|without) <key>
context (rem|del|delete) <key>
context (inc|increase) <key> by <value>
context (dec|decrease) <key>
context set <key> to <value>
```

## 持久数据

- 名称：`persist`
- 描述：独立于菜单语境操作持久数据

```
persist get <key> by global
persist set <key> to <value> by global

persist get <key> player "PlayerName"
persist set <key> to <value> player "PlayerName"
```

## 菜单

- 名称：`menu`

```
menu title to <text>
menu title pause
menu title resume
menu title update
menu close
menu open <menuId> for [player]
menu open_ctx <menuId> for [player]
```

## 图标

- 名称：`icon`

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

refresh = update（更新变量） + relocate（重定向子图标）

特别地，你可以使用 icons 来操作所有图标，例如：

```
icons update
```

可以用来更新菜单中所有图标

## 翻页
- 名称: `page`
- 语境需有可翻页的面板

```
page isFirst
page isLast
page get
page max
page next (by <value>)
page previous (by <value>)
page set <value>
```

## 滚动
- 名称: `scroll`
- 语境需有可滚动的面板

```
scroll (index|get)
scroll (next|right|down)
scroll (previous|left|up)
scroll reset
```

## 生成器
- 名称: `regenerate`
- 语境需有元素生成器面板

```
regenerate
regenerate filter <filter>
regenerate filter <filter> sort <sortby_key>
```

## 生成器_元素
- 名称: `element`
- 仅限元素生成器模板图标使用

```
element <key>
```

## 元素
- 名称: `element`
- 仅限元素生成器模板图标使用

```
element <key>
```

## 交互槽
- 名称: `storage`
- 仅限可交互面板使用

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

## 节点

- 名称：`node`
- 返回： ANY

```
node <key>
node <key> with <invokeArgs>
```

## 构建物品

- 名称：`item`, `itemstack`
- 返回：ItemStack

```
item <action>
item <action> by <source>
item <action> by <source> amount <amount>
```
