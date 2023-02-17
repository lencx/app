---
title: Installation
description: Support macOS, Windows, Linux multi-platform installation
---

## Windows

- [ChatGPT_0.11.0_windows_x86_64.msi](https://github.com/lencx/ChatGPT/releases/download/v0.11.0/ChatGPT_0.11.0_windows_x86_64.msi): Direct download installer
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

- [ChatGPT_0.11.0_macos_aarch64.dmg](https://github.com/lencx/ChatGPT/releases/download/v0.11.0/ChatGPT_0.11.0_macos_aarch64.dmg): Direct download installer
- [ChatGPT_0.11.0_macos_x86_64.dmg](https://github.com/lencx/ChatGPT/releases/download/v0.11.0/ChatGPT_0.11.0_macos_x86_64.dmg): Direct download installer
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

- [ChatGPT_0.11.0_linux_x86_64.deb](https://github.com/lencx/ChatGPT/releases/download/v0.11.0/ChatGPT_0.11.0_linux_x86_64.deb): Download `.deb` installer, advantage small size, disadvantage poor compatibility
- [ChatGPT_0.11.0_linux_x86_64.AppImage.tar.gz](https://github.com/lencx/ChatGPT/releases/download/v0.11.0/ChatGPT_0.11.0_linux_x86_64.AppImage.tar.gz): Works reliably, you can try it if `.deb` fails to run
- Available on [AUR](https://aur.archlinux.org/packages/chatgpt-desktop-bin) (unofficial)with the package name `chatgpt-desktop-bin`, and you can use your favourite AUR package manager to install it.This package uses the `.deb` installer from the release page,with less dependencies in the build process.
- Also available on [AUR](https://aur.archlinux.org/packages/chatgpt-desktop-git) (unofficial) with the package name `chatgpt-desktop-git`, and you can use your favourite AUR package manager to install it.This package always builds from the latest commits of `main` branch, with more dependencies in the build process.
