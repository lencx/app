---
title: "Installation"
---

## Windows

- [ChatGPT_0.10.3_x64_en-US.msi](https://github.com/lencx/ChatGPT/releases/download/v0.10.3/ChatGPT_0.10.3_x64_en-US.msi): Direct download installer
- Use [winget](https://winstall.app/apps/lencx.ChatGPT):

  ```bash
  # install the latest version
  winget install --id=lencx.ChatGPT -e

  # install the specified version
  winget install --id=lencx.ChatGPT -e --version 0.10.0
  ```

:::caution
If the installation path and application name are the same, it will lead to conflict ([#142](https://github.com/lencx/ChatGPT/issues/142#issuecomment-0.10.1))
:::

## Mac

- [ChatGPT_0.10.3_x64.dmg](https://github.com/lencx/ChatGPT/releases/download/v0.10.3/ChatGPT_0.10.1_x64.dmg): Direct download installer
- [ChatGPT.app.tar.gz](https://github.com/lencx/ChatGPT/releases/download/v0.10.3/ChatGPT.app.tar.gz): Download the `.app` installer
- Homebrew

  Or you can install with _[Homebrew](https://brew.sh) ([Cask](https://docs.brew.sh/Cask-Cookbook)):_

  ```sh
  brew tap lencx/chatgpt https://github.com/lencx/ChatGPT.git
  brew install --cask chatgpt --no-quarantine
  ```

  Also, if you keep a _[Brewfile](https://github.com/Homebrew/homebrew-bundle#usage)_, you can add something like this:

  ```rb
  repo = "lencx/chatgpt"
  tap repo, "https://github.com/#{repo}.git"
  cask "chatgpt", args: { "no-quarantine": true }
  ```

:::tip
Homebrew installation did't use the latest version, and we are welcome you submit a PR to fix it.
:::

## Linux

- [chat-gpt_0.10.3_amd64.deb](https://github.com/lencx/ChatGPT/releases/download/v0.10.3/chat-gpt_0.10.3_amd64.deb): Download `.deb` installer, advantage small size, disadvantage poor compatibility
- [chat-gpt_0.10.3_amd64.AppImage](https://github.com/lencx/ChatGPT/releases/download/v0.10.3/chat-gpt_0.10.3_amd64.AppImage): Works reliably, you can try it if `.deb` fails to run
- Available on [AUR](https://aur.archlinux.org/packages/chatgpt-desktop-bin) (unofficial)with the package name `chatgpt-desktop-bin`, and you can use your favourite AUR package manager to install it.
