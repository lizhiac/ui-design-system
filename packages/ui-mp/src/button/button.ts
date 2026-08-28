import { buttonProp, ButtonType, ButtonSize } from './button.type';

Component({
  options: {
    multipleSlots: true,
    styleIsolation: 'apply-shared'
  },

  properties: {
    type: {
      type: String,
      value: 'primary' // primary | secondary | ghost | text
    },
    size: {
      type: String,
      value: 'md' // sm | md | lg
    },
    block: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    hairline: {
      type: Boolean,
      value: true
    },
    openType: {
      type: String,
      value: ''
    },
    hoverClass: {
      type: String,
      value: 'ui-button--hover'
    },
    customClass: {
      type: String,
      value: ''
    }
  },

  data: {},

  methods: {
    onTap(e: WechatMiniprogram.CustomEvent) {
      if (this.data.disabled || this.data.loading) return;
      this.triggerEvent('click', e.detail, { bubbles: true, composed: true });
    }
  }
});