// pages/mine/mine.js
import  {tip}  from "../../utils/vant";
import $http from "../../utils/http";
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    openid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    Dialog.alert({
      message: '弹窗内容',
      theme: 'round-button',
    }).then(() => {
      this.getUserInfo()
    });
    wx.cloud.init()
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  getUserProfile(e) {
    // 推荐使用 wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.login({
      success (res) {
        console.log(res);
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://example.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      lang:'zh_CN',
      success: (res) => {
        console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(){
    console.log(22);
    wx.getUserProfile({
      desc: '用于完善用户信息',
      success: (res) => {
        console.log(222);
        console.log(res);
      },
      fail:(res)=>{
console.log(res);
      }
    })
  },

  getUserProfile2(e) {
    console.log(1);
    // tip('ceshi')
    // let _this=this
    $http.get("/api/user",{
      id:10000
    }).then(res=> {
      console.log(res);
    })
    // $http.get("/api/user/add",{
    //   wx_code:
    // }).then(res=> {
    //   console.log(res);
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
})