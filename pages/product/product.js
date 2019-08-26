//获取应用实例
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //测试获取产品列表
    // app.productModel.list('',function (retuanData){
    //   console.log(retuanData)
    // }, function (code, message) {
    //   console.log(code)
    //   console.log(message)
    // });

    //测试获取产品详情
    app.productModel.detail({id:47}, function (retuanData) {
      console.log(retuanData)
    }, function (code, message) {
      console.log(code)
      console.log(message)
    });
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