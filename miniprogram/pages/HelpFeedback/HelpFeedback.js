// miniprogram/pages/HelpFeedback/HelpFeedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  AboutShopping() {
    wx.navigateTo({
      url: './AboutShopping/AboutShopping',
    })
  },
  AboutDistribution() {
    wx.navigateTo({
      url: './AboutDistribution/AboutDistribution',
    })
  },
  AboutCommodity() {
    wx.navigateTo({
      url: './AboutCommodity/AboutCommodity',
    })
  },
  AboutInvoice() {
    wx.navigateTo({
      url: './AboutInvoice/AboutInvoice',
    })
  },
  AboutCooperation() {
    wx.navigateTo({
      url: './AboutCooperation/AboutCooperation',
    })
  },
  AboutFeedback() {
    wx.navigateTo({
      url: './AboutFeedback/AboutFeedback',
    })
  },
  AboutUs() {
    wx.navigateTo({
      url: './AboutUs/AboutUs',
    })
  }
})