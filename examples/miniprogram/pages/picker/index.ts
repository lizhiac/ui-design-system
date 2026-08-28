import { Toast } from '@ui/ui-mp';
// Vant 内置中国行政区划数据
import { areaList } from '@vant/weapp/area/data';

Page({
  data: {
    fruit: '',
    fruitColumns: ['苹果', '香蕉', '橘子', '葡萄', '西瓜'],
    showFruit: false,

    dateTime: '',
    dateValue: new Date().getTime(),
    showDate: false,

    area: '',
    areaValue: '',
    showArea: false,
    areaList
  },

  onFruitTap() {
    this.setData({ showFruit: true });
  },
  onFruitConfirm(e: any) {
    this.setData({ fruit: e.detail.selectedValues[0], showFruit: false });
  },
  onCloseFruit() {
    this.setData({ showFruit: false });
  },

  onDateTap() {
    this.setData({ showDate: true });
  },
  onDateInput(e: any) {
    this.setData({ dateValue: e.detail });
  },
  onDateConfirm() {
    const d = new Date(this.data.dateValue);
    this.setData({
      dateTime: `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`,
      showDate: false
    });
  },
  onCloseDate() {
    this.setData({ showDate: false });
  },

  onAreaTap() {
    this.setData({ showArea: true });
  },
  onAreaConfirm(e: any) {
    const { selectedOptions } = e.detail;
    this.setData({
      area: selectedOptions.map((o: any) => o.text).join(' / '),
      showArea: false
    });
  },
  onCloseArea() {
    this.setData({ showArea: false });
  }
});