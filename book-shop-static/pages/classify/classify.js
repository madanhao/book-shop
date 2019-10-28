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