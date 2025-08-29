---
sidebar_position: 9
---

# 持久变量

持久变量是不局限于**单一菜单会话周期**的变量，  
通过对持久变量的使用，可以实现更强大的菜单功能

## 全局变量

不针对单一玩家，全局有效的变量
如果你的 Invero 连接到 SQL 数据库，亦可实现全服变量同步

全局变量只需在变量名前加上前缀 `global@`，即可同其他变量一样操作
例如

```
context get 'global@server_turn'
context set 'global@server_turn' to 'value'
```

## 个体变量

单一个体玩家的独立持久变量，也是存储在 Inveor 数据库中
操作前缀：`player@`

## 独立操作

离开了菜单语境将无法通过 `context` 语句来操控持久变量，  
需要使用 `persist` 语句来操作

Persist 语句的操作对象**不需要指明前缀**（`global@` 或 `player@`），  
可选指明操作类型

```
persist get 'server_turn' by global
persist set 'server_turn' to 'value' by global
```

- `by global` 全局变量（默认，可以不写）
- `by PLAYER | <playerId>` 指定玩家的个体变量