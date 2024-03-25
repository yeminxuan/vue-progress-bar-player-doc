import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/en/": {
      lang: "en-US",
      title: "Vue3 Progress-Bar-Player",
      description: "Vue3 Progress-Bar-Player",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Vue3 进度条播放器",
      description: "流畅的、易用的、功能齐全的Vue3进度条组件",
    },
  },
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
