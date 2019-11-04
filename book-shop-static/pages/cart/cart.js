// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [
      { id: 'a01', name: '儿童编程————懂编程的孩子更聪明', price: 90.00, count: 1, imgUrl: '/assets/shops/limited01.jpg',selected: true },
      { id: 'a02', name: 'NEXSTAND笔记本支架 升降折叠', price: 77.00, count: 1, desc: '睿智黑', imgUrl: '/assets/shops/limited04.jpg', selected: true },
      { id: 'a03', name: '猿衣酷系列————小黄鸭Hello World CODE 情侣卫衣', price: 199.00, count: 1, desc: 'HelloWorld灰色，L', imgUrl: '/assets/shops/clothing-pic01.png', selected: true },
      { id: 'a04', name: 'CSDN 20周年专属定制限量款T_shirt 四十八小时内发货', price: 99.00, count: 1, desc: '1024， 白， L', imgUrl: '/assets/shops/clothing-pic02.png', selected: true }
    ],
    selectAll: true, // 是否全选标识
    totalPrice: 0, // 被选中商品的总价
    selectedCount: 0 // 被选中的商品数量
  },
  // 跳转到首页
  toIndexPage(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  // 取消选中某订单项
  unselectedOne(e){
    let shops = this.data.shopList;
    let shopindex = e.currentTarget.dataset.shopindex;
    shops[shopindex].selected = false;
    let totalPrice = this.data.totalPrice;
    // 如果总价大于等于该商品价格乘以数量，则总价 - 该商品价格 * 数量
    if (totalPrice >= shops[shopindex].price * shops[shopindex].count){
      totalPrice -= shops[shopindex].price * shops[shopindex].count;
    }
    let selectedCount = this.data.selectedCount;
    // 如果总选中项数量大于该项商品数量，则总选中项数量 - 该项商品数量
    if (selectedCount > shops[shopindex].count){
      selectedCount -= shops[shopindex].count;
    }
    this.setData({ shopList: shops, selectAll: false, totalPrice: totalPrice, selectedCount: selectedCount });
  }, 
  // 选中某订单项
  selectedOne(e){
    let shops = this.data.shopList;
    let shopindex = e.currentTarget.dataset.shopindex;
    shops[shopindex].selected = true;
    let totalPrice = this.data.totalPrice + shops[shopindex].price * shops[shopindex].count;
    let selectedCount = this.data.selectedCount + shops[shopindex].count;
    this.setData({ shopList: shops, totalPrice: totalPrice, selectedCount: selectedCount });
    // 检查是否有未被选中的商品，如果没有就设置selectAll为true
    for(let shop of shops){
      if(!shop.selected){
        return;
      }
    }
    this.setData({ selectAll: true });
  }, 
  // 全选按钮
  selectAll(){
    let shops = this.data.shopList;
    let totalPrice = 0;
    let selectedCount = 0;
    for(let shop of shops){
      shop.selected = true;
      totalPrice += shop.price * shop.count;
      selectedCount += shop.count;
    }
    this.setData({ shopList: shops, selectAll: true, selectedCount: selectedCount, totalPrice: totalPrice });
  }, 
  // 取消全选按钮
  unselectAll(){
    let shops = this.data.shopList;
    for(let shop of shops) {
      shop.selected = false;
    }
    this.setData({ shopList: shops, selectAll: false, selectedCount: 0, totalPrice: 0 });
  }, 
  // 该商品数量减一
  reduceOne(e){
    let shopList = this.data.shopList;
    let shopindex = e.currentTarget.dataset.shopindex;
    if (shopList[shopindex].count > 1){
      shopList[shopindex].count--;
      this.setData({ shopList: shopList });
      if (shopList[shopindex].selected && this.data.totalPrice >= shopList[shopindex].price && this.data.selectedCount>=shopList[shopindex].count){
        this.data.totalPrice -= shopList[shopindex].price;
        this.data.selectedCount--;
        this.setData({ totalPrice: this.data.totalPrice, selectedCount: this.data.selectedCount });
      }
    }else{
      wx.showToast({
        title: '最少购买一件商品哦',
        icon: 'none',
        duration: 1500
      });
    }
  },
  // 某件商品数量加一
  addOne(e){
    let shopList = this.data.shopList;
    let shopindex = e.currentTarget.dataset.shopindex;
    shopList[shopindex].count++;
    this.setData({ shopList: shopList });
    if (shopList[shopindex].selected){
      let totalPrice = this.data.totalPrice + shopList[shopindex].price;
      let selectedCount = ++this.data.selectedCount;
      this.setData({ totalPrice: totalPrice, selectedCount: selectedCount });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let shops = this.data.shopList;
    let totalPrice = 0;
    for(let shop of shops){
      totalPrice += shop.price;
    }
    this.setData({ totalPrice: totalPrice, selectedCount: shops.length });
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