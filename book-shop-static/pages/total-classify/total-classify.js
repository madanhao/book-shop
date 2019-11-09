// pages/total-classify/total-classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: [],
    searchResult: false
  },
  // 搜索按钮
  searchShops(e) {
    let shopname = e.detail.value;
    if (shopname) {
      let list = [ // 图书集合
        { name: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { name: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { name: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ];
      this.setData({ bookList: list });
    }
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