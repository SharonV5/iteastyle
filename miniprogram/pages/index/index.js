//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
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
