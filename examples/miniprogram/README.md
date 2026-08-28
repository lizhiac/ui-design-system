# 微信小程序 Demo

展示 **自建组件库（@ui/ui-mp）+ Vant Weapp** 混合使用的完整示例。

## 目录结构

```
miniprogram/
├── app.json          # 注册 ui-* 和 van-* 组件
├── app.wxss          # 引入 token + Vant 主题覆盖
├── app.ts            # 入口逻辑
└── pages/
    ├── index/        # 组件总览
    ├── cells/        # Cell 列表演示
    ├── form/         # Form 表单演示
    └── picker/       # Picker 选择器演示
```

## 运行方式

1. 用微信开发者工具打开本目录（`examples/miniprogram/`）
2. 编译运行即可

## 演示重点

- **首页**：自建 Button（黄胶囊）+ Vant Tag/Avatar/Dialog/Notify/Loading 混用
- **Cells**：Vant Cell + 自建 Cell 对比
- **Form**：完整的用户表单（用户名/手机号/邮箱/性别/城市/开关/多选/单选/数量）
- **Picker**：单列 Picker + 日期时间 Picker + 省市区三级联动

## 关键点

### 1. 主题色统一

在 `app.wxss` 通过 CSS 变量覆盖 Vant 默认主题：

```css
page {
  --van-primary-color: var(--color-brand-primary);  /* Vant 蓝 → 我们黄 */
  --van-text-color:   var(--color-text-primary);
}
```

### 2. 自建 + Vant 命名约定

- 自建组件：`ui-*` 前缀
- Vant 组件：`van-*` 前缀

避免命名冲突，混用清晰。

### 3. Token + Vant 共存

`app.wxss` 顶部先 `@import` 我们的 token，再覆盖 Vant 变量。Vant 组件自动跟随 token 变化。