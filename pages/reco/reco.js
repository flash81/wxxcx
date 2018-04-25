// pages/reco/reco.js
var util = require('../../utils/util.js')
var root = getApp()

Page({
  data: {
    data: {},
    modalHidden: true,
    modalContent: {}
  },
  onLoad: function () {
    var that = this
    console.log("onLoad news")
    wx.request({
      url: 'http://39.108.9.16:20022/site/reco',
      data: 'pageSize=1&pageNum=10',    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          data: res.data
        })
      }

    })
  },
  modalTap: function (e) {
    var self = this
    this.setData({
      modalContent: self.data.data[Number(e.currentTarget.dataset.index)],
      modalHidden: false
    })
  },
  modalHide: function (e) {
    this.setData({
      modalHidden: true
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
