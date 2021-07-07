/**
 * 初始化列表信息
 * @return {Object} listInfo对象
 */
function initListInfo() {
  return {
    list: [], // 列表数据
    pageNo: 1, // 当前页码
    pageSize: 10, // 每页加载数据
    total: 0, // 列表总数
    isNoData: false, // 是否无列表数据
    isNoMoreData: false, // 是否无更多列表数据
  }
}

module.exports = {
  initListInfo: initListInfo
}