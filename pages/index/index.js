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
    })
  }
})
