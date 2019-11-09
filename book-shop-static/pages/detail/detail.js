let globalData = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    visible: false, // 是否显示加入购物车下部弹框组件
    visible02: false, // 是否显示立即购买下部弹框组件
    shopDetail: { // 商品详情
      id: 'aa01',
      name: '猿衣酷系列————小黄鸭Hello World CODE 情侣卫衣',
      price: 199,
      imgUrl: '/assets/shops/clothing-pic01.png',
      version: ['HelloWorld黑色', 'HelloWorld灰色', '小黄鸭黑色', '小黄鸭红色', 'CODE红色', 'CODE黑色' ],
      size: [ 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL' ],
      count: 1,
      surplus: 630
    },
    version: '', // 版本
    size: '' // 尺寸
  },
  // 商品详情面板切换事件
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  // 加入购物车按钮
  joinCart(){
    this.setData({ visible: true });
  },
  // 关闭action-sheet组件
  closeComp(){
    this.setData({ visible: false, visible02: false });
  },
  // 商品数量减一
  reduceOne(){
    let shopDetail = this.data.shopDetail;
    if(shopDetail.count > 1){
      shopDetail.count--;
      this.setData({ shopDetail: shopDetail });
    }else{
      wx.showToast({
        title: '最少选择一件商品哦',
        icon: 'none'
      })
    }
  },
  // 商品数量加一
  addOne() {
    this.data.shopDetail.count++;
    this.setData({ shopDetail: this.data.shopDetail });
  },
  // 加入购物车按钮
  addToCart(){
    if(!globalData.cart){
      globalData.cart = [];
    }
    if(this.data.version && this.data.size){
      let shopDetail = this.data.shopDetail;
      shopDetail.version = this.data.version;
      shopDetail.size = this.data.size;
      for(let x of globalData.cart){
        if(x.id === shopDetail.id && x.version=== shopDetail.version && x.size===shopDetail.size){
          x.count += shopDetail.count;
          this.setData({ visible: false });
          wx.showToast({
            title: '加入购物车成功',
            icon: 'none'
          });
          return;
        }
      }
      globalData.cart.push(shopDetail);
      this.setData({ visible: false });
      wx.showToast({
        title: '加入购物车成功',
        icon: 'none'
      });
    }else if(!this.data.version){
      wx.showToast({
        title: '请选择版本',
        icon: 'none'
      });
    }else if(!this.data.size){
      wx.showToast({
        title: '请选择尺寸',
        icon: 'none'
      });
    }
  },
  // 选中某个版本
  versionClick(e){
    let vindex = e.currentTarget.dataset.vindex;
    let versions = this.data.shopDetail.version;
    if(versions[vindex] === this.data.version){
      this.setData({ version: '' });
    }else if(versions[vindex]) {
      this.setData({ version: versions[vindex] });
    }
  },
  // 选择某个尺寸
  sizeClick(e){
    let vindex = e.currentTarget.dataset.vindex;
    let sizes = this.data.shopDetail.size;
    if(sizes[vindex] === this.data.size){
      this.setData({ size: '' });
    }else if(sizes[vindex]) {
      this.setData({ size: sizes[vindex] });
    }
  },
  // 立即购买按钮
  buyNow(){
    this.setData({ visible02: true });
  },
  // 立即购买 -> 下一步
  buyNowNext(){
    if (this.data.version && this.data.size) {
      let shopDetail = this.data.shopDetail;
      shopDetail.version = this.data.version;
      shopDetail.size = this.data.size;
      wx.navigateTo({
        url: '/pages/order-confirm/order-confirm'
      });
    } else if (!this.data.version) {
      wx.showToast({
        title: '请选择版本',
        icon: 'none'
      });
    } else if (!this.data.size) {
      wx.showToast({
        title: '请选择尺寸',
        icon: 'none'
      });
    }
  },
  // 跳转到首页
  toIndexPage(){
    wx.switchTab({
      url: '/pages/index/index'
    });
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