import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBar } from '../src';

const meta: Meta<typeof TabBar> = {
  title: 'Components/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  argTypes: {
    activeKey: { control: 'text' },
    fixed: { control: 'boolean' },
    border: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof TabBar>;

const basicItems = [
  { key: 'home',  label: '首页',  icon: '🏠' },
  { key: 'list',  label: '列表',  icon: '📋' },
  { key: 'cart',  label: '购物车', icon: '🛒', badge: 3 },
  { key: 'me',    label: '我的',  icon: '👤', dot: true }
];

export const Default: Story = {
  args: { items: basicItems, activeKey: 'home' }
};

export const WithBadge: Story = {
  args: { items: basicItems, activeKey: 'cart' }
};

export const CustomColor: Story = {
  args: {
    items: basicItems,
    activeKey: 'home',
    activeColor: '#FF7D00',
    color: '#86909C'
  }
};

export const NoBorder: Story = {
  args: { items: basicItems, activeKey: 'list', border: false }
};

export const Interactive: Story = {
  name: '受控交互示例',
  render: () => {
    const [active, setActive] = useState('home');
    return (
      <div style={{ width: 360 }}>
        <div style={{ padding: 16, background: 'var(--color-bg-page)', minHeight: 200 }}>
          当前选中：<strong>{active}</strong>
        </div>
        <TabBar items={basicItems} activeKey={active} onChange={(it) => setActive(it.key)} />
      </div>
    );
  }
};