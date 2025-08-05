---
sidebar_position: 1
---

# Getting Started

Invero uses the Kether scripting system


## Introduction
Kether is a scripting language built into the TabooLib framework, created by [Mr. Conch](https://izzel.io/).  
It can easily implement many functions (such as: sending action bar or title messages, changing player game mode, getting variables, etc.), and it also has a good extension API that allows other developers to more easily develop their own action statements.

## Quick Start

Kether statements are usually strings, and the most fundamental concept is actions one by one

For example:
- `literal` action, converts the following text into a string for use
- `tell` action, sends the following action as a message

```
tell literal "Hello World!"
```

Thanks to tolerant parsing, we can simplify it like this:
```
tell "Hello World!"
```

So far, you have understood the simplest logic of Kether  
To learn about other built-in actions, please visit [Kether Repository](https://taboo.8aka.org/kether-list)

## Recommended Resources

- [Kether Cooking Guide](https://www.yuque.com/sacredcraft/kether)
- [Plugin: Vulpecula](https://www.mcbbs.net/thread-1413432-1-1.html)