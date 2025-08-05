---
sidebar_position: 9
---

# Persistent Variables

Persistent variables are variables that are not limited to **single menu session cycles**,  
Through the use of persistent variables, more powerful menu functions can be implemented

## Global Variables

Variables that are not targeted at a single player and are globally effective
If your Invero is connected to a SQL database, it can also achieve server-wide variable synchronization

Global variables only need to add the prefix `global@` before the variable name, and can be operated like other variables
For example:

```
context get 'global@server_turn'
context set 'global@server_turn' to 'value'
```

## Individual Variables

Independent persistent variables for individual players, also stored in the Invero database
Operation prefix: `player@`

## Independent Operations

Leaving the menu context will make it impossible to control persistent variables through `context` statements,  
You need to use `persist` statements to operate

Persist statement operation objects **do not need to specify prefixes** (`global@` or `player@`),  
You can optionally specify the operation type

```
persist get 'server_turn' by global
persist set 'server_turn' to 'value' by global
```

- `by global` Global variable (default, can be omitted)
- `by PLAYER | <playerId>` Individual variable for specified player