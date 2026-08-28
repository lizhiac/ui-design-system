import { Toast } from '@ui/ui-mp';

Page({
  data: {
    keyword: '',
    searched: false,
    history: ['手机壳', '数据线', '充电宝', '耳机', '智能手表'],
    hot: ['双11特惠', 'iPhone 15', '蓝牙耳机', '机械键盘', '运动相机', '无人机'],
    results: []
  },

  onInput(e: any) {
    this.setData({ keyword: e.detail });
  },

  onSearch(e: any) {
    const keyword = (e.detail || this.data.keyword).trim();
    if (!keyword) {
      Toast.text('请输入关键词');
      return;
    }
    // 模拟搜索结果
    const mockResults = [
      { id: 1, title: `${keyword} 相关商品 1`, desc: '热销 / 高评分', price: 199 },
      { id: 2, title: `${keyword} 相关商品 2`, desc: '官方正品', price: 299 },
      { id: 3, title: `${keyword} 相关商品 3`, desc: '限时特惠', price: 99 },
      { id: 4, title: `${keyword} 相关商品 4`, desc: '新品上市', price: 399 }
    ];

    // 加入历史
    const history = [...new Set([keyword, ...this.data.history])].slice(0, 8);

    this.setData({
      keyword,
      searched: true,
      results: mockResults,
      history
    });
  },

  onClear() {
    this.setData({ keyword: '', searched: false });
  },

  onCancel() {
    this.setData({ keyword: '', searched: false });
  },

  onClearHistory() {
    this.setData({ history: [] });
    Toast.text('历史已清空');
  },

  onTagTap(e: any) {
    const keyword = e.currentTarget.dataset.keyword;
    this.setData({ keyword });
    this.onSearch({ detail: keyword });
  }
});