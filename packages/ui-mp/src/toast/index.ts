export { default } from './toast';

/**
 * API 式调用（推荐）
 * 用法：Toast({ message: 'xxx' }) / Toast.success('xxx')
 */
let toastInstance: WechatMiniprogram.Component.TrivialInstance | null = null;

export function registerToast(instance: WechatMiniprogram.Component.TrivialInstance) {
  toastInstance = instance;
}

function show(opts: { message: string; type?: string; duration?: number; position?: string; mask?: boolean }) {
  if (!toastInstance) {
    // 兜底用 wx.showToast
    wx.showToast({ title: opts.message, icon: opts.type === 'fail' ? 'error' : 'none', duration: opts.duration || 2000 });
    return;
  }
  toastInstance.setData({
    show: true,
    message: opts.message,
    type: opts.type || 'text',
    duration: opts.duration ?? 2000,
    position: opts.position || 'middle',
    mask: opts.mask || false
  });
}

export const Toast = Object.assign(
  (opts: { message: string; type?: string; duration?: number; position?: string; mask?: boolean }) => show(opts),
  {
    text:    (message: string, duration?: number) => show({ message, type: 'text',    duration }),
    success: (message: string, duration?: number) => show({ message, type: 'success', duration }),
    fail:    (message: string, duration?: number) => show({ message, type: 'fail',    duration }),
    warning: (message: string, duration?: number) => show({ message, type: 'warning', duration }),
    loading: (message: string, duration?: number) => show({ message, type: 'loading', duration: duration ?? 0 }),
    clear: () => {
      if (toastInstance) toastInstance.setData({ show: false });
      else wx.hideToast();
    }
  }
);