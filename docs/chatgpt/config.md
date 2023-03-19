---
title: Config
description: Application Configuration
---

## ⚙️ Application Configuration

| Platform | Path                      |
| -------- | ------------------------- |
| Linux    | `/home/lencx/.chatgpt`    |
| macOS    | `/Users/lencx/.chatgpt`   |
| Windows  | `C:\Users\lencx\.chatgpt` |

- `[.chatgpt]` - Application configuration root folder
  - `chat.conf.json` - Preferences configuration
  - `chat.awesome.json` - Custom URL lists, similar to browser bookmarks. Any URL can be used as the main window or tray window (**Control Center -> Awesome**)
  - `chat.model.json` - prompts configuration，contains three parts:
    - `user_custom` - Requires manual data entry (**Control Center -> Language Model -> User Custom**)
    - `sync_prompts` - Synchronizing data from [f/awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts) (**Control Center -> Language Model -> Sync Prompts**)
    - `sync_custom` - Synchronize custom json and csv file data, support local and remote (**Control Center -> Language Model -> Sync Custom**)
  - `chat.model.cmd.json` - Filtered (whether to enable) and sorted slash commands
  - `[cache_model]` - Caching model data
    - `chatgpt_prompts.json` - Cache `sync_prompts` data
    - `user_custom.json` - Cache `user_custom` data
    - `ae6cf32a6f8541b499d6bfe549dbfca3.json` - Randomly generated file names, cache `sync_custom` data
    - `4f695d3cfbf8491e9b1f3fab6d85715c.json` - Randomly generated file names, cache `sync_custom` data
    - `bd1b96f15a1644f7bd647cc53073ff8f.json` - Randomly generated file names, cache `sync_custom` data

### Sync Custom

Currently, only JSON and CSV are supported for synchronizing custom files, and the following formats need to be met, otherwise the application will be abnormal：

`JSON format:`

```json
[
  {
    "cmd": "a",
    "act": "aa",
    "prompt": "aaa aaa aaa"
  },
  {
    "cmd": "b",
    "act": "bb",
    "prompt": "bbb bbb bbb"
  }
]
```

`CSV format`

```csv
"cmd","act","prompt"
"a","aa","aaa aaa aaa"
"b","bb","bbb bbb bbb"
```
