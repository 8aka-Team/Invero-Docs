---
sidebar_position: 7
---

# 节点引用

配置是在菜单根节点下进行

| **节点**    | 别称            | 描述     |
|-----------|---------------|--------|
| **nodes** | node, scripts | 菜单节点引用 |

引用是通过 Kether 语句实现，可参阅 [节点语句](./kether#节点)

## 创建节点

```yaml
title=示例
nodes:
  customNode:
    type: javascript
    value: |-
      player.getName()
```

如示例配置，创建了一个名为 `customNode` 的节点，其执行 JavaScript 的脚本内容  
返回玩家的名称

在菜单中，以内联变量调用 Kether 语句可引用此节点

```
node customNode
```

## 节点结构

首先了解一个节点的配置结构

| **节点**        | 别称                  | 接受值    | 描述        |
|---------------|---------------------|--------|-----------|
| **type**      | handler             | String | 节点处理器     |
| **value**     | runnable,run,script | String | 节点执行内容    |
| **throwable** | -                   | Bool   | 抛出异常（默认真） |

当下支持的节点处理类型有

| **类型**         | 描述        |
|----------------|-----------|
| **CONST**      | 常量直接返回    |
| **TEXT**       | 翻译变量      |
| **KETHER**     | Kether 语句 |
| **JavaScript** | JS 脚本     |

```yaml
title="CONST 常量类型 简写示例"
nodes:
  constPrice: 200
```

## 引用传参

引用节点时可以传入参数（仅针对 KETHER/JAVASCRIPT 脚本类型节点）

```
node name with <ketherAction>
```

这里的 `<ketherAction>` 即是参数
参数会被自动解析为一个名为 invokeArgs 的集合变量

```yaml 示例
nodes:
  max:
    type: kether
    value: |-
      if check &invokeArgs[0] > &invokeArgs[1] then {
         &invokeArgs[0]
      } else {
