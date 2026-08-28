# 微信小程序 Demo

展示 **自建组件库（@ui/ui-mp）+ Vant Weapp** 混合使用的完整示例。

## 目录结构

```
miniprogram/
├── app.json          # 注册 ui-* 和 van-* 组件（含 Navbar / TabBar / SearchBar）
├── app.wxss          # 引入 token + Vant 主题覆盖
├── app.ts            # 入口逻辑
└── pages/
    ├── index/        # 首页 - Navbar 顶部 + 组件总览 + TabBar 底部
    ├── cells/        # Cell 列表演示
    ├── form/         # Form 表单演示
    ├── picker/       # Picker 选择器演示
    └── search/       # 搜索演示（Navbar + SearchBar + 历史/热门 + 结果）
```

## 运行方式

1. 用微信开发者工具打开本目录（`examples/miniprogram/`）
2. 编译运行即可

## 演示重点

### 首页
- 顶部 **<ui-navbar>**（黄色品牌背景，含 show-home + right-text="搜索"）
- 底部 **<ui-tabbar>**（含 badge + dot，自动适配安全区）
- 中间展示：自建 Button + Vant Tag/Avatar/Dialog/Notify/Loading

### Cells 页
- Vant Cell + 自建 Cell 对比

### Form 页
- 完整的用户表单（用户名/手机号/邮箱/性别/城市/开关/多选/单选/数量）

### Picker 页
- 单列 Picker + 日期时间 Picker + 省市区三级联动

### Search 页（新增）
- **<ui-navbar>** 顶部
- **<ui-searchbar>** 主搜索框（带 showAction + 搜索按钮）
- 历史搜索 + 热门搜索（点击填充关键词）
- 搜索结果展示

## 关键点

### 1. 主题色统一

`app.wxss` 通过 CSS 变量覆盖 Vant 默认主题：

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

### 4. 自定义导航栏

`app.json` 设置 `"navigationStyle": "custom"`，然后用 **<ui-navbar>** 取代系统导航栏，自动适配状态栏 + 右上角胶囊。

### 5. TabBar 注意事项

- 自建 `<ui-tabbar>` 与小程序原生 `tabBar` 二选一
- 本 demo 用自建版本（便于自定义样式/颜色）
- URL 用 `tab://` 前缀走 `wx.switchTab`，普通路径走 `wx.navigateTo`