Component({
  options: { styleIsolation: 'apply-shared', multipleSlots: true },

  properties: {
    image:       { type: String, value: '' },          // 自定义图片 URL
    description: { type: String, value: '暂无数据' },
    imageSize:   { type: Number, value: 200 },         // 图片尺寸（rpx）
    type:        { type: String, value: 'default' },  // default / error / search / network
    customClass: { type: String, value: '' }
  },

  data: {},

  methods: {}
});