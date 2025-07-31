---
sidebar_position: 3
---
# 配置

若插件成功安装，你将会在服务端插件目录下看到一个名为 Invero 的目录，其结构如下

```
Invero
├ config.yml          # 插件配置文件
├ datasource.yml      # 数据库属性设置
├ kether.yml          # Kether 配置文件
│
├ data                # 插件本地数据
│ ├ invero_data.db
│
├ lang                # 语言文件
│ ├ zh_CN.yml
│
└ workspace           # 默认工作空间
   ├ example.yml
```

### 配置文件
```yaml title=config.yml
Kether:
  # 自动翻译变量 | auto translate placeholder
  auto-placeholder-translate: true

# 工作空间
Workspaces:
  # 匹配文件名加载（正则表达式） | filter file name
  filter: '^(?![#!]).*\.(?i)(conf|hocon|yaml|yml|toml|json)$'
  # 自定义工作路径 | custom workspace path
  paths:
    - 'plugins/Invero/workspace'

Menu:
  # 是否默认使用虚拟菜单
  virtual-by-default: false
  # 允许在 Vanilla Inventory 中使用 Raw Title
  # 详见 https://github.com/TabooLib/taboolib/blob/dev/6.2.3/module/bukkit/bukkit-ui/src/main/kotlin/taboolib/module/ui/MenuBuilder.kt#L40
  enable-raw-title-in-vanilla-inventory: false
  
  # 默认物品名称颜色 | default item name color
  default-name-color: "§7"
  # 默认物品描述颜色 | default item lore color
  default-lore-color: "§7"

Database:
  # Local: SQLITE
  # External: SQL, MONGODB
  type: SQLITE
  sql:
    host: localhost
    port: 3306
    user: root
    password: root
    database: test
    table: invero_data

Patch:
  # 允许在 Vanilla Inventory 中使用 Raw Title
  # 详见 https://github.com/TabooLib/taboolib/blob/dev/6.2.3/module/bukkit/bukkit-ui/src/main/kotlin/taboolib/module/ui/MenuBuilder.kt#L40
  enable-raw-title-in-vanilla-inventory: false

# 更新检查设置 | update check
update-checker:
  # 是否启用更新检查 | enable update check?
  enabled: true
  # 检查频率（天） | check interval (days)
  check-interval-days: 1

Paste:
  # 支持 | support: pastegg, lucko, pastebin
  service-type: lucko

  services:
    pastegg:
      base-url: https://api.paste.gg/v1
    
    lucko:
      base-url: https://api.pastes.dev
 
    pastebin:
      base-url: https://pastebin.com/api/api_post.php
      dev-key: PD5qZ5fXHr-rG4Xpl-nM-BDXmkUod_C8
```
