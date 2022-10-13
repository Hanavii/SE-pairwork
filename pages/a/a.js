Page({


data: {
  top: "../../images/11.jpg",
  total: '',
  left: "../../images/22.jpg",
  right:"../../images/33.jpg",
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

/**
 * 生命周期函数--监听页面加载
 */
click:function(){
 var self=this;
 if(this.data.flag){
  
   self.timer=setInterval(function(){
     var one = Math.floor(Math.random() * 6);
     var two = Math.floor(Math.random() * 6);
     var three = Math.floor(Math.random() * 6);
      self.setData({          
        top: self.data.img[one],
        left: self.data.img[two],
        right: self.data.img[three],
        total:one+two+three+3,
        
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
 
},})
