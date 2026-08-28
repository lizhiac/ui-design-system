import { Toast } from '@ui/ui-mp';

Page({
  data: {
    phoneRules: [
      { required: true, message: '请填写手机号' },
      { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误' }
    ],
    switchChecked: false,
    hobby: [],
    level: '',
    count: 1,
    showGender: false,
    genderColumns: [
      { text: '男', value: '1' },
      { text: '女', value: '2' },
      { text: '保密', value: '0' }
    ],
    gender: ''
  },

  onSubmit(e: any) {
    console.log('表单数据:', e.detail.value);
    Toast.success('提交成功');
  },

  onReset() {
    Toast.text('已重置');
  },

  onGenderTap() {
    this.setData({ showGender: true });
  },
  onGenderClose() {
    this.setData({ showGender: false });
  },
  onGenderConfirm(e: any) {
    const { selectedOptions } = e.detail;
    this.setData({
      gender: selectedOptions[0]?.text || '',
      showGender: false
    });
  },

  onCityTap() {
    Toast.text('跳转到 Picker 演示看地区选择');
  },

  onSwitchChange(e: any) {
    this.setData({ switchChecked: e.detail });
  },
  onHobbyChange(e: any) {
    this.setData({ hobby: e.detail });
  },
  onLevelChange(e: any) {
    this.setData({ level: e.detail });
  },
  onCountChange(e: any) {
    this.setData({ count: e.detail });
  }
});