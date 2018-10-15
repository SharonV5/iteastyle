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
    evalList: [{ tempFilePaths: [], imgList: [] }],
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

  //添加图片
  joinPicture: function (e) {
    var index = e.currentTarget.dataset.index;
    var evalList = this.data.evalList;
    var that = this;
    var imgNumber = evalList[index].tempFilePaths;
    if (imgNumber.length >= 3) {
      wx.showModal({
        title: '',
        content: '最多上传三张图片',
        showCancel: false,
      })
      return;
    }
    wx.showActionSheet({
      itemList: ["从相册中选择", "拍照"],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage("album", imgNumber);
          } else if (res.tapIndex == 1) {
            that.chooseWxImage("camera", imgNumber);
          }
        }
      }
    })
  },
  chooseWxImage: function (type, list) {
    var img = list;
    var len = img.length;
    var that = this;
    var evalList = this.data.evalList;
    wx.chooseImage({
      count: 3,
      sizeType: ["original", "compressed"],
      sourceType: [type],
      success: function (res) {
        var addImg = res.tempFilePaths;
        var addLen = addImg.length;
        if ((len + addLen) > 3) {
          for (var i = 0; i < (addLen - len); i++) {
            var str = {};
            str.pic = addImg[i];
            img.push(str);
          }
        } else {
          for (var j = 0; j < addLen; j++) {
            var str = {};
            str.pic = addImg[j];
            img.push(str);
          }
        }
        that.setData({
          evalList: evalList
        })
        that.upLoadImg(img);
      },
    })
  },
  upLoadImg: function (list) {
    var that = this;
    this.upload(that, list);
  },
  //多张图片上传
  upload: function (page, path) {
    var that = this;
    var curImgList = [];
    for (var i = 0; i < path.length; i++) {
      wx.showToast({
        icon: "loading",
        title: "正在上传"
      }),
        wx.uploadFile({
          url: app.globalData.subDomain + '/API/AppletApi.aspx',//接口处理在下面有写
          filePath: path[i].pic,
          name: 'file',
          header: { "Content-Type": "multipart/form-data" },
          formData: {
            douploadpic: '1'
          },
          success: function (res) {
            curImgList.push(res.data);
            var evalList = that.data.evalList;
            evalList[0].imgList = curImgList;
            that.setData({
              evalList: evalList
            })
            if (res.statusCode != 200) {
              wx.showModal({
                title: '提示',
                content: '上传失败',
                showCancel: false
              })
              return;
            }
            var data = res.data
            page.setData({  //上传成功修改显示头像
              src: path[0]
            })
          },
          fail: function (e) {
            wx.showModal({
              title: '提示',
              content: '上传失败',
              showCancel: false
            })
          },
          complete: function () {
            wx.hideToast();  //隐藏Toast
          }
        })
    }
  },
  //删除图片
  clearImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var evalList = this.data.evalList;
    var img = evalList[0].tempFilePaths;
    img.splice(index, 1);
    this.setData({
      evalList: evalList
    })
    this.upLoadImg(img);
  },
  //提交发布
  submitClick: function (e) {
    var evalList = that.data.evalList;
    var imgList = evalList[0].imgList;
    var imgPort = "";//图片地址，多张以逗号分割
    if (imgList.length != 0) {
      for (var j = 0; j < imgList.length; j++) {
        imgPort = imgList[j] + "," + imgPort;
      }
    } else {
      imgPort = "";
    }
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