# Vant Weapp 替代评估

> 对比自建组件库 vs Vant Weapp（35k+ stars 的微信小程序组件库），给出每个组件的替代建议。

## 总览

| 维度 | 自建（@ui/ui-mp） | Vant Weapp |
|------|------------------|------------|
| 包大小 | ~2KB/组件（按需）| 全部 ~30KB（含 70+ 组件）|
| TypeScript | ✅ TS 源码 | ✅ TS 支持 |
| 主题定制 | ✅ Token CSS 变量 | ⚠️ 需要覆盖 CSS 变量 |
| 自定义业务组件 | ✅ 容易 | ⚠️ 需要 fork 或 wrapper |
| 文档 | Storybook（自己写的）| Vant 官方文档（完善）|
| 社区/维护 | 自己维护 | 有赞团队 + 社区 |
| 视觉风格 | 自有品牌（黑字+黄按钮）| Vant 蓝调（#1989fa）|
| 学习成本 | 看自己代码 | 看 Vant 文档 |

## 逐组件评估

### ✅ 推荐保留自建

#### Button
| 维度 | 自建 | Vant |
|------|------|------|
| 视觉 | 严格自有胶囊规范（88rpx/44rpx/30rpx/#FFD933+黑边）| 默认蓝色 + 4 种 type，不匹配你的胶囊规范 |
| API | type/size/block/loading/disabled | 更多 type 但需定制样式才能匹配 |
| **结论** | ✅ **保留自建** | 需重写样式才能匹配品牌 |

**原因**：你的设计规范是"黄胶囊+黑边"，Vant 默认蓝色，需要大量覆盖才能复用，意义不大。

#### Icon
| 维度 | 自建 | Vant |
|------|------|------|
| 图标数量 | 16 个（基本够用）| 700+（iconfont）|
| **结论** | ⚠️ **需要 Vant** | 体量差距太大 |

**建议**：
- 项目初期：自建 + 按需加图标
- 图标需求多时：**引入 Vant Icon**（独立组件，可混用）

---

### ⚠️ 可以用 Vant 替代

#### Cell / List
| 维度 | 自建 | Vant |
|------|------|------|
| 功能 | title/label/value/icon/arrow/isLink | Cell + CellGroup + 完整点击事件 + 自定义插槽 + 异步加载 |
| **结论** | ⚠️ **建议用 Vant** | 功能更全 |

**建议**：Vant 的 Cell 系列 (`van-cell`/`van-cell-group`) 是高频组件，文档完善、bug 少。

#### Tag
| 维度 | 自建 | Vant |
|------|------|------|
| 功能 | type/size/plain/round | + 可关闭 + 颜色自定义 + 主题色 |
| **结论** | ⚠️ **可换 Vant** | 视觉一致可用 |

**建议**：低优先级，自建够用就保留；要换 Vant 也方便。

#### Toast
| 维度 | 自建 | Vant |
|------|------|------|
| API | API 式 + 组件式 | 全部组件式（`showToast` 方法）|
| **结论** | ✅ **保留自建** | 自建 API 式更顺手 |

#### Avatar
| 维度 | 自建 | Vant |
|------|------|------|
| 功能 | src/text/size/shape | + badge + group + error fallback |
| **结论** | ⚠️ **可换 Vant** | 自建够用 |

#### Divider
| 维度 | 自建 | Vant |
|------|------|------|
| 功能 | content/dashed | 几乎一致 |
| **结论** | ⚠️ **可换 Vant** | 差异极小 |

---

## 推荐的混合方案

```
┌─────────────────────────────────────────┐
│  自建（保留品牌特色）                     │
│  ├─ Button（黄色胶囊+黑边）              │
│  ├─ Toast（API 式）                     │
│  └─ 设计 Token / CSS 变量               │
├─────────────────────────────────────────┤
│  Vant Weapp（引入成熟组件）              │
│  ├─ Cell（高频单元格）                   │
│  ├─ Tag（按需）                          │
│  ├─ Avatar（按需）                       │
│  ├─ Divider（按需）                      │
│  ├─ Icon（图标库）                       │
│  └─ 后续：Form / Picker / Dialog / ...  │
├─────────────────────────────────────────┤
│  业务组件（自建，按需封装）               │
│  ├─ OrderCard（订单卡片）                │
│  ├─ GoodsItem（商品项）                  │
│  └─ ...                                 │
└─────────────────────────────────────────┘
```

## Token 复用（关键）

**Vant 主题色映射到你的 Token**：

```css
/* app.wxss - 在 Vant 样式之前引入 */
@import "@ui/tokens/dist/miniprogram/variables.wxss";

/* 把你的主品牌色覆盖到 Vant 变量上 */
page {
  --van-primary-color: var(--color-brand-primary);     /* 黄 #FFD933 */
  --van-text-color:   var(--color-text-primary);       /* 黑 #1D2129 */
  --van-background:   var(--color-bg-page);           /* #F7F8FA */
  --van-border-color: var(--color-border-default);    /* #E5E6EB */
}
```

这样 Vant 组件（Button 等）虽然用蓝色主题，但你的项目里显示黄色，**视觉统一**。

## 接入步骤（如果选混合方案）

```bash
# 1. 安装 Vant Weapp
pnpm add @vant/weapp

# 2. app.json 引入 Vant 组件（只引入需要的）
{
  "usingComponents": {
    "ui-button":    "@ui/ui-mp/button",   // 自建 - 保留
    "van-button":   "@vant/weapp/button", // Vant - 按需
    "van-cell":     "@vant/weapp/cell",
    "van-icon":     "@vant/weapp/icon",
    "van-tag":      "@vant/weapp/tag",
    "van-toast":    "@vant/weapp/toast"
  }
}

# 3. 在 app.wxss 顶部引入 token + 主题覆盖（见上面 CSS）
```

## 决策表

| 场景 | 建议 |
|------|------|
| 项目 1-2 个月上线 | 全部用 Vant（省时间）|
| 长期演进 / 多端 | 自建 Button/Toast，引入 Vant Cell/Icon |
| 团队 < 3 人 | 全部用 Vant（省维护成本）|
| 团队 ≥ 5 人 / 设计资源丰富 | 自建为主，引入 Vant 补图标的量 |

## 总结

**最低成本的"少走弯路"组合**：
- 自建：**Button + Toast + 自己的 Token 体系**（品牌核心，不让步）
- 引入 Vant：**Cell + Icon + Tag**（高频通用，省开发时间）
- 业务组件：**全部自建**（业务强相关，Vant 帮不上）

这样大约能省 30-40% 基础组件开发时间，同时保留品牌一致性。