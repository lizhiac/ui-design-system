import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../src';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs','sm','md','lg','xl'] },
    shape: { control: 'select', options: ['circle','square'] }
  }
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Image: Story = {
  args: { src: 'https://i.pravatar.cc/100', size: 'md' }
};

export const Text: Story = {
  args: { text: '李', size: 'md', bgColor: '#FFD933' }
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar size="xs" text="A" bgColor="#FFD933" />
      <Avatar size="sm" text="B" bgColor="#E8F8EB" />
      <Avatar size="md" text="C" bgColor="#FFF3E0" />
      <Avatar size="lg" text="D" bgColor="#FFECE8" />
      <Avatar size="xl" text="E" bgColor="#FFD933" />
    </div>
  )
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar shape="circle" text="圆" bgColor="#FFD933" size="lg" />
      <Avatar shape="square" text="方" bgColor="#FFD933" size="lg" />
    </div>
  )
};