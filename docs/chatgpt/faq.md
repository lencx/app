---
title: FAQ
description: Frequently asked questions, and answers
---

## Is it safe to use?

It's safe, just a wrapper for [OpenAI ChatGPT website](https://chat.openai.com/), no other data transfer exists (you can check the source code).

## Able to set proxy?

We have't found a way to set proxy in this program yet ([tauri](https://github.com/tauri-apps/tauri) just not support this feature), but the system proxy will be used automatically.

:::tip
[ChatGPT](https://github.com/lencx/ChatGPT) is based on [tauri](https://github.com/tauri-apps/tauri), which is still in active development stage with some shortcomings.
:::

## Which errors are **not** caused by this program, but OpenAI?

- verify you are human
- OpenAI's services are not available in your country.
- You do not have access to chat.openai.com. Error code: 1020
- ChatGPT is at capacity right now
- Checking if the site connection is secure
- Can't login

:::caution
At this stage, [ChatGPT](https://github.com/lencx/ChatGPT) is just a wrapper of [OpenAI ChatGPT website](https://chat.openai.com/) with some useful extensions.
So if you can't use ChatGPT in **your browser**, it means you also **can't** use it in **this program**.We have answered above in detail which problems are caused by OpenAI and have nothing to do with this program.
[issues](https://github.com/lencx/ChatGPT/issues) ralated to this problem will be closed, but you can still ask questions in [discussions](https://github.com/lencx/ChatGPT/discussions)
:::

## I can't close the program with the close button,why?

This application is positioned as a tool for high frequency use, and the reason it cannot be closed by the window button is to prevent users from accidentally touching it.
Please use the shortcut `Ctrl + Q` or `Quit` in the menu to close the application.
you can join the discussion [here](https://github.com/lencx/ChatGPT/discussions/205) to discuss this issue.

## Why this program doesn't meet some palatform-specific requirements(e.g. config file location)?

There is a trade-off: focus on developing some platform-specific functions and improvements(with a lot of compatibility issues and platform-specific code) or give priority to developing cross-platform functions and improvements.At the current stage (early stage of the project), we may always prefer the latter.

:::tip
Of course, we welcome anyone to open PRs to implement any exciting functions or improvements for this application at any time, whether platform-specificed or not.
:::

## Why does this program not support xxx architecture(e.g. Mac arm arch)/xxx packaging(e.g. flatpack)?

- We use Github Actions to build this program, and the script is hard to be modified to us now.
- We don't know much about the packaging of Linux, and we don't have the corresponding environment to test them.

:::info
If you are familiar with the packaging we haven't supported of Linux, you can open an issue to discuss it or open a PR to implement it.
:::

## Out of sync login status between multiple windows

If you have already logged in in the main window, but the system tray window shows that you are not logged in, you can fix it by restarting the application (Menu -> Preferences -> Restart ChatGPT).

## Platform-specific issues

### Mac

#### Developer cannot be verified?

[Open a Mac app from an unidentified developer](https://support.apple.com/en-sg/guide/mac-help/mh40616/mac)

#### Minimum supported system version

Our users have reported that the minimum supported system version is 10.14.6+, but we have not tested it.

#### MacOS macos_aarch64 seems broken

Open a terminal and try the following command:

```bash
xattr -r -d com.apple.quarantine /YOUR_PATH/ChatGPT.app
```

- https://github.com/lencx/ChatGPT/issues/461
- https://github.com/lencx/ChatGPT/issues/595

### Windows

#### error code: STATUS_INVALID_IMAGE_HASH

- https://github.com/tauri-apps/tauri/issues/4659#issuecomment-1452897588

### Linux

#### missing libthai.so.0 in AppImage build

If you encounter this problem, please install the `libthai` package.It's a issue caused by `AppImage` packaging.
