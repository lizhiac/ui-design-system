import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'ghost', 'text'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    block: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    children: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { type: 'primary', size: 'md', children: '查看图纸' }
};

export const Secondary: Story = {
  args: { type: 'secondary', children: '次要按钮' }
};

export const Ghost: Story = {
  args: { type: 'ghost', children: 'Ghost 按钮' }
};

export const Text: Story = {
  args: { type: 'text', children: '文字按钮' }
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button type="primary">主按钮</Button>
      <Button type="secondary">次按钮</Button>
      <Button type="ghost">幽灵</Button>
      <Button type="text">文字</Button>
    </div>
  )
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button size="sm">小</Button>
      <Button size="md">中</Button>
      <Button size="lg">大</Button>
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button>正常</Button>
      <Button disabled>禁用</Button>
      <Button loading>加载中</Button>
      <Button block style={{ width: 240 }}>块级按钮</Button>
    </div>
  )
};