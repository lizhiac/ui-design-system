import type { Meta, StoryObj } from '@storybook/react';
import { Cell } from '../src';

const meta: Meta<typeof Cell> = {
  title: 'Components/Cell',
  component: Cell,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Cell>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Cell title="单元格" value="内容" border />
      <Cell title="单元格" value="内容" label="辅助说明" border />
      <Cell title="单元格" value="内容" arrow border />
      <Cell title="可点击" isLink border />
      <Cell title="最后一项" isLink border={false} />
    </div>
  )
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Cell
        title="收货地址"
        label="广东省深圳市南山区..."
        arrow
        icon={<div style={{ width: 32, height: 32, borderRadius: 16, background: '#FFD933' }} />}
      />
    </div>
  )
};