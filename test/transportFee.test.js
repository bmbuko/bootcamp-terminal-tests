let assert =require("assert");
let transportfee = require("../transportFee");
const { isMainThread } = require("worker_threads");

describe(" The transportFee",function(){
it("should be R20 for morning shift",function(){
});
    assert.equal("R20",transportfee("morning"));
    it("should be R10 for  afternoon shift",function(){
        assert.equal("R10",transportfee("afternoon"));

})
it("should be free for the night shift",function(){
    assert.equal("free",transportfee("free"))
})
});