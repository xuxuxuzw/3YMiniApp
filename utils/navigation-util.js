function navigateToBar(e){
  console.log(e.currentTarget.dataset.url)
  var url = e.currentTarget.dataset.url;
  wx.navigateTo({
    url: url,
  })
}
module.exports = {
  navigateToBar: navigateToBar,
}
