import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Integration/混合方案：自建 + Vant Weapp',
  parameters: {
    docs: {
      page: () => (
        <div style={{ padding: 24, maxWidth: 800, fontSize: 14, lineHeight: 1.7 }}>
          <h1 style={{ fontSize: 28, marginBottom: 8 }}>自建 + Vant 混合方案</h1>
          <p style={{ color: '#4E5969', marginBottom: 24 }}>
            保留品牌核心（Button / Toast / Token），引入 Vant 补通用组件（Cell / Icon / Tag）。
          </p>

          <h2 style={{ fontSize: 20, marginTop: 24, marginBottom: 12 }}>📦 安装</h2>
          <pre style={{ background: '#1D2129', color: '#FFD933', padding: 16, borderRadius: 8, fontSize: 12, overflow: 'auto' }}>{`pnpm add @ui/ui-mp @vant/weapp @ui/tokens`}</pre>

          <h2 style={{ fontSize: 20, marginTop: 24, marginBottom: 12 }}>🎨 app.wxss：引入 token + 主题覆盖</h2>
          <pre style={{ background: '#1D2129', color: '#FFD933', padding: 16, borderRadius: 8, fontSize: 11, overflow: 'auto' }}>{`/* 1. 我们的 token */
@import "@ui/tokens/dist/miniprogram/variables.wxss";

/* 2. 把 Vant 调成我们的品牌色 */
page {
  --van-primary-color: var(--color-brand-primary);  /* 黄 #FFD933 */
  --van-text-color:   var(--color-text-primary);    /* 黑 #1D2129 */
  --van-background:   var(--color-bg-page);         /* #F7F8FA */
  --van-border-color: var(--color-border-default);  /* #E5E6EB */
}`}</pre>

          <h2 style={{ fontSize: 20, marginTop: 24, marginBottom: 12 }}>🔌 app.json：注册组件</h2>
          <pre style={{ background: '#1D2129', color: '#FFD933', padding: 16, borderRadius: 8, fontSize: 11, overflow: 'auto' }}>{`{
  "usingComponents": {
    "ui-button":   "@ui/ui-mp/button",      // 自建 - 保留
    "ui-icon":     "@ui/ui-mp/icon",
    "ui-tag":      "@ui/ui-mp/tag",
    "ui-divider":  "@ui/ui-mp/divider",
    "ui-avatar":   "@ui/ui-mp/avatar",
    "ui-cell":     "@ui/ui-mp/cell",

    "van-cell":      "@vant/weapp/cell",       // Vant - 引入
    "van-cell-group":"@vant/weapp/cell-group",
    "van-icon":      "@vant/weapp/icon",
    "van-tag":       "@vant/weapp/tag"
  }
}`}</pre>

          <h2 style={{ fontSize: 20, marginTop: 24, marginBottom: 12 }}>📝 页面使用</h2>
          <pre style={{ background: '#1D2129', color: '#FFD933', padding: 16, borderRadius: 8, fontSize: 11, overflow: 'auto' }}>{`<view class="page">
  <!-- 自建 Button - 保留品牌 -->
  <ui-button type="primary" size="lg" bindtap="onView">查看图纸</ui-button>

  <!-- Vant Cell - 引入成熟组件 -->
  <van-cell-group title="收货地址" inset>
    <van-cell title="李某某" label="广东省深圳市..." value="默认" is-link />
    <van-cell title="李某某 2" label="北京市..." is-link />
  </van-cell-group>
</view>`}</pre>

          <h2 style={{ fontSize: 20, marginTop: 24, marginBottom: 12 }}>🎯 选型速查</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #1D2129', textAlign: 'left' }}>
                <th style={{ padding: 8 }}>组件</th>
                <th style={{ padding: 8 }}>推荐</th>
                <th style={{ padding: 8 }}>理由</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Button', '自建', '品牌黄胶囊规范，不可让步'],
                ['Toast', '自建', 'API 式调用更顺手'],
                ['Cell / List', 'Vant', 'Vant 功能完整（异步/插槽/分组）'],
                ['Icon', 'Vant', '700+ 图标，体量差距大'],
                ['Tag', '均可', '差异小，按需选择'],
                ['Avatar', '均可', '自建够用'],
                ['Divider', '均可', '差异极小'],
                ['业务组件', '自建', 'Vant 帮不上']
              ].map(([comp, rec, reason]) => (
                <tr key={comp} style={{ borderBottom: '1px solid #E5E6EB' }}>
                  <td style={{ padding: 8, fontWeight: 600 }}>{comp}</td>
                  <td style={{ padding: 8, color: rec === '自建' ? '#00B42A' : '#165DFF', fontWeight: 600 }}>{rec}</td>
                  <td style={{ padding: 8, color: '#4E5969' }}>{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={{ fontSize: 20, marginTop: 24, marginBottom: 12 }}>📚 详细文档</h2>
          <ul style={{ paddingLeft: 20 }}>
            <li>
              <a href="https://github.com/lizhiac/ui-design-system/blob/main/docs/vant-weapp-evaluation.md" target="_blank" style={{ color: '#165DFF' }}>
                docs/vant-weapp-evaluation.md
              </a> — 完整组件对比评估
            </li>
            <li>
              <a href="https://github.com/lizhiac/ui-design-system/blob/main/docs/integration-guide.md" target="_blank" style={{ color: '#165DFF' }}>
                docs/integration-guide.md
              </a> — 接入步骤详细说明
            </li>
          </ul>
        </div>
      )
    }
  }
};
export default meta;
type Story = StoryObj;
export const Overview: Story = { render: () => null };