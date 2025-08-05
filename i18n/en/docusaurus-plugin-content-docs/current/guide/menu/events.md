---
sidebar_position: 7
---

# Events

```yaml title=Structure
events:
  # Action executed before opening
  pre_open: { }
  # Action executed after opening
  post_open: { }
  # Action executed when closing
  close: { }
```

- If `pre_open` returns `false`, the menu will not open
- The actions configured in these nodes are structural actions and also support multiple writing methods