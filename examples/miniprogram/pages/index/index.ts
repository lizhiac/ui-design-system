import { Toast } from '@ui/ui-mp';

Page({
  onView() {
    Toast.success('点击了查看图纸');
  },

  showDialog() {
    this.selectComponent('#van-dialog')!.show({
      title: '确认操作',
      message: '这是一个 Dialog 示例，使用 Vant 主题覆盖后显示我们的品牌色',
      showCancelButton: true,
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    } as any).then(() => {
      Toast.success('确认');
    }).catch(() => {
      Toast.text('取消');
    });
  },

  showNotify() {
    this.selectComponent('#van-notify')!.show({
      type: 'success',
      message: '操作成功'
    } as any);
  },

  goCells() {
    wx.navigateTo({ url: '/pages/cells/index' });
  },
  goForm() {
    wx.navigateTo({ url: '/pages/form/index' });
  },
  goPicker() {
    wx.navigateTo({ url: '/pages/picker/index' });
  }
});