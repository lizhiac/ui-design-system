import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Introduction',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <div style={{ padding: 24, maxWidth: 720, fontSize: 14, lineHeight: 1.7 }}>
          <h1 style={{ fontSize: 28, marginBottom: 8 }}>跨端设计系统</h1>
          <p style={{ color: '#4E5969', marginBottom: 24 }}>
            一套 Token + 组件，跨小程序 / Web / App / PC 复用。
          </p>

          <h2 style={{ fontSize: 20, marginTop: 32, marginBottom: 12 }}>架构</h2>
          <pre style={{ background: '#F7F8FA', padding: 16, borderRadius: 8, fontSize: 12, overflow: 'auto' }}>{`packages/
├── tokens/         Style Dictionary 源 + 多端产物
├── ui-mp/          微信小程序组件库 (TS + WXML + WXSS)
└── ui-preview-web/ Web 预览层 + Storybook 文档`}</pre>

          <h2 style={{ fontSize: 20, marginTop: 32, marginBottom: 12 }}>使用方式</h2>

          <h3 style={{ fontSize: 16, marginTop: 16, marginBottom: 8 }}>小程序项目</h3>
          <pre style={{ background: '#F7F8FA', padding: 16, borderRadius: 8, fontSize: 12, overflow: 'auto' }}>{`pnpm add @ui/ui-mp

// app.json
{
  "usingComponents": {
    "ui-button": "@ui/ui-mp/button",
    "ui-icon":   "@ui/ui-mp/icon"
  }
}`}</pre>

          <pre style={{ background: '#F7F8FA', padding: 16, borderRadius: 8, fontSize: 12, overflow: 'auto', marginTop: 8 }}>{`<!-- page.wxml -->
<ui-button type="primary" size="lg" bindtap="onView">查看图纸</ui-button>`}</pre>

          <p style={{ marginTop: 12, color: '#4E5969', fontSize: 13 }}>
            在 <code>app.wxss</code> 引入 token 产物：
            <code>@import '@ui/tokens/dist/miniprogram/variables.wxss';</code>
          </p>

          <h3 style={{ fontSize: 16, marginTop: 24, marginBottom: 8 }}>Token 修改</h3>
          <p style={{ color: '#4E5969' }}>
            改 <code>packages/tokens/tokens/*.json</code> → <code>pnpm tokens:build</code> → 全端同步。
          </p>

          <h2 style={{ fontSize: 20, marginTop: 32, marginBottom: 12 }}>设计规范要点</h2>
          <ul style={{ paddingLeft: 20, color: '#4E5969' }}>
            <li>标准黑：<code>#1D2129</code></li>
            <li>主品牌色：<code>#FFD933</code>（胶囊按钮）</li>
            <li>圆角：胶囊按钮 <code>44rpx</code></li>
            <li>字号基准：<code>30rpx</code>（按钮）/ <code>28rpx</code>（正文）</li>
          </ul>
        </div>
      )
    }
  }
};
export default meta;
type Story = StoryObj;
export const Overview: Story = { render: () => null };