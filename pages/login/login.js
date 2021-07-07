//获取应用实例
var app = getApp()
var navigate = require('../../utils/navigation-util.js')
var storageConfig = require('../../config/storage-config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {},
    isSaveEnable: true,
    sendCodeTitle: '获取验证码', // 获取验证码显示标题
    isSend: false, // 是否正在获取验证码
    isClickSend: false, // 是否点击验证码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //测试获取产品列表
  var params = {
    name : 'xzw',
    password : '123456'
  };
  //删除token
    wx.removeStorageSync(storageConfig.keys.token);
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

  },


  // 输入框输入
  bindInput: function (e) {
    var that = this;
    var key = e.target.dataset.key;
    var value = e.detail.value;
    console.log(e.detail.value)
    var formData = that.data.formData;
    formData[key] = value;
    that.setData({
      formData: formData
    })
  },
  // 登录
  bindSubmit: function (e) {
    const formData = e.detail.value

    this.setData({
      formData: formData
    })
    this.commitSave();
  },
  // 登录提交数据
  commitSave: function () {
     var that = this;
    app.userModel.login(that.data.formData, function (retuanData) {
      console.log(retuanData)
      var e={
        currentTarget:{
          dataset:{
            url: '/pages/index/index'
          }
        }
      };
      navigate.navigateToBar(e);

    }, function (code, message) {
      console.log(code)
      console.log(message)
    });
  },
})