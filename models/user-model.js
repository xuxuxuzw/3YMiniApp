var apiConfig = require('../config/api-config.js')
var storageConfig = require('../config/storage-config.js')
var requester = require('../utils/api-util.js')

// 用户登录
function login(params, successCallback, failCallback) {
  var api = apiConfig.user.login;
  
  requester.wxRequest(api, params, function (code, message, data) {
    if (code == apiConfig.errorCode.success) {
      // 缓存token
      wx.setStorageSync(storageConfig.keys.token, data.token);
      
      successCallback(data);
    } else {
      failCallback(code, message);
    }
  })
}

module.exports = {
  login: login
}
