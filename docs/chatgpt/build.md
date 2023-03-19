---
title: Build
description: How do I build it?
---

## PreInstall

- [Rust (Required)](https://www.rust-lang.org/)
- [Node.js (Required)](https://nodejs.org/)
- [VS Code (Optional)](https://code.visualstudio.com/)
  - [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
  - [tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)

## Start

```bash
# step1:
git clone https://github.com/lencx/ChatGPT.git

# step2:
cd ChatGPT

# step3: install deps
yarn

# step4:
yarn dev

# step5:
# bundle path: src-tauri/target/release/bundle
yarn build
```

- [The distDir configuration is set to "../dist" but this path doesn't exist.](https://github.com/lencx/ChatGPT/discussions/180)
- [Error A public key has been found, but no private key. Make sure to set TAURI_PRIVATE_KEY environment variable.](https://github.com/lencx/ChatGPT/discussions/182)
