Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    title:    { type: String, value: '' },
    label:    { type: String, value: '' },
    value:    { type: String, value: '' },
    icon:     { type: String, value: '' },
    arrow:    { type: Boolean, value: false },
    border:   { type: Boolean, value: true },
    isLink:   { type: Boolean, value: false },
    customClass: { type: String, value: '' }
  },

  data: {},

  methods: {
    onTap() {
      if (!this.data.isLink) return;
      this.triggerEvent('click', {}, { bubbles: true });
    }
  }
});