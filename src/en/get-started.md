# Get Started

## Installation

Package manager like [pnpm](https://pnpm.io/zh/),[yarn](https://classic.yarnpkg.com/en/),[npm](https://www.npmjs.com/),etc.

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

## Usage

### Full Import

If you don’t care about the bundle size so much, it’s more convenient to use full import.

```ts
//main.ts
import { createApp } from "vue";
import App from "./App.vue";
import VueProgressBar from "vue-progress-bar-player";
createApp(App).use(VueProgressBar).mount("#app");
```

## Start Use

Now you can start the project. For usage of each component,refer to [Corresponding separate documentation](/zh/components/progress-bar-player.md).
