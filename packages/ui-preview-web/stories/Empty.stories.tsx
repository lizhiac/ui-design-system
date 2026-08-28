import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Empty, Button } from '../src';

const meta: Meta<typeof Empty> = {
  title: 'Components/Empty',
  component: Empty,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'error', 'search', 'network'] },
    description: { control: 'text' },
    imageSize: { control: { type: 'range', min: 40, max: 200, step: 10 } }
  }
};
export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  args: { description: '暂无数据' }
};

export const WithAction: Story = {
  name: '带操作按钮',
  render: () => (
    <div style={{ width: 360 }}>
      <Empty description="还没有订单">
        <Button type="primary" style={{ marginTop: 16 }}>去下单</Button>
      </Empty>
    </div>
  )
};

export const AllTypes: Story = {
  name: '全部类型',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, width: 600 }}>
      <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 12 }}>
        <Empty type="default" description="暂无数据" />
      </div>
      <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 12 }}>
        <Empty type="error" description="加载失败" />
      </div>
      <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 12 }}>
        <Empty type="search" description="没有搜索结果" />
      </div>
      <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 12 }}>
        <Empty type="network" description="网络异常，请检查连接" />
      </div>
    </div>
  )
};