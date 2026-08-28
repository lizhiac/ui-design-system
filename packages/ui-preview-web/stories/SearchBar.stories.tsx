import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '../src';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    showAction: { control: 'boolean' },
    actionText: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    shape: { control: 'select', options: ['round', 'square'] },
    clearable: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: { placeholder: '请输入搜索关键词' }
};

export const WithAction: Story = {
  args: { placeholder: '搜索商品', showAction: true, actionText: '搜索' }
};

export const Square: Story = {
  args: { placeholder: '方形搜索框', shape: 'square' }
};

export const Disabled: Story = {
  args: { placeholder: '禁用状态', disabled: true }
};

export const Readonly: Story = {
  args: { placeholder: '只读状态', readonly: true, value: '不可编辑的内容' }
};

export const NoClear: Story = {
  args: { placeholder: '不允许清除', clearable: false, value: '已输入内容' }
};

export const Controlled: Story = {
  name: '受控用法',
  render: () => {
    const [v, setV] = useState('');
    return (
      <div style={{ width: 360 }}>
        <SearchBar
          value={v}
          placeholder="实时显示当前值"
          onChange={setV}
          showAction
          actionText="取消"
          onCancel={() => setV('')}
        />
        <div style={{ padding: 12, fontSize: 13, color: 'var(--color-text-secondary)' }}>
          当前值：<code>{v || '(空)'}</code>
        </div>
      </div>
    );
  }
};