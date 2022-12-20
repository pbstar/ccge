// app.js
import $storage from "./utils/storage";
import $http from "./utils/http";
import Dialog from '@vant/weapp/dialog/dialog';
App({
  onLaunch() {
    
    
    let user_id=$storage.get('user_id')
    if(user_id){
      console.log(user_id);
    }else{
      // $http.get("/api/wx_openid").then(res=> {
      //   console.log(res);
      // })
    }
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
})
