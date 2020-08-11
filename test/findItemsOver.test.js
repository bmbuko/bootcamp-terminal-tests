let assert =require("assert");
let finfItemsOver =require("../findItemsOver");

describe(" the findItemsOver",function(){

    it("should find items over",function(){
        var treshold =20
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]

        assert.deepEqual([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}],finfItemsOver(itemList,treshold))
    })
})