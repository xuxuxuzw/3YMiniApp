var apiConfig = require('../config/api-config.js')
var storageConfig = require('../config/storage-config.js')
var requester = require('../utils/api-util.js')

// 获取产品列表
function list(params, successCallback, failCallback) {
  var api = apiConfig.product.list;

  var params = {}
  requester.wxRequest(api, params, function (code, message, data) {
    if (code == apiConfig.errorCode.success) {
      successCallback(data);
    } else {
      failCallback(code, message);
    }
  })
}

// 获取产品详情
function detail(params, successCallback, failCallback) {
  var api = apiConfig.product.detail;
  
  requester.wxRequest(api, params, function (code, message, data) {
    if (code == apiConfig.errorCode.success) {
      successCallback(data);
    } else {
      failCallback(code, message);
    }
  })
}

// 获取最近五个产品-轮播图
function swiper(params, successCallback, failCallback) {
  var api = apiConfig.product.swiper;
  
  requester.wxRequest(api, params, function (code, message, data) {
    if (code == apiConfig.errorCode.success) {
      successCallback(data);
    } else {
      failCallback(code, message);
    }
  })
}

module.exports = {
  list: list,
  detail: detail,
  swiper: swiper,
}
