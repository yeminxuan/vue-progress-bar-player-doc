---
lang: zh-CN
title: 快速上手
description: 
---
本节将介绍如何在项目中使用 `vue-progress-bar-player`。
## 安装

- 包管理器，如[pnpm](https://pnpm.io/zh/)、[yarn](https://classic.yarnpkg.com/en/)、[npm](https://www.npmjs.com/)等。

::: tabs

@tab pnpm

```bash
pnpm add vue3-progress-bar
```

@tab yarn

```bash
yarn add vue3-progress-bar
```

@tab npm

```bash
npm i vue3-progress-bar
```

:::


## 用法

### 完整引入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
//main.ts
import { createApp } from "vue";
import App from "./App.vue";
import VueProgressBar from "vue-progress-bar-player";
createApp(App).use(VueProgressBar).mount("#app");
```

## 开始使用
现在你可以启动项目了。 对于每个组件的用法，请查阅 [对应的独立文档](/zh/components/progress-bar-player.md)。