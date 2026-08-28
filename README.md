# UI Design System

> 一套设计 Token + 跨端组件库，主战场是**微信小程序**，同时支持后续 **Web / APP** 复用。

## 🌐 在线预览

**Storybook 文档站**：https://lizhiac.github.io/ui-design-system/

每次 `git push` 到 `main` 分支自动重新构建 + 部署。

## 架构

```
ui-monorepo/
├── packages/
│   ├── tokens/                # Design Token 源（Style Dictionary）
│   │   ├── tokens/            # JSON 源（颜色/字号/间距/圆角/阴影）
│   │   ├── config.js          # SD 构建配置
│   │   └── dist/              # 构建产物
│   │       ├── css/           # Web CSS 变量
│   │       ├── css-rpx/       # Web 预览（rpx 已换 px）
│   │       ├── miniprogram/   # 小程序 WXSS
│   │       └── json/          # 原始数据
│   │
│   ├── ui-mp/                 # 微信小程序组件库
│   │   └── src/
│   │       ├── button/        # 7 个组件
│   │       ├── icon/
│   │       ├── tag/
│   │       ├── cell/
│   │       ├── divider/
│   │       ├── toast/
│   │       ├── avatar/
│   │       └── index.ts
│   │
│   └── ui-preview-web/        # Web 预览层 + Storybook
│       ├── src/               # 同视觉的 React 组件
│       ├── stories/           # Storybook 文档
│       └── .storybook/
│
├── package.json
└── pnpm-workspace.yaml
```

## 快速开始

```bash
# 安装依赖（需要 pnpm 8+）
pnpm install

# 构建 token 多端产物
pnpm tokens:build

# 构建小程序组件库
pnpm ui-mp:build

# 启动 Storybook（组件文档站）
pnpm storybook
# 浏览器打开 http://localhost:6006

# 一键：构建 token + 启动 Storybook
pnpm dev
```

## 在小程序项目中使用

### 1. 安装组件库

```bash
pnpm add @ui/ui-mp @ui/tokens
```

### 2. 引入 token 变量

在 `app.wxss` 全局引入：

```css
@import "@ui/tokens/dist/miniprogram/variables.wxss";
```

> 要求小程序基础库 **≥ 2.10.0**（CSS 变量支持）

### 3. 配置 `app.json`

```json
{
  "usingComponents": {
    "ui-button": "@ui/ui-mp/button",
    "ui-icon":   "@ui/ui-mp/icon",
    "ui-tag":    "@ui/ui-mp/tag",
    "ui-cell":   "@ui/ui-mp/cell",
    "ui-divider":"@ui/ui-mp/divider",
    "ui-toast":  "@ui/ui-mp/toast",
    "ui-avatar": "@ui/ui-mp/avatar"
  }
}
```

### 4. 在页面中使用

```html
<ui-button type="primary" size="lg" bindtap="onView">查看图纸</ui-button>

<ui-cell title="收货地址" label="广东省深圳市..." value="点击选择" is-link />
```

### 5. Toast API 调用（推荐）

```ts
import { Toast, registerToast } from '@ui/ui-mp';

// 在 App onLaunch 里注册一次
App({
  onLaunch() {
    const page = getCurrentPages()[0];
    if (page) registerToast(page.selectComponent('#toast'));
  }
});

// 任意位置调用
Toast.success('保存成功');
Toast.fail('网络异常');
Toast.loading('加载中');
```

## 组件清单

| 组件 | 说明 | Props 关键点 |
|------|------|-------------|
| **Button** | 胶囊按钮（按规范） | type / size / block / loading / disabled |
| **Icon** | 通用图标 | name / size / color |
| **Tag** | 标签/徽标 | type / size / plain / round |
| **Cell** | 列表单元格 | title / label / value / arrow / isLink |
| **Divider** | 分割线 | content / dashed |
| **Toast** | 轻提示 | show / message / type / duration |
| **Avatar** | 头像 | src / text / size / shape |

## 设计规范

| Token | 值 | 用途 |
|-------|-----|------|
| 标准黑 | `#1D2129` | 主文本/激活态/强调 |
| 主品牌 | `#FFD933` | 胶囊按钮底色 |
| 胶囊按钮 | height 88rpx · radius 44rpx · font 30rpx · weight 700 | 行动类按钮 |

完整规范见 Storybook → **Introduction** 页。

## 跨端复用策略

```
   ┌────────────────────────────────────┐
   │     @ui/tokens  (一份 JSON)        │
   └────────┬───────────────┬───────────┘
            │               │
   ┌────────▼─────┐  ┌──────▼──────────┐
   │   WXSS 产物  │  │   Web/原生产物   │  ← Style Dictionary 自动产出
   └────────┬─────┘  └──────┬──────────┘
            │               │
   ┌────────▼─────┐  ┌──────▼──────────┐
   │  ui-mp 包    │  │ 后续: APP/PC 端 │
   │(TS+WXML+WXSS)│  │  各端独立组件库  │
   └──────────────┘  │  视觉遵循 token  │
                     └─────────────────┘
```

**关键原则**：
- Token 100% 复用（Style Dictionary 自动产出多端）
- 组件不强求"一份代码跑全端"，而是各端独立实现 + **严格遵守同一份设计规范**
- 跨端一致性靠 **token + 文档 + 设计规范** 保证，而非代码强耦合

## 修改 Token

只改 `packages/tokens/tokens/*.json`：

```jsonc
// packages/tokens/tokens/color.json
{
  "color": {
    "brand": {
      "primary": { "value": "#FFD933" }   // 改这里
    }
  }
}
```

然后执行 `pnpm tokens:build`，所有端同步更新。

## 后续扩展方向

- [ ] 加 6+ 业务组件：Navbar / TabBar / Modal / Form / Picker / PullRefresh
- [ ] 暗色主题：在 tokens 加 `theme/dark` 维度
- [ ] APP 端：用 RN/Flutter 包同样消费 token
- [ ] PC 端：另起 `ui-pc` 包
- [ ] CI/CD：发布到私有 npm，自动生成 changelog

## GitHub Pages 部署说明

仓库使用 **GitHub Actions + GitHub Pages** 自动部署：

- **仓库**：https://github.com/lizhiac/ui-design-system
- **预览 URL**：https://lizhiac.github.io/ui-design-system/
- **触发条件**：推送到 `main` 分支
- **构建时间**：约 30 秒
- **工作流文件**：`.github/workflows/deploy-storybook.yml`

### 部署首次配置步骤（其他项目复用）

1. 仓库 Settings → Pages → Source 选 **GitHub Actions**（或用 `gh api -X POST repos/{owner}/{repo}/pages -f build_type=workflow`）
2. 在仓库 Settings → Actions → General → Workflow permissions 选 **Read and write permissions**
3. Workflow 文件必须在 `.github/workflows/` 下，且 push 时需用有 `workflow` scope 的 PAT（OAuth App 的 gh CLI 无法 push workflow 文件）

### 已知限制

- GitHub OAuth App（如 `gh auth` 默认 token）不能 push `.github/workflows/` 文件，必须用 **Personal Access Token (PAT)** 勾选 `workflow` scope
- 首次 push workflow 时如果报错，用：`git push https://x-access-token:<PAT>@github.com/<owner>/<repo>.git main`
- 之后 workflow 已存在，正常 `git push` 即可