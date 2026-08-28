import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Tag, Cell, Divider, Avatar } from '../src';

/* 小程序视觉模拟器：用 React 组件 + 近似 rpx 换算（375 基准，1rpx ≈ 0.5px）*/
const mockPhone = (children: React.ReactNode, title?: string) => (
  <div style={{
    width: 360,
    minHeight: 640,
    background: 'var(--color-bg-page)',
    borderRadius: 24,
    padding: 16,
    boxShadow: 'var(--shadow-3)',
    overflow: 'hidden'
  }}>
    {title && (
      <div style={{
        background: 'var(--color-brand-primary)',
        color: 'var(--color-text-primary)',
        padding: '8px 12px',
        borderRadius: 8,
        marginBottom: 12,
        fontSize: 13,
        fontWeight: 600,
        textAlign: 'center'
      }}>
        {title}
      </div>
    )}
    <div style={{ background: 'var(--color-bg-card)', borderRadius: 12, padding: 12 }}>
      {children}
    </div>
  </div>
);

const codeBlock = (code: string, lang = 'html') => (
  <pre style={{
    background: '#1D2129',
    color: '#FFD933',
    padding: 16,
    borderRadius: 8,
    fontSize: 11,
    lineHeight: 1.5,
    overflow: 'auto',
    margin: 0
  }}>
    <code>{code}</code>
  </pre>
);

const meta: Meta = {
  title: 'Demo/微信小程序 Demo',
  parameters: {
    docs: {
      page: () => (
        <div style={{ padding: 24, maxWidth: 1200, fontSize: 14, lineHeight: 1.7 }}>
          <h1 style={{ fontSize: 28, marginBottom: 8 }}>小程序 Demo 视觉模拟</h1>
          <p style={{ color: '#4E5969', marginBottom: 8 }}>
            这是 <code>examples/miniprogram/</code> 的 React 视觉模拟版，完整可运行代码见：
            <a href="https://github.com/lizhiac/ui-design-system/tree/main/examples/miniprogram" target="_blank" style={{ color: '#165DFF' }}>
              GitHub 仓库
            </a>
          </p>
          <p style={{ color: '#4E5969', fontSize: 13, marginBottom: 32 }}>
            左侧代码，右侧模拟小程序页面的实际渲染效果（按 750 设计稿 → 360px 容器换算）。
          </p>

          {/* ============ Demo 1: 首页 - 组件总览 ============ */}
          <h2 style={{ fontSize: 22, marginTop: 24, marginBottom: 12, color: '#1D2129' }}>1. 首页 - 组件总览</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <h3 style={{ fontSize: 13, color: '#86909C', marginBottom: 8 }}>WXML 代码</h3>
              {codeBlock(`<!-- pages/index/index.wxml -->
<view class="section">
  <ui-button type="primary" size="lg">查看图纸</ui-button>
  <ui-button type="secondary" custom-class="btn-spacing">次要</ui-button>
  <ui-button type="ghost" custom-class="btn-spacing">Ghost</ui-button>
</view>

<view class="section">
  <van-tag type="primary">标签</van-tag>
  <van-tag type="success" custom-class="btn-spacing">成功</van-tag>
  <van-tag type="danger" custom-class="btn-spacing">危险</van-tag>
</view>

<view class="section">
  <ui-avatar text="李" size="lg" bg-color="#FFD933" />
  <ui-avatar text="黄" bg-color="#E8F8EB" custom-class="btn-spacing" />
  <ui-avatar text="赵" bg-color="#FFF3E0" custom-class="btn-spacing" />
</view>

<van-cell-group inset>
  <van-cell title="个人资料" is-link />
  <van-cell title="账号安全" is-link />
  <van-cell title="关于我们" is-link border="{{ false }}" />
</van-cell-group>`)}
            </div>
            <div>
              <h3 style={{ fontSize: 13, color: '#86909C', marginBottom: 8 }}>渲染效果</h3>
              {mockPhone(
                <>
                  <Button type="primary" size="lg">查看图纸</Button>
                  <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <Button type="secondary">次要</Button>
                    <Button type="ghost">Ghost</Button>
                    <Button loading>加载</Button>
                  </div>
                  <Divider />
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <Tag type="primary">标签</Tag>
                    <Tag type="success">成功</Tag>
                    <Tag type="danger">危险</Tag>
                    <Tag plain type="warning">警告</Tag>
                  </div>
                  <Divider />
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Avatar text="李" size="lg" bgColor="#FFD933" />
                    <Avatar text="黄" bgColor="#E8F8EB" />
                    <Avatar text="赵" bgColor="#FFF3E0" />
                    <Avatar text="钱" bgColor="#FFECE8" />
                  </div>
                  <Divider />
                  <div style={{ border: '1px solid var(--color-border-default)', borderRadius: 8, overflow: 'hidden' }}>
                    <Cell title="个人资料" isLink border />
                    <Cell title="账号安全" isLink border />
                    <Cell title="关于我们" isLink />
                  </div>
                </>
              , 'UI Demo - 首页')}
            </div>
          </div>

          {/* ============ Demo 2: 表单 ============ */}
          <h2 style={{ fontSize: 22, marginTop: 40, marginBottom: 12, color: '#1D2129' }}>2. 表单 (Form) - Vant 集成</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <h3 style={{ fontSize: 13, color: '#86909C', marginBottom: 8 }}>WXML 代码</h3>
              {codeBlock(`<van-form bind:submit="onSubmit">
  <van-cell-group inset>
    <van-field name="username" label="用户名" required clearable />
    <van-field name="phone" label="手机号" type="number" required />
    <van-field name="email" label="邮箱" />
    <van-field name="switch" label="订阅通知">
      <van-switch slot="input" name="switch" checked="{{ s }}" />
    </van-field>
    <van-field name="hobby" label="兴趣爱好">
      <van-checkbox-group slot="input" value="{{ h }}" direction="horizontal">
        <van-checkbox name="code">编程</van-checkbox>
        <van-checkbox name="movie">电影</van-checkbox>
      </van-checkbox-group>
    </van-field>
    <van-field name="count" label="数量">
      <van-stepper slot="input" value="{{ n }}" />
    </van-field>
  </van-cell-group>
  <ui-button type="primary" block form-type="submit">提交</ui-button>
</van-form>`)}
            </div>
            <div>
              <h3 style={{ fontSize: 13, color: '#86909C', marginBottom: 8 }}>渲染效果</h3>
              {mockPhone(
                <div style={{ background: 'var(--color-bg-card)' }}>
                  <div style={{ padding: 12, borderBottom: '1px solid var(--color-border-light)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginBottom: 4 }}>用户名 *</div>
                    <input style={{ width: '100%', fontSize: 14, padding: '4px 0', border: 'none', outline: 'none', background: 'transparent', color: 'var(--color-text-primary)' }} placeholder="请输入用户名" />
                  </div>
                  <div style={{ padding: 12, borderBottom: '1px solid var(--color-border-light)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginBottom: 4 }}>手机号 *</div>
                    <input style={{ width: '100%', fontSize: 14, padding: '4px 0', border: 'none', outline: 'none', background: 'transparent', color: 'var(--color-text-primary)' }} placeholder="请输入手机号" />
                  </div>
                  <div style={{ padding: 12, borderBottom: '1px solid var(--color-border-light)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginBottom: 4 }}>邮箱</div>
                    <input style={{ width: '100%', fontSize: 14, padding: '4px 0', border: 'none', outline: 'none', background: 'transparent', color: 'var(--color-text-primary)' }} placeholder="选填" />
                  </div>
                  <div style={{ padding: 12, borderBottom: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 13 }}>订阅通知</span>
                    <div style={{ width: 36, height: 20, borderRadius: 12, background: 'var(--color-brand-primary)', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: 2, right: 2, width: 16, height: 16, borderRadius: '50%', background: '#fff', border: '2px solid #1D2129' }} />
                    </div>
                  </div>
                  <div style={{ padding: 12, borderBottom: '1px solid var(--color-border-light)' }}>
                    <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginBottom: 8 }}>兴趣爱好</div>
                    <div style={{ display: 'flex', gap: 12, fontSize: 13 }}>
                      <label><input type="checkbox" defaultChecked style={{ marginRight: 4 }} />编程</label>
                      <label><input type="checkbox" style={{ marginRight: 4 }} />电影</label>
                      <label><input type="checkbox" style={{ marginRight: 4 }} />运动</label>
                    </div>
                  </div>
                  <div style={{ padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 13 }}>数量</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <button style={{ width: 24, height: 24, border: '1px solid var(--color-border-default)', borderRadius: 4, cursor: 'pointer' }}>−</button>
                      <span style={{ minWidth: 24, textAlign: 'center' }}>3</span>
                      <button style={{ width: 24, height: 24, border: '1px solid var(--color-border-default)', borderRadius: 4, cursor: 'pointer' }}>+</button>
                    </div>
                  </div>
                  <div style={{ padding: 12, marginTop: 12 }}>
                    <Button type="primary" block>提交</Button>
                  </div>
                </div>
              , 'UI Demo - 表单')}
            </div>
          </div>

          {/* ============ Demo 3: 省市区选择器 ============ */}
          <h2 style={{ fontSize: 22, marginTop: 40, marginBottom: 12, color: '#1D2129' }}>3. Picker - 省市区选择</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <h3 style={{ fontSize: 13, color: '#86909C', marginBottom: 8 }}>WXML 代码</h3>
              {codeBlock(`<!-- Vant 内置中国行政区划数据 -->
<van-cell title="省市区" value="{{ area }}" is-link bind:tap="onAreaTap" />

<van-popup show="{{ showArea }}" position="bottom" round>
  <van-area
    area-list="{{ areaList }}"
    bind:confirm="onAreaConfirm"
    bind:cancel="onCloseArea"
  />
</van-popup>`)}
              {codeBlock(`// pages/picker/index.ts
import { areaList } from '@vant/weapp/area/data';

Page({
  data: { showArea: false, areaList, area: '' },
  onAreaTap() { this.setData({ showArea: true }); },
  onAreaConfirm(e) {
    const { selectedOptions } = e.detail;
    this.setData({
      area: selectedOptions.map(o => o.text).join(' / '),
      showArea: false
    });
  }
});`, 'js')}
            </div>
            <div>
              <h3 style={{ fontSize: 13, color: '#86909C', marginBottom: 8 }}>渲染效果（点击触发）</h3>
              {mockPhone(
                <>
                  <div style={{ border: '1px solid var(--color-border-default)', borderRadius: 8 }}>
                    <Cell title="水果" value="" isLink border />
                    <Cell title="日期时间" value="" isLink border />
                    <Cell title="省市区" value="广东省 / 深圳市 / 南山区" isLink />
                  </div>
                  <div style={{ marginTop: 16, padding: 16, background: 'var(--color-bg-page)', borderRadius: 8, fontSize: 13 }}>
                    <div style={{ color: 'var(--color-text-tertiary)', marginBottom: 8 }}>⬇️ 点击"省市区"弹出：</div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <div style={{ flex: 1, background: '#fff', borderRadius: 8, padding: 8, fontSize: 12, textAlign: 'center' }}>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>省份</div>
                        <div style={{ padding: 4, background: 'var(--color-brand-primary)', borderRadius: 4 }}>广东省</div>
                      </div>
                      <div style={{ flex: 1, background: '#fff', borderRadius: 8, padding: 8, fontSize: 12, textAlign: 'center' }}>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>城市</div>
                        <div style={{ padding: 4, background: 'var(--color-brand-primary)', borderRadius: 4 }}>深圳市</div>
                      </div>
                      <div style={{ flex: 1, background: '#fff', borderRadius: 8, padding: 8, fontSize: 12, textAlign: 'center' }}>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>区县</div>
                        <div style={{ padding: 4, background: 'var(--color-brand-primary)', borderRadius: 4 }}>南山区</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
                      <span style={{ color: 'var(--color-text-secondary)' }}>取消</span>
                      <span style={{ color: 'var(--color-brand-primary)', fontWeight: 600 }}>确定</span>
                    </div>
                  </div>
                </>
              , 'UI Demo - 选择器')}
            </div>
          </div>

          <div style={{ marginTop: 40, padding: 16, background: 'var(--color-bg-page)', borderRadius: 8, fontSize: 13, color: 'var(--color-text-secondary)' }}>
            <strong>📂 完整代码</strong>：<a href="https://github.com/lizhiac/ui-design-system/tree/main/examples/miniprogram" target="_blank" style={{ color: '#165DFF' }}>examples/miniprogram/</a>
            <br />
            <strong>📚 完整接入文档</strong>：<a href="https://github.com/lizhiac/ui-design-system/blob/main/docs/integration-guide.md" target="_blank" style={{ color: '#165DFF' }}>docs/integration-guide.md</a>
          </div>
        </div>
      )
    }
  }
};
export default meta;
type Story = StoryObj;
export const Overview: Story = { render: () => null };