//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    welcome: "奔跑吧！少年",
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../text/text'
    })
  },
  
  onLoad: function () {
    var that = this
    console.log('onLoad')
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    }),
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          console.log(res)
          var latitude = res.latitude
          var longitude = res.longitude
          var speed = res.speed
          var accuracy = res.accuracy
        }
      })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '劳动关系协调题98题',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
