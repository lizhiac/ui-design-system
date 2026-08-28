import React, { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast, Button } from '../src';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Types: Story = {
  render: () => {
    const ref = useRef<any>(null);
    return (
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Toast ref={ref} />
        <Button type="secondary" onClick={() => ref.current?.show({ message: '纯文本提示', type: 'text' })}>文本</Button>
        <Button type="secondary" onClick={() => ref.current?.show({ message: '操作成功', type: 'success' })}>成功</Button>
        <Button type="secondary" onClick={() => ref.current?.show({ message: '操作失败', type: 'fail' })}>失败</Button>
        <Button type="secondary" onClick={() => ref.current?.show({ message: '加载中', type: 'loading', duration: 0 })}>加载</Button>
        <Button type="ghost" onClick={() => ref.current?.clear()}>关闭</Button>
      </div>
    );
  }
};

export const Positions: Story = {
  render: () => {
    const ref = useRef<any>(null);
    return (
      <div style={{ display: 'flex', gap: 12 }}>
        <Toast ref={ref} />
        <Button type="secondary" onClick={() => ref.current?.show({ message: '顶部', position: 'top' })}>顶部</Button>
        <Button type="secondary" onClick={() => ref.current?.show({ message: '中间', position: 'middle' })}>中间</Button>
        <Button type="secondary" onClick={() => ref.current?.show({ message: '底部', position: 'bottom' })}>底部</Button>
      </div>
    );
  }
};