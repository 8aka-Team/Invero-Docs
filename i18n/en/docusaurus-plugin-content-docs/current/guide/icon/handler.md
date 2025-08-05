---
sidebar_position: 4
---

# Interaction

| **Node**   | Aliases                  | Description        |
|------------|--------------------------|-------------------|
| **action** | actions, handler, click  | Interaction action |

:::tip
The application examples of actions in this section will involve many Kether statements and conditional applications in advance  
If you haven't learned about Kether yet, don't worry, it will be covered in subsequent chapters
:::

## Understanding Actions

Invero natively supports the following types of actions:

- Kether actions
- IF structure actions
- IF_NOT structure actions
- ANY structure actions
- ALL structure actions
- NONE structure actions
- IF structure actions
- CASE & WHEN structure actions
- CATCHER capture function actions

Except for Kether which can be simplified to a single String type, all other actions are Object configuration structures  
The icon's interaction action configuration node accepts:
- String (single Kether action)
- Object (single structure action)
- List String (collection of Kether actions)
- List Object (collection of any actions)

The following provides configuration examples for each type of "action",  
Note that the `action` node here does not necessarily represent the `action` node under the icon

```yaml title="String (Single Kether Action)"
action: |-
  tell "Hello World!"
  menu close
```

```yaml title="Object (Single Structure Action)"
action:
  if: condition
  then: action1
  else: action2
```

```yaml title="List String (Collection of Kether Actions)"
action:
  - |-
    tell "Hello World!"
    sleep 1s
    tell "after 1sec"
  - menu title to "{{second}}"
  - menu title update
```

```yaml title="List Object (Collection of Any Actions)"
action:
  - case: second
    when:
      "> 30": 'tell later'
      "< 10": 'tell pre10'
    else: |-
      tell "second in range [10, 20]"
  - if: conditon
    then: action1
    else: action2
```

For List multiple action collections, they are executed in order,  
If any action's execution value returns false, subsequent action execution is interrupted


### IF Structure Action

```yaml
if: 'condition'
then: { }
else: { }
```

- `if` configures condition string, `then` and `else` both configure Invero actions (supports nesting)
- If `if` condition passes, execute `then` otherwise execute `else`
- `then` and `else` as reaction actions, at least one of them must be configured
- There is also a node named `if_not` with the same structure action

### ANY Structure Action

```yaml
any: [
    'condition 1'
    'condition 2'
    'condition 3'
]
then: {}
else: {}
```

- `any` configures List condition strings, if any one passes then execute `then`, otherwise execute `else`
- Other understanding is the same as IF structure action
- There are also nodes named `all`, `none` with the same structure actions

### CASE & WHEN Structure Action

```yaml
case: 'player name'
when: 
  "= Arasple": 'tell 1'
  "= bukkitObj": 'tell 2'
else: 'tell 3'
```

- `case` configures Kether statement, its returned value is judged and executed through configurations under `when`
- If no node under `when` matches, execute the action under `else`

Judgment operators (where EQUALS can be omitted):

```
GREATER_OR_EQUALS(">=", "≥"),

GREATER(">"),

SMALLER_OR_EQUALS("<=", "≤"),

SMALLER("<"),

EQUALS("=", "=="),

EQUALS_IGNORECASE("~=", "~=="),

CONTAINS_IGNORECASE("~~"),
```

:::tip Why do we need so many structure actions when we have Kether?

Pure Kether application scenarios are script programming-style, with high configuration barriers and low readability  
For example, script implementation:

```yaml
action: |-
  if all [ player op check player level > 30 ] then {
    msg "Condition matched"
  } else {
    msg "Condition failed"
  }
```

Through structure actions it can be written as:

```yaml
action:
  all:
    - player op
    - check player level > 30
  then: |-
    msg "Condition matched"
  else: |-
    msg "Condition failed"
```

In comparison, the latter is clearer and more standardized, with better readability in underlying configuration logic  
In addition, structure actions also provide advanced actions such as **input capture** that are cumbersome and not easy to configure standardly through Kether

Of course, which configuration method to use depends entirely on your own preference
:::

## Declaring Interaction Types

```yaml
action:
  left: 'tell left_action'
  right: 'tell right_action'
  def:
    if_not: condition
    then: 'tell def_action'
```

- Under the `action` node, first configure sub-nodes for interaction types, then configure related actions
- The `def` node is content that will be executed for any click type