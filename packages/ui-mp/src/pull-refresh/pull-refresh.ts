Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    refreshing:   { type: Boolean, value: false },
    pullDistance: { type: Number,  value: 80 },     // 触发刷新的下拉距离（rpx）
    refreshText:  { type: String,  value: '下拉刷新' },
    pullingText:  { type: String,  value: '继续下拉' },
    loosingText:  { type: String,  value: '释放立即刷新' },
    loadingText:  { type: String,  value: '正在刷新...' },
    successText:  { type: String,  value: '刷新成功' },
    successDuration: { type: Number, value: 500 },  // 成功提示停留时长（ms）
    disabled:     { type: Boolean, value: false },
    customClass:  { type: String,  value: '' }
  },

  data: {
    status: 'normal' as 'normal' | 'pulling' | 'loosing' | 'loading' | 'success',
    startY: 0,
    moveY: 0,
    showSuccess: false,
    timer: null as any
  },

  methods: {
    onTouchStart(e: WechatMiniprogram.TouchEvent) {
      if (this.data.disabled || this.data.refreshing) return;
      this.setData({ startY: e.touches[0].clientY });
    },

    onTouchMove(e: WechatMiniprogram.TouchEvent) {
      if (this.data.disabled || this.data.refreshing) return;
      const dy = e.touches[0].clientY - this.data.startY;
      if (dy <= 0) return;

      // 阻尼：下拉越深越慢
      const damping = 0.4;
      const moveY = Math.min(dy * damping, this.data.pullDistance * 1.5);
      const status = moveY >= this.data.pullDistance ? 'loosing' : 'pulling';

      this.setData({ moveY, status });
    },

    onTouchEnd() {
      if (this.data.disabled || this.data.refreshing) return;
      if (this.data.status === 'loosing') {
        this.triggerRefresh();
      } else {
        this.setData({ moveY: 0, status: 'normal' });
      }
    },

    triggerRefresh() {
      this.setData({
        status: 'loading',
        moveY: this.data.pullDistance,
        refreshing: true
      });
      this.triggerEvent('refresh', {}, { bubbles: false });
    },

    // 外部调用：刷新完成
    finishRefresh(success = true) {
      if (success) {
        this.setData({ status: 'success', showSuccess: true });
        clearTimeout(this.data.timer);
        this.data.timer = setTimeout(() => {
          this.setData({ status: 'normal', moveY: 0, showSuccess: false, refreshing: false });
        }, this.data.successDuration);
      } else {
        this.setData({ status: 'normal', moveY: 0, refreshing: false });
      }
    }
  }
});