import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../src';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default','primary','success','warning','danger'] },
    size: { control: 'select', options: ['sm','md','lg'] },
    plain: { control: 'boolean' },
    round: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: { type: 'default', children: '默认' } };

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag type="default">默认</Tag>
      <Tag type="primary">主要</Tag>
      <Tag type="success">成功</Tag>
      <Tag type="warning">警告</Tag>
      <Tag type="danger">危险</Tag>
    </div>
  )
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Tag size="sm">小</Tag>
      <Tag size="md">中</Tag>
      <Tag size="lg">大</Tag>
    </div>
  )
};

export const PlainAndRound: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag type="primary" plain>主要边框</Tag>
      <Tag type="success" plain>成功边框</Tag>
      <Tag type="warning" plain round>警告圆角</Tag>
      <Tag type="danger" plain round>危险圆角</Tag>
    </div>
  )
};