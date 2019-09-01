var navigate = require('../../utils/navigation-util.js')

const app = getApp();
Component({
  data: {
    activityBar: { activityBar: '2' },
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true
  },
  navigateToBar : function(e){
    navigate.navigateToBar(e);
  },
  attached() {
    let list = [];
    let supplierList = [];
    for (let i = 0; i < 26; i++) {
      list[i] = String.fromCharCode(65 + i)
      // supplierList[i] = {
      //   letter: String.fromCharCode(65 + i),
      //   list: [
      //     {
      //       letter: String.fromCharCode(65 + i),
      //       name: String.fromCharCode(65 + i) + '君',
      //       note: Math.random(1, 4)
      //     },
      //     {
      //       letter: String.fromCharCode(65 + i),
      //       name: String.fromCharCode(65 + i) + '君',
      //       note: Math.random(1, 4)
      //     }
      //   ]
      // }
    }
    var that = this;
    //测试获取产品列表
    app.supplierModel.list('', function (retuanData) {
      console.log('===========================')
        that.setData({
          supplierList: retuanData.data_list
        })
      },function(error){

      });

    this.setData({
      list: list,
      listCur: list[0]
    })
    console.log(supplierList)
    // let that = this;
    // wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function (res) {
    //   that.setData({
    //     boxTop: res.top
    //   })
    // }).exec();
    // wx.createSelectorQuery().select('.indexes').boundingClientRect(function (res) {
    //   that.setData({
    //     barTop: res.top
    //   })
    // }).exec()
  },
  methods: {
    //拨打电话
    tel: function (e) {
      var phone = e.target.dataset.phone;
      if(phone!=null && phone!=undefined && phone!=''){
        wx.makePhoneCall({
          phoneNumber: phone,
        })
      }
    },

    //获取文字信息
    getCur(e) {
      this.setData({
        hidden: false,
        listCur: this.data.list[e.target.id],
      })
    },

    setCur(e) {
      this.setData({
        hidden: true,
        listCur: this.data.listCur
      })
    },
    //滑动选择Item
    tMove(e) {
      let y = e.touches[0].clientY,
        offsettop = this.data.boxTop,
        that = this;
      //判断选择区域,只有在选择区才会生效
      if (y > offsettop) {
        let num = parseInt((y - offsettop) / 20);
        this.setData({
          listCur: that.data.list[num]
        })
      };
    },

    //触发全部开始选择
    tStart() {
      this.setData({
        hidden: false
      })
    },

    //触发结束选择
    tEnd() {
      this.setData({
        hidden: true,
        listCurID: this.data.listCur
      })
    },
    indexSelect(e) {
      let that = this;
      let barHeight = this.data.barHeight;
      let list = this.data.list;
      let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
      for (let i = 0; i < list.length; i++) {
        if (scrollY < i + 1) {
          that.setData({
            listCur: list[i],
            movableY: i * 20
          })
          return false
        }
      }
    }
  }
  
});