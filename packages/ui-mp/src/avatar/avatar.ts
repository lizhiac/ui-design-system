Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    src:      { type: String, value: '' },
    text:     { type: String, value: '' },
    size:     { type: String, value: 'md' }, // xs | sm | md | lg | xl
    shape:    { type: String, value: 'circle' }, // circle | square
    bgColor:  { type: String, value: '' },
    textColor:{ type: String, value: '#1D2129' },
    customClass: { type: String, value: '' }
  },

  data: {},

  methods: {
    onError(e: WechatMiniprogram.CustomEvent) {
      this.triggerEvent('error', e.detail, { bubbles: false });
    },
    onTap() {
      this.triggerEvent('click', {}, { bubbles: true });
    }
  }
});