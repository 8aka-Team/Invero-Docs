---
sidebar_position: 2
---

# Conditions

This section introduces how to use Kether as conditions

First, some concepts that need to be clarified:
- Kether statements are composed of "actions"
- Each action has a return value

Direct reference to return values or secondary judgment is the underlying logic of using Kether statements as conditions  
When reading this chapter, it is recommended to open [Kether Repository](https://taboo.8aka.org/kether-list) at the same time to look up some basic actions

## Permission Judgment

Write a Kether expression to judge whether the player has `invero.test` permission  
First query the Permission action in the Kether repository, its description is  
`Use the return value of the action as permission to judge whether the executor has that permission.`

```
permission invero.test
```

Or abbreviated as:
```
perm invero.test
```

## Variable Judgment
Refer to actions like `check`

## Multiple Condition Judgment

Refer to actions like `all`, `any`, `none`