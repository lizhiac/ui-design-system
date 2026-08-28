/**
 * Style Dictionary 配置
 * 入口：tokens/*.json
 * 产物：dist/css (Web) + dist/miniprogram (小程序 WXSS)
 */
module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: { outputReferences: false }
        }
      ]
    },
    'css-rpx': {
      // 额外输出一份给 Web 预览用（rpx → px 转换在组件层处理，这里保持和 css 一致）
      transformGroup: 'css',
      buildPath: 'dist/css-rpx/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables'
        }
      ]
    },
    miniprogram: {
      transformGroup: 'css',
      buildPath: 'dist/miniprogram/',
      files: [
        {
          destination: 'variables.wxss',
          format: 'css/variables',
          options: { outputReferences: false }
        }
      ]
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat'
        }
      ]
    }
  }
};