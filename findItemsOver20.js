module.exports= function(itemList){
    var itemsListOver20 = []
    
    for (var i=0;i<itemList.length;i++){
     // console.log(itemList)
     var listItem = itemList[i].qty;
     
      if (listItem >20){ 
        itemsListOver20.push(itemList[i])
      }
    }
    return itemsListOver20;
}