---
sidebar_position: 8
---

# Periodic Tasks

Configuration is done under the menu root node

| **Node**  | Aliases | Description        |
|-----------|---------|-------------------|
| **tasks** | task    | Menu periodic tasks |

## Task Structure

| **Node**   | Aliases | Accepted Values | Description                      |
|------------|---------|-----------------|----------------------------------|
| **delay**  | -       | Long            | Initial execution delay (default 0) |
| **period** | -       | Long            | Periodic task interval (default disabled) |
| **async**  | -       | Bool            | Whether asynchronous (default true) |
| **run**    | -       | Object / List   | Execution content                |

- If `period` is not specified, the task will only execute once
- The execution content is written the same as `node scripts`

## Creating Tasks

```yaml title=Example
tasks:
  myCustomTask:
    period: 20
    run:
      - type: kether
        value: |-
          tell second
```

## Calling Tasks

Like node references, tasks can also be called secondarily (i.e., can be called outside of periodic execution)
Operation statement:

```
task <id> with [action]
```