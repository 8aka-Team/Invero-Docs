---
sidebar_position: 10
---

# 输入捕获

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
    # 捕获器是一个 JsonObject 的结构动作，类似与配置级的 IF THEN ELSE 那种
    # 捕获完成后会自动重新打开菜单
    #
    action:
      # 捕获的内容会作为变量存在于菜单语境中，这里设置变量名为 custom_tag_sign
      catch: custom_tag_sign
      # 设置 signIndex 表示当前是一个木牌捕获器，捕获第 X 行的内容
      # 写 0 表示捕获第一行的内容，写 -1 表示所有行内容合并
      signIndex: -1
      # (可选) 输入某某关键词会取消当前捕获器
      cancel: [ 'exit', 'cancel' ]
      # (可选) 是否在捕获完成后重新打开菜单
      reopen: true
      # (可选) 捕获器开始前的动作
      beforeInput: |
        tell "&7Please input something"
      # (可选) 捕获到内容之后的动作
      afterInput: |
        tell "&7You input: &e{{&custom_tag_sign}}"
      # (可选) 取消捕获器后的动作
      onCancel: |
        tell "&7You cancelled the input"
      #
      # 如果 afterInput 返回的值为 false，那么会重新执行捕获请求
      # （不会再执行 beforeInput）
      #
      onRepeat: |
        tell "?"
  'Y':
    material: paper
    name: '<green>Chat Input'
    action:
      # 捕获的内容会作为变量存在于菜单语境中，这里设置变量名为 custom_tag_chat
      catch: custom_tag_chat
      # (可选) 输入某某关键词会取消当前捕获器
      cancel: [ 'exit', 'cancel' ]
      # (可选) 是否在捕获完成后重新打开菜单
      reopen: true
      # (可选) 捕获器开始前的动作
      beforeInput: |
        tell "&7Please input something"
      # (可选) 捕获到内容之后的动作
      afterInput: |
        tell "&7You input: &e{{&custom_tag_chat}}"
      # (可选) 取消捕获器后的动作
      onCancel: |
        tell "&7You cancelled the input"
      #
      # 如果 afterInput 返回的值为 false，那么会重新执行捕获请求
      # （不会再执行 beforeInput）
      #
      onRepeat: |
        tell "?"
```
