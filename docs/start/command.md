# 命令

- 输入 `invero` 或 `i` 可查看详细命令结构

```
Usage: /invero
├── dev
│   ├── runKether
│   ├── testComponent
│   ├── printSerailizedMenu
│   ├── printTasks
│   ├── printVariables
│   ├── printSession
│   └── printWindow
├── menu
│    ├── reload
│    ├── list [<filter>]
│    ├── dump <menu>
│    └── open <menu> [<player>] [<arguments>]
├── item
│    ├── encode [<slot>]
│    └── encodePrint [<slot>]
├── gnode
│    ├── list
│    ├── reload
│    ├── info
│    ├── test
│    └── dump <node>
└── update

```

## 传参开启

```yaml
/menu open <menuId> <player> <argument>
```

- `menuId`：菜单 ID
- `player`：玩家名
- `argument`: 预置菜单语境参数
    - `key1=value1;key2=value2` 形式
    - `{"customArg": "1"}` JsonObject 形式
