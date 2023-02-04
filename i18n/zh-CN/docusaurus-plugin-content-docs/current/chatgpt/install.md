---
title: 下载与安装
description: 支持 macOS，Windows，Linux 多平台安装
---

## Windows

- [ChatGPT_0.10.3_x64_en-US.msi](https://github.com/lencx/ChatGPT/releases/download/v0.10.3/ChatGPT_0.10.3_x64_en-US.msi)
- 使用 [winget](https://winstall.app/apps/lencx.ChatGPT):

  ```bash
  # 安装最新版本
  winget install --id=lencx.ChatGPT -e

  # 安装特定版本
  winget install --id=lencx.ChatGPT -e --version 0.10.0
  ```

:::caution
如果安装路径和应用名称相同，会导致冲突 ([#142](https://github.com/lencx/ChatGPT/issues/142#issuecomment-0.10.1))
:::

## Mac

- [ChatGPT_0.10.3_x64.dmg](https://github.com/lencx/ChatGPT/releases/download/v0.10.3/ChatGPT_0.10.1_x64.dmg)
- [ChatGPT.app.tar.gz](https://github.com/lencx/ChatGPT/releases/download/v0.10.3/ChatGPT.app.tar.gz)
- Homebrew

  _[Homebrew 快捷安装](https://brew.sh) ([Cask](https://docs.brew.sh/Cask-Cookbook)):_

  ```sh
  brew tap lencx/chatgpt https://github.com/lencx/ChatGPT.git
  brew install --cask chatgpt --no-quarantine
  ```

  如果你坚持使用 _[Brewfile](https://github.com/Homebrew/homebrew-bundle#usage)_，则需要添加以下配置:

  ```rb
  repo = "lencx/chatgpt"
  tap repo, "https://github.com/#{repo}.git"
  cask "chatgpt", args: { "no-quarantine": true }
  ```

:::tip
Homebrew安装的不是最新版客户端，我们期待有人能提交pr来帮助我们修复这个问题.
:::

## Linux

- [chat-gpt_0.10.3_amd64.deb](https://github.com/lencx/ChatGPT/releases/download/v0.10.3/chat-gpt_0.10.3_amd64.deb)
- [chat-gpt_0.10.3_amd64.AppImage](https://github.com/lencx/ChatGPT/releases/download/v0.10.3/chat-gpt_0.10.3_amd64.AppImage): **工作可靠，`.deb` 运行失败时可以尝试它**
- 在 [AUR](https://aur.archlinux.org/packages/chatgpt-desktop-bin) 上存在以 `chatgpt-desktop-bin`为包名的非官方发布，你可以使用你偏爱的 AUR 客户端来安装它。
