//获取应用实例
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    DotStyle:1,
    swiperList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.towerSwiper('swiperList');
    var that =this;
    //测试获取产品列表
    var swiperList=[];
    app.productModel.swiper('',function (retuanData){
      var list = retuanData.data_list;
      list.forEach(function(item,index){
        if (item.image!=null){
          swiperList.push({
            id : item.id,
            type : 'image',
            url : 'http://3y.xuzhaowen.cn'+item.image,
            sku : item.sku,
            name : item.name
          })
        }
      });
      that.setData({
        swiperList: swiperList
      })
      console.log(swiperList)
    }, function (code, message) {
      console.log(code)
      console.log(message)
    });

    //测试获取产品详情
    // app.productModel.detail({id:47}, function (retuanData) {
    //   console.log(retuanData)
    // }, function (code, message) {
    //   console.log(code)
    //   console.log(message)
    // });
  },
  
  // cardSwiper
  cardSwiper(e) {
    //轮播图切换事件
    console.log(e.detail.current)
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
})