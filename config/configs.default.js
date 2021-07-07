// 当前小程序是否为发布状态，默认为false，打包发布版本时需替换为true
var isProduct = false;

// API请求配置
var apiConfig = {
  // 开发环境
  develop: {
    protocol: 'http', // 请求协议
    host: 'admin.3y.com', // 请求域名
    basePath: '/MiniApp', // 基础路径
  },
  // 正式环境
  product: {
    protocol: 'http', // 请求协议
    host: '3y-grey.xuzhaowen.cn', // 请求域名
    basePath: '/MiniApp', // 基础路径
  }
}

// 当前使用的API请求配置
var api = isProduct ? apiConfig.product : apiConfig.develop;

// 小程序名称
var appName = '3Y微信小程序';

// 当前版本
var currentVersion = '1.0.0';

// 调试模式开关
var debug = !isProduct ? true : false;
// 显示调试日志
var displayLog = !isProduct ? true : false;

// 基础库版本要求
var baseSdkVersion = '1.2.0';

// 正常使用小程序所需要的授权，若无要求，可设置为空数组
var needsAuthList = [
  'scope.userInfo', // 用户信息
  'scope.userLocation', // 地理位置
];

module.exports = {
  api: api,
  appName: appName,
  currentVersion: currentVersion,
  debug: debug,
  displayLog: displayLog,
  baseSdkVersion: baseSdkVersion,
  needsAuthList: needsAuthList
}
