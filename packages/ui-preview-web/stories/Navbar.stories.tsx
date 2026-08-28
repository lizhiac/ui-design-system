import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, Button } from '../src';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    showBack: { control: 'boolean' },
    showHome: { control: 'boolean' },
    fixed: { control: 'boolean' },
    transparent: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: { title: '页面标题', showBack: true }
};

export const WithHome: Story = {
  args: { title: '个人中心', showBack: true, showHome: true }
};

export const WithActions: Story = {
  args: {
    title: '消息列表',
    showBack: true,
    rightText: '清空',
    onRightTap: () => alert('点击了右侧按钮')
  }
};

export const NoBack: Story = {
  args: { title: '首页', showBack: false }
};

export const Transparent: Story = {
  args: { title: '透明背景', showBack: true, transparent: true },
  decorators: [(Story) => (
    <div style={{ background: 'linear-gradient(135deg, #FFD933, #FF7D00)', padding: 0 }}>
      <Story />
    </div>
  )]
};

export const DemoPage: Story = {
  name: '完整 Demo（Navbar + 内容 + TabBar）',
  render: () => (
    <div style={{ width: 360, border: '1px solid var(--color-border-light)', borderRadius: 12, overflow: 'hidden', background: 'var(--color-bg-page)' }}>
      <Navbar title="我的订单" showBack showHome />
      <div style={{ padding: 16, minHeight: 400 }}>
        <h3 style={{ marginTop: 0 }}>订单列表</h3>
        <p style={{ color: 'var(--color-text-secondary)' }}>这里是页面内容区域...</p>
        <Button type="primary" block>主按钮</Button>
      </div>
    </div>
  )
};