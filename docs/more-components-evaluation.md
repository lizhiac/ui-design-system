# 进阶组件评估：Dialog / Form / Picker

> 在《vant-weapp-evaluation.md》7 个基础组件之上，扩展评估 3 个高频复杂组件 + 其他可选组件快速一览。

## 一、Dialog 弹窗

| 维度 | 自建（需从零写） | Vant Weapp（`van-dialog`） |
|------|----------------|---------------------------|
| 实现成本 | 1-2 天（包含动画/遮罩/按钮/异步关闭） | 10 分钟 |
| 功能 | 0 | show/confirm/cancel 按钮 + async onClose + before-close 钩子 + 自定义插槽 |
| 主题 | ✅ Token 直接控制 | 需用 `--van-dialog-*` 覆盖 |
| **结论** | ⚠️ **强烈建议引入 Vant** | 性价比极高 |

**为什么**：弹窗逻辑复杂（Promise 异步关闭、防误触、键盘弹出兼容、状态机管理），自建容易踩坑。Vant 已经是事实标准。

**使用示例**：

```js
// js
import Dialog from '@vant/weapp/dialog/dialog';

Dialog({ message: '确认删除？', showCancelButton: true })
  .then(() => console.log('确认'))
  .catch(() => console.log('取消'));

// 异步关闭（loading 状态）
Dialog({ message: '提交中...', showCancelButton: false, closeOnClickOverlay: false })
  .then(async () => {
    await api.submit();
    Dialog.close();
  });
```

```html
<!-- wxml 中更精细控制 -->
<van-dialog id="van-dialog" />
```

---

## 二、Form 表单

### Vant 的表单体系

| 组件 | 功能 |
|------|------|
| `van-form` | 表单容器，统一校验/提交/重置 |
| `van-field` | 表单项（input/textarea/switch 等 8 种类型）|
| `van-cell-group` | 表单分组容器 |

**关键能力**：
- 统一 `bind:submit` 事件
- 内置 `required` + `rules` 校验规则
- 支持异步校验（Promise）
- 错误信息自动展示

### 自建 vs Vant 对比

| 维度 | 自建 | Vant |
|------|------|------|
| 实现成本 | 5-7 天（校验逻辑+联动+错误展示） | 0（直接用）|
| 校验 | 0 | required / pattern / validator / asyncValidator |
| 表单联动 | 0 | Form 提供 submit / reset 方法 |
| **结论** | ⚠️ **强烈建议引入 Vant** | 一周的工作量被省 |

**使用示例**：

```html
<van-form bind:submit="onSubmit">
  <van-cell-group inset>
    <van-field
      name="username"
      label="用户名"
      placeholder="请输入"
      required
      rules="{ required: true, message: '不能为空' }"
    />
    <van-field
      name="phone"
      label="手机号"
      type="number"
      rules="[
        { required: true, message: '请填手机号' },
        { pattern: /^1[3-9]\d{9}$/, message: '格式错误' }
      ]"
    />
  </van-cell-group>
  <ui-button type="primary" block formType="submit">提交</ui-button>
</van-form>
```

```js
// js
Page({
  onSubmit(e) {
    console.log('form values:', e.detail.values);
  }
});
```

### 主题覆盖建议

```css
/* app.wxss */
.van-field__label,
.van-field__value input,
.van-field__placeholder {
  color: var(--color-text-primary);
}
.van-field--error .van-field__error-message {
  color: var(--color-brand-danger);
}
```

---

## 三、Picker 选择器

### Vant 的 Picker 体系

| 组件 | 功能 |
|------|------|
| `van-picker` | 基础单列/多列选择 |
| `van-picker-column` | 单列（一般嵌套使用） |
| `van-date-picker` | 日期选择（年月日）|
| `van-time-picker` | 时间选择（时分秒）|
| `van-area` | 省市区三级联动（内置中国行政区划数据！）|
| `van-cascader` | 级联选择（自定义数据）|

### 关键优势

- **`van-area` 内置中国行政区划数据**——这是最大亮点，自建需要维护 3000+ 行 JSON
- 配套 `van-popup` 弹出层，自带遮罩/动画
- 支持异步加载（适合级联异步数据）

### 自建 vs Vant 对比

| 维度 | 自建 | Vant |
|------|------|------|
| 单列 Picker | 2-3 天 | 0 |
| 多列 Picker | 3-5 天 | 0 |
| 日期/时间 Picker | 3-5 天 | 0 |
| **省市区 Picker** | **10+ 天**（数据+联动） | **0（内置数据）** |
| **结论** | ⚠️ **强烈建议引入 Vant** | 投入产出比极高 |

**使用示例（省市区）**：

```html
<van-field
  readonly
  clickable
  name="area"
  label="地区"
  placeholder="请选择"
  value="{{ areaText }}"
  bind:tap="onAreaTap"
/>

<van-popup show="{{ showArea }}" position="bottom" round bind:close="onAreaClose">
  <van-area
    area-list="{{ areaList }}"
    value-area="{{ selectedArea }}"
    bind:confirm="onAreaConfirm"
    bind:cancel="onAreaClose"
  />
</van-popup>
```

```js
import { areaList } from '@vant/weapp/area/data';

Page({
  data: {
    areaList,
    showArea: false,
    areaText: '',
    selectedArea: ''
  },
  onAreaTap() { this.setData({ showArea: true }); },
  onAreaClose() { this.setData({ showArea: false }); },
  onAreaConfirm(e) {
    const { selectedOptions } = e.detail;
    this.setData({
      areaText: selectedOptions.map(o => o.text).join(' /'),
      showArea: false
    });
  }
});
```

---

## 四、其他高频组件速查

| 组件 | Vant | 自建成本 | 建议 |
|------|------|---------|------|
| **ActionSheet** | `van-action-sheet` | 2-3 天 | 🟢 用 Vant |
| **Notify 消息提示** | `van-notify` | 1 天 | 🟢 用 Vant |
| **Overlay 遮罩层** | `van-overlay` | 0.5 天 | 🟢 用 Vant |
| **Loading 加载** | `van-loading` | 0.5 天 | 🟢 用 Vant |
| **Switch 开关** | `van-switch` | 1 天 | 🟢 用 Vant |
| **Checkbox 多选** | `van-checkbox` + `van-checkbox-group` | 1-2 天 | 🟢 用 Vant |
| **Radio 单选** | `van-radio` + `van-radio-group` | 1-2 天 | 🟢 用 Vant |
| **Stepper 步进器** | `van-stepper` | 1-2 天 | 🟢 用 Vant |
| **Slider 滑块** | `van-slider` | 1-2 天 | 🟢 用 Vant |
| **SwipeCell 滑动单元格** | `van-swipe-cell` | 2-3 天 | 🟢 用 Vant |
| **Tab 标签页** | `van-tabs` + `van-tab` | 2-3 天 | 🟢 用 Vant |
| **TreeSelect 分类选择** | `van-tree-select` | 3-4 天 | 🟢 用 Vant |
| **Sidebar 侧边导航** | `van-sidebar` + `van-sidebar-item` | 2-3 天 | 🟢 用 Vant |
| **Badge 徽标** | `van-badge` | 0.5 天 | 🟡 自建或 Vant |
| **Empty 空状态** | `van-empty` | 0.5 天 | 🟡 自建或 Vant |
| **CountDown 倒计时** | `van-count-down` | 1 天 | 🟢 用 Vant |
| **Progress 进度条** | `van-progress` | 1 天 | 🟡 自建或 Vant |
| **Skeleton 骨架屏** | `van-skeleton` | 1-2 天 | 🟢 用 Vant |
| **Sticky 粘性布局** | `van-sticky` | 0.5 天 | 🟢 用 Vant |
| **ImagePreview 图片预览** | `van-image-preview` | 2-3 天 | 🟢 用 Vant |
| **PullRefresh 下拉刷新** | `van-pull-refresh` | 2-3 天 | 🟢 用 Vant |
| **List 列表（无限加载）** | `van-list` | 2-3 天 | 🟢 用 Vant |
| **Uploader 文件上传** | `van-uploader` | 3-5 天 | 🟢 用 Vant |
| **Circle 环形进度** | `van-circle` | 1 天 | 🟡 自建或 Vant |

**结论**：除 **Badge / Empty / Progress / Circle** 这种简单展示组件可以自建，其余 24 个组件**全部推荐引入 Vant**。

---

## 五、自建 vs Vant 总决策

```
组件库成本 = 自建 7 个 + 引入 Vant ~30 个
          ≈ 自建 35+ 个组件的工作量 1/3

推荐结构：
├─ 自建（品牌核心）
│  ├─ Button（黄胶囊）
│  ├─ Toast（API 式）
│  ├─ 业务组件（按需）
│  └─ Token / CSS 变量
│
└─ Vant Weapp（通用组件 ~30 个）
   ├─ 基础展示：Badge / Empty / Loading / Progress / Circle
   ├─ 通用控件：Cell / Icon / Tag / Divider / Avatar
   ├─ 表单：Form / Field / Switch / Checkbox / Radio / Stepper / Slider
   ├─ 反馈：Dialog / ActionSheet / Notify / Overlay / Toast
   ├─ 选择：Picker / DatePicker / TimePicker / Area / Cascader
   ├─ 导航：Tabs / Sidebar / TreeSelect / Sticky
   ├─ 数据：SwipeCell / PullRefresh / List / ImagePreview
   └─ 其他：Uploader / CountDown / Skeleton
```

**总节省**：~70% 通用组件开发时间

---

## 六、混合接入完整 app.json

```json
{
  "usingComponents": {
    "ui-button": "@ui/ui-mp/button",
    "ui-tag":    "@ui/ui-mp/tag",
    "ui-cell":   "@ui/ui-mp/cell",
    "ui-icon":   "@ui/ui-mp/icon",
    "ui-avatar": "@ui/ui-mp/avatar",
    "ui-divider":"@ui/ui-mp/divider",

    "van-button":     "@vant/weapp/button",
    "van-cell":       "@vant/weapp/cell",
    "van-cell-group": "@vant/weapp/cell-group",
    "van-icon":       "@vant/weapp/icon",
    "van-tag":        "@vant/weapp/tag",
    "van-divider":    "@vant/weapp/divider",

    "van-dialog":     "@vant/weapp/dialog",
    "van-action-sheet":"@vant/weapp/action-sheet",
    "van-notify":     "@vant/weapp/notify",
    "van-overlay":    "@vant/weapp/overlay",
    "van-loading":    "@vant/weapp/loading",
    "van-toast":      "@vant/weapp/toast",

    "van-form":       "@vant/weapp/form",
    "van-field":      "@vant/weapp/field",
    "van-switch":     "@vant/weapp/switch",
    "van-checkbox":   "@vant/weapp/checkbox",
    "van-checkbox-group":"@vant/weapp/checkbox-group",
    "van-radio":      "@vant/weapp/radio",
    "van-radio-group":"@vant/weapp/radio-group",
    "van-stepper":    "@vant/weapp/stepper",
    "van-slider":     "@vant/weapp/slider",

    "van-picker":     "@vant/weapp/picker",
    "van-date-picker":"@vant/weapp/date-picker",
    "van-time-picker":"@vant/weapp/time-picker",
    "van-area":       "@vant/weapp/area",
    "van-cascader":   "@vant/weapp/cascader",

    "van-tabs":       "@vant/weapp/tabs",
    "van-tab":        "@vant/weapp/tab",
    "van-sidebar":    "@vant/weapp/sidebar",
    "van-sidebar-item":"@vant/weapp/sidebar-item",
    "van-tree-select":"@vant/weapp/tree-select",
    "van-sticky":     "@vant/weapp/sticky",

    "van-swipe-cell": "@vant/weapp/swipe-cell",
    "van-pull-refresh":"@vant/weapp/pull-refresh",
    "van-list":       "@vant/weapp/list",
    "van-image-preview":"@vant/weapp/image-preview",

    "van-uploader":   "@vant/weapp/uploader",
    "van-count-down":"@vant/weapp/count-down",
    "van-skeleton":   "@vant/weapp/skeleton",
    "van-popup":      "@vant/weapp/popup",
    "van-transition": "@vant/weapp/transition"
  }
}
```

> 实际项目按需引入，不必一次全用上。每加一个 `van-*`，体积增加 ~1-2KB。