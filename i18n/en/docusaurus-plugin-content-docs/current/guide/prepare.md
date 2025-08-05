---
sidebar_position: 1
---

# Preparation

## Introduction

Before you start creating GUIs, here's some information you need to know

The menu configuration file types we currently support include:

| **Type**  | Extensions  |
|-----------|-------------|
| **YAML**  | yml, yaml   |
| **HOCON** | conf, hocon |
| **TOML**  | toml        |
| **JSON**  | json        |

In the `Getting Started` section of this documentation, we use **YAML** format to demonstrate related examples
If you're not familiar with the usage of this type of configuration structure, we recommend referring to [here](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)

---

## Editor

Any menu configuration requires a handy text editor
If you don't have a decent text editor yet, or it doesn't support YAML syntax highlighting,
we recommend [VS Code](https://code.visualstudio.com/)

---

## Working Directory

The default working directory is `plugins\Invero\workspace`,
all related menu configurations should be placed in this directory (or its multi-level subdirectories)

Of course, you can also define other working directories through the plugin's configuration

:::info Menu Identifier

By default, the menu identifier (ID) is the filename without the extension
Please note that regardless of whether the working directory is independent, all menu identifiers loaded to the server and working properly should be **unique**
:::


---