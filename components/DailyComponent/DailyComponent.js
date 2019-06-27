// components/DailyComponent/DailyComponent.js
import {findDailyBackground,baseURL} from '../../apis/index'
import {formatTime,getWeek} from '../../utils/util'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showDesc:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    dailystyle : '',
    baseURL:baseURL,
    imgURL : '',
    imgUrls: [],
    current:'',
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    activeClass : '',
    activeBar : '',
    activeDailyList : '',
    weeks:[],
    currentWeek:'',
    weeksDays:['S','M','T','W','T','F','S']
  },
  lifetimes : {
    attached(){
      let rs = getWeek(0);
      var weeks = this.data.weeks;
      weeks.unshift(rs);
      weeks.unshift(getWeek(-1))
      console.log(weeks)
      this.setData({
        weeks:weeks,
        currentWeek : 1
      })
      let _this = this
      wx.request({
        url:findDailyBackground,
        data:{
          from : rs[0],
          to : rs[rs.length-1]
        },
        success(resp){
          console.log(resp)
          _this.setData({
            imgUrls: resp.data.data,
            current: resp.data.data.length-1
          })
        }
      })
      setTimeout(function(){
        _this.setData({
          dailystyle:'opacity:1',
          activeClass : 'desc_transition desc_show'
        })
      },3000)
    }
  },
  observers:{
    dailystyle(newValue,oldValue){
      console.log('数据变化了',newValue)
      let _this = this 
      if(newValue=="opacity:1"){
        this.triggerEvent('showMaskView')
      }
    },
    showDesc(newValue){
      console.log('showDesc发生变化了')
      if(newValue){
        this.setData({
          activeClass:'desc_transition',
          activeBar : 'bar_transition bar_show'
        })
      }else{
        this.setData({
          activeClass:'desc_transition desc_show',
          activeBar : 'bar_transition '
        })
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    closeDaily(){
      console.log('ss');
      this.triggerEvent("showMaskView");
      this.setData({
        showDesc:false
      })
    },
    showDailyList(){
      console.log('展示日历')
      this.setData({
        activeDailyList : 'activeDailyList_transition activeDailyList_show'
      })
    },
    closeDailyList(){
      console.log('关闭日历列表');
      this.setData({
        activeDailyList: 'activeDailyList_transition'
      })
    },
    changeCurrent(ev){
      console.log(ev)
      
      this.setData({
        current : ev.target.dataset.index
      })
    },
    currentchagne(ev){
      this.setData({
        current : ev.detail.current
      })
    },
    currentDailyChange(ev){
      console.log(ev)
      if(ev.detail.current != 0){
        return
      }else{
        var weeks = this.data.weeks;
        weeks.unshift(getWeek(-weeks.length))
        console.log(weeks)
        this.setData({
          weeks:weeks,
          currentWeek:ev.detail.current+1
        })
      }
    }
  }
})
