import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';
import '../src/styles/preview.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F7F8FA' },
        { name: 'dark',  value: '#1D2129' }
      ]
    },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/ }
    }
  },
  decorators: [
    (Story) => (
      <div className="ui-preview-wrapper">
        <Story />
      </div>
    )
  ]
};

export default preview;