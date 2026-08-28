Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    type:    { type: String, value: 'default' }, // default | primary | success | warning | danger
    size:    { type: String, value: 'md' },      // sm | md | lg
    plain:   { type: Boolean, value: false },
    round:   { type: Boolean, value: false },
    customClass: { type: String, value: '' }
  },

  data: {},

  methods: {
    onTap() {
      this.triggerEvent('click', {}, { bubbles: true });
    }
  }
});