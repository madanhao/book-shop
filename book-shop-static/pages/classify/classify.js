
// 调用全局唯一app实例，获取 globalData
let globalData = getApp().globalData;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    menu:[ // 菜单
      { name:'优惠', selected: 0, shops:[
        { id:'a01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', discount: 8.8, limited: 2, price: 54.91, oldPrice: 62.40 },
        { id: 'a02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', discount: 8.8, limited: 2, price: 79.30, oldPrice: 99.00 },
        { id: 'a03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', discount: 8.8, limited: 2, price: 54.91, oldPrice: 62.40 }
      ]},
      { name: 'Python', selected: 0, shops: [
        { id: 'b01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'b02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'b03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg',price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: 'JAVA', selected: 0, shops: [
        { id: 'c01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'c02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'c03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '人工智能', selected: 0, shops: [
        { id: 'd01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'd02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'd03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '大数据', selected: 0, shops: [
        { id: 'e01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'e02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'e03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'e04', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: 'Android', selected: 0, shops: [
        { id: 'f01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'f02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'f03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'f04', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '编程', selected: 0, shops: [
        { id: 'g01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'g02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'g03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'g04', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '软件开发', selected: 0, shops: [
        { id: 'h01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'h02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'h03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'h04', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '产品运营', selected: 0, shops: [
        { id: 'i01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'i02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'i03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'i04', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: 'UI设计', selected: 0, shops: [
        { id: 'j01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'j02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'j03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'j04', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '人文心理', selected: 0, shops: [
        { id: 'k01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'k02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'k03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'k04', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '经济管理', selected: 0, shops: [
        { id: 'l01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'l02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'l03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'l04', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
      { name: '科技', selected: 0, shops: [
        { id: 'm01', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'm02', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
        { id: 'm03', bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91 },
        { id: 'm04', bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
      ] },
    ],
    currIndex: 0, // 当前选中的菜单索引
    scrollIndex: 0,
    heightArr: [], // 右边商品每个分类的view的高度
  },
  // 选中菜单按钮事件
  selectedMenu(e){
    // 获取点击菜单的索引
    let index = e.currentTarget.dataset.currindex;
    this.setData({
      currIndex: index
    });
  },
  // 右侧商品滚动事件
  scrollHandle(e){
    let scrollIndex = this.computedScroll(e.detail.scrollTop);
    this.setData({ scrollIndex: scrollIndex });
  },
  // 计算右侧视图位置
  computedScroll(scrollTop){
    let scrollArr = this.data.heightArr;
    let result = -1;
    for (let i in scrollArr) {
      if(scrollTop>0 && scrollTop<scrollArr[0]){ // 如果滚动高度小于第一个view，则返回0
        result = 0;
      }
      if(scrollTop > scrollArr[scrollArr.length-1]){ // 如果滚动高度大于总高度，就返回最大的索引
        result = scrollArr.length - 1;
      }
      let x = Number.parseInt(i) + 1;
      if (scrollTop > scrollArr[i] && scrollTop < scrollArr[x]) { // 如果高度介于i和i+1之间，返回i+1
        result = x;
      }
    }
    if(result === -1){ // 其他高度情况均视为0
      return 0;
    }else{
      return result;
    }
  },
  // 跳转到profile页面（我的）
  toProfilePage(){
    wx.switchTab({
      url: '/pages/profile/profile',
    })
  },
  // 跳转到首页
  toIndexPage(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  // 点击红色添加按钮，添加商品到购物车
  addShop(e){
    let dSet = e.currentTarget.dataset;
    let currShop = this.data.menu[dSet.menuindex].shops[dSet.shopindex];
    // 该分类加一
    this.data.menu[dSet.menuindex].selected++;
    // 该分类的该商品加一
    if(!currShop.scount || currShop.scount < 1){
      currShop.scount = 1;
    }else{
      currShop.scount++;
    }
    this.setData({ menu: this.data.menu });
    // 校验购物车中是否有这件商品
    this.checkAddCartItem(currShop);
  },
  // 点击减号减少一件商品
  delShop(e){
    let dSet = e.currentTarget.dataset;
    let currShop = this.data.menu[dSet.menuindex].shops[dSet.shopindex];
    // 该分类商品减一
    if (this.data.menu[dSet.menuindex].selected > 0) {
      this.data.menu[dSet.menuindex].selected--;
    }
    // 该分类的该商品数量减一
    if (currShop.scount && currShop.scount > 0) {
      currShop.scount--;
    }
    this.setData({ menu: this.data.menu });
    // 购物车的该商品数量减一
    this.checkDelCartItem(currShop);
  },
  // 校验购物车中是否已有currShop，有返回true，并且currShop在购物车中的count加一；
  // 没有返回false,并且把这件商品放到购物车中，count为1
  checkAddCartItem(currShop){
    // cartItem为对象{count:'商品数量', shop: '商品对象'}
    if (globalData.cart && globalData.cart.length > 0) {
      for (let cartItem of globalData.cart) {
        // 如果购物车中已经有这件商品，则count加一
        if (cartItem.shop.id === currShop.id) {
          cartItem.count++;
          return true;
        }
      }
      globalData.cart.push({ count: 1, shop: currShop });
      return false;
    }else{
      globalData.cart = [];
      globalData.cart.push({ count: 1, shop: currShop });
      return false;
    }
  },
  // 校验购物车中是否已有currShop，有返回true，并且currShop在购物车中的count减一，没有返回false
  checkDelCartItem(currShop) {
    if (globalData.cart && globalData.cart.length > 0) {
      for (let index in globalData.cart) {
        // 如果购物车中已经有这件商品，则count减一
        if (globalData.cart[index].shop.id === currShop.id && globalData.cart[index].count > 0) {
          if (--globalData.cart[index].count < 1) {
            globalData.cart.splice(index, 1);
          }
          return true;
        }
      }
      return false;
    }
    return false;
  },
  // 跳转到搜索页面
  toSearchPage(){
    wx.navigateTo({
      url: '/pages/total-classify/total-classify'
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
  onReady() {
    let h = 0;
    let heightArr = [];
    const query = wx.createSelectorQuery();
    query.selectAll('.classify-book').boundingClientRect();
    query.exec(res => {
      res[0].forEach(item => {
        h += item.height;
        heightArr.push(h);
      });
      this.setData({ heightArr: heightArr });
    });
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