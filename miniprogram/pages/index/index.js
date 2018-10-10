//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',


    movies: [
      { url: 'http://pazp3d0xt.bkt.clouddn.com/wechat-index-background.png' },
      { url: 'http://pazp3d0xt.bkt.clouddn.com/wechat-index-background.png' },
      { url: 'http://pazp3d0xt.bkt.clouddn.com/wechat-index-background.png' },
      { url: 'http://pazp3d0xt.bkt.clouddn.com/wechat-index-background.png' }
    ] 
  },
  
  onLoad: function () {
    // 页面渲染后 执行
  },  



  Menu(){
    wx.navigateTo({
      url: '../Menu/Menu',
    })
  },
  Order(){
    wx.navigateTo({
      url: '../Order/Order',
    })
  },
  ShoppingCart() {
    wx.navigateTo({
      url: '../ShoppingCart/ShoppingCart',
    })
  },
  Mine() {
    wx.navigateTo({
      url: '../Mine/Mine',
    })
  }
})

