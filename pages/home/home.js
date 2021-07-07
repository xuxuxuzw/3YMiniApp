var navigate = require('../../utils/navigation-util.js')

//获取应用实例
var app = getApp()

Component({
  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    DotStyle:1,
    productList: [],
    swiperList: [],
    activityBar: { activityBar: '0' },
    CustomBar: app.globalData.CustomBar,
  },
  attached() {
    console.log(11);
    this.towerSwiper('swiperList');
    var that = this;
    //测试获取产品列表
    var productList = [];
    app.productModel.list('', function (retuanData){
      var list = retuanData.data_list;
      console.log(list)
      list.forEach(function (item, index) {
        console.log(item)
        productList.push({
          id: item.id,
          url: item.image,
          sku: item.sku,
          sku_value: item.sku_value,
          name: item.name,
          labels_name: item.labels_name,
          labels_id: item.labels_id
        })
      });
      that.setData({
        productList: productList
      })
    });

    var swiperList = [];
    app.productModel.swiper('', function (retuanData) {
      var list = retuanData.data_list;
      list.forEach(function (item, index) {
        if (item.image != null) {
          swiperList.push({
            id: item.id,
            type: 'image',
            url: 'http://3y.xuzhaowen.cn' + item.image,
            sku: item.sku,
            name: item.name
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
  methods: {
    clickMe(e) {
      wx.showToast({ title: e.currentTarget.dataset.name, icon: "none", duration: 100000 })
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
  }
  
})