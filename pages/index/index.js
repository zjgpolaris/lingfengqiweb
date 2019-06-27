//index.js
//获取应用实例
const app = getApp()

import {findDailyBackground,baseURL} from '../../apis/index'
Page({
  data:{
    dailyBackgrounds:[],
    baseURL:baseURL,
    isShowMask:false,
    showDesc:false
  },
  showMaskView(){
    this.setData({
      isShowMask : true
    })
  },
  hideMaskView(){
    this.setData({
      isShowMask: false,
      showDesc: true
    })
  },
  onLoad(){

  }
})
