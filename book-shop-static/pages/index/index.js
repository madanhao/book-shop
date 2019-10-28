//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg: [ // 首页轮播图
      { imgSrc: '/assets/images/pIndex02.jpg' },
      { imgSrc: '/assets/images/pIndex03.jpg' }
    ],
    limitedShops:[ // 限时折扣商品
      { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91, oldPrice: 62.40},
      { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30, oldPrice: 99.00 },
      { bookName: '程序员的三门课：技术精进、架构修炼、管理探秘', imgUrl: '/assets/shops/limited01.jpg', price: 54.91, oldPrice: 62.40 },
      { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30, oldPrice: 99.00 }
    ],
    newBooks:[ // 新书速递
      { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
      { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
      { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
      { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 },
      { bookName: '5G NR标准：下一代无线通讯技术', imgUrl: '/assets/shops/limited04.jpg', price: 79.30 }
    ]
  },
  
  onLoad: function () {
    
  }
})
