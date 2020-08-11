let assert = require("assert");
let yearsAgo = require("../yearsAgo");


    describe("yearsAgo",function(){
        it("should  say how many years that was",function(){
            
            var year =1976
            assert.equal("44",yearsAgo(year))
        });
    })
