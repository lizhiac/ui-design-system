import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../src';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Plain: Story = { render: () => <Divider /> };

export const WithText: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Divider content="文字" />
      <Divider content="OR" />
      <Divider dashed content="虚线" />
    </div>
  )
};