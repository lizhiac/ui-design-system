import React, { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PullRefresh, Cell } from '../src';

const meta: Meta<typeof PullRefresh> = {
  title: 'Components/PullRefresh',
  component: PullRefresh,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof PullRefresh>;

const SampleList = ({ rows = 8 }: { rows?: number }) => (
  <div style={{ background: 'var(--color-bg-card)' }}>
    {Array.from({ length: rows }, (_, i) => (
      <Cell key={i} title={`列表项 ${i + 1}`} value="内容" border={i < rows - 1} />
    ))}
  </div>
);

export const Basic: Story = {
  name: '基础用法（试试鼠标往下拖）',
  render: () => {
    const ref = useRef<any>(null);
    return (
      <div style={{ width: 360, height: 400, border: '1px solid var(--color-border-light)', borderRadius: 12, overflow: 'hidden' }}>
        <PullRefresh onRefresh={async () => { await new Promise(r => setTimeout(r, 1500)); }}>
          <SampleList />
        </PullRefresh>
      </div>
    );
  }
};

export const CustomText: Story = {
  name: '自定义文案',
  render: () => (
    <div style={{ width: 360, height: 360, border: '1px solid var(--color-border-light)', borderRadius: 12, overflow: 'hidden' }}>
      <PullRefresh
        refreshText="下拉可以刷新哦"
        loosingText="松开试试"
        loadingText="数据加载中..."
        successText="搞定"
        onRefresh={() => new Promise(r => setTimeout(r, 1000))}
      >
        <SampleList rows={5} />
      </PullRefresh>
    </div>
  )
};

export const NoSuccess: Story = {
  name: '无成功提示',
  render: () => (
    <div style={{ width: 360, height: 360, border: '1px solid var(--color-border-light)', borderRadius: 12, overflow: 'hidden' }}>
      <PullRefresh
        successDuration={0}
        successText=""
        onRefresh={() => new Promise(r => setTimeout(r, 1200))}
      >
        <SampleList rows={5} />
      </PullRefresh>
    </div>
  )
};