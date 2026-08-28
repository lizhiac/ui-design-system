import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';
import '../src/styles/preview.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: '主题',
      description: '切换 Light / Dark 主题',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        dynamicTitle: true,
        items: [
          { value: 'light', title: '☀️ Light' },
          { value: 'dark', title: '🌙 Dark' }
        ]
      }
    }
  },
  parameters: {
    layout: 'centered',
    backgrounds: { disable: true }, // 用主题背景，禁用 Storybook 默认背景切换
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } }
  },
  decorators: [
    (Story, ctx) => {
      const theme = ctx.globals.theme || 'light';
      return (
        <div
          data-theme={theme}
          className="ui-preview-wrapper"
          style={{
            background: 'var(--color-bg-page)',
            color: 'var(--color-text-primary)',
            minHeight: '100vh',
            transition: 'background 0.3s, color 0.3s'
          }}
        >
          <Story />
        </div>
      );
    }
  ]
};

export default preview;