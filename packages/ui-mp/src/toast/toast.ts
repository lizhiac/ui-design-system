Component({
  options: { styleIsolation: 'apply-shared', multipleSlots: true },

  properties: {
    show:      { type: Boolean, value: false },
    message:   { type: String,  value: '' },
    type:      { type: String,  value: 'text' }, // text | success | fail | loading | warning
    duration:  { type: Number,  value: 2000 },
    position:  { type: String,  value: 'middle' }, // top | middle | bottom
    mask:      { type: Boolean, value: false },
    zIndex:    { type: Number,  value: 9999 }
  },

  data: {},

  lifetimes: {
    attached() {
      // 自动消失
      if (this.data.show && this.data.duration > 0) {
        this._timer = setTimeout(() => {
          this.setData({ show: false });
          this.triggerEvent('closed', {}, { bubbles: false });
        }, this.data.duration);
      }
    },
    detached() {
      if (this._timer) clearTimeout(this._timer);
    }
  },

  observers: {
    'show'(val) {
      if (val && this.data.duration > 0) {
        if (this._timer) clearTimeout(this._timer);
        this._timer = setTimeout(() => {
          this.setData({ show: false });
          this.triggerEvent('closed', {}, { bubbles: false });
        }, this.data.duration);
      }
    }
  },

  methods: {}
});