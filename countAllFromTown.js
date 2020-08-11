module.exports=function(list, regs){
  
    var regsNum = list.split(",")
    
    
    var count = 0
    
  
       for(var i = 0;i<regsNum.length;i++){
         if(regsNum[i].trim().startsWith(regs)){
             count++
         
         }
       }
    return count
  }