import  {tip,tipclear}  from "./vant";
const get = (url,data) =>{
  return new Promise((resolve, reject) => {
    tip('loadingPermanent','加载中...');
    wx.cloud.callContainer({
      "config": {
        "env": "prod-2gddy50v0b11cff5"
      },
      "path": url,
      "header": {
        "X-WX-SERVICE": "express-ktf9",
        "content-type": "application/json"
      },
      "method": "GET",
      "data": data,
      success (res) {
        if(res.statusCode === 200){
            resolve(res.data);
            tipclear()
        }else{
          tip('error',res.errMsg);
        };
      },
      fail (res) {
        tip('error','网络开小差了');
        reject(res);
      }
    })
  })
};
const post = (url,data) =>{
  return new Promise((resolve, reject) => {
    tip('loadingPermanent','加载中...');
    wx.cloud.callContainer({
      "config": {
        "env": "prod-2gddy50v0b11cff5"
      },
      "path": url,
      "header": {
        "X-WX-SERVICE": "express-ktf9",
        "content-type": "application/json"
      },
      "method": "POST",
      "data": data,
      success (res) {
        if(res.statusCode === 200){
            resolve(res.data);
            tipclear()
        }else{
          tip('error',res.errMsg);
        };
      },
      fail (res) {
        tip('error','网络开小差了');
        reject(res);
      }
    })
  })
};

module.exports = {
  post,get
};
