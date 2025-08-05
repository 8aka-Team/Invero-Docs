---
sidebar_position: 7
---

# Node References

Configuration is done under the menu root node

| **Node**  | Aliases       | Description      |
|-----------|---------------|------------------|
| **nodes** | node, scripts | Menu node references |

References are implemented through Kether statements, see [Node Statements](./kether#nodes)

## Creating Nodes

```yaml title=Example
nodes:
  customNode:
    type: javascript
    value: |-
      player.getName()
```

As shown in the example configuration, a node named `customNode` is created that executes JavaScript script content
and returns the player's name

In the menu, you can reference this node by calling Kether statements with inline variables

```
node customNode
```

## Node Structure

First, understand the configuration structure of a node

| **Node**      | Aliases             | Accepted Values | Description                    |
|---------------|---------------------|-----------------|--------------------------------|
| **type**      | handler             | String          | Node handler                   |
| **value**     | runnable,run,script | String          | Node execution content         |
| **throwable** | -                   | Bool            | Throw exceptions (default true) |

Currently supported node handler types are

| **Type**       | Description           |
|----------------|-----------------------|
| **CONST**      | Direct constant return |
| **TEXT**       | Translation variable   |
| **KETHER**     | Kether statement      |
| **JavaScript** | JS script             |

```yaml title="CONST constant type shorthand example"
nodes:
  constPrice: 200
```

## Reference Parameters

Parameters can be passed when referencing nodes (only for KETHER/JAVASCRIPT script type nodes).

```
node name with <ketherAction>
```

Here, `<ketherAction>` is the parameter.
The parameter will be automatically parsed into a collection variable named `invokeArgs`.

```yaml Example
nodes:
  max:
    type: kether
    value: |-
      if check &invokeArgs[0] > &invokeArgs[1] then {
         &invokeArgs[0]
      } else {
         &invokeArgs[1]
      }

items:
  'A':
    material: diamond
    name: '{{ node max with array [ 15 88 ] }}'
```

After calculation, the item's name in the above example will display `88`.

## Global Nodes

:::tip

This feature was added in Invero 1.4.2.

:::

```yaml title=config.yml
# Global Nodes Configuration
GlobalNodes:
  # Enable global nodes feature
  enabled: true
  # Global nodes workspace paths
  paths:
    - 'plugins/Invero/global-nodes'
······
```

In the `global-nodes` folder (default name),
place the node configurations that need to be globalized.
They can then be referenced in all menus.
The usage is exactly the same as the private nodes above.

:::note

Invero provides the [gnode](/docs/start/command.md) subcommand to operate global nodes.

:::
