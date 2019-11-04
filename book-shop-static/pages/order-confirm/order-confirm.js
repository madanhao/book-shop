// pages/order-confirm/order-confirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [
      { id: 'a01', name: '猿衣酷系列————小黄鸭Hello World CODE 情侣卫衣', imgUrl: '/assets/shops/clothing-pic01.png', desc: 'HelloWorld灰色，L', price: 199.00, count: 1 },
      { id: 'a02', name: '儿童编程————懂编程的孩子更聪明', price: 90.00, count: 1, imgUrl: '/assets/shops/limited01.jpg',  },
      { id: 'a03', name: 'NEXSTAND笔记本支架 升降折叠', price: 77.00, count: 1, desc: '睿智黑', imgUrl: '/assets/shops/limited04.jpg' },
      { id: 'a04', name: 'CSDN 20周年专属定制限量款T_shirt 四十八小时内发货', price: 99.00, count: 1, desc: '1024， 白， L', imgUrl: '/assets/shops/clothing-pic02.png' }
    ]
  },
  // 选择收货地址
  selectAddress(){
    wx.navigateTo({
      url: '/pages/add-address/add-address'
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