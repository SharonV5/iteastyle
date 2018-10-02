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
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ] 
  },
  
  // onLoad: function () {
  // },  

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

