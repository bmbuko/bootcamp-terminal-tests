let assert = require("assert");
let findItemsOver20 =require("../findItemsOver20");

describe( "The finditemsOver20 function",function(){
    it("should find items with qty over 20",function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}],findItemsOver20(itemList))

    })
});
       