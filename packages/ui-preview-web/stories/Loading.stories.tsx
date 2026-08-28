import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '../src';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['spinner', 'circular', 'dot'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'color' },
    vertical: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof Loading>;

export const Spinner: Story = {
  args: { type: 'spinner' }
};

export const Circular: Story = {
  args: { type: 'circular' }
};

export const Dot: Story = {
  args: { type: 'dot' }
};

export const AllSizes: Story = {
  name: '全部尺寸（spinner）',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Loading type="spinner" size="sm" />
      <Loading type="spinner" size="md" />
      <Loading type="spinner" size="lg" />
    </div>
  )
};

export const WithText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Loading type="spinner" text="加载中..." />
      <Loading type="circular" text="正在处理..." vertical />
      <Loading type="dot" text="请稍候..." vertical />
    </div>
  )
};

export const CustomColor: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Loading type="spinner" color="#FFD933" />
      <Loading type="spinner" color="#00B42A" />
      <Loading type="spinner" color="#F53F3F" />
      <Loading type="spinner" color="#165DFF" />
    </div>
  )
};