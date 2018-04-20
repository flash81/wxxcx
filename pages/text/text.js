//text.js
var util = require('../../utils/util.js')
var root = getApp()

Page({
  data: {
    data: {
      'title': 'aaaa', 'content': '（一）调查用人单位劳动标准实施情况的主要方法：1、问卷法；2、访谈法；3、观察法；4、关键事件法。      （二）分析用人单位劳动标准实施情况的主要方法：      1、计划标准；2、强制性标准；3、空间标准。'},
    modalHidden: true,
  },
  onLoad: function () {
    var that = this
    console.log("onLoad news")
    wx.request({
      url: 'http://39.108.9.16:20022',
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
    this.setData({
      modalHidden: false
    })
  },
  modalHide: function (e) {
    wx.redirectTo({
      url: '../text/text'
    })
  }
})
