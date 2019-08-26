
var configs = require('../config/configs.js')
var apiConfig = require('../config/api-config.js')
var storageConfig = require('../config/storage-config.js')

/**
 * 构建接口请求url
 * @param  {string} path 接口地址
 * @return {string}      构建后的完整接口url
 */
function structureApiUrl(path) {
    var url = configs.api.protocol + '://' + configs.api.host + configs.api.basePath + path
    return url
}

/**
 * 通用调用接口方法
 * @param  {string} url             	接口url
 * @param  {object} data            	请求参数JS对象
 * @param  {string} method          	请求方法
 * @param  {function} successCallback 	请求成功回调
 * @return {void}
 */
function wxRequest(api, data, successCallback) {
    var app = getApp()

    var url = structureApiUrl(api.path);
    // 若url中包含 :id ，则用data中的id值替换，并且将id从data中删除
    if (url.indexOf(':id') > -1) {
        url = url.replace(':id', JSON.parse(JSON.stringify(data.id)));
        delete data.id;
    }

    var header = {};
    // 若token值已缓存（即用户已登录），则header自动添加token参数
    if (wx.getStorageSync(storageConfig.keys.token)) {
        header.token = wx.getStorageSync(storageConfig.keys.token)
        // TODO: 若不需要，可删掉
        url += '?api_token=' + header.token
    }

    wx.request({
        url: url,
        data: data,
        method: api.method,
        header: header,
        success: function(res) {
            if(res.data.error_code == apiConfig.errorCode.success) {
              console.log('success')
            } else {
              console.log('error')
            }

            // 若返回用户认证失败，则触发重新登录
            if (res.data.error_code == apiConfig.errorCode.authFail) {
                // 发送重新登录通知
                app.WxNotificationCenter.postNotificationName('NN_KEY_RELOGIN')

            } else if (res.data.error_code == apiConfig.errorCode.wxCodeFail) {
                // 如果微信wxCode失效，删除缓存的wxCode,触发重新登录
                 wx.removeStorageSync(storageConfig.keys.wxCode)
                 // 发送重新登录通知
                app.WxNotificationCenter.postNotificationName('NN_KEY_RELOGIN')

            } else {
                successCallback(res.data.error_code, res.data.error_msg, res.data.data)
            }
        },
        fail: function(res) {
           console.log('fail')
        }
    })
}

module.exports = {
    structureApiUrl: structureApiUrl,
    wxRequest: wxRequest
}
