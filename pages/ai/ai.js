// pages/ai/ai.js
Page({

  data: {
      lists: [{},{},{}],  // 三个空行
      top: "../../images/11.jpg",
      btn: '.btnStart',
      texts:'摇一摇',
      flag: true,
      img:[
        "../../images/11.jpg",
        "../../images/22.jpg",
        "../../images/33.jpg",
        "../../images/44.jpg",
        "../../images/55.jpg",
        "../../images/66.jpg"
      ]
  },
  result: function(options){
    wx.navigateTo({
      url: '../result/result', 
    }) },
  result1: function(options){
    wx.navigateTo({
      url: '../result1/result1', 
    }) },
    click:function(){
      var self=this;
      if(this.data.flag){
       
        self.timer=setInterval(function(){
          var one = Math.floor(Math.random() * 6);
           self.setData({          
             top: self.data.img[one],
           })
        },200)
        self.setData({
          btn: ".btnEnd",
          texts: '停止',
          flag:false,
        })
        
      } else {
        clearInterval(self.timer);
     
        self.setData({
          btn: ".btnStart",
          texts: '摇一摇',
          flag: true,
     
     
        })
     
      }
}})
