export type TabItem = {
  key: string;
  label: string;
  icon?: string;       // unicode 字符或 emoji 或图片 url
  activeIcon?: string;
  badge?: number | string;
  dot?: boolean;
  url?: string;        // wx.switchTab 跳转地址
};

Component({
  options: {
    styleIsolation: 'apply-shared'
  },

  properties: {
    items:       { type: Array,  value: [] as TabItem[] },
    activeKey:   { type: String, value: '' },
    color:       { type: String, value: '' },          // 未激活色（默认 text-secondary）
    activeColor: { type: String, value: '' },          // 激活色（默认 brand-primary）
    background:  { type: String, value: '' },
    fixed:       { type: Boolean, value: true },
    safeArea:    { type: Boolean, value: true },       // 适配底部安全区
    border:      { type: Boolean, value: true },
    zIndex:      { type: Number,  value: 100 },
    customClass: { type: String, value: '' }
  },

  data: {
    safeBottom: 0
  },

  lifetimes: {
    attached() {
      try {
        const sys = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
        const safeBottom = sys.screenHeight - sys.safeArea.bottom || 0;
        this.setData({ safeBottom });
      } catch (e) {}
    }
  },

  methods: {
    onItemTap(e: WechatMiniprogram.CustomEvent) {
      const item = e.currentTarget.dataset.item as TabItem;
      this.triggerEvent('change', item, { bubbles: false });
      this.triggerEvent(`change-${item.key}`, item, { bubbles: false });

      if (item.url) {
        if (item.url.startsWith('tab://')) {
          wx.switchTab({ url: item.url.replace('tab://', '/') });
        } else {
          wx.navigateTo({ url: item.url });
        }
      }
    }
  }
});