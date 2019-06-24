//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    searchText: '搜索商品名称',
    shoppTypeList: [
      {
        value: 1,
        text: '推荐'
      },
      {
        value: 2,
        text: '手机'
      },
      {
        value: 3,
        text: '智能'
      },
      {
        value: 4,
        text: '电视'
      },
      {
        value: 5,
        text: '笔记本'
      },
      {
        value: 6,
        text: '家电'
      },
      {
        value: 7,
        text: '生活周边'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    duration: 3000,
    imgUrls: [
      "../../images/banner1.jpg",
      "../../images/banner2.jpg"
    ]
  }
})
