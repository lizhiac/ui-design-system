import { IconName } from './icon.type';

Component({
  options: {
    styleIsolation: 'apply-shared'
  },

  properties: {
    name: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      value: 'md' // xs | sm | md | lg | xl
    },
    color: {
      type: String,
      value: ''
    },
    customClass: {
      type: String,
      value: ''
    }
  },

  data: {},

  methods: {
    onTap() {
      this.triggerEvent('click', {}, { bubbles: true });
    }
  }
});