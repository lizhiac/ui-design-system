import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../src';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color: { control: 'color' }
  }
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = { args: { name: 'close', size: 'md' } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Icon name="check" size="xs" />
      <Icon name="check" size="sm" />
      <Icon name="check" size="md" />
      <Icon name="check" size="lg" />
      <Icon name="check" size="xl" />
    </div>
  )
};

export const CustomColor: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Icon name="heart" size="lg" color="#F53F3F" />
      <Icon name="star"  size="lg" color="#FFD933" />
      <Icon name="info"  size="lg" color="#1D2129" />
      <Icon name="bell"  size="lg" color="#FF7D00" />
    </div>
  )
};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 16, padding: 16 }}>
      {['arrow-left','arrow-right','arrow-up','arrow-down','close','check','search','plus'].map(n => (
        <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <Icon name={n} size="lg" />
          <span style={{ fontSize: 11, color: '#86909C' }}>{n}</span>
        </div>
      ))}
    </div>
  )
};