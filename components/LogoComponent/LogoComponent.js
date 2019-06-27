// components/LogoComponent/LogoComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    activeclass : '',
    logoShow:true
  },
  lifetimes:{
    attached(){
      let _this = this ;
      setTimeout(function(){
        _this.setData({
          activeclass : 'logo-enter-active'
        })
      },500)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    animationstart(){
      console.log('动画开始')
    },
    animationend(){
      console.log('动画结束')
      const _this = this ;
      if(this.activeclass=="logo-leave-active"){
        this.setData({
          logoShow : false
        })
      }
      setTimeout(function(){
        _this.setData({
          activeclass : 'logo-leave-active'
        })
      },2000)
    }
  }
})
