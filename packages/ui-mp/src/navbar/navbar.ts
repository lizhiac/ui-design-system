Component({
  options: {
    multipleSlots: true,
    styleIsolation: 'apply-shared'
  },

  properties: {
    title:        { type: String,  value: '' },
    showBack:     { type: Boolean, value: true },
    showHome:     { type: Boolean, value: false },
    background:   { type: String,  value: '' },
    textColor:    { type: String,  value: '' },
    border:       { type: Boolean, value: true },
    fixed:        { type: Boolean, value: false },
    transparent: { type: Boolean, value: false },
    leftText:     { type: String,  value: '' },
    rightText:    { type: String,  value: '' },
    homeUrl:      { type: String,  value: '/pages/index/index' },
    customClass:  { type: String,  value: '' }
  },

  data: {
    statusBarHeight: 20,
    navBarHeight: 44,
    totalHeight: 64,
    capsuleInfo: null as WechatMiniprogram.CustomWidgetComponent | null
  },

  lifetimes: {
    attached() {
      try {
        // 读取系统信息 + 右上角胶囊位置
        const sysInfo = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
        const rect = wx.getMenuButtonBoundingClientRect();

        const statusBarHeight = sysInfo.statusBarHeight || 20;
        const navBarHeight = (rect.top - statusBarHeight) * 2 + rect.height;
        const totalHeight = statusBarHeight + navBarHeight;

        this.setData({
          statusBarHeight,
          navBarHeight,
          totalHeight,
          capsuleInfo: rect
        });
      } catch (e) {
        console.warn('Navbar 获取状态栏高度失败', e);
      }
    }
  },

  methods: {
    onBack() {
      this.triggerEvent('back', {}, { bubbles: false });
      const pages = getCurrentPages();
      if (pages.length > 1) {
        wx.navigateBack({ delta: 1 });
      } else if (this.data.homeUrl) {
        wx.reLaunch({ url: this.data.homeUrl });
      }
    },

    onHome() {
      this.triggerEvent('home', {}, { bubbles: false });
      wx.reLaunch({ url: this.data.homeUrl });
    },

    onLeftTap() {
      this.triggerEvent('left', {}, { bubbles: false });
    },

    onRightTap() {
      this.triggerEvent('right', {}, { bubbles: false });
    }
  }
});