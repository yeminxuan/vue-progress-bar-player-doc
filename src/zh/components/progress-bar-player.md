---
lang: zh-CN
title: 进度条播放器
description:
---
## 基础示例
基础的播放控制进度条，平滑进度改变动画
::: vue-demo 基础示例

```vue
<!-- ↑ 你也可以使用 html -->
<template>
  <!-- vue 模板 -->
</template>
<script>
export default {
  // vue 组件
};
</script>
<style>
/* css 代码 */
</style>
```


:::

根据数据中的某个字段来分割进度条的颜色，支持以两种颜色绘制填充色和背景预览色

## API

### Props

| 属性名                | 说明                         | 类型                                    | 默认值    |
| --------------------- | ---------------------------- | --------------------------------------- | --------- |
| data                  | 数据                         | `any[]`                                 | []        |
| duration              | 动画移动到下个点的过渡时间   | `number`                                | 1000      |
| has-real-time-tip-box | 是否显示实时提示框           | `boolean`                               | false     |
| progress-fill-color   | 未开启颜色分割时进度条填充色 | `string`                                | "#409eff" |
| is-split              | 是否开启颜色分割进度条       | `boolean`                               | false     |
| split-config          | 分割配置，见下表             | [SplitConfig](#SplitConfig)             | ——        |
| split-fields-config   | 分割字段区间范围             | [SplitFieldsConfig](#SplitFieldsConfig) | ——        |

### Events

| 事件名        | 描述说明                                               | 类型       |
| ------------- | ------------------------------------------------------ | ---------- |
| handle-play   | 动画播放时根据设置的过渡时间定时返回当前点的索引和数据 | `Function` |
| skip-progress | 返回鼠标点击进度条时当前点的索引和数据                 | `Function` |

### Slots

| 插槽名     | 说明           |
| ---------- | -------------- |
| play       | 播放按钮       |
| pause      | 暂停按钮       |
| refresh    | 重播按钮       |
| currentTip | 实时提示框内容 |

### Exposes

| 方法            | 描述         | 类型       |
| --------------- | ------------ | ---------- |
| initProgressBar | 初始化进度条 | `Function` |
| play            | 播放         | `Function` |
| pause           | 暂停         | `Function` |
| refresh         | 重播         | `Function` |

## Types

### <div id="SplitConfig">SplitConfig</div>

| 属性名           | 说明                                           | 类型                  | 默认值              |
| ---------------- | ---------------------------------------------- | --------------------- | ------------------- |
| splitFields      | 用于分割颜色的属性                             | `string`              | ——                  |
| inRangeColor     | 处于设置区间内的进度条填充颜色                 | `string`              | "blue"              |
| outRangeColor    | 不在设置区间内的进度条填充颜色                 | `string`              | "red"               |
| outRangeBacColor | 不在设置区间内的进度条背景颜色                 | `string`              | "rgba(255,0,0,0.3)" |
| inRangeBacColor  | 处于设置区间内的进度条背景颜色                 | `string`              | "rgba(0,0,255,0.3)" |
| position         | 进度条背景色和填充色距离进度条左上角的相对位置 | [Position](#Position) | ——                  |

### <div id="Position">Position</div>

| 属性名 | 说明              | 类型     | 默认值 |
| ------ | ----------------- | -------- | ------ |
| x      | 距离左侧 x 轴距离 | `number` | 0      |
| y      | 距离上方 y 轴距离 | `number` | 0      |

### <div id="SplitFieldsConfig">SplitFieldsConfig</div>

| 属性名 | 说明               | 类型     | 默认值 |
| ------ | ------------------ | -------- | ------ |
| max    | 分割字段的最大边界 | `number` | 0      |
| min    | 分割字段的最小边界 | `number` | 0      |

