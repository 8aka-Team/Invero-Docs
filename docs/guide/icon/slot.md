---
sidebar_position: 3
---

# 槽位

| **节点**   | 别称    | 描述                  |
|----------|-------|---------------------|
| **slot** | slots | (List) Int / String | 指定显示槽位          |

:::tip 相对槽位
需要注意，Invero 配置中涉及的所有槽位均是相对于 **当前面板** 计算的  
而非整个容器的槽位
:::

## 数字槽位

```yaml title=单个
slots: 0
```

```yaml title=多个
slots:
  - 0
  - 1
  - 2
```

```yaml title=范围
slots:
  - 2..15
  - 1~10
```

## 坐标槽位

```yaml
slots:
  - 0,2
  - 0,4
  - 0x1
  - 0x8
```

> **,** 和 **x** 在此处的作用相同，分割 X/Y  
> X、Y 分别对应横向、纵向坐标

:::note 分隔符
对于字符串槽位，也可以使用 **;** 来分割书写
例如
```yaml
slots: '0;1;2'
```
```yaml
slots: '0..8 ; 9 ; 10 ; 3x6'
```
:::