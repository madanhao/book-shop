// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[ // 菜单
      {name:'优惠', shops:[
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', discount: 8.8, limited: 2, price: 54.91, oldPrice: 62.40 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', discount: 8.8, limited: 2, price: 79.30, oldPrice: 99.00 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', discount: 8.8, limited: 2, price: 54.91, oldPrice: 62.40 }
      ]},
      { name: 'Python', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg',price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: 'JAVA', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '人工智能', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '大数据', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: 'Android', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '编程', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '软件开发', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '产品运营', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: 'UI设计', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '人文心理', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '经济管理', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '科技', shops: [
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
    ],
    currIndex: 0, // 当前选中的菜单索引
    // currViewId: 'ID0' // 当前视图的id
  },
  // 选中菜单按钮事件
  selectedMenu(e){
    // 获取点击菜单的索引
    let index = e.currentTarget.dataset.currindex;
    this.setData({
      currIndex: index
    });
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