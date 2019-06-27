exports.formatTime = currentDate => {
  const date = new Date(currentDate)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-')
}

exports.getWeek = function(num){
  const currentDate = Date.now()
  const currentDay = new Date().getDay()
  let myNum = num?num*7:0;
  return Array.from(new Array(7)).map((item,index)=>{
    const ms =  (index-currentDay+myNum)*1000*60*60*24
    const date = new Date(currentDate+ms)
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
  }) 
}