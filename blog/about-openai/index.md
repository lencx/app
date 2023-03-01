---
slug: about-openai
title: 一文读懂 OpenAI
authors: [lencx]
tags: [ChatGPT, AI]
---

## OpenAI 是什么

> 来自 Wiki

OpenAI 是一家美国人工智能（AI）研究实验室，由非营利性 OpenAI Incorporated（OpenAI Inc.）及其营利性子公司 OpenAI Limited Partnership（OpenAI LP）组成。OpenAI 进行 AI 研究的目的是促进和开发友好的 AI。OpenAI 系统运行在世界上第五强大的超级计算机上。该组织于 2015 年由 Sam Altman、Reid Hoffman 在旧金山成立，杰西卡·利文斯顿（Jessica Livingston）、埃隆·马斯克（Elon Musk）、伊利亚·萨茨克维尔（Ilya Sutskever）、彼得·泰尔（Peter Thiel）等人共同认捐了 10 亿美元。马斯克于 2018 年辞去董事会职务，但仍是捐助者。微软在 2019 年向 OpenAI LP 提供了 10 亿美元的投资，并于 2023 年 1 月向其提供了第二笔多年期投资，据报道为 100 亿美元。

## OpenAI 发展历程

- `2015.12` - Sam Altman、Greg Brockman、Reid Hoffman、Jessica Livingston、Peter Thiel、Elon Musk、Amazon Web Services (AWS)、Infosys 和 YC Research 宣布成立 OpenAI，并承诺向该合资企业投资超过 10 亿美元. 该组织表示，将通过向公众开放其专利和研究，与其他机构和研究人员“自由合作”。
- `2016.04` - OpenAI 发布了强化学习研究平台 “OpenAI Gym” 的公测版。
- `2016.12` - OpenAI 发布了 “Universe”，这是一个软件平台，用于测量和训练 AI 在全球范围内提供的游戏、网站和其他应用程序的通用智能。
- `2018` - 由于特斯拉为自动驾驶汽车开发 AI，马斯克辞去了董事会席位，理由是与他担任特斯拉首席执行官的角色“未来可能存在利益冲突” ，但他仍然是捐赠者。
- `2019` - OpenAI 从非营利性转变为“封顶”的营利性，利润封顶为任何投资的 100 倍（[OpenAI shifts from nonprofit to ‘capped-profit’ to attract capital](https://techcrunch.com/2019/03/11/openai-shifts-from-nonprofit-to-capped-profit-to-attract-capital)）。上限利润模式允许 OpenAI LP 合法地吸引风险基金的投资，此外，还可以授予员工公司的股份。
- `2020` - OpenAI 发布了 GPT-3，这是一种在大型互联网数据集上训练的语言模型。GPT-3 旨在自然语言回答问题，但它也可以在语言之间进行翻译并连贯地生成即兴文本。它还宣布了一个关联的 API，简称为 “API”，将构成其第一个商业产品的核心。
- `2021` - OpenAI 推出了 DALL-E，这是一种深度学习模型，可以从自然语言描述中生成数字图像。
- `2022.12` - OpenAI 在推出基于 GPT-3.5 的新型 AI 聊天机器人 ChatGPT 免费预览版后受到了媒体的广泛报道。据 OpenAI 称，预览版在前五天内收到了超过一百万的注册。在发布仅两个月后就拥有 1 亿用户（成为史上用户增长最快的应用）。
- `2023.01` - OpenAI 正在就融资进行谈判，这将使公司估值达到 290 亿美元，是公司 2021 年市值的两倍。2023.01.23，微软宣布对 OpenAI 的一项新的多年期、数十亿美元的投资计划（据报道为 100 亿美元）。该投资被认为是微软将 OpenAI 的 ChatGPT 集成到 Bing 搜索引擎中的一部分。在 ChatGPT 推出后， Google 宣布了类似的 AI 应用程序（Bard），担心 ChatGPT 会威胁到 Google 作为信息首选来源的地位。
- `2023.02.07` - 微软宣布正在将基于与 ChatGPT 相同基础的 AI 技术构建到 Microsoft Bing、Edge、Microsoft 365 等产品中。
- `2023.02.15` - 域名 AI.com 重定向到 ChatGPT 网站，据说域名在 2021.09 被 1100 万美元收购（[AI.com Now Forwarding to ChatGPT Website](https://domaininvesting.com/ai-com-forwarding-chatgpt/)）。
- `2023.02.28` - 微软宣布对 Windows 11 进行重大更新，其中包含一系列利用 AI 的功能并改善人们在 PC 上完成工作的方式的功能。Bing 团队很高兴地与大家分享到：作为此次更新的一部分，我们将 New Bing 直接引入 Windows 任务栏，解锁更多与 PC 交互的方式，包括搜索、答案、聊天和创作（[Introducing the new Bing in Windows 11](https://blogs.bing.com/search/february-2023/Introducing-the-new-Bing-in-Windows-11)）。

## 名词解释

### API

2020.06，OpenAI 宣布了一个多功能 API，据称“用于访问 OpenAI 开发的新 AI 模型”，让开发人员调用它来执行“任何英语 AI 任务”。

### GPT

> 参数数量：1.2 亿，训练数据：BookCorpus 是一个包含 7000 本未出版书籍的语料库，总大小为 4.5 GB。这些书籍涵盖了各种不同的文学流派和主题。

基于转换器的生成式预训练模型（英语：Generative pre-trained transformers, 简称：GPT）是一种延伸自转换器架构（Transformer）的自然语言生成模型。它可以进行微调以完成各种自然语言处理任务，例如文本生成、代码生成、视频生成、文本问答、图像生成、论文写作、影视创作、科学实验设计等。基于大量语料数据上训练，以生成类似于人类自然语言的文本。其名称中的“预训练”指的是在大型文本语料库上进行的初始训练过程，其中模型学习预测文章中下一个单词，这为模型在具有限量的任务特定数据的下游任务中表现良好提供了坚实的基础。

关于 GPT 的原始论文（[Improving Language Understanding by Generative Pre-Training](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)）由 Alec Radford 及其同事撰写，并于 2018.06.11 以预印本形式发表在 OpenAI 的网站上。它展示了语言的生成模型如何能够通过对具有长段连续文本的多样化语料库进行预训练来获取世界知识并处理远程依赖关系。

### GPT-2

> 参数数量：15 亿，训练数据 WebText：一个包含八百万个文档的语料库，总大小为 40 GB。这些文本是从 Reddit 上投票最高的 4,500 万个网页中收集的，包括各种主题和来源，例如新闻、论坛、博客、维基百科和社交媒体等。

生成式预训练变换模型 2（英语：Generative Pre-trained Transformer 2，简称：GPT-2）是 OpenAI 于 2019.02 创建的开源人工智能。GPT-2 能够翻译文本、回答问题、总结段落，并生成文本输出。虽然其输出内容有时与人类相似，但在生成长段落时输出内容可能会变得重复或无意义。GPT-2 是一个通用学习器，没有经过专门训练来执行任何特定的任务，并且是作为 OpenAI 2018 GPT 模型的“直接扩展”而创建的，其参数数量和训练数据集的大小均增加了十倍。

一些专家对 GPT-2 构成重大威胁表示怀疑。艾伦人工智能研究所（Allen Institute for Artificial Intelligence）用一种检测“假新闻”的工具回应了 GPT-2（[Could ‘fake text’ be the next global political threat?](https://www.theguardian.com/technology/2019/jul/04/ai-fake-text-gpt-2-concerns-false-information)）。其他研究人员，如杰里米霍华德，警告说“用听起来合理、上下文适当的散文完全填满推特、电子邮件和网络的技术，这将淹没所有其他言论并且无法过滤”。2019.11，OpenAI 发布了完整版的 GPT-2 语言模型。

### GPT-3

> 参数数量：1750 亿，训练数据：一个总大小为 570 GB 的大规模文本语料库，其中包含约四千亿个标记。这些数据主要来自于CommonCrawl、WebText、英文维基百科和两个书籍语料 Books1 和 Books2。

生成型预训练变换模型 3 （英语：Generative Pre-trained Transformer 3，简称：GPT-3）是一个自回归语言模型，目的是为了使用深度学习生成人类可以理解的自然语言。GPT-3 由 OpenAI 训练与开发，模型设计基于谷歌开发的 Transformer 模型。GPT-3 的神经网络包含 1750 亿个参数，需要 800GB 来存储, 为有史以来参数最多的神经网络模型。该模型在许多任务上展示了强大的零样本和少样本的能力。

OpenAI 于 2020.05 发表 GPT-3 的论文（[Language models are few-shot learners](https://openai.com/research/language-models-are-few-shot-learners)），在次月为少量公司与开发人团释出应用程序界面的测试版。微软在 2020.09.22 宣布取得了 GPT-3 的独家授权。

### GPT-3.5

2022.03.15，OpenAI 在其 API 中提供了具有编辑和插入功能的新版本 GPT-3 和 Codex，名称为 “text-davinci-003” 和“code-davinci-002”。这些模型被描述为比以前的版本更强大，并且接受了截至 2021.06 的数据训练。2022.11.30，OpenAI 开始将这些模型称为 “GPT-3.5” 系列，并发布了 ChatGPT，它是从 GPT-3.5 系列中的一个模型进行微调的。

### GPT-4

Generative Pre-trained Transformer 4 (GPT-4) 是由 OpenAI 创建的未发布的神经网络。 据《纽约时报》报道，它“传言将于 2023 年面世”；[Vox](https://www.vox.com/) 声称其他网站曾表示：据传它优于 OpenAI 此前发布的 GPT-3 和 GPT-3.5。[The Verge](https://www.theverge.com) 还援引谣言称，它将大幅增加 GPT-3 的参数数量（从 1750 亿增加到 100 万亿），OpenAI 首席执行官 Sam Altman 将其描述为“彻头彻尾的胡说八道”。

### ChatGPT

聊天生成型预训练变换模型（英文：Chat Generative Pre-trained Transformer，简称：ChatGPT），是由 OpenAI 开发的一个人工智能聊天机器人程序，于 2022.11 推出。该程序使用基于 GPT-3.5 架构的大型语言模型并通过强化学习进行训练。 ChatGPT 目前仍以文字方式交互，而除了可以通过人类自然对话方式进行交互，还可以用于相对复杂的语言工作，包括自动文本生成、自动问答、自动摘要等在内的多种任务。如：在自动文本生成方面，ChatGPT 可以根据输入的文本自动生成类似的文本（剧本、歌曲、企划等），在自动问答方面，ChatGPT 可以根据输入的问题自动生成答案。还具有编写和调试计算机程序的能力。在推广期间，所有人可以免费注册，并在登录后免费使用 ChatGPT 实现与 AI 机器人对话。

ChatGPT 可以写出相似于真人程度的文章，并因其在许多知识领域给出详细的回答和清晰的答案而迅速获得关注，证明了从前认为不会被 AI 取代的知识型工作它也足以胜任，对于金融与白领人力市场的冲击相当大，但其事实准确性参差不齐被认为是一重大缺陷，其基于意识形态的模型训练结果并被认为需要小心地校正。ChatGPT 于 2022.11 发布后，OpenAI 估值已涨至 290 亿美元。上线两个月后，用户数量达到 1 亿。

### ChatGPT Plus

ChatGPT Plus 是一项每月 20 美元的订阅服务，允许用户在高峰时段访问 ChatGPT，提供更快的响应时间，并让用户提前访问新功能。

### Transformer 模型

Transformer 模型（直译为“变换器”）是一种采用自注意力机制的深度学习模型，这一机制可以按输入数据各部分重要性的不同而分配不同的权重。该模型主要用于自然语言处理（NLP）与计算机视觉（CV）领域。

与循环神经网络（RNN）一样，Transformer 模型旨在处理自然语言等顺序输入数据，可应用于翻译、文本摘要等任务。而与 RNN 不同的是，Transformer 模型能够一次性处理所有输入数据。注意力机制可以为输入序列中的任意位置提供上下文。如果输入数据是自然语言，则 Transformer 不必像 RNN 一样一次只处理一个单词，这种架构允许更多的并行计算，并以此减少训练时间。

Transformer 模型于 2017 年由谷歌大脑的一个团队推出，现已逐步取代长短期记忆（LSTM）等 RNN 模型成为了 NLP 问题的首选模型。并行化优势允许其在更大的数据集上进行训练。这也促成了 BERT、GPT 等预训练模型的发展。这些系统使用了维基百科、Common Crawl 等大型语料库进行训练，并可以针对特定任务进行微调。

### Codex

Codex 于 2021 年年中宣布，是 GPT-3 的后代，它还接受了来自 5400 万个 GitHub 存储库代码的训练，并且是为代码自动完成工具 [GitHub Copilot](https://github.com/features/copilot/) 提供支持的人工智能。2021.08，一个 API 以私人测试版的形式发布。根据 OpenAI 的说法，该模型能够使用十几种编程语言创建工作代码，最有效的是 Python。

### Whisper

- [OpenAI open-sources Whisper, a multilingual speech recognition system](https://techcrunch.com/2022/09/21/openai-open-sources-whisper-a-multilingual-speech-recognition-system/)

Whisper 于 2022 年发布，是一种通用语音识别模型。它是在不同音频的大型数据集上训练的，也是一个多任务模型，可以执行多语言语音识别以及语音翻译和语言识别。

### MuseNet

- [关于 OpenAI MuseNet](https://openai.com/research/musenet)

MuseNet 是一个深度神经网络，可以用 10 种不同的乐器生成 4 分钟的音乐作品，并且可以结合从乡村音乐到莫扎特再到甲壳虫乐队的风格。MuseNet 并未根据我们对音乐的理解进行明确编程，而是通过学习预测数十万个 MIDI 文件中的下一个标记来发现和声、节奏和风格的模式。MuseNet 使用与 GPT-2 相同的通用无监督技术，GPT-2 是一种经过训练以预测序列中的下一个标记（无论是音频还是文本）的大规模变换器模型。

### Microscope

- [关于 OpenAI Microscope](https://openai.com/research/microscope)
- [Microscope 网站](https://microscope.openai.com)

OpenAI 显微镜，它是八种视觉“模型生物”的每个重要层和神经元的可视化集合，通常在可解释性方面进行研究。显微镜使分析这些神经网络内部形成的特征变得更加容易，我们希望它能在我们理解这些复杂系统的过程中对研究社区有所帮助。

### DALL-E & CLIP

- [DALL-E 网站](https://labs.openai.com/)

DALL-E 于 2021 年发布，是一种 Transformer 模型，可根据文本描述创建图像。

同样在 2021 年发布的 CLIP 反其道而行之：它为给定图像创建描述。DALL-E 使用 GPT-3 的 120 亿参数版本来解释自然语言输入（形状像五边形的绿色皮革钱包）并生成相应的图片。它可以创建真实物体的图像（带有蓝色草莓图像的彩色玻璃窗）以及现实中不存在的物体（具有豪猪纹理的立方体）。

## 相关资料

- [OpenAI 研究论文](https://openai.com/research)
- [OpenAI 官方博客](https://openai.com/blog)
