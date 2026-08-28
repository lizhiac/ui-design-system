import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Tokens',
  tags: ['autodocs'], // 覆盖默认 ['dev', 'test']，确保生产构建收录
  parameters: {
    docs: {
      page: () => (
        <div style={{ padding: 24, maxWidth: 960, fontSize: 14, lineHeight: 1.7 }}>
          <h1 style={{ fontSize: 32, marginBottom: 8 }}>Design Tokens</h1>
          <p style={{ color: '#4E5969', marginBottom: 32 }}>
            参考 <strong>TDesign</strong>（间距/字号/阴影）+ <strong>Vant</strong>（颜色调色板）最佳实践，保留自有品牌（#1D2129 黑字 / #FFD933 黄按钮）。
          </p>

          <h2 style={{ fontSize: 20, marginTop: 24, marginBottom: 16 }}>🎨 颜色 Colors</h2>

          <h3 style={{ fontSize: 14, marginTop: 16, marginBottom: 8, color: '#86909C' }}>文字</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 8 }}>
            {[
              ['primary', '#1D2129'],
              ['secondary', '#4E5969'],
              ['tertiary', '#86909C'],
              ['placeholder', '#C9CDD4'],
              ['inverse', '#FFFFFF'],
              ['link', '#165DFF']
            ].map(([k, v]) => (
              <div key={k} style={{ border: '1px solid #E5E6EB', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ background: v, height: 60, borderBottom: '1px solid #E5E6EB' }} />
                <div style={{ padding: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{k}</div>
                  <div style={{ fontSize: 11, color: '#86909C', fontFamily: 'monospace' }}>{v}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, marginTop: 24, marginBottom: 8, color: '#86909C' }}>品牌</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 8 }}>
            {[
              ['primary (黄按钮)', '#FFD933'],
              ['primary-press', '#F5C500'],
              ['success', '#00B42A'],
              ['warning', '#FF7D00'],
              ['danger', '#F53F3F'],
              ['info', '#86909C']
            ].map(([k, v]) => (
              <div key={k} style={{ border: '1px solid #E5E6EB', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ background: v, height: 60, borderBottom: '1px solid #E5E6EB' }} />
                <div style={{ padding: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{k}</div>
                  <div style={{ fontSize: 11, color: '#86909C', fontFamily: 'monospace' }}>{v}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, marginTop: 24, marginBottom: 8, color: '#86909C' }}>灰阶（Vant 8 阶）</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 8 }}>
            {[
              ['gray-1', '#F7F8FA'], ['gray-2', '#F2F3F5'], ['gray-3', '#E5E6EB'],
              ['gray-4', '#DCDEE0'], ['gray-5', '#C9CDD4'], ['gray-6', '#86909C'],
              ['gray-7', '#4E5969'], ['gray-8', '#1D2129']
            ].map(([k, v]) => (
              <div key={k} style={{ border: '1px solid #E5E6EB', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ background: v, height: 60, borderBottom: '1px solid #E5E6EB' }} />
                <div style={{ padding: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{k}</div>
                  <div style={{ fontSize: 11, color: '#86909C', fontFamily: 'monospace' }}>{v}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 20, marginTop: 32, marginBottom: 16 }}>📏 间距 Spacing（参考 TDesign 8px 体系）</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              ['xxs', 2], ['xs', 4], ['sm', 8], ['md', 12], ['lg', 16],
              ['xl', 24], ['xxl', 32], ['xxxl', 48]
            ].map(([k, v]) => (
              <div key={k as string} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 60, fontSize: 12, color: '#4E5969' }}>{k}</div>
                <div style={{ width: v as number, height: 16, background: '#FFD933', border: '1px solid #1D2129' }} />
                <div style={{ fontSize: 11, color: '#86909C', fontFamily: 'monospace' }}>{v}px</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 20, marginTop: 32, marginBottom: 16 }}>🔤 字号 Font Size</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              ['xs', 10], ['sm', 12], ['md', 14], ['lg', 16], ['xl', 20], ['xxl', 36]
            ].map(([k, v]) => (
              <div key={k as string} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 60, fontSize: 12, color: '#4E5969' }}>{k}</div>
                <div style={{ fontSize: v as number, fontWeight: 600, color: '#1D2129' }}>字体示例 Aa</div>
                <div style={{ fontSize: 11, color: '#86909C', fontFamily: 'monospace' }}>{v}px</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 20, marginTop: 32, marginBottom: 16 }}>📐 圆角 Radius</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              ['none', 0], ['sm', 4], ['md', 8], ['lg', 12], ['pill', 22], ['round', 9999]
            ].map(([k, v]) => (
              <div key={k as string} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 80, height: 60, background: '#FFD933', border: '2px solid #1D2129',
                  borderRadius: Math.min(v as number, 40)
                }} />
                <div style={{ fontSize: 12, marginTop: 4 }}>{k}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 20, marginTop: 32, marginBottom: 16 }}>🌑 阴影 Shadow</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: '20px 0' }}>
            {[
              ['shadow-1', '0 1px 4px rgba(29,33,41,0.06)'],
              ['shadow-2', '0 2px 8px rgba(29,33,41,0.10)'],
              ['shadow-3', '0 4px 12px rgba(29,33,41,0.12)']
            ].map(([k, v]) => (
              <div key={k as string} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 100, height: 60, background: '#fff', borderRadius: 8,
                  boxShadow: v as string
                }} />
                <div style={{ fontSize: 11, marginTop: 8, fontFamily: 'monospace' }}>{k}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 20, marginTop: 32, marginBottom: 16 }}>📚 来源</h2>
          <ul style={{ paddingLeft: 20, color: '#4E5969' }}>
            <li><a href="https://github.com/Tencent/tdesign-common" target="_blank" style={{ color: '#165DFF' }}>TDesign Common</a> — 间距/字号/圆角/阴影/动效 token</li>
            <li><a href="https://github.com/youzan/vant" target="_blank" style={{ color: '#165DFF' }}>Vant</a> — 颜色调色板/字体栈/动画时长</li>
            <li>自有规范：<code>#1D2129</code> 黑字 + <code>#FFD933</code> 黄胶囊按钮 + <code>44rpx</code> 胶囊圆角</li>
          </ul>
        </div>
      )
    }
  }
};
export default meta;
type Story = StoryObj;
export const Overview: Story = { render: () => null };