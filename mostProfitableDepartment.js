module.exports=function(salesData){
    var mostSales = 0;
    var mostProfitableDep = '';
   
    for(var i = 0; i < salesData.length; i++){
      var department = salesData[i].department;
      var sales = salesData[i].sales;
      
      if(sales > mostSales){
      mostSales = sales;
      mostProfitableDep = department;    
      }    
    }
    //  console.log(mostProfitableDep)
    return mostProfitableDep
}  