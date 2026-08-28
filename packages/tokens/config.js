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
      // 额外输出一份把 rpx 转成 px 的版本，给 Web 预览用
      transformGroup: 'css',
      buildPath: 'dist/css-rpx/',
      transforms: ['attribute/cti', 'name/cti/kebab', 'size/rem', 'color/css'],
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