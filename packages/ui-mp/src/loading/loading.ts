Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    type:     { type: String, value: 'spinner' },  // spinner | circular | dot
    size:     { type: String, value: 'md' },       // sm | md | lg
    color:    { type: String, value: '' },
    text:     { type: String, value: '' },
    vertical: { type: Boolean, value: false },      // true 时图标和文字垂直排列
    customClass: { type: String, value: '' }
  },

  data: {},

  methods: {}
});