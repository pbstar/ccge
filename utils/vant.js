import Toast from '@vant/weapp/toast/toast';
function tip(type,text){
  if(type&&text){
    if(type=='success'){
      Toast.success(text);
    }else if(type=='error'){
      Toast.fail(text);
    }else if(type=='loading'){
      Toast.loading({
        message: text,
        forbidClick: true,
      });
    }else if(type=='loadingPermanent'){
      Toast.loading({
        duration: 0,
        forbidClick: true,
        message: text,
      });
    }
  } else{
    Toast(type||text);
  }
}
function tipclear(){
  Toast.clear();
}
module.exports = {
  tip,
  tipclear
};