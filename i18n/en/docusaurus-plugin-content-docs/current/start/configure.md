---
sidebar_position: 3
---
# Configuration

If the plugin is successfully installed, you will see a directory named Invero in your server's plugins directory with the following structure:

```
Invero
├ config.yml          # Plugin configuration file
├ datasource.yml      # Database properties settings
├ kether.yml          # Kether configuration file
│
├ data                # Plugin local data
│ ├ invero_data.db
│
├ lang                # Language files
│ ├ zh_CN.yml
│
└ workspace           # Default workspace
   ├ example.yml
```

### Configuration File
```yaml title=config.yml
Kether:
  # Auto translate placeholder | auto translate placeholder
  auto-placeholder-translate: true

# Workspaces
Workspaces:
  # Filter file name loading (regular expression) | filter file name
  filter: '^(?![#!]).*\.(?i)(conf|hocon|yaml|yml|toml|json)$'
  # Custom workspace path | custom workspace path
  paths:
    - 'plugins/Invero/workspace'

# Global Nodes Configuration | Global Nodes Configuration
GlobalNodes:
  # Enable global nodes feature | Enable global nodes feature
  enabled: true
  # Global nodes workspace paths | Global nodes workspace paths
  paths:
    - 'plugins/Invero/global-nodes'
  # Filter file name loading (regular expression) | filter file name
  filter: '^(?![#!]).*\.(?i)(conf|hocon|yaml|yml|toml|json)$'
  # Node lookup priority | Node lookup priority
  # menu-first: Search menu local nodes first, then global nodes
  # global-first: Search global nodes first, then menu local nodes
  priority: menu-first

Menu:
  # Use virtual menu by default
  virtual-by-default: false
  # Allow Raw Title in Vanilla Inventory
  # See https://github.com/TabooLib/taboolib/blob/dev/6.2.3/module/bukkit/bukkit-ui/src/main/kotlin/taboolib/module/ui/MenuBuilder.kt#L40
  enable-raw-title-in-vanilla-inventory: false

  # Default item name color | default item name color
  default-name-color: "§7"
  # Default item lore color | default item lore color
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
  # Allow Raw Title in Vanilla Inventory
  # See https://github.com/TabooLib/taboolib/blob/dev/6.2.3/module/bukkit/bukkit-ui/src/main/kotlin/taboolib/module/ui/MenuBuilder.kt#L40
  enable-raw-title-in-vanilla-inventory: false

# Update check settings | update check
update-checker:
  # Enable update check | enable update check?
  enabled: true
  # Check interval (days) | check interval (days)
  check-interval-days: 1

Paste:
  # Support | support: pastegg, lucko, pastebin
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
