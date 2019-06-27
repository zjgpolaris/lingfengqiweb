// components/MaskComponent/MaskComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes : {
    attached(){
      let _this = this 
      setTimeout(() => {
        console.log('设置class')
        _this.setData({
          activeClass : "mask_transition mask_show"
        })
      }, 800);
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    activeClass : ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeMask(){
      this.setData({
        activeClass : 'mask_transition'
      })
    },
    transitionend(){
      console.log('transition结束');
      if(this.data.activeClass=="mask_transition"){
        this.triggerEvent("hideMaskView")
    }
    }
  }
})
