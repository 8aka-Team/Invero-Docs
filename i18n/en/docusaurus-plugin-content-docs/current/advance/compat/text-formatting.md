---
sidebar_position: 2
---

# Text Formatting

In container GUI properties and related item display properties, as well as language output in scripts
Invero supports certain text formatting processing methods

In order of processing sequence, they are:

### Kether Inline

- Script inline functions
- `{{identifier}}`

### Placeholder API

- `%invero_data_global_<key>%`
- `%invero_data_player_<key>%`

### MiniMessage

- This feature only works when your **server** contains the new version of MiniMessage (Paper 1.16.5+)
- Refer to documentation [MiniMessage Format](https://docs.adventure.kyori.net/minimessage/format.html#standard-tags)

### Inline Composite Text

- https://plugins.ptms.ink/function/components/basic
