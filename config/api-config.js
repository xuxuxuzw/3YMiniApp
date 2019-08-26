
// 返回码
var errorCode = {
    success: 1,
    authFail: -402,
    wxAuthFail: 0, // 用户拒绝授权小程序
    wxCodeFail: -41008, // 微信登录code不正确
}

// 接口列表
// ==用户==
var user = {
    // 登录
    login: {
        path: '/login',
        method: 'POST',
        version: ''
    },
    // 获取用户信息
    detail: {
        path: '/users/:id',
        method: 'GET',
        version: ''
    },
}

//==产品==
var product = {
  //产品列表
  list : {
    path: '/product',
    method : 'GET',
    version : ''
  },
  //产品详情
  detail: {
    path: '/product/:id',
    method: 'GET',
    version: ''
  }
}

// ==公共==
var common = {
    // 图片上传
    uploadImage: {
        path: '/upload/image',
        method: 'POST',
        version: ''
    },
    // 收集formId
    collectFormId: {
        path: '/form_ids',
        method: 'POST',
        version: ''
    },
}

module.exports = {
    errorCode: errorCode,
    user: user,
    common: common,
    product:product
}
