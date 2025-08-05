# Commands

- Enter `invero` or `i` to view the detailed command structure

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

## Opening with Parameters

```yaml
/menu open <menuId> <player> <argument>
```

- `menuId`: Menu ID
- `player`: Player name
- `argument`: Preset menu context parameters
    - `key1=value1;key2=value2` format
    - `{"customArg": "1"}` JsonObject format
