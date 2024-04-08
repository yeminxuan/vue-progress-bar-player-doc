/*
 * @Author: 叶敏轩 mc20000406@163.com
 * @Date: 2024-03-25 17:21:37
 * @LastEditors: 叶敏轩 mc20000406@163.com
 * @LastEditTime: 2024-04-08 17:10:42
 * @FilePath: /testDoc/src/.vuepress/config.ts
 * @Description:
 */
import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/vue-progress-bar-player-doc/",
  lang: "zh-CN",
  title: "文档演示",
  description: "进度播放器的文档演示",
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
  alias: {
    "@assets": path.resolve(__dirname, "public/assets"),
    "@style": path.resolve(__dirname, "public/styles"),
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
