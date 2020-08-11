let assert = require("assert");
let fromWhere =require("../fromWhere");
describe("The fromWhere function",function(){
    it("should  return Bellville for CY regNumber",function(){
        assert.equal("Bellville",fromWhere("CY"));
    })
    it("should return Paarl for CJ regNumber",function(){
        assert.equal("Paarl",fromWhere("CJ"));
    })
    it("should return Cape town",function(){
        assert.equal("Cape Town",fromWhere("CA"));
    })
    it("should return some other place is reg is from gauteng",function(){
        assert.equal("Some other place!",fromWhere("Some other place!"))
    })
})