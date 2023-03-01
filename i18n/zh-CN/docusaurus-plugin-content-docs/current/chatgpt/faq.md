---
title: FAQ
description: 常见问题及其解答
---

## 这个程序安全吗？

这个程序十分安全，实际上只是对[OpenAI ChatGPT 网站](https://chat.openai.com/)的一个包装器，不存在额外的数据收集和上传（你可以阅读我们的源代码）。

## 能单独为应用设置代理吗?

我们目前没有找到为此应用设置代理的方法，（[tauri](https://github.com/tauri-apps/tauri) 暂时还不支持此功能）,但是你可以通过设置系统代理来解决这个问题。

:::tip
[ChatGPT](https://github.com/lencx/ChatGPT) 基于 [tauri](https://github.com/tauri-apps/tauri)，后者仍处于积极开发中，因此可能有一些缺陷。
:::

## 哪些问题是由于 OpenAI 造成的，而与这个程序无关？

- “verify you are human”
- “OpenAI's services are not available in your country.”
- “You do not have access to chat.openai.com. Error code: 1020”
- “ChatGPT is at capacity right now”
- “Checking if the site connection is secure”
- 无法登录

:::caution
目前[ChatGPT](https://github.com/lencx/ChatGPT)仅是对[OpenAI ChatGPT 网站](https://chat.openai.com/)的一个包装器（同时提供了很多扩展功能），因此如果你在浏览器中无法使用 ChatGPT，那么你也**无法**在这个程序中使用它。  
与此问题有关的[issues](https://github.com/lencx/ChatGPT/issues) 将被关闭，但是你仍可在[discussions](https://github.com/lencx/ChatGPT/discussions) 内讨论这些问题。
:::

## 为什么这个程序不能通过窗口按钮关闭？

此程序面向高频使用场景，如果不慎点到关闭按钮，你可能需要重新登录，这通常会浪费很多时间。  
请使用快捷键 `Ctrl + Q` 或者菜单中的 `Quit` 来关闭程序。  
你可以点击[这里](https://github.com/lencx/ChatGPT/discussions/205)来参与讨论。

## 为什么这个程序在某些平台的某些行为与这个平台的原生应用不一致？

有一个权衡：专注于开发一些特定于平台的功能和改进（有很多历史兼容性问题和平台特定代码），或者优先开发跨平台功能和改进。在当前阶段（项目的早期阶段），我们可能总是倾向于后者。

:::tip
当然，我们欢迎任何人在任何时候提交拉取请求以实现此应用程序的任何令人兴奋的功能或改进，无论其是否特定于某一平台。
:::

## 为什么此程序不支持xxx架构（例如Mac arm 架构）/ xxx封装格式（例如flatpack）？

- 我们使用Github Actions来构建这个程序，由于脚本依赖过多，我们现在很难对脚本进行修改。
- 我们对Linux的各种封装格式不太了解，也没有相应的环境来测试它们。

:::info
如果您熟悉我们不支持的Linux打包，您可以打开一个issue来讨论它，或者提交一个拉取请求来实现它。  
:::

## 多个窗口之间的登录状态不同步

如果您已经在主窗口中登录，但系统托盘窗口显示您未登录，则可以通过重新启动应用程序（Menu -> Preferences -> Restart ChatGPT）来解决问题。

## 平台特定问题

### Mac

#### 未经验证的开发者（Developer cannot be verified）？

[从身份不明的开发人员处打开Mac应用程序](https://support.apple.com/en-sg/guide/mac-help/mh40616/mac)

#### 最低支持系统版本？

我们的用户报告称，系统版本需高于Mac OS 10.14.6（Mojave），但我们尚未对其进行测试。

### Linux

#### 运行AppImage时提示缺失libthai.so.0？

如果遇到此问题，请自行安装`libthai`包。这是由`AppImage`格式引起的问题。
