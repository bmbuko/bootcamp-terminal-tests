module.exports =function(itemList,treshold){
    //console.log(tres
    var itemsListOver  = []
    for (var i=0;i<itemList.length;i++){
  var listItem = itemList[i].qty;
      if (listItem > treshold){ 
        itemsListOver.push(itemList[i])
      }
    }
    return itemsListOver
  }