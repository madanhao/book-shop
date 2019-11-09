// pages/add-address/add-address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible: false, // 是否显示选择地区面板
    selectedArea: '', // 地区
    address: {
      provinces: [
        '河南省'
      ],
      cities: [
        '郑州市', '洛阳市', '开封市'
      ],
      areas: [
        '中原区', '二七区', '管城回族区'
      ],
    },
    currAddr: [], // 当前的省市区坐标
    addrForm: { // 地址表单
      name: '',
      phone: '',
      address: '',
      addressDetails: ''
    }
  },
  // 选择地区，弹出地区选择框
  selectArea() {
    this.setData({ visible: true });
  },
  // 隐藏选择地区面板
  handleCancel() {
    this.setData({ visible: false });
  },
  // 滚动选择地区事件
  bindchange(e) {
    this.setData({ currAddr: e.detail.value });
  },
  // 确认地区选择
  confirmSelected() {
    let currAddr = this.data.currAddr;
    let address = this.data.address;
    let province = address.provinces[currAddr[0]];
    let city = address.cities[currAddr[1]];
    let area = address.areas[currAddr[2]];
    if (currAddr && currAddr.length > 0) {
      let addrForm = this.data.addrForm;
      addrForm.address = `${province} / ${city} / ${area}`
      this.setData({ addrForm: addrForm, visible: false })
    }
  },
  // 表单提交
  formSubmit() {
    let addrForm = this.data.addrForm;
    // 校验每项是否为空
    if (!addrForm.name.trim()) {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none'
      });
      return;
    }
    if (!addrForm.phone.trim()) {
      wx.showToast({
        title: '请输入电话',
        icon: 'none'
      });
      return;
    } else if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(addrForm.phone.trim()))) {
      wx.showToast({
        title: '请输入正确格式的手机号',
        icon: 'none'
      });
      return;
    }
    if (!addrForm.address.trim()) {
      wx.showToast({
        title: '请选择地区',
        icon: 'none'
      });
      return;
    }
    if (!addrForm.addressDetails.trim()) {
      wx.showToast({
        title: '请输入详细地址',
        icon: 'none'
      });
      return;
    }
    console.log(this.data.addrForm)
    wx.navigateTo({
      url: '/pages/order-confirm/order-confirm'
    })
  },
  // 姓名、电话、地区、详细地址双向绑定事件
  nameInput(e) {
    if (e.detail.value) {
      let addrForm = this.data.addrForm;
      addrForm.name = e.detail.value;
      this.setData({ addrForm: addrForm });
    }
  },
  phoneInput(e) {
    if (e.detail.value) {
      let addrForm = this.data.addrForm;
      addrForm.phone = e.detail.value;
      this.setData({ addrForm: addrForm });
    }
  },
  addressInput(e) {
    if (e.detail.value) {
      let addrForm = this.data.addrForm;
      addrForm.address = e.detail.value;
      this.setData({ addrForm: addrForm });
    }
  },
  addressDetailsInput(e) {
    if (e.detail.value) {
      let addrForm = this.data.addrForm;
      addrForm.addressDetails = e.detail.value;
      this.setData({ addrForm: addrForm });
    }
  },
  // 删除收货地址
  delAddr(){
    wx.navigateTo({
      url: '/pages/select-address/select-address'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})