# 接入示范：自建组件库 + Vant Weapp 混合方案

> 完整可运行的示范：保留自有 Button（黄色胶囊），引入 Vant Cell 替代自建 Cell。

## 1. 安装依赖

```bash
# 在你的小程序项目里
pnpm add @ui/ui-mp @vant/weapp @ui/tokens
```

## 2. 引入 token

`app.wxss`：

```css
/* 1. 我们的 token（颜色/字号/间距/圆角/阴影） */
@import "@ui/tokens/dist/miniprogram/variables.wxss";

/* 2. 覆盖 Vant 默认主题色，把 Vant 调成我们的品牌色 */
page {
  /* 品牌色：把 Vant 蓝色换成我们的黄色 #FFD933 */
  --van-primary-color: var(--color-brand-primary);
  --van-button-primary-background: var(--color-brand-primary);
  --van-button-primary-border-color: var(--color-border-strong);

  /* 文字色：把 Vant 灰换成我们的 #1D2129 */
  --van-text-color: var(--color-text-primary);
  --van-text-color-2: var(--color-text-secondary);
  --van-text-color-3: var(--color-text-tertiary);

  /* 背景/边框：保持与 token 一致 */
  --van-background: var(--color-bg-page);
  --van-background-2: var(--color-bg-card);
  --van-border-color: var(--color-border-default);

  /* 圆角：保留 Vant 默认（我们自定义 Button 用自有）*/
  --van-radius-md: 16rpx;
  --van-radius-lg: 24rpx;
}
```

## 3. 注册组件

`app.json`：

```json
{
  "usingComponents": {
    "ui-button":   "@ui/ui-mp/button",
    "ui-icon":     "@ui/ui-mp/icon",
    "ui-tag":      "@ui/ui-mp/tag",
    "ui-divider":  "@ui/ui-mp/divider",
    "ui-avatar":   "@ui/ui-mp/avatar",
    "ui-cell":     "@ui/ui-mp/cell",

    "van-cell":    "@vant/weapp/cell",
    "van-cell-group": "@vant/weapp/cell-group",
    "van-icon":    "@vant/weapp/icon",
    "van-tag":     "@vant/weapp/tag",
    "van-divider": "@vant/weapp/divider"
  }
}
```

> 命名约定：自建组件用 `ui-` 前缀，Vant 用 `van-` 前缀，避免冲突。

## 4. 在页面使用（对比示例）

### 场景 A：保留自建 Button（核心品牌元素）

```html
<!-- pages/index/index.wxml -->
<view class="page">
  <h2 class="title">查看图纸（自建 Button - 黄胶囊）</h2>

  <ui-button type="primary" size="lg" bindtap="onView">查看图纸</ui-button>
  <ui-button type="secondary" size="md">取消</ui-button>

  <h2 class="title">Vant Cell（替代自建 Cell）</h2>

  <van-cell-group title="收货地址" inset>
    <van-cell title="李某某" label="广东省深圳市南山区..." value="默认" is-link />
    <van-cell title="李某某 2" label="北京市朝阳区..." is-link border="{{ false }}" />
  </van-cell-group>
</view>
```

### 场景 B：自建 + Vant 同台对比

```html
<!-- 同一页面里同时用自建 + Vant，体验差异 -->
<view class="compare">
  <h3>Button（自建保留）</h3>
  <ui-button type="primary">自建 - 黄胶囊 + 黑边</ui-button>

  <h3>Button（Vant 备用）</h3>
  <van-button type="primary" custom-class="my-vant-btn">Vant - 被主题覆盖为黄</van-button>
</view>
```

## 5. 全局样式覆盖（避免突兀）

`app.wxss` 末尾追加：

```css
/* 让 Vant Button 也接近自有胶囊风格（可选） */
.van-button--primary {
  color: var(--color-text-primary) !important;
  border: 2rpx solid var(--color-border-strong) !important;
  border-radius: 44rpx !important;
  font-weight: 700 !important;
}

.van-button--normal {
  font-size: 30rpx !important;
  height: 88rpx !important;
  line-height: 84rpx !important;
}
```

> 这段代码把 Vant Button **重写为胶囊样式**，以备不时之需（比如第三方页面、复杂表单场景）。

## 6. 验证视觉一致

打开小程序，对比：
- 自建 Button: 黄底 + 黑字 + 黑边 + 胶囊
- Vant Button (主题覆盖后): 黄底 + 黑字 + 黑边 + 胶囊
- 同一页面里：颜色、字号、间距**完全一致**

## 7. 何时选哪个组件？

| 需求 | 用哪个 |
|------|--------|
| 主操作按钮（提交/确认/查看） | **自建 Button**（品牌一致性）|
| 复杂表单里的次要按钮 | **Vant Button**（省时间）|
| 列表单元格（个人中心/设置） | **Vant Cell**（功能多）|
| 商品卡片业务组件 | **自建业务组件**（无悬念）|
| 简易 Tag 标签 | **自建或 Vant 都行** |
| 大量图标 | **Vant Icon**（700+）|

## 8. 完整项目接入示例

完整的 demo 项目结构：

```
my-miniprogram/
├── app.json                # 注册所有组件
├── app.wxss                # 引入 token + 主题覆盖
├── package.json            # 依赖：@ui/ui-mp + @vant/weapp + @ui/tokens
└── pages/
    └── index/
        ├── index.js
        ├── index.wxml      # 同时使用 ui-* 和 van-*
        ├── index.wxss
        └── index.json
```

详见 GitHub 仓库：`packages/example-miniprogram/`（可在后续版本加上）。