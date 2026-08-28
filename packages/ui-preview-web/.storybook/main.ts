import type { StorybookConfig } from '@storybook/react-vite';

const REPO_NAME = 'ui-design-system';
const BASE_PATH = `/${REPO_NAME}/`;

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: { autodocs: 'tag' },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  // GitHub Pages 项目站点路径：https://<user>.github.io/<repo>/
  viteFinal: async (config) => {
    config.base = BASE_PATH;
    return config;
  }
};

export default config;