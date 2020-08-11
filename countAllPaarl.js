module.exports =function(list){
  
    var regNum = list.split(", ")
   
    var count = 0
    
    for  (var i = 0; i<regNum.length;i++){
      if(regNum[i].startsWith("CJ")){
        count++
      }
    }
      return count
  }