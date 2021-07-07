var apiConfig = require('../config/api-config.js')
var storageConfig = require('../config/storage-config.js')
var requester = require('../utils/api-util.js')

// 获取供应商列表
function list(params, successCallback, failCallback) {
  var api = apiConfig.supplier.list;

  var params = {}
  requester.wxRequest(api, params, function (code, message, data) {
    if (code == apiConfig.errorCode.success) {
      successCallback(data);
    } else {
      failCallback(code, message);
    }
  })
}

// 获取供应商详情
function detail(params, successCallback, failCallback) {
  var api = apiConfig.supplier.detail;
  
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
  detail: detail
}
