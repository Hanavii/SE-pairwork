// pages/ai/ai.js
Page({

  data: {
      lists: [{},{},{}]    // 三个空行
  },
  result: function(options){
    wx.navigateTo({
      url: '../result/result', 
    }) },
  result1: function(options){
    wx.navigateTo({
      url: '../result1/result1', 
    }) },

})
