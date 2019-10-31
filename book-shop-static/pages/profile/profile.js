// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 跳转到积分中心页面
  toIntegral(){
    wx.navigateTo({
      url: '/pages/integral/integral'
    })
  },
  // 查看全部订单
  showAllOrder(){
    wx.navigateTo({
      url: '/pages/order-list/order-list'
    })
  },
  // 跳转到订单 - 待付款
  toPayPage(){
    wx.navigateTo({
      url: '/pages/order-list/order-list?current=tab2'
    })
  }, 
  // 跳转到订单 - 待发货
  toSendPage(){
    wx.navigateTo({
      url: '/pages/order-list/order-list?current=tab3'
    })
  }, 
  // 跳转到订单 - 待收货
  toReceivePage(){
    wx.navigateTo({
      url: '/pages/order-list/order-list?current=tab4'
    })
  }, 
  // 跳转到订单 - 待评价
  toEvaluatePage(){
    wx.navigateTo({
      url: '/pages/order-list/order-list?current=tab5'
    })
  }, 
   // 跳转到购物车页面
  toCartPage(){
    wx.switchTab({
      url: '/pages/cart/cart'
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