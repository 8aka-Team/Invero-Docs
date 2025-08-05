---
sidebar_position: 10
---

# Input Capture

## Example

```yaml
title: Input Catcher

layout: |-
  #########
  #  X Y  #
  #########

items:
  '#':
    material: gray stained glass pane
  'X':
    material: sign
    name: '<gold>Sign Input'
    #
    # Catcher is a JsonObject structure action, similar to configuration-level IF THEN ELSE
    # After capture is completed, the menu will automatically reopen
    #
    action:
      # The captured content will exist as a variable in the menu context, here set variable name as custom_tag_sign
      catch: custom_tag_sign
      # Set signIndex to indicate this is a sign catcher, capturing content from line X
      # Write 0 to capture content from the first line, write -1 to merge all line contents
      signIndex: -1
      # (Optional) Inputting certain keywords will cancel the current catcher
      cancel: [ 'exit', 'cancel' ]
      # (Optional) Whether to reopen the menu after capture is completed
      reopen: true
      # (Optional) Action before catcher starts
      beforeInput: |
        tell "&7Please input something"
      # (Optional) Action after capturing content
      afterInput: |
        tell "&7You input: &e{{&custom_tag_sign}}"
      # (Optional) Action after canceling catcher
      onCancel: |
        tell "&7You cancelled the input"
      #
      # If afterInput returns false, the capture request will be executed again
      # (beforeInput will not be executed again)
      #
      onRepeat: |
        tell "?"
  'Y':
    material: paper
    name: '<green>Chat Input'
    action:
      # The captured content will exist as a variable in the menu context, here set variable name as custom_tag_chat
      catch: custom_tag_chat
      # (Optional) Inputting certain keywords will cancel the current catcher
      cancel: [ 'exit', 'cancel' ]
      # (Optional) Whether to reopen the menu after capture is completed
      reopen: true
      # (Optional) Action before catcher starts
      beforeInput: |
        tell "&7Please input something"
      # (Optional) Action after capturing content
      afterInput: |
        tell "&7You input: &e{{&custom_tag_chat}}"
      # (Optional) Action after canceling catcher
      onCancel: |
        tell "&7You cancelled the input"
      #
      # If afterInput returns false, the capture request will be executed again
      # (beforeInput will not be executed again)
      #
      onRepeat: |
        tell "?"
```

## Multiple Catchers

Using two or more catchers simultaneously

```yaml
items:
  'yizhan':
    head: '{{player name}}'
    name: '&2&l{{player name}}'
    action:
      reopen: false
      catchers:
        - catch: name
          beforeInput: |
            tell "Please enter the player's name"
          afterInput: |
            tell "You entered {{&name}}"
        - catch: amount
          beforeInput: |
            tell "Please enter the amount"
          afterInput: |
            tell "You entered {{&amount}}"
            command "pay {{&name}} {{&amount}}"
```