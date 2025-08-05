---
sidebar_position: 4
---

# Command Building

## Basics

Register server commands under the menu's binding structure

```yaml title=Simple Command Registration
bindings:
  command: 'myExampleCommand'
```

```yaml title=Some Basic Properties
bindings:
  command:
    name: 'myExampleCommand'
    aliases:
    - example
    description: 'command description'
    permission: 'command permission'
    permissionMessage: 'no perm'
    usage: 'usage info'
```

Available nodes are as follows:

| **Node**              | Accepted Values | Description           |
|-----------------------|----------------|-----------------------|
| **name**              | String         | Command name          |
| **aliases**           | String/List    | Command aliases       |
| **description**       | String         | Command description   |
| **usage**             | String         | Usage hint            |
| **permission**        | String         | Command permission    |
| **permissionMessage** | String         | Permission message    |
| **arguments**         | List           | Arguments             |

---

## Simple Arguments

```yaml title=Example
bindings:
  command:
    name: 'myExampleCommand'
    args:
    - 'customArg1'
    - 'customArg2'
```

- To open the menu through this command, two arguments must be provided.
- Both arguments are automatically registered as variables in the menu context (customArg1, customArg2)

:::tip Using Passed Arguments in Menu
Use Kether statement `context` to access these two automatically registered variables, i.e.  
`context get customArg1`  
`context get customArg2`
:::

## Advanced Arguments

```yaml title=Example
bindings:
 command:
   name: 'sounds'
   argument:
   - label: filter
     type: ANY
     restrict: false
     optional: true
     default: value
     suggest:
     - ambient
     - block
     - enchant
     - entity
     - event
     - item
     - music
     - particle
     - ui
     - weather
```

Available nodes for argument objects are as follows:

| **Node**             | Accepted Values | Description                                    |
|----------------------|----------------|------------------------------------------------|
| **label**            | String         | Argument name                                  |
| **type**             | String         | Argument type                                  |
| **restrict**         | Bool           | Whether to restrict argument content to completion options (default false) |
| **optional**         | Bool           | Whether optional (default true)               |
| **default**          | Any            | Default argument value                         |
| **suggest**          | List           | Custom completion suggestion content           |
| **incorrectMessage** | String         | Error message for incorrect arguments          |

- `label` serves as the argument identifier and is also the variable name registered in the menu context
- `type` provides multiple types by default, including auto-completion content

| **Type**    | Description        |
|-------------|-------------------|
| **ANY**     | Any               |
| **DECIMAL** | Number            |
| **INTEGER** | Integer           |
| **BOOLEAN** | Boolean           |
| **PLAYER**  | Online player name |
| **WORLD**   | World name        |