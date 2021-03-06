// pages/select-address/select-address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addresses: [ // 收货地址集合
      { id: 'a01', name: '尼古拉斯凯奇', phone: '14589898989', address: '北京市西城区南宁路567弄6号楼601室', selected: false },
      { id: 'a02', name: '呵呵哒', phone: '14589898989', address: '上海市松江区新桥镇雅鹿苑49号楼1604', selected: true },
      { id: 'a03', name: '尼古拉斯凯奇', phone: '14589898989', address: '北京市西城区南宁路567弄6号楼601室', selected: false },
      { id: 'a04', name: '呵呵哒', phone: '14589898989', address: '上海市松江区新桥镇雅鹿苑49号楼1604', selected: false },
      { id: 'a05', name: '尼古拉斯凯奇', phone: '14589898989', address: '北京市西城区南宁路567弄6号楼601室', selected: false },
      { id: 'a06', name: '呵呵哒', phone: '14589898989', address: '上海市松江区新桥镇雅鹿苑49号楼1604', selected: false },
      { id: 'a07', name: '尼古拉斯凯奇', phone: '14589898989', address: '北京市西城区南宁路567弄6号楼601室', selected: false },
      { id: 'a08', name: '呵呵哒', phone: '14589898989', address: '上海市松江区新桥镇雅鹿苑49号楼1604', selected: false },
      { id: 'a09', name: '尼古拉斯凯奇', phone: '14589898989', address: '北京市西城区南宁路567弄6号楼601室', selected: false },
      { id: 'a10', name: '呵呵哒', phone: '14589898989', address: '上海市松江区新桥镇雅鹿苑49号楼1604', selected: false }
    ]
  },
  // 修改某个地址
  editAddress(e){
    let addrindex = e.currentTarget.dataset.addrindex;
    let id = this.data.addresses[addrindex].id;
    wx.navigateTo({
      url: '/pages/edit-address/edit-address?id='+id
    })
  },
  // 选中当前地址
  selectedAddr(e){
    console.log(e.currentTarget.dataset.sindex)
    wx.navigateTo({
      url: '/pages/order-confirm/order-confirm'
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