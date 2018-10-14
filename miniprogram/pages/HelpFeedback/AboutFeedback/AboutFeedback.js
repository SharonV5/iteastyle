// miniprogram/pages/HelpFeedback/AboutFeedback/AboutFeedback.js
// import { $init, $digest } from '../../utils/common.util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentNoteLen: 0,          //输入的字数
    "value": "",   // 文本的内容
    "placeholder": "请填写问题描述以便我们提供更好的服务",
    "maxlength": 500,  // 最大输入长度，设置为 -1 的时候不限制最大长度
    "focus": true,
    "auto-height": true,  // 是否自动增高，设置auto-height时，style.height不生效
    "adjust-position": true, // 键盘弹起时，是否自动上推页面
    "show-confirm-bar": true, //是否显示键盘上方带有”完成“按钮那一栏(貌似这里没用？)
  },

  handleContentInput: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
  },
  handleContentInput(event) {
    var value = event.detail.value,
      len = parseInt(value.length);
    let that = this;
    this.setData({
      currentNoteLen: len
    });  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})