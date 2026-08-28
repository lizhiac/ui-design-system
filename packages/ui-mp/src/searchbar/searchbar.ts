Component({
  options: {
    multipleSlots: true,
    styleIsolation: 'apply-shared'
  },

  properties: {
    value:        { type: String,  value: '' },
    placeholder:  { type: String,  value: '请输入搜索关键词' },
    showAction:   { type: Boolean, value: false },
    actionText:   { type: String,  value: '取消' },
    disabled:     { type: Boolean, value: false },
    readonly:     { type: Boolean, value: false },
    shape:        { type: String,  value: 'round' }, // round | square
    background:   { type: String,  value: '' },        // 输入框背景
    border:       { type: Boolean, value: true },
    maxlength:    { type: Number,  value: -1 },
    clearable:    { type: Boolean, value: true },
    customClass:  { type: String,  value: '' }
  },

  data: {
    showClear: false
  },

  observers: {
    'value'(val) {
      this.setData({ showClear: !!val && this.data.clearable && !this.data.disabled && !this.data.readonly });
    }
  },

  methods: {
    onInput(e: WechatMiniprogram.CustomEvent) {
      const v = e.detail.value;
      this.setData({ value: v, showClear: !!v && this.data.clearable });
      this.triggerEvent('input', v, { bubbles: false });
      this.triggerEvent('change', v, { bubbles: false });
    },

    onConfirm(e: WechatMiniprogram.CustomEvent) {
      this.triggerEvent('search', this.data.value, { bubbles: false });
      this.triggerEvent('confirm', e.detail, { bubbles: false });
    },

    onClear() {
      this.setData({ value: '', showClear: false });
      this.triggerEvent('input', '', { bubbles: false });
      this.triggerEvent('change', '', { bubbles: false });
      this.triggerEvent('clear', {}, { bubbles: false });
    },

    onCancel() {
      this.setData({ value: '', showClear: false });
      this.triggerEvent('cancel', {}, { bubbles: false });
    },

    onFocus(e: WechatMiniprogram.CustomEvent) {
      this.triggerEvent('focus', e.detail, { bubbles: false });
    },

    onBlur(e: WechatMiniprogram.CustomEvent) {
      this.triggerEvent('blur', e.detail, { bubbles: false });
    }
  }
});