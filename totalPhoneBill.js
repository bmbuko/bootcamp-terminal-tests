module.exports=function(phoneBill){
  
    var phoneBill2 = phoneBill.split(', ')
   
    var total = 0 ;
   
    for (var i =  0;i<phoneBill2.length;i++){
      if(phoneBill2[i].startsWith('c')){
        total += 2.75
      }
        else if(phoneBill2[i].trim().startsWith('s')){
                total += 0.65
                }
                }
                return 'R'+ total.toFixed(2)
                }
           