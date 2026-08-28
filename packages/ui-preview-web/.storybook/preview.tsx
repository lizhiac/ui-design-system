import React, { useEffect } from 'react';
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
    backgrounds: { disable: true },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } }
  },
  decorators: [
    (Story, ctx) => {
      const theme = ctx.globals.theme || 'light';

      // 把 data-theme 写到 documentElement，让 body 的背景跟随主题切换
      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

      // 装饰器只是个轻量 wrapper：透明背景、不撑高度
      return (
        <div data-theme={theme} className="ui-preview-wrapper">
          <Story />
        </div>
      );
    }
  ]
};

export default preview;