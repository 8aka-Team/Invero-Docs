---
sidebar_position: 6
---

# Menu Context

Each menu session has an independent context responsible for storing related variables  
Context variable management is implemented through Kether statements

Context variables will become invalid after the menu is closed

## Setting Variables

`context set <key> to <value>`

## Getting Variables

`context get <key>`

In the same Kether script environment, you can also use Kether's native action for getting variables
`&<key>`

## Deleting Variables

`context del <key>`

## Existence Check

```
context has <key>
context (no|without) <key>
```

## Numeric Increment

```
context (inc|increase) <key> by <value>
```

## Numeric Decrement

```
context (dec|decrease) <key>
```

## Meta

v1.1.0+  
Replace `context` with `meta` to operate,  
Understand it as a kind of temporary persistent (disappears after server restart) variable.

## Note

Temporary variables in context are only valid for the current menu session
If you need to operate persistent variables in context, please refer to [Persistent Variables](./persist_data)

Switching menus will reset the context by default. If you need to preserve the current menu's context, please use the `menu open_ctx` statement