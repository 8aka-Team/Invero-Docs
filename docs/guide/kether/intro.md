---
sidebar_position: 1
---

# 入门

Invero 使用的脚本系统为 Kether


## 介绍
Kether 是 TabooLib 框架中内置的脚本语言，由 [海螺先生](https://izzel.io/) 创造。  
可以轻松实现诸多功能（如：发送动作栏或标题信息、改变玩家游戏模式、获取变量等等），它还拥有良好的拓展 API，能让其他开发者更加轻松地开发出自己的动作语句。

## 速通

Kether 的语句通常是字符串，其最根本的概念是一个一个的动作

例如
- `literal` 动作，将其后的文本转为字符串使用
- `tell` 动作，将其后跟着的动作作为消息发出去

```
tell literal "Hello World!"
```

得益于宽容解析，我们可以简写为这样
```
tell "Hello World!"
```

到此为止，你已经明白了 Kether 最简单的逻辑  
了解其他更多内置的动作，请访问 [Kether Repository](https://taboo.8aka.org/kether-list)

## 推荐资料

- [Kether 烹饪食用指南](https://www.yuque.com/sacredcraft/kether)
- [插件: Vulpecula](https://www.mcbbs.net/thread-1413432-1-1.html)