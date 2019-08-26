/**
 * @Author: Kongho
 * @Date:   2017-05-12 10:36:52
 * @Email:  kongho@3ncto.com
 * @Filename: storage-config.js
 * @Last modified by:   Kongho
 * @Last modified time: 2019-02-27 20:03:24
 * @Copyright: 3NCTO Co., Ltd.
 */



var keys = {
    currentVersion: 'currentVersion', // 当前版本
    wxCode: 'wxCode', // wx.login() 返回的code
    token: 'token', // 用户登录token
    userId: 'userId', // 用户id
    unionid: 'unionid', // 用户unionid
    userInfo: 'userInfo', // 用户信息
    wxUserInfo: 'wxUserInfo', // 微信用户信息
}

module.exports = {
    keys: keys
}
